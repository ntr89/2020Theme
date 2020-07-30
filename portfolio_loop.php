<section class="vertical-scrolling" style="background-image:url('<?php  the_field( 'background_image' ); ?>');"><div class="container"><a href="<?php the_permalink(); ?>" class="project_summary supershadow" style="background-color:<?php  the_field( 'project_color' ); ?>"><div class="main_image"> <?php  the_post_thumbnail( 'full' ); ?> <div class="additional_images_holder"><div class="theLaptop"><img src="/wp-content/themes/2020Theme/images/laptop-new-small.png" class="laptop_frame"><div class="theScreen"><img src="<?php  the_field( 'desktop_picture' ); ?>" class=""></div></div></div></div><div class="description supershadow"><h3 class=""><?php the_title(); ?></h3> <?php
$categories = get_categories( array(
    'orderby' => 'name',
    'order'   => 'ASC', 
    'exclude' => array(1, 24)
) );
 
foreach( $categories as $category ) {
    $category_link = sprintf( 
        '%1$s',
        esc_html( $category->name )
    );
     
    echo sprintf( esc_html__( '%s | ', 'textdomain' ), $category_link );
} 
 ?> <p><?php if (has_excerpt()) {
            echo get_the_excerpt();
          } else {} ?> </p>Read more about this project ></div></a></div><div class="fadeInScreen"></div></section>