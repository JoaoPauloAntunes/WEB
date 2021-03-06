<?php
# Criar arquivo xls
if (session_status() !== PHP_SESSION_ACTIVE) {//Verificar se a sessão não já está aberta.
	@session_start();
}
$arquivo = 'planilha_xxxxxxxx.xls';

header ("Expires: Mon, 26 Jul 1997 05:00:00 GMT");
header ("Last-Modified: " . gmdate("D,d M YH:i:s") . " GMT");
header ("Cache-Control: no-cache, must-revalidate");
header ("Pragma: no-cache");
header ("Content-type: application/x-msexcel");
header ("Content-Disposition: attachment; filename=\"{$arquivo}\"" );
header ("Content-Description: PHP Generated Data" );

#echo $_SESSION['table'];
echo '<table class="tabelaApontamentosJornadaTrabMesCorrente dadosExcel dataTable no-footer" id="dvData" role="grid" aria-describedby="dvData_info">
						<thead>
							<tr role="row"><th class="sorting_asc" tabindex="0" aria-controls="dvData" rowspan="1" colspan="1" aria-label="dat_reg: activate to sort column descending" aria-sort="ascending" style="width: 117.6px;">dat_reg</th><th class="sorting" tabindex="0" aria-controls="dvData" rowspan="1" colspan="1" aria-label="dat_apont: activate to sort column ascending" style="width: 149.6px;">dat_apont</th><th class="sorting" tabindex="0" aria-controls="dvData" rowspan="1" colspan="1" aria-label="hora_ini_jornada: activate to sort column ascending" style="width: 229.6px;">hora_ini_jornada</th><th class="sorting" tabindex="0" aria-controls="dvData" rowspan="1" colspan="1" aria-label="hora_ini_almoco: activate to sort column ascending" style="width: 226.4px;">hora_ini_almoco</th><th class="sorting" tabindex="0" aria-controls="dvData" rowspan="1" colspan="1" aria-label="hora_fim_almoco: activate to sort column ascending" style="width: 238.4px;">hora_fim_almoco</th><th class="sorting" tabindex="0" aria-controls="dvData" rowspan="1" colspan="1" aria-label="hora_fim_jornada: activate to sort column ascending" style="width: 242.4px;">hora_fim_jornada</th><th class="sorting" tabindex="0" aria-controls="dvData" rowspan="1" colspan="1" aria-label="id: activate to sort column ascending" style="width: 49.6px;">id</th></tr>
						</thead>
					<tbody><tr role="row" class="odd"><td class="sorting_1">2020-02-15</td><td>2020-02-11</td><td>12:55:00</td><td>12:55:00</td><td>13:42:00</td><td>18:00:00</td><td>1</td></tr><tr role="row" class="even"><td class="sorting_1">2020-02-15</td><td>2020-02-15</td><td>13:00:00</td><td>13:00:00</td><td>13:30:00</td><td>18:00:00</td><td>2</td></tr></tbody></table>';
exit;
?>