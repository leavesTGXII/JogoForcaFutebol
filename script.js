const frequenciaLetrasBonus = { // Mapa de bônus por frequência de letras
        'J': 150, 'K': 150, 'Q': 150, 'X': 150, 'Z': 150, 'W': 120, 'Y': 120,
		'B': 20, 'C': 20, 'D': 20, 'F': 20, 'G': 20, 'H': 20, 'L': 20, 'M': 20, 'N': 20, 'P': 20, 'R': 20, 'S': 20, 'T': 20, 'V': 20
};

const palavrasFutebol = [
	// Times Brasileiros
	{
        word: "Flamengo",
        category: "Times Brasileiros",
        hints: [
            "Clube brasileiro com mais participações na Libertadores e bicampeão da competição.",
            "Time do Rio de Janeiro conhecido por sua torcida apaixonada e rubro-negra.",
            "Maior torcida do Brasil, famoso pelo Maracanã e Zico.",
            "Clube que revelou craques como Zico, Júnior e Adriano."
        ]
    },
    {
        word: "Palmeiras",
        category: "Times Brasileiros",
        hints: [
            "Time brasileiro apelidado de 'Academia' nos anos 60 e 70.",
            "Verdão, time paulista com mais títulos brasileiros.",
            "Clube alviverde com o Allianz Parque como casa.",
            "Time que conquistou a Libertadores em 1999, 2020, 2021."
        ]
    },
    {
        word: "Corinthians",
        category: "Times Brasileiros",
        hints: [
            "Clube brasileiro que protagonizou a 'Invasão Corintiana' no Maracanã.",
            "Fiel torcida, time do povo, rival histórico do Palmeiras.",
            "Alvinegro paulista com o Parque São Jorge e a Neo Química Arena.",
            "Time que conquistou o Mundial de Clubes em 2000 e 2012."
        ]
    },
    {
        word: "São Paulo",
        category: "Times Brasileiros",
        hints: [
            "Time brasileiro conhecido como 'Soberano' por suas conquistas nos anos 90 e 2000.",
            "Tricolor Paulista, único time brasileiro tricampeão da Libertadores.",
            "Clube do Morumbi, famoso por Rogério Ceni e Telê Santana.",
            "Time que revelou craques como Kaká, Raí e Cafu."
        ]
    },
     {
            word: "Cuiabá",
            category: "Times Brasileiros",
            hints: [
                "Clube mato-grossense da cidade de Cuiabá.",
                "Conhecido como 'Dourado'.",
                "Ascendeu rapidamente no cenário nacional.",
                "Manda seus jogos na Arena Pantanal."
            ]
    },
	{
            word: "Ituano",
            category: "Times Brasileiros",
            hints: [
                "Clube paulista de Itu, conhecido como 'Galo de Itu'.",
                "Time do interior paulista com história centenária.",
                "Já foi campeão paulista e da Série C do Brasileiro.",
                "Manda seus jogos no Estádio Novelli Júnior."
            ]
        },
    {
        word: "Santos",
        category: "Times Brasileiros",
        hints: [
            "Clube brasileiro que eternizou a camisa 10 de um certo 'Rei'.",
            "Time da Vila Belmiro, revelou Pelé e Neymar.",
            "Alvinegro praiano com a Vila Belmiro como palco.",
            "Time que conquistou dois Mundiais Interclubes nos anos 60."
        ]
    },
    {
        word: "Grêmio",
        category: "Times Brasileiros",
        hints: [
            "Time gaúcho que conquistou a Libertadores com uma 'Batalha dos Aflitos'.",
            "Tricolor Gaúcho, famoso pela garra e Renato Gaúcho.",
            "Imortal Tricolor, com o Olímpico e a Arena do Grêmio.",
            "Time que revelou craques como Ronaldinho Gaúcho e Renato Portaluppi."
        ]
    },
    {
        word: "Internacional",
        category: "Times Brasileiros",
        hints: [
            "Time gaúcho que surpreendeu o Barcelona no Mundial de Clubes de 2006.",
            "Colorado Gaúcho, rival do Grêmio, campeão mundial em 2006.",
            "Clube do Beira-Rio, famoso pela 'Academia Colorada'.",
            "Time que conquistou a Libertadores em 2006 e 2010."
        ]
    },
    {
        word: "Cruzeiro",
        category: "Times Brasileiros",
        hints: [
            "Time mineiro que detém o recorde de títulos da Copa do Brasil.",
            "Raposa, time mineiro com duas Libertadores e quatro Brasileiros.",
            "Celeste mineiro, com o Mineirão como palco.",
            "Time que revelou craques como Ronaldo Fenômeno e Tostão."
        ]
    },
    {
        word: "Atlético Mineiro",
        category: "Times Brasileiros",
        hints: [
            "Time mineiro que tem o 'Hino do Galo' como um de seus símbolos.",
            "Galo, time mineiro com uma Libertadores e um Brasileiro recente.",
            "Alvinegro mineiro, com o Mineirão e a Arena MRV.",
            "Time que revelou craques como Reinaldo e Éder Aleixo."
        ]
    },
    {
        word: "Vasco da Gama",
        category: "Times Brasileiros",
        hints: [
            "Clube carioca que construiu seu estádio com a ajuda da torcida.",
            "Gigante da Colina, time carioca com história rica e títulos.",
            "Cruzmaltino, com São Januário como palco.",
            "Time que revelou craques como Romário, Roberto Dinamite e Edmundo."
        ]
    },
	{
	word: "Avaí",
	category: "Times Brasileiros",
	hints: [
		"Clube catarinense conhecido como 'Leão da Ilha'.",
		"Albiceleste catarinense, com a Ressacada como casa.",
		"Time com grande torcida em Florianópolis.",
		"Clube que busca se firmar na Série A do Brasileiro."
	]
	},
	{
	word: "Figueirense",
	category: "Times Brasileiros",
	hints: [
		"Clube catarinense rival do Avaí, conhecido como 'Figueira'.",
		"Alvinegro catarinense, com o Orlando Scarpelli como palco.",
		"Time tradicional do futebol catarinense.",
		"Clube que busca retornar à elite do futebol brasileiro."
	]
	},
    {
        word: "Botafogo",
        category: "Times Brasileiros",
        hints: [
            "Clube carioca conhecido como 'Estrela Solitária'.",
            "Alvinegro do Rio, famoso por Garrincha e Nilton Santos.",
            "Time que tem o Estádio Nilton Santos como casa.",
            "Clube que viveu jejum de títulos brasileiros por décadas."
        ]
    },
    {
        word: "Fluminense",
        category: "Times Brasileiros",
        hints: [
            "Clube carioca conhecido como 'Tricolor das Laranjeiras'.",
            "Time do Rio de Janeiro com sede histórica nas Laranjeiras.",
            "Clube que revelou craques como Rivellino e Fred.",
            "Time que busca seu primeiro título da Libertadores."
        ]
    },
    {
        word: "Athletico Paranaense",
        category: "Times Brasileiros",
        hints: [
            "Clube paranaense conhecido como 'Furacão'.",
            "Time de Curitiba com a Arena da Baixada como casa.",
            "Clube que conquistou a Sul-Americana em 2018 e 2021.",
            "Time que revelou craques como Alex Mineiro e Fernandinho."
        ]
    },
    {
        word: "Bahia",
        category: "Times Brasileiros",
        hints: [
            "Clube baiano conhecido como 'Tricolor de Aço'.",
            "Time de Salvador com a Fonte Nova como palco.",
            "Clube que conquistou o bicampeonato brasileiro nos anos 80.",
            "Time que revelou craques como Bobô e Daniel Alves."
        ]
    },
    {
        word: "Vitória",
        category: "Times Brasileiros",
        hints: [
            "Clube baiano rival do Bahia, conhecido como 'Leão'.",
            "Rubro-Negro baiano, com o Barradão como casa.",
            "Time que revelou craques como Bebeto e Vampeta.",
            "Clube que busca se firmar na elite do futebol brasileiro."
        ]
    },
    {
        word: "Sport",
        category: "Times Brasileiros",
        hints: [
            "Clube pernambucano conhecido como 'Leão da Ilha'.",
            "Rubro-Negro pernambucano, com a Ilha do Retiro como palco.",
            "Time que conquistou a Copa do Brasil em 2008.",
            "Clube que revelou craques como Juninho Pernambucano e Rivaldo."
        ]
    },
    {
        word: "Náutico",
        category: "Times Brasileiros",
        hints: [
            "Clube pernambucano rival do Sport, conhecido como 'Timbu'.",
            "Alvirrubro pernambucano, com os Aflitos como casa.",
            "Time que protagonizou o 'Jogo dos Aflitos' contra o Grêmio.",
            "Clube tradicional do futebol nordestino."
        ]
    },
    {
        word: "Santa Cruz",
        category: "Times Brasileiros",
        hints: [
            "Clube pernambucano rival de Sport e Náutico, conhecido como 'Cobra Coral'.",
            "Tricolor pernambucano, com o Arruda como palco.",
            "Time com uma das maiores torcidas do Nordeste.",
            "Clube que busca retornar à elite do futebol brasileiro."
        ]
    },
	{
	word: "Criciúma",
	category: "Times Brasileiros",
	hints: [
		"Clube catarinense conhecido como 'Tigre'.",
		"Tricolor carvoeiro, com o Heriberto Hülse como palco.",
		"Time que conquistou a Copa do Brasil em 1991.",
		"Clube que busca retornar à elite do futebol brasileiro."
	]
	},
	{
	word: "Paraná",
	category: "Times Brasileiros",
	hints: [
		"Clube paranaense conhecido como 'Tricolor do Capanema'.",
		"Tricolor paranaense, com a Vila Capanema como palco.",
		"Time tradicional do futebol paranaense, mas em dificuldades.",
		"Clube que busca retornar aos tempos de glória."
	]
	},
	{
	word: "Paysandu",
	category: "Times Brasileiros",
	hints: [
		"Clube paraense conhecido como 'Papão da Curuzu'.",
		"Albiceleste paraense, com a Curuzu como casa.",
		"Time com grande torcida na região norte do Brasil.",
		"Clube que busca retornar à Série B do Brasileiro."
	]
	},
	{
	word: "Remo",
	category: "Times Brasileiros",
	hints: [
		"Clube paraense rival do Paysandu, conhecido como 'Leão Azul'.",
		"Azulino paraense, com o Baenão como casa.",
		"Time com grande rivalidade com o Paysandu, o clássico 'Re-Pa'.",
		"Clube que busca retornar à Série B do Brasileiro."
	]
	},
	{
	word: "Guarani",
	category: "Times Brasileiros",
	hints: [
		"Clube paulista de Campinas conhecido como 'Bugre'.",
		"Alviverde campineiro, com o Brinco de Ouro como palco.",
		"Time campeão brasileiro em 1978.",
		"Clube tradicional do interior paulista com história rica."
	]
	},
	{
	word: "Ponte Preta",
	category: "Times Brasileiros",
	hints: [
	"Clube paulista de Campinas conhecido como 'Macaca'.",
	"Alvinegra campineira, com o Moisés Lucarelli como casa.",
	"Time tradicional do interior paulista.",
	"Clube que busca retornar à Série A do Brasileiro."
	]
	},
    {
        word: "Fortaleza",
        category: "Times Brasileiros",
        hints: [
            "Clube cearense conhecido como 'Leão do Pici'.",
            "Tricolor cearense, com o Castelão como casa.",
            "Time que conquistou a Copa do Nordeste em 2019 e 2022.",
            "Clube que ascendeu recentemente no cenário nacional."
        ]
    },
    {
        word: "Ceará",
        category: "Times Brasileiros",
        hints: [
            "Clube cearense rival do Fortaleza, conhecido como 'Vozão'.",
            "Alvinegro cearense, com o Castelão também como palco.",
            "Time com grande torcida no estado do Ceará.",
            "Clube que busca se consolidar na Série A do Brasileiro."
        ]
    },
    {
        word: "Atlético Goianiense",
        category: "Times Brasileiros",
        hints: [
            "Clube goiano rival do Goiás, conhecido como 'Dragão'.",
            "Rubro-Negro goiano, com o Antônio Accioly como palco.",
            "Time que conquistou a Sul-Americana em 2022 (vice-campeão).",
            "Clube que ascendeu recentemente no cenário nacional."
        ]
    },
        {
            word: "América Mineiro",
            category: "Times Brasileiros",
            hints: [
                "Clube mineiro conhecido como 'Coelho'.",
                "Alviverde mineiro, com o Independência como casa.",
                "Time tradicional de Minas Gerais, mas menos badalado.",
                "Clube que busca se manter na Série A do Brasileiro."
            ]
        },

        {
            word: "Red Bull Bragantino",
            category: "Times Brasileiros",
            hints: [
                "Clube paulista de Bragança Paulista, conhecido como 'Massa Bruta'.",
                "Alvirrubro de Bragança, com o Nabi Abi Chedid como casa.",
                "Time vice-campeão da Sul-Americana em 2021.",
                "Clube em ascensão no cenário nacional com investimento do Grupo Red Bull."
            ]
        },
	
	{
	    word: "Goiás",
	    category: "Times Brasileiros",
	    hints: [
		"Clube goiano conhecido como 'Esmeraldino'.",
    		"Time de Goiânia com o Estádio Hailé Pinheiro (Serrinha) como casa.",
		"Maior campeão goiano, com muitos títulos estaduais.",
		"Clube que revelou craques como Fernandão e Grafite."
	   ]
	},
	{
    word: "Guarany de Bagé",
    category: "Times Brasileiros",
    hints: [
        "Clube da cidade de Bagé (RS).",
        "É conhecido como 'Alvirrubro'.",
        "Manda seus jogos no Estádio Estrela D'Alva.",
        "Um dos clubes mais antigos do Rio Grande do Sul."
    ]
},
{
    word: "São José",
    category: "Times Brasileiros",
    hints: [
        "Clube gaúcho conhecido como 'Zequinha'.",
        "Time de Porto Alegre, com o Estádio Passo d'Areia como casa.",
        "Tradicional clube da capital gaúcha, com história no Gauchão.",
        "Clube que busca ascender no cenário nacional."
    ]
},
{
    word: "Avenida",
    category: "Times Brasileiros",
    hints: [
         "Clube gaúcho de Santa Cruz do Sul, conhecido como 'Time da Comunidade'.",
        "Seu mascote é o Periquito.",
        "Time do Vale do Rio Pardo, com o Estádio Eucaliptos como casa.",
        "Clube que busca se destacar no cenário gaúcho e brasileiro."
    ]
},
{
    word: "Cruzeiro-RS",
    category: "Times Brasileiros",
    hints: [
        "Clube gaúcho de Cachoeirinha, conhecido como 'Estrelado' ou 'Cruzeiro Cachoeirinha'.",
        "Time da Região Metropolitana de Porto Alegre, com o Estádio Estrelão como casa.",
        "Clube que ascendeu nas divisões gaúchas e busca projeção nacional.",
        "O primeiro clube gaúcho a jogar no estrangeiro, com um empate em 0x0 contra o Real Madrid de Di Stéfano."
    ]
},
{
    word: "Caxias",
    category: "Times Brasileiros",
    hints: [
 	"Clube gaúcho de Caxias do Sul, conhecido como 'Grená' ou 'Falcão Grená'.",
        "Time da Serra Gaúcha, com o Estádio Centenário como casa.",
        "Bicampeão gaúcho e com participações na Série B do Brasileiro.",
        "Rival do Juventude no 'Clássico Ca-Ju'."
    ]
},
{
    word: "Juventude",
    category: "Times Brasileiros",
    hints: [
        "Clube gaúcho de Caxias do Sul, conhecido como 'Ju' ou 'Alviverde'.",
        "Time da Serra Gaúcha, com o Estádio Alfredo Jaconi como casa.",
        "Campeão da Copa do Brasil e com participações na Série A.",
        "Rival do Caxias no 'Clássico Ca-Ju'."
    ]
},
{
    word: "Brasil de Pelotas",
    category: "Times Brasileiros",
    hints: [
	"Clube gaúcho de Pelotas, conhecido como 'Xavante'.",
        "Time da Metade Sul do estado, com o Estádio Bento Freitas como casa.",
        "Tradicional clube gaúcho, rival do Pelotas no 'Clássico Bra-Pel'",
        "Suas cores são vermelho e preto."
    ]
},
{
    word: "Pelotas",
    category: "Times Brasileiros",
    hints: [
        "Clube da cidade de Pelotas (RS).",
        "É conhecido como Lobão.",
        "Manda seus jogos no Estádio Boca do Lobo.",
        "Suas cores são azul e amarelo."
    ]
},
{
    word: "Veranópolis",
    category: "Times Brasileiros",
    hints: [
        "Clube da cidade de Veranópolis, do interior do RS.",
        "É conhecido pela sigla VEC.",
        "Manda seus jogos no Estádio Antônio David Farina.",
        "Já disputou a primeira divisão do Campeonato Gaúcho."
    ]
},
{
    word: "Novo Hamburgo",
    category: "Times Brasileiros",
    hints: [
        "Clube conhecido como 'Nóia'.",
        "É conhecido como Anilado.",
        "Manda seus jogos no Estádio do Vale, no interior do RS, em Novo Hamburgo.",
        "Já foi campeão gaúcho."
    ]
},
{
    word: "Ypiranga",
    category: "Times Brasileiros",
    hints: [
        "Clube da cidade de Erechim (RS).",
        "É conhecido como Canarinho.",
        "Manda seus jogos no Estádio Colosso da Lagoa.",
        "Já disputou a primeira divisão do Campeonato Gaúcho."
    ]
},
    {
    word: "Aimoré",
    category: "Times Brasileiros",
    hints:[
        "Conhecido como Índio Capilé.",
        "Clube de São Leopoldo",
        "Estádio Monumental do Cristo Rei",
        "Foi fundado em 1936."
    ]
    },
    {
    word: "São Luiz-RS",
    category: "Times Brasileiros",
    hints: [
        "Clube da cidade de Ijuí",
        "Tem como mascote um beija-flor.",
        "Conhecido como Rubro",
        "Estádio 19 de Outubro"
        ]
    },
   {
    word: "Glória",
    category: "Times Brasileiros",
    hints: [
        "Clube de Vacaria.",
        "Estádio Altos da Glória",
        "Tem como mascote um leão.",
        "Foi campeão do interior em 1988."
    ]
   },
{
    word: "Paulista",
    category: "Times Brasileiros",
    hints: [
        "Clube da cidade de Jundiaí (SP).",
        "Já foi campeão da Copa do Brasil.",
        "É conhecido como Galo da Japi.",
        "Manda seus jogos no Estádio Jayme Cintra."
    ]
},
{
    word: "Santo André",
    category: "Times Brasileiros",
    hints: [
        "Clube da cidade de Santo André (SP).",
        "Já foi campeão da Copa do Brasil.",
        "É conhecido como Ramalhão.",
        "Manda seus jogos no Estádio Bruno José Daniel."
    ]
},
{
    word: "São Caetano",
    category: "Times Brasileiros",
    hints: [
        "Clube do interior paulista, conhecido como 'Gigante do ABC'.",
        "É conhecido como Azulão.",
        "Manda seus jogos no Estádio Anacleto Campanella.",
        "Já foi vice-campeão da Libertadores."
    ]
},
{
    word: "Portuguesa",
    category: "Times Brasileiros",
    hints: [
        "Em 2013, este time foi rebaixado por escalar um jogador irregularmente.",
        "É conhecida como Lusa.",
        "Manda seus jogos no Estádio do Canindé.",
        "Já foi vice-campeã brasileira."
    ]
},
{
    word: "Mirassol",
    category: "Times Brasileiros",
    hints: [
        "Clube da cidade de Mirassol (SP).",
        "É conhecido como Leão da Araraquarense.",
        "Manda seus jogos no Estádio José Maria de Campos Maia.",
        "Tem crescido no cenário paulista e nacional."
    ]
},
{
    word: "Juventus",
    category: "Times Brasileiros",
    hints: [
        "Famoso por ser a 'Velha Senhora da Mooca'.",
        "É conhecido como Moleque Travesso.",
        "Manda seus jogos no Estádio Conde Rodolfo Crespi (Rua Javari).",
        "Tradicional clube paulistano de camisas grenás."
    ]
},
{
    word: "Ferroviária",
    category: "Times Brasileiros",
    hints: [
        "Clube da cidade de Araraquara (SP).",
        "É conhecida como Locomotiva Grená.",
        "Manda seus jogos na Arena da Fonte Luminosa.",
        "Tradicional clube do interior paulista."
    ]
},
{
    word: "CRB",
    category: "Times Brasileiros",
    hints: [
        "É figura da rivalidade histórica do 'Clássico das Multidões'.",
        "É conhecido como Galo da Praia.",
        "Manda seus jogos no Estádio Rei Pelé.",
        "Maior campeão alagoano."
    ]
},
{
    word: "CSA",
    category: "Times Brasileiros",
    hints: [
        "Clube da cidade de Maceió (AL).",
        "É conhecido como Azulão do Mutange.",
        "Manda seus jogos no Estádio Rei Pelé.",
        "Possui grande rivalidade com o CRB."
    ]
},
    {
      word: "Brusque",
      category: "Times Brasileiros",
      hints: [
        "Time da cidade de Brusque, Santa Catarina.",
        "Conhecido como Quadricolor.",
        "Estádio Augusto Bauer.",
        "Campeão Brasileiro da Série D."
      ]
    },
    {
      word: "Joinville",
      category: "Times Brasileiros",
      hints: [
          "Clube da cidade de Joinville, SC.",
          "Conhecido como JEC.",
          "Seu estádio é a Arena Joinville.",
          "Já foi campeão brasileiro da Série B."
      ]
    },
 {
        word: "Chapecoense",
        category: "Times Brasileiros",
        hints: [
            "Clube da cidade de Chapecó (SC).",
            "É conhecida como Verdão do Oeste.",
            "Manda seus jogos na Arena Condá.",
            "Conhecida internacionalmente após trágico acidente aéreo."
        ]
 },
    {
        word: "Botafogo-SP",
        category: "Times Brasileiros",
        hints: [
            "Clube da cidade de Ribeirão Preto, São Paulo.",
            "Conhecido como Pantera.",
            "Manda seus Jogos no estádio Santa Cruz.",
            "Já foi campeão brasileiro da Série D."
        ]
    },

{
    word: "São Raimundo",
    category: "Times Brasileiros",
    hints: [
        "Clube da cidade de Manaus (AM).",  // Existem vários São Raimundos, especifiquei AM
        "É conhecido como Tufão da Colina.",
        "Manda seus jogos no Estádio Ismael Benigno (Colina).",
        "Várias vezes campeão amazonense."
    ]
},
{
    word: "América-RN",
    category: "Times Brasileiros",
    hints: [
        "Clube da cidade de Natal (RN).",
        "É conhecido como Mecão ou Dragão.",
        "Manda seus jogos na Arena das Dunas.",
        "Um dos grandes clubes do Rio Grande do Norte."
    ]
},
{
  word: "ABC",
  category: "Times Brasileiros",
  hints: [
    "Clube de Natal, fundado em 1915",
    "Conhecido como 'Mais Querido'.",
    "O estádio é o Frasqueirão",
    "O maior vencedor do Campeonato Potiguar."
  ]
},
{
    word: "Bangu",
    category: "Times Brasileiros",
    hints: [
        "Clube da cidade do Rio de Janeiro (RJ).",
        "Tradicional clube do bairro de Bangu.",
        "Manda seus jogos no Estádio Moça Bonita.",
        "Já foi vice-campeão brasileiro."
    ]
},
{
    word: "Madureira",
    category: "Times Brasileiros",
    hints: [
        "Clube da cidade do Rio de Janeiro (RJ).",
        "É conhecido como Tricolor Suburbano.",
        "Manda seus jogos no Estádio Conselheiro Galvão.",
        "Tradicional clube carioca, conhecido por excursão a Cuba."
    ]
},
    {
      word: "Volta Redonda",
      category: "Times Brasileiros",
      hints: [
        "Time da cidade de Volta Redonda, Rio de Janeiro",
        "Conhecido como Voltaço.",
        "Manda seus jogos no Estádio Raulino de Oliveira",
        "Já venceu a Série D do Campeonato Brasileiro."
      ]
    },
 {
        word: "America",
        category: "Times Brasileiros",
        hints: [
            "Clube tradicional do Rio de Janeiro, campeão carioca diversas vezes.",
            "Fundado em 1904, é conhecido como 'Mequinha'.",
            "Manda seus jogos no Estádio Giulite Coutinho.",
            "Revelou grandes jogadores, como Romário."
        ]
    },

	
        // Times Europeus
        {
            word: "Real Madrid",
            category: "Times Europeus",
            hints: [
                "Clube espanhol que conquistou a 'La Décima' Champions League.",
                "Maior campeão da Champions League, 'Los Blancos'.",
                "Merengues, com o Santiago Bernabéu como casa.",
                "Time que revelou craques como Di Stéfano, Cristiano Ronaldo e Zidane."
            ]
        },
        {
            word: "Barcelona",
            category: "Times Europeus",
            hints: [
                "Clube espanhol que popularizou o estilo de jogo conhecido como 'tiki-taka'.",
                "Rival histórico do Real Madrid, 'Blaugrana', famoso pelo Camp Nou.",
                "Culés, com o Camp Nou como palco.",
                "Time que revelou craques como Messi, Xavi e Iniesta."
            ]
        },
        {
            word: "Bayern de Munique",
            category: "Times Europeus",
            hints: [
                "Clube alemão que venceu a Champions League em cima do PSG em 2020.",
                "Gigante alemão, 'Die Roten', domina a Bundesliga.",
                "Bávaros, com a Allianz Arena como casa.",
                "Time que revelou craques como Beckenbauer, Gerd Müller e Rummenigge."
            ]
        },
        {
            word: "Liverpool",
            category: "Times Europeus",
            hints: [
                "Clube inglês que protagonizou o 'Milagre de Istambul' na Champions League.",
                "Inglês 'Reds', 'You'll Never Walk Alone' e Anfield Road.",
                "The Reds, com Anfield como palco.",
                "Time que revelou craques como Gerrard, Dalglish e Rush."
            ]
        },
        {
            word: "Manchester City",
            category: "Times Europeus",
            hints: [
                "Clube inglês que quebrou recordes de pontuação na Premier League sob Guardiola.",
                "Inglês 'Citizens', time de Guardiola, azul de Manchester.",
                "Cityzens, com o Etihad Stadium como casa.",
                "Time que revelou craques como De Bruyne, Silva e Agüero."
            ]
        },
        {
            word: "Manchester United",
            category: "Times Europeus",
            hints: [
                "Clube inglês que tem o 'Busby Babes' como parte de sua história trágica e gloriosa.",
                "Inglês 'Red Devils', Old Trafford, história com Ferguson.",
                "Red Devils, com Old Trafford como palco.",
                "Time que revelou craques como Charlton, Best e Beckham."
            ]
        },
        {
            word: "Juventus",
            category: "Times Europeus",
            hints: [
                "Clube italiano que é conhecido como 'A Velha Senhora'.",
                "Italiana 'Vecchia Signora', listrada em preto e branco.",
                "Bianconeri, com o Juventus Stadium como casa.",
                "Time que revelou craques como Platini, Zidane e Del Piero."
            ]
        },
        {
            word: "Paris Saint-Germain",
            category: "Times Europeus",
            hints: [
                "Clube francês que contratou Neymar por um valor recorde mundial.",
                "Francês, time de Paris, estrelado por Mbappé e Neymar.",
                "PSG, com o Parc des Princes como palco.",
                "Time que revelou craques como Mbappé, Neymar e Ibrahimović."
            ]
        },
        {
            word: "Borussia Dortmund",
            category: "Times Europeus",
            hints: [
                "Clube alemão que tem o estádio com a maior média de público na Europa.",
                "Alemão, 'Die Schwarzgelben', Muralha Amarela.",
                "BVB, com o Signal Iduna Park como casa.",
                "Time que revelou craques como Reus, Lewandowski e Klopp (como treinador)."
            ]
        },
        {
            word: "Ajax",
            category: "Times Europeus",
            hints: [
                "Clube holandês famoso por sua 'Escola de Ajax' e futebol ofensivo.",
                "Holandês, celeiro de craques, Johan Cruyff.",
                "Godenzonen, com a Johan Cruijff Arena como palco.",
                "Time que revelou craques como Cruyff, Van Basten e Rijkaard."
            ]
        },
        {
            word: "Chelsea",
            category: "Times Europeus",
            hints: [
                "Clube inglês de Londres, conhecido como 'Blues'.",
                "Time de Stamford Bridge, famoso por suas cores azul e branco.",
                "Já venceu a Champions League e a Premier League.",
                "Revelou jogadores como Frank Lampard e John Terry."
            ]
        },
        {
            word: "Milan",
            category: "Times Europeus",
            hints: [
                "Clube italiano de Milão, conhecido como 'Rossoneri'.",
                "Time do San Siro, famoso por suas listras vermelhas e pretas.",
                "Heptacampeão da Champions League.",
                "Já teve lendas como Franco Baresi e Paolo Maldini."
            ]
        },
        {
            word: "Inter de Milão",
            category: "Times Europeus",
            hints: [
                "Clube italiano de Milão, conhecido como 'Nerazzurri'.",
                "Rival do Milan, também joga no San Siro.",
                "Tricampeão da Champions League.",
                "Já teve craques como Javier Zanetti e Ronaldo Fenômeno."
            ]
        },
        {
            word: "Arsenal",
            category: "Times Europeus",
            hints: [
                "Clube inglês de Londres, conhecido como 'Gunners'.",
                "Time do Emirates Stadium, famoso por sua história e títulos.",
                "Campeão inglês invicto na temporada 2003-2004.",
                "Já teve ídolos como Thierry Henry e Dennis Bergkamp."
            ]
        },
        {
            word: "Porto",
            category: "Times Europeus",
            hints: [
                "Clube português do Porto, conhecido como 'Dragões'.",
                "Time do Estádio do Dragão, famoso por suas conquistas europeias.",
                "Bicampeão da Champions League.",
                "Já teve craques como Deco e Vítor Baía."
            ]
        },
        {
            word: "Benfica",
            category: "Times Europeus",
            hints: [
                "Clube português de Lisboa, conhecido como 'Águias'.",
                "Time do Estádio da Luz, famoso por sua história e tradição.",
                "Bicampeão da Champions League.",
                "Já teve lendas como Eusébio e Mário Coluna."
            ]
        },
        {
            word: "Olympique de Marseille",
            category: "Times Europeus",
            hints: [
                "Clube francês de Marselha, conhecido como 'OM'.",
                "Único clube francês a vencer a Champions League.",
                "Time do Vélodrome, famoso por sua torcida apaixonada.",
                "Já teve ídolos como Jean-Pierre Papin e Didier Drogba."
            ]
        },
        {
            word: "Lyon",
            category: "Times Europeus",
            hints: [
                "Clube francês de Lyon, conhecido como 'OL'.",
                "Dominou o futebol francês nos anos 2000.",
                "Time do Parc Olympique Lyonnais, moderno e imponente.",
                "Já teve craques como Juninho Pernambucano e Karim Benzema."
            ]
        },
        {
            word: "Atlético de Madrid",
            category: "Times Europeus",
            hints: [
                "Clube espanhol de Madrid, conhecido como 'Colchoneros'.",
                "Rival do Real Madrid, joga no Wanda Metropolitano.",
                "Tricampeão da Europa League.",
                "Já teve ídolos como Diego Simeone (como jogador e técnico) e Fernando Torres."
            ]
        },
        {
            word: "Napoli",
            category: "Times Europeus",
            hints: [
                "Clube italiano de Nápoles, conhecido como 'Azzurri'.",
                "Time do Estádio Diego Armando Maradona, em homenagem ao ídolo máximo.",
                "Tricampeão italiano.",
                "Ficou famoso mundialmente com Diego Maradona nos anos 80."
            ]
        },
        {
            word: "Tottenham Hotspur",
            category: "Times Europeus",
            hints: [
                "Clube inglês de Londres, conhecido como 'Spurs'.",
                "Time do Tottenham Hotspur Stadium, moderno e tecnológico.",
                "Bicampeão inglês.",
                "Já teve ídolos como Glenn Hoddle e Harry Kane."
            ]
        },
        {
            word: "Sevilla",
            category: "Times Europeus",
            hints: [
                "Clube espanhol de Sevilha, conhecido por seus títulos na Europa League.",
                "Heptacampeão da Europa League/Copa da UEFA.",
                "Time do Ramón Sánchez Pizjuán, com atmosfera única.",
                "Já teve craques como Diego Maradona e Dani Alves."
            ]
        },
        {
            word: "Valencia",
            category: "Times Europeus",
            hints: [
                "Clube espanhol de Valência, conhecido como 'Los Che'.",
                "Time do Mestalla, um dos estádios mais antigos da Espanha.",
                "Hexacampeão espanhol.",
                "Já teve lendas como Mario Kempes e David Villa."
            ]
        },
        {
            word: "Borussia Monchengladbach",
            category: "Times Europeus",
            hints: [
                "Clube alemão de Mönchengladbach, conhecido como 'Die Fohlen'.",
                "Time do Borussia-Park, com torcida fanática.",
                "Pentacampeão alemão.",
                "Fez história nos anos 70 com craques como Günter Netzer."
            ]
        },
        {
            word: "Feyenoord",
            category: "Times Europeus",
            hints: [
                "Clube holandês de Roterdã, conhecido como 'De club van het volk'.",
                "Rival do Ajax e PSV, conhecido pela paixão de sua torcida.",
                "Campeão da Champions League e da Copa Intercontinental.",
                "Já teve ídolos como Johan Cruyff (jogou no início da carreira) e Ruud Gullit."
            ]
        },
        {
            word: "PSV Eindhoven",
            category: "Times Europeus",
            hints: [
                "Clube holandês de Eindhoven, conhecido como 'Boeren'.",
                "Rival do Ajax e Feyenoord, conhecido por revelar grandes talentos.",
                "Campeão da Champions League e da Copa Intercontinental.",
                "Já teve craques como Romário e Ronaldo Fenômeno (início de carreira)."
            ]
        },
        {
            word: "Hamburger SV",
            category: "Times Europeus",
            hints: [
                "Clube alemão de Hamburgo, conhecido como 'Die Rothosen'.",
                "Time do Volksparkstadion, com torcida apaixonada.",
                "Campeão da Champions League.",
                "Único clube a jogar todas as temporadas da Bundesliga desde sua criação (até 2018)."
            ]
        },
        {
            word: "AS Monaco",
            category: "Times Europeus",
            hints: [
                "Clube do principado de Mônaco, conhecido por revelar jovens talentos.",
                "Time do Stade Louis II, luxuoso e elegante como o principado.",
                "Vice-campeão da Champions League.",
                "Já teve craques como Thierry Henry e Kylian Mbappé (início de carreira)."
            ]
        },
        {
            word: "Roma",
            category: "Times Europeus",
            hints: [
                "Clube italiano da capital, conhecido como 'La Magica' ou 'Giallorossi'.",
                "Time do Stadio Olimpico, com uma das torcidas mais apaixonadas da Itália.",
                "Tricampeão italiano e campeão da UEFA Conference League.",
                "Já teve lendas como Francesco Totti, Bruno Conti e Daniele De Rossi."
            ]
        },
        {
            word: "Everton",
            category: "Times Europeus",
            hints: [
                "Clube inglês de Liverpool, rival do Liverpool FC, conhecido como 'Toffees'.",
                "Time do Goodison Park, tradicional e histórico.",
                "Eneacampeão inglês.",
                "Já teve lendas como Dixie Dean e Wayne Rooney (início de carreira)."
            ]
        },
        {
            word: "Newcastle United",
            category: "Times Europeus",
            hints: [
                "Clube inglês de Newcastle, conhecido como 'Magpies'.",
                "Time do St James' Park, com torcida apaixonada e fiel.",
                "Tetracampeão inglês.",
                "Já teve ídolos como Alan Shearer e Kevin Keegan."
            ]
        },
        {
            word: "Leeds United",
            category: "Times Europeus",
            hints: [
                "Clube inglês de Leeds, conhecido como 'Whites' ou 'Peacocks'.",
                "Time do Elland Road, com história rica e torcida fanática.",
                "Tricampeão inglês.",
                "Fez história nos anos 70 com o 'SuperLeeds' de Don Revie."
            ]
        },
        {
            word: "Aston Villa",
            category: "Times Europeus",
            hints: [
                "Clube inglês de Birmingham, conhecido como 'Villans'.",
                "Time do Villa Park, tradicional e histórico.",
                "Heptacampeão inglês e campeão da Champions League.",
                "Já teve lendas como Peter Withe e Jack Grealish (revelado pelo clube)."
            ]
        },
        {
            word: "West Ham United",
            category: "Times Europeus",
            hints: [
                "Clube inglês de Londres, conhecido como 'Hammers' ou 'Irons'.",
                "Time do London Stadium, moderno e imponente.",
                "Tricampeão da FA Cup e campeão da Recopa Europeia.",
                "Revelou lendas do futebol inglês como Bobby Moore e Geoff Hurst."
            ]
        },
        {
            word: "Fiorentina",
            category: "Times Europeus",
            hints: [
                "Clube italiano de Florença, conhecido como 'Viola'.",
                "Time do Artemio Franchi, com cores violeta e estilo elegante.",
                "Bicampeão italiano e campeão da Recopa Europeia.",
                "Um dos clubes mais tradicionais e charmosos da Itália."
            ]
        },
	{
            word: "Wolfsburg",
            category: "Times Europeus",
            hints: [
                "Clube alemão da cidade de Wolfsburg, 'Die Wölfe' (Os Lobos).",
                "Clube ligado à montadora Volkswagen.",
                "Time da Volkswagen Arena, moderna e imponente.",
                "Campeão da Bundesliga."
            ]
        },
        {
            word: "Werder Bremen",
            category: "Times Europeus",
            hints: [
                "Clube alemão de Bremen, 'Die Grün-Weißen' (Os Verde e Brancos).",
                "Time do Weserstadion, com vista para o Rio Weser.",
                "Tetracampeão alemão e campeão da Recopa Europeia.",
                "Rival do Hamburgo SV no 'Nordderby'."
            ]
        },
        {
            word: "Stuttgart",
            category: "Times Europeus",
            hints: [
                "Clube alemão de Stuttgart, 'Die Roten' (Os Vermelhos).",
                "Time da Mercedes-Benz Arena, moderna e confortável.",
                "Pentacampeão alemão.",
                "Rival do Bayern de Munique no 'Sul Derby'."
            ]
        },
        {
            word: "Ajax",
            category: "Times Europeus",
            hints: [
                "Clube holandês de Amsterdã, conhecido como 'Godenzonen'.",
                "Time da Johan Cruijff Arena, templo do 'Futebol Total'.",
                "Tetracampeão da Champions League.",
                "Celeiro de craques e referência em formação de jogadores."
            ]
        },
        {
            word: "PSV Eindhoven",
            category: "Times Europeus",
            hints: [
                "Clube holandês de Eindhoven, conhecido como 'Boeren'.",
                "Rival do Ajax e Feyenoord, conhecido por revelar grandes talentos.",
                "Campeão da Champions League e da Copa Intercontinental.",
                "Já teve craques como Romário e Ronaldo Fenômeno (início de carreira)."
            ]
        },
        {
            word: "Feyenoord",
            category: "Times Europeus",
            hints: [
                "Clube holandês de Roterdã, conhecido como 'De club van het volk'.",
                "Rival do Ajax e PSV, conhecido pela paixão de sua torcida.",
                "Campeão da Champions League e da Copa Intercontinental.",
                "Já teve ídolos como Johan Cruyff (jogou no início da carreira) e Ruud Gullit."
            ]
        },
        {
            word: "Celtic",
            category: "Times Europeus",
            hints: [
                "Clube escocês de Glasgow, conhecido como 'The Bhoys' ou 'Celts'.",
                "Rival do Rangers, o 'Old Firm' é um dos maiores clássicos do mundo.",
                "Campeão da Champions League.",
                "Famoso por sua torcida apaixonada e atmosfera única no Celtic Park."
            ]
        },
        {
            word: "Rangers",
            category: "Times Europeus",
            hints: [
                "Clube escocês de Glasgow, rival do Celtic, conhecido como 'Gers' ou 'The Teddy Bears'.",
                "Rival do Celtic, o 'Old Firm' é um dos maiores clássicos do mundo.",
                "Campeão da Recopa Europeia.",
                "Time com mais títulos escoceses e britânicos."
            ]
        },
        {
            word: "Olympiacos",
            category: "Times Europeus",
            hints: [
                "Clube grego de Pireu, conhecido como 'Thrylos' ou 'Erythrolefkoi'.",
                "Maior campeão grego, com muitos títulos nacionais.",
                "Rival do Panathinaikos, o 'Clássico dos Eternos Inimigos' é muito quente.",
                "Time do Karaiskakis Stadium, com torcida fanática."
            ]
        },
        {
            word: "Panathinaikos",
            category: "Times Europeus",
            hints: [
                "Clube grego de Atenas, rival do Olympiacos, conhecido como 'Prasinoi' ou 'Kritikoi'.",
                "Rival do Olympiacos, o 'Clássico dos Eternos Inimigos' é muito quente.",
                "Vice-campeão da Champions League.",
                "Time do Apostolos Nikolaidis Stadium, histórico e tradicional."
            ]
        },
        {
            word: "Estrela Vermelha",
            category: "Times Europeus",
            hints: [
                "Clube sérvio de Belgrado, conhecido como 'Crvena Zvezda' ou 'Zvezda'.",
                "Maior clube da Sérvia e da antiga Iugoslávia.",
                "Campeão da Champions League e da Copa Intercontinental.",
                "Time do Rajko Mitić Stadium, conhecido como 'Marakana' devido ao tamanho."
            ]
        },
        {
            word: "Partizan Belgrado",
            category: "Times Europeus",
            hints: [
                "Clube sérvio de Belgrado, rival do Estrela Vermelha, conhecido como 'Partizan'.",
                "Rival do Estrela Vermelha, o 'Clássico Eterno' é um dos mais tensos da Europa.",
                "Vice-campeão da Champions League.",
                "Time do Partizan Stadium, tradicional e histórico."
            ]
        },
        {
            word: "Steaua Bucareste",
            category: "Times Europeus",
            hints: [
                "Clube romeno de Bucareste, conhecido como 'FCSB' ou 'Steaua'.",
                "Maior clube da Romênia, com muitos títulos nacionais.",
                "Campeão da Champions League.",
                "Time do Stadionul Ghencea, moderno e imponente."
            ]
        },
        {
            word: "Rapid Viena",
            category: "Times Europeus",
            hints: [
                "Clube austríaco de Viena, conhecido como 'Rapid'.",
                "Maior clube da Áustria, com muitos títulos nacionais.",
                "Vice-campeão da Recopa Europeia.",
                "Time do Allianz Stadion, com torcida apaixonada."
            ]
        },
        {
            word: "Spartak Moscou",
            category: "Times Europeus",
            hints: [
                "Clube russo de Moscou, conhecido como 'Spartak'.",
                "Maior clube da Rússia e da antiga União Soviética.",
                "Muitos títulos nacionais e tradição no futebol russo.",
                "Time do Otkritie Arena, moderno e imponente."
            ]
        },
        {
            word: "CSKA Moscou",
            category: "Times Europeus",
            hints: [
                "Clube russo de Moscou, rival do Spartak, conhecido como 'CSKA'.",
                "Rival do Spartak, o 'Clássico do Povo' é um dos maiores da Rússia.",
                "Campeão da Copa da UEFA.",
                "Time do VEB Arena, moderno e tecnológico."
            ]
        },
        {
            word: "Galatasaray",
            category: "Times Europeus",
            hints: [
                "Clube turco de Istambul, conhecido como 'Cimbom' ou 'Aslanlar'.",
                "Maior clube da Turquia, com muitos títulos nacionais.",
                "Campeão da Copa da UEFA e da Supercopa Europeia.",
                "Time do Türk Telekom Stadium, com atmosfera infernal."
            ]
        },
        {
            word: "Fenerbahçe",
            category: "Times Europeus",
            hints: [
                "Clube turco de Istambul, rival do Galatasaray, conhecido como 'Kanaryalar' ou 'Fener'.",
                "Rival do Galatasaray, o 'Intercontinental Derby' é um dos maiores do mundo.",
                "Muitos títulos nacionais e tradição no futebol turco.",
                "Time do Şükrü Saracoğlu Stadium, com torcida apaixonada."
            ]
        },
        {
            word: "Beşiktaş",
            category: "Times Europeus",
            hints: [
                "Clube turco de Istambul, rival de Galatasaray e Fenerbahçe, conhecido como 'Kara Kartallar' ou 'Beşiktaş'.",
                "Um dos 'Três Grandes' de Istambul e do futebol turco.",
                "Muitos títulos nacionais e tradição no futebol turco.",
                "Time do Vodafone Park, moderno e tecnológico."
            ]
        },

        // Jogadores (50)
        {
            word: "Neymar Jr",
            category: "Jogadores",
            hints: [
                "Jogador brasileiro conhecido por suas 'quedas' e habilidade com a bola.",
                "Brasileiro, camisa 10, driblador e astro do PSG.",
                "Atacante brasileiro famoso por seus dribles e jogadas de efeito.",
                "Jogador que já atuou por Santos, Barcelona e Paris Saint-Germain."
            ]
        },
        {
            word: "Lionel Messi",
            category: "Jogadores",
            hints: [
                "Jogador argentino que passou a maior parte da carreira no Barcelona.",
                "Argentino, 'La Pulga', muitos consideram o GOAT, Inter Miami.",
                "Considerado por muitos o melhor jogador de todos os tempos.",
                "Jogador que conquistou 7 Bolas de Ouro e 4 Champions League."
            ]
        },
        {
            word: "Cristiano Ronaldo",
            category: "Jogadores",
            hints: [
                "Jogador português conhecido por sua obsessão por recordes e 'SIUUUU'.",
                "Português, 'CR7', máquina de gols, Al Nassr.",
                "Atacante português famoso por sua dedicação e capacidade de fazer gols.",
                "Jogador que conquistou 5 Bolas de Ouro e 5 Champions League."
            ]
        },
        {
            word: "Kylian Mbappé",
            category: "Jogadores",
            hints: [
                "Jogador francês que marcou um hat-trick na final da Copa do Mundo.",
                "Francês, velocidade e explosão, camisa 7 do PSG.",
                "Atacante francês conhecido por sua velocidade e habilidade.",
                "Jovem estrela francesa que já conquistou a Copa do Mundo."
            ]
        },
        {
            word: "Erling Haaland",
            category: "Jogadores",
            hints: [
                "Jogador norueguês conhecido por sua 'fome' de gols e força física.",
                "Norueguês, 'Cometa', artilheiro implacável do City.",
                "Atacante norueguês famoso por sua força física e faro de gol.",
                "Jovem estrela norueguesa que já quebrou recordes de gols na Premier League."
            ]
        },
        {
            word: "Mohamed Salah",
            category: "Jogadores",
            hints: [
                "Jogador egípcio conhecido por sua velocidade e 'canhota mágica'.",
                "Egípcio, 'Faraó', velocidade e gols no Liverpool.",
                "Atacante egípcio famoso por sua velocidade e habilidade com a perna esquerda.",
                "Jogador que se tornou ídolo no Liverpool e no Egito."
            ]
        },
        {
            word: "Kevin De Bruyne",
            category: "Jogadores",
            hints: [
                "Jogador belga conhecido por seus passes precisos e 'visão de raio-x'.",
                "Belga, maestro, passes precisos e visão de jogo no City.",
                "Meio-campista belga famoso por sua visão de jogo e passes precisos.",
                "Jogador que é considerado um dos melhores meio-campistas do mundo."
            ]
        },
        {
            word: "Robert Lewandowski",
            category: "Jogadores",
            hints: [
                "Jogador polonês conhecido por sua 'frieza' e precisão na finalização.",
                "Polonês, 'Lewa', centroavante completo, Barcelona.",
                "Atacante polonês famoso por sua precisão e capacidade de fazer gols.",
                "Jogador que já atuou por Borussia Dortmund e Bayern de Munique."
            ]
        },
        {
            word: "Karim Benzema",
            category: "Jogadores",
            hints: [
                "Jogador francês que conquistou a Bola de Ouro após anos de 'sombra'.",
                "Francês, 'Benzegol', camisa 9, Real Madrid e Bola de Ouro.",
                "Atacante francês famoso por sua elegância e capacidade de fazer gols.",
                "Jogador que se tornou ídolo no Real Madrid e conquistou a Bola de Ouro."
            ]
        },
        {
            word: "Vinicius Jr",
            category: "Jogadores",
            hints: [
                "Jogador brasileiro conhecido por seus dribles e 'alegria' em campo.",
                "Brasileiro, 'Vini Jr.', driblador e explosivo, Real Madrid.",
                "Atacante brasileiro famoso por seus dribles e velocidade.",
                "Jovem estrela brasileira que atua no Real Madrid."
            ]
        },
        {
            word: "Luka Modric",
            category: "Jogadores",
            hints: [
                "Jogador croata que quebrou a 'hegemonia' Messi-CR7 na Bola de Ouro.",
                "Croata, 'Mágico', meio-campo elegante do Real Madrid.",
                "Meio-campista croata famoso por sua elegância e visão de jogo.",
                "Jogador que conquistou a Bola de Ouro em 2018."
            ]
        },
        {
            word: "Harry Kane",
            category: "Jogadores",
            hints: [
                "Jogador inglês conhecido por sua 'precisão' nos chutes e liderança.",
                "Inglês, 'Hurricane', centroavante completo, Bayern.",
                "Atacante inglês famoso por sua precisão e liderança em campo.",
                "Jogador que se tornou ídolo no Tottenham e agora atua no Bayern."
            ]
        },
        {
            word: "Son Heung-min",
            category: "Jogadores",
            hints: [
                "Jogador sul-coreano conhecido por sua 'velocidade' e parceria com Kane.",
                "Sul-coreano, 'Sonny', velocidade e faro de gol no Tottenham.",
                "Atacante sul-coreano famoso por sua velocidade e faro de gol.",
                "Jogador que se tornou ídolo no Tottenham e na Coreia do Sul."
            ]
        },
        {
            word: "Virgil van Dijk",
            category: "Jogadores",
            hints: [
                "Jogador holandês conhecido por sua 'imponência' física e liderança na zaga.",
                "Holandês, 'Virgil', zagueiro imponente do Liverpool.",
                "Zagueiro holandês famoso por sua força física e liderança.",
                "Jogador considerado um dos melhores zagueiros do mundo."
            ]
        },
        {
            word: "Alisson Becker",
            category: "Jogadores",
            hints: [
                "Jogador brasileiro goleiro conhecido por sua 'segurança' e 'jogo com os pés'.",
                "Brasileiro, goleiro seguro e moderno do Liverpool.",
                "Goleiro brasileiro famoso por sua segurança e habilidade com os pés.",
                "Jogador considerado um dos melhores goleiros do mundo."
            ]
        },
        {
            word: "Thibaut Courtois",
            category: "Jogadores",
            hints: [
                "Jogador belga goleiro conhecido por sua 'altura' e defesas 'milagrosas'.",
                "Belga, goleiro gigante e decisivo do Real Madrid.",
                "Goleiro belga famoso por sua altura e reflexos.",
                "Jogador que se tornou ídolo no Real Madrid e na Bélgica."
            ]
        },
        {
            word: "Pedri",
            category: "Jogadores",
            hints: [
                "Jogador espanhol jovem conhecido por sua 'visão de jogo' e 'elegância' com a bola.",
                "Espanhol, jovem talento do Barça, meio-campo criativo.",
                "Meio-campista espanhol jovem famoso por sua visão de jogo e técnica.",
                "Jogador considerado uma das maiores promessas do futebol espanhol."
            ]
        },
        {
            word: "Gavi",
            category: "Jogadores",
            hints: [
                "Jogador espanhol jovem conhecido por sua 'raça' e 'entrega' em campo.",
                "Espanhol, jovem raçudo do Barça, meio-campo incansável.",
                "Meio-campista espanhol jovem famoso por sua raça e energia.",
                "Jogador considerado uma das maiores promessas do futebol espanhol."
            ]
        },
        {
            word: "Bruno Guimarães",
            category: "Jogadores",
            hints: [
                "Jogador brasileiro meio-campista conhecido por sua 'elegância' e 'versatilidade'.",
                "Brasileiro, meio-campista elegante e completo do Newcastle.",
                "Meio-campista brasileiro famoso por sua elegância e versatilidade.",
                "Jogador que se destacou no Athletico Paranaense e Lyon antes de ir para o Newcastle."
            ]
        },
        {
            word: "Vinicius Junior",
            category: "Jogadores",
            hints: [
                "Jogador brasileiro do Real Madrid, conhecido por dribles e velocidade.",
                "Atacante da seleção brasileira, camisa 20 do Real Madrid.",
                "Famoso por jogadas de linha de fundo e gols decisivos.",
                "Cria do Flamengo, ascendeu rapidamente no futebol europeu."
            ]
        },
        {
            word: "Rodrygo Goes",
            category: "Jogadores",
            hints: [
                "Jogador brasileiro do Real Madrid, conhecido por versatilidade e técnica.",
                "Atacante/meia da seleção brasileira, camisa 11 do Real Madrid.",
                "Famoso por gols importantes em Champions League.",
                "Cria do Santos, chegou jovem ao Real Madrid."
            ]
        },
        {
            word: "Gabriel Jesus",
            category: "Jogadores",
            hints: [
                "Jogador brasileiro do Arsenal, conhecido por garra e movimentação.",
                "Atacante da seleção brasileira, camisa 9 do Arsenal.",
                "Famoso por pressão na marcação e gols de oportunismo.",
                "Cria do Palmeiras, se destacou no Manchester City antes de ir para o Arsenal."
            ]
        },
        {
            word: "Richarlison",
            category: "Jogadores",
            hints: [
                "Jogador brasileiro do Tottenham, conhecido por raça e gols de voleio.",
                "Atacante da seleção brasileira, camisa 9 do Tottenham.",
                "Famoso por gols acrobáticos e entrega em campo.",
                "Se destacou no Fluminense, Watford e Everton antes de ir para o Tottenham."
            ]
        },
        {
            word: "Raphinha",
            category: "Jogadores",
            hints: [
                "Jogador brasileiro do Barcelona, conhecido por drible e chutes de longa distância.",
                "Atacante da seleção brasileira, camisa 22 do Barcelona.",
                "Famoso por dribles desconcertantes e finalizações precisas.",
                "Se destacou no Avaí, Vitória Guimarães, Sporting, Rennes e Leeds antes de ir para o Barcelona."
            ]
        },
        {
            word: "Éder Militão",
            category: "Jogadores",
            hints: [
                "Jogador brasileiro do Real Madrid, conhecido por velocidade e força.",
                "Zagueiro da seleção brasileira, camisa 3 do Real Madrid.",
                "Famoso por desarmes precisos e impulsão no jogo aéreo.",
                "Cria do São Paulo, se destacou no Porto antes de ir para o Real Madrid."
            ]
        },
        {
            word: "Lucas Paquetá",
            category: "Jogadores",
            hints: [
                "Jogador brasileiro do West Ham, conhecido por técnica e visão de jogo.",
                "Meia da seleção brasileira, camisa 10 do West Ham.",
                "Famoso por passes criativos e finalizações de média distância.",
                "Cria do Flamengo, se destacou no Milan e Lyon antes de ir para o West Ham."
            ]
        },
        {
            word: "Alphonso Davies",
            category: "Jogadores",
            hints: [
                "Jogador canadense do Bayern de Munique, conhecido por velocidade e drible.",
                "Lateral esquerdo do Bayern de Munique, camisa 19.",
                "Famoso por arrancadas fulminantes e dribles em velocidade.",
                "Jovem promessa canadense, já conquistou a Champions League."
            ]
        },
        {
            word: "Jamal Musiala",
            category: "Jogadores",
            hints: [
                "Jogador alemão do Bayern de Munique, conhecido por drible e visão de jogo.",
                "Meia ofensivo do Bayern de Munique, camisa 42.",
                "Famoso por dribles curtos e passes precisos.",
                "Jovem promessa alemã, já se consolidou como titular no Bayern."
            ]
        },
        {
            word: "Jude Bellingham",
            category: "Jogadores",
            hints: [
                "Jogador inglês do Real Madrid, conhecido por versatilidade e liderança.",
                "Meio-campista do Real Madrid, camisa 5.",
                "Famoso por chegadas à área e passes decisivos.",
                "Jovem promessa inglesa, contratado a peso de ouro pelo Real Madrid."
            ]
        },
        {
            word: "Pedri González",
            category: "Jogadores",
            hints: [
                "Jogador espanhol do Barcelona, conhecido por visão de jogo e técnica.",
                "Meio-campista do Barcelona, camisa 8.",
                "Famoso por passes precisos e controle de bola.",
                "Jovem promessa espanhola, comparado a Iniesta por seu estilo de jogo."
            ]
        },
        {
            word: "Gavi Páez",
            category: "Jogadores",
            hints: [
                "Jogador espanhol do Barcelona, conhecido por raça e entrega em campo.",
                "Meio-campista do Barcelona, camisa 6.",
                "Famoso por marcação forte e passes incisivos.",
                "Jovem promessa espanhola, símbolo da garra do Barcelona."
            ]
        },
        {
            word: "Frenkie de Jong",
            category: "Jogadores",
            hints: [
                "Jogador holandês do Barcelona, conhecido por elegância e visão de jogo.",
                "Meio-campista do Barcelona, camisa 21.",
                "Famoso por condução de bola e passes precisos.",
                "Um dos pilares do meio-campo do Barcelona e da seleção holandesa."
            ]
        },
        {
            word: "Federico Valverde",
            category: "Jogadores",
            hints: [
                "Jogador uruguaio do Real Madrid, conhecido por força física e chutes de longa distância.",
                "Meio-campista do Real Madrid, camisa 15.",
                "Famoso por chutes potentes e versatilidade tática.",
                "Um dos pilares do meio-campo do Real Madrid e da seleção uruguaia."
            ]
        },
        {
            word: "Antoine Griezmann",
            category: "Jogadores",
            hints: [
                "Jogador francês do Atlético de Madrid, conhecido por inteligência tática e versatilidade.",
                "Atacante/meia do Atlético de Madrid, camisa 7.",
                "Famoso por posicionamento inteligente e finalizações precisas.",
                "Campeão mundial com a França em 2018 e ídolo do Atlético de Madrid."
            ]
        },
        {
            word: "Jan Oblak",
            category: "Jogadores",
            hints: [
                "Jogador esloveno do Atlético de Madrid, considerado um dos melhores goleiros do mundo.",
                "Goleiro do Atlético de Madrid, camisa 13.",
                "Famoso por defesas difíceis e segurança debaixo das traves.",
                "Um dos pilares do Atlético de Madrid de Diego Simeone."
            ]
        },
        {
            word: "Marc-André ter Stegen",
            category: "Jogadores",
            hints: [
                "Jogador alemão do Barcelona, considerado um dos melhores goleiros do mundo.",
                "Goleiro do Barcelona, camisa 1.",
                "Famoso por defesas espetaculares e habilidade com os pés.",
                "Um dos pilares do Barcelona e da seleção alemã."
            ]
        },
        {
            word: "Manuel Neuer",
            category: "Jogadores",
            hints: [
                "Jogador alemão do Bayern de Munique, goleiro revolucionário e 'líbero'.",
                "Goleiro do Bayern de Munique, camisa 1.",
                "Famoso por sair da área e jogar com os pés, além de grandes defesas.",
                "Considerado um dos maiores goleiros da história do futebol."
            ]
        },
        {
            word: "Trent Alexander-Arnold",
            category: "Jogadores",
            hints: [
                "Jogador inglês do Liverpool, lateral direito moderno e criativo.",
                "Lateral direito do Liverpool, camisa 66.",
                "Famoso por passes longos e cruzamentos precisos.",
                "Um dos laterais direitos mais promissores e criativos do futebol mundial."
            ]
        },
        {
            word: "Andrew Robertson",
            category: "Jogadores",
            hints: [
                "Jogador escocês do Liverpool, lateral esquerdo raçudo e ofensivo.",
                "Lateral esquerdo do Liverpool, camisa 26.",
                "Famoso por cruzamentos precisos e entrega em campo.",
                "Um dos laterais esquerdos mais consistentes e ofensivos do futebol mundial."
            ]
        },
        {
            word: "Thiago Alcântara",
            category: "Jogadores",
            hints: [
                "Jogador espanhol do Liverpool, meio-campista elegante e técnico.",
                "Meio-campista do Liverpool, camisa 6.",
                "Famoso por passes precisos e controle de bola.",
                "Um dos meias mais técnicos e refinados do futebol mundial."
            ]
        },
        {
            word: "Fabinho Tavares",
            category: "Jogadores",
            hints: [
                "Jogador brasileiro do Liverpool, volante marcador e elegante.",
                "Volante do Liverpool, camisa 3.",
                "Famoso por desarmes precisos e passes verticais.",
                "Um dos volantes mais consistentes e elegantes do futebol mundial."
            ]
        },
        {
            word: "Sadio Mané",
            category: "Jogadores",
            hints: [
                "Jogador senegalês ex-Liverpool e Bayern, atacante rápido e habilidoso.",
                "Atacante senegalês, ídolo do Liverpool e atualmente no Al Nassr.",
                "Famoso por velocidade, drible e gols decisivos.",
                "Um dos pilares do ataque do Liverpool de Jurgen Klopp."
            ]
        },
        {
            word: "Mohamed Salah",
            category: "Jogadores",
            hints: [
                "Jogador egípcio do Liverpool, atacante rápido e finalizador.",
                "Atacante egípcio, ídolo do Liverpool e da seleção egípcia.",
                "Famoso por velocidade, drible e 'canhota mágica'.",
                "Um dos maiores artilheiros da história do Liverpool."
            ]
        },
        {
            word: "Roberto Firmino",
            category: "Jogadores",
            hints: [
                "Jogador brasileiro ex-Liverpool, atacante inteligente e tático.",
                "Atacante brasileiro, ídolo do Liverpool e atualmente no Al Ahli.",
                "Famoso por inteligência tática, passes e gols de oportunismo.",
                "Peça fundamental do ataque do Liverpool de Jurgen Klopp, o 'falso 9'."
            ]
        },
        {
            word: "Luis Díaz",
            category: "Jogadores",
            hints: [
                "Jogador colombiano do Liverpool, atacante rápido e driblador.",
                "Atacante colombiano do Liverpool, camisa 23.",
                "Famoso por velocidade, drible e explosão.",
                "Um dos destaques do Porto antes de ir para o Liverpool."
            ]
        },
        {
            word: "Darwin Núñez",
            category: "Jogadores",
            hints: [
                "Jogador uruguaio do Liverpool, atacante potente e finalizador.",
                "Atacante uruguaio do Liverpool, camisa 27.",
                "Famoso por força física, velocidade e faro de gol.",
                "Um dos atacantes mais promissores do futebol uruguaio."
            ]
        },
        {
            word: "Cody Gakpo",
            category: "Jogadores",
            hints: [
                "Jogador holandês do Liverpool, atacante versátil e técnico.",
                "Atacante holandês do Liverpool, camisa 18.",
                "Famoso por drible, passes e finalizações precisas.",
                "Um dos destaques do PSV Eindhoven antes de ir para o Liverpool."
            ]
        },
        {
            word: "Diogo Jota",
            category: "Jogadores",
            hints: [
                "Jogador português do Liverpool, atacante versátil e finalizador.",
                "Atacante português do Liverpool, camisa 20.",
                "Famoso por posicionamento, cabeceio e gols de oportunismo.",
                "Um dos atacantes mais completos e versáteis do futebol português."
            ]
        },
        {
            word: "Marcus Rashford",
            category: "Jogadores",
            hints: [
                "Jogador inglês do Manchester United, atacante rápido e finalizador.",
                "Atacante do Manchester United, camisa 10.",
                "Famoso por velocidade, drible e chutes potentes.",
                "Cria da base do Manchester United e ídolo da torcida."
            ]
        },
        {
            word: "Bruno Fernandes",
            category: "Jogadores",
            hints: [
                "Jogador português do Manchester United, meia criativo e goleador.",
                "Meia do Manchester United, camisa 8.",
                "Famoso por passes precisos, chutes de longa distância e cobranças de falta.",
                "Um dos pilares do meio-campo do Manchester United e da seleção portuguesa."
            ]
        },
        {
            word: "Antony Matheus",
            category: "Jogadores",
            hints: [
                "Jogador brasileiro do Manchester United, atacante driblador e habilidoso.",
                "Atacante do Manchester United, camisa 21.",
                "Famoso por drible, velocidade e jogadas de efeito.",
                "Um dos destaques do Ajax antes de ir para o Manchester United."
            ]
        },
        {
            word: "Jadon Sancho",
            category: "Jogadores",
            hints: [
                "Jogador inglês do Manchester United, atacante rápido e driblador.",
                "Atacante do Manchester United, camisa 25.",
                "Famoso por drible, velocidade e assistências.",
                "Um dos destaques do Borussia Dortmund antes de ir para o Manchester United."
            ]
        },
        {
            word: "Casemiro",
            category: "Jogadores",
            hints: [
                "Jogador brasileiro do Manchester United, volante marcador e líder.",
                "Volante do Manchester United, camisa 18.",
                "Famoso por desarmes precisos, passes verticais e liderança.",
                "Pentacampeão da Champions League pelo Real Madrid e pilar do Manchester United."
            ]
        },
        {
            word: "Christian Eriksen",
            category: "Jogadores",
            hints: [
                "Jogador dinamarquês do Manchester United, meia criativo e elegante.",
                "Meia do Manchester United, camisa 14.",
                "Famoso por passes precisos, visão de jogo e cobranças de falta.",
                "Um dos meias mais técnicos e refinados do futebol mundial, superou problemas cardíacos para voltar a jogar."
            ]
        },
        {
            word: "Raphael Varane",
            category: "Jogadores",
            hints: [
                "Jogador francês do Manchester United, zagueiro rápido e elegante.",
                "Zagueiro do Manchester United, camisa 19.",
                "Famoso por velocidade, desarmes precisos e impulsão no jogo aéreo.",
                "Tetracampeão da Champions League pelo Real Madrid e campeão mundial com a França em 2018."
            ]
        },
        {
            word: "Lisandro Martínez",
            category: "Jogadores",
            hints: [
                "Jogador argentino do Manchester United, zagueiro raçudo e técnico.",
                "Zagueiro do Manchester United, camisa 6.",
                "Famoso por garra, desarmes precisos e passes verticais.",
                "Campeão mundial com a Argentina em 2022 e pilar da zaga do Manchester United."
            ]
        },
        {
            word: "Harry Maguire",
            category: "Jogadores",
            hints: [
                "Jogador inglês do Manchester United, zagueiro forte e líder.",
                "Zagueiro do Manchester United, camisa 5.",
                "Famoso por força física, cabeceio e liderança.",
                "Capitão do Manchester United e zagueiro da seleção inglesa."
            ]
        },
        {
            word: "David De Gea",
            category: "Jogadores",
            hints: [
                "Jogador espanhol ex-Manchester United, goleiro ágil e salvador.",
                "Goleiro espanhol, ídolo do Manchester United e atualmente sem clube.",
                "Famoso por defesas espetaculares e reflexos.",
                "Um dos maiores goleiros da história do Manchester United."
            ]
        },

        // Lendas (40)
        {
            word: "Pelé",
            category: "Lendas",
            hints: [
                "Lenda brasileira conhecida como 'O Rei do Futebol'.",
                "Brasileiro, 'Rei do Futebol', tricampeão mundial.",
                "Único jogador a conquistar 3 Copas do Mundo.",
                "Considerado o maior jogador de futebol de todos os tempos por muitos."
            ]
        },
        {
            word: "Diego Maradona",
            category: "Lendas",
            hints: [
                "Lenda argentina conhecida como 'La Mano de Dios'.",
                "Argentino, 'D10S', 'Mão de Deus' e gênio.",
                "Jogador argentino que marcou um gol com a mão na Copa do Mundo.",
                "Considerado um dos maiores jogadores de futebol de todos os tempos por muitos."
            ]
        },
        {
            word: "Johan Cruijff",
            category: "Lendas",
            hints: [
                "Lenda holandesa conhecida como 'O Profeta do Gol'.",
                "Holandês, 'Profeta do Gol', 'Futebol Total'.",
                "Jogador e treinador holandês que revolucionou o futebol.",
                "Criador do 'Futebol Total' e influenciador do 'tiki-taka'."
            ]
        },
        {
            word: "Franz Beckenbauer",
            category: "Lendas",
            hints: [
                "Lenda alemã conhecida como 'Der Kaiser'.",
                "Alemão, 'Kaiser', líbero elegante e vencedor.",
                "Jogador e treinador alemão considerado um dos maiores da história.",
                "Revolucionário na posição de líbero, elegante e vencedor."
            ]
        },
        {
            word: "Zico",
            category: "Lendas",
            hints: [
                "Lenda brasileira conhecida como 'O Galinho de Quintino'.",
                "Brasileiro, 'Galinho de Quintino', Flamengo e Seleção.",
                "Ídolo máximo do Flamengo e craque da Seleção Brasileira dos anos 80.",
                "Um dos maiores jogadores brasileiros que não conquistou uma Copa do Mundo."
            ]
        },
        {
            word: "Alfredo Di Stéfano",
            category: "Lendas",
            hints: [
                "Lenda argentino-espanhola conhecida como 'La Saeta Rubia'.",
                "Argentino-Espanhol, lenda do Real Madrid, 'Saeta Rubia'.",
                "Jogador argentino-espanhol que brilhou no Real Madrid nos anos 50 e 60.",
                "Um dos maiores jogadores da história do Real Madrid e do futebol mundial."
            ]
        },
        {
            word: "Ferenc Puskás",
            category: "Lendas",
            hints: [
                "Lenda húngara conhecida como 'Major Galopante'.",
                "Húngaro, 'Major Galopante', artilheiro e lenda do Real.",
                "Jogador húngaro que brilhou no Real Madrid nos anos 50 e 60.",
                "Um dos maiores artilheiros da história do futebol mundial."
            ]
        },
        {
            word: "Garrincha",
            category: "Lendas",
            hints: [
                "Lenda brasileira conhecida como 'A Alegria do Povo'.",
                "Brasileiro, 'Alegria do Povo', driblador e genial.",
                "Jogador brasileiro famoso por seus dribles desconcertantes e alegria em campo.",
                "Peça fundamental nas conquistas das Copas do Mundo de 1958 e 1962."
            ]
        },
        {
            word: "Romário",
            category: "Lendas",
            hints: [
                "Lenda brasileira conhecida como 'O Baixinho'.",
                "Brasileiro, 'Baixinho', área é seu habitat natural, faro de gol.",
                "Jogador brasileiro famoso por seu faro de gol e habilidade na área.",
                "Um dos maiores artilheiros da história do futebol brasileiro e mundial."
            ]
        },
        {
            word: "Ronaldo Fenômeno",
            category: "Lendas",
            hints: [
                "Lenda brasileira conhecida como 'O Fenômeno'.",
                "Brasileiro, 'Fenômeno', velocidade, dribles e gols.",
                "Jogador brasileiro famoso por sua velocidade, força e habilidade.",
                "Um dos maiores atacantes da história do futebol mundial."
            ]
        },
        {
            word: "Michel Platini",
            category: "Lendas",
            hints: [
                "Lenda francesa conhecida como 'Le Roi'.",
                "Francês, 'Le Roi', elegância e gols de falta.",
                "Jogador francês famoso por sua elegância e habilidade em bolas paradas.",
                "Um dos maiores jogadores franceses da história e tricampeão da Bola de Ouro."
            ]
        },
        {
            word: "George Best",
            category: "Lendas",
            hints: [
                "Lenda norte-irlandesa conhecida como 'O Quinto Beatle'.",
                "Norte-irlandês, 'Quinto Beatle', driblador e personalidade.",
                "Jogador norte-irlandês famoso por seu drible e estilo de vida boêmio.",
                "Um dos maiores jogadores da história do Manchester United."
            ]
        },
        {
            word: "Bobby Charlton",
            category: "Lendas",
            hints: [
                "Lenda inglesa conhecida como 'Sir Bobby'.",
                "Inglês, lenda do United e da Inglaterra, 'Sir Bobby'.",
                "Jogador inglês famoso por sua elegância e chutes de longa distância.",
                "Um dos maiores jogadores da história do Manchester United e da Inglaterra."
            ]
        },
        {
            word: "Eusébio",
            category: "Lendas",
            hints: [
                "Lenda portuguesa conhecida como 'A Pantera Negra'.",
                "Português, 'Pantera Negra', velocidade e potência.",
                "Jogador português famoso por sua velocidade e potência física.",
                "Um dos maiores jogadores da história do futebol português."
            ]
        },
        {
            word: "Lev Yashin",
            category: "Lendas",
            hints: [
                "Lenda russa conhecida como 'A Aranha Negra'.",
                "Russo, 'Aranha Negra', goleiro revolucionário.",
                "Goleiro russo famoso por seu estilo inovador e uniforme preto.",
                "Considerado o maior goleiro da história do futebol."
            ]
        },
        {
            word: "Paolo Maldini",
            category: "Lendas",
            hints: [
                "Lenda italiana conhecida como 'Il Capitano'.",
                "Italiano, 'Il Capitano', elegância e longevidade no Milan.",
                "Jogador italiano famoso por sua elegância, liderança e longevidade.",
                "Ídolo máximo do Milan e considerado um dos maiores defensores da história."
            ]
        },
        {
            word: "Roberto Baggio",
            category: "Lendas",
            hints: [
                "Lenda italiana conhecida como 'Il Divin Codino'.",
                "Italiano, 'Codino Divino', talento e magia nos pés.",
                "Jogador italiano famoso por seu talento, técnica e carisma.",
                "Um dos jogadores mais amados da história do futebol italiano."
            ]
        },
        {
            word: "Eric Cantona",
            category: "Lendas",
            hints: [
                "Lenda francesa conhecida como 'King Eric'.",
                "Francês, 'King Eric', carisma e gols no United.",
                "Jogador francês famoso por seu carisma, talento e declarações polêmicas.",
                "Ídolo do Manchester United e figura icônica do futebol inglês dos anos 90."
            ]
        },
        {
            word: "Andriy Shevchenko",
            category: "Lendas",
            hints: [
                "Lenda ucraniana conhecida como 'Sheva'.",
                "Ucraniano, 'Sheva', velocidade e gols pelo Milan e Chelsea.",
                "Jogador ucraniano famoso por sua velocidade e faro de gol.",
                "Um dos maiores jogadores da história do futebol ucraniano e ídolo do Milan."
            ]
        },
        {
            word: "Luís Figo",
            category: "Lendas",
            hints: [
                "Lenda portuguesa que gerou polêmica ao trocar Barcelona pelo Real Madrid.",
                "Português, 'Luís', dribles e classe, Barça e Real.",
                "Jogador português famoso por seu drible e classe.",
                "Um dos jogadores mais talentosos da 'Geração de Ouro' do futebol português."
            ]
        },
        {
            word: "Sócrates",
            category: "Lendas",
            hints: [
                "Lenda brasileira conhecida como 'Doutor Sócrates'.",
                "Brasileiro, 'Doutor', inteligência e engajamento político.",
                "Jogador brasileiro famoso por sua inteligência, visão de jogo e ativismo político.",
                "Ídolo do Corinthians e da 'Democracia Corintiana'."
            ]
        },
        {
            word: "Franz Beckenbauer",
            category: "Lendas",
            hints: [
                "Lenda alemã conhecida como 'Der Kaiser'.",
                "Alemão, 'Kaiser', elegância e liderança.",
                "Jogador e técnico alemão, sinônimo de elegância e liderança.",
                "Um dos maiores nomes da história do futebol alemão e mundial."
            ]
        },
        {
            word: "Zinedine Zidane",
            category: "Lendas",
            hints: [
                "Lenda francesa conhecida como 'Zizou'.",
                "Francês, 'Zizou', elegância e genialidade.",
                "Jogador e técnico francês, sinônimo de elegância e genialidade.",
                "Um dos maiores jogadores e técnicos da história do futebol mundial."
            ]
        },
        {
            word: "Ronaldinho Gaúcho",
            category: "Lendas",
            hints: [
                "Lenda brasileira conhecida como 'Bruxo'.",
                "Brasileiro, 'Bruxo', alegria e magia nos pés.",
                "Jogador brasileiro famoso por sua alegria, drible e genialidade.",
                "Um dos jogadores mais amados e carismáticos da história do futebol."
            ]
        },
        {
            word: "Kaká",
            category: "Lendas",
            hints: [
                "Lenda brasileira conhecido como 'Menino de Ouro'.",
                "Brasileiro, 'Menino de Ouro', elegância e velocidade.",
                "Jogador brasileiro famoso por sua elegância, velocidade e gols.",
                "Um dos jogadores mais elegantes e carismáticos da história do futebol."
            ]
        },
        {
            word: "Rivaldo",
            category: "Lendas",
            hints: [
                "Lenda brasileira conhecido por seus chutes de trivela e canhota mágica.",
                "Brasileiro, 'Riva', habilidade e chutes de trivela.",
                "Jogador brasileiro famoso por sua habilidade, chutes de trivela e gols de placa.",
                "Um dos jogadores mais habilidosos e criativos da história do futebol."
            ]
        },
        {
            word: "Gerd Müller",
            category: "Lendas",
            hints: [
                "Lenda alemã conhecido como 'Der Bomber'.",
                "Alemão, 'Bomber', faro de gol e oportunismo.",
                "Jogador alemão famoso por seu faro de gol e oportunismo.",
                "Um dos maiores artilheiros da história do futebol alemão e mundial."
            ]
        },
        {
            word: "Marco van Basten",
            category: "Lendas",
            hints: [
                "Lenda holandesa conhecido como 'Cisne de Utrecht'.",
                "Holandês, 'Cisne', elegância e finalização.",
                "Jogador holandês famoso por sua elegância, finalização e gols de placa.",
                "Um dos atacantes mais elegantes e completos da história do futebol."
            ]
        },
        {
            word: "Ruud Gullit",
            category: "Lendas",
            hints: [
                "Lenda holandesa conhecido por sua 'Visão Laranja'.",
                "Holandês, 'Visão Laranja', força física e versatilidade.",
                "Jogador holandês famoso por sua força física, versatilidade e dreadlocks.",
                "Um dos jogadores mais completos e carismáticos da história do futebol."
            ]
        },
        {
            word: "Frank Rijkaard",
            category: "Lendas",
            hints: [
                "Lenda holandesa conhecido como 'A Âncora'.",
                "Holandês, 'Âncora', força física e marcação.",
                "Jogador holandês famoso por sua força física, marcação e elegância.",
                "Um dos volantes mais elegantes e eficientes da história do futebol."
            ]
        },
        {
            word: "George Weah",
            category: "Lendas",
            hints: [
                "Lenda liberiana conhecido como 'Rei George'.",
                "Liberiano, 'Rei George', velocidade e força física.",
                "Jogador liberiano famoso por sua velocidade, força física e dribles.",
                "Único africano a conquistar a Bola de Ouro (antes de Weah)."
            ]
        },
        {
            word: "Roger Milla",
            category: "Lendas",
            hints: [
                "Lenda camaronesa conhecido por sua 'Dança do Idoso'.",
                "Camaronês, 'Dança do Idoso', alegria e vitalidade.",
                "Jogador camaronês famoso por sua alegria, vitalidade e dança na comemoração.",
                "Ídolo do futebol africano e símbolo da Copa do Mundo de 1990."
            ]
        },
        {
            word: "Hidetoshi Nakata",
            category: "Lendas",
            hints: [
                "Lenda japonesa conhecido como 'O Samurai'.",
                "Japonês, 'Samurai', técnica e visão de jogo.",
                "Jogador japonês famoso por sua técnica, visão de jogo e liderança.",
                "Pioneiro do futebol japonês na Europa e ídolo nacional."
            ]
        },
        {
            word: "Park Ji-sung",
            category: "Lendas",
            hints: [
                "Lenda sul-coreana conhecido como 'Pulmão de Três'.",
                "Sul-coreano, 'Pulmão', fôlego e entrega tática.",
                "Jogador sul-coreano famoso por seu fôlego, entrega tática e disciplina.",
                "Ídolo do Manchester United e símbolo do futebol sul-coreano."
            ]
        },
        {
            word: "Hugo Sanchez",
            category: "Lendas",
            hints: [
                "Lenda mexicana conhecido como 'Hugol'.",
                "Mexicano, 'Hugol', faro de gol e acrobacias.",
                "Jogador mexicano famoso por seu faro de gol, acrobacias e 'Huguinas'.",
                "Ídolo do Real Madrid e um dos maiores artilheiros da história do futebol mexicano."
            ]
        },
        {
            word: "Diego Forlán",
            category: "Lendas",
            hints: [
                "Lenda uruguaia conhecido como 'Cachito'.",
                "Uruguaio, 'Cachito', técnica e chutes de longa distância.",
                "Jogador uruguaio famoso por sua técnica, chutes de longa distância e 'Chilena'.",
                "Melhor jogador da Copa do Mundo de 2010 e ídolo do futebol uruguaio."
            ]
        },
        {
            word: "Radamel Falcao",
            category: "Lendas",
            hints: [
                "Lenda colombiana conhecido como 'El Tigre'.",
                "Colombiano, 'Tigre', faro de gol e cabeceio.",
                "Jogador colombiano famoso por seu faro de gol, cabeceio e oportunismo.",
                "Um dos maiores atacantes colombianos de todos os tempos e ídolo do Atlético de Madrid."
            ]
        },
        {
            word: "Gabriel Batistuta",
            category: "Lendas",
            hints: [
                "Lenda argentina conhecido como 'Batigol'.",
                "Argentino, 'Batigol', força física e chutes potentes.",
                "Jogador argentino famoso por sua força física, chutes potentes e 'Metralhadora'.",
                "Um dos maiores atacantes argentinos de todos os tempos e ídolo da Fiorentina."
            ]
        },
        {
            word: "Alan Shearer",
            category: "Lendas",
            hints: [
                "Lenda inglesa conhecido como 'Shearer'.",
                "Inglês, 'Shearer', faro de gol e cabeceio.",
                "Jogador inglês famoso por seu faro de gol, cabeceio e oportunismo.",
                "Maior artilheiro da história da Premier League e ídolo do Newcastle."
            ]
        },
        {
            word: "Thierry Henry",
            category: "Lendas",
            hints: [
                "Lenda francesa conhecido como 'Titi'.",
                "Francês, 'Titi', velocidade e elegância.",
                "Jogador francês famoso por sua velocidade, elegância e finalização.",
                "Maior artilheiro da história do Arsenal e ídolo francês."
            ]
        },
	 {
        word: "Falcão",
        category: "Lendas",
        hints: [
            "Apelidado de 'O Oitavo Rei de Roma' pela paixão da torcida italiana.",
            "Marcou um gol antológico contra a Itália na Copa de 1982, de fora da área no ângulo.",
            "Eleito 'Jogador de Ouro de Roma' como o maior da história do clube.",
	    "Fez parte da lendária Seleção Brasileira de 1982.",
            "Meio-campista elegante e cerebral, ídolo da Roma e da seleção brasileira.",
            "Após a carreira nos campos, tornou-se comentarista esportivo renomado."
        ]
    },
    {
        word: "Carlos Alberto Torres",
        category: "Lendas",
        hints: [
            "Conhecido como 'Capita', liderou o Brasil em 1970.",
            "Autor de um dos gols mais bonitos em finais de Copa do Mundo.",
            "Integra a seleção de todos os tempos da Copa do Mundo FIFA.",
            "Lateral-direito capitão da Seleção Brasileira tricampeã mundial em 1970."
        ]
    },
    {
        word: "Taffarel",
        category: "Lendas",
        hints: [
            "Lenda brasileira, goleiro tetracampeão mundial em 1994.",
            "Famoso por defender pênaltis decisivos, especialmente em 94 e 98.",
            "Utilizava a fé e versículos bíblicos como parte de sua preparação.",
            "Marcou época no Atlético Mineiro, Internacional e na Seleção Brasileira."
        ]
    },
    {
        word: "Telê Santana",
        category: "Lendas",
        hints: [
            "Treinador brasileiro, o 'Mestre', ícone do 'futebol arte'.",
            "Comandou o Brasil em Copas do Mundo, encantando o mundo com seu estilo ofensivo.",
            "Ídolo em diversos clubes, com destaque para o São Paulo.",
            "Comandou a Seleção Brasileira nas Copas do Mundo de 1982 e 1986."
        ]
    },
    {
        word: "Bebeto",
        category: "Lendas",
        hints: [
            "Atacante tetracampeão mundial em 1994 pelo Brasil.",
            "Formou uma dupla de ataque dos sonhos com Romário.",
            "Imortalizou a comemoração 'Embalando Bebê' na Copa de 94.",
            "Brilhou em clubes como Flamengo, Vasco e Deportivo La Coruña."
        ]
    },
    {
        word: "Zinho",
        category: "Lendas",
        hints: [
            "Meio-campista tetracampeão mundial em 1994 pelo Brasil.",
            "Jogador versátil, atuou em diversas posições com a mesma eficiência.",
            "Peça fundamental no esquema tático da seleção de 94.",
            "Conquistou títulos importantes por grandes clubes brasileiros como Flamengo e Palmeiras."
        ]
    },
    {
        word: "Toninho Cerezo",
        category: "Lendas",
        hints: [
            "Elegante meio-campista da Seleção Brasileira nos anos 70 e 80.",
            "Fez parte do meio-campo mágico do Atlético Mineiro nos anos 70.",
            "Notabilizou-se pelos passes precisos e lançamentos longos.",
            "Um dos grandes nomes do futebol brasileiro que não venceu a Copa do Mundo."
        ]
    },
    {
        word: "Júnior",
        category: "Lendas",
        hints: [
            "Conhecido como 'Maestro', lateral e meio-campista de refinada técnica.",
            "Ídolo do Flamengo, onde atuou em diferentes posições com maestria.",
            "Destaque da Seleção Brasileira de 1982, com drible e visão de jogo.",
            "Um dos maiores jogadores da história do Flamengo."
        ]
    },
    {
        word: "Zito",
        category: "Lendas",
        hints: [
            "Volante raçudo e eficiente, bicampeão mundial pelo Brasil.",
            "Peça fundamental do lendário Santos de Pelé.",
            "Apelidado de 'Gerente' por sua liderança em campo.",
            "Um dos maiores ícones da história do Santos FC."
        ]
    },
    {
        word: "Didi",
        category: "Lendas",
        hints: [
            "Conhecido como 'Príncipe Etíope', meio-campista cerebral e elegante.",
            "Inventor da 'Folha Seca', um chute com efeito que confundia goleiros.",
            "Eleito o melhor jogador da Copa do Mundo de 1958.",
            "Bicampeão mundial pelo Brasil e ídolo do Botafogo e Real Madrid."
        ]
    },
    {
        word: "Zagallo",
        category: "Lendas",
        hints: [
            "Única pessoa a ser tetracampeão mundial (jogador e treinador/coordenador).",
            "Conhecido como 'Velho Lobo', estrategista e vitorioso.",
            "Comandou o Brasil na conquista do tri em 1970.",
            "Figura lendária do futebol brasileiro, com história rica em títulos e conquistas."
        ]
    },
    {
        word: "Nilton Santos",
        category: "Lendas",
        hints: [
            "Apelidado de 'A Enciclopédia do Futebol', lateral-esquerdo completo.",
            "Revolucionou a lateral-esquerda com seu estilo ofensivo e técnico.",
            "Bicampeão mundial pelo Brasil, ídolo do Botafogo e da Seleção.",
            "Considerado por muitos o maior lateral-esquerdo da história."
        ]
    },
    {
        word: "Gordon Banks",
        category: "Lendas",
        hints: [
            "Goleiro inglês, imortalizado pela 'Defesa do Século' contra Pelé.",
            "Considerado um dos maiores goleiros de todos os tempos.",
            "Campeão da Copa do Mundo de 1966 com a Inglaterra.",
            "Famoso por sua agilidade, reflexos e segurança debaixo das traves."
        ]
    },
    {
        word: "Franco Baresi",
        category: "Lendas",
        hints: [
            "Zagueiro italiano, 'Il Capitano', símbolo do Milan.",
            "Líder da defesa do lendário Milan dos anos 80 e 90.",
            "Conhecido por seu posicionamento impecável e desarmes precisos.",
            "Um dos maiores zagueiros da história, jogou apenas pelo Milan profissionalmente."
        ]
    },
    {
        word: "Raúl",
        category: "Lendas",
        hints: [
            "Atacante espanhol, 'El Siete', ídolo do Real Madrid.",
            "Maior artilheiro da história do Real Madrid por muitos anos.",
            "Conhecido por sua inteligência, oportunismo e faro de gol.",
            "Um dos maiores jogadores espanhóis de todos os tempos."
        ]
    },
    {
        word: "Rivellino",
        category: "Lendas",
        hints: [
            "Meia-atacante brasileiro, 'Patada Atômica', 'Rebelde com Causa' ou 'Reizinho do Parque'.",
            "ídolo do Corinthians e Fluminense, famoso pelo 'drible do elástico'.",
            "Chute potente de esquerda e bigode marcante eram suas características.",
            "Um dos craques da Seleção Brasileira tricampeã em 1970."
        ]
    },
    {
        word: "Cafú",
        category: "Lendas",
        hints: [
            "Lateral-direito brasileiro, 'Pendolino', o jogador com mais jogos em Copas pelo Brasil.",
            "Lateral-direito com fôlego e vigor físico impressionantes, capitão do tetra em 1994 e penta em 2002.",
            "Jogador com mais jogos disputados em Copas do Mundo pelo Brasil.",
            "ídolo de clubes como São Paulo, Palmeiras e Milan."
        ]
    },
    {
        word: "Zanetti",
        category: "Lendas",
        hints: [
            "Lateral/volante argentino, 'El Tractor', símbolo da Inter de Milão.",
            "Jogador com mais partidas pela Inter, sinônimo de profissionalismo e liderança.",
            "Conhecido por sua versatilidade tática e entrega em campo.",
            "Um dos maiores ídolos da história da Inter de Milão."
        ]
    },
    {
        word: "Hernán Crespo",
        category: "Lendas",
        hints: [
            "Atacante argentino, 'Valdanito', goleador elegante e oportunista.",
            "ídolo em diversos clubes, como River Plate, Parma, Lazio, Inter e Chelsea.",
            "Um dos maiores artilheiros argentinos no futebol europeu.",
            "Famoso por seu faro de gol e presença de área."
        ]
    },
    {
        word: "Juan Sebastián Verón",
        category: "Lendas",
        hints: [
            "Meio-campista argentino, 'La Brujita', filho de outra lenda, Juan Ramón Verón.",
            "Jogador cerebral, com passes precisos e visão de jogo apurada.",
            "ídolo de clubes como Estudiantes, Lazio, Manchester United e Inter.",
            "Conhecido por sua elegância e liderança no meio-campo."
        ]
    },
    {
        word: "Andrés D'Alessandro",
        category: "Lendas",
        hints: [
            "Meia argentino, 'El Cabezón', ídolo do Internacional.",
            "Jogador habilidoso e criativo, com drible e visão de jogo.",
            "Marcou época no Internacional, conquistando a Sulamericana, Recopa e Libertadores.",
            "Conhecido por sua liderança e identificação com o clube gaúcho."
        ]
    },
    {
        word: "Lothar Matthaus",
        category: "Lendas",
        hints: [
            "Meio-campista alemão completo, 'Panzer', com força física e técnica.",
            "Capitão da Alemanha campeã da Copa do Mundo de 1990.",
            "Bola de Ouro em 1990.",
	    "Teve breve passagem no futebol brasileiro como técnico do Athlético Paranaense.",
            "ídolo de clubes como Bayern de Munique e Inter de Milão."
        ]
    },
    {
        word: "Oliver Kahn",
        category: "Lendas",
        hints: [
            "Goleiro alemão, 'O Titã' ou 'Der Titan', famoso por sua garra e liderança.",
            "Um dos maiores goleiros da história do Bayern de Munique e da Alemanha.",
            "Melhor jogador e melhor goleiro da Copa do Mundo de 2002.",
            "Conhecido por seu estilo explosivo e defesas espetaculares."
        ]
    },
    {
        word: "Michael Ballack",
        category: "Lendas",
        hints: [
            "Meio-campista alemão, 'Kaiser Ballack', poderoso e versátil.",
            "Jogador elegante, com grande presença física e faro de gol.",
            "ídolo de clubes como Bayern Leverkusen, Bayern de Munique e Chelsea.",
            "Um dos grandes nomes do futebol alemão nos anos 2000."
        ]
    },
    {
        word: "Omar Sívori",
        category: "Lendas",
            hints: [
            "Lenda argentina e italiana, 'Cabeza Dura', atacante genial e polêmico.",
            "Um dos poucos jogadores a marcar 6 gols em uma única partida do Campeonato Italiano.",
            "Bola de Ouro em 1961.",
            "ídolo de River Plate, Juventus e Napoli."
        ]
    },
    {
        word: "Pavel Nedved",
        category: "Lendas",
            hints: [
            "Meio-campista tcheco, 'Fúria Checa', explosivo e elegante.",
            "Bola de Ouro em 2003.",
            "ídolo da Juventus e da seleção tcheca.",
            "Conhecido por seus chutes potentes de longa distância e velocidade."
        ]
    },
    {
        word: "Teófilo Cubillas",
        category: "Lendas",
            hints: [
            "Lenda peruana, 'El Nene', um dos maiores jogadores da história do Peru.",
            "Meio-campista ofensivo com faro de gol e técnica refinada.",
            "Eleito o melhor jogador sul-americano de 1972.",
            "Um dos grandes nomes do futebol sul-americano nos anos 70."
        ]
    },
    {
        word: "Alessandro Del Piero",
        category: "Lendas",
            hints: [
            "Atacante italiano, 'Pinturicchio', símbolo da Juventus.",
            "Jogador elegante, com técnica refinada e gols de placa.",
            "ídolo da Juventus, onde jogou por quase 20 anos.",
            "Campeão mundial com a Itália em 2006."
        ]
    },
    {
        word: "Gianluigi Buffon",
        category: "Lendas",
            hints: [
            "Goleiro italiano, 'Gigi', um dos maiores goleiros de todos os tempos.",
            "Ícone da Juventus e da seleção italiana.",
            "Campeão mundial com a Itália em 2006.",
            "Conhecido por sua longevidade, reflexos e segurança debaixo das traves."
        ]
    },
    {
        word: "Michael Owen",
        category: "Lendas",
            hints: [
            "Atacante inglês, 'Golden Boy', famoso por sua velocidade e explosão.",
            "Bola de Ouro em 2001.",
            "ídolo do Liverpool e da seleção inglesa.",
            "Marcou um gol memorável contra a Argentina na Copa do Mundo de 1998."
        ]
    },
    {
        word: "David Beckham",
        category: "Lendas",
            hints: [
            "Meio-campista inglês, 'Spice Boy', famoso por sua precisão nos passes e bolas paradas.",
            "Ícone do futebol inglês e mundial, conhecido por seu estilo e carisma.",
            "ídolo do Manchester United e Real Madrid.",
            "Um dos jogadores mais midiáticos e populares da história."
        ]
    },
    {
        word: "Abédi Pelé",
        category: "Lendas",
            hints: [
            "Lenda ganês, 'The Maestro', um dos maiores jogadores africanos de todos os tempos.",
            "Meio-campista ofensivo elegante e criativo, três vezes Bola de Ouro Africana.",
            "Campeão da Champions League com o Olympique de Marselha.",
            "Pai dos também jogadores André e Jordan Ayew."
        ]
    },
    {
        word: "David Trezeguet",
        category: "Lendas",
            hints: [
            "Atacante francês, 'Trezegol', conhecido por seu faro de gol e oportunismo.",
            "Campeão mundial com a França em 1998 e da Eurocopa de 2000.",
            "ídolo da Juventus, onde marcou mais de 100 gols.",
            "Famoso por suas finalizações precisas e potentes."
        ]
    },
    {
        word: "Lilian Thuram",
        category: "Lendas",
            hints: [
            "Lateral-direito/zagueiro francês, 'Le Professeur', símbolo de solidez defensiva e inteligência tática.",
            "Campeão mundial com a França em 1998 e da Eurocopa de 2000.",
            "ídolo de clubes como Monaco, Juventus e Barcelona.",
            "Conhecido por sua versatilidade, técnica e liderança."
        ]
    },
    {
        word: "Patrick Vieira",
        category: "Lendas",
            hints: [
            "Volante francês, 'Le Longuet', símbolo de força física e imposição no meio-campo.",
            "Capitão do Arsenal 'Invencível' da temporada 2003-2004.",
            "Campeão mundial com a França em 1998 e da Eurocopa de 2000.",
            "ídolo de clubes como Arsenal e Juventus."
        ]
    },
    {
        word: "Luis Enrique",
        category: "Lendas",
            hints: [
            "Meio-campista/atacante espanhol, 'Lucho', versátil e raçudo.",
            "ídolo de Barcelona e Real Madrid, embora tenha tido mais identificação com o Barça.",
            "Conhecido por sua entrega em campo e gols importantes.",
            "Posteriormente, técnico de sucesso do Barcelona."
        ]
    },
    {
        word: "Carlos Valderrama",
        category: "Lendas",
            hints: [
            "Meio-campista colombiano, 'El Pibe', famoso por seu cabelo loiro e estilo único.",
            "Um dos maiores jogadores da história do futebol colombiano.",
            "Conhecido por seus passes precisos e visão de jogo.",
            "Ícone do futebol sul-americano nos anos 90."
        ]
    },
    {
        word: "René Higuita",
        category: "Lendas",
            hints: [
            "Goleiro colombiano, 'El Loco', famoso por seu estilo extravagante e ousado.",
            "Popularizou o 'escorpião', defesa acrobática com os pés.",
            "Goleiro com grande habilidade com os pés, quase um 'líbero'.",
            "Figura icônica do futebol colombiano e mundial."
        ]
    },
    {
        word: "Roberto Carlos",
        category: "Lendas",
            hints: [
            "Lateral-esquerdo brasileiro, 'A Bala de Canhão', famoso por sua força física e chutes potentes.",
            "Conhecido por seus chutes de falta com efeito e força impressionantes.",
            "Tetracampeão mundial com o Brasil em 2002.",
            "ídolo do Real Madrid e da seleção brasileira."
        ]
    },
    {
        word: "Javier Saviola",
        category: "Lendas",
            hints: [
            "Atacante argentino, 'El Conejo', conhecido por sua velocidade e habilidade.",
            "ídolo do River Plate e com passagens por Barcelona e Real Madrid.",
            "Medalha de ouro olímpica com a Argentina em 2004.",
            "Famoso por seus dribles curtos e faro de gol."
        ]
    },

	// Lendas Coloradas

	{
            word: "Dunga",
            category: "Lendas Coloradas",
            hints: [
                "Volante raçudo e líder, símbolo da raça colorada.",
                "Capitão do tetra em 1994 e ídolo do Internacional.",
                "Conhecido por sua garra, liderança e chutes de longa distância.",
                "Um dos maiores ídolos da história do Internacional."
            ]
        },
        {
            word: "Fernandão",
            category: "Lendas Coloradas",
            hints: [
                "Atacante e ídolo máximo do Internacional, 'O Eterno Capitão'.",
                "Capitão do Mundial de Clubes de 2006 e da Libertadores de 2006.",
                "Marcou o gol 1000 da história do clássico Gre-Nal.",
                "Símbolo de liderança, raça e amor à camisa colorada."
            ]
        },
        {
            word: "Elias Figueroa",
            category: "Lendas Coloradas",
            hints: [
                "Zagueiro chileno, 'Don Elías', um dos maiores zagueiros da história.",
                "Eleito o melhor jogador da América do Sul por três vezes.",
                "ídolo do Internacional nos anos 70, tricampeão brasileiro.",
                "Conhecido por sua elegância, posicionamento e tempo de bola."
            ]
        },
        {
            word: "Gamarra",
            category: "Lendas Coloradas",
            hints: [
                "Zagueiro paraguaio, 'El Colorado', elegante e técnico.",
                "Um dos melhores zagueiros da história do Internacional e do futebol sul-americano.",
                "Zagueiro extraclasse, capitão da seleção paraguaia.",
                "Famoso por seu estilo clássico, desarmes precisos e passes longos."
            ]
        },
        {
            word: "Mauro Galvão",
            category: "Lendas Coloradas",
            hints: [
                "Zagueiro elegante e capitão, 'O Marechal', ícone da história colorada.",
                "Capitão do time campeão mundial interclubes em 2006.",
                "Jogador com mais partidas pelo Internacional.",
                "Conhecido por sua liderança, posicionamento e desarmes precisos."
            ]
        },
        {
            word: "Carlitos",
            category: "Lendas Coloradas",
            hints: [
                "Atacante, 'Alberto Zolim Filho', habilidoso e driblador.",
                "ídolo da torcida colorada, só defendeu as cores do Internacional ao longo de sua carreira.",
                "É o maior artilheiro do Gre-Nal, com 42 gols em 62 jogos.",
                "Atuou de 1939 a 1951, consagrando-se como o maior artilheiro da história do clube."
            ]
        },
        {
            word: "Adriano Gabiru",
            category: "Lendas Coloradas",
            hints: [
                "Atacante, 'O Herói de Yokohama', autor do gol do título mundial de 2006.",
                "Entrou para a história do Inter ao marcar o gol contra o Barcelona no Mundial.",
                "Jogador de velocidade e oportunismo.",
                "Um dos heróis improváveis da conquista mundial colorada."
            ]
        },
        {
            word: "Leandro Damião",
            category: "Lendas Coloradas",
            hints: [
                "Atacante, 'Damigol', 'O Matador', goleador e artilheiro.",
                "Artilheiro da Libertadores de 2011 e da Copa do Brasil de 2013.",
                "ídolo da torcida colorada, com muitos gols e convocações para a Seleção.",
                "Famoso por sua força física, impulsão e finalização precisa."
            ]
        },
        {
            word: "Valdomiro",
            category: "Lendas Coloradas",
            hints: [
                "Ponta-direita, 'O Craque da Província', ídolo dos anos 70.",
                "Maior artilheiro da história do clássico Gre-Nal.",
                "Um dos maiores ídolos da história do Internacional.",
                "Conhecido por sua velocidade, dribles e gols decisivos."
            ]
        },
        {
            word: "Manga",
            category: "Lendas Coloradas",
            hints: [
                "Goleiro histórico, 'Haílton Corrêa de Arruda', um dos maiores da história do clube.",
                "Goleiro titular do Inter nos anos 70, tricampeão brasileiro.",
                "Famoso pelo seus dedos tortos, por suas defesas espetaculares e personalidade forte.",
                "Considerado um dos maiores goleiros da história do futebol brasileiro."
            ]
        },
        {
            word: "Tesourinha",
            category: "Lendas Coloradas",
            hints: [
                "Atacante, 'Carlinhos Volante', um dos maiores ídolos da história do clube.",
                "Fez parte do 'Rolo Compressor', time lendário do Inter nos anos 40.",
                "Conhecido por sua velocidade, drible e chutes precisos.",
                "Um dos maiores craques do futebol gaúcho de todos os tempos."
            ]
        },
        {
            word: "Larry",
            category: "Lendas Coloradas",
            hints: [
                "Atacante, um dos maiores artilheiros da história colorada.",
                "Artilheiro do 'Rolo Compressor', time lendário do Inter nos anos 40.",
                "Marcou mais de 170 gols com a camisa colorada.",
                "Um dos maiores ídolos da história do Internacional."
            ]
        },
        {
            word: "Claudiomiro",
            category: "Lendas Coloradas",
            hints: [
                "Atacante ídolo dos anos 70.",
                "Um dos artilheiros do Inter no tricampeonato brasileiro.",
                "Famoso por seus dribles e gols de placa.",
                "Conhecido como 'Beija-Flor' pela torcida colorada."
            ]
        },
        {
            word: "Mario Sérgio",
            category: "Lendas Coloradas",
            hints: [
                "Meio-campista e técnico, ídolo como jogador e treinador.",
                "Meio-campista elegante e cerebral nos anos 70, depois técnico campeão brasileiro pelo Inter em 1979.",
                "Conhecido por sua visão de jogo e liderança.",
                "Figura histórica do Internacional, com passagens marcantes nas duas funções."
            ]
        },
        {
            word: "Iarley",
            category: "Lendas Coloradas",
            hints: [
                "Atacante herói do Mundial de Clubes de 2006.",
                "Autor de gols decisivos na Libertadores e no Mundial de 2006.",
                "Jogador de velocidade e oportunismo.",
                "Formou um ataque memorável com Fernandão e Sobis."
            ]
        },
        {
            word: "Guiñazu",
            category: "Lendas Coloradas",
            hints: [
                "Volante argentino, raçudo e guerreiro.",
                "Um dos estrangeiros mais queridos pela torcida colorada.",
                "Conhecido por sua entrega, marcação e raça.",
                "Apelidado de 'Cholo' pela torcida colorada."
            ]
        },
        {
            word: "Nilmar",
            category: "Lendas Coloradas",
            hints: [
                "Atacante veloz e habilidoso, autor de uma pintura contra o Corinthians.",
                "Formou um ataque memorável com Rafael Sobis e Fernandão.",
                "ídolo da torcida colorada, com gols decisivos e dribles desconcertantes.",
                "Conquistou a Sulamericana e a Recopa pelo Colorado."
            ]
        },
        {
            word: "Rafael Sóbis",
            category: "Lendas Coloradas",
            hints: [
                "Jovem talento revelado pelo Inter, marcado por gols em finais de Libertadores.",
                "Autor de gols importantes na Libertadores de 2006.",
                "Formou um ataque memorável com Nilmar e Fernandão.",
                "ídolo da torcida colorada, com dribles e velocidade."
            ]
        },
        {
            word: "Índio",
            category: "Lendas Coloradas",
            hints: [
                "O xerife da zaga colorada por muitos anos.",
                "Um dos jogadores com mais títulos pelo Inter.",
                "Conhecido por sua raça, liderança e jogo aéreo.",
                "Formou dupla de zaga histórica com Bolívar."
            ]
        },
        {
            word: "Bolívar",
            category: "Lendas Coloradas",
            hints: [
                "Zagueiro paredão da defesa colorada, o 'General'.",
                "Um dos jogadores mais vitoriosos da história do Inter.",
                "Conhecido por sua força física, impulsão e desarmes precisos.",
                "Formou dupla de zaga histórica com Índio."
            ]
        },
        {
            word: "Clemer",
            category: "Lendas Coloradas",
            hints: [
                "Foi o paredão colorado por mais de uma década.",
                "Goleiro titular nas conquistas da Libertadores e do Mundial de Clubes.",
                "ídolo da torcida colorada, conhecido por suas defesas seguras e liderança.",
                "Um dos goleiros com mais jogos na história do Inter."
            ]
        },
        {
            word: "Taison",
            category: "Lendas Coloradas",
            hints: [
                "Atacante com muita velocidade e habilidade pelas pontas.",
                "Revelado pelo Inter, retornou ao clube como ídolo consagrado.",
                "Conquistou a Libertadores e o Mundial de Clubes em 2006.",
                "Conhecido por seus dribles, velocidade e gols bonitos."
            ]
        },
        {
            word: "Jorge Wagner",
            category: "Lendas Coloradas",
            hints: [
                "Meia e lateral-esquerdo, versatilidade e técnica.",
                "Jogador polivalente, atuou em diversas posições com a mesma qualidade.",
                "Conquistou a Libertadores e o Mundial de Clubes em 2006.",
                "Conhecido por sua técnica, passes e visão de jogo."
            ]
        },
        {
            word: "Fabiano Eller",
            category: "Lendas Coloradas",
            hints: [
                "Zagueiro, segurança e experiência na zaga.",
                "Zagueiro titular na campanha vitoriosa do Mundial de Clubes de 2006.",
                "Jogador de imposição física e bom jogo aéreo.",
                "Formou zaga sólida com Índio e Bolívar."
            ]
        },
        {
            word: "Alex",
            category: "Lendas Coloradas",
            hints: [
                "Meia, o 'Cérebro' do meio-campo colorado.",
                "Maestro do time campeão da Libertadores e Mundial de Clubes em 2006.",
                "Conhecido por sua inteligência, passes e visão de jogo.",
                "Um dos maiores ídolos da história recente do Internacional."
            ]
        },
        {
            word: "Abel Braga",
            category: "Lendas Coloradas",
            hints: [
                "O comandante das maiores conquistas coloradas.",
                "Técnico campeão da Libertadores e do Mundial de Clubes em 2006 pelo Inter.",
                "ídolo da torcida colorada, conhecido por sua experiência e liderança.",
                "Um dos treinadores mais vitoriosos da história do Internacional."
            ]
        },
        {
            word: "Rubén Paz",
            category: "Lendas Coloradas",
            hints: [
                "Meia, craque uruguaio que encantou o Beira-Rio nos anos 80.",
                "Um dos maiores jogadores estrangeiros a vestir a camisa colorada.",
                "Conhecido por sua técnica, dribles e chutes precisos.",
                "ídolo da torcida colorada, mesmo em um período sem grandes títulos."
            ]
        },
        {
            word: "Carpegiani",
            category: "Lendas Coloradas",
            hints: [
                "Meio-campista e técnico multicampeão pelo Inter.",
                "Meio-campista nos anos 70, depois técnico campeão brasileiro e da Libertadores pelo Flamengo.",
                "Um dos maiores ídolos da era de ouro da história colorada.",
                "Conhecido por sua liderança e conhecimento tático."
            ]
        },
        {
            word: "Batista",
            category: "Lendas Coloradas",
            hints: [
                "Volante, pulmão do meio-campo colorado nos anos 70 e 80.",
                "Volante marcador e incansável, com grande vigor físico.",
                "Peça fundamental do meio-campo do Inter em diversas conquistas.",
                "Conhecido por sua raça, marcação e entrega em campo."
            ]
        },
        {
            word: "Rubens Minelli",
            category: "Lendas Coloradas",
            hints: [
                "Técnico histórico, comandante do tricampeonato brasileiro.",
                "Técnico tricampeão brasileiro invicto pelo Internacional nos anos 70.",
                "Revolucionário na preparação física e tática das equipes.",
                "Um dos maiores treinadores da história do futebol brasileiro."
            ]
        },
        {
            word: "Enio Andrade",
            category: "Lendas Coloradas",
            hints: [
                "Técnico, o 'Mago', estrategista e vencedor.",
                "Técnico campeão brasileiro de 1979 pelo Internacional.",
                "Conhecido por sua inteligência tática e capacidade de motivar equipes.",
                "Um dos grandes treinadores da história do futebol brasileiro."
            ]
        },

	// Lendas Gremistas	

        {
            word: "Renato Portaluppi",
            category: "Lendas Gremistas",
            hints: [
                "Atacante e técnico, ídolo máximo do Grêmio.",
                "Autor de gols decisivos em títulos históricos do Grêmio como jogador e técnico.",
                "Conquistou a Libertadores e o Mundial como jogador e a Libertadores como técnico pelo Grêmio.",
                "Símbolo da raça tricolor e da mística copeira gremista."
            ]
        },
        {
            word: "Danrlei",
            category: "Lendas Gremistas",
            hints: [
                "Paredão tricolor nos anos 90.",
                "Goleiro titular nas conquistas da Libertadores e do Brasileiro nos anos 90.",
                "ídolo da torcida gremista, conhecido por suas defesas milagrosas e identificação com o clube.",
                "Um dos maiores goleiros da história do Grêmio."
            ]
        },
        {
            word: "Hugo de León",
            category: "Lendas Gremistas",
            hints: [
                "Zagueiro uruguaio, capitão copeiro e raçudo.",
                "Capitão do Grêmio nas conquistas da Libertadores e do Mundial em 1983.",
                "ídolo da torcida gremista, símbolo de raça e liderança.",
                "Um dos maiores zagueiros da história do Grêmio."
            ]
        },
        {
            word: "Paulo Nunes",
            category: "Lendas Gremistas",
            hints: [
                "O 'Diabo Loiro', velocidade e oportunismo.",
                "Formou dupla de ataque infernal com Jardel nos anos 90.",
                "ídolo da torcida gremista, com gols decisivos e dribles desconcertantes.",
                "Campeão da Libertadores e Brasileiro pelo Grêmio."
            ]
        },
        {
            word: "Jardel",
            category: "Lendas Gremistas",
            hints: [
                "Atacante, artilheiro implacável e goleador nato.",
                "Maior artilheiro da história do Grêmio, com mais de 150 gols.",
                "Formou dupla de ataque memorável com Paulo Nunes nos anos 90.",
                "Conquistou a Libertadores e Brasileiro pelo Grêmio."
            ]
        },
        {
            word: "Adilson Batista",
            category: "Lendas Gremistas",
            hints: [
                "Zagueiro, segurança e liderança na zaga tricolor.",
                "Zagueiro titular nas conquistas da Libertadores e do Brasileiro nos anos 90.",
                "Conhecido por seu posicionamento, jogo aéreo e desarmes precisos.",
                "Formou zaga de respeito com Rivarola."
            ]
        },
        {
            word: "Tarciso",
            category: "Lendas Gremistas",
            hints: [
                "Ponta-direita, a 'Flecha Negra', ídolo dos anos 70 e 80.",
                "Jogador símbolo da raça e da história do Grêmio.",
                "Conhecido por sua velocidade, dribles e gols importantes em clássicos Gre-Nal.",
                "Um dos maiores ídolos da história do Grêmio."
            ]
        },
        {
            word: "Valdir Espinosa",
            category: "Lendas Gremistas",
            hints: [
                "Técnico, o 'Professor', estrategista e campeão.",
                "Técnico campeão da Libertadores e do Mundial de Clubes em 1983 pelo Grêmio.",
                "Conhecido por sua inteligência tática e inovação.",
                "Um dos maiores treinadores da história do Grêmio."
            ]
        },
        {
            word: "Luiz Felipe Scolari",
            category: "Lendas Gremistas",
            hints: [
                "Técnico comandante de grandes conquistas.",
                "Técnico campeão da Copa do Brasil de 1994, Libertadores de 1995 e Brasileiro de 1996 pelo Grêmio.",
                "ídolo da torcida gremista, conhecido por sua liderança e estilo motivador.",
                "Um dos treinadores mais vitoriosos da história do Grêmio e do futebol brasileiro."
            ]
        },
        {
            word: "Roger Machado",
            category: "Lendas Gremistas",
            hints: [
                "Lateral-esquerdo e técnico, elegância e identificação com o Grêmio.",
                "Lateral-esquerdo titular na conquista da Libertadores de 1995.",
                "ídolo da torcida gremista, com passagens marcantes como jogador e técnico.",
                "Conhecido por seu estilo elegante de jogar e liderança."
            ]
        },
        {
            word: "Arílson",
            category: "Lendas Gremistas",
            hints: [
                "Meia, habilidade e visão de jogo no meio-campo tricolor.",
                "Meio-campista criativo e habilidoso, com passes precisos e lançamentos.",
                "ídolo da torcida gremista nos anos 90.",
                "Peça importante nas conquistas da Libertadores e Brasileiro."
            ]
        },
        {
            word: "Lucas Leiva",
            category: "Lendas Gremistas",
            hints: [
                "Volante famoso por jogar no 'Liverpool', raça e identificação com o Grêmio.",
                "Revelado pelo Grêmio, retornou ao clube como ídolo consagrado.",
                "Volante marcador e aguerrido, com grande entrega em campo.",
                "Conhecido por sua raça, marcação e amor à camisa tricolor."
            ]
        },
        {
            word: "Pedro Geromel",
            category: "Lendas Gremistas",
            hints: [
                "Xerife da zaga tricolor na era moderna.",
                "Zagueiro técnico e elegante, com grande liderança.",
                "ídolo da torcida gremista, com títulos importantes e identificação com o clube.",
                "Conhecido por seu posicionamento, desarmes e saída de bola qualificada."
            ]
        },
        {
            word: "Kannemann",
            category: "Lendas Gremistas",
            hints: [
                "Zagueiro argentino, raça e coração na zaga tricolor.",
                "Um dos estrangeiros mais queridos pela torcida gremista.",
                "Conhecido por sua garra, entrega e 'cancha'.",
                "Formou zaga de respeito com Geromel."
            ]
        },
        {
            word: "Galatto",
            category: "Lendas Gremistas",
            hints: [
                "Figura icônica da conquista na 'Batalha dos Aflitos'.",
                "Em 2005, o o goleiro se tornou herói do Tricolor na partida decisiva contra o Náutico",
                "ídolo da torcida gremista, com defesas importantes e identificação com o clube.",
                "Conhecido pela defesa de pênalti contra o Náutico."
            ]
        },
        {
            word: "Douglas Costa",
            category: "Lendas Gremistas",
            hints: [
                "Meia-atacante, 'Douglas Costa de Souza', velocidade e habilidade pelas pontas.",
                "Revelado pelo Grêmio, retornou ao clube como ídolo consagrado.",
                "Jogador de velocidade, drible e explosão.",
                "Conhecido por seus dribles, assistências e chutes colocados."
            ]
        },
        {
            word: "Douglas",
            category: "Lendas Gremistas",
            hints: [
                "O 'Maestro Pifador', 'barriga de cadela', passes e visão de jogo no meio-campo.",
                "Meio-campista cerebral e técnico, com passes precisos e lançamentos.",
                "ídolo da torcida gremista, com assistências e passes geniais.",
                "Conhecido por sua inteligência, visão de jogo e passes precisos."
            ]
        },
        {
            word: "Luan",
            category: "Lendas Gremistas",
            hints: [
                "Eleito o 'Rei da América' em 2017.",
                "O melhor jogador da Libertadores de 2017, conquistada pelo Grêmio.",
                "Jogador habilidoso e versátil, com drible, velocidade e finalização.",
                "ídolo da torcida gremista, 'pipoqueiro' mas com gols importantes e jogadas de efeito."
            ]
        },
        {
            word: "Rivarola",
            category: "Lendas Gremistas",
            hints: [
                "Zagueiro paraguaio, raça e imposição na zaga tricolor nos anos 90.",
                "Zagueiro aguerrido e marcador, símbolo da raça copeira gremista.",
                "Formou zaga de respeito com Adilson Batista.",
                "Um dos estrangeiros mais identificados com a torcida tricolor."
            ]
        },
        {
            word: "Arce",
            category: "Lendas Gremistas",
            hints: [
                "Lateral-direito paraguaio, classe e técnica pela lateral direita.",
                "Lateral-direito de qualidade, com passes precisos e cruzamentos.",
                "ídolo da torcida gremista nos anos 90.",
                "Peça importante nas conquistas da Libertadores e Brasileiro."
            ]
        },
        {
            word: "Assis",
            category: "Lendas Gremistas",
            hints: [
                "Meia, o 'Assis', irmão mais velho de Ronaldinho Gaúcho.",
                "Meio-campista elegante e cerebral, com passes precisos e visão de jogo.",
                "ídolo da torcida gremista nos anos 80.",
                "Irmão e mentor de Ronaldinho Gaúcho, o craque que encantou o mundo."
            ]
        },
        {
            word: "Marcelo Grohe",
            category: "Lendas Gremistas",
            hints: [
                "Goleiro titular nas conquistas da Copa do Brasil, Libertadores e Recopa Sul-Americana.",
                "ídolo da torcida gremista, com defesas importantes e identificação com o clube.",
                "Um dos goleiros com mais jogos na história do Grêmio."
            ]
        },
        {
            word: "Anderson",
            category: "Lendas Gremistas",
            hints: [
                "Jovem promessa do futebol mundial revelada pelo Grêmio.",
                "Meio-campista talentoso, com técnica, muita velocidade e visão de jogo.",
                "Campeão da Copa América com a Seleção Brasileira.",
                "Revelado nas categorias de base do Grêmio e vendido jovem para o futebol europeu."
            ]
        },

	
	// Estádios Europeus
	
        {
            word: "San Paolo",
            category: "Estádios Europeus",
            hints: [
                "Antigo nome do estádio de Nápoles, renomeado em homenagem a um ídolo.",
                "Agora se chama Estádio Diego Armando Maradona.",
                "Palco de jogos históricos do Napoli e da Seleção Italiana.",
                "Localizado em Nápoles, cidade apaixonada por futebol."
            ]
        },
        {
            word: "Anfield Road",
            category: "Estádios Europeus",
            hints: [
                "Nome completo do estádio do Liverpool FC.",
                "Casa do Liverpool, atmosfera única e 'You'll Never Walk Alone'.",
                "Localizado em Liverpool, cidade com grande tradição futebolística.",
                "Estádio histórico com arquibancada 'The Kop' famosa."
            ]
        },
        {
            word: "Old Trafford",
            category: "Estádios Europeus",
            hints: [
                "Nome completo do estádio do Manchester United.",
                "Casa do Manchester United, 'Teatro dos Sonhos'.",
                "Localizado em Manchester, cidade berço do futebol inglês.",
                "Estádio gigante com capacidade para mais de 74 mil pessoas."
            ]
        },
        {
            word: "Emirates Stadium",
            category: "Estádios Europeus",
            hints: [
                "Estádio moderno de Londres, casa do Arsenal FC.",
                "Casa do Arsenal, substituiu o antigo Highbury.",
                "Localizado em Londres, cidade com muitos clubes de futebol.",
                "Estádio moderno e tecnológico com design elegante."
            ]
        },
        {
            word: "Stamford Bridge",
            category: "Estádios Europeus",
            hints: [
                "Estádio histórico de Londres, casa do Chelsea FC.",
                "Casa do Chelsea, localizado no bairro nobre de Fulham.",
                "Localizado em Londres, cidade com muitos clubes de futebol.",
                "Estádio tradicional com atmosfera inglesa autêntica."
            ]
        },
        {
            word: "Allianz Arena",
            category: "Estádios Europeus",
            hints: [
                "Estádio futurista de Munique, casa do Bayern de Munique.",
                "Casa do Bayern, conhecido pelo design inflável.",
                "Localizado em Munique, cidade com rica cultura e história.",
                "Estádio moderno e tecnológico, palco de grandes eventos."
            ]
        },
        {
            word: "Signal Iduna Park",
            category: "Estádios Europeus",
            hints: [
                "Estádio gigante de Dortmund, casa do Borussia Dortmund.",
                "Casa do Borussia Dortmund, 'Muralha Amarela'.",
                "Localizado em Dortmund, cidade com torcida apaixonada por futebol.",
                "Maior estádio da Alemanha, atmosfera eletrizante."
            ]
        },
        {
            word: "Camp Nou",
            category: "Estádios Europeus",
            hints: [
                "Estádio colossal de Barcelona, casa do FC Barcelona.",
                "Casa do Barcelona, 'Maior da Europa'.",
                "Localizado em Barcelona, cidade cosmopolita e vibrante.",
                "Maior estádio da Europa, templo do futebol mundial."
            ]
        },
        {
            word: "Santiago Bernabéu",
            category: "Estádios Europeus",
            hints: [
                "Estádio majestoso de Madrid, casa do Real Madrid.",
                "Casa do Real Madrid, 'La Casa Blanca'.",
                "Localizado em Madrid, capital da Espanha e cidade histórica.",
                "Estádio histórico e imponente, palco de lendas."
            ]
        },
        {
            word: "San Siro",
            category: "Estádios Europeus",
            hints: [
                "Estádio mítico de Milão, casa de AC Milan e Inter Milan.",
                "Casa de Milan e Inter, 'Scala do Futebol'.",
                "Localizado em Milão, capital da moda e design.",
                "Estádio lendário e imponente, palco de clássicos."
            ]
        },
        {
            word: "Wembley",
            category: "Estádios Europeus",
            hints: [
                "Estádio emblemático de Londres, palco de grandes decisões.",
                "Novo Wembley, moderno e gigante.",
                "Localizado em Londres, centro do futebol mundial.",
                "Estádio icônico com arco imponente, símbolo da Inglaterra."
            ]
        },
        {
            word: "Parc Olympique Lyonnais",
            category: "Estádios Europeus",
            hints: [
                "Estádio moderno de Lyon, casa do Olympique Lyonnais.",
                "Conhecido como 'Groupama Stadium' por razões de patrocínio.",
                "Localizado em Lyon, cidade gastronômica e histórica.",
                "Estádio moderno e tecnológico, palco de jogos europeus."
            ]
        },
        {
            word: "Estádio da Luz",
            category: "Estádios Europeus",
            hints: [
                "Estádio luminoso de Lisboa, casa do SL Benfica.",
                "Casa do Benfica, 'A Catedral'.",
                "Localizado em Lisboa, cidade histórica e charmosa.",
                "Estádio moderno e imponente, palco de finais europeias."
            ]
        },
        {
            word: "Estádio do Dragão",
            category: "Estádios Europeus",
            hints: [
                "Estádio imponente do Porto, casa do FC Porto.",
                "Casa do Porto, 'Dragão'.",
                "Localizado no Porto, cidade histórica e portuária.",
                "Estádio moderno e tecnológico, palco de conquistas europeias."
            ]
        },
        {
            word: "Türk Telekom Stadium",
            category: "Estádios Europeus",
            hints: [
                "Estádio moderno de Istambul, casa do Galatasaray SK.",
                "Casa do Galatasaray, 'Inferno Turco'.",
                "Localizado em Istambul, cidade milenar e vibrante.",
                "Estádio moderno e imponente, atmosfera eletrizante."
            ]
        },
        {
            word: "Vodafone Park",
            category: "Estádios Europeus",
            hints: [
                "Estádio moderno de Istambul, casa do Beşiktaş JK.",
                "Casa do Beşiktaş, 'Águias Negras'.",
                "Localizado em Istambul, cidade cosmopolita e histórica.",
                "Estádio moderno e tecnológico, vista panorâmica do Bósforo."
            ]
        },
        {
            word: "Olympiastadion Berlin",
            category: "Estádios Europeus",
            hints: [
                "Estádio histórico de Berlim, palco da final da Copa do Mundo de 2006.",
                "Palco da final da Copa do Mundo de 2006.",
                "Localizado em Berlim, capital alemã e cidade histórica.",
                "Estádio imponente e histórico, testemunha de eventos marcantes."
            ]
        },
        {
            word: "Olympiastadion Munchen",
            category: "Estádios Europeus",
            hints: [
                "Antigo estádio olímpico de Munique, palco da final da Copa de 1974.",
                "Palco da final da Copa do Mundo de 1974.",
                "Localizado em Munique, cidade bávara e tradicional.",
                "Estádio histórico e icônico, design arquitetônico marcante."
            ]
        },
        {
            word: "Stadio Giuseppe Meazza",
            category: "Estádios Europeus",
            hints: [
                "Nome oficial do estádio San Siro, em homenagem a um ídolo italiano.",
                "Mais conhecido como San Siro.",
                "Homenagem ao jogador italiano Giuseppe Meazza.",
                "Estádio lendário e imponente de Milão."
            ]
        },
        {
            word: "Stade Vélodrome",
            category: "Estádios Europeus",
            hints: [
                "Estádio vibrante de Marselha, casa do Olympique de Marseille.",
                "Casa do Olympique de Marseille, 'Vélodrome'.",
                "Localizado em Marselha, cidade portuária e multicultural.",
                "Estádio gigante e imponente, atmosfera calorosa."
            ]
        },
        {
            word: "Amsterdam Arena",
            category: "Estádios Europeus",
            hints: [
                "Antigo nome da Johan Cruijff Arena, em Amsterdã.",
                "Agora se chama Johan Cruijff Arena, em homenagem ao ídolo.",
                "Casa do Ajax, moderno e tecnológico.",
                "Primeiro estádio com teto retrátil na Europa."
            ]
        },
	{
    word: "Parc des Princes",
    category: "Estádios Europeus",
    hints: [
        "Estádio localizado em Paris, França.",
        "Casa do Paris Saint-Germain (PSG).",
        "Já foi palco de finais da Eurocopa e Champions League.",
        "Nome significa 'Parque dos Príncipes' em francês."
    ]
},
	{
    word: "Stadio Olimpico di Roma",
    category: "Estádios Europeus",
    hints: [
        "Estádio icônico de Roma, Itália.",
        "Casa da Roma e da Lazio.",
        "Palco de finais da Champions League e Olimpíadas.",
        "Estádio nacional da Itália, conhecido por sua pista de atletismo."
    ]
},
{
    word: "Stade de France",
    category: "Estádios Europeus",
    hints: [
        "Estádio nacional da França, localizado em Saint-Denis, perto de Paris.",
        "Maior estádio da França.",
        "Palco da final da Copa do Mundo de 1998 e Euro 2016.",
        "Usado para jogos da Seleção Francesa de Futebol e Rugby."
    ]
},
{
    word: "Villa Park",
    category: "Estádios Europeus",
    hints: [
        "Estádio histórico de Birmingham, Inglaterra.",
        "Casa do Aston Villa.",
        "Estádio tradicional do futebol inglês, com atmosfera única.",
        "Já sediou semifinais da Copa do Mundo de 1966 e Euro 1996."
    ]
},
{
    word: "St. James Park",
    category: "Estádios Europeus",
    hints: [
        "Estádio de Newcastle upon Tyne, Inglaterra.",
        "Casa do Newcastle United.",
        "Localizado no coração da cidade de Newcastle, 'The Toon'.",
        "Um dos maiores e mais icônicos estádios do nordeste da Inglaterra."
    ]
},
{
    word: "Philips Stadion",
    category: "Estádios Europeus",
    hints: [
        "Estádio de Eindhoven, Holanda.",
        "Casa do PSV Eindhoven.",
        "Estádio moderno e tecnológico, com atmosfera vibrante.",
        "Nome em homenagem à empresa Philips."
    ]
},
{
    word: "London Olympic Stadium",
    category: "Estádios Europeus",
    hints: [
        "Estádio multiuso em Londres, Inglaterra.",
        "Construído para os Jogos Olímpicos de Londres 2012.",
        "Atualmente casa do West Ham United.",
        "Localizado no Parque Olímpico Rainha Elizabeth."
    ]
},
{
    word: "Stadio Olimpico Grande Torino",
    category: "Estádios Europeus",
    hints: [
        "Estádio de Turim, Itália.",
        "Casa do Torino FC.",
        "Anteriormente conhecido como Stadio Comunale.",
        "Homenagem ao 'Grande Torino', time histórico dos anos 40."
    ]
},
{
    word: "Estádio José Alvalade",
    category: "Estádios Europeus",
    hints: [
        "Estádio moderno de Lisboa, Portugal.",
        "Casa do Sporting CP.",
        "Nome em homenagem a um dos fundadores do Sporting.",
        "Estádio com design inovador e cores vibrantes."
    ]
},
{
    word: "Ramón Sánchez Pizjuán",
    category: "Estádios Europeus",
    hints: [
        "Estádio de Sevilha, Espanha.",
        "Casa do Sevilla FC.",
        "Conhecido como 'La Bombonera de Nervión' pela atmosfera.",
        "Palco de inúmeras finais e jogos europeus."
    ]
},
{
    word: "Mestalla",
    category: "Estádios Europeus",
    hints: [
        "Estádio histórico de Valência, Espanha.",
        "Casa do Valencia CF.",
        "Um dos estádios mais antigos e íngremes da Espanha.",
        "Atmosfera vibrante e caldeirão para os adversários."
    ]
},
{
    word: "Estadio de la Cerámica",
    category: "Estádios Europeus",
    hints: [
        "Estádio de Vila-real, Espanha.",
        "Casa do Villarreal CF.",
        "Anteriormente conhecido como 'El Madrigal'.",
        "Nome atual em referência à indústria cerâmica local."
    ]
},
{
    word: "Allianz Stadium",
    category: "Estádios Europeus",
    hints: [
        "Estádio moderno de Turim, Itália.",
        "Casa da Juventus FC.",
        "Conhecido por seu design moderno e atmosfera intimista.",
        "Inaugurado em 2011 no lugar do antigo Stadio delle Alpi."
    ]
},
{
    word: "San Mamés",
    category: "Estádios Europeus",
    hints: [
        "Estádio de Bilbao, Espanha.",
        "Casa do Athletic Club Bilbao.",
        "Conhecido como 'La Catedral' do futebol espanhol.",
        "Novo San Mamés, inaugurado em 2013, preservando a tradição."
    ]
},
{
    word: "Celtic Park",
    category: "Estádios Europeus",
    hints: [
        "Estádio de Glasgow, Escócia.",
        "Casa do Celtic FC.",
        "Conhecido como 'Paradise' pelos torcedores do Celtic.",
        "Famoso por sua atmosfera única e vibrante, especialmente em jogos europeus."
    ]
},
	// Estádios Sul-Americanos
	{
            word: "La Bombonera",
            category: "Estádios Sul-Americanos",
            hints: [
                "Estádio icônico de Buenos Aires, casa do Boca Juniors.",
                "Oficialmente Estádio Alberto J. Armando.",
                "Conhecido como 'La Bombonera' (Caixa de Bombons) por seu formato.",
                "Famoso pela pressão da torcida e atmosfera única."
            ]
        },
        {
            word: "Monumental de Núñez",
            category: "Estádios Sul-Americanos",
            hints: [
                "Estádio gigante de Buenos Aires, casa do River Plate.",
                "Oficialmente Estádio Antonio Vespucio Liberti.",
                "Maior estádio da Argentina, com capacidade para mais de 83 mil pessoas.",
                "Palco de grandes jogos do River e da Seleção Argentina."
            ]
        },
	{
    word: "Estadio Centenario",
    category: "Estádios Sul-Americanos",
    hints: [
        "Estádio histórico de Montevidéu, Uruguai.",
        "Palco da primeira final da Copa do Mundo de 1930.",
        "Estádio Nacional do Uruguai, usado pela seleção Celeste.",
        "Monumento histórico do futebol mundial."
    ]
},
{
    word: "Estadio Nacional",
    category: "Estádios Sul-Americanos",
    hints: [
        "Estádio nacional do Chile, localizado em Santiago.",
        "Casa da Seleção Chilena, 'La Roja'.",
        "Palco da final da Copa do Mundo de 1962.",
        "Estádio com história rica no futebol sul-americano."
    ]
},
{
    word: "Monumental U",
    category: "Estádios Sul-Americanos",
    hints: [
        "Estádio gigante de Lima, Peru, casa do Universitario de Deportes.",
        "Oficialmente Estádio Monumental.",
        "Um dos maiores estádios da América do Sul.",
        "Palco de finais da Copa Libertadores e Copa América."
    ]
},
{
    word: "Libertadores de America",
    category: "Estádios Sul-Americanos",
    hints: [
        "Estádio do Independiente, em Avellaneda, Argentina.",
        "Oficialmente Estádio Libertadores de América - Ricardo Enrique Bochini.",
        "Casa do 'Rey de Copas'.",
        "Inaugurado em 1928, modernizado e reinaugurado em 2009."
    ]
},
{
    word: "El Cilindro",
    category: "Estádios Sul-Americanos",
    hints: [
        "Estádio do Racing Club, em Avellaneda, Argentina.",
        "Nome oficial: Estádio Presidente Perón.",
        "Conhecido como 'El Cilindro de Avellaneda'.",
        "Um dos estádios mais tradicionais da Argentina."
    ]
},
{
    word: "Defensores del Chaco",
    category: "Estádios Sul-Americanos",
    hints: [
        "Estádio nacional do Paraguai, em Assunção.",
        "Principal estádio do Paraguai, usado pela seleção 'Guaraní'.",
        "Palco de jogos históricos da seleção paraguaia.",
        "Localizado em Assunção, capital do Paraguai."
    ]
},
{
    word: "Hernando Siles",
    category: "Estádios Sul-Americanos",
    hints: [
        "Estádio de La Paz, Bolívia.",
        "Casa de Bolívar e The Strongest.",
        "Um dos estádios mais altos do mundo, situado na altitude de La Paz.",
        "Palco de jogos da seleção boliviana."
    ]
},
{
    word: "Mario Alberto Kempes",
    category: "Estádios Sul-Americanos",
    hints: [
        "Estádio de Córdoba, Argentina.",
        "Anteriormente conhecido como Estádio Olímpico Chateau Carreras.",
        "Um dos maiores estádios da Argentina.",
        "Homenagem ao ídolo argentino Mario Alberto Kempes."
    ]
},
{
    word: "El Campín",
    category: "Estádios Sul-Americanos",
    hints: [
        "Estádio de Bogotá, Colômbia.",
        "Casa do Millonarios e Independiente Santa Fe.",
        "Nome oficial: Estadio Nemesio Camacho.",
        "Principal estádio de Bogotá e palco de grandes clássicos colombianos."
    ]
},
{
    word: "Gran Parque Central",
    category: "Estádios Sul-Americanos",
    hints: [
        "Estádio do Nacional de Montevidéu, Uruguai.",
        "Um dos estádios mais antigos da América do Sul.",
        "Considerado o berço do futebol uruguaio.",
        "Casa do 'Decano' do futebol uruguaio."
    ]
},

	// Times Sul-Americanos
	{
            word: "Boca Juniors",
            category: "Times Sul-Americanos",
            hints: [
                "Clube argentino de Buenos Aires, conhecido como 'Xeneizes'.",
                "Rival do River Plate, o 'Superclásico' é um dos maiores do mundo.",
                "Hexacampeão da Libertadores e tricampeão mundial.",
                "Time da Bombonera, estádio lendário e caldeirão."
            ]
        },
        {
            word: "River Plate",
            category: "Times Sul-Americanos",
            hints: [
                "Clube argentino de Buenos Aires, rival do Boca Juniors, conhecido como 'Millonarios'.",
                "Rival do Boca Juniors, o 'Superclásico' é um dos maiores do mundo.",
                "Tetracampeão da Libertadores e campeão mundial.",
                "Time do Monumental de Núñez, um dos maiores estádios da América do Sul."
            ]
        },
        {
            word: "Peñarol",
            category: "Times Sul-Americanos",
            hints: [
                "Clube uruguaio de Montevidéu, conhecido como 'Manyas' ou 'Carboneros'.",
                "Rival do Nacional, o 'Clásico del Fútbol Uruguayo' é muito tradicional.",
                "Pentacampeão da Libertadores e tricampeão mundial.",
                "Um dos clubes mais antigos e tradicionais da América do Sul."
            ]
        },
        {
            word: "Nacional",
            category: "Times Sul-Americanos",
            hints: [
                "Clube uruguaio de Montevidéu, rival do Peñarol, conhecido como 'Bolsilludos' ou 'Tricolores'.",
                "Rival do Peñarol, o 'Clásico del Fútbol Uruguayo' é muito tradicional.",
                "Tricampeão da Libertadores e tricampeão mundial.",
                "Um dos clubes mais antigos e tradicionais da América do Sul."
            ]
        },
	 {
            word: "Colo Colo",
            category: "Times Sul-Americanos",
            hints: [
                "Clube chileno mais vezes campeão nacional.",
                "Time chileno conhecido como 'Cacique'.",
                "Time chileno com o estádio 'Monumental de Santiago'.",
                "Clube chileno que revelou Carlos Caszely e Marcelo Salas."
            ]
        },
        {
            word: "Universidad de Chile",
            category: "Times Sul-Americanos",
            hints: [
                "Clube chileno conhecido como 'La U' ou 'El Chuncho'.",
                "Time chileno com o estádio 'Nacional de Chile'.",
                "Rival histórico do Colo Colo, protagonizam o 'Superclásico Chileno'.",
                "Clube chileno que revelou Marcelo Salas e Charles Aránguiz."
            ]
        },
        {
            word: "LDU",
            category: "Times Sul-Americanos",
            hints: [
                "Clube equatoriano conhecido como 'La U' ou 'Los Albos'.",
                "Time equatoriano de Quito, com o estádio 'Casa Blanca'.",
                "Campeão da Copa Libertadores da América e da Sul-Americana.",
                "Clube equatoriano que revelou Antonio Valencia e Édison Méndez."
            ]
        },
        {
            word: "Barcelona de Guayaquil",
            category: "Times Sul-Americanos",
            hints: [
                "Clube equatoriano conhecido como 'Ídolo del Ecuador'.",
                "Time equatoriano de Guayaquil, com o estádio 'Monumental Isidro Romero Carbo'.",
                "Vice-campeão da Copa Libertadores da América por duas vezes.",
                "Clube equatoriano que revelou Alberto Spencer e Jorge Bolaños."
            ]
        },
        {
            word: "The Strongest",
            category: "Times Sul-Americanos",
            hints: [
                "Clube boliviano conhecido como 'El Tigre'.",
                "Time boliviano de La Paz, que manda seus jogos no Hernando Siles.",
                "Time boliviano com mais títulos nacionais.",
                "Clube boliviano que revelou Erwin Sánchez e Marco Etcheverry."
            ]
        },
	{
        word: "Deportivo Táchira",
        category: "Times Sul-Americanos",
        hints: [
            "Clube venezuelano de San Cristóbal, conhecido como 'Carrusel Aurinegro'.",
            "Um dos clubes mais populares da Venezuela.",
            "Multicampeão venezuelano.",
            "Time do Estádio Polideportivo de Pueblo Nuevo."
        ]
    },
    {
        word: "Caracas FC",
        category: "Times Sul-Americanos",
        hints: [
            "Clube venezuelano de Caracas, conhecido como 'Los Rojos del Ávila'.",
            "Um dos clubes mais importantes da Venezuela.",
            "Multicampeão venezuelano.",
            "Manda seus jogos no Estádio Olímpico de la UCV."
        ]
    },
        {
            word: "Independiente Santa Fé",
            category: "Times Sul-Americanos",
            hints: [
                "Clube colombiano de Bogotá.",
                "Conhecido como 'Cardenales'.",
                "Manda seus jogos no El Campín.",
                "Já venceu a Copa Sul-Americana."
            ]
        },
        {
            word: "Independiente Del Valle",
            category: "Times Sul-Americanos",
            hints: [
                "Clube equatoriano de Sangolquí.",
                "Conhecido como 'Rayados del Valle'.",
                "Estádio Banco Guayaquil.",
                "Já venceu a Copa Sul-Americana."
            ]
        },
        {
            word: "Godoy Cruz",
            category: "Times Sul-Americanos",
            hints: [
                "Clube Argentino da cidade de Mendoza.",
                "Conhecido como 'Tomba'.",
                "Estádio Malvinas Argentinas.",
                "Já disputou a Copa Libertadores da América."
            ]
        },
        {
            word: "Club Atlético Cerro",
            category: "Times Sul-Americanos",
            hints: [
                "Clube Uruguaio de Montevidéu.",
                "Conhecido como 'Albiceleste de la Villa'.",
                "Estádio Luis Tróccoli.",
                "Clube com mais de 90 anos de história."
            ]
        },
        {
            word: "Union Española",
            category: "Times Sul-Americanos",
            hints: [
                "Clube Chileno de Santiago.",
                "Conhecido como 'Hispano'.",
                "Estádio Santa Laura.",
                "Clube fundado por imigrantes espanhóis."
            ]
        },
        {
            word: "Bolívar",
            category: "Times Sul-Americanos",
            hints: [
                "Clube boliviano conhecido como 'Academia Celeste'.",
                "Time boliviano de La Paz, que manda seus jogos no Hernando Siles.",
                "Rival histórico do The Strongest, protagonizam o 'Clásico Paceño'.",
                "Clube boliviano que revelou Marco Antonio."
	    ]
	},
	{
        word: "Libertad",
        category: "Times Sul-Americanos",
        hints: [
            "Clube paraguaio de Assunção, conhecido como 'Gumarelo'.",
            "Um dos clubes mais ricos e organizados do Paraguai.",
            "Multicampeão paraguaio.",
            "Time do Estádio Dr. Nicolás Léoz."
        ]
    },
    {
        word: "Olimpia",
        category: "Times Sul-Americanos",
        hints: [
            "Clube paraguaio de Assunção, conhecido como 'Decano'.",
            "Maior campeão paraguaio.",
            "Tricampeão da Libertadores da América e campeão mundial.",
            "Time do Estádio Manuel Ferreira (Para Uno)."
        ]
    },
    {
        word: "Guaraní",
        category: "Times Sul-Americanos",
        hints: [
            "Clube paraguaio de Assunção, conhecido como 'Aborigen'.",
            "Um dos clubes mais antigos do Paraguai.",
            "Campeão paraguaio.",
            "Time do Estádio Rogelio Livieres."
        ]
    },
    {
        word: "Cerro Porteño",
        category: "Times Sul-Americanos",
        hints: [
            "Clube paraguaio de Assunção, conhecido como 'Ciclón'.",
            "Um dos clubes mais populares do Paraguai.",
            "Multicampeão paraguaio.",
            "Time do Estádio General Pablo Rojas (La Nueva Olla)."
        ]
    },
    {
        word: "Sporting Cristal",
        category: "Times Sul-Americanos",
        hints: [
            "Clube peruano de Lima, conhecido como 'Celeste'.",
            "Um dos clubes mais importantes do Peru.",
            "Multicampeão peruano e vice-campeão da Libertadores.",
            "Time do Estádio Alberto Gallardo."
        ]
    },
    {
        word: "Universitario",
        category: "Times Sul-Americanos",
        hints: [
            "Clube peruano de Lima, conhecido como 'Crema' ou 'Merengue'.",
            "Um dos clubes mais populares do Peru.",
            "Maior campeão peruano.",
            "Time do Estádio Monumental de Lima."
        ]
    },
    {
        word: "Alianza Lima",
        category: "Times Sul-Americanos",
        hints: [
            "Clube peruano de Lima, conhecido como 'Blanquiazules'.",
            "Um dos clubes mais populares do Peru.",
            "Multicampeão peruano.",
            "Time do Estádio Alejandro Villanueva (Matute)."
        ]
    },
    {
        word: "Defensor Sporting",
        category: "Times Sul-Americanos",
        hints: [
            "Clube uruguaio de Montevidéu, conhecido como 'Tuerto' ou 'Violeta'.",
            "Um dos clubes mais tradicionais do Uruguai.",
            "Vários títulos uruguaios.",
            "Time do Estádio Luis Franzini."
        ]
    },
	{
        word: "Atlético Nacional",
        category: "Times Sul-Americanos",
        hints: [
            "Clube colombiano de Medellín, conhecido como 'Verdolaga'.",
            "Maior campeão da Colômbia.",
            "Tricampeão da Libertadores da América.",
            "Time do Estádio Atanasio Girardot."
        ]
    },
    {
        word: "América de Cali",
        category: "Times Sul-Americanos",
        hints: [
            "Clube colombiano de Cali, conhecido como 'Los Diablos Rojos'.",
            "Um dos clubes mais populares da Colômbia.",
            "Multicampeão colombiano e vice-campeão da Libertadores.",
            "Time do Estádio Olímpico Pascual Guerrero."
        ]
    },
    {
        word: "Deportivo Cali",
        category: "Times Sul-Americanos",
        hints: [
            "Clube colombiano de Cali, conhecido como 'Azucareros'.",
            "Rival histórico do América de Cali no 'Clásico Vallecaucano'.",
            "Eneacampeão colombiano.",
            "Time do Estádio Deportivo Cali."
        ]
    },
    {
        word: "Millonarios",
        category: "Times Sul-Americanos",
        hints: [
            "Clube colombiano de Bogotá, conhecido como 'Embajadores'.",
            "Um dos clubes mais tradicionais e populares da Colômbia.",
            "Quinze vezes campeão colombiano.",
            "Time do Estádio El Campín, em Bogotá."
        ]
    },
    {
        word: "Junior Barranquilla",
        category: "Times Sul-Americanos",
        hints: [
            "Clube colombiano de Barranquilla, conhecido como 'Tiburones'.",
            "Time costeiro da Colômbia, famoso pelo calor de sua torcida.",
            "Tricampeão colombiano.",
            "Time do Estádio Metropolitano Roberto Meléndez."
        ]
    },
    {
        word: "El Nacional",
        category: "Times Sul-Americanos",
        hints: [
            "Clube equatoriano de Quito, conhecido como 'Criollos'.",
            "Time militar equatoriano, com muitos títulos nacionais.",
            "Manda seus jogos no Estádio Olímpico Atahualpa.",
            "Clube que revelou Antonio Valencia."
        ]
    },
    {
        word: "Emelec",
        category: "Times Sul-Americanos",
        hints: [
            "Clube equatoriano de Guayaquil, conhecido como 'Eléctricos' ou 'Millonarios'.",
            "Um dos clubes mais populares do Equador.",
            "Multicampeão equatoriano e vice-campeão da Libertadores.",
            "Time do Estádio George Capwell."
        ]
    },
	{
        word: "Independiente",
        category: "Times Sul-Americanos",
        hints: [
            "Clube argentino de Avellaneda, conhecido como 'Rey de Copas'.",
            "Maior campeão da Libertadores da América.",
            "Rival do Racing no 'Clásico de Avellaneda'.",
            "Time do Estádio Libertadores de América - Ricardo Enrique Bochini."
        ]
    },
    {
        word: "San Lorenzo",
        category: "Times Sul-Americanos",
        hints: [
            "Clube argentino de Buenos Aires, conhecido como 'Ciclón' ou 'Cuervos'.",
            "Time de Boedo, famoso por sua torcida apaixonada.",
            "Campeão da Libertadores e do Campeonato Argentino.",
            "Time do Estádio Pedro Bidegain (Nuevo Gasómetro)."
        ]
    },
    {
        word: "Vélez Sarsfield",
        category: "Times Sul-Americanos",
        hints: [
            "Clube argentino de Buenos Aires, conhecido como 'El Fortín'.",
            "Time de Liniers, famoso por suas divisões de base.",
            "Campeão da Libertadores e do Mundial Interclubes.",
            "Time do Estádio José Amalfitani."
        ]
    },
    {
        word: "Estudiantes de La Plata",
        category: "Times Sul-Americanos",
        hints: [
            "Clube argentino de La Plata, conhecido como 'Pincha' ou 'El León'.",
            "Time famoso por sua mística copeira e 'La Tercera que Mata'.",
            "Tetracampeão da Libertadores e campeão mundial.",
            "Time do Estádio Jorge Luis Hirschi (UNO)."
        ]
    },
    {
        word: "Rosário Central",
        category: "Times Sul-Americanos",
        hints: [
            "Clube argentino de Rosário, conhecido como 'Canallas'.",
            "Rival histórico do Newell's Old Boys no 'Clásico Rosarino'.",
            "Campeão da Copa Conmebol e do Campeonato Argentino.",
            "Time do Estádio Gigante de Arroyito."
        ]
    },
    {
        word: "Arsenal Sarandi",
        category: "Times Sul-Americanos",
        hints: [
            "Clube argentino de Sarandí, região metropolitana de Buenos Aires.",
            "Conhecido como 'El Arse'.",
            "Campeão da Copa Sul-Americana e Copa Argentina.",
            "Manda seus jogos no Estádio Julio Humberto Grondona."
        ]
    },
    {
        word: "Banfield",
        category: "Times Sul-Americanos",
        hints: [
            "Clube argentino da cidade de Banfield, região metropolitana de Buenos Aires.",
            "Conhecido como 'El Taladro'.",
            "Campeão argentino.",
            "Manda seus jogos no Estádio Florencio Sola."
        ]
    },
    {
        word: "Lanús",
        category: "Times Sul-Americanos",
        hints: [
            "Clube argentino da cidade de Lanús, região metropolitana de Buenos Aires.",
            "Conhecido como 'Granate'.",
            "Campeão da Copa Sul-Americana.",
            "Manda seus jogos no Estádio Ciudad de Lanús - Néstor Díaz Pérez."
        ]
    },
    {
        word: "Jorge Wilstermann",
        category: "Times Sul-Americanos",
        hints: [
            "Clube boliviano de Cochabamba, conhecido como 'Aviador'.",
            "Um dos clubes mais populares da Bolívia.",
            "Manda seus jogos no Estádio Félix Capriles.",
            "Já chegou às semifinais da Copa Libertadores."
        ]
    },
	 {
        word: "Blooming",
        category: "Times Sul-Americanos",
        hints: [
            "Clube boliviano de Santa Cruz de la Sierra.",
            "É conhecido como 'Academia' ou 'Celeste'.",
            "Manda seus jogos no Estádio Ramón Tahuichi Aguilera.",
            "Rival do Oriente Petrolero no 'Clásico Cruceño'."
        ]
    },
    {
        word: "Oriente Petrolero",
        category: "Times Sul-Americanos",
        hints: [
            "Clube boliviano de Santa Cruz de la Sierra.",
            "É conhecido como 'Refinero' ou 'Albiverde'.",
            "Manda seus jogos no Estádio Ramón Tahuichi Aguilera.",
            "Rival do Blooming no 'Clásico Cruceño'."
        ]
    },
    {
        word: "Cobreloa",
        category: "Times Sul-Americanos",
        hints: [
            "Clube chileno de Calama, no deserto do Atacama.",
            "É conhecido como 'Mineros' ou 'Zorros del Desierto'.",
            "Manda seus jogos no Estádio Zorros del Desierto.",
            "Oito vezes campeão chileno."
        ]
    },
    {
        word: "Cobresal",
        category: "Times Sul-Americanos",
        hints: [
            "Clube chileno da cidade mineira de El Salvador.",
            "É conhecido como 'Mineros' ou 'Legionarios'.",
            "Manda seus jogos no Estádio El Cobre, no meio do deserto.",
            "Campeão chileno."
        ]
    },
	 {
        word: "Universidad Católica",
        category: "Times Sul-Americanos",
        hints: [
            "Clube chileno conhecido como 'La Franja' ou 'Los Cruzados'.",
            "Time universitário, fundado por estudantes da Pontificia Universidad Católica de Chile.",
            "Manda seus jogos no Estádio San Carlos de Apoquindo.",
            "Já disputou finais da Copa Libertadores da América."
        ]
    },

	// Estádios Brasileiros

	{
    	   word: "Estádio Olímpico Monumental",
           category: "Estádios Brasileiros",
           hints: [
        	"Palco de grandes conquistas gremistas, incluindo uma Libertadores e um Mundial.",
        	"Apelidado de 'Monumental' e localizado no bairro Azenha, em Porto Alegre.",
		"Estádio antigo do Grêmio",
		"'Venho do bairro da Azenha, bairro do.....'"
    		]
	},
	{
   	 word: "Estádio dos Eucaliptos",
   	 category: "Estádios Brasileiros",
   	 hints: [
       		 "Primeiro estádio do Internacional, palco dos primeiros títulos colorados.",
        	"Localizado no bairro Menino Deus, em Porto Alegre, vizinho ao Gigante da Beira-Rio.",
        	"Seu nome peculiar se deve à presença de árvores no entorno do campo.",
		"Antigo estádio do Colorado."
    		]
	},
	{
            word: "Maracanã",
            category: "Estádios Brasileiros",
            hints: [
                "Estádio icônico do Rio de Janeiro, palco de finais de Copa do Mundo.",
                "Maior estádio do Brasil, já foi o maior do mundo.",
                "Oficialmente Estádio Jornalista Mário Filho.",
                "Casa de Flamengo e Fluminense, palco de muitos clássicos."
            ]
        },
        {
            word: "Mineirão",
            category: "Estádios Brasileiros",
            hints: [
                "Estádio gigante de Belo Horizonte, palco de jogos históricos.",
                "Segundo maior estádio do Brasil, conhecido como 'Gigante da Pampulha'.",
                "Oficialmente Estádio Governador Magalhães Pinto.",
                "Casa de Cruzeiro e Atlético Mineiro, palco de muitos clássicos mineiros."
            ]
        },
        {
            word: "Morumbi",
            category: "Estádios Brasileiros",
            hints: [
                "Estádio imponente de São Paulo, casa do São Paulo FC.",
                "Terceiro maior estádio do Brasil, com arquitetura marcante.",
                "Oficialmente Estádio Cícero Pompeu de Toledo.",
                "Palco de grandes jogos do São Paulo e da Seleção Brasileira."
            ]
        },
        {
            word: "Arena Corinthians",
            category: "Estádios Brasileiros",
            hints: [
                "Estádio moderno de São Paulo, construído para a Copa do Mundo de 2014.",
                "Casa do Corinthians, conhecido como 'Itaquerão' ou 'Neo Química Arena'.",
                "Palco da abertura da Copa do Mundo de 2014.",
                "Estádio com design moderno e tecnologia de ponta."
            ]
        },
        {
            word: "Allianz Parque",
            category: "Estádios Brasileiros",
            hints: [
                "Estádio moderno de São Paulo, casa do Palmeiras.",
                "Conhecido como 'Palestra Itália' ou 'Arena Palmeiras'.",
                "Estádio multiuso, palco de shows e eventos.",
                "Estádio com gramado sintético e design moderno."
            ]
        },
        {
            word: "Beira Rio",
            category: "Estádios Brasileiros",
            hints: [
                "Estádio charmoso de Porto Alegre, casa do Internacional.",
                "Oficialmente Estádio José Pinheiro Borda.",
                "Conhecido como 'Gigante da Beira-Rio', com vista para o Guaíba.",
                "Palco de jogos históricos do Internacional e da Seleção Brasileira."
            ]
        },
        {
            word: "Arena do Grêmio",
            category: "Estádios Brasileiros",
            hints: [
                "Estádio moderno de Porto Alegre, casa do Grêmio.",
                "Conhecido como 'Novo Olímpico', substituiu o antigo estádio.",
                "Estádio com design moderno e tecnologia de ponta.",
                "Palco de grandes jogos do Grêmio e da Seleção Brasileira."
            ]
        },
        {
            word: "Fonte Nova",
            category: "Estádios Brasileiros",
            hints: [
                "Estádio histórico de Salvador, palco de grandes jogos do Bahia e Vitória.",
                "Oficialmente Complexo Esportivo Cultural Professor Octávio Mangabeira.",
                "Conhecido como 'Itaipava Arena Fonte Nova', reconstruído para a Copa de 2014.",
                "Palco de jogos da Copa das Confederações de 2013 e Copa do Mundo de 2014."
            ]
        },
        {
            word: "Castelão",
            category: "Estádios Brasileiros",
            hints: [
                "Estádio gigante de Fortaleza, casa de Ceará e Fortaleza.",
                "Oficialmente Estádio Governador Plácido Castelo.",
                "Conhecido como 'Arena Castelão', um dos maiores do Nordeste.",
                "Palco de jogos da Copa das Confederações de 2013 e Copa do Mundo de 2014."
            ]
        },
        {
            word: "Mineirão",
            category: "Estádios Brasileiros",
            hints: [
                "Estádio icônico de Belo Horizonte, palco de grandes jogos do Cruzeiro e Atlético.",
                "Conhecido como 'Gigante da Pampulha', um dos maiores do Brasil.",
                "Palco da semifinal da Copa do Mundo de 2014: Brasil x Alemanha.",
                "Estádio histórico com capacidade para mais de 60 mil pessoas."
            ]
        },
        {
            word: "Arena da Baixada",
            category: "Estádios Brasileiros",
            hints: [
                "Estádio moderno de Curitiba, casa do Athletico Paranaense.",
                "Oficialmente Estádio Joaquim Américo Guimarães.",
                "Primeiro estádio da América Latina com teto retrátil.",
                "Conhecido pela atmosfera intimista e pressão da torcida."
            ]
        },
        {
            word: "Mané Garrincha",
            category: "Estádios Brasileiros",
            hints: [
                "Estádio nacional de Brasília, um dos maiores do Brasil.",
                "Oficialmente Estádio Nacional de Brasília Mané Garrincha.",
                "Reconstruído para a Copa do Mundo de 2014, com design moderno.",
                "Palco de jogos da Copa das Confederações de 2013 e Copa do Mundo de 2014."
            ]
        },
        {
            word: "Engenhão",
            category: "Estádios Brasileiros",
            hints: [
                "Estádio olímpico do Rio de Janeiro, usado em grandes eventos.",
                "Oficialmente Estádio Olímpico Nilton Santos.",
                "Casa do Botafogo, conhecido como 'Niltão'.",
                "Palco das competições de atletismo dos Jogos Olímpicos Rio 2016."
            ]
        },
        {
            word: "Vila Belmiro",
            category: "Estádios Brasileiros",
            hints: [
                "Estádio histórico de Santos, casa do Santos FC.",
                "Oficialmente Estádio Urbano Caldeira.",
                "Conhecido como 'Alçapão da Vila', pequeno e intimista.",
                "Palco de grandes jogos de Pelé e Neymar."
            ]
        },
	{
    word: "Estádio do Vale",
    category: "Estádios Brasileiros",
    hints: [
        "Estádio do Esporte Clube Novo Hamburgo (RS).",
        "Localizado em Novo Hamburgo, Rio Grande do Sul.",
        "Conhecido como Estádio do Vale.",
        "Foi inaugurado em 2008."
    ]
},
{
    word: "Passo d'Areia",
    category: "Estádios Brasileiros",
    hints: [
        "Estádio do São José de Porto Alegre (RS).",
        "Localizado em Porto Alegre, Rio Grande do Sul.",
        "Também conhecido como Estádio do Zequinha.",
        "Possui gramado sintético."
    ]
},
{
    word: "Centenário",
    category: "Estádios Brasileiros",
    hints: [
        "Estádio do SER Caxias (RS).",
        "Localizado em Caxias do Sul, Rio Grande do Sul.",
        "Inaugurado em 1976.",
        "Palco do clássico Ca-Ju."
    ]
},
{
    word: "Alfredo Jaconi",
    category: "Estádios Brasileiros",
    hints: [
        "Estádio do Juventude (RS).",
        "Localizado em Caxias do Sul, Rio Grande do Sul.",
        "Inaugurado em 1975.",
        "Palco do clássico Ca-Ju."
    ]
},
{
    word: "Bento Freitas",
    category: "Estádios Brasileiros",
    hints: [
        "Estádio do Brasil de Pelotas (RS).",
        "Localizado em Pelotas, Rio Grande do Sul.",
        "Conhecido como Baixada.",
        "Um dos estádios mais antigos do Brasil."
    ]
},
{
    word: "Boca do Lobo",
    category: "Estádios Brasileiros",
    hints: [
        "Estádio do Pelotas (RS).",
        "Localizado em Pelotas, Rio Grande do Sul.",
        "Um dos estádios mais antigos do Brasil, fundado em 1908.",
        "Conhecido por sua atmosfera fervorosa."
    ]
},
{
    word: "Antônio David Farina",
    category: "Estádios Brasileiros",
    hints: [
        "Estádio do Veranópolis (RS).",
        "Localizado em Veranópolis, Rio Grande do Sul.",
        "Conhecido como Estádio da Palugana.",
        "Casa do VEC."
    ]
},
{
    word: "Colosso da Lagoa",
    category: "Estádios Brasileiros",
    hints: [
        "Estádio do Ypiranga de Erechim (RS).",
        "Localizado em Erechim, Rio Grande do Sul.",
        "Um dos maiores estádios do interior do RS.",
        "Inaugurado em 1970."
    ]
},
{
    word: "Cristo Rei",
    category: "Estádios Brasileiros",
    hints: [
        "Estádio do Aimoré (RS).",
        "Localizado em São Leopoldo, Rio Grande do Sul.",
        "Conhecido como Monumental do Cristo Rei.",
        "Inaugurado em 1961."
    ]
},
{
  word: "Estrela d'Alva",
  category: "Estádios Brasileiros",
  hints: [
      "Estádio do Guarany de Bagé (RS).",
      "Localizado em Bagé, Rio Grande do Sul.",
      "Nome oficial: Estádio Antônio Magalhães Rossell.",
      "Um dos estádios mais tradicionais do interior gaúcho."
  ]
},
{
    word: "Canindé",
    category: "Estádios Brasileiros",
    hints: [
        "Estádio da Portuguesa de Desportos (SP).",
        "Localizado em São Paulo, capital.",
        "Nome oficial: Estádio Dr. Oswaldo Teixeira Duarte.",
        "Tradicional estádio paulistano."
    ]
},
{
    word: "Rei Pelé",
    category: "Estádios Brasileiros",
    hints: [
        "Estádio de Maceió (AL).",
        "Casa do CRB e do CSA.",
        "Conhecido como Trapichão.",
        "Homenagem ao maior jogador de futebol de todos os tempos."
    ]
},
{
    word: "Arena Condá",
    category: "Estádios Brasileiros",
    hints: [
        "Estádio da Chapecoense (SC).",
        "Localizado em Chapecó, Santa Catarina.",
        "Importante centro de homenagens após o acidente de 2016.",
        "Reinaugurada em 2009."
    ]
},
{
    word: "Arena Amazônia",
    category: "Estádios Brasileiros",
    hints: [
    "Estádio da Copa do Mundo de 2014",
    "Localizado em Manaus",
    "Construído para a Copa, tem arquitetura inspirada na floresta.",
    "Atualmente, sedia jogos de times locais e eventos."
     ]
},

{
    word: "Arruda",
    category: "Estádios Brasileiros",
    hints: [
        "Estádio do Santa Cruz (PE).",
        "Localizado em Recife, Pernambuco.",
        "Nome oficial: Estádio José do Rego Maciel.",
        "Um dos maiores estádios do Nordeste."
    ]
},
{
    word: "Mangueirão",
    category: "Estádios Brasileiros",
    hints: [
        "Estádio de Belém (PA).",
        "Nome oficial: Estádio Estadual Jornalista Edgar Augusto Proença.",
        "Casa do Paysandu, Remo e outros clubes paraenses.",
        "Um dos maiores estádios do Norte do Brasil."
    ]
},
{
    word: "Estádio dos Aflitos",
    category: "Estádios Brasileiros",
    hints: [
        "Estádio do Náutico (PE).",
        "Localizado em Recife, Pernambuco.",
        "Nome oficial: Estádio Eládio de Barros Carvalho.",
        "Tradicional estádio pernambucano, conhecido pela pressão da torcida."
    ]
},
{
    word: "Nabi Abi Chedid",
    category: "Estádios Brasileiros",
    hints: [
        "Estádio do Red Bull Bragantino (SP).",
        "Localizado em Bragança Paulista, São Paulo.",
        "Conhecido como 'Nabizão'.",
        "Passou por reformas após a parceria com a Red Bull."
    ]
},
{
    word: "Brinco de Ouro",
    category: "Estádios Brasileiros",
    hints: [
        "Estádio do Guarani (SP).",
        "Localizado em Campinas, São Paulo.",
        "Nome oficial: Estádio Brinco de Ouro da Princesa.",
        "Um dos estádios mais tradicionais do interior paulista."
    ]
},
{
    word: "Orlando Scarpelli",
    category: "Estádios Brasileiros",
    hints: [
        "Estádio do Figueirense (SC).",
        "Localizado em Florianópolis, Santa Catarina.",
        "Inaugurado em 1960.",
        "Um dos principais estádios de Santa Catarina."
    ]
},
{
    word: "Moisés Lucarelli",
    category: "Estádios Brasileiros",
    hints: [
        "Estádio da Ponte Preta (SP).",
        "Localizado em Campinas, São Paulo.",
        "Conhecido como 'Majestoso'.",
        "Um dos estádios mais tradicionais do interior paulista."
    ]
},
{
    word: "Heriberto Hulse",
    category: "Estádios Brasileiros",
    hints: [
      "Estádio do Criciúma (SC).",
      "Localizado em Criciúma (SC).",
      "Conhecido como Majestoso.",
      "Inaugurado em 1955."
    ]
},
{
    word: "Serra Dourada",
    category: "Estádios Brasileiros",
    hints: [
        "Estádio icônico de Goiânia, palco de grandes clássicos goianos.",
        "Oficialmente Estádio Governador Magalhães Pinto, mas conhecido como Serra Dourada.",
        "Casa do futebol goiano, palco de jogos memoráveis de Goiás e Vila Nova.",
        "Estádio projetado pelo renomado arquiteto Paulo Mendes da Rocha."
    ]
},

	// Times do Resto do Mundo

	{
            word: "América do México",
            category: "Times do Resto do Mundo",
            hints: [
                "Clube mexicano conhecido como 'Las Águilas'.",
                "Um dos clubes mais populares e vitoriosos do México.",
                "Manda seus jogos no Estádio Azteca.",
                "Rival histórico do Chivas Guadalajara no 'Clásico Nacional'."
            ]
        },
        {
            word: "Al-Ahly",
            category: "Times do Resto do Mundo",
            hints: [
                "Clube egípcio do Cairo, conhecido como 'O Clube do Século Africano'.",
                "Um dos clubes mais bem-sucedidos da África e do mundo árabe.",
                "Maior campeão da Liga dos Campeões da CAF.",
                "Manda seus jogos no Estádio Internacional do Cairo."
            ]
        },
        {
            word: "Kaizer Chiefs",
            category: "Times do Resto do Mundo",
            hints: [
                "Clube sul-africano de Joanesburgo, conhecido como 'Amakhosi'.",
                "Um dos clubes mais populares da África do Sul.",
                "Rival do Orlando Pirates no 'Soweto Derby'.",
                "Manda seus jogos no FNB Stadium (Soccer City)."
            ]
        },
        {
            word: "Orlando Pirates",
            category: "Times do Resto do Mundo",
            hints: [
                "Clube sul-africano de Joanesburgo, conhecido como 'The Buccaneers'.",
                "Rival do Kaizer Chiefs no 'Soweto Derby'.",
                "Já conquistou a Liga dos Campeões da CAF.",
                "Manda seus jogos no Orlando Stadium."
            ]
        },
        {
            word: "Jeonbuk Hyundai Motors",
            category: "Times do Resto do Mundo",
            hints: [
                "Clube sul-coreano da cidade de Jeonju.",
                "Apelidado de 'Green Warriors'.",
                "Maior campeão da K-League e tetracampeão da Liga dos Campeões da AFC.",
                "Manda seus jogos no Jeonju World Cup Stadium."
            ]
        },
        {
            word: "Urawa Red Diamonds",
            category: "Times do Resto do Mundo",
            hints: [
                "Clube japonês da cidade de Saitama, conhecido como 'Reds'.",
                "Um dos clubes mais populares da J-League.",
                "Já venceu a Liga dos Campeões da AFC.",
                "Manda seus jogos no Saitama Stadium 2002."
            ]
        },
        {
            word: "Chivas Guadalajara",
            category: "Times do Resto do Mundo",
            hints: [
                "Clube mexicano conhecido como 'Chivas'.",
                "Um dos clubes mais populares do México, só joga com mexicanos.",
                "Rival do América no 'Clásico Nacional'.",
                "Manda seus jogos no Estádio Akron."
            ]
        },
        {
            word: "Al-Ittihad",
            category: "Times do Resto do Mundo",
            hints: [
                "Clube saudita conhecido como 'Tigers'.",
                "Time de Jeddah, com grande torcida na Arábia Saudita.",
                "Já contratou estrelas como Benzema e Kanté.",
                "Manda seus jogos no Estádio King Abdullah Sports City."
            ]
        },
        {
            word: "Al-Nassr",
            category: "Times do Resto do Mundo",
            hints: [
                "Clube saudita conhecido como 'Al-Alami' (O Mundial).",
                "Time de Riad, que contratou Cristiano Ronaldo.",
                "Rival do Al-Hilal no 'Clássico da Arábia Saudita'.",
                "Manda seus jogos no Estádio Mrsool Park."
            ]
        },
        {
            word: "Al-Hilal",
            category: "Times do Resto do Mundo",
            hints: [
                "Clube saudita conhecido como 'Al-Zaeem' (O Chefe).",
                "Time de Riad, o maior campeão da Arábia Saudita.",
                "Rival do Al-Nassr no 'Clássico da Arábia Saudita'.",
                "Manda seus jogos no Estádio Internacional Rei Fahd."
            ]
        },
        {
            word: "Sydney FC",
            category: "Times do Resto do Mundo",
            hints: [
                "Clube australiano conhecido como 'The Sky Blues'.",
                "Time de Sydney, um dos mais populares da Austrália.",
                "Manda seus jogos no Sydney Football Stadium.",
                "Já venceu a Liga dos Campeões da OFC."
            ]
        },
        {
            word: "Melbourne Victory",
            category: "Times do Resto do Mundo",
            hints: [
                "Clube australiano conhecido como 'Victory'.",
                "Time de Melbourne, um dos mais vitoriosos da Austrália.",
                "Rival do Melbourne City no 'Melbourne Derby'.",
                "Manda seus jogos no Estádio AAMI Park."
            ]
        },
        {
            word: "Kashima Antlers",
            category: "Times do Resto do Mundo",
            hints: [
                "Clube japonês conhecido como 'Antlers'.",
                "Time de Kashima, um dos mais tradicionais do Japão.",
                "Já disputou a final do Mundial de Clubes da FIFA.",
                "Manda seus jogos no Estádio Kashima Soccer Stadium."
            ]
        },
        {
            word: "Espérance de Tunis",
            category: "Times do Resto do Mundo",
            hints: [
                "Clube tunisiano conhecido como 'Sang et Or' (Sangue e Ouro).",
                "Um dos clubes mais populares e bem-sucedidos da Tunísia e da África.",
                "Tetracampeão da Liga dos Campeões da CAF.",
                "Manda seus jogos no Estádio Olímpico de Radès."
            ]
        },
        {
            word: "Mamelodi Sundowns",
            category: "Times do Resto do Mundo",
            hints: [
                "Clube sul-africano conhecido como 'The Brazilians'.",
                "Time de Pretoria, com cores inspiradas na seleção brasileira.",
                "Já venceu a Liga dos Campeões da CAF.",
                "Manda seus jogos no Loftus Versfeld Stadium."
            ]
        },
        {
            word: "Zamalek",
            category: "Times do Resto do Mundo",
            hints: [
                "Clube egípcio do Cairo, conhecido como 'Os Cavaleiros Brancos'.",
                "Um dos clubes mais populares e vitoriosos do Egito e da África.",
                "Pentacampeão da Liga dos Campeões da CAF.",
                "Manda seus jogos no Estádio Internacional do Cairo."
            ]
        },
        {
            word: "Raja Casablanca",
            category: "Times do Resto do Mundo",
            hints: [
                "Clube marroquino de Casablanca, conhecido como 'Os Verdes'.",
                "Um dos clubes mais populares e bem-sucedidos de Marrocos e da África.",
                "Tricampeão da Liga dos Campeões da CAF.",
                "Manda seus jogos no Complexo Esportivo Mohammed V."
            ]
        },
        {
            word: "Wydad Casablanca",
            category: "Times do Resto do Mundo",
            hints: [
                "Clube marroquino de Casablanca, conhecido como 'Os Vermelhos'.",
                "Rival do Raja Casablanca no 'Clássico de Casablanca'.",
                "Tricampeão da Liga dos Campeões da CAF.",
                "Manda seus jogos no Complexo Esportivo Mohammed V (compartilhado com o Raja)."
            ]
        },
	{
            word: "Maccabi Haifa",
            category: "Times do Resto do Mundo",
            hints: [
                "Clube israelense da cidade de Haifa.",
                "Um dos clubes mais populares e bem-sucedidos de Israel.",
                "Apelidado de 'The Greens' (Os Verdes).",
                "Manda seus jogos no Estádio Sammy Ofer."
            ]
        },
        {
            word: "Shanghai Port FC",
            category: "Times do Resto do Mundo",
            hints: [
                "Clube chinês da cidade de Xangai.",
                "Um dos clubes mais ricos e populares da China.",
                "Anteriormente conhecido como Shanghai SIPG.",
                "Manda seus jogos no Shanghai Stadium."
            ]
        },
        {
            word: "Beijing Guoan FC",
            category: "Times do Resto do Mundo",
            hints: [
                "Clube chinês da cidade de Pequim.",
                "Um dos clubes mais tradicionais e populares da China.",
                "Rival do Shanghai Shenhua no 'Clássico Chinês'.",
                "Manda seus jogos no Workers Stadium."
            ]
        },
        {
            word: "Kashiwa Reysol",
            category: "Times do Resto do Mundo",
            hints: [
                "Clube japonês da cidade de Kashiwa.",
                "Conhecido por suas cores amarelo e preto.",
                "Já conquistou a J-League e a Copa do Imperador.",
                "Manda seus jogos no Sankyo Frontier Kashiwa Stadium."
            ]
        },
        {
            word: "Gamba Osaka",
            category: "Times do Resto do Mundo",
            hints: [
                "Clube japonês da cidade de Osaka.",
                "Um dos clubes mais tradicionais e populares do Japão.",
                "Já venceu a Liga dos Campeões da AFC.",
                "Manda seus jogos no Panasonic Stadium Suita."
            ]
        },
        {
            word: "Vissel Kobe",
            category: "Times do Resto do Mundo",
            hints: [
                "Clube japonês da cidade de Kobe.",
                "Ficou famoso mundialmente ao contratar Andrés Iniesta.",
                "Já conquistou a Copa do Imperador e a Supercopa do Japão.",
                "Manda seus jogos no Noevir Stadium Kobe."
            ]
        },
        {
            word: "Kawasaki Frontale",
            category: "Times do Resto do Mundo",
            hints: [
                "Clube japonês da cidade de Kawasaki.",
                "Um dos clubes mais bem-sucedidos da J-League nos últimos anos.",
                "Conhecido por seu estilo de jogo ofensivo e envolvente.",
                "Manda seus jogos no Kawasaki Todoroki Stadium."
            ]
        },
        {
            word: "Yokohama F Marinos",
            category: "Times do Resto do Mundo",
            hints: [
                "Clube japonês da cidade de Yokohama.",
                "Um dos clubes mais antigos do futebol japonês.",
                "Já conquistou a J-League e a Copa do Imperador.",
                "Manda seus jogos no Nissan Stadium, o maior do Japão."
            ]
        },
	
	// Estádios
	  {
            word: "Estádio Azteca",
            category: "Estádios",
            hints: [
                "Estádio colossal da Cidade do México, palco de duas finais de Copa.",
                "Palco de duas finais da Copa do Mundo, único no mundo.",
                "Localizado na Cidade do México, metrópole vibrante.",
                "Estádio gigante e histórico, testemunha de lendas."
            ]
        },
	{
    word: "Mercedes-Benz Stadium",
    category: "Estádios",
    hints: [
        "Estádio multiuso em Atlanta, Georgia, EUA.",
        "Casa do Atlanta Falcons (NFL) e Atlanta United FC (MLS).",
        "Estádio moderno com teto retrátil.",
        "Palco do Super Bowl LIII e da final da Copa do Mundo FIFA de 2026."
    ]
},
{
    word: "Sapporo Dome",
    category: "Estádios",
    hints: [
        "Estádio multiuso em Sapporo, Hokkaido, Japão.",
        "Casa do Hokkaido Consadole Sapporo (J-League) e Hokkaido Nippon-Ham Fighters (Beisebol).",
        "Estádio com teto retrátil e campo que desliza para dentro e fora.",
        "Palco de jogos da Copa do Mundo FIFA de 2002 e Olimpíadas de Inverno de 1972."
    ]
},
{
    word: "Estádio Rungrado Primeiro de Maio",
    category: "Estádios",
    hints: [
        "Estádio gigante em Pyongyang, Coreia do Norte.",
        "Maior estádio do mundo em capacidade.",
        "Usado para eventos massivos e celebrações na Coreia do Norte.",
        "Famoso por suas proporções monumentais e arquitetura única."
    ]
},
{
    word: "Beijing National Stadium",
    category: "Estádios",
    hints: [
        "Estádio icônico de Pequim, China.",
        "Conhecido como 'Ninho de Pássaro' devido ao seu design.",
        "Principal estádio dos Jogos Olímpicos de Verão de 2008.",
        "Símbolo arquitetônico moderno de Pequim."
    ]
},
{
    word: "International Stadium Yokohama",
    category: "Estádios",
    hints: [
        "Estádio em Yokohama, Japão.",
        "Palco da final da Copa do Mundo FIFA de 2002.",
        "Casa do Yokohama F. Marinos (J-League).",
        "Estádio moderno e multiuso."
    ]
},
{
    word: "Saitama Stadium",
    category: "Estádios",
    hints: [
        "Estádio em Saitama, Japão.",
        "Palco de semifinais da Copa do Mundo FIFA de 2002.",
        "Um dos maiores estádios de futebol do Japão.",
        "Casa do Urawa Red Diamonds (J-League)."
    ]
},
{
    word: "Japan National Stadium",
    category: "Estádios",
    hints: [
        "Estádio nacional do Japão, localizado em Tóquio.",
        "Principal estádio dos Jogos Olímpicos de Verão de 2020 (realizados em 2021).",
        "Substituto do antigo Estádio Nacional Kasumigaoka.",
        "Design moderno e multifuncional."
    ]
},
{
    word: "King Fahd International Stadium",
    category: "Estádios",
    hints: [
        "Estádio em Riad, Arábia Saudita.",
        "Conhecido como 'Pérola do Estádio' por seu design.",
        "Um dos maiores estádios do Oriente Médio.",
        "Palco de grandes eventos esportivos e culturais na Arábia Saudita."
    ]
}
];

