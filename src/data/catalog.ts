/**
 * cine4k.com.br — Catálogo Oficial de Filmes, Séries e Canais em 4K
 * Sincronizado automaticamente com TMDb (The Movie Database) Oficial
 * 100% Independente
 */

export interface CatalogItem {
  id: string;
  title: string;
  poster: string;
  backdrop: string;
  rating: string;
  year: string;
  duration: string;
  category: string;
  genres: string[];
  overview: string;
  type: 'movie' | 'series' | 'channel' | 'football';
  trailerYoutubeId?: string;
}

export interface CatalogCategory {
  id: string;
  name: string;
  badge: string;
  itemCount: number;
  items: CatalogItem[];
}

export const FEATURED_HERO: CatalogItem = {
  "id": "tmdb-791523",
  "title": "O Bosque Selvagem",
  "poster": "https://image.tmdb.org/t/p/w400/mcuUYNWGJHPEaRumOlgSZCzMRPc.jpg",
  "backdrop": "https://image.tmdb.org/t/p/w1280/sl5NJ1vtyhP9Vr88bB4blULsJYp.jpg",
  "rating": "8.5",
  "year": "2026",
  "duration": "2h 10m",
  "category": "Filmes | Lançamentos",
  "genres": [
    "Lançamento",
    "Cinema"
  ],
  "overview": "A determinada adolescente Prue McKeel embarca em uma missão desesperada de resgate depois que seu irmão caçula é sequestrado por um bando de corvos. Acompanhada por seu colega de classe desajeitado, mas leal, Curtis Mehlberg, Prue navega por um mundo habitado por animais falantes, bandidos e figuras poderosas movidas pela dor e pela ambição. À medida que a dupla é arrastada para um conflito que ameaça o equilíbrio da própria floresta, Prue precisa descobrir uma força e uma crença que jamais soube que possuía.",
  "type": "movie"
};

