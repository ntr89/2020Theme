<?php

get_header(); ?> <?php echo do_shortcode( '[rev_slider alias="slider-1"][/rev_slider]' ); ?> <div class="background_odd"><div class="background_odd2"><section id="main_home"><div class="container container--narrow page-section"> <?php
            while(have_posts()) {
                the_post(); 
                $content = get_the_content();
                echo $content;
            } ?> </div></section></div></div> <?php 
          $homepageEvents = new WP_Query(array(
            'posts_per_page' => 8,
            'post_type' => 'project',
            'category_name' => 'front-page'
          ));

          while($homepageEvents->have_posts()) {
            $homepageEvents->the_post(); ?> <?php get_template_part('portfolio_loop'); ?> <?php }
         
         ?> <?php get_footer();

?>