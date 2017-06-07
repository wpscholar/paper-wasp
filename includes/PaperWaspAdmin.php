<?php

/**
 * Class PaperWaspAdmin
 */
class PaperWaspAdmin {

	const FEATURE = 'paper-wasp-admin';

	/**
	 * Initialize Paper Wasp plugin.
	 */
	public static function initialize() {

		// Add actions
		add_action( 'add_meta_boxes', array( __CLASS__, 'addMetaBoxes' ), 10, 2 );
		add_action( 'admin_enqueue_scripts', array( __CLASS__, 'loadEditor' ) );

	}

	/**
	 * Add our meta box to the appropriate post types.
	 *
	 * @param string $post_type
	 * @param WP_Post $post
	 */
	public static function addMetaBoxes( $post_type, WP_Post $post ) {
		if ( post_type_supports( $post_type, self::FEATURE ) ) {
			add_meta_box(
				self::FEATURE . '-meta-box',
				esc_html__( 'Paper Wasp Editor', 'paper-wasp' ),
				function () {
					echo '<div id="paper-wasp"></div>';
				}
			);
		}
	}

	/**
	 * Load the Paper Wasp editor on a page
	 */
	public static function loadEditor() {
		if ( post_type_supports( get_post_type(), self::FEATURE ) && current_user_can( 'edit_post', get_the_ID() ) ) {

			$post = get_post();

			global $allowedposttags;

			$data = array(
				'ajaxUrl'           => admin_url( 'admin-ajax.php' ),
				'allowedTags'       => array_keys( $allowedposttags ),
				'allowedAttributes' => array_map( function ( $value ) {
					return array_keys( $value );
				}, $allowedposttags ),
				'components'        => PaperWaspUtilities::getComponents( $post ),
				'postId'            => $post->ID,
				'restBase'          => esc_url_raw( rest_url() ),
				'restNonce'         => wp_create_nonce( 'wp_rest' ),
				'userId'            => get_current_user_id(),
				'paperWaspPath'     => plugins_url( '', PAPER_WASP_FILE ),
			);

			wp_enqueue_media();

			// Styles
			wp_enqueue_style( 'paper-wasp-editor', plugins_url( '/assets/css/paper-wasp-editor.css', PAPER_WASP_FILE ), array(), PAPER_WASP_VERSION );

			// Scripts
			wp_register_script( 'paper-wasp-tinymce', 'https://cdn.tinymce.com/4/tinymce.min.js?ver=4.7.3', array(), '4.7.3' );
			wp_register_script( 'paper-wasp-component-registry', plugins_url( '/assets/js/paper-wasp-component-registry.js', PAPER_WASP_FILE ), array(), PAPER_WASP_VERSION );
			wp_enqueue_script( 'paper-wasp-editor', plugins_url( '/assets/js/paper-wasp-editor.js', PAPER_WASP_FILE ), array(
				'paper-wasp-component-registry',
				'paper-wasp-tinymce'
			), PAPER_WASP_VERSION, true );
			wp_localize_script( 'paper-wasp-component-registry', 'paperWasp', $data );

		}
	}

}

PaperWaspAdmin::initialize();
