<!DOCTYPE html><html <?php language_attributes(); ?>><head><meta charset="<?php bloginfo('charset'); ?>"><meta name="viewport" content="width=device-width,initial-scale=1"> <?php wp_head(); ?> </head><body <?php body_class(); ?>><div class="overlayer_menu"></div><header><div class="logo_container"><span class="logo_helper"></span> <a href="<?php echo esc_url( home_url( '/' ) ); ?>" id="logo" class="btn-6 supershadow">POTAPOV.IO <span></span></a></div><!--<div class="btn-6"><span></span><a href="#" class="burger-menu"><span>Menu</span></a></div> --> <a href="#" class="button_for_menu btn-6 supershadow"><div class="hider8">Menu</div><div class="line_z"></div><span></span></a><div id="main_nav" class="main_nav"><?php
			/* class btn-6 */
			wp_nav_menu( array(
    'menu' => 'New Main Nav'
) );
?></div></header></body></html>