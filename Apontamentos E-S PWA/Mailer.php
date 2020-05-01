<?php
    // mês do relatório consolidado de apontamentos de jornada de trabalho
    $mesApontamento = "Fevereiro";
    $nomeFuncionario = "João Paulo";
    $emailFuncionario = "jpantunesdesouza@gmail.com";
    $tempoMins = "6000";
    $tempoHoras = "100";

    $nomeDestinatario = "Samuel";
    $emailDestinatario = "joao.souza@farmsolutions.com.br";

    if (isset($mesApontamento)
        && isset($nomeDestinatario)
        && isset($nomeFuncionario)
        && isset($emailFuncionario)
        && isset($tempoMins)
        && isset($tempoHoras))
    {
        error_reporting(E_ALL);

        require 'PHPMailer/PHPMailerAutoload.php';

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
        // $mail->AddCC('andre.danelon@farmsolutions.com.br', 'Andre Danelon');
        // // $mail->AddCC('gustavo.mesquiati@farmsolutions.com.br', 'Gustavo Mesquiati');
        // // $mail->AddCC('pedro.rocha@farmsolutions.com.br', 'Pedro Rocha');

        // // // Cópias Ocultas:
        // $mail->AddBCC('jpantunesdesouza@gmail.com', 'João Paulo Antunes'); 
        // $mail->AddBCC('samuel.gazzola@farmsolutions.com.br', 'Samuel Gazzola');
        // $mail->AddBCC('tereza.peixoto@farmsolutions.com.br', 'Tereza Peixoto');

        // Construindo email:
        // CSS faz efeito nas tags se passado nelas como atributo
        $mail->Subject = "Resultado dos apontamentos de jornada de trabalho | {$nomeFuncionario} | {$mesApontamento}";
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
                <p style='color:'>Você está recebendo o <strong>resultado dos apontamentos de jornada de trabalho</strong> do funcionário <strong>{$nomeFuncionario}</strong> referente ao mês de <strong>{$mesApontamento}</strong>.</p>
                <br />
                <p>Tempo trabalhado (em minutos): <strong>{$tempoMins}</strong></p>
                <p>Tempo trabalhado (em horas): <strong>{$tempoHoras}</strong></p>
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
        $path = "docs/planilha_apontamentos_jornada_trab_mes_{$mesApontamento}.xls";
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
?>
