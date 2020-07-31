<?php

get_header(); ?>

<div id="page_header" style="background-color:<?php  the_field( 'project_color' ); ?>">
    <div class="container">
        <div class="one-half">
    <h1 style="color:<?php  the_field( 'project_color_text' ); ?>"><?php echo the_title(); ?></h1>
    <?php if( get_field('project_url') ): ?>
	<button href="<?php the_field('project_url'); ?>" class="btn-6 supershadow">Visit Website <span></span></button>
<?php endif; ?>
</div>
<div class="one-half last">
<img src="<?php  the_field( 'desktop_picture' ); ?>" class="project-main-image supershadow" >
</div>
    
             </div>
             </div>
             <div class="clearfix"></div>
             <div>
             <div class="left_top_corner" style="background-color:<?php  the_field( 'project_color' ); ?>"><div class="filler"></div></div>
            <div class="container container--narrow page-section">
               
            <?php
            while(have_posts()) {
                the_post(); 
                $content = get_the_content();
                echo $content;
            } ?>
            </div>
        
            </div>

<?php get_footer();

?>