<?php

get_header(); ?>

<section>
<?php echo do_shortcode( '[rev_slider alias="slider-1"][/rev_slider]' ); ?>
</section>

<section>
<div class="container container--narrow page-section">
<?php
  while(have_posts()) {
    the_post(); 
    $content = apply_filters( 'the_content', get_the_content() );
    echo $content;
 } ?>


</div>

</section>
<?php require 'portfolio_loop.php'; ?>


<?php get_footer();

?>