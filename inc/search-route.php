<?php 
add_action('rest_api_init', 'siteSearch');
function siteSearch() {
    register_rest_route('ntrSite/v1', 'search', array(
        'methods' => WP_REST_SERVER::READABLE,
        'callback' => 'ntrSearchResults'
    ));
}
function ntrSearchResults($data) {
    $queryResults = array(
        'general' => array(),
        'projects' => array(),
        'posts' => array()
    );
   $theQuery = new WP_Query(array(
       'post_type' => array('project', 'page', 'post'),
       's' => sanitize_text_field($data['term'])
   ));
while($theQuery->have_posts()) {
    
    $theQuery->the_post();
if (get_post_type() == 'page') {
    array_push($queryResults['general'], array(
        'title' => get_the_title(),
        'permalink' => get_the_permalink(),
));
}
if (get_post_type() == 'project') {
    array_push($queryResults['projects'], array(
        'title' => get_the_title(),
        'permalink' => get_the_permalink()
));
}
if (get_post_type() == 'post') {
    array_push($queryResults['posts'], array(
        'title' => get_the_title(),
        'permalink' => get_the_permalink(),
        'postType' => get_post_type(),
        'postDate' => get_the_date(),
));
}

}
return $queryResults;
};

wp_reset_postdata();

