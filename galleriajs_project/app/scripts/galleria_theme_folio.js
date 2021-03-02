(function() {
    Galleria.loadTheme('/galleria-1.6.1/dist/themes/folio/galleria.folio.min.js'); 


    Galleria.run('.galleria', {
        theme: 'folio',
        _center: true,
    });

    Galleria.ready(function(options) {
        // 'this' is the gallery instance
        // 'options' is the gallery options
        console.log(options);

        this.setOptions({
            imagePosition: 'right bottom',
            imageCrop: true
        }).refreshImage();
    
        this.bind('image', function(e) {
            Galleria.log('Now viewing ' + e.imageTarget.src);
        });
    });
}());