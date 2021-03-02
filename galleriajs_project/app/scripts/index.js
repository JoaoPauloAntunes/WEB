(function() {
    Galleria.loadTheme('/galleria-1.6.1/dist/themes/folio/galleria.folio.min.js'); 
    // Galleria.loadTheme('/galleria-1.6.1/dist/themes/azur/galleria.azur.min.js');
    // Galleria.loadTheme('/galleria-1.6.1/dist/themes/twelve/galleria.twelve.min.js'); 
    // Galleria.loadTheme('/galleria-1.6.1/dist/themes/fullscreen/galleria.fullscreen.min.js');
    // Galleria.loadTheme('/galleria-1.6.1/dist/themes/classic/galleria.classic.min.js');
    // Galleria.loadTheme('/galleria-1.6.1/dist/themes/miniml/galleria.miniml.min.js'); 
    // Galleria.loadTheme('/galleria-1.6.1/dist/themes/'); 


    Galleria.run('.galleria', {
        // theme: 'folio',
        // transition: 'fade',
        // imageCrop: false,
    });


    /* Galleria.ready(function(options) {
        // 'this' is the gallery instance
        // 'options' is the gallery options
        console.log(options);
    
        this.bind('image', function(e) {
            Galleria.log('Now viewing ' + e.imageTarget.src);
        });
    }); */

    /* Galleria.on('image', function(e) {
        Galleria.log('Now viewing ' + e.imageTarget.src);
    }); */


    // $('.galleria').data('galleria').enterFullscreen();
}());