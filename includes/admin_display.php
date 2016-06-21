<?php

	/* ***** ----------------------------------------------- ***** **
	** ***** Admin Display
	** ***** ----------------------------------------------- ***** */

	// Add thumbnails column to admin post view
	function posts_columns( $defaults ){
		$defaults[ 'my_post_thumbs' ] = __( 'Image', 'bymattlee' );
		return $defaults;
	}
	add_filter( 'manage_posts_columns', 'posts_columns', 5 );

	// Add thumbnails for each post to admin post view
	function posts_custom_columns( $column_name, $id ){
		if ( $column_name === 'my_post_thumbs' ){
			echo the_post_thumbnail( 'admin_thumb' );
		}
	}
	add_action( 'manage_posts_custom_column', 'posts_custom_columns', 5, 2 );

	// Remove columns from post, page, and author screens
	function remove_yoast_seo_columns( $columns ) {

		// Remove comments
		unset( $columns[ 'comments' ] );

		// Remove Yoast SEO columns
		unset( $columns[ 'wpseo-score' ] );
		unset( $columns[ 'wpseo-title' ] );
		unset( $columns[ 'wpseo-metadesc' ] );
		unset( $columns[ 'wpseo-focuskw' ] );

		return $columns;
	}
	// add_filter( 'manage_edit-post_columns', 'remove_yoast_seo_columns' );
	// add_filter( 'manage_edit-page_columns', 'remove_yoast_seo_columns' );

?>