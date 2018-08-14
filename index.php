<?php get_header(); ?>

<!-- ここでwordpressから取り出したい情報をすべて取り出す -->
<?php get_template_part('php/get_data');?>

<main class="site-main" role="main">
	<!-- <background-container></background-container> -->
	<!-- <main-container></main-container> -->
	<top-menubar :current-page="currentPage" @change-page="changePage"></top-menubar>
	<right-sidebar :current-page="currentPage" @change-page="changePage"></right-sidebar>
	<!-- <left-sidebar></left-sidebar> -->
</main>

<?php get_footer(); ?>

<script src="<?php echo get_template_directory_uri();?>/js/top_menubar.js"></script>
<script src="<?php echo get_template_directory_uri();?>/js/right_sidebar.js"></script>
<script src="<?php echo get_template_directory_uri();?>/main.js"></script>

<link rel="stylesheet" href="<?php echo get_template_directory_uri();?>/css/top_menubar.css">
<link rel="stylesheet" href="<?php echo get_template_directory_uri();?>/css/right_sidebar.css">