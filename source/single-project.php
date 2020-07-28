<?php

get_header(); ?>

<div id="page_header" style="background-color:<?php  the_field( 'project_color' ); ?>">
    <div class="container">
    <h1><?php echo the_title(); ?></h1>
             </div>
             </div>
            <div class="container container--narrow page-section">
                
            <?php
            while(have_posts()) {
                the_post(); 
                $content = get_the_content();
                echo $content;
            } ?>
            </div>
        


<?php get_footer();

?>