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