<?php

/*
 * Plugin Name: Paper Wasp
 * Plugin URI:
 * Description:
 * Version: 0.1.0
 * Author: Narwhal Digital
 * Author URI:  https://www.narwhal.digital/
 * License:     GPL2
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: paper-wasp
 *
 * Copyright 2017 by Narwhal Digital - All rights reserved.
 */

define( 'PAPER_WASP_VERSION', '0.1.0' );
define( 'PAPER_WASP_FILE', __FILE__ );
define( 'PAPER_WASP_DIR', __DIR__ );
define( 'PAPER_WASP_URL', plugins_url( '/', __FILE__ ) );

// TODO: Remove this after testing
define( 'DISALLOW_UNFILTERED_HTML', true );


// Check plugin requirements
global $pagenow;
if ( 'plugins.php' === $pagenow ) {
	require dirname( __FILE__ ) . '/includes/plugin-check.php';
	$plugin_check = new Paper_Wasp_Plugin_Check( __FILE__ );
	$plugin_check->min_php_version = '5.3';
	$plugin_check->min_wp_version = '4.5';
	$plugin_check->check_plugin_requirements();
}

require dirname( __FILE__ ) . '/includes/functions.php';
require dirname( __FILE__ ) . '/includes/actions.php';
require dirname( __FILE__ ) . '/includes/filters.php';
require dirname( __FILE__ ) . '/includes/component-registry.php';
require dirname( __FILE__ ) . '/includes/PaperWaspUtilities.php';
require dirname( __FILE__ ) . '/includes/PaperWaspAdmin.php';
require dirname( __FILE__ ) . '/includes/PaperWasp.php';
PaperWaspAdmin::initialize();