const maxRounds = 250;
let deuBoasVindas = false;
let palavrasUsadasText = [];

let jogo = {
	numAcertos: 0,
	numErros: 0,
	numRound: 1,
	numAcertosPrimeira: 0,
	scoreGlobal: 0,
	scoreUltimaRodada: 0
};

let pontos = {
	acertoPrimeira: 500,
	acertoSimples: 100,
	morte: -1000
};

let rodada = {
	scoreBonusDifcAtual: 0,
        scoreBonusEfcAtual: 0,
        scorePenalidadeErroAtual: 0,
	scoreRodadaAtual: 0
};

// ---- Função que desenha forca na página
function desenharForca(ctx, tentativasRestantes, larguraCanvas, alturaCanvas, roundAcabou) {
    ctx.clearRect(0, 0, larguraCanvas, alturaCanvas); // Limpa o canvas a cada frame
    console.log("desenharForca(), alturaCanvas: ", alturaCanvas, " lineWidth: ", ctx.lineWidth, " ctx.fillStyle: ", ctx.fillStyle);

    // --- Base da forca (efeito 3D) ---
    ctx.fillStyle = '#8B4513'; // Cor marrom para a madeira
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(20, alturaCanvas - 20);          // Ponto inicial (inferior esquerdo)
    ctx.lineTo(120, alturaCanvas - 20);        // Linha horizontal inferior
    ctx.lineTo(100, alturaCanvas - 30);       // Linha em perspectiva para trás (direita)
    ctx.lineTo(40, alturaCanvas - 30);         // Linha em perspectiva para trás (esquerda)
    ctx.lineTo(20, alturaCanvas - 20);        // fecha o loop
    ctx.fill(); // Preenche a base com a cor marrom
    ctx.stroke(); // Contorno preto

    // --- Mastro vertical (com textura de madeira) ---
    const gradienteMadeira = ctx.createLinearGradient(55, 0, 65, 0); // Gradiente horizontal
    gradienteMadeira.addColorStop(0, '#8B4513');   // Marrom escuro (início)
    gradienteMadeira.addColorStop(0.5, '#A0522D'); // Marrom médio (meio)
    gradienteMadeira.addColorStop(1, '#8B4513');   // Marrom escuro (fim)

    ctx.fillStyle = gradienteMadeira; // Define o gradiente como cor de preenchimento
    ctx.fillRect(55, 20, 10, alturaCanvas - 40); // Desenha o mastro vertical como um retângulo preenchido

    // Textura da madeira (linhas finas)
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#654321';// Cor marrom mais escuro para as linhas
    for (let y = 30; y < alturaCanvas - 20; y += 5) { // Linhas verticais espaçadas
        ctx.beginPath();
        ctx.moveTo(55, y);
        ctx.lineTo(65, y);
        ctx.stroke();
    }
  
    // --- Mastro horizontal (com detalhe no final) ---
    ctx.lineWidth = 10; // Restaurar espessura da linha para o mastro
    ctx.strokeStyle = '#654321'; // Cor preta para o mastro
    ctx.beginPath();
    ctx.moveTo(60, 20);
    ctx.lineTo(larguraCanvas / 2, 20);
    ctx.lineTo(larguraCanvas / 2, 30);   // Parte pequena para baixo
    ctx.stroke();

    // --- Corda (mais grossa) ---
    ctx.lineWidth = 3; // Espessura da corda
    ctx.strokeStyle = '#663300'; // Cor marrom escura para a corda
    ctx.beginPath();
    ctx.moveTo(larguraCanvas / 2, 30);
    ctx.lineTo(larguraCanvas / 2, 60);
    ctx.stroke();
    ctx.lineWidth = 10; //volta ao normal
    ctx.strokeStyle = 'black';

    

    // Desenhar o boneco palito baseado em tentativasRestantes
    
        if (tentativasRestantes < 6) { // Cabeça
            ctx.beginPath();
            ctx.arc(larguraCanvas / 2, 80, 20, 0, Math.PI * 2);
            ctx.stroke();
        }
        if (tentativasRestantes < 5) { // Corpo
            ctx.beginPath();
            ctx.moveTo(larguraCanvas / 2, 100);
            ctx.lineTo(larguraCanvas / 2, 180);
            ctx.stroke();
        }
        if (tentativasRestantes < 4) { // Braço direito
            ctx.beginPath();
            ctx.moveTo(larguraCanvas / 2, 120);
            ctx.lineTo(larguraCanvas / 2 + 40, 150);
            ctx.stroke();
        }
        if (tentativasRestantes < 3) { // Braço esquerdo
            ctx.beginPath();
            ctx.moveTo(larguraCanvas / 2, 120);
            ctx.lineTo(larguraCanvas / 2 - 40, 150);
            ctx.stroke();
        }
        if (tentativasRestantes < 2) { // Perna direita
            ctx.beginPath();
            ctx.moveTo(larguraCanvas / 2, 180);
            ctx.lineTo(larguraCanvas / 2 + 40, 230);
            ctx.stroke();
        }
        if (tentativasRestantes === 0) { // Perna esquerda
            ctx.lineWidth = 10;
            // Perna esquerda
            ctx.beginPath();
            ctx.moveTo(larguraCanvas / 2, 180);
            ctx.lineTo(larguraCanvas / 2 - 40, 230);
            ctx.stroke();

            // Cabeça (modificada para derrota
            ctx.beginPath();
            ctx.arc(larguraCanvas / 2, 80, 20, 0, Math.PI * 2); // Circulo da cabeça
            ctx.stroke();
            // Olhos em 'X'
            ctx.lineWidth = 3; // Aumenta espessura para os olhos
            ctx.beginPath();
            ctx.moveTo(larguraCanvas / 2 - 9, 70); //Olho esquerdo
            ctx.lineTo(larguraCanvas / 2 - 3, 80);
            ctx.moveTo(larguraCanvas / 2 - 3, 70);
            ctx.lineTo(larguraCanvas / 2 - 9, 80);
            ctx.moveTo(larguraCanvas / 2 + 3, 70); // Olho direito
            ctx.lineTo(larguraCanvas / 2 + 9, 80);
            ctx.moveTo(larguraCanvas / 2 + 9, 70);
            ctx.lineTo(larguraCanvas / 2 + 3, 80);
            ctx.stroke();

            ctx.lineWidth = 10;

            ctx.beginPath();
            ctx.moveTo(larguraCanvas / 2, 100);
            ctx.lineTo(larguraCanvas / 2, 180);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(larguraCanvas / 2, 120);
            ctx.lineTo(larguraCanvas / 2 + 40, 150);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(larguraCanvas / 2, 120);
            ctx.lineTo(larguraCanvas / 2 - 40, 150);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(larguraCanvas / 2, 180);
            ctx.lineTo(larguraCanvas / 2 + 40, 230);
            ctx.stroke();
            
          
            // Boca triste
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.arc(larguraCanvas / 2, 91, 7, 0, Math.PI, true); // Boca (arco invertido)
            ctx.stroke();
            ctx.lineWidth = 10;

            // Texto "MORREU!" centralizado
            ctx.font = 'bold 40px Arial'; // Fonte maior e em negrito para o "MORREU!"
            ctx.fillStyle = 'red'; // Cor vermelha para destaque
            ctx.textAlign = 'center'; // Alinhar o texto ao centro horizontalmente
            ctx.textBaseline = 'middle';
            ctx.fillText("MORREU!", larguraCanvas / 2, alturaCanvas - 60 ); // Desenha o texto
            ctx.fillStyle = 'black'; // Restaura cor para preto
            ctx.font = '20px Arial';   // Restaura a fonte
            ctx.textAlign = 'left';     // Restaura alinhamento
        } 
        if (roundAcabou && tentativasRestantes != 0) {
            ctx.lineWidth = 10;

            // Texto "ACERTOU!"
            ctx.font = 'bold 40px Arial';
            ctx.fillStyle = 'green'; // Cor verde para vitória
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText("ACERTOU!", larguraCanvas / 2, 250); // Ajuste a posição Y conforme necessário
            ctx.fillStyle = 'black'; // Restaura cor para preto
            ctx.font = '20px Arial';   // Restaura a fonte
            ctx.textAlign = 'left';     // Restaura alinhamento
        }

    ctx.fillText("", 20, 40); // Texto no Canvas
}

