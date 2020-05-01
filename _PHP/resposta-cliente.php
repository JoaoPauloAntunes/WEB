<?php 
function desencadearErroUsuario($msg)
{
    trigger_error($msg, E_USER_ERROR);
}

function retornaSucessoUsuario($msg)
{
	$response['SUCCESS'] = $msg;
	echo json_encode($response);
	exit;
}

function retornaErroUsuario($msg)
{
    $response['ERROR'] = $msg;
    echo json_encode($response);
    exit;
}

function retornaErroUsuarioCampoVazioOuChrInapropriados($nomeCampo)
{
	retornaErroUsuario("Campo requerido $nomeCampo vazio ou com caracteres inapropriados!");
}

function retornaErroUsuarioCampoEmailInvalido($nomeCampo)
{
	retornaErroUsuario("Campo de e-mail $nomeCampo inválido!");
}

function retornaErroUsuarioCampoTamanhoInvalido($nomeCampo, $tam)
{
	retornaErroUsuario("Campo $nomeCampo com tamanho inválido ($tam)!");
}

function retornaErroUsuarioCampoOpcionalTamanhoInvalido($nomeCampo, $tam)
{
	retornaErroUsuario("Campo opcional $nomeCampo foi preenchido com tamanho inválido ($tam)!");
}