<?php

/**
 * Checks if PaperWasp is enabled for a specific post.
 *
 * @param WP_Post $post
 *
 * @return bool
 */
function is_paper_wasp_enabled( WP_Post $post = null ) {

	if ( is_null( $post ) ) {
		$post = get_post();
	}

	return $post ? (bool) $post->_paper_wasp_enabled : false;

}

/**
 * Get PaperWasp edit link for a specific post.
 *
 * @param WP_Post $post
 *
 * @return string
 */
function paper_wasp_edit_link( WP_Post $post = null ) {

	if ( is_null( $post ) ) {
		$post = get_post();
	}

	return add_query_arg( 'paper-wasp', 1, get_permalink( $post ) );
}

/**
 * Register a Paper Wasp component
 *
 * @param string $type
 * @param string $label
 * @param array $args
 */
function paper_wasp_register_component( $type, $label, $args = [] ) {

	$defaults = array(
		'canAdd'       => true,
		'canDelete'    => true,
		'canEdit'      => true,
		'isComponent'  => true,
		'isDynamic'    => false,
		'isSection'    => false,
		'thumbnailUrl' => null,
	);

	$component = array(
		'type'  => sanitize_title_with_dashes( $type ),
		'label' => esc_html( $label ),
	);

	foreach ( $defaults as $key => $default ) {
		$component[ $key ] = array_key_exists( $key, $args ) ? $args[ $key ] : $default;
	}

	add_filter( 'paper_wasp_register_component', function ( array $components ) use ( $component ) {
		$components[] = $component;

		return $components;
	} );

}

/**
 * Helper REST API function for validating a post ID.
 *
 * @param int $post_id
 *
 * @return bool|WP_Error
 */
function paper_wasp_rest_validate_post_id( $post_id ) {
	if ( ! is_numeric( $post_id ) ) {
		return new WP_Error( 'paper_wasp_bad_post_id', __( 'Invalid post ID format. Please pass an integer.' ), array( 'status' => 400 ) );
	}
	if ( ! get_post( absint( $post_id ) ) ) {
		return new WP_Error( 'paper_wasp_bad_post_id', __( 'Invalid post ID.' ), array( 'status' => 400 ) );
	}

	return true;
}