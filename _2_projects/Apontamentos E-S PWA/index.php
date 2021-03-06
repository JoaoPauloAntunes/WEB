<?php
	require "DBConnect.php";

	/* Se chegar dado de operação do cliente no servidor 
	pelo protocolo HTTP, utilizando o método POST, 
	tratar este dado*/
	if(isset($_POST['op'])){
		// Se a operação for
		if($_POST['op'] == "obter dados tabelaApontamentosJornadaTrabMesCorrente")
		{
			// Obtém minutos trabalhados no mês
			$query = 
			"SELECT 
				SUM(((hour(hora_fim_jornada)*60 + minute(hora_fim_jornada)) - (hour(hora_ini_jornada)*60 + minute(hora_ini_jornada)))
			    -((hour(hora_fim_almoco)*60 + minute(hora_fim_almoco)) - (hour(hora_ini_almoco)*60 + minute(hora_ini_almoco)))) as minsMes
			FROM
			    apontamentoJornadaTrab
			WHERE
			    MONTH(dat_apont) = MONTH(CURRENT_DATE()) order by hora_ini_jornada";

			$res = $mysqli->query($query) or die($mysqli->error);
			$minsMes = floatval($res->fetch_assoc()["minsMes"]);
			$horasMes = $minsMes/60.0;

			// inicia sessão, se ela não estiver aberta
			if(session_status() !== PHP_SESSION_ACTIVE){
				@session_start();
			}
			$_SESSION['minsMes'] = $minsMes;
			$_SESSION['horasMes'] = $horasMes;

			# Obtém linhas da tabela
			$query = "
			SELECT 
				id,
				dat_reg, 
				dat_apont, 
				hora_ini_jornada, 
				hora_ini_almoco, 
				hora_fim_almoco, 
				hora_fim_jornada, 
				descr
			FROM 
				apontamentoJornadaTrab
			where month(dat_apont) = month(CURRENT_DATE())";

			$res = $mysqli->query($query) or die($mysqli->error);

			$rowsDt = [];
			while ($row = $res->fetch_assoc()) {
				$rowsDt[] = array(
					"id" => $row["id"]
					,"dat_reg" => $row["dat_reg"]
					,"dat_apont" => $row["dat_apont"]
					,"hora_ini_jornada" => $row["hora_ini_jornada"]
					,"hora_ini_almoco" => $row["hora_ini_almoco"]
					,"hora_fim_almoco" => $row["hora_fim_almoco"]
					,"hora_fim_jornada" => $row["hora_fim_jornada"]
					,"descr" => $row["descr"]
				);
				// obtém tamado de rowsDt
				$t_rowsDt = count($rowsDt);
			}

			echo json_encode($rowsDt);
		}
		else if($_POST['op'] == "tableParaSession"){

			// inicia sessão, se ela não estiver aberta
			if(session_status() !== PHP_SESSION_ACTIVE){
				@session_start();
			}
			// Grava valores dentro da sessão aberta:
			$now = new DateTime();
			// nome para o arquivo excel

			/*
			F	Um representação completa de um mês, como January ou March	January até December
			m	Representação numérica de um mês, com zero à esquerda	01 a 12
			M	Uma representação textual curta de um mês, três letras	Jan a Dec
			n	Representação numérica de um mês, sem zero à esquerda	1 a 12
			t	Número de dias de um dado mês	28 até 31
			*/
			$mes = intval($now->format('n')) - 1;
			$str_meses = array("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro");

			$_SESSION["nome"] = "apontamentos_jornada_trab_mes_{$str_meses[$mes]}";
			// conteúdo html do arquivo excel
			$_SESSION['table'] = $_POST['table']; 

			echo json_encode($_POST['table']);
		}
		else if($_POST['op'] == "inserir apontamento de jornada de trabalho")
		{
			$row = $_POST['rowApontamentoJornadaTrab'];

			$query = "
			SELECT 
			    *
			FROM
			    apontamentoJornadaTrab
			WHERE
			    dat_apont = '" . $row['dat_apont'] . "'";
			$res = $mysqli->query($query) or die($mysqli->error);

			if(mysqli_num_rows($res) == 0)
			{
				$query = 
				"insert into apontamentoJornadaTrab
				(dat_reg, 
				dat_apont, 
				hora_ini_jornada, 
				hora_ini_almoco, 
				hora_fim_almoco, 
				hora_fim_jornada, 
				descr) values 
				(CURRENT_DATE(), ".
				"'".$row['dat_apont']."', ".
				"'".$row['hora_ini_jornada']."', ".
				"'".$row['hora_ini_almoco']."', ".
				"'".$row['hora_fim_almoco']."', ".
				"'".$row['hora_fim_jornada']."', ".
				"'".$row['descr']."')";

				// retorna true se success
				$mysqli->query($query) or die($mysqli->error);

				echo json_encode($query);
			}
			else{
				/* 
				Retorna mensagem de erro.
				Executa atributo error function do objeto passado
				como parâmetro na função ajax
				*/
				die("Dia de jornada inválido!");
			}
		}
		else if($_POST['op'] == 'update_row_dt_apont')
		{
			$row = $_POST['row'];

			$query = "
			SELECT 
			    *
			FROM
			    apontamentoJornadaTrab
			WHERE
			    dat_apont = '" . $row['dat_apont'] . "'";
			$res = $mysqli->query($query) or die($mysqli->error);
			$dat_apont = $res->fetch_assoc()['dat_apont'];

			// echo "<pre>".var_dump($dat_apont)."</pre>";
			/*
			Atualiza registro 
				se o novo dia de jornada (dat_apont)
			não coincidir com um dia de jornada já existente 
			OU
				se o novo dia de jornada for o mesmo dia de 
			jornada do registro que se deseja atualizar
			*/
			if((mysqli_num_rows($res) == 0) || ($dat_apont == $_POST['dat_apont_atualizar'])){
				$query = "
				update apontamentoJornadaTrab set 
				dat_reg=CURRENT_DATE(),
				dat_apont='".$row['dat_apont']."',
				hora_ini_jornada='".$row['hora_ini_jornada']."',
				hora_ini_almoco='".$row['hora_ini_almoco']."',
				hora_fim_almoco='".$row['hora_fim_almoco']."',
				hora_fim_jornada='".$row['hora_fim_jornada']."',
				descr='".$row['descr']."' 
				where id='".$row['id']."'";
				$res = $mysqli->query($query) or die($mysqli->error);	

				echo json_encode("query: ".$query."\nres: ".$res);
			}
			else{
				/* 
				Retorna mensagem de erro.
				Executa atributo error function do objeto passado
				como parâmetro na função ajax
				*/
				die("Dia de jornada inválido!");
			}
		}
		else if($_POST['op'] == 'delete_row_dt_apont'){
			$query = 
			"delete from apontamentoJornadaTrab 
			 where id='{$_POST['row_id']}'";

			$res = $mysqli->query($query) or die($mysqli->error);
			echo json_encode("query: ".$query."\nres: ".$res);
		}

		/*
		Dado de operação tratado!
		Encerra script PHP sem executar as demais linhas.
		https://www.php.net/manual/pt_BR/function.exit.php
		*/
		exit;
	}
?>

<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="content-type" content="text/html; charset=utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!-- Favicon -->
	<link rel='shortcut icon' href="images/bomb.png"/>

	<title>Apontamentos de jornada de trabalho</title>
	<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="css/jquery.dataTables.min.css">
	<style type="text/css">
		/*scrollbar styles 
		"::": significa pseudo-elemento
		*/
		::-webkit-scrollbar {
		    width: 5px;
		}
		::-webkit-scrollbar-thumb {
		    background: #083923;
		}

		.form-row{
			padding: 13px 0 13px;
		}
		.copiarCampoAnt{
			font-size: 12.8px;
			color:#17A2B8;
		}
		.copiarCampoAnt:hover{
			cursor: pointer;
		}
		h3{
			font: 24px Helvetica;
			margin: 20px 0 10px;
		}
		button{
			margin: 20px 0 10px;
		}

		footer{
			background: #083923;
			color: white;
			text-align: center;
			padding: 15px; 
			height: 50px;
			margin: 10px 0 0 0;
			width: 100%;
		}
	</style>
</head>
<body>
	<main>
		<div class="container">
			<div class="row">
				<div class="col-md-10">
					<h3>Apontamentos de jornada de trabalho</h3>
				</div>
				<div class="col-md-2">
					<button class="novoApontamentoJornadaTrab btn btn-primary" title="Clique para adicionar um apontamento">Novo</button>
					<button class='btnGeraExcel btn btn-primary' title="Clique para exportar Excel">Excel</button>
				</div>
				<div class="col-md-12">
					<hr />
				</div>
				<div class="col-md-12">
					<table class="tabelaApontamentosJornadaTrabMesCorrente" id="dvData">
						<thead>
							<tr>
								<th class="datetime">Data de apontamento</th>
								<th class="datetime">Data de registro</th>
								<th class="campoNome">Nome do funcionário</th>
								<th class="hour">Hora de início de jornada</th>
								<th class="hour">Hora de início de almoço</th>
								<th class="hour">Hora de fim de almoço</th>
								<th class="hour">Hora de fim de jornada</th>
								<th class="campoDescr">Atividades do dia</th>

								<th>Editar</th>
								<th>Excluir</th>
							</tr>
						</thead>
					</table>
				</div>
			</div>
		</div>
		<footer>
			<p>Todos os Direitos Reservados © 2016 - Farm Solutions.	Versão software: 1.4.2</p>
		</footer>
		
		<script type="text/javascript" src="js/jquery.js"></script>
		<script type="text/javascript" src='js/bootstrap.js'></script>
		<script type="text/javascript" src='js/bootbox.js'></script>
		<script type="text/javascript" src="js/datatables.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.10.3/xlsx.full.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/1.3.3/FileSaver.min.js"></script>

		<script type="text/javascript" src="js/tabelaApontamentosJornadaTrabMesCorrente.js"></script>
		<script type="text/javascript" src="js/novoApontamentoJornadaTrab.js"></script>
		<!-- <script type="text/javascript" src="js/exportExcel.js"></script> -->
	</main>
</body>
</html>