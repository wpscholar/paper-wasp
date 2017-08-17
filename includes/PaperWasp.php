<?php

/**
 * Class PaperWasp
 */
class PaperWasp {

	const FEATURE = 'paper-wasp';

	/**
	 * Initialize Paper Wasp plugin.
	 */
	public static function initialize() {

		// Add post type support
		add_post_type_support( 'post', self::FEATURE );
		add_post_type_support( 'page', self::FEATURE );

		// Register meta
		register_meta( 'post', '_paper_wasp_enabled', array(
			'type'              => 'boolean',
			'description'       => 'A boolean value that toggles the Paper Wasp page builder for a given page or post.',
			'single'            => true,
			'sanitize_callback' => 'wp_validate_boolean',
			'auth_callback'     => '__return_true',
		) );

		register_meta( 'post', '_paper_wasp_components', array(
			'type'              => 'array',
			'description'       => 'A collection of Paper Wasp components.',
			'single'            => false,
			'sanitize_callback' => array( 'PaperWaspUtilities', 'sanitizeComponents' ),
			'auth_callback'     => '__return_true',
		) );

		// Add actions
		add_action( 'edit_form_after_title', array( __CLASS__, 'showEditLink' ) );
		add_action( 'add_meta_boxes', array( __CLASS__, 'addMetaBoxes' ), 10, 2 );
		add_action( 'save_post', array( __CLASS__, 'savePost' ), 10, 2 );
		add_action( 'template_redirect', array( __CLASS__, 'loadEditor' ) );
		add_action( 'admin_enqueue_scripts', array( __CLASS__, 'registerAssets' ), 5 );
		add_action( 'wp_enqueue_scripts', array( __CLASS__, 'registerAssets' ), 5 );
		add_action( 'wp_enqueue_scripts', array( __CLASS__, 'loadEditor' ) );

		// TODO: Only do this if there are dynamic components
		add_action( 'wp_enqueue_scripts', array( __CLASS__, 'loadApp' ) );

		add_action( 'page_row_actions', array( __CLASS__, 'addRowAction' ), 10, 2 );
		add_action( 'post_row_actions', array( __CLASS__, 'addRowAction' ), 10, 2 );

	}

