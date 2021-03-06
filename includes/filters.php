<?php

add_filter( 'paper_wasp_get_components', function ( $components, WP_Post $post ) {

	if ( empty( $components ) ) {

		$now = time() * 1000;

		$components = array(
			array(
				'uid'    => $now . '0000000000',
				'type'   => 'page',
				'parent' => 0,
				'index'  => 0,
				'data'   => new stdClass(),
			)
		);

		if ( ! empty( $post->post_content ) ) {
			$components[] = array(
				'uid'    => $now . '0000000001',
				'type'   => 'row',
				'parent' => $now . '0000000000',
				'index'  => 0,
				'data'   => new stdClass(),
			);
			$components[] = array(
				'uid'    => $now . '0000000002',
				'type'   => 'column',
				'parent' => $now . '0000000001',
				'index'  => 0,
				'data'   => new stdClass(),
			);
			$components[] = array(
				'uid'    => $now . '0000000003',
				'type'   => 'rich-text',
				'parent' => $now . '0000000002',
				'index'  => 0,
				'data'   => (object) array(
					'text' => apply_filters( 'the_content', $post->post_content )
				),
			);
		}

	}

	return $components;
}, 10, 2 );

add_filter( 'the_content', function ( $content ) {

	if ( is_paper_wasp_enabled() ) {
		$content = '<div id="paper-wasp">' . $content . '</div>';
	}

	return $content;
} );

add_filter( 'wp_kses_allowed_html', function ( $allowed, $context ) {

	if ( 'post' === $context ) {
		$allowed['div']['data-pw-uid'] = true;
		$allowed['div']['data-pw-type'] = true;
		$allowed['div']['data-pw-parent'] = true;
		$allowed['div']['data-pw-index'] = true;
		$allowed['div']['data-pw-data'] = true;
	}

	return $allowed;

}, 10, 2 );
