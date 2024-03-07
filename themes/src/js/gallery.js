

(function ($) {


    $(document).ready(function () {



        jQuery('.accordion-gallery ').justifiedGallery({
            lastRow : 'nojustify',
            rowHeight : 150,
            maxRowHeight: 150,
            rel : 'justified-gallery',
            margins : 25,
            randomize: true,
            captions: true,


        }).on('jg.complete', function () {
            $(this).find('a').colorbox({
                maxWidth : '100%',
                maxHeight : '100%',
                opacity : 0.8,
                transition : 'elastic',
                current : ''
            });
        });

        jQuery('.block-justified-gallery').justifiedGallery({
            lastRow : 'justify',
            rowHeight : 300,
            maxRowHeight: 350,
            rel : 'justified-gallery',
            margins : '30px',
            randomize: true,
            captions: true,


        }).on('jg.complete', function () {
            $(this).find('a').colorbox({
                maxWidth : '100%',
                maxHeight : '100%',
                opacity : 0.8,
                transition : 'elastic',
                current : ''
            });
        });

        jQuery('.single-justified-gallery').justifiedGallery({
            lastRow : 'justify',
            rowHeight : 300,
            maxRowHeight: 350,
            rel : 'gallery1',
            margins : '30px',
            randomize: true,
            captions: true,

        }).on('jg.complete', function () {
            $(this).find('a').colorbox({
                maxWidth : '100%',
                maxHeight : '100%',
                opacity : 0.8,
                transition : 'elastic',
                current : '',
            });
        });


    });


})(jQuery);
