<?php
// @session_start();
// require_once "../config.php";
// global $config;
// include '../classes/conexaoMYSQLI_plataforma.php';

?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="">
        <meta name="author" content="">

        <link rel="icon" type="image/png" sizes="32x32" href="../favicon-32x32.png">
        <link rel="stylesheet" type="text/css" href="../css/bootstrap.min.css" media="screen" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
        <link rel="stylesheet" type="text/css" href="../plugin/colorbox/css/colorbox.css" />
        <link rel="stylesheet" type="text/css" href="../css/style-padrao.css" />
        <link href="../css/ie10-viewport-bug-workaround.css" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="../plugin/datetimepicker/jquery.datetimepicker.css"/>
        <link rel="stylesheet" href="../plugin/datatable/css/jquery.dataTables.min.css">

        <link rel="stylesheet" type="text/css" href="datatables/css/buttons.dataTables.min.css">


        <script src="../js/ie-emulation-modes-warning.js"></script>

        <style type="text/css">
            body {
                margin-bottom: 50px;
                padding-top: 70px;
            }
            div.dt-button-collection {
                min-width: 200px;
            }
            #table-lista-clientes tr th {
                text-align: center;
            }
        </style>
    </head>
    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-10 col-md-offset-1">
                    <div class="row">
                        <div class="col-md-12">
                            <h3 class="page-header">Clientes</h3>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <h3>Clientes</h3> <hr>
                        </div>

                        <div class="col-md-12">
                            <form action="/adm/pag-cadastro-cliente.php" name="fm" id="fm" method="POST">
                                <input type="hidden" name="id" id="id">
                                <input type="hidden" name="op" id="op">
                            </form>

                            <div class="table">
                                <table id="table-lista-clientes" class="display table responsive" width="100%">
                                    <thead>
                                        <tr>
                                            <th>Razao Social / Nome</th>
                                            <th>Nome Fantasia</th>
                                            <th>Cnpj / Cpf</th>
                                            <th>Inscrição Estadual</th> 
                                            <th>Inscrição Municipal</th> 

                                            <th>Endereço Fiscal</th> 
                                            <th>Número</th> 
                                            <th>Complemento</th> 
                                            <th>Bairro</th> 
                                            <th>UF</th> 
                                            <th>Cidade</th> 
                                            <th>CEP</th> 

                                            <th>Endereço Operacional</th> 
                                            <th>Número</th> 
                                            <th>Complemento</th> 
                                            <th>Bairro</th> 
                                            <th>UF</th> 
                                            <th>Cidade</th> 
                                            <th>CEP</th> 

                                            <th>Responsável Administrativo</th> 
                                            <th>Telefone</th> 
                                            <th>Ramal</th>
                                            <th>Celular</th> 
                                            <th>E-mail</th>  

                                            <th>Responsável Financeiro</th> 
                                            <th>Telefone</th> 
                                            <th>Ramal</th> 
                                            <th>Celular</th> 
                                            <th>E-mail</th>

                                            <th>Responsável Tecnico</th> 
                                            <th>Telefone</th> 
                                            <th>Ramal</th> 
                                            <th>Celular</th> 
                                            <th>E-mail</th> 
                                            
                                            <th>Criado Em</th>
                                            <th>Visualizar</th>
                                            <th>Editar</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
        <script src="//code.jquery.com/jquery-1.11.2.min.js"></script>
        <script src="/js/bootstrap.min.js"></script>
        <script src="/plugin/datatable/js/jquery.dataTables.min.js"></script>

        <script type="text/javascript" src="datatables/js/dataTables.buttons.min.js"></script>
        <script type="text/javascript" src="datatables/js/buttons.colVis.min.js"></script>
        
        <script src="js/lista-clientes.js"></script>
    </body>
</html>