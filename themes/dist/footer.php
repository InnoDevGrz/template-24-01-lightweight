<?php
// acf fields in contact/footer integriert
$bg_img_footer = get_field('footer_background_image', 'option');
$img = wp_get_attachment_image_url($bg_img_footer['img'], 'full');
?>


<footer id="page-footer" itemscope="itemscope" itemtype="https://schema.org/WPFooter"

    <?php if ($img) echo 'class="bg-img-footer" '. "style=\"background-image: url($img);\""; ?>>
    
    <div class="wrapper">
        <?php include(locate_template('template-parts/footer/contact-infos.php')); ?>
        <?php include(locate_template('template-parts/footer/navigation.php')); ?>
    </div>

    <div class="site-info">
        <span class="copyright">&copy; <?= date('Y ') . get_bloginfo('name'); ?></span>
    </div>

</footer>
<?php wp_footer(); ?>
</body>
</html>
