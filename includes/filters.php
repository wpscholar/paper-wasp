<?php

add_filter( 'paper_wasp_get_components', function ( $components, WP_Post $post ) {

	if ( empty( $components ) ) {

		$now = time() * 1000;

		$components = array(
			array(
				'uid'    => $now,
				'type'   => 'page',
				'parent' => 0,
				'index'  => 0,
				'data'   => new stdClass(),
			)
		);

		if ( ! empty( $post->post_content ) ) {
			$components[] = array(
				'uid'    => $now + 1,
				'type'   => 'row',
				'parent' => $now,
				'index'  => 0,
				'data'   => new stdClass(),
			);
			$components[] = array(
				'uid'    => $now + 2,
				'type'   => 'column',
				'parent' => $now + 1,
				'index'  => 0,
				'data'   => new stdClass(),
			);
			$components[] = array(
				'uid'    => $now + 3,
				'type'   => 'rich-text',
				'parent' => $now + 2,
				'index'  => 0,
				'data'   => (object) array(
					'text' => apply_filters( 'the_content', $post->post_content )
				),
			);
		}

	}

	// TODO: Remove this later... it is only needed to convert pre-existing data into the right format
	foreach ( $components as $key => &$value ) {
		if ( ! isset( $value->uid ) && isset( $value->id ) ) {
			$value->uid = absint( $value->id );
			unset( $value->id );
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
		$allowed['div']['data-pw-uid']    = true;
		$allowed['div']['data-pw-type']   = true;
		$allowed['div']['data-pw-parent'] = true;
		$allowed['div']['data-pw-index']  = true;
		$allowed['div']['data-pw-data']   = true;
	}

	return $allowed;

}, 10, 2 );