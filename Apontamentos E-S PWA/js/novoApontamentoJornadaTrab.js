function formatDate(date){
	let d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    let year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}
// diferença em minutos de duas horas passadas como parâmetro
function difMinHoras(horaAntes, horaDepois){
	let partesHora1 = horaAntes.split(":");
	let hora1 = parseInt(partesHora1[0]);
	let min1 = parseInt(partesHora1[1]);
	tot_min1 = hora1 * 60 + min1;

	let partesHora2 = horaDepois.split(":");
	let hora2 = parseInt(partesHora2[0]);
	let min2 = parseInt(partesHora2[1]);
	tot_min2 = hora2 * 60 + min2;

	let dif = tot_min2 - tot_min1;
	return dif;
}

function YYYY_MM(){
	var dtToday = new Date();

    var month = dtToday.getMonth() + 1;
    var year = dtToday.getFullYear();

    if(month < 10)
        month = '0' + month.toString();
    return year + "-" + month;
}

$(".novoApontamentoJornadaTrab").click(function (){
	var yyyy_mm = YYYY_MM();

	var today = new Date();
	var lastDayOfMonth = new Date(today.getFullYear(), today.getMonth()+1, 0);
	lastDayOfMonth = lastDayOfMonth.getDate();

	// alert("novoApontamento");
	var dialog = bootbox.dialog({
		title: 'Novo apontamento de jornada de trabalho',
		message:
		'<form class="needs-validation" novalidate>' + 
			'<div class="form-row">' + 
				'<div class="col-sm-4">' + 
					'<label for="dat_apont">Dia de jornada <span style="color: red; margin: 0px;">*</span></label>' + 
					'<input type="date" min="'+yyyy_mm+'-01'+'" max="'+yyyy_mm+'-'+lastDayOfMonth+'" class="form-control" id="dat_apont" value="'+formatDate(new Date())+'" required />' + 
					'<div class="valid-feedback" id="valid_dat_apont">Campo preenchido!</div>' + 
					'<div class="invalid-feedback">Data inválida!</div>' + 
				'</div>' + 
			'</div>' +
			'<div class="form-row">' + 
				'<div class="col-sm-3">' + 
					'<label for="hora_ini_jornada">Início de jornada <span style="color: red; margin: 0px;">*</span></label>' + 
					'<input type="time" class="form-control" id="hora_ini_jornada" required />' + 
					'<div class="valid-feedback" id="valid_hora_ini_jornada">Campo preenchido!</div>' + 
					'<div class="invalid-feedback">Preencha este campo!</div>' + 
				'</div>' + 
				'<div class="col-sm-3">' + 
					'<label for="hora_ini_almoco">Início de almoço <span style="color: red; margin: 0px;">*</span></label>' + 
					'<input type="time" class="form-control" id="hora_ini_almoco" required />' + 
					'<div><span class="copiarCampoAnt" value="hora_ini_jornada,hora_ini_almoco">Copiar campo anterior</span></div>'+
					'<div class="valid-feedback" id="valid_hora_ini_almoco">Campo preenchido!</div>' + 
					'<div class="invalid-feedback" id="invalid_hora_ini_almoco">Preencha este campo!</div>' + 
				'</div>' + 
				'<div class="col-sm-3">' + 
					'<label for="hora_fim_almoco">Fim de almoço <span style="color: red; margin: 0px;">*</span></label>' + 
					'<input type="time" class="form-control" id="hora_fim_almoco" required />' + 
					'<div><span class="copiarCampoAnt" value="hora_ini_almoco,hora_fim_almoco">Copiar campo anterior</span></div>'+
					'<div class="valid-feedback" id="valid_hora_fim_almoco">Campo preenchido!</div>' + 
					'<div class="invalid-feedback">Preencha este campo!</div>' + 
				'</div>' + 
				'<div class="col-sm-3">' + 
					'<label for="hora_fim_jornada">Fim de jornada <span style="color: red; margin: 0px;">*</span></label>' + 
					'<input type="time" class="form-control" id="hora_fim_jornada" required />' + 
					'<div><span class="copiarCampoAnt" value="hora_fim_almoco,hora_fim_jornada">Copiar campo anterior</span></div>'+
					'<div class="valid-feedback" id="valid_hora_fim_jornada">Campo preenchido!</div>' + 
					'<div class="invalid-feedback">Preencha este campo!</div>' + 
				'</div>' + 
			'</div>' +
			'<div class="form-row">' + 
				'<div class="col-sm-12">' + 
					'<label for="descr">Atividades do dia <span style="color: red; margin: 0px;">*</span></label>' + 
					'<textarea class="form-control" id="descr" required></textarea>' + 
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

					// console.log("qtd_validados: "+qtd_validados);

					var requestError = '';
					var validado = false;

					if(qtd_validados == 6)
					{
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
								op: "inserir apontamento de jornada de trabalho"
								,rowApontamentoJornadaTrab: {
									'dat_apont': $("#dat_apont").val().replace("/", "-")
									,'hora_ini_jornada': $("#hora_ini_jornada").val()
									,'hora_ini_almoco': $("#hora_ini_almoco").val()
									,'hora_fim_almoco': $("#hora_fim_almoco").val()
									,'hora_fim_jornada': $("#hora_fim_jornada").val()
									,'descr': $("#descr").val()
								}
							}
							,success: function (retorno){
								validado = true;
								console.log("success:");
								console.log(retorno);
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
					// janela não fecha enquanto o retorno é false
					return false;
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