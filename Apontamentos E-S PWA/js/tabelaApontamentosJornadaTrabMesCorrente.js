$('.btnGeraExcel').click(function(event) {
  tablesToExcel(['dvData'], ['Apontamentos de jornada de Trabalho do mês corrente'], 'apontamentos-jornada-trabalho-mes-corrente.xls', 'Excel');
});

var tablesToExcel = (function() {
    var uri = 'data:application/vnd.ms-excel;base64,'
    , tmplWorkbookXML = '<?xml version="1.0"?><?mso-application progid="Excel.Sheet"?><Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet" xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet">'
      + '<DocumentProperties xmlns="urn:schemas-microsoft-com:office:office"><Author>Axel Richter</Author><Created>{created}</Created></DocumentProperties>'
      + '<Styles>'
      + '<Style ss:ID="Currency"><NumberFormat ss:Format="Currency"></NumberFormat></Style>'
      + '<Style ss:ID="Date"><NumberFormat ss:Format="Medium Date"></NumberFormat></Style>'
      + '</Styles>' 
      + '{worksheets}</Workbook>'
    , tmplWorksheetXML = '<Worksheet ss:Name="{nameWS}"><Table>{rows}</Table></Worksheet>'
    , tmplCellXML = '<Cell{attributeStyleID}{attributeFormula}><Data ss:Type="{nameType}">{data}</Data></Cell>'
    , base64 = function(s) { return window.btoa(unescape(encodeURIComponent(s))) }
    , format = function(s, c) { return s.replace(/{(\w+)}/g, function(m, p) { return c[p]; }) }
    return function(tables, wsnames, wbname, appname) {
      var ctx = "";
      var workbookXML = "";
      var worksheetsXML = "";
      var rowsXML = "";

      for (var i = 0; i < tables.length; i++) {
        if (!tables[i].nodeType) tables[i] = document.getElementById(tables[i]);
        for (var j = 0; j < tables[i].rows.length; j++) {
          rowsXML += '<Row>'
          for (var k = 0; k < tables[i].rows[j].cells.length; k++) {
            var dataType = tables[i].rows[j].cells[k].getAttribute("data-type");
            var dataStyle = tables[i].rows[j].cells[k].getAttribute("data-style");
            var dataValue = tables[i].rows[j].cells[k].getAttribute("data-value");
            dataValue = (dataValue)?dataValue:tables[i].rows[j].cells[k].innerHTML;
            var dataFormula = tables[i].rows[j].cells[k].getAttribute("data-formula");
            dataFormula = (dataFormula)?dataFormula:(appname=='Calc' && dataType=='DateTime')?dataValue:null;
            ctx = {  attributeStyleID: (dataStyle=='Currency' || dataStyle=='Date')?' ss:StyleID="'+dataStyle+'"':''
                   , nameType: (dataType=='Number' || dataType=='DateTime' || dataType=='Boolean' || dataType=='Error')?dataType:'String'
                   , data: (dataFormula)?'':dataValue
                   , attributeFormula: (dataFormula)?' ss:Formula="'+dataFormula+'"':''
                  };
            rowsXML += format(tmplCellXML, ctx);
          }
          rowsXML += '</Row>'
        }
        ctx = {rows: rowsXML, nameWS: wsnames[i] || 'Sheet' + i};
        worksheetsXML += format(tmplWorksheetXML, ctx);
        rowsXML = "";
      }

      ctx = {created: (new Date()).getTime(), worksheets: worksheetsXML};
      workbookXML = format(tmplWorkbookXML, ctx);

      var link = document.createElement("A");
      link.href = uri + base64(workbookXML);
      link.download = wbname || 'Workbook.xls';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
})();

var rows_dt_apont;

var nome = "João Paulo";

var dt_apont = $(".tabelaApontamentosJornadaTrabMesCorrente").DataTable({
	"order": [[0, "desc"], [1, "desc"]],
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
	,"columns": [
		{"data": "dat_apont", "visible": true },
		{"data": "dat_reg", "visible": false },
		{"data": "nome", "className": "campoNome", "visible": true },
		{"data": "hora_ini_jornada", "visible": true },
		{"data": "hora_ini_almoco", "visible": true },
		{"data": "hora_fim_almoco", "visible": true },
		{"data": "hora_fim_jornada", "visible": true },
		{"data": "descr", "className": "campoDescr", "visible": true },

		{"data": "editar", "visible": true },
		{"data": "excluir", "visible": true },
	]
	,"columnDefs": [
    	// encurta strings grandes
    	{ 
    		targets: ["campoNome", "campoDescr"],
    		render: function(data, type, row, meta){
    			if(type == "display"){

	    			if(data.length > 30){
	    				return data.substring(0, 30) + "...";
	    			}
	    			else
	    				return data;
    			}
    			else
    				return data;
    		}
    	},
    	// deixa formato de data como DD/MM/AAAA
    	{
    		targets: "datetime",
    		render: function(data, type, row, meta){
    			if(type == "display" || type == "filter"){
    				var format_dat = data.split('-');

    				return format_dat[2] + "/" + format_dat[1] + "/" + format_dat[0];
    			}
    			// type == "sort"
    			else{
    				return data;
    			}
    		}
    	},
    	// deixa formato de hora como HH:MM
    	{
    		targets: "hour",
    		render: function(data, type, row, meta){
    			var format_hora = data.split(':'); // tam: 3
    			if(type == "display" || type == "filter"){
    				return format_hora[0] + ":" + format_hora[1];
    			}
    			// type == "sort"
    			else{
    				return format_hora[0] + "" + format_hora[1];
    			}
    		}
    	}
    ]
});

function Atualiza_tabelaApontamentosJornadaTrabMesCorrente(){
	$.ajax({
		url: "index.php"
		,type: "post"
		,dataType: "json"
		,data: {
			op: "obter dados tabelaApontamentosJornadaTrabMesCorrente"
		}
		,success: function (retorno){
			// console.log(retorno);
			dt_apont.clear();
			rows_dt_apont = retorno;

			rows_dt_apont.forEach(function (row){
				dt_apont.row.add({
					"nome": nome,
					"dat_reg": row["dat_reg"],
					"dat_apont": row["dat_apont"],
					"hora_ini_jornada": row["hora_ini_jornada"],
					"hora_ini_almoco": row["hora_ini_almoco"],
					"hora_fim_almoco": row["hora_fim_almoco"],
					"hora_fim_jornada": row["hora_fim_jornada"],
					"descr": row["descr"],	
					"editar": "<button class='btn-editar btn btn-success' id='editar-" + row["id"] + "'>Editar</button>",
					"excluir": "<button class='btn-excluir btn btn-danger' id='excluir-" + row["id"] + "'>Excluir</button>"			
				});

			});

			dt_apont.draw();
			
			$(".btn-excluir").click(function(e){
				var row_id = $(this).attr("id").split("-")[1];
				// // console.log(row_id);
				$.ajax({
					url: 'index.php',
					type: 'post',
					dataType: 'json',
					data: {
						op: 'delete_row_dt_apont',
						row_id: row_id
					},
					success: function(res){
						// console.log(res);
						Atualiza_tabelaApontamentosJornadaTrabMesCorrente();
					}
				});
			});

			$(".btn-editar").click(function(e){
				var row_id = $(this).attr("id").split("-")[1];
				// // console.log(retorno['id']);
				// // console.log(row_id);

				var row_atualizar;
				retorno.forEach(function (row){
					if(row['id'] == row_id){
						row_atualizar = row;
						return;
					}
				});
				// // console.log(row_atualizar);

				var dialog = bootbox.dialog({
					title: 'Novo apontamento de jornada de trabalho',
					message:
					'<form class="needs-validation" novalidate>' + 
						'<div class="form-row">' + 
							'<div class="col-sm-4">' + 
								'<label for="dat_apont">Dia de jornada <span style="color: red; margin: 0px;">*</span></label>' + 
								'<input type="date" class="form-control" id="dat_apont" value="'+row_atualizar['dat_apont']+'" required />' + 
								'<div class="valid-feedback" id="valid_dat_apont">Campo preenchido!</div>' + 
								'<div class="invalid-feedback">Data inválida!</div>' + 
							'</div>' + 
						'</div>' +
						'<div class="form-row">' + 
							'<div class="col-sm-3">' + 
								'<label for="hora_ini_jornada">Início de jornada <span style="color: red; margin: 0px;">*</span></label>' + 
								'<input type="time" class="form-control" id="hora_ini_jornada" value="'+row_atualizar['hora_ini_jornada']+'" required />' +
								'<div class="valid-feedback" id="valid_hora_ini_jornada">Campo preenchido!</div>' + 
								'<div class="invalid-feedback">Preencha este campo!</div>' + 
							'</div>' + 
							'<div class="col-sm-3">' + 
								'<label for="hora_ini_almoco">Início de almoço <span style="color: red; margin: 0px;">*</span></label>' + 
								'<input type="time" class="form-control" id="hora_ini_almoco" value="'+row_atualizar['hora_ini_almoco']+'" required />' + 
								'<div><span class="copiarCampoAnt" value="hora_ini_jornada,hora_ini_almoco">Copiar campo anterior</span></div>'+ 
								'<div class="valid-feedback" id="valid_hora_ini_almoco">Campo preenchido!</div>' + 
								'<div class="invalid-feedback" id="invalid_hora_ini_almoco">Preencha este campo!</div>' + 
							'</div>' + 
							'<div class="col-sm-3">' + 
								'<label for="hora_fim_almoco">Fim de almoço <span style="color: red; margin: 0px;">*</span></label>' + 
								'<input type="time" class="form-control" id="hora_fim_almoco" value="'+row_atualizar['hora_fim_almoco']+'" required />' + 
								'<div><span class="copiarCampoAnt" value="hora_ini_almoco,hora_fim_almoco">Copiar campo anterior</span></div>'+
								'<div class="valid-feedback" id="valid_hora_fim_almoco">Campo preenchido!</div>' + 
								'<div class="invalid-feedback">Preencha este campo!</div>' + 
							'</div>' + 
							'<div class="col-sm-3">' + 
								'<label for="hora_fim_jornada">Fim de jornada <span style="color: red; margin: 0px;">*</span></label>' + 
								'<input type="time" class="form-control" id="hora_fim_jornada" value="'+row_atualizar['hora_fim_jornada']+'" required />' + 
								'<div><span class="copiarCampoAnt" value="hora_fim_almoco,hora_fim_jornada">Copiar campo anterior</span></div>'+
								'<div class="valid-feedback" id="valid_hora_fim_jornada">Campo preenchido!</div>' + 
								'<div class="invalid-feedback">Preencha este campo!</div>' + 
							'</div>' + 
						'</div>' +
						'<div class="form-row">' + 
							'<div class="col-sm-12">' + 
								'<label for="descr">Atividades do dia <span style="color: red; margin: 0px;">*</span></label>' + 
								'<textarea class="form-control" id="descr" required>'+row_atualizar['descr']+'</textarea>' + 
								'<div class="valid-feedback" id="valid_descr">Campo preenchido!</div>' + 
								'<div class="invalid-feedback">Preencha este campo!</div>' + 
							'</div>' + 
						'</div>' +
					'</form>',
					size: 'large',
					buttons: {
						cancel: {
							label: "Cancelar",
							className: 'btn-danger',
							callback: function () {
								// console.log('bootbox fechou!')
							}
						},
						confirm: {
							label: "Cadastrar",
							className: 'btn-info',
							callback: function(){
								// console.log("clicou em Cadastrar");

								let camposHoraInvalidos = false;

								/*gatilho para deixar os elementos com as classes 
								valid-feedback ou invalid-feedback visíveis, dependendo
								do seu estado.
								*/
								let qtd_validados = 0;
								$(".needs-validation").addClass('was-validated');

								/*se este elemento estiver visível: campo nome é válido, 
								senão: campo nome é inválido*/
								if($("#valid_dat_apont").is(":visible")) {
									// console.log("valid_dat_apont");
									// console.log($("#dat_apont").val());
									qtd_validados ++;
								}
								
								if($("#valid_hora_ini_jornada").is(":visible")) {
									// console.log("valid_hora_ini_jornada");
									// console.log($("#hora_ini_jornada").val());
									qtd_validados ++;
								}

								if($("#valid_hora_ini_almoco").is(":visible")) {
									// // console.log("difMinHoras: " + difMinHoras($("#hora_ini_jornada").val(), $("#hora_ini_almoco").val()));
									if(difMinHoras($("#hora_ini_jornada").val(), $("#hora_ini_almoco").val()) >= 0)
										qtd_validados ++;
									else{
										$("#hora_ini_almoco").val("");
										camposHoraInvalidos = true;
									}
								}

								if($("#valid_hora_fim_almoco").is(":visible")) {
									if(difMinHoras($("#hora_ini_almoco").val(), $("#hora_fim_almoco").val()) >= 0)
										qtd_validados ++;
									else{
										$("#hora_fim_almoco").val("");
										camposHoraInvalidos = true;
									}
								}

								if($("#valid_hora_fim_jornada").is(":visible")) {
									if(difMinHoras($("#hora_fim_almoco").val(), $("#hora_fim_jornada").val()) >= 0)
										qtd_validados ++;
									else{
										$("#hora_fim_jornada").val("");
										camposHoraInvalidos = true;
									}
								}

								if($("#valid_descr").is(":visible")) {
									// console.log("valid_descr");
									// console.log($("#descr").val());
									qtd_validados ++;
								}

								var requestError = '';
								var validado = false;

								// console.log("qtd_validados: "+qtd_validados);
								if(qtd_validados == 6)
								{
									// console.log("Validado");

									$.ajax({
										// Deixa a função síncrona para executar as linhas
										// seguintes só depois da chamada ajax
										async: false
										// Para qual endereço será enviado o dado?
										,url: "index.php" 
										// Qual será o método de requisição de dados HTTP (Hypertext Protocol) utilizado?
										,type: 'post'
										// Que tipo de dado será enviado?
										,dataType: 'json'
										// Qual será o dado?
										// O dado é um objeto json
											// informa qual é a operação
											// envia dados do formulário
										,data: {
											op: "update_row_dt_apont"
											,row: {
												'id': row_id
												,'dat_apont': $("#dat_apont").val().replace("/", "-")
												,'hora_ini_jornada': $("#hora_ini_jornada").val()
												,'hora_ini_almoco': $("#hora_ini_almoco").val()
												,'hora_fim_almoco': $("#hora_fim_almoco").val()
												,'hora_fim_jornada': $("#hora_fim_jornada").val()
												,'descr': $("#descr").val()
											}
											,dat_apont_atualizar: row_atualizar['dat_apont']
										}
										,success: function (retorno){
											validado = true;
											// console.log("success:");
											// console.log(retorno);
											Atualiza_tabelaApontamentosJornadaTrabMesCorrente();
										}
										,error: function (retorno){
											console.log("error:");
											validado = false;
											requestError = retorno.responseText;
										}
									});
								}

								if(!validado) {
									var erro;
									if(requestError != ''){
										erro = requestError;
									}
									else if(camposHoraInvalidos){
										erro = "Preencha os campos de <strong>hora</strong> corretamente!";
									}
									else{
										erro = "Preencha os campos corretamente!";
									}
									var msgErro = bootbox.dialog({
										message: erro
									});

									setTimeout(function (){
										msgErro.modal('hide');
									}, 3000);

									// janela não fecha enquanto o retorno é false
									return false;
								}
							}
						}
					}
				});
				
				$(".copiarCampoAnt").click(function(){
					var split_value = $(this)[0].attributes[1].value.split(',');
					var campoAnt = $('#' + split_value[0]).val();
					var campo = $('#' + split_value[1]).val(campoAnt);
				});
			});
		}
		,error: function (retorno){
			// console.log(retorno);
		}
	});
}

Atualiza_tabelaApontamentosJornadaTrabMesCorrente();
