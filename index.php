<?php get_header(); ?>

<!-- ここでwordpressから取り出したい情報をすべて取り出す -->
<?php get_template_part('php/get_data');?>

<main class="site-main" role="main" style="background-image: url(<?php echo get_template_directory_uri().'/images/bg.JPG';?>)">
	<img id="mainLogo" src="<?php echo get_template_directory_uri();?>/images/topLogo.png">
	<!-- <video style="position: absolute; left: 0" src="<?php echo get_template_directory_uri();?>/video/bg.mp4" autoplay muted>
	</video> -->

	<!-- <background-container></background-container> -->
	<main-container :current-page="currentPage"></main-container>
	<top-menubar :current-page="currentPage" @change-page="changePage" @hide-right-sidebar="hideRightSidebar"></top-menubar>
	<right-sidebar :current-page="currentPage" @change-page="changePage" ref="rightSidebar"></right-sidebar>
	<left-sidebar></left-sidebar>
</main>

<?php get_footer(); ?>

<script src="<?php echo get_template_directory_uri();?>/js/main_container.js"></script>
<script src="<?php echo get_template_directory_uri();?>/js/top_menubar.js"></script>
<script src="<?php echo get_template_directory_uri();?>/js/right_sidebar.js"></script>
<script src="<?php echo get_template_directory_uri();?>/js/left_sidebar.js"></script>
<script src="<?php echo get_template_directory_uri();?>/main.js"></script>
<!-- for twitter widget-->
<script> !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>

<link rel="stylesheet" href="<?php echo get_template_directory_uri();?>/css/top_menubar.css">
<link rel="stylesheet" href="<?php echo get_template_directory_uri();?>/css/main_container.css">
<link rel="stylesheet" href="<?php echo get_template_directory_uri();?>/css/right_sidebar.css">
<link rel="stylesheet" href="<?php echo get_template_directory_uri();?>/css/left_sidebar.css">
