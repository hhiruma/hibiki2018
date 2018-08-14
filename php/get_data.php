<?php
    //公開している固定ページすべての中身を取り出す
    //  表示するページの種類: global_page
    //    wordpressの固定ページの公開しているページのみを扱うためphpからデータを取得する必要がある(順序通りにソート)
    //      通常　：　トップ、サークル情報、舞台一覧、お問い合わせ
    //      新歓期：　トップ、サークル情報、舞台一覧、新歓情報、お問い合わせ
    $pagesTmp = get_pages(array('sort_order' => 'ASC', 'sort_column' => 'menu_order', 'post_status' => 'publish'));
    $pages = array();
    foreach($pagesTmp as $pageTmp){
        $pageInfo = array(
            "title" => $pageTmp->post_title,
            "content" => $pageTmp->post_content
        );
        array_unshift($pages, $pageInfo);
    }
?>

<?php
    //背景用の講師柄のuri
    $bgImgLink = get_template_directory_uri().'/images/bg.png';
?>

<script type="text/javascript">
    const bgImgLink = <?php echo json_encode($bgImgLink); ?>;
    const global_pages = <?php echo json_encode($pages); ?>;
</script>