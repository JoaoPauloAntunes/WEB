// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise

// sintaxe do construtor Promise
// new Promise(/* executor */ function(resolve, reject) { ... });

// a função executor é chamada antes do retorno do construtor que retorna um objeto de instância dessa classe
/* a função executor tem dos argumentos do tipo function: resolve e reject
As funções resolve e reject, quando chamadas, resolvem (em caso de sucesso) ou rejeitam (quando ocorre um erro) a promessa, respectivamente. O executor começa o trabalho assíncrono que, quando concluído, chama uma das funções resolve ou reject para definir o estado da promessa.

*proxy: é o termo utilizado para definir os intermediários entre o usuário e seu servidor. Todos os dados que deseja acessar na internet são disponibilizados por um servidor. Logo, o servidor proxy atende seus pedidos e repassa os dados do usuário à frente

*protótipo: molde

Métodos:
- Promise.all(lista)
- Promise.race(lista)
- Promise.reject(motivo)
- Promise.resolve(valor)

- Promise.prototype.catch(onRejected)
- Promise.prototype.then(onFulfilled, onRejected)
*/ 

/*
Criando uma Promise:

onClick event do button é uma chamada assíncrona

Uma chamada assíncrona é uma chamada que desvia do ciclo do programa 
imagine uma linha temporal
ocorre um fork e uma instrução é realizada em outro thread. Ela pode terminar 
em um tempo diferente do thread que chamou esse thread
*/
$('button').click(testPromise);

function testPromise() {
	let time = 4000;
	let passo = 0;

	console.log('iniciando chamada síncrona (passo '+(++passo)+')');
	let p1 = new Promise(
		// resolve ou rejeita a promise
		function(resolve, reject) {
			console.log('iniciando chamada assíncrona (passo '+(++passo)+')');

			// criando assíncronismo
			window.setTimeout(
				function() {
					// cumpre a promessa
					resolve((++passo));
				}, time);
		});
	p1.then(
		function(passo) {
			console.log('finalizando chamada assíncrona (passo '+passo+')');
		});
	console.log('finalizando chamada síncrona (passo '+(++passo)+')');
}