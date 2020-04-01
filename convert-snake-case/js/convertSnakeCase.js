$('.snakeField').keyup(function(e){
	$(this).val(convertSnakeCase($(this).val()));
});

$('.snakeField').blur(function(e){
	$(this).val(convertSnakeCase2($(this).val()));
});

function convertSnakeCase(str) {
	// str = 'Um Palâv$rãáào díì#îî!èñç exéèÊêmpl+ôùúûñ*';
	return str.normalize('NFD') // separa caracteres diacríticos (acentos) das letras
			.replace(/[\u0300-\u036f]/g, '') // remove caracteres diacríticos
			.replace(/([^\w]+|\s+)/g, '_') // substitui espaço e outros caracteres que não são de palavra por underline
			.toLowerCase(); // deixa todos os caracteres minúsculos
}

 function convertSnakeCase2(str) {
	// str = 'Um Palâv$rãáào díì#îî!èñç exéèÊêmpl+ôùúûñ*';
	return str.normalize('NFD') // separa caracteres diacríticos (acentos) das letras
			.replace(/[\u0300-\u036f]/g, '') // remove caracteres diacríticos
			.replace(/([^\w]+|\s+)/g, '_') // substitui espaço e outros caracteres que não são de palavra por underline
			.replace(/\_\_+/g, '_') // substitui múltiplos underlines por um único underline
			.replace(/(^_+|_+$)/, '') // remove underlines extras do ínicio ou do final da string
			.toLowerCase(); // deixa todos os caracteres minúsculos
}