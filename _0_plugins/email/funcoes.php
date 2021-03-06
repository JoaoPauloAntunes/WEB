<?php

function autentica_email_manda($assunto,$msg,$destinatario)

{


   // chamada da classe phpmailer

 require_once('class.phpmailer.php');


   // faça chamada da classe

 $Email = new PHPMailer();



   // na classe, há opç de idioma, setei como br

 $Email->SetLanguage("br");



   // esta chamada diz que o envio seráeito atravéda funç mail do php. Vocêudar para sendmail, qmail, etc 

   // se quiser utilizar o programa de email do seu unix/linux para enviar o email

   // $Email->IsMail(); 

 $Email->IsSMTP();

 $Email->SMTPAuth = true;

 $Email->Mailer   = "smtp";

 $Email->Host     = "localhost";
 
 $Email->Port		= 587;

 $Email->Username = "nao.responder@etaeficiencia.com.br";

 $Email->Password = "Eta*2016";

 

   // ativa o envio de e-mails em HTML, se false, desativa.

 $Email->IsHTML(true); 



   // email do remetente da mensagem

 $Email->From = "nao.responder@etaeficiencia.com.br";



   // nome do remetente do email

 $Email->FromName = "ETA Efici�ncia";


   // Reply to do e-mail
 $Email->AddReplyTo("nao.responder@etaeficiencia.com.br", "ETA Efici�ncia");
 

   // Endereçde destino do emaail, ou seja, pra onde vocêuer que a mensagem do formuláo váEmai

 $Email->AddAddress($destinatario);



   // informando no email, o assunto da mensagem

 $Email->Subject = $assunto;



   // Define o texto da mensagem (aceita HTML)

 $Email->Body .= $msg;



 $Email->Send();

      //echo "<script language='JavaScript'>alert('A mensagem n�o foi enviada.Entre em contato com o Suporte T�cnico.'); </script>";

 

}



?>
