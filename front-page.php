<?php

get_header(); ?> <?php echo do_shortcode( '[rev_slider alias="slider-1"][/rev_slider]' ); ?> <div class="container container--narrow page-section"><section> <?php require 'portfolio_loop.php'; ?> </section> <?php
  while(have_posts()) {
    the_post(); 
    $content = apply_filters( 'the_content', get_the_content() );
    echo $content;
 } ?> </div> <?php get_footer();

?>