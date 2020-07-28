<?php

get_header(); ?> <div id="page_header" style="background-color:<?php  the_field( 'project_color' ); ?>"><div class="container"><h1><?php echo the_title(); ?></h1> <?php if( get_field('project_url') ): ?> <button href="<?php the_field('project_url'); ?>" class="btn-6 supershadow">Visit Website <span></span></button> <?php endif; ?> </div></div><div class="clearfix"></div><div class="container container--narrow page-section"> <?php
            while(have_posts()) {
                the_post(); 
                $content = get_the_content();
                echo $content;
            } ?> </div> <?php get_footer();

?>