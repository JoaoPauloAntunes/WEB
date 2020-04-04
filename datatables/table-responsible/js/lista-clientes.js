/*
-> DataTables
* VERSÃO:  1.10.11
* DOCUMENTAÇÃO:
- https://datatables.net/manual/server-side#Configuration

*/
/* carrega tabela dt após carregar o DOM */
$(function() {
    loadData();
});

function handleEdit(id) {
    document.getElementById("id").value = id;
    document.getElementById('op').value = 'EDITAR_CLIENTE';
    document.fm.submit();
}

function handlePreview(id) {
    document.getElementById("id").value = id;
    document.getElementById('op').value = 'VISUALIZAR_CLIENTE';
    document.fm.submit();
}

function loadData()
{
    $('#table-lista-clientes').DataTable({
        "order": [
        	[ 
	        	'5', 	// id_coluna >= 0; ordenado pelo datetime
	        	"desc" 
        	]
        ],
        "oLanguage": {
            "sProcessing":   "Processando...",
            "sLengthMenu":   "Mostrar _MENU_ registros",
            "sZeroRecords":  "Não foram encontrados resultados",
            "sInfo":         "Mostrando de _START_ até _END_ de _TOTAL_ registros",
            "sInfoEmpty":    "Mostrando de 0 até 0 de 0 registros",
            "sInfoFiltered": "",
            "sInfoPostFix":  "",
            "sSearch":       "Buscar:",
            "sUrl":          "",
            "oPaginate": {
              "sFirst":    "Primeiro",
              "sPrevious": "Anterior",
              "sNext":     "Seguinte",
              "sLast":     "Último"
            },
            // altera o rótulo deste botão
            // "buttons": {
            //   colvisRestore: "<strong>Restaurar visibilidade</strong>"
            // }
        },
        /* se true: cria os nós (linhas e células no corpo da tabela) quando eles são necessários para um draw (quando pega 
        os dados na fonte de dados)
        Use esta opção quando a fonte de dados pode ser grande. Ela irá economizar muito em tempo de processamento. Exemplo:
        ao invés de pegar do BD 1000 registros, pega só 10 e se precisar de mais, pega mais depois */
        deferRender: true,
        // ativa vertical scrolling definindo a altura do tbody (não altera a altura do theader e tfooter)
        scrollY:     570,
        // permite que a tabela reduza a altura quando um limitado número de linhas é mostrado
        /*
        Quando a rolagem vertical (y) é ativada pelo uso da opção scrollY, o DataTables força a altura da 
        janela de exibição da tabela para a altura especificada o tempo todo (útil para o layout). No entanto, 
        isso pode parecer estranho ao filtrar dados para um pequeno conjunto de dados, e o rodapé é deixado "flutuando" 
        mais para baixo. Esse parâmetro (quando ativado) fará com que o DataTables reduza a janela de exibição da tabela 
        quando o conjunto de resultados se ajustar à altura Y especificada.
        */
        scrollCollapse: true,
        /* propriedades do scroller option */
        scroller: {
            loadingIndicator: true
        },
        "columns": [
            { 'data': 'razao_social_nome', 'visible': true },
            { 'data': 'nome_fantasia', 'visible': true },
            { 'data': 'cnpj_cpf', 'visible': false },
            { 'data': 'inscricao_estadual', 'visible': false }, 
            { 'data': 'inscricao_municipal', 'visible': false },

            // { 'data': 'ende_fiscal', 'visible': false }, 
            // { 'data': 'ende_fiscal_num', 'visible': false }, 
            // { 'data': 'ende_fiscal_complemento', 'visible': false }, 
            // { 'data': 'ende_fiscal_bairro', 'visible': false }, 
            // { 'data': 'ende_fiscal_uf', 'visible': false }, 
            // { 'data': 'ende_fiscal_cidade', 'visible': false }, 
            // { 'data': 'ende_fiscal_cep', 'visible': false }, 

            // { 'data': 'ende_operacional', 'visible': false }, 
            // { 'data': 'ende_operacional_num', 'visible': false }, 
            // { 'data': 'ende_operacional_complemento', 'visible': false }, 
            // { 'data': 'ende_operacional_bairro', 'visible': false }, 
            // { 'data': 'ende_operacional_uf', 'visible': false }, 
            // { 'data': 'ende_operacional_cidade', 'visible': false }, 
            // { 'data': 'ende_operacional_cep', 'visible': false }, 

            // { 'data': 'resp_administrativo', 'visible': true }, 
            // { 'data': 'resp_administrativo_tel', 'visible': false }, 
            // { 'data': 'resp_administrativo_ramal', 'visible': false },
            // { 'data': 'resp_administrativo_cel', 'visible': false }, 
            // { 'data': 'resp_administrativo_email', 'visible': false },  

            // { 'data': 'resp_financeiro', 'visible': true }, 
            // { 'data': 'resp_financeiro_tel', 'visible': false }, 
            // { 'data': 'resp_financeiro_ramal', 'visible': false }, 
            // { 'data': 'resp_financeiro_cel', 'visible': false }, 
            // { 'data': 'resp_financeiro_email', 'visible': false },

            // { 'data': 'resp_tecnico', 'visible': true }, 
            // { 'data': 'resp_tecnico_tel', 'visible': false }, 
            // { 'data': 'resp_tecnico_ramal', 'visible': false }, 
            // { 'data': 'resp_tecnico_cel', 'visible': false }, 
            // { 'data': 'resp_tecnico_email', 'visible': false }, 

            { 'data': 'criado_em', 'visible': true}, // -3
            { 'data': 'id', 'visible': true },
            { 'data': 'id', 'visible': true }
        ],
        "columnDefs": [
            {
                targets: 'datetime',
                render: function(
                    data, // dado
                    type, // tipo de dado (display, sort, filter, type)
                    row, // objeto jquery da linha
                    meta) { // objeto jquery dos metadados

                    let split_date_hour = data.split(' ');
                    if (split_date_hour.length == 2) {
                        let date = split_date_hour[0];
                        date = date.split(/\D/g) // split string where don't match digit
                            .reverse().join('/');
                        let hour = split_date_hour[1];
                        return date + " " + hour;
                    } else {
                        return data;
                    }
                }
            },
            {
                targets: -2,
                searchable: false,
                orderable: false,
                className: 'text-center',
                render: function(data, type, row, meta) {
                    return "<button title='Visualizar' type='button' class='btn btn-secondary' onclick='handlePreview("+ row.id +")' >Visualizar</button>";
                }
            },
            {
                targets: -1,
                searchable: false,
                orderable: false,
                className: 'text-center',
                render: function(data, type, row, meta) {
                    return "<button title='Editar' type='button' class='btn btn-secondary' onclick='handleEdit("+ row.id +")' >Editar</button>";
                }
            }
        ],
        // adiciona botões na tabela
        dom: 'Bfrtip',
        buttons: [
            // propriedades do botão de visibilidade de colunas
            {
                // extende a classe botão afim de usar funcionalidades da classe filho de visibilidade de colunas
                extend: 'colvis',
                // define o rótulo deste botão
                text: 'Visibilidade de colunas',
                // define as colunas com o seletor que pega todas as colunas, exceto as que tem a classe noVis
                columns: ':not(.noVis)',

                // adiciona botão que restaura a visibilidade de colunas para o padrão
                // postfixButtons: [ 'colvisRestore' ],

                className: 'customColvis'
            },
            {
                extend: 'columnVisibility',
                text: 'Mostrar todas',
                visibility: true
            },
            {
                extend: 'columnVisibility',
                text: 'Ocultar todas',
                visibility: false
            },
            {
                // adiciona botão que restaura a visibilidade de colunas para o padrão
                extend: 'colvisRestore',
                text: 'Restaurar',
            }
        ]
    });
}