function capitalizeFirstLetterOfEachWord(str) {
  return str.split(' ').map(word => {
    // Verifica se a palavra contém um hífen
    if (word.includes('-')) {
      // Verifica se é um time regional (ex: São José-RS)
      const regionalTeamPattern = /-[A-Z]{2}$/;
      if (regionalTeamPattern.test(word)) {
        return word.split('-').map((part, index) => {
          return index === 0 ? part.charAt(0).toUpperCase() + part.slice(1).toLowerCase() : part.toUpperCase();
        }).join('-');
      } else {
        // Trata palavras compostas por hífen (ex: Mercedes-Benz)
        return word.split('-').map(part => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()).join('-');
      }
    } else {
      // Verifica se a palavra termina com "FC"
      const fcPattern = /FC$/;
      if (fcPattern.test(word)) {
        return word.slice(0, -2).charAt(0).toUpperCase() + word.slice(1, -2).toLowerCase() + "FC";
      } else {
      // Trata palavras normais
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
    }
  }).join(' ');
}

function jogarJogoForcaFutebol() {

	const menuInicialDiv = document.getElementById('menu-inicial');
	const menuFinalDiv = document.getElementById('menu-final');
	const menuEndGame = document.getElementById('end-game');
	const jogoForcaDiv = document.getElementById('jogo-forca');
    const endButton = document.getElementById('btn-goto-menu');
	const iniciarJogoBtn = document.getElementById('iniciar-jogo-btn');
    const mensagemWarn = document.getElementById('mensagem-warn');
    const palpiteButton = document.getElementById('palpite-button');
    const palpiteInput = document.getElementById('palpite-input');
    const estatisticasUltimaRodada = document.getElementById('estatisticas-ultima-rodada');
    const mensagemFinalRodada = document.getElementById('mensagem-final-rodada');
    const palavrasUsadasListaElement = document.getElementById('palavras-usadas-lista');
    const scoreDisplay = document.getElementById('score-display');
    const palavraExibidaId = document.getElementById('palavra-exibida');
    const dicaTextoId = document.getElementById('dica-texto');
    const categoriaId = document.getElementById('categoria');
    const letrasCorretasId = document.getElementById('letras-corretas');
    const letrasIncorretasId = document.getElementById('letras-incorretas');
    const tentativasRestantesId = document.getElementById('tentativas-restantes');
    const numRoundId = document.getElementById('numero-round');
    const continuarSim = document.getElementById("btn-sim");
    const continuarNao = document.getElementById("btn-nao");
    const gameChoice = document.getElementById('game-choice');
	const listaDicasId = document.getElementById('lista-dicas');
	const dicaTextoFinal = document.getElementById('dica-texto-final');
    const acertouPrimeiraId = document.getElementById('acertou-primeira');
    const canvas = document.getElementById('forcaCanvas');
	const ctx = canvas.getContext('2d');
	const larguraCanvas = canvas.width;
	const alturaCanvas = canvas.height;

	let tentativasRestantes = 6;
	let letrasCorretas = [];
	let letrasIncorretas = [];
	let primeiraTentativa = true;
	let acertouDePrimeira = false;
	let roundAcabou = false;
	let jogoAcabou = false;
    let jogadorAcertou = false;
	let palavraObjeto;
	let palavraDica;

	// ----- Essa função checa as condições de ganhar/perder no round atual
	function verificarEstadoRodada() {
		console.log("verificarEstadoRodada() chamada. Rodada: ", jogo.numRound); // Debug
		if (!palavraExibida.includes("_")) {
			if ( primeiraTentativa ) {
				console.log("verificarEstadoRodada(): jogador está na primeira tentativa (primeiraTentativa: ", primeiraTentativa, ")."); // Debug
				jogo.numAcertosPrimeira++;
				acertouDePrimeira = true;
				console.log("verificarEstadoRodada(). acertouDePrimeira: ", acertouDePrimeira, " | primeiraTentativa: ", primeiraTentativa, " | jogo.numAcertosPrimeira: ", jogo.numAcertosPrimeira ); // Debug
			} else {
				// Não faz nada
			}
			console.log("verificarEstadoRodada(). Palavra adivinhada: ", palavraObjeto.word, " | jogo.numAcertos (antes do incremento): ", jogo.numAcertos); // Debug
			jogo.numAcertos++;
            jogo.numRound++;
			console.log("verificarEstadoRodada(). Incrementou jogo.numAcertos: ", jogo.numAcertos); // Debug

            jogadorAcertou = true;

			roundAcabou = true;
			console.log("verificarEstadoRodada(). roundAcabou: ", roundAcabou); // Debug
		} else if (tentativasRestantes === 0) {
			jogo.numErros++;
            jogo.numRound++;
			roundAcabou = true;
			console.log("verificarEstadoRodada(). roundAcabou: ", roundAcabou); // Debug
		}
		else {
			console.log("verificarEstadoRodada(). roundAcabou (false): ", roundAcabou); // Debug
		}

        if ( roundAcabou ) {
            console.log("verificarEstadoRodada(). roundAcabou:", roundAcabou, " então, exibirGameChoice().");
            exibirGameChoice();
        }


	}
	

    function exibirGameChoice() {
        console.log("exibirGameChoice() chamada.")
        menuFinalDiv.style.display = 'block';
        gameChoice.style.display = 'flex';
        menuInicialDiv.style.display = 'none';
        jogoForcaDiv.style.display = 'none';
        continuarSim.style.display = 'block';
        continuarNao.style.display = 'block';
        palpiteInput.value = null;

        const palavrasUsadasTextCapitalized = palavrasUsadasText.map(word => capitalizeFirstLetterOfEachWord(word));
        
        

        let canvasFinal = document.getElementById('forcaCanvasFinal');
        let palavraExibidaFinal = document.getElementById('palavra-exibida-final');
        let palavrasUsadasListaFinal = document.getElementById('palavras-usadas-lista-final');
        let ctxFinal = canvasFinal.getContext('2d');
	let dicasListaTexto = document.getElementById('lista-dicas-div');
	dicasListaTexto.innerHTML = null;

        console.log(`exibirGameChoice() - palavrasUsadasText.length: ${palavrasUsadasText.length}`);
        
        let palavraHandler = palavraObjeto;
	
	palavraHandler.hints.forEach( (hint, index) => {
		let texto = document.createElement('p');
		texto.innerHTML = `${index+1}. ${hint}`;
		dicasListaTexto.appendChild(texto);
	});

        
        // Criar um menu de escolha para continuar ou não
        rodada.scoreRodadaAtual = calcularScore( palavraSecreta, letrasCorretas, letrasIncorretas, acertouDePrimeira, jogadorAcertou);
        console.log("exibirGameChoice() chamou calcularScore(). jogo.scoreRodadaAtual>: ", jogo.scoreRodadaAtual);
        jogo.scoreUltimaRodada = rodada.scoreRodadaAtual;
        jogo.scoreGlobal += jogo.scoreUltimaRodada;
        console.log("exibirGameChoice() chamou calcularScore() corretamente");
            
        desenharForca( ctxFinal, tentativasRestantes, canvasFinal.width, canvasFinal.height, roundAcabou ); 
        canvasFinal.style.display = 'block';
        palavraExibidaFinal.textContent = palavraHandler.word;
        palavrasUsadasListaFinal.textContent = `👀 Palavras que já foram: ${palavrasUsadasTextCapitalized.join(", ")}`
        
        numRoundId.textContent = `#️⃣ Round: ${jogo.numRound-1} | 🏆 Pontuação Total: ${jogo.scoreGlobal}`;
        messageHandler(acertouPrimeiraId, tentativasRestantes, acertouDePrimeira);
        estatisticasUltimaRodada.textContent = getStats( tentativasRestantes, acertouDePrimeira, rodada, pontos, jogo);
	    palavrasUsadasListaFinal.style.display = 'none';
    }

    function messageHandler( handler, lives, first ) {
        console.log("messageHandler() chamada. Handler: ", handler," Lives: ", lives, " First: ", first);
        if( lives === 0 ) {
            handler.style.display = 'block';
            handler.textContent = `Você errou!`;
            } else {
                if ( first ) {
                    acertouPrimeiraId.textContent = "Parabéns! Você acertou de primeira!";
                    acertouPrimeiraId.style.display = 'block';
                } else {
                    acertouPrimeiraId.style.display = 'none';
            }
        } 
    }

    function getStats(tentativasRestantes, acertouDePrimeira, rodada, pontos, jogo) {
        console.log("getStats() chamada. Tentativas: ", tentativasRestantes, " Primeira: ", acertouDePrimeira, " Rodada obj: ", rodada, "Pontos obj: ", pontos, "Jogo obj: ", jogo);
        let statsTextHandler = "";
	
        if( tentativasRestantes === 0 ) {
            statsTextHandler = `⚰️ Ônus por morrer: ${pontos.morte}`;
            } else {
                if ( acertouDePrimeira ) {
                statsTextHandler += `✅ Acerto: ${pontos.acertoSimples} | ⭐ Bônus primeira tentativa: ${pontos.acertoPrimeira}`;
                } else {
                statsTextHandler += `✅ Acerto: ${pontos.acertoSimples}`;
                if ( tentativasRestantes != 6 ) {
                    statsTextHandler += ` | ❌ Ônus por erros: ${rodada.scorePenalidadeErroAtual}`;	
                }
            }
            if ( rodada.scoreBonusEfcAtual != 0 ) {
                statsTextHandler += ` | ⚡ Bônus eficiência: ${rodada.scoreBonusEfcAtual}`;
            }
            statsTextHandler += ` | ⛔ Bônus dificuldade palavra: ${rodada.scoreBonusDifcAtual}`;
        }
        statsTextHandler += ` | 💰 Pontuação da rodada: ${jogo.scoreUltimaRodada}`; 
        
        return statsTextHandler;
    }

	function exibirEndGame() {
		console.log("exibirEndGame() chamada."); // Debug
		menuFinalDiv.style.display = 'none';
        gameChoice.style.display = 'none';
        menuInicialDiv.style.display = 'none';
        jogoForcaDiv.style.display = 'none';
        continuarSim.style.display = 'none';
        continuarNao.style.display = 'none';
        palpiteInput.value = null;
        
        menuEndGame.style.display = 'flex';
        const endText = document.getElementById('end-text');
        const mensagemEnd = document.getElementById('mensagem-end');
        const endStats = document.getElementById('end-stats');

        numRoundId.textContent = `📊 Estatísticas Finais`
        endText.textContent = `🔢 Você parou no Round ${jogo.numRound-1}!`
        endStats.textContent = `🏆 Sua pontuação final foi: ${jogo.scoreGlobal}`
        mensagemEnd.textContent = `🎯 Palavras acertadas: ${jogo.numAcertos} | ✨ Acertos de primeira: ${jogo.numAcertosPrimeira} | 💀 Vezes que morreu: ${jogo.numErros} | 💰 Pontuação da última rodada: ${jogo.scoreUltimaRodada}`

	}

    function irMenu() {
        menuFinalDiv.style.display = 'none';
        jogoForcaDiv.style.display = 'none';
        menuEndGame.style.display = 'none';
        menuInicialDiv.style.display = 'flex';
        palpiteInput.value = null

        //mainLogic();
    }

    function irProximoRound() {
        console.log("irProximoRound() chamada.")
        if ( !roundAcabou ) {
            console.log("irProximoRound() round não acabou.")
            return;
        } else {
            console.log("irProximoRound(): roundAcabou", roundAcabou);	
            menuInicialDiv.style.display = 'none';
            menuFinalDiv.style.display = 'none';
	        jogoForcaDiv.style.display = 'block';
            gameChoice.style.display = 'none';
        
			resetarLogicaRound();
            exibirEstadoJogo();
            mainLogic();
		}
	    verificarEstadoJogo();

	    if ( jogoAcabou ) { console.log("verificandoEstadoRodada(). jogoAcabou: ", jogoAcabou, " então, exibirEndGame()."); irEndGame(); }
    }

    function irEndGame() {
        console.log("irEndGame() chamada.");
        verificarEstadoJogo();
        if ( !jogoAcabou ) { jogoAcabou = true; }
        console.log("irEndGame(): jogoAcabou", jogoAcabou)
        exibirEndGame();
    }
	
	// ----- Essa função verifica o estado do jogo geral (não somente de um round)
	function verificarEstadoJogo() {
		if ( jogo.numRound >= maxRounds ) {
			jogoAcabou = true;
		} else {
			jogoAcabou = false;
		}
	}

	// ----- Essa função seleciona a palavra à ser descoberta, passando por um filtro que garante que não haja repetições
	function escolherPalavraSecreta() {
		if ( palavrasUsadasText.length >= palavrasFutebol.length ) { // Não há mais palavras à serem usadas
			return null;
		} else {
		let palavraValida = false;
		let palavraEscolhida;
		while ( !palavraValida ) {
			palavraEscolhida = palavrasFutebol[Math.floor(Math.random() * palavrasFutebol.length)];
			if (!palavrasUsadasText.includes(palavraEscolhida.word.toUpperCase())) {
	               		palavraValida = true;
	            	}
		}
		palavraHandler = palavraEscolhida;
		return palavraEscolhida;
		}
	}

	// ----- Função que retorna uma dica a partir dos parâmetros palavraHints (lista de dicas daquela palavra) e ultimaDicaExibida (controle anti-repetição)
	function obterDica( palavraHints, ultimaDicaExibida ) {
        console.log("obterDica() chamada.");
		let dica;
		let countLoop = 0;
		if ( ultimaDicaExibida === null ) {
            console.log("obterDica() - não há ultima dica exibida definida (ultimaDicaExibida: ", ultimaDicaExibida, ").");
			dica = palavraHints[Math.floor(Math.random() * palavraHints.length)]
			return dica;
		} else {
            console.log("obterDica() - Ultima dica exibida: ", ultimaDicaExibida);
			do {
				dica = palavraHints[Math.floor(Math.random() * palavraHints.length)];
				countLoop++;
				if ( countLoop > 5) {
					return dica;
				}
			} while (dica === ultimaDicaExibida);
            console.log("obterDica() - Nova dica obtida: ", dica);
			return dica;
		}
	}
	// ----- Função que reseta as variáveis do jogo
	function resetarLogicaJogo() {
        console.log("resetar logica jogo")
		Object.keys(jogo).forEach(key => {
			if ( key === 'numRound' ) { jogo[key] = 1; }
			else { jogo[key] = 0; }
		});
        palavrasUsadasText = [];
        console.log(jogo);
        resetarLogicaRound();
	}
	// ----- Função que reseta as variáveis da rodada no início de cada novo round
	function resetarLogicaRound() {
        console.log("resetarLogicaRound() chamada.");
		tentativasRestantes = 6;
		letrasCorretas = [];
		letrasIncorretas = [];
		primeiraTentativa = true;
		acertouDePrimeira = false;
		roundAcabou = false;
		jogoAcabou = false;
        jogadorAcertou = false;
		palavraObjeto = escolherPalavraSecreta();
		palavraSecreta = palavraObjeto.word.toUpperCase();
		palavrasUsadasText.push(palavraSecreta);
		palavraExibida = palavraObjeto.word.split("").map(letra => letra === ' ' ? ' ' : '_');
		palavraCategoria = palavraObjeto.category;
		palavraHints = palavraObjeto.hints;
		palavraDica = obterDica( palavraHints, null );
		ultimaDicaExibida = palavraDica;
		Object.keys(rodada).forEach(key => { rodada[key] = 0; }); 
	}
	
	// ------ Função que processa o palpite do usuário
	function processarPalpite( palpite ) {
		console.log("processarPalpite() chamada."); // Debug
		console.log("processarPalpite() - primeiraTentativa: ", primeiraTentativa, "acertouDePrimeira: ", acertouDePrimeira);

		if ( jogoAcabou ) return;
	
		if ( !palpite || palpite.length === 0 ) {
			//mensagemWarn.textContext = "Palpite inválido. Digite uma letra ou a palavra completa.";
			console.log("processarPalpite(): palpite inválido. Nulo. palpite: ", palpite); // Debug
			return;
		}

		// Palpite de letra
		if ( palpite.length === 1 ) {
			let acertouLetra = false; // Flag para verificar se a letra foi encontrada (com ou sem acento)
			let palpiteNormalizado = palpite.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase();
			console.log("processarPalpite() - normalizado (letra): ", palpiteNormalizado); // Debug

            if ( !/[A-ZÇ]/.test(palpiteNormalizado) ) {
                console.log("processarPalpite() - Palpite inválido. Digite uma única letra."); // Debug
                mensagemWarn.textContext = "Palpite inválido. Digite uma única letra.";
                return;
            }

			if ( letrasCorretas.includes(palpiteNormalizado) || letrasIncorretas.includes(palpiteNormalizado) ) {
                console.log("processarPalpite() - Você já tentou essa letra. Tente outra."); // Debug
                mensagemWarn.textContent = "Você já tentou essa letra. Tente outra.";
                return;
            }
            
            if ( !palavraSecreta.includes(palpiteNormalizado) ) {
                letrasIncorretas.push(palpiteNormalizado);
                tentativasRestantes--;
                mensagemWarn.textContent = "Letra incorreta.";
                console.log("processarPalpite() - Letra incorreta."); // Debug
                acertouDePrimeira = false;
                primeiraTentativa = false;
			}
			
		
			for ( let i = 0; i < palavraSecreta.length; i++ ) {
				if ( palavraSecreta[i] === palpiteNormalizado || palavraSecreta[i].normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase() === palpiteNormalizado ) {
					palavraExibida[i] = palavraObjeto.word[i];
					acertouLetra = true;
				}
			}
		
			if ( acertouLetra ) {
				letrasCorretas.push(palpiteNormalizado);
				acertouDePrimeira = false;
                primeiraTentativa = false;
			}
		}
		// Palpite de palavra completa
		else {
			const palavraSecretaNormalizada = palavraObjeto.word.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase();
			let palpiteNormalizado = palpite.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase();
			console.log("processarPalpite() - palavra (normalizado): ", palpiteNormalizado); // Debug
		
			if ( palpiteNormalizado === palavraSecretaNormalizada ) {
				palavraExibida = palavraObjeto.word.split("");
				if ( primeiraTentativa ) {
					acertouDePrimeira = true;
					mensagemWarn.textContext = "Parabéns! Você acertou de primeira!";
					console.log("processarPalpite() - acertou de primeira: ", acertouDePrimeira, " | numAcertosPrimeira: ", jogo.numAcertosPrimeira); // Debug
				} else {
					acertouDePrimeira = false;
					console.log("processarPalpite() - acertou a palavra mas não de primeira: ", acertouDePrimeira); // Debug
				}
				roundAcabou = true;
			} else {
				letrasIncorretas.push(palpite);
				tentativasRestantes--;
				mensagemWarn.textContext = "Palavra incorreta!";
				console.log("processarPalpite() - chute incorreto");
                acertouDePrimeira = false;
                primeiraTentativa = false;
			}
		}
        palavraDica = obterDica( palavraHints, ultimaDicaExibida);
		verificarEstadoRodada();
        exibirEstadoJogo();
        mensagemWarn.textContent = "";
	}
	

	// ---- Calcular a dificuldade da palavra de acordo com: tamanho da palavra, número de repetições de letras, frequência de letras menos comuns na língua portuguesa;
	function calcularDificuldadePalavra(palavraSecreta) {
        console.log("calcularDificuldadePalavra() chamada.");
		const tamanhoPalavra = palavraSecreta.length;
		const letrasUnicas = new Set(palavraSecreta.replace(/ /g, '')).size;
		let bonusDificuldade = 0;
		bonusDificuldade += tamanhoPalavra * 5;
		bonusDificuldade += letrasUnicas * 10;
		// Bônus por frequência de letras
		for (const letra of palavraSecreta) {
			if (frequenciaLetrasBonus[letra]) {
				bonusDificuldade += frequenciaLetrasBonus[letra];
			}
		}
		console.log("calcularDificuldadePalavra() chamada. palavraSecreta: ", palavraSecreta, " | bonusDificuldade: ", bonusDificuldade); // Debug
		return bonusDificuldade;
	}

	// ---- Calcular a pontuação da rodada com base em: acerto de primeira tentativa, penalidade por letras incorretas, bônus de dificuldade da palavra;
	function calcularScore( palavraSecreta, letrasCorretas, letrasIncorretas, acertouDePrimeira, jogadorAcertou ) {
		console.log("calcularScore() chamada. palavraSecreta: ", palavraSecreta, " | letrasIncorretas: ", letrasIncorretas, " | letrasCorretas: ", letrasCorretas, " | acertouDePrimeira: ", acertouDePrimeira); // Debug
		let score = 0;
        if ( jogadorAcertou ) {
		 console.log("calcularScore() entrou na condicional de jogador acertou.");
		console.log("calcularScore() - jogadorAcertou: ", jogadorAcertou);
            if ( acertouDePrimeira ) {
		console.log("calcularScore() entrou na condicional de jogador acertou de primeira.");
		console.log("calcularScore() - acertouDePrimeira: ", acertouDePrimeira);
                score += pontos.acertoPrimeira;
            }
	    console.log("Pontuação da rodada depois checagem acertou primeira: ", score );
            score += pontos.acertoSimples;
            console.log("Pontuação da rodada antes do bônus de eficiência: ", score); // Debug
            if ( letrasCorretas.length > 0 && letrasCorretas.length < palavraSecreta.length ) {
                const bonusEficiencia = Math.floor(25 * (palavraSecreta.length / letrasCorretas.length));
                rodada.scoreBonusEfcAtual = bonusEficiencia;
                score += rodada.scoreBonusEfcAtual;
            }
            console.log("Pontuação da rodada após eficiência e antes do bônus de dificuldade: ", score," Eficiência: ", rodada.scoreBonusEfcAtual); // Debug
            const bonusDificuldade = calcularDificuldadePalavra( palavraSecreta );
            rodada.scoreBonusDifcAtual = Math.floor(bonusDificuldade);
            score += rodada.scoreBonusDifcAtual;
        } 
        else {
            console.log("calcularScore() entrou na condicional de jogador errou.");
	console.log("calcularScore() - jogadorAcertou: ", jogadorAcertou);
            score += pontos.morte;
        }
        console.log("Pontuação da rodada após dificuldade e antes das penalidades: ", score, " Dificuldade: ", rodada.scoreBonusDifcAtual); // Debug
	if ( letrasIncorretas.length > 0 ) {
        rodada.scorePenalidadeErroAtual = - (Math.floor((rodada.scoreBonusDifcAtual*letrasIncorretas.length / 50)*5));
        score += rodada.scorePenalidadeErroAtual; // Penalidade por erros
	}
        console.log("Pontuação final da rodada após todos os acréscimos e descontos: ", score); // Debug
        return score;
	}

	function exibirEstadoJogo() {	
		console.log("exibirEstadoJogo() chamada."); // Debug
        scoreDisplay.style.display = 'none';
        palavrasUsadasListaElement.style.display = 'none';
	
		if ( palavrasUsadasText.length > 1 ) {
            palavrasUsadasListaElement.style.display = 'flex';
			const palavrasUsadasTextCapitalized = palavrasUsadasText.map(word => capitalizeFirstLetterOfEachWord(word));
			const palavrasUsadasAnteriores = palavrasUsadasTextCapitalized.slice( 0, palavrasUsadasTextCapitalized.length -1);
			palavrasUsadasListaElement.textContent = `👀 Palavras que já foram: ${palavrasUsadasAnteriores.join(", ")}`;

		}
	
		// --- Atualizar elementos HTML com informações do jogo ---
		palavraExibidaId.textContent = palavraExibida.join(" ");
		dicaTextoId.textContent = palavraDica;
		categoriaId.textContent = `🗂️ Categoria: ${palavraCategoria}`;
		letrasCorretasId.textContent = `✅ Tentativas corretas: ${letrasCorretas.join(", ") || "Nenhuma"}`;
		letrasIncorretasId.textContent = `❌ Tentativas incorretas: ${letrasIncorretas.join(", ") || "Nenhuma"}`;
		tentativasRestantesId.textContent = `🔄 Vidas restantes: ${tentativasRestantes}`;
        if ( !roundAcabou ) {
            console.log("exibirEstadoJogo(): roundAcabou (false): ", roundAcabou);
            numRoundId.textContent = `#️⃣ Round: ${jogo.numRound} | 🏆 Pontuação Total: ${jogo.scoreGlobal}`;
        }

        if ( jogo.numRound > 1 ) {
            scoreDisplay.style.display = 'flex';
            scoreDisplay.textContent = `🎯 Palavras acertadas: ${jogo.numAcertos} | ✨ Acertos de primeira: ${jogo.numAcertosPrimeira} | 💀 Vezes que morreu: ${jogo.numErros} | 💰 Pontuação da última rodada: ${jogo.scoreUltimaRodada}`;
        }

        desenharForca( ctx, tentativasRestantes, larguraCanvas, alturaCanvas, roundAcabou ); // Desenhar forca no canvas
	}

	palavraObjeto = escolherPalavraSecreta();
	let palavraSecreta = palavraObjeto.word.toUpperCase();
	palavrasUsadasText.push(palavraSecreta);
	let palavraExibida = palavraObjeto.word.split("").map(letra => letra === ' ' ? ' ' : '_');
	let palavraCategoria = palavraObjeto.category;
	let palavraHints = palavraObjeto.hints;
	palavraDica = obterDica( palavraHints, null );
	let ultimaDicaExibida = palavraDica;

	function mainLogic() {
		console.log("mainLogic(). chamada."); // Debug
        console.log("jogo: ", jogo, "round: ", rodada)
        console.log("mainLogic(): jogadorAcertou ", jogadorAcertou);
		verificarEstadoJogo();
		verificarEstadoRodada();

        if ( !jogoAcabou ) {
            console.log("mainLogic(): !jogoAcabou", jogoAcabou);
        }

        exibirEstadoJogo();
	}

	menuInicialDiv.style.display = 'flex';
	jogoForcaDiv.style.display = 'none';
	iniciarJogoBtn.addEventListener('click', () => {
        menuInicialDiv.style.display = 'none';
		jogoForcaDiv.style.display = 'block';
        resetarLogicaJogo();
		mainLogic();
	});

	palpiteButton.addEventListener('click', function(event) {
        const palpite = palpiteInput.value;
        console.log("jogarJogoFutebolForca() - Botão 'Enviar Palpite' clicado.");
		if ( palpite != "" ) {
			console.log("jogarJogoFutebolForca() - Palpite: ", palpite);
            processarPalpite(palpite);
		} else {
			console.log("jogarJogoFutebolForca(): clique pode ter sido acidental ou erro do código.");
		}
        palpiteInput.value = null;	
        event.preventDefault();
    });

    palpiteInput.addEventListener('keypress', function(event) {
        if ( event.keyCode === 13) {
        const palpite = palpiteInput.value;
        console.log("jogarJogoFutebolForca() - Tecla Enter pressionada. Palpite: ", palpite);
        if ( palpite != "" ) {
            processarPalpite(palpite);
        } else {
			console.log("jogarJogoFutebolForca(): clique pode ter sido acidental ou erro do código.");
        }
        palpiteInput.value = null;
        event.preventDefault();
        }

    });

	continuarSim.addEventListener("click", irProximoRound);
    continuarNao.addEventListener("click", irEndGame);
    endButton.addEventListener( "click", function(event) { 
        console.log("clicou botao menu");
        irMenu() });
}

jogarJogoForcaFutebol();