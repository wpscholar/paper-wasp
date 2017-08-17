<?php

add_action( 'admin_init', function () {
	add_editor_style( plugins_url( '/assets/css/paper-wasp.css', PAPER_WASP_FILE ) );
} );

add_action( 'rest_api_init', function () {

	register_rest_route( 'paper-wasp/v1', '/posts/(?P<id>\d+)', array(
		'methods'             => WP_REST_Server::READABLE,
		'callback'            => function ( WP_REST_Request $request ) {

			$post = get_post( absint( $request->get_param( 'id' ) ) );

			$response = (object) array(
				'id'                    => absint( $post->ID ),
				'title'                 => esc_html( $post->post_title ),
				'content'               => trim( apply_filters( 'the_content', $post->post_content ) ),
				'author'                => absint( $post->post_author ),
				'status'                => esc_html( $post->post_status ),
				'type'                  => esc_html( $post->post_type ),
				'paper_wasp_components' => PaperWaspUtilities::getComponents( $post ),
			);

			return rest_ensure_response( $response );
		},
		'permission_callback' => function ( WP_REST_Request $request ) {
			return current_user_can( 'edit_post', $request->get_param( 'id' ) );
		},
		'args'                => array(
			'id' => array(
				'validate_callback' => 'paper_wasp_rest_validate_post_id'
			)
		),
	) );

	register_rest_route( 'paper-wasp/v1', '/posts/(?P<id>\d+)', array(
		'methods'             => WP_REST_Server::EDITABLE,
		'callback'            => function ( WP_REST_Request $request ) {

			$post = get_post( absint( $request->get_param( 'id' ) ) );

			// Update content
			$content = $request->get_param( 'content' );
			if ( ! is_null( $content ) ) {

				$postdata                 = (array) $post;
				$postdata['post_content'] = html_entity_decode( $content );


				wp_update_post( $postdata );
			}

			// Update components
			$components = $request->get_param( 'paper_wasp_components' );
			if ( ! is_null( $components ) ) {
				PaperWaspUtilities::setComponents( $post, $components );
			}

			$post = get_post( $post->ID );

			// Prepare response
			$response = (object) array(
				'id'                    => absint( $post->ID ),
				'title'                 => esc_html( $post->post_title ),
				'content'               => trim( apply_filters( 'the_content', $post->post_content ) ),
				'author'                => absint( $post->post_author ),
				'status'                => esc_html( $post->post_status ),
				'type'                  => esc_html( $post->post_type ),
				'paper_wasp_components' => PaperWaspUtilities::getComponents( $post ),
			);

			return rest_ensure_response( $response );
		},
		'permission_callback' => function ( WP_REST_Request $request ) {
			return current_user_can( 'edit_post', absint( $request->get_param( 'id' ) ) );
		},
		'args'                => array(
			'id'                    => array(
				'validate_callback' => 'paper_wasp_rest_validate_post_id'
			),
			'content'               => array(
				'validate_callback' => function ( $value ) {
					if ( ! is_string( $value ) ) {
						return new WP_Error( 'paper_wasp_bad_content', __( 'Invalid content format. Please pass a string.' ), array( 'status' => 400 ) );
					}

					return true;
				},
				'sanitize_callback' => 'wp_kses_post',
			),
			'paper_wasp_components' => array(
				'validate_callback' => function ( $components, WP_REST_Request $request, $param ) {

					if ( ! is_array( $components ) || 0 !== key( $components ) ) {
						return new WP_Error( 'paper_wasp_bad_component_collection', __( 'Invalid component collection format. Please pass an array.' ), array( 'status' => 400 ) );
					}

					if ( ! empty( $components ) ) {

						if ( ! is_array( $components[0] ) || ( ! empty( $components ) && is_numeric( key( $components[0] ) ) ) ) {
							return new WP_Error( 'paper_wasp_bad_component_collection', __( 'Invalid component collection format. Please pass an array of objects.' ), array( 'status' => 400 ) );
						}

						foreach ( $components as $value ) {
							if ( ! isset( $value['uid'], $value['type'], $value['parent'], $value['index'], $value['data'] ) ) {
								return new WP_Error( 'paper_wasp_bad_component_format', __( 'Invalid component format. Please pass an array of component objects. (e.g. [{"uid": 1, "type": "page", "parent": 0, "index": 0, "data": {}}] )' ), array( 'status' => 400 ) );
							}
							if ( ! is_array( $value['data'] ) || ( ! empty( $value['data'] ) && is_numeric( key( $value['data'] ) ) ) ) {
								return new WP_Error( 'paper_wasp_bad_component_data_format', __( 'Invalid component data format. Please pass an object.' ), array( 'status' => 400 ) );
							}
						}

					}

					return true;
				},
				'sanitize_callback' => function ( $value, $request, $param ) {
					return PaperWaspUtilities::sanitizeComponents( $value );
				}
			),
		),
	) );

} );

add_action( 'admin_bar_menu', function ( WP_Admin_Bar $wp_admin_bar ) {
	if ( post_type_supports( get_post_type(), 'paper-wasp' ) && is_paper_wasp_enabled() && ! isset( $_GET['paper-wasp'] ) ) {
		$wp_admin_bar->add_menu( [
			'id'    => 'paper-wasp-edit',
			'title' => 'Edit with Paper Wasp',
			'href'  => '?paper-wasp=1'
		] );
	}
}, 99 );

add_action( 'current_screen', function ( $screen ) {
	if ( isset( $screen->post_type ) && post_type_supports( $screen->post_type, PaperWasp::FEATURE ) && is_paper_wasp_enabled(get_post($_GET['post'])) ) {
		remove_post_type_support( $screen->post_type, 'editor' );
	}
} );
