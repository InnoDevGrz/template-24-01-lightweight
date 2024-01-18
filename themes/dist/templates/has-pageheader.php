<?php /* Template Name: Pageheader */ ?>


<?php get_header(); ?>

<?php
$pageheader      = get_field( 'pageheader', get_the_ID() );
if ($pageheader){
	$ph_img          = $pageheader['pageheader_image'];
	$ph_title        = $pageheader['title'];
	$ph_title_tag    = $pageheader['title_tag'];
	$ph_subtitle     = $pageheader['subtitle'];
	$ph_subtitle_tag = $pageheader['subtitle_tag'];
	$ph_text         = $pageheader['text'];
	if (!empty($pageheader['btn'])){
		$ph_button_url   = $pageheader['btn']['url'];
		$ph_button_title = $pageheader['btn']['title'];
	}
}


if ( $pageheader ):
	if ( ! empty ( $pageheader['pageheader_image'] ) ) : ?>

        <header class="pageheader" style="background-image: url(<?php echo wp_get_attachment_image_url( $ph_img, 'full' ); ?>);">
            <div class="pageheader-content container">
				<?php
				echo tsc_create_html_by_tagname( $ph_title_tag, 'title', $ph_title );
				echo tsc_create_html_by_tagname( $ph_subtitle_tag, 'subtitle', $ph_subtitle );
				echo tsc_create_html_by_tagname( 'p', 'text', $ph_text );
				if ( ! empty ( $ph_button_url ) ) {
					echo "<a href='$ph_button_url' class='btn'>$ph_button_title</a>";
				}
				?>
            </div>
        </header>

	<?php
	endif;
endif;
?>


    <main id="content" class="container no-bottom-margin" role="main">
		<?php include( locate_template( 'template-parts/content.php' ) ); ?>
    </main>

<?php get_footer(); ?>