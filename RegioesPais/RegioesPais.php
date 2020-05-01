<html>
	<head>
		<style>
			h4{
				text-transform: uppercase;
			}
			p {
				text-indent: 15pt;
				font-weight: none;
			}
		</style>
	</head>
	<body>
		<?php
			$est = $_GET["est"];
			
			echo "<h4>Região ";
			switch($est)
			{
				case 1:
					echo "Norte<br></h4><p>
					Maior região em área e a quinta em população. Seu clima é equatorial e a vegetação é a floresta amazônica, apresentando algumas manchas de cerrado. O relevo é formado pela Planície Amazônica, pelos Planaltos Amazônicos Orientais que a envolvem e pela sequência de depressão marginal-planalto residual, tanto no sentido norte como no sul.<br><br>
					A economia se baseia no extrativismo vegetal e mineral, com destaque para a extração de madeira e para as jazidas de ferro e de manganês na Serra dos Carajás. Indústrias aparecem, sobretudo, na Zona Franca de Manaus – onde se instalaram com incentivos fiscais a partir da década de 60.
					</p>";
					break;
				case 2:
					echo "Nordeste<br></h4><p>
					Terceira maior em área e segunda em população. Seus climas são: tropical úmido (na região litorânea e na porção leste do Planalto da Borborema), semi-árido (no Sertão nordestino) e equatorial (no noroeste do Maranhão). O relevo é formado pelo planalto da Borborema, próximo ao litoral, e pelo planalto do rio Parnaíba, a oeste. Entre os dois está a Depressão Sertaneja. Os planaltos são antigos e erodidos, com baixas altitudes. A vegetação predominante é a caatinga, com matas tropicais e de cocais a oeste e a leste.
<br><br>
A economia nordestina é caracterizada pela concentração industrial na faixa litorânea e pelo predomínio das atividades agrícolas no resto da região. Ela tem crescido por conta da migração de empresas do sul e sudeste, mesmo assim, cerca de 40% da população sobrevive com um salário mínimo.
					</p>";
					break;
				case 3:
					echo "Centro-Oeste<br></h4><p>
					Segunda maior região em área e a menor em população, tem localidades muito pouco habitadas. Predomina o clima tropical, com verão chuvoso e inverno seco. As áreas do norte (próximas à floresta amazônica) são as mais úmidas. O relevo, marcado pelo Planalto Central, é antigo e aplainado e forma extensos chapadões que, ao sul do Mato Grosso do Sul, dão lugar às planícies do Pantanal – alagadas apenas durante a época chuvosa. Fora do Pantanal, a vegetação dominante é o cerrado (chamado de cerradão onde há maior numero de árvores e de cerrado típico onde há mais gramíneas).
<br><br>
A economia se baseia na agropecuária, principalmente na produção de soja, milho e carne bovina. O cultivo de soja, muito rentável e com grande mercado externo, têm avançado para a floresta amazônica e já tomou grande parte das áreas naturais de cerrado, aumentando o desmatamento da região.
					</p>";
					break;
				case 4:
					echo "Sudeste<br></h4><p>
					Quarta maior área e a primeira em população. Seu clima típico é tropical, mas nas regiões mais altas há o tropical de altitude (mais ameno). Ambos tem verão chuvoso e inverno seco. A vegetação predominante é a Mata Atlântica, devastada pela ocupação da região. O relevo é planáltico e muito erodido, bem arredondado e chamado de “mares de morros”.<br><br>
					A economia é a maior do país e corresponde a metade do PIB nacional, contando com larga produção industrial e grande setor terciário. A agricultura é moderna e muito produtiva, com destaque para a produção de laranja, cana-de-açúcar e milho. Há também produção petrolífera na bacia de Campos e a perspectiva de prospecção na camada Pré-Sal. A região é destaque também por conta da cidade de São Paulo: importante centro financeiro e comercial do mundo.
					</p>";
					break;
				case 5:
					echo "Sul<br></h4><p>
					Quinta região em área e terceira em população. Seu clima é subtropical, o mais frio do Brasil. Predomina a vegetação de Mata de Araucárias nas áreas mais elevadas e a de campos (chamados de Pampas), nas outras áreas. O relevo contêm, principalmente, os Planaltos e Serras do Atlântico Leste-Sudeste e os Planaltos e Chapadas da Bacia do Paraná.<br><br>
					A economia é diversificada, apresenta o segundo maior parque industrial do país e uma agricultura moderna. Destacam-se a produção de suínos, de gado, de fumo e de soja e também a indústria alimentícia, a têxtil, a metalúrgica e a automobilística.
					</p>";
					break;
			}
		?>
		<a href="javascript: history.go(-1)">Voltar</a>
	</body>
	
</html>