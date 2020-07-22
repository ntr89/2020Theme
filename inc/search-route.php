<?php 
add_action('rest_api_init', 'siteSearch');
function siteSearch() {
    register_rest_route('ntrSite/v1', 'search', array(
        'methods' => WP_REST_SERVER::READABLE,
        'callback' => 'ntrSearchResults'
    ));
}
function ntrSearchResults() {
   $projects = new WP_Query(array(
       'post_type' => 'project'
   ));
$projResults = array();
while($projects->have_posts()) {
array_push($projResults, array(
    'title' => get_the_title(),
    'permalink' => get_the_permalink()
));
}
return $projResults;
};

