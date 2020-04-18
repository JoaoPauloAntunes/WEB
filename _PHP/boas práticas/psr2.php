<?php
class Validator
{
	public function validaUsuario($usuario)
	{
		if (self::validaNome($usuario->getNome())
			&& self::validaEmail($usuario->getEmail())
			&& self::validaSenha($usuario->getSenha())) {
				return true;
		} else {
			return false;
		}
	}
}