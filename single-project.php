<?php

get_header(); ?> <div id="fullpage"><section class="vertical-scrolling"><div class="container container--narrow page-section"> <?php
            while(have_posts()) {
                the_post(); 
                $content = get_the_content();
                echo $content;
            } ?> </div></section></div> <?php get_footer();

?>