export const CATALOG_CATEGORIES: CatalogCategory[] = [
  {
    id: 'lancamentos',
    name: 'Filmes | Lançamentos',
    badge: '401 itens >',
    itemCount: 401,
    items: [
  {
    "id": "tmdb-791523",
    "title": "O Bosque Selvagem",
    "poster": "https://image.tmdb.org/t/p/w400/mcuUYNWGJHPEaRumOlgSZCzMRPc.jpg",
    "backdrop": "https://image.tmdb.org/t/p/w1280/sl5NJ1vtyhP9Vr88bB4blULsJYp.jpg",
    "rating": "8.5",
    "year": "2026",
    "duration": "2h 10m",
    "category": "Filmes | Lançamentos",
    "genres": [
      "Lançamento",
      "Cinema"
    ],
    "overview": "A determinada adolescente Prue McKeel embarca em uma missão desesperada de resgate depois que seu irmão caçula é sequestrado por um bando de corvos. Acompanhada por seu colega de classe desajeitado, mas leal, Curtis Mehlberg, Prue navega por um mundo habitado por animais falantes, bandidos e figuras poderosas movidas pela dor e pela ambição. À medida que a dupla é arrastada para um conflito que ameaça o equilíbrio da própria floresta, Prue precisa descobrir uma força e uma crença que jamais soube que possuía.",
    "type": "movie"
  },
  {
    "id": "tmdb-1423191",
    "title": "Resident Evil",
    "poster": "https://image.tmdb.org/t/p/w400/bvBTdNaWVPrHKjyPFnsigZJsKdD.jpg",
    "backdrop": "https://image.tmdb.org/t/p/w1280/3icyRAqgakNcQn6aDVz9libFmBA.jpg",
    "rating": "7.5",
    "year": "2026",
    "duration": "2h 10m",
    "category": "Filmes | Lançamentos",
    "genres": [
      "Lançamento",
      "Cinema"
    ],
    "overview": "Bryan, um tranquilo entregador de órgãos, é enviado para uma entrega noturna no Hospital Geral de Raccoon City. No caminho por uma estrada montanhosa coberta de neve, ele acidentalmente atropela uma mulher desconhecida. Ela sobrevive, mas algo está muito errado. Ao tentar ajudar, Bryan se depara com um surto em larga escala envolvendo mutações horríveis com tentáculos e monstruosidades bioengenheiradas.",
    "type": "movie"
  },
  {
    "id": "tmdb-1507696",
    "title": "Apocalipse Z: Novo Mundo",
    "poster": "https://image.tmdb.org/t/p/w400/tzk90shtAI6WaoDIjLLVten7oov.jpg",
    "backdrop": "https://image.tmdb.org/t/p/w1280/o3XwuDUj0n8qnK91p6q8LKfr6rj.jpg",
    "rating": "6.1",
    "year": "2026",
    "duration": "2h 10m",
    "category": "Filmes | Lançamentos",
    "genres": [
      "Lançamento",
      "Cinema"
    ],
    "overview": "Após o surto do vírus TSJ, as Ilhas Canárias se tornaram o último refúgio da Europa. Quando uma missão parte rumo a Madri em busca de suprimentos, Roberto se junta à equipe com intenções duvidosas. Cercados por infectados e divididos por lealdades conflitantes, eles precisam lutar pela sobrevivência e enfrentar um dilema moral: salvar a própria pele ou arriscar tudo pelo que resta da humanidade.",
    "type": "movie"
  },
  {
    "id": "tmdb-1058424",
    "title": "Hope: O Primeiro Impacto",
    "poster": "https://image.tmdb.org/t/p/w400/yfWe8Vaac8b8f9dagmzBWOroUcg.jpg",
    "backdrop": "https://image.tmdb.org/t/p/w1280/j96rurZqmBjyY37Fncl3IB0qJNe.jpg",
    "rating": "6.8",
    "year": "2026",
    "duration": "2h 10m",
    "category": "Filmes | Lançamentos",
    "genres": [
      "Lançamento",
      "Cinema"
    ],
    "overview": "A polícia investiga a presença de uma criatura misteriosa que vem causando tumulto na remota vila de Hope Harbor. Ao seguir os rastros do animal, um grupo de caçadores acaba se tornando sua presa involuntária, dando início a um conflito que se transforma em uma tragédia de proporções cósmicas.",
    "type": "movie"
  },
  {
    "id": "tmdb-1813355",
    "title": "Uma História de Derry",
    "poster": "https://image.tmdb.org/t/p/w400/9duTLm4Xk62wGIWJBfdco9lPHvW.jpg",
    "backdrop": "https://image.tmdb.org/t/p/w1280/hw3d1wDXTsEVyViubbTgHsMIvX0.jpg",
    "rating": "6.9",
    "year": "2026",
    "duration": "2h 10m",
    "category": "Filmes | Lançamentos",
    "genres": [
      "Lançamento",
      "Cinema"
    ],
    "overview": "Séculos antes da aparição do palhaço Pennywise em Derry, três jovens nativos americanos encontram um aterrorizante espírito ancestral na floresta.",
    "type": "movie"
  },
  {
    "id": "tmdb-1294189",
    "title": "Fuga Mortal",
    "poster": "https://image.tmdb.org/t/p/w400/3QX08keJGtcIJsCyy4Mdaq28ZGq.jpg",
    "backdrop": "https://image.tmdb.org/t/p/w1280/byuwrUG1nkGv8a2lGkBmD7pULo6.jpg",
    "rating": "5.8",
    "year": "2026",
    "duration": "2h 10m",
    "category": "Filmes | Lançamentos",
    "genres": [
      "Lançamento",
      "Cinema"
    ],
    "overview": "Um herói de guerra falsamente acusado, sem nada a perder, lidera a polícia em uma épica perseguição televisiva de carro pelo país, ajudado por membros de seu antigo batalhão das Forças Especiais do Exército e monitorado de perto por um público fascinado que torce por sua fuga segura.",
    "type": "movie"
  },
  {
    "id": "tmdb-1657630",
    "title": "El despertar",
    "poster": "https://image.tmdb.org/t/p/w400/w3YJx1PPPC6aiVKusxfc9QA0uYS.jpg",
    "backdrop": "https://image.tmdb.org/t/p/w1280/4pYKqctQvvdyhuGjiK4szH9jEv9.jpg",
    "rating": "6.4",
    "year": "2026",
    "duration": "2h 10m",
    "category": "Filmes | Lançamentos",
    "genres": [
      "Lançamento",
      "Cinema"
    ],
    "overview": "Assista a este lançamento completo em ultra resolução 4K no Cine 4K.",
    "type": "movie"
  },
  {
    "id": "tmdb-1596275",
    "title": "Velocidade e Paixão",
    "poster": "https://image.tmdb.org/t/p/w400/d2lY6L7gOa1GeDkRNBAoVmnK9ne.jpg",
    "backdrop": "https://image.tmdb.org/t/p/w1280/hbz4aeVsjnKb2HRoFbbr46Egh8y.jpg",
    "rating": "7.7",
    "year": "2026",
    "duration": "2h 10m",
    "category": "Filmes | Lançamentos",
    "genres": [
      "Lançamento",
      "Cinema"
    ],
    "overview": "Uma jovem mecânica de carros de corrida finge estar noiva do piloto mais controverso das pistas. Oficialmente, o plano é salvar a reputação dele; mas secretamente, ela quer uma chance de pilotar. Só que logo essa mentira ameaça destruir tudo, incluindo aquilo que já se tornou muito mais do que um simples acordo.",
    "type": "movie"
  },
  {
    "id": "tmdb-1283515",
    "title": "Verity",
    "poster": "https://image.tmdb.org/t/p/w400/fy7q7xcyUjHXiKRuYblhcUTgBn0.jpg",
    "backdrop": "https://image.tmdb.org/t/p/w1280/cKetrF2dAnQ0AMV5i4BMOs41I5P.jpg",
    "rating": "7.0",
    "year": "2026",
    "duration": "2h 10m",
    "category": "Filmes | Lançamentos",
    "genres": [
      "Lançamento",
      "Cinema"
    ],
    "overview": "A escritora Lowen Ashleigh está à beira da falência quando aceita a oportunidade de sua vida: completar os livros restantes de uma série de sucesso que Verity Crawford, autora de thrillers best-sellers, não consegue terminar após um acidente misterioso. Ao chegar à luxuosa propriedade dos Crawford, Ashleigh percebe gradualmente que as coisas não são exatamente o que parecem.",
    "type": "movie"
  },
  {
    "id": "tmdb-1101412",
    "title": "A Queda 2: No Limite",
    "poster": "https://image.tmdb.org/t/p/w400/xtxEvJACNnbz3WYmJ5mYT1a0KGk.jpg",
    "backdrop": "https://image.tmdb.org/t/p/w1280/nGau0KBOaRILSK5MqFcuTfv7GMl.jpg",
    "rating": "7.3",
    "year": "2026",
    "duration": "2h 10m",
    "category": "Filmes | Lançamentos",
    "genres": [
      "Lançamento",
      "Cinema"
    ],
    "overview": "De luto pela morte de sua irmã Shiloh, Jax Hunter cria um laço com Luce, a amiga corajosa de Shiloh. Juntas, elas enfrentam a perigosa passarela suspensa do Monte Kwan, na Tailândia. Quando um deslizamento de rochas as deixa presas em uma estreita prancha a mais de 3.000 metros de altitude, Jax precisa enfrentar seus medos para sobreviver.",
    "type": "movie"
  }
]
  },
  {
    id: 'acao',
    name: 'Filmes | Ação',
    badge: '866 itens >',
    itemCount: 866,
    items: [
  {
    "id": "tmdb-155",
    "title": "Batman: O Cavaleiro das Trevas",
    "poster": "https://image.tmdb.org/t/p/w400/4lj1ikfsSmMZNyfdi8R8Tv5tsgb.jpg",
    "backdrop": "https://image.tmdb.org/t/p/w1280/cfT29Im5VDvjE0RpyKOSdCKZal7.jpg",
    "rating": "8.5",
    "year": "2008",
    "duration": "2h 10m",
    "category": "Filmes | Ação",
    "genres": [
      "Ação",
      "Adrenalina"
    ],
    "overview": "Após dois anos desde o surgimento do Batman, os criminosos de Gotham City têm muito o que temer. Com a ajuda do tenente James Gordon e do promotor público Harvey Dent, Batman luta contra o crime organizado. Acuados com o combate, os chefes do crime aceitam a proposta feita pelo Coringa e o contratam para combater o Homem-Morcego.",
    "type": "movie"
  },
  {
    "id": "tmdb-1507696",
    "title": "Apocalipse Z: Novo Mundo",
    "poster": "https://image.tmdb.org/t/p/w400/tzk90shtAI6WaoDIjLLVten7oov.jpg",
    "backdrop": "https://image.tmdb.org/t/p/w1280/o3XwuDUj0n8qnK91p6q8LKfr6rj.jpg",
    "rating": "6.2",
    "year": "2026",
    "duration": "2h 10m",
    "category": "Filmes | Ação",
    "genres": [
      "Ação",
      "Adrenalina"
    ],
    "overview": "Após o surto do vírus TSJ, as Ilhas Canárias se tornaram o último refúgio da Europa. Quando uma missão parte rumo a Madri em busca de suprimentos, Roberto se junta à equipe com intenções duvidosas. Cercados por infectados e divididos por lealdades conflitantes, eles precisam lutar pela sobrevivência e enfrentar um dilema moral: salvar a própria pele ou arriscar tudo pelo que resta da humanidade.",
    "type": "movie"
  },
  {
    "id": "tmdb-1058424",
    "title": "Hope: O Primeiro Impacto",
    "poster": "https://image.tmdb.org/t/p/w400/yfWe8Vaac8b8f9dagmzBWOroUcg.jpg",
    "backdrop": "https://image.tmdb.org/t/p/w1280/j96rurZqmBjyY37Fncl3IB0qJNe.jpg",
    "rating": "6.7",
    "year": "2026",
    "duration": "2h 10m",
    "category": "Filmes | Ação",
    "genres": [
      "Ação",
      "Adrenalina"
    ],
    "overview": "A polícia investiga a presença de uma criatura misteriosa que vem causando tumulto na remota vila de Hope Harbor. Ao seguir os rastros do animal, um grupo de caçadores acaba se tornando sua presa involuntária, dando início a um conflito que se transforma em uma tragédia de proporções cósmicas.",
    "type": "movie"
  },
  {
    "id": "tmdb-969681",
    "title": "Homem-Aranha: Um Novo Dia",
    "poster": "https://image.tmdb.org/t/p/w400/x0nvYzQpyJc5pdT9lMnkMuYAg0O.jpg",
    "backdrop": "https://image.tmdb.org/t/p/w1280/subj7knTn4DeS6KS7qI66EQKe9i.jpg",
    "rating": "8.5",
    "year": "2026",
    "duration": "2h 10m",
    "category": "Filmes | Ação",
    "genres": [
      "Ação",
      "Adrenalina"
    ],
    "overview": "É um novo dia para Peter Parker. Combatendo o crime em tempo integral como Homem-Aranha em um mundo que não se lembra mais dele e lidando com a pressão de ver seus antigos amigos seguirem em frente sem sua presença, Peter passa por uma mudança que talvez nem ele tenha o poder de controlar. Mas essa transformação também pode ser a única coisa capaz de deter uma surpreendente nova ameaça à cidade e às pessoas que ele ama: um poderoso vilão que ninguém sequer consegue enxergar.",
    "type": "movie"
  },
  {
    "id": "tmdb-1294189",
    "title": "Fuga Mortal",
    "poster": "https://image.tmdb.org/t/p/w400/3QX08keJGtcIJsCyy4Mdaq28ZGq.jpg",
    "backdrop": "https://image.tmdb.org/t/p/w1280/byuwrUG1nkGv8a2lGkBmD7pULo6.jpg",
    "rating": "5.9",
    "year": "2026",
    "duration": "2h 10m",
    "category": "Filmes | Ação",
    "genres": [
      "Ação",
      "Adrenalina"
    ],
    "overview": "Um herói de guerra falsamente acusado, sem nada a perder, lidera a polícia em uma épica perseguição televisiva de carro pelo país, ajudado por membros de seu antigo batalhão das Forças Especiais do Exército e monitorado de perto por um público fascinado que torce por sua fuga segura.",
    "type": "movie"
  },
  {
    "id": "tmdb-1657630",
    "title": "El despertar",
    "poster": "https://image.tmdb.org/t/p/w400/w3YJx1PPPC6aiVKusxfc9QA0uYS.jpg",
    "backdrop": "https://image.tmdb.org/t/p/w1280/4pYKqctQvvdyhuGjiK4szH9jEv9.jpg",
    "rating": "6.4",
    "year": "2026",
    "duration": "2h 10m",
    "category": "Filmes | Ação",
    "genres": [
      "Ação",
      "Adrenalina"
    ],
    "overview": "Assista a este lançamento completo em ultra resolução 4K no Cine 4K.",
    "type": "movie"
  },
  {
    "id": "tmdb-1368337",
    "title": "A Odisseia",
    "poster": "https://image.tmdb.org/t/p/w400/b82gpDmbbDZGywc0Zq1t2N3wWj5.jpg",
    "backdrop": "https://image.tmdb.org/t/p/w1280/iDiTY1wA35YWzTmXLTtqaxtN6tc.jpg",
    "rating": "8.0",
    "year": "2026",
    "duration": "2h 10m",
    "category": "Filmes | Ação",
    "genres": [
      "Ação",
      "Adrenalina"
    ],
    "overview": "Acompanhe o rei grego Odisseu em sua perigosa jornada de 20 anos para voltar a Ítaca após a Guerra de Troia, enfrentando monstros e deuses enquanto sua esposa Penélope resiste em seu reino.",
    "type": "movie"
  },
  {
    "id": "tmdb-656908",
    "title": "Ramayana: O Nascimento de uma Lenda",
    "poster": "https://image.tmdb.org/t/p/w400/lV7b3n4tqwlKGUsl72r3fI7COH1.jpg",
    "backdrop": "https://image.tmdb.org/t/p/w1280/yHVZncPRZr63mezRX20IyKLrSkv.jpg",
    "rating": "7.3",
    "year": "2026",
    "duration": "2h 10m",
    "category": "Filmes | Ação",
    "genres": [
      "Ação",
      "Adrenalina"
    ],
    "overview": "Rama é um príncipe cujo destino é marcado pelo sacrifício, enquanto Ravana é um rei imortal movido pela vingança. Uma profecia une os destinos dos dois.",
    "type": "movie"
  },
  {
    "id": "tmdb-1381071",
    "title": "Godzilla Minus Zero",
    "poster": "https://image.tmdb.org/t/p/w400/ebVZ8n64rtHsSItTei4EgTKzPVu.jpg",
    "backdrop": "https://image.tmdb.org/t/p/w1280/oqrYIDH4tvfEzPe1yqT4jzmAWHQ.jpg",
    "rating": "8.0",
    "year": "2026",
    "duration": "2h 10m",
    "category": "Filmes | Ação",
    "genres": [
      "Ação",
      "Adrenalina"
    ],
    "overview": "A guerra reduziu o Japão a zero, e o Godzilla mergulhou-o no negativo. Passaram-se dois anos desde então, e o país tem enfrentado lutas agonizantes para alcançar a recuperação e, finalmente, voltar à vida normal. No momento em que a humanidade conseguiu se agarrar a uma paz conquistada com dificuldade, surge uma nova ameaça, esmagando a esperança num instante.",
    "type": "movie"
  },
  {
    "id": "tmdb-1228834",
    "title": "The Fix",
    "poster": "https://image.tmdb.org/t/p/w400/a1j5writymMPFPyOhBT7s1xX6v6.jpg",
    "backdrop": "https://image.tmdb.org/t/p/w1280/dJTWIecL2vxsCRl5G0lRhPsfrhc.jpg",
    "rating": "5.9",
    "year": "2026",
    "duration": "2h 10m",
    "category": "Filmes | Ação",
    "genres": [
      "Ação",
      "Adrenalina"
    ],
    "overview": "Desiludidos com o fim da guerra no Afeganistão, um grupo de ex-agentes da CIA, em desgraça e marcados pela guerra, parte para Teerã com o objetivo de realizar um golpe que mudará suas vidas.",
    "type": "movie"
  }
]
  },
  {
    id: 'animacao',
    name: 'Filmes | Animação',
    badge: '819 itens >',
    itemCount: 819,
    items: [
  {
    "id": "tmdb-791523",
    "title": "O Bosque Selvagem",
    "poster": "https://image.tmdb.org/t/p/w400/mcuUYNWGJHPEaRumOlgSZCzMRPc.jpg",
    "backdrop": "https://image.tmdb.org/t/p/w1280/sl5NJ1vtyhP9Vr88bB4blULsJYp.jpg",
    "rating": "8.5",
    "year": "2026",
    "duration": "2h 10m",
    "category": "Filmes | Animação",
    "genres": [
      "Animação",
      "Família"
    ],
    "overview": "A determinada adolescente Prue McKeel embarca em uma missão desesperada de resgate depois que seu irmão caçula é sequestrado por um bando de corvos. Acompanhada por seu colega de classe desajeitado, mas leal, Curtis Mehlberg, Prue navega por um mundo habitado por animais falantes, bandidos e figuras poderosas movidas pela dor e pela ambição. À medida que a dupla é arrastada para um conflito que ameaça o equilíbrio da própria floresta, Prue precisa descobrir uma força e uma crença que jamais soube que possuía.",
    "type": "movie"
  },
  {
    "id": "tmdb-354912",
    "title": "Viva: A Vida é Uma Festa",
    "poster": "https://image.tmdb.org/t/p/w400/6oNm06TPz2vGiPc2I52oXW3JwPS.jpg",
    "backdrop": "https://image.tmdb.org/t/p/w1280/g7CHF8gTLGooTbP4GznIGwaqAGL.jpg",
    "rating": "8.2",
    "year": "2017",
    "duration": "2h 10m",
    "category": "Filmes | Animação",
    "genres": [
      "Animação",
      "Família"
    ],
    "overview": "Apesar da desconcertante proibição da música imposta pela sua família há várias gerações, Miguel sonha em tornar-se um músico de sucesso como o seu ídolo, Ernesto de la Cruz. Desesperado para provar o seu talento, Miguel encontra-se na deslumbrante e colorida Terra dos Mortos, seguindo uma misteriosa cadeia de acontecimentos. Pelo caminho, conhece o encantador Hector e, juntos, partem numa extraordinária viagem para desvendar a verdadeira história por detrás da história da família de Miguel.",
    "type": "movie"
  },
  {
    "id": "tmdb-9479",
    "title": "O Estranho Mundo de Jack",
    "poster": "https://image.tmdb.org/t/p/w400/g6zcll9bcAmoVNiMxt4wmVwTl5f.jpg",
    "backdrop": "https://image.tmdb.org/t/p/w1280/dSfrsjhqC6lYe7LYDYnzWeXZmEl.jpg",
    "rating": "7.9",
    "year": "1993",
    "duration": "2h 10m",
    "category": "Filmes | Animação",
    "genres": [
      "Animação",
      "Família"
    ],
    "overview": "Jack Skellington, o Rei das Abóboras, se cansa de fazer o Dia das Bruxas todos os anos e deixa os limites da cidade. Por acaso, acaba atravessando o portal do Natal, onde vê a alegria do espírito natalino. Ao retornar para a Cidade do Halloween, sem ter compreendido o que viu, ele começa a convencer os cidadãos a sequestrarem o Papai Noel e fazerem seu próprio Natal. Apesar de sua leal namorada Sally ser contra, o Papai Noel é capturado e os fatos mostrarão que Sally estava certa o tempo todo.",
    "type": "movie"
  },
  {
    "id": "tmdb-1204680",
    "title": "Coyote vs. Acme",
    "poster": "https://image.tmdb.org/t/p/w400/eZX2GyAJt5k0bL4OJbZGDvvxESD.jpg",
    "backdrop": "https://image.tmdb.org/t/p/w1280/rueyXwlewVPAP5NkqCUJx4RjhqB.jpg",
    "rating": "8.2",
    "year": "2026",
    "duration": "2h 10m",
    "category": "Filmes | Animação",
    "genres": [
      "Animação",
      "Família"
    ],
    "overview": "Após décadas de falhas catastróficas com os produtos ACME em sua caçada ao Papa-Léguas, Wile E. Coyote decide que é hora de buscar justiça e processar a corporação. Ao lado de um advogado azarado, Coyote trava uma batalha jurídica épica contra o impiedoso CEO da companhia. Enquanto enfrentam o sistema, a dupla desenvolve uma amizade improvável e luta para provar que a culpa de tantos desastres nunca foi do instinto, mas sim de defeitos de fabricação.",
    "type": "movie"
  },
  {
    "id": "tmdb-1465063",
    "title": "A Ilha Esquecida",
    "poster": "https://image.tmdb.org/t/p/w400/7OTbIk4TwYzpvf1GbOGXAFafxiz.jpg",
    "backdrop": "https://image.tmdb.org/t/p/w1280/cNICUho5uiAGkfCAQq1ihyaMla4.jpg",
    "rating": "8.0",
    "year": "2026",
    "duration": "2h 10m",
    "category": "Filmes | Animação",
    "genres": [
      "Animação",
      "Família"
    ],
    "overview": "Jo e Raissa se veem presas no fantástico mundo da ilha esquecida de Nakali. Elas descobrem que seu único caminho para casa pode custar uma vida inteira de memórias e emoções.",
    "type": "movie"
  },
  {
    "id": "tmdb-1084244",
    "title": "Toy Story 5",
    "poster": "https://image.tmdb.org/t/p/w400/jTN1hdfP88Km63waezqIN1uUqT3.jpg",
    "backdrop": "https://image.tmdb.org/t/p/w1280/qjTqY5coNiz6sVtPng40IzltsoN.jpg",
    "rating": "8.3",
    "year": "2026",
    "duration": "2h 10m",
    "category": "Filmes | Animação",
    "genres": [
      "Animação",
      "Família"
    ],
    "overview": "O trabalho de Buzz, Woody, Jessie e do resto da gangue fica exponencialmente mais difícil quando eles enfrentam uma nova ameaça à diversão: a tecnologia.",
    "type": "movie"
  },
  {
    "id": "tmdb-14836",
    "title": "Coraline e o Mundo Secreto",
    "poster": "https://image.tmdb.org/t/p/w400/rranXmvqPT4NoXzmxhFtXr9nNYT.jpg",
    "backdrop": "https://image.tmdb.org/t/p/w1280/hofnlIyF6bePkgQOpcuRWLvzf15.jpg",
    "rating": "7.9",
    "year": "2009",
    "duration": "2h 10m",
    "category": "Filmes | Animação",
    "genres": [
      "Animação",
      "Família"
    ],
    "overview": "Entediada em sua nova casa, a pequena Coraline descobre uma porta secreta que contém um mundo parecido com o dela, porém melhor em muitas maneiras. Coraline se encanta com a descoberta, mas logo descobre que há algo de errado quando seus pais alternativos tentam mantê-la eternamente nesse mundo paralelo.",
    "type": "movie"
  },
  {
    "id": "tmdb-1187326",
    "title": "As Aventuras de Tadeo e a Lâmpada Mágica",
    "poster": "https://image.tmdb.org/t/p/w400/sczKkd1Sw7kXU7ZvEUA3C3nFuhE.jpg",
    "backdrop": "https://image.tmdb.org/t/p/w1280/zbpimMxf6Ms96v3Zypuv8WltMSO.jpg",
    "rating": "8.2",
    "year": "2026",
    "duration": "2h 10m",
    "category": "Filmes | Animação",
    "genres": [
      "Animação",
      "Família"
    ],
    "overview": "Tadeo, sua namorada Sara e seus amigos Múmia, Jeff e Belzoni embarcam em uma aventura depois que ele acidentalmente desencadeia um feitiço antigo.",
    "type": "movie"
  },
  {
    "id": "tmdb-494656",
    "title": "La leyenda del Charro Negro",
    "poster": "https://image.tmdb.org/t/p/w400/fDLJ5vIeRL68cIHlob11w2pBzH0.jpg",
    "backdrop": "https://image.tmdb.org/t/p/w1280/3AXR3AFTHdU38OR14jfcK8FjJ5H.jpg",
    "rating": "8.3",
    "year": "2018",
    "duration": "2h 10m",
    "category": "Filmes | Animação",
    "genres": [
      "Animação",
      "Família"
    ],
    "overview": "Assista a este lançamento completo em ultra resolução 4K no Cine 4K.",
    "type": "movie"
  },
  {
    "id": "tmdb-3933",
    "title": "A Noiva Cadáver",
    "poster": "https://image.tmdb.org/t/p/w400/nT7W8LfhzVybfFsnQJ4qQfqn5KX.jpg",
    "backdrop": "https://image.tmdb.org/t/p/w1280/v23fWgJUEt8EMmvn19btIacxP8E.jpg",
    "rating": "7.6",
    "year": "2005",
    "duration": "2h 10m",
    "category": "Filmes | Animação",
    "genres": [
      "Animação",
      "Família"
    ],
    "overview": "As famílias de Victor e Victoria estão arranjando seu casamento. Nervoso com a cerimônia, Victor vai sozinho à floresta para ensaiar seus votos. No entanto, o que ele pensava ser um tronco de árvore na verdade é o braço esquelético de Emily, uma noiva que foi assassinada depois de fugir com seu amor. Convencida que Victor acabara de lhe pedir a mão em casamento, Emily o leva para o mundo dos mortos, mas ele precisa retornar rapidamente antes que Victoria se case com o malvado Lorde Barkis.",
    "type": "movie"
  }
]
  },
  {
    id: 'anime',
    name: 'Filmes | Anime',
    badge: '72 itens >',
    itemCount: 72,
    items: [
  {
    "id": "tmdb-129",
    "title": "A Viagem de Chihiro",
    "poster": "https://image.tmdb.org/t/p/w400/hhoKhsyJ3hFaxEm5pMdZRiTu2lJ.jpg",
    "backdrop": "https://image.tmdb.org/t/p/w1280/m4TUa2ciEWSlk37rOsjiSIvZDXE.jpg",
    "rating": "8.5",
    "year": "2001",
    "duration": "2h 10m",
    "category": "Filmes | Anime",
    "genres": [
      "Anime",
      "Japão"
    ],
    "overview": "Chihiro e seus pais estão se mudando para uma cidade diferente. A caminho da nova casa, o pai decide pegar um atalho. Eles se deparam com uma mesa repleta de comida, embora ninguém esteja por perto. Chihiro sente o perigo, mas seus pais começam a comer. Quando anoitece, eles se transformam em porcos. Agora, apenas Chihiro pode salvá-los.",
    "type": "movie"
  },
  {
    "id": "tmdb-1311031",
    "title": "Demon Slayer: Kimetsu no Yaiba Castelo Infinito",
    "poster": "https://image.tmdb.org/t/p/w400/41XdjOXGQoH0HTDNqEfwKGvGgwm.jpg",
    "backdrop": "https://image.tmdb.org/t/p/w1280/1RgPyOhN4DRs225BGTlHJqCudII.jpg",
    "rating": "8.8",
    "year": "2025",
    "duration": "2h 10m",
    "category": "Filmes | Anime",
    "genres": [
      "Anime",
      "Japão"
    ],
    "overview": "Enquanto os membros dos caçadores e os Hashira participavam de um rigoroso programa de fortalecimento coletivo, conhecido como Treinamento dos Hashira, em preparação para a batalha final contra os demônios, Muzan Kibutsuji aparece na Mansão Ubuyashiki. Com a vida do líder da organização em risco, Tanjiro e os Hashira correm até o quartel-general, mas acabam sendo lançados, pelas mãos de Muzan, em uma queda profunda rumo a um espaço misterioso para um confronto final, o Castelo Infinito.",
    "type": "movie"
  },
  {
    "id": "tmdb-822653",
    "title": "劇場版 魔法少女まどか☆マギカ〈ワルプルギスの廻天〉",
    "poster": "https://image.tmdb.org/t/p/w400/tc7wW6whJSvxM9f5RdqmQVpdl6n.jpg",
    "backdrop": "https://image.tmdb.org/t/p/w1280/xzm3RfWh932rS28WErNC3u8qzVm.jpg",
    "rating": "8.0",
    "year": "2026",
    "duration": "2h 10m",
    "category": "Filmes | Anime",
    "genres": [
      "Anime",
      "Japão"
    ],
    "overview": "Assista a este lançamento completo em ultra resolução 4K no Cine 4K.",
    "type": "movie"
  },
  {
    "id": "tmdb-4935",
    "title": "O Castelo Animado",
    "poster": "https://image.tmdb.org/t/p/w400/1hTfaEWktMJPxCk5nZNtK7F86C9.jpg",
    "backdrop": "https://image.tmdb.org/t/p/w1280/nv5wwZou159v5OC61i4ElR7OqyY.jpg",
    "rating": "8.4",
    "year": "2004",
    "duration": "2h 10m",
    "category": "Filmes | Anime",
    "genres": [
      "Anime",
      "Japão"
    ],
    "overview": "Sophie, uma jovem chapeleira, é transformada em uma mulher idosa por uma bruxa que entra em sua loja e a amaldiçoa. Ela encontra um mago chamado Howl e se vê envolvida em sua resistência em lutar pelo rei.",
    "type": "movie"
  },
  {
    "id": "tmdb-372058",
    "title": "Your Name.",
    "poster": "https://image.tmdb.org/t/p/w400/bMOKAjTU1TNUjRSF7icldbii06u.jpg",
    "backdrop": "https://image.tmdb.org/t/p/w1280/mMtUybQ6hL24FXo0F3Z4j2KG7kZ.jpg",
    "rating": "8.5",
    "year": "2016",
    "duration": "2h 10m",
    "category": "Filmes | Anime",
    "genres": [
      "Anime",
      "Japão"
    ],
    "overview": "Mitsuha é a filha do prefeito de uma pequena cidade, mas sonha em tentar a sorte em Tóquio. Taki trabalha em um restaurante em Tóquio e deseja largar o seu emprego. Os dois não se conhecem, mas estão conectados pelas imagens de seus sonhos.",
    "type": "movie"
  },
  {
    "id": "tmdb-1218925",
    "title": "Chainsaw Man – O Filme: Arco da Reze",
    "poster": "https://image.tmdb.org/t/p/w400/tj1XhCQ2Rw2sT2o7lIdqPIYvjsx.jpg",
    "backdrop": "https://image.tmdb.org/t/p/w1280/gqTz24ZRsCP6AKjARmEivY7m0cK.jpg",
    "rating": "8.5",
    "year": "2025",
    "duration": "2h 10m",
    "category": "Filmes | Anime",
    "genres": [
      "Anime",
      "Japão"
    ],
    "overview": "Denji trabalhava como Caçador de Demônios para a yakuza, tentando pagar a dívida que herdou de seus pais, até que um dia, ele é traído e morre. Em seus últimos momentos de consciência, ele forma um pacto com Pochita e essa fusão cria o Homem-Motosserra. Agora, em uma guerra brutal contra demônios, caçadores e inimigos secretos, uma garota misteriosa chamada Reze entrou em seu universo e Denji precisa enfrentar sua batalha mais perigosa até hoje, movido pelo amor em um mundo onde a sobrevivência não conhece regras.",
    "type": "movie"
  },
  {
    "id": "tmdb-128",
    "title": "Princesa Mononoke",
    "poster": "https://image.tmdb.org/t/p/w400/7EadOwHmyQgOnlghRiWBygNtnjl.jpg",
    "backdrop": "https://image.tmdb.org/t/p/w1280/gl0jzn4BupSbL2qMVeqrjKkF9Js.jpg",
    "rating": "8.3",
    "year": "1997",
    "duration": "2h 10m",
    "category": "Filmes | Anime",
    "genres": [
      "Anime",
      "Japão"
    ],
    "overview": "Um príncipe infectado por uma doença sabe que irá morrer, a menos que encontre a cura. Sendo a sua última esperança, segue para o leste e, durante o caminho, encontra animais da floresta lutando contra a sua exploração, liderados pela princesa Mononoke.",
    "type": "movie"
  },
  {
    "id": "tmdb-8392",
    "title": "Meu Amigo Totoro",
    "poster": "https://image.tmdb.org/t/p/w400/23KKTxDg6rxZVc66bloQQdPSr29.jpg",
    "backdrop": "https://image.tmdb.org/t/p/w1280/zkThiZAaAie8Lw7RAc5yPTOewBV.jpg",
    "rating": "8.1",
    "year": "1988",
    "duration": "2h 10m",
    "category": "Filmes | Anime",
    "genres": [
      "Anime",
      "Japão"
    ],
    "overview": "Duas irmãs se mudam para o campo com o pai para ficarem mais próximas da mãe hospitalizada e descobrem que as árvores ao redor são habitadas por Totoros, espíritos mágicos da floresta. Quando a mais nova foge de casa, a irmã mais velha busca a ajuda dos espíritos para encontrá-la.",
    "type": "movie"
  }
]
  },
  {
    id: 'series',
    name: 'Séries | Populares em 4K',
    badge: '1.139 séries >',
    itemCount: 1139,
    items: [
  {
    "id": "tmdb-5920",
    "title": "O Mentalista",
    "poster": "https://image.tmdb.org/t/p/w400/bJ0SNoD0DchXo5nH3N81ABIe3H.jpg",
    "backdrop": "https://image.tmdb.org/t/p/w1280/rJFqKcmMSttdNP58l0dVzY2NcTA.jpg",
    "rating": "8.4",
    "year": "2008",
    "duration": "Série 4K",
    "category": "Séries | Populares em 4K",
    "genres": [
      "Série",
      "Drama"
    ],
    "overview": "Patrick Jane é famoso por sua habilidade de alta percepção de tudo que está ao seu redor. Ele já quase foi uma celebridade, alegando ser médium vidente, mas agora admite que fingia ter poderes paranormais. Com sua grande habilidade de observação, Patrick trabalha como consultor independente para as autoridades da Califórnia, resolvendo um número considerável de crimes complicados.",
    "type": "series"
  },
  {
    "id": "tmdb-1100",
    "title": "Como Eu Conheci Sua Mãe",
    "poster": "https://image.tmdb.org/t/p/w400/578tlvbrpFwc959bQTT93W2RYA.jpg",
    "backdrop": "https://image.tmdb.org/t/p/w1280/3f8aW6vcYRP6mTZdgXm83BiuB9t.jpg",
    "rating": "8.1",
    "year": "2005",
    "duration": "Série 4K",
    "category": "Séries | Populares em 4K",
    "genres": [
      "Série",
      "Drama"
    ],
    "overview": "No ano de 2030, Ted Mosby, um arquiteto, decide explicar a seus filhos a história de como ele conheceu a mãe deles.",
    "type": "series"
  },
  {
    "id": "tmdb-1695",
    "title": "Monk: Um Detetive Diferente",
    "poster": "https://image.tmdb.org/t/p/w400/e3mVFigU7u7jSM9iSv4wI1slZky.jpg",
    "backdrop": "https://image.tmdb.org/t/p/w1280/dMY7XUfEAK0Rl8hsgc8ufEOaiZ2.jpg",
    "rating": "7.9",
    "year": "2002",
    "duration": "Série 4K",
    "category": "Séries | Populares em 4K",
    "genres": [
      "Série",
      "Drama"
    ],
    "overview": "Após o assassinato não resolvido de sua esposa, Adrian Monk desenvolve um transtorno obsessivo-compulsivo, um pavor de germes e contaminação, que lhe custa o seu trabalho como detetive. Contudo, ele continua a resolver crimes com a ajuda do ex-chefe.",
    "type": "series"
  },
  {
    "id": "tmdb-63333",
    "title": "The Last Kingdom",
    "poster": "https://image.tmdb.org/t/p/w400/fMNJjzZUdc8pBVIQ85olSNaBKix.jpg",
    "backdrop": "https://image.tmdb.org/t/p/w1280/QbtctI8EzlhsyFDMUMyG3fli8B.jpg",
    "rating": "8.3",
    "year": "2015",
    "duration": "Série 4K",
    "category": "Séries | Populares em 4K",
    "genres": [
      "Série",
      "Drama"
    ],
    "overview": "Enquanto Alfredo, o Grande, defende seu reino de invasões nórdicas, Uhtred - um saxão criado por vikings - planeja reivindicar o que é seu por direito.",
    "type": "series"
  },
  {
    "id": "tmdb-1421",
    "title": "Família Moderna",
    "poster": "https://image.tmdb.org/t/p/w400/gGOZeGx3ggP5O9qvswRPN7PRVWn.jpg",
    "backdrop": "https://image.tmdb.org/t/p/w1280/nO7EzksrBzlNpAg5rgv8HzaBIkx.jpg",
    "rating": "7.9",
    "year": "2009",
    "duration": "Série 4K",
    "category": "Séries | Populares em 4K",
    "genres": [
      "Série",
      "Drama"
    ],
    "overview": "Você consegue acreditar que todos eles são parentes? Nem eles! Modern Family nos traz uma divertida e inovadora visão do que significa criar uma família nesta época doida em que vivemos. Relacionamentos multiculturais, adoção e casamento de pessoas do mesmo sexo são apenas alguns dos assuntos atuais abordados por esta série que os analisa de modo divertido e sensível. Não importa o tamanho ou a formação, a família sempre vem no primeiro neste hilário modo de olhar \"moderno\" que foca a vida, o amor e as gargalhadas.",
    "type": "series"
  },
  {
    "id": "tmdb-1400",
    "title": "Seinfeld",
    "poster": "https://image.tmdb.org/t/p/w400/aCw8ONfyz3AhngVQa1E2Ss4KSUQ.jpg",
    "backdrop": "https://image.tmdb.org/t/p/w1280/tMRdEsMg9MyXAkcufK9YJEeIaNW.jpg",
    "rating": "8.2",
    "year": "1989",
    "duration": "Série 4K",
    "category": "Séries | Populares em 4K",
    "genres": [
      "Série",
      "Drama"
    ],
    "overview": "Jerry e seus três amigos têm o poder de fazer rir não só nas situações ridículas, mas também nas situações corriqueiras.",
    "type": "series"
  },
  {
    "id": "tmdb-873",
    "title": "Columbo",
    "poster": "https://image.tmdb.org/t/p/w400/2JCD8vab3fircOU8cM2HJCxfv4I.jpg",
    "backdrop": "https://image.tmdb.org/t/p/w1280/d7cH4zt3xoqRQnLqYXMPOrUz5k3.jpg",
    "rating": "8.1",
    "year": "1971",
    "duration": "Série 4K",
    "category": "Séries | Populares em 4K",
    "genres": [
      "Série",
      "Drama"
    ],
    "overview": "Columbo é uma premiada série policial dos anos 1970 estrelada pelo ator Peter Falk. A série revolucionou as histórias de detetives.\n\nAo contrário do que geralmente ocorre em filmes policiais, cada episódio sempre começa mostrando claramente quem é o assassino, e os pormenores de como cometeu o homicídio. Todos os crimes da série têm um ponto em comum: o criminoso monta um alibi que parece perfeito.\n\nDepois entra em cena Columbo (o seu primeiro nome nunca foi revelado), um tenente da Divisão de Homicídios da Polícia de Los Angeles, sempre vestindo um jaleco de gabardine surrado e dirigindo um carro velho, um Peugeot. Embora fale sempre na mulher e em um sobrinho, estes não aparecem nunca.\n\nColumbo é educado e faz de tudo para não ofender os suspeitos e, aparentemente dispersivo, dá a impressão que não tem a mínima chance de resolver o crime. Passa ao assassino uma falsa sensação de segurança, pois faz perguntas tolas e sem pretensões. Apesar disso, aos poucos e metodicamente, junta os pedaços do quebra-cabeça a partir dos mínimos detalhes e sempre consegue desmontar o álibi e desvendar o crime, para espanto do assassino. Resolve os crimes pela lógica.",
    "type": "series"
  },
  {
    "id": "tmdb-48866",
    "title": "Os 100",
    "poster": "https://image.tmdb.org/t/p/w400/cfhfcEt4bOXuVZkTC0nNBpqqiWb.jpg",
    "backdrop": "https://image.tmdb.org/t/p/w1280/8ZerYKvIaNUJZvAHXYTQu4qTwFw.jpg",
    "rating": "7.9",
    "year": "2014",
    "duration": "Série 4K",
    "category": "Séries | Populares em 4K",
    "genres": [
      "Série",
      "Drama"
    ],
    "overview": "100 anos no futuro, quando a Terra foi abandonada devido à radioatividade, os últimos humanos sobreviventes vivem em uma arca que orbita o planeta - mas a arca não vai durar para sempre. Assim, o regime repressivo escolhe 100 delinquentes juvenis descartáveis para enviar à Terra para ver se o planeta ainda é habitável.",
    "type": "series"
  },
  {
    "id": "tmdb-60735",
    "title": "Flash",
    "poster": "https://image.tmdb.org/t/p/w400/lFxIoMKqkgTuxpghTPHBjoVstMV.jpg",
    "backdrop": "https://image.tmdb.org/t/p/w1280/gFkHcIh7iE5G0oVOgpmY8ONQjhl.jpg",
    "rating": "7.7",
    "year": "2014",
    "duration": "Série 4K",
    "category": "Séries | Populares em 4K",
    "genres": [
      "Série",
      "Drama"
    ],
    "overview": "Um perito forense desperta de um coma com poderes especiais que serão postos à prova na luta contra forças que ameaçam a cidade.",
    "type": "series"
  },
  {
    "id": "tmdb-19885",
    "title": "Sherlock",
    "poster": "https://image.tmdb.org/t/p/w400/7WTsnHkbA0FaG6R9twfFde0I9hl.jpg",
    "backdrop": "https://image.tmdb.org/t/p/w1280/8rvLEmdI4gLrMO1rLqbNdnNcPFE.jpg",
    "rating": "8.5",
    "year": "2010",
    "duration": "Série 4K",
    "category": "Séries | Populares em 4K",
    "genres": [
      "Série",
      "Drama"
    ],
    "overview": "Nesta versão moderna dos livros de Sir Arthur Conan Doyle, o excêntrico Sherlock usa inteligência, psicologia e intuição para interpretar pistas.",
    "type": "series"
  }
]
  },
  {
    id: 'futebol-canais',
    name: 'Canais Ao Vivo | Futebol & PPV',
    badge: '200+ canais >',
    itemCount: 200,
    items: [
  {
    "id": "live-1",
    "title": "Premiere Clubes 4K (Brasileirão)",
    "poster": "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=500&auto=format&fit=crop&q=80",
    "backdrop": "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=1280&auto=format&fit=crop&q=80",
    "rating": "10.0",
    "year": "Ao Vivo",
    "duration": "24 Horas",
    "category": "Canais | Futebol",
    "genres": [
      "Futebol",
      "Brasileirão",
      "Copa do Brasil"
    ],
    "overview": "Transmissão em alta resolução 4K com som de estádio, pré-jogo completo e todos os jogos da Série A e B sem travamentos.",
    "type": "football"
  },
  {
    "id": "live-2",
    "title": "Cazé TV Ao Vivo",
    "poster": "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=500&auto=format&fit=crop&q=80",
    "backdrop": "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1280&auto=format&fit=crop&q=80",
    "rating": "9.9",
    "year": "Ao Vivo",
    "duration": "24 Horas",
    "category": "Canais | Futebol",
    "genres": [
      "Esportes",
      "Futebol",
      "Entretenimento"
    ],
    "overview": "O canal de Casimiro Miguel com direitos exclusivos de grandes campeonatos, transmissões descontraídas e as melhores coberturas.",
    "type": "football"
  },
  {
    "id": "live-3",
    "title": "ESPN 4K (Champions & Premier League)",
    "poster": "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=500&auto=format&fit=crop&q=80",
    "backdrop": "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=1280&auto=format&fit=crop&q=80",
    "rating": "9.8",
    "year": "Ao Vivo",
    "duration": "24 Horas",
    "category": "Canais | Esportes",
    "genres": [
      "UEFA Champions",
      "Premier League",
      "La Liga"
    ],
    "overview": "Os maiores torneios do futebol europeu, NFL, NBA e tênis internacional em qualidade Ultra HD 60 FPS.",
    "type": "channel"
  },
  {
    "id": "live-4",
    "title": "Combate HD (UFC & Boxe)",
    "poster": "https://images.unsplash.com/photo-1517438476312-10d79c077509?w=500&auto=format&fit=crop&q=80",
    "backdrop": "https://images.unsplash.com/photo-1517438476312-10d79c077509?w=1280&auto=format&fit=crop&q=80",
    "rating": "9.8",
    "year": "Ao Vivo",
    "duration": "24 Horas",
    "category": "Canais | Lutas",
    "genres": [
      "UFC",
      "Boxe",
      "Muay Thai"
    ],
    "overview": "Card principal e preliminar de todas as edições numeradas do UFC, disputas mundiais de boxe e artes marciais.",
    "type": "channel"
  }
]
  }
];
