<?php
	$nomeFuncionario = "João Paulo";
    $emailFuncionario = "jpantunesdesouza@gmail.com";

	require "DBConnect.php";
	require 'PHPMailer/PHPMailerAutoload.php';

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

	// mês do relatório consolidado de apontamentos de jornada de trabalho
	$minsMes = floatval($res->fetch_assoc()["minsMes"]);
	$horasMes = $minsMes/60.0;

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
	";
	$query .= 
	// "where month(dat_apont) = month(CURRENT_DATE()) - 1";

	// Enquanto estou fazendo teste no mês corrente
	"where month(dat_apont) = month(CURRENT_DATE())";

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

	// Grava valores dentro da sessão aberta:
	$now = new DateTime();

	/*
	F	Um representação completa de um mês, como January ou March	January até December
	m	Representação numérica de um mês, com zero à esquerda	01 a 12
	M	Uma representação textual curta de um mês, três letras	Jan a Dec
	n	Representação numérica de um mês, sem zero à esquerda	1 a 12
	t	Número de dias de um dado mês	28 até 31
	*/
	// nome para o arquivo excel
	// $mesApontamento = intval($now->format('n')) - 2; # "-1: indice do array" + "-1: mês anterior"
	
	// Enquanto estou fazendo teste no mês corrente
	$mesApontamento = intval($now->format('n')) - 1; # "-1: indice do array"

	$str_meses = array("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro");

	// declara nome do arquivo
	$nomeArq = 'planilha_apontamentos_jornada_trab_mes_'.$str_meses[$mesApontamento].'.xls';

	// cria table
	$table = "
	<table>
		<thead>
			<tr>
				<th>Nome do funcionário</th>
				<th>Data de registro</th>
				<th>Data de apontamento</th>
				<th>Hora de início de jornada</th>
				<th>Hora de início de almoço</th>
				<th>Hora de fim de almoço</th>
				<th>Hora de fim de jornada</th>
				<th>Atividades do dia</th>
			</tr>
		</thead>
		<tbody>";
	$t_rowsDt = count($rowsDt);
	for($i=0; $i < $t_rowsDt; $i++){
		$table .= "
			<tr>
				<td>".$nomeFuncionario."</td>
				<td>".$rowsDt[$i]['dat_reg']."</td>
				<td>".$rowsDt[$i]['dat_apont']."</td>
				<td>".$rowsDt[$i]['hora_ini_jornada']."</td>
				<td>".$rowsDt[$i]['hora_ini_almoco']."</td>
				<td>".$rowsDt[$i]['hora_fim_almoco']."</td>
				<td>".$rowsDt[$i]['hora_fim_jornada']."</td>
				<td>".$rowsDt[$i]['descr']."</td>
			</tr>";
	}
	$table .= "
		</tbody>
	</table>";

	/*
	o Excel usa codificação de caracteres ISO-8859-1
	Como os dados estão na codificação UTF8, precisa 
	ser decodificado para ficar na codificação ISO-8859-1 
	https://www.php.net/manual/pt_BR/function.utf8-decode.php
	*/
	// decodificar string para ISO
	$table = utf8_decode($table);

	// modo escrita
	$modoAcesso = 'w';

	$path = "docs/planilha_apontamentos_jornada_trab_mes_{$nomeArq}";
	$arq = fopen($path, $modoAcesso);

	if(!$arq)
		die('Não foi possível criar o arquivo.');
	else{
		fwrite($arq, $table);

	    $nomeDestinatario = "Samuel";
	    $emailDestinatario = "joao.souza@farmsolutions.com.br";

	    if (isset($mesApontamento)
	        && isset($nomeDestinatario)
	        && isset($nomeFuncionario)
	        && isset($emailFuncionario)
	        && isset($minsMes)
	        && isset($horasMes))
	    {
	        error_reporting(E_ALL);


	        $mail = new PHPMailer; // Instancia objeto da classe PHPMailer
	        
	        // 0 não fornece msgs do Debug
	        // 1
	        // 3
	        // 4 fornece bem detalhadamente msgs do Debug
	        $mail->SMTPDebug = "3"; // 0 a 4
	        $mail->isHTML(true); // Define que o e-mail será enviado como HTML
	        $mail->isSMTP(); // Define que a mensagem será SMTP
	        $mail->SMTPAuth = true; // Usa autenticação SMTP? (obrigatório para alguns servidores, como o gmail)
	        $mail->SMTPSecure = 'tls'; 
	        $mail->CharSet = 'UTF-8';

	        $mail->Host = 'smtp.gmail.com';#'smtp.gmail.com';
	        $mail->Username = 'jpantunesdesouza.smtp@gmail.com'; // Usuário do servidor SMTP
	        $mail->Password = 'phpm@iler.smtp';// Senha do servidor SMTP
	        $mail->Port = 587;

	        // Remetente:
	        $mail->setFrom('jpantunesdesouza.smtp@gmail.com', 'sgo.naoresponder');

	        // Destinatário(s):
	        // $mail->addAddress('lucas.vicente@farmsolutions.com.br', 'Lucas Vicente'); 
	        $mail->addAddress($emailDestinatario, $nomeDestinatario);

	        // Cópias:
	        $mail->AddCC($emailFuncionario, $nomeFuncionario); 
	        // $mail->AddCC('andre.danelon@farmsolutions.com.br', 'Andre Danelon');
	        // // $mail->AddCC('gustavo.mesquiati@farmsolutions.com.br', 'Gustavo Mesquiati');
	        // // $mail->AddCC('pedro.rocha@farmsolutions.com.br', 'Pedro Rocha');

	        // // // Cópias Ocultas:
	        // $mail->AddBCC('jpantunesdesouza@gmail.com', 'João Paulo Antunes'); 
	        // $mail->AddBCC('samuel.gazzola@farmsolutions.com.br', 'Samuel Gazzola');
	        // $mail->AddBCC('tereza.peixoto@farmsolutions.com.br', 'Tereza Peixoto');

	        // Construindo email:
	        // CSS faz efeito nas tags se passado nelas como atributo
	        $mail->Subject = "Resultado dos apontamentos de jornada de trabalho | {$nomeFuncionario} | ".$str_meses[$mesApontamento];
	        $mail->Body = "
	            <div style='
	            background-color: #FFFFFF;
	            text-align: center;
	            font-size: 20px;
	            width: 650px;
	            border-width: 2px;
	            border-style: solid;
	            border-color: #070707;
	            padding: 20px;
	            '>
	                <h1 style='color: rgb(0, 176, 80);'>Olá, {$nomeDestinatario}!</h1>
	                <br />
	                <p style='color:'>Você está recebendo o <strong>resultado dos apontamentos de jornada de trabalho</strong> do funcionário <strong>{$nomeFuncionario}</strong> referente ao mês de <strong>{$str_meses[$mesApontamento]}</strong>.</p>
	                <br />
	                <p>Tempo trabalhado (em minutos): <strong>{$minsMes}</strong></p>
	                <p>Tempo trabalhado (em horas): <strong>{$horasMes}</strong></p>
	                <br />
	                <p>Para melhorar na legibilidade, anexamos uma <strong>planilha do Excel</strong> contendo os apontamentos de jornada de trabalho.</p>
	                <br />
	                <p>Ficando alguma dúvida, entre em contato com o funcionário <strong>{$nomeFuncionario}</strong> pelo e-mail: {$emailFuncionario}.</p>
	                <br />
	                <p>Agradecemos pelo <strong>seu tempo</strong>!</p>
	                <br />
	                <p>Atenciosamente,</p>
	                <p>Equipe Farm Solutions</p>
	            </div>";

	        // Adicionando arquivo

	        $mail->addAttachment($path); // Adiciona arquivo pelo local

	        // $ mail -> addAttachment ( $ caminho , $ nome , $ codificação , $ tipo ); // informe mais parâmetros

	        // Adiciona arquivo pela url
	        // // $url = "https://docente.ifrn.edu.br/rodrigotertulino/livros/notas-sobre-sistemas-operacionais";
	        // $url = "http://localhost/MySQL_Projects/_FS/ex1/index.php"; // informe a url de arquivo pdf para arquivo pdf
	        // $mail->addStringAttachment(file_POST_contents($url), 'index.php'); // use .pdf para arquivo pdf
	        
	        // echo '<pre>';
	        // var_dump($mail);
	        // echo '<pre>';

	        $mail->AltBody = "
	        Olá, {$nomeDestinatario}!
	        
	        Identificamos que o seu serviço de e-mail não suporta conteúdo em HTML. 
	        Por favor, faça o cadastro num serviço de e-mail que suporta.

	        Atenciosamente,
	        Equipe SGO
	        "; // Para quem não tem suporte para html

	        if (!$mail->send()) {
	            echo "Mensagem não enviada!!";
	            echo "\n";
	            echo "Erro no Mailer: {$mail->ErrorInfo}";
	        } else {
	            echo "Mensagem enviada!";
	        }
	    }

	}
?>