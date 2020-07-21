<?php 
add_action('rest_api-init', 'siteSearch');
function siteSearch() {
    register_rest_route('ntrSite/v1', 'search', array(
        'methods' => WP_REST_SERVER::READABLE,
        'callback' => 'ntrSearchResults'
    ));
}
function ntrSearchResults() {
    return 'Route test';
};
echo 'test';
?>