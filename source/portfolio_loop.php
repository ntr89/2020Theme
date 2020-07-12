
<?php 
          $homepageEvents = new WP_Query(array(
            'posts_per_page' => 8,
            'post_type' => 'project',
            'category_name' => 'front-page'
          ));

          while($homepageEvents->have_posts()) {
            $homepageEvents->the_post(); ?>
            <div class="dropback">
            <div class="background_v3">
    <div class="background_v4">
            <section>
            
              <div class="event-summary__content">
                <?php  the_post_thumbnail( 'full' ); ?>
                <h3 class=""><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
                <p><?php if (has_excerpt()) {
                    echo get_the_excerpt();
                  } else {
                      
                    } ?> <a href="<?php the_permalink(); ?>" class="nu gray">Learn more</a></p>
              </div>
           
            </section>
                </div>
                </div>
                </div>
          <?php }
          wp_reset_postdata();
        ?>
        