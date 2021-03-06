<?php

/*
 * Plugin Name: Paper Wasp
 * Plugin URI:
 * Description:
 * Version: 1.0
 * Author: Micah Wood
 * Author URI:  https://wpscholar.com
 * License:     GPL2
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: paper-wasp
 *
 * Copyright 2017-2018 by Micah Wood - All rights reserved.
 */

define( 'PAPER_WASP_VERSION', '1.0' );
define( 'PAPER_WASP_FILE', __FILE__ );

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
require dirname( __FILE__ ) . '/includes/PaperWaspUtilities.php';
require dirname( __FILE__ ) . '/includes/PaperWaspAdmin.php';
require dirname( __FILE__ ) . '/includes/PaperWasp.php';
PaperWaspAdmin::initialize();
