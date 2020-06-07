<?php 
    $aFrotas = [
        ['frota' => 'Corola Vírus'],
        ['frota' => 'Celta'],
        ['frota' => 'Trator JD'],
        ['frota' => 'Ferrari'],
    ];
?>
<!doctype html>
<html lang="en">

<head>
    <title>Multiselected widget</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" media="screen" href="//netdna.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">

    <style>
        #box {
            display: flex;
            flex-direction: row;
        }
    </style>
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div id="box" class="input-group">
                    <select name="frotas" id="frotas" class="" required="required">
                        <?php foreach($aFrotas as $key => $aFrota): ?>
                            <option value="<?= $aFrota['key'] ?>"><?= $aFrota['frota'] ?></option>
                        <?php endforeach ?>
                    </select>
                    <button id="trazer-mais-itens" type="button" class="btn btn-success">Trazer mais itens</button>
                </div>
            </div>
        </div>
    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="//code.jquery.com/jquery-1.11.2.min.js"></script>
    <link rel="stylesheet" href="css/jquery-ui.css">
    <link rel="stylesheet" href="https://code.jquery.com/ui/1.11.3/themes/smoothness/jquery-ui.css" />
    <script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous">
    </script>
    <script src="//netdna.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>

    <link rel="stylesheet" type="text/css" href="multiselect/css/jquery.multiselect.css" />
    <link rel="stylesheet" type="text/css" href="multiselect/css/jquery.multiselect.filter.css" />
    <link rel="stylesheet" type="text/css" href="multiselect/css/style.css" />
    <script type="text/javascript" src="multiselect/js/jquery.multiselect.js"></script>
    <script type="text/javascript" src="multiselect/js/jquery.multiselect.filter.js"></script>

    <script>
        $("#frotas").multiselect().multiselectfilter();
        
        let key = 0;
        
        $("#trazer-mais-itens").click(() => {
            $.ajax({
                url: 'ajax/ajax-data.php' ,
                type: 'post',
                dataType: 'json',
                data: {
                    key: key ++,
                },
                success: function(response) {
                    console.log(response);
                    response.forEach((data, index, array) => {
                        // console.log(data['frota']);
                        $("#frotas").append(`<option>${data['frota']}</option>`)
                    });
                    // console.log($("#frotas"));
                    $("#frotas").multiselect('refresh').multiselectfilter();
                },
                error: function(response) {
                    console.log(response);
                }
            });
        });

        let scroller = $("#frotas").multiselect("widget").children('ul')[0];
        $(scroller).bind('scroll', (evt) => {
            let maxScroll = scroller.scrollHeight - scroller.clientHeight;
            scroll = scroller.scrollTop / maxScroll;
            // scrollPercentage = scroller.scrollTop / maxScroll * 100;
            if (scroll > 0.8) {
                $.ajax({
                    url: 'ajax/ajax-data.php' ,
                    type: 'post',
                    dataType: 'json',
                    data: {
                        key: key ++,
                    },
                    success: function(response) {
                        console.log(response);
                        response.forEach((data, index, array) => {
                            // console.log(data['frota']);
                            $("#frotas").append(`<option>${data['frota']}</option>`)
                        });
                        // console.log($("#frotas"));
                        $("#frotas").multiselect('refresh').multiselectfilter();
                    },
                    error: function(response) {
                        console.log(response);
                    }
                });
            }
        });
    </script>
</body>

</html>