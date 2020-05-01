$(".exportExcel").click(function(e) {
	window.location.href = "geradorExcel.php";
});

function tableParaSession(){
	// var node = document.getElementById("dvData");
	// var clone = node.cloneNode(true);//aqui você terá seu clone armazenado em variável mas ainda não incluido no Documento, sem parentNode.
	// clone.setAttribute('id', 'clone');

	// for(let i=1; i<=rows_dt_apont.length; i++){
	// 	clone.getElementsByClassName('campoDescr')[i]
	// 		.innerText = clone.getElementsByClassName('campoDescr')[i].getAttribute('title');
	// }
	// // console.log(clone);
	// var string_clone = clone.outerHTML;

	$.ajax({
		url: "index.php"
		,type: "post"
		,dataType: "json"
		,data: {
			op: "tableParaSession"
			,table: tableExcel
		}
		,success: function(retorno){
			console.log(retorno);
		}
		,error: function(retorno){
			console.log(retorno);
		}
	});
}