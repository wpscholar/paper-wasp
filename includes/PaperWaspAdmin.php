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
		if ( is_paper_wasp_editor() ) {
			paper_wasp_load_editor();
		}
	}

}

PaperWaspAdmin::initialize();
