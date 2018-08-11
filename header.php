<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
	<head>
		<meta charset="<?php bloginfo( 'charset' ); ?>">
		<meta name="viewport" content="width=device-width">
		<link rel="profile" href="http://gmpg.org/xfn/11">
		<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

		<link rel="stylesheet" href="<?php echo get_stylesheet_uri(); ?>" type="text/css">

		<!-- vue.js -->
		<script src="https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.js"></script>

		<!-- hover.css -->
		<link rel="stylesheet" href="<?php echo get_template_directory_uri();?>/css/external_resources/hover.css"></script>

		<?php wp_head(); ?>
	</head>
	<body <?php body_class(); ?>>
		<header>
		</header>
