$(document).ready(function (){
    var dt_apont = $(".dt").DataTable({
        "language": { // https://datatables.net/reference/option/language 
    		"lengthMenu": "Mostrar _MENU_ registros",
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
});