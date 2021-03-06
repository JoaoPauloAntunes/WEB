<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	<div class="container">
		<div class="row">
			<div class="md-col-12">
				<h1 title="olá mundo">Olá mundo, PWA!</h1>
			</div>
		</div>
		<div class='row'>
	        <div class='md-col-12'>
	            <table class="dt">
	                <thead>
	                    <th>col 1</th>
	                    <th>col 2</th>
	                    <th>col 3</th>
	                </thead>
	                <!--<tbody>-->
	                <!--    <tr>-->
    	            <!--        <td>1</td>-->
    	            <!--        <td>2</td>-->
    	            <!--        <td>3</td>-->
    	            <!--    </tr>-->
	                <!--    <tr>-->
    	            <!--        <td>4</td>-->
    	            <!--        <td>5</td>-->
    	            <!--        <td>6</td>-->
    	            <!--    </tr>-->
	                <!--</tbody>-->
	            </table>
	        </div>
	    </div>
	</div>
	<script type="text/javascript" src='js/jquery.js'></script>
	<script type="text/javascript" src='js/bootstrap.js'></script>
	<script type='text/javascript' src='js/datatables.min.js'></script>
	
	<script type='text/javascript'>
	    var dt_apont = $(".dt").DataTable({
        	"language": { // https://datatables.net/reference/option/language 
        		"lengthMenu": "Mostrar _MENU_ registros",
        		"zeroRecords": "Não encontrado - desculpa",
        		"info": "Mostrando de _START_ até _END_ de _TOTAL_ registros",
        		"infoEmpty": "Sem registros disponíveis",
        		"infoFiltered": "(Filtrado de um total de _MAX_ registros)",
        		"loadingRecords": "Carregando...",
        		"processing": "Processando...",
        		"search": "<strong>Buscar: </strong>",
        		"zeroRecords": "Nenhum registro foi encontrado",
        		"paginate": {
        			"first":      "Primeira",
        			"last":       "Última",
        			"next":       "Próxima",
        			"previous":   "Anterior",
        			"aria": {
        				"sortAscending":  ": ordenação de coluna crescente",
        				"sortDescending": ": ordenação de coluna decrescente"
        			}
        		}
        	}
        });
        // dt_apont.draw();
	</script>
</body>
</html>