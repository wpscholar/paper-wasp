<?php

/**
 * Class PaperWaspUtilities
 */
class PaperWaspUtilities {

	/**
	 * Get PaperWasp components for a specific post.
	 *
	 * @param WP_Post $post
	 *
	 * @return array
	 */
	public static function getComponents( WP_Post $post ) {
		$components = array_filter( (array) get_post_meta( $post->ID, '_paper_wasp_components', true ) );
		$components = apply_filters( 'paper_wasp_get_components', $components, $post );
		$components = self::sanitizeComponents( $components );

		return $components;
	}

	/**
	 * Set PaperWasp components for a specific post.
	 *
	 * @param WP_Post $post
	 * @param array $components
	 *
	 * @return bool
	 */
	public static function setComponents( WP_Post $post, array $components ) {
		$components = apply_filters( 'paper_wasp_set_components', $components, $post );

		// Sanitization of components is automatic due to register_meta() - callback is sanitizeComponents
		return (bool) update_post_meta( $post->ID, '_paper_wasp_components', $components );
	}

	/**
	 * Sanitize one or more HTML class names
	 *
	 * @param string $classNames
	 *
	 * @return string
	 */
	public static function sanitizeClassNames( $classNames ) {
		return implode( ' ', array_map( 'sanitize_html_class', explode( ' ', $classNames ) ) );
	}

	/**
	 * Sanitize a collection of components
	 *
	 * @param array $components
	 *
	 * @return array
	 */
	public static function sanitizeComponents( array $components ) {
		return array_map( array( __CLASS__, 'sanitizeComponent' ), $components );
	}

	/**
	 * Sanitize component
	 *
	 * @param stdClass|array $component
	 *
	 * @return object
	 */
	public static function sanitizeComponent( $component ) {

		$cleanComponent = (object) array(
			// Unique (per page) component id
			'uid'    => absint( self::getValue( $component, 'uid' ) ),
			// Component type
			'type'   => sanitize_text_field( self::getValue( $component, 'type' ) ),
			// Parent uid
			'parent' => absint( self::getValue( $component, 'parent' ) ),
			// Index for ordering siblings
			'index'  => absint( self::getValue( $component, 'index' ) ),
			// Object for holding component-specific data
			'data'   => self::sanitizeComponentData( self::getValue( $component, 'data', new stdClass() ) ),
		);

		// CSS class
		$className = self::sanitizeClassNames( self::getValue( $component, 'className', '' ) );
		if ( $className ) {
			$cleanComponent->className = $className;
		}

		// CSS id
		$id = sanitize_html_class( self::getValue( $component, 'id' ) );
		if ( $id ) {
			$cleanComponent->id = $id;
		}

		// Custom component label
		$label = sanitize_text_field( self::getValue( $component, 'label' ) );
		if ( $label ) {
			$cleanComponent->label = $label;
		}

		// Custom component styles
		$style = self::sanitizeValue( self::getValue( $component, 'style' ) );
		if ( $style ) {
			$cleanComponent->style = $style;
		}

		// Capabilities
		$canAdd = self::getValue( $component, 'canAdd' );
		if ( ! is_null( $canAdd ) ) {
			$cleanComponent->canAdd = filter_var( $canAdd, FILTER_VALIDATE_BOOLEAN );
		}

		$canAppend = self::getValue( $component, 'canAppend' );
		if ( ! is_null( $canAppend ) ) {
			$cleanComponent->canAppend = filter_var( $canAppend, FILTER_VALIDATE_BOOLEAN );
		}

		$canDelete = self::getValue( $component, 'canDelete' );
		if ( ! is_null( $canDelete ) ) {
			$cleanComponent->canDelete = filter_var( $canDelete, FILTER_VALIDATE_BOOLEAN );
		}

		$canDrag = self::getValue( $component, 'canDrag' );
		if ( ! is_null( $canDrag ) ) {
			$cleanComponent->canDrag = filter_var( $canDrag, FILTER_VALIDATE_BOOLEAN );
		}

		$canDrop = self::getValue( $component, 'canDrop' );
		if ( ! is_null( $canDrag ) ) {
			$cleanComponent->canDrop = filter_var( $canDrop, FILTER_VALIDATE_BOOLEAN );
		}

		$canEdit = self::getValue( $component, 'canEdit' );
		if ( ! is_null( $canEdit ) ) {
			$cleanComponent->canEdit = filter_var( $canEdit, FILTER_VALIDATE_BOOLEAN );
		}

		return $cleanComponent;
	}

	/**
	 * Sanitize component data
	 *
	 * @param stdClass|array $data
	 *
	 * @return stdClass
	 */
	public static function sanitizeComponentData( $data ) {
		$clean_data = array();
		if ( is_object( $data ) ) {
			$data = get_object_vars( $data );
		}
		foreach ( $data as $key => $value ) {
			$clean_data[ $key ] = self::sanitizeValue( $value );
		}

		return (object) $clean_data;
	}

	/**
	 * Sanitize value based on data type.
	 *
	 * @author Micah Wood
	 *
	 * @param mixed $value
	 *
	 * @return mixed
	 */
	public static function sanitizeValue( $value ) {
		switch ( gettype( $value ) ) {
			case 'boolean':
				$clean_value = filter_var( $value, FILTER_VALIDATE_BOOLEAN );
				break;
			case 'integer':
				$clean_value = intval( $value );
				break;
			case 'double':
				$clean_value = floatval( $value );
				break;
			case 'string':
				$decoded_string = html_entity_decode( $value );
				if ( 0 === strpos( $decoded_string, 'http' ) || 0 === strpos( $decoded_string, '/' ) || 0 === strpos( $decoded_string, '#' ) ) { // Is URL
					$clean_value = esc_url_raw( $decoded_string );
				} else if ( 1 === preg_match( "/<[^<]+>/", $decoded_string ) ) { // Is HTML
					$clean_value = wp_kses_post( $decoded_string );
				} else {
					$clean_value = sanitize_text_field( $decoded_string );
				}
				break;
			case 'array':
				$clean_value = array_map( __METHOD__, $value );
				break;
			case 'object':
				$clean_value = (object) array_map( __METHOD__, get_object_vars( $value ) );
				break;
			default:
				$clean_value = null;
		}

		return $clean_value;
	}

	/**
	 * Get a value from an object or an array.  Allows the ability to fetch a nested value from a
	 * heterogeneous multidimensional collection using dot notation.
	 *
	 * @author Micah Wood
	 * @link https://wpscholar.com/blog/php-heterogeneous-multidimensional-data-access-dot-notation/
	 *
	 * @param array|object $data
	 * @param string $key
	 * @param mixed $default
	 *
	 * @return mixed
	 */
	public static function getValue( $data, $key, $default = null ) {
		$value = $default;
		if ( is_array( $data ) && array_key_exists( $key, $data ) ) {
			$value = $data[ $key ];
		} else if ( is_object( $data ) && property_exists( $data, $key ) ) {
			$value = $data->$key;
		} else {
			$segments = explode( '.', $key );
			foreach ( $segments as $segment ) {
				if ( is_array( $data ) && array_key_exists( $segment, $data ) ) {
					$value = $data = $data[ $segment ];
				} else if ( is_object( $data ) && property_exists( $data, $segment ) ) {
					$value = $data = $data->$segment;
				} else {
					$value = $default;
					break;
				}
			}
		}

		return $value;
	}

}