	/**
	 * Add our custom row action
	 *
	 * @param array $actions
	 * @param WP_Post $post
	 *
	 * @return array
	 */
	public static function addRowAction( array $actions, WP_Post $post ) {

		if ( is_paper_wasp_enabled( $post ) ) {

			$actions['paper-wasp-edit'] = sprintf(
				'<a href="%s" rel="permalink" aria-label="%s">%s</a>',
				paper_wasp_edit_link( $post ),
				/* translators: %s: post title */
				esc_attr( sprintf( __( 'Edit &#8220;%s&#8221; with Paper Wasp', 'paper-wasp' ), $post->post_title ) ),
				__( 'Edit in Paper Wasp', 'paper-wasp' )
			);

		}

		return $actions;
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
				esc_html__( 'Paper Wasp', 'paper-wasp' ),
				function () use ( $post ) {
					?>
                    <label>
                        <input name="_paper_wasp_enabled"
                               type="checkbox"
                               value="true" <?php checked( (bool) $post->_paper_wasp_enabled ) ?> />
						<?php esc_html_e( 'Paper Wasp enabled', 'paper-wasp' ); ?>
                    </label>
					<?php
					wp_nonce_field( 'paper_wasp_toggle', 'paper_wasp_toggle_nonce' );
				},
				null,
				'side'
			);
		}
	}

	/**
	 * Callback for when a post is saved - updates our toggle option
	 *
	 * @param int $post_id
	 * @param WP_Post $post
	 */
	public static function savePost( $post_id, WP_Post $post ) {
		if ( post_type_supports( $post->post_type, self::FEATURE ) ) {
			if ( wp_verify_nonce( filter_input( INPUT_POST, 'paper_wasp_toggle_nonce' ), 'paper_wasp_toggle' ) ) {
				update_post_meta( $post_id, '_paper_wasp_enabled', filter_input( INPUT_POST, '_paper_wasp_enabled', FILTER_VALIDATE_BOOLEAN ) );
			}
		}
	}

	/**
	 * Show 'Edit with Paper Wasp' link.
	 */
	public static function showEditLink() {
		if ( is_paper_wasp_enabled() ) {
			?>
            <a class="paper-wasp-edit-link"
               href="<?php echo esc_url( paper_wasp_edit_link() ); ?>"
               target="_blank">
                <img src="<?php echo esc_url( plugins_url( 'assets/img/paper-wasp.png', PAPER_WASP_FILE ) ); ?>" />
                <span><?php esc_html_e( 'Edit with Paper Wasp', 'paper-wasp' ); ?></span>
            </a>
            <style>
                .paper-wasp-edit-link {
                    border: 1px solid #ccc;
                    display: block;
                    padding: 1em;
                    margin: 1em 0;
                    text-decoration: none;
                    color: black;
                    width: 250px;
                }

                .paper-wasp-edit-link:hover {
                    color: inherit;
                    background: #ccc;
                }

                .paper-wasp-edit-link img {
                    height: 50px;
                    margin: 0 1em 0 0;
                    vertical-align: middle;
                }

                .paper-wasp-edit-link span {
                    line-height: 50px;
                    font-size: 20px;
                }
            </style>
			<?php
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

	/**
	 * Load the Paper Wasp app on a page
	 */
	public static function loadApp() {
		if ( is_paper_wasp_enabled() && ! is_paper_wasp_editor() ) {
			wp_enqueue_script( 'paper-wasp' );
			wp_enqueue_style( 'paper-wasp' );
		}
	}

	/**
	 * Load the Paper Wasp styles on the front end
	 */
	public static function registerAssets() {

		$suffix = defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ? '' : '.min';

		// Register styles
		wp_register_style( 'paper-wasp', plugins_url( "/assets/css/paper-wasp{$suffix}.css", PAPER_WASP_FILE ) );
		wp_register_style( 'paper-wasp-editor', plugins_url( "/assets/css/paper-wasp-editor{$suffix}.css", PAPER_WASP_FILE ), array(), PAPER_WASP_VERSION );

		// Register scripts
		wp_register_script( 'paper-wasp', plugins_url( "/assets/js/paper-wasp{$suffix}.js", PAPER_WASP_FILE ), array(
			'paper-wasp-component-registry',
		), PAPER_WASP_VERSION, true );
		wp_register_script( 'paper-wasp-editor', plugins_url( "/assets/js/paper-wasp-editor{$suffix}.js", PAPER_WASP_FILE ), array(
			'paper-wasp-component-registry',
			'paper-wasp-tinymce'
		), PAPER_WASP_VERSION, true );

		// Register dependencies
		wp_register_script( 'paper-wasp-tinymce', 'https://cdn.tinymce.com/4/tinymce.min.js?ver=4.7.3', array(), '4.7.3' );
		wp_register_script( 'paper-wasp-component-registry', plugins_url( "/assets/js/paper-wasp-component-registry{$suffix}.js", PAPER_WASP_FILE ), array(), PAPER_WASP_VERSION );

		// Load localized data
		wp_localize_script( 'paper-wasp-component-registry', 'paperWasp', self::localizedData() );
	}

	/**
	 * Get localized data for Paper Wasp
	 *
	 * @return array
	 */
	public static function localizedData() {

		$post = get_post();

		if ( ! $post ) {
			return array();
		}

		global $allowedposttags;

		$data = array(
			'ajaxUrl'           => admin_url( 'admin-ajax.php' ),
			'allowedTags'       => array_keys( $allowedposttags ),
			'allowedAttributes' => array_map( function ( $value ) {
				return array_keys( $value );
			}, $allowedposttags ),
			'components'        => PaperWaspUtilities::getComponents( $post ),
			'registry' 			=> apply_filters( 'paper_wasp_register_component', [] ),
			'postId'            => $post->ID,
			'restBase'          => esc_url_raw( rest_url() ),
			'restNonce'         => wp_create_nonce( 'wp_rest' ),
			'userId'            => get_current_user_id(),
			'paperWaspPath'     => plugins_url( '', PAPER_WASP_FILE ),
		);

		return $data;
	}

}

PaperWasp::initialize();
