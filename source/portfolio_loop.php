<section class="vertical-scrolling">
  <div class="container">
    <a href="<?php the_permalink(); ?>" class="project_summary" style="background-color:<?php  the_field( 'project_color' ); ?>">
      <div class="main_image">
        <?php  the_post_thumbnail( 'full' ); ?>
      </div>
      <div class="description supershadow">
        <h3 class=""><?php the_title(); ?></h3>
        <p><?php if (has_excerpt()) {
          echo get_the_excerpt();
        } else {} ?>
        </p>
      </div>
    </a>
  </div>
</section>
            
     
        