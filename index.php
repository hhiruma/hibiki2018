<?php get_header(); ?>

<main class="site-main" role="main">
	<?php get_template_part('components/background_container'); ?>
	<?php get_template_part('components/main_container'); ?>
	<?php get_template_part('components/top_menubar'); ?>
	<?php get_template_part('components/right_sidebar'); ?>
	<?php get_template_part('components/left_sidebar'); ?>
</main>

<?php get_footer(); ?>

<script src="<?php echo get_template_directory_uri();?>/main.js"></script>