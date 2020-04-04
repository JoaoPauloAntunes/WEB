/*
Testes que funcionaram:
- propriedade targets visinha de "className: 'noVis'" da coleção de objetos de columnDefs:
	- as colunas escolhidas não são mostradas nas opções de filtro
	- mudar valores:
		- targets: 0
		- targets: [0, 2]

*/
$(document).ready(function() {
	$('#example').DataTable( {
		dom: 'Bfrtip',
		columnDefs: [
			{
				targets: [0, 2],
				className: 'noVis'
			}
		],
		buttons: [
			{
				extend: 'colvis',
				columns: ':not(.noVis)'
			}
		]
	} );
} );