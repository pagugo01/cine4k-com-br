/**
 * cine4k.com.br — Catálogo Oficial de Filmes, Séries e Canais em 4K
 * Dados reais sincronizados com TMDb e categorias oficiais
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
  id: 'hero-vince-young',
  title: 'Untold: O Depoimento de Vince Young',
  poster: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/4VzJHhxHHpUw0J4HzlyU9BIXoHg.jpg',
  backdrop: 'https://image.tmdb.org/t/p/original/4VzJHhxHHpUw0J4HzlyU9BIXoHg.jpg',
  rating: '8.4',
  year: '2025',
  duration: '1h 42m',
  category: 'Filmes | Lançamentos',
  genres: ['Documentário', 'Esporte', 'Drama'],
  overview: 'Descubra uma história incrível. O lendário quarterback Vince Young quebra o silêncio e relata sua ascensão meteórica no futebol americano universitário, os bastidores da NFL e a jornada de redenção pessoal.',
  type: 'movie',
  trailerYoutubeId: '7X8II6J-6mU'
};

export const CATALOG_CATEGORIES: CatalogCategory[] = [
  {
    id: 'lancamentos',
    name: 'Filmes | Lançamentos',
    badge: '401 itens >',
    itemCount: 401,
    items: [
      {
        id: 'lanc-1',
        title: 'Untold O Depoimento de Vince Young',
        poster: 'https://image.tmdb.org/t/p/w400/4VzJHhxHHpUw0J4HzlyU9BIXoHg.jpg',
        backdrop: 'https://image.tmdb.org/t/p/w1280/4VzJHhxHHpUw0J4HzlyU9BIXoHg.jpg',
        rating: '8.4',
        year: '2025',
        duration: '1h 42m',
        category: 'Filmes | Lançamentos',
        genres: ['Documentário', 'Esportes'],
        overview: 'Vince Young quebra o silêncio e detalha sua jornada como um dos maiores quarterbacks do futebol americano universitário e sua trajetória na NFL.',
        type: 'movie',
        trailerYoutubeId: '7X8II6J-6mU'
      },
      {
        id: 'lanc-2',
        title: 'O Natal Perfeito de um Cachorro',
        poster: 'https://image.tmdb.org/t/p/w400/2YhgEEGYOQfl3CzoRcYys8b6JxH.jpg',
        backdrop: 'https://image.tmdb.org/t/p/w1280/2YhgEEGYOQfl3CzoRcYys8b6JxH.jpg',
        rating: '7.8',
        year: '2024',
        duration: '1h 35m',
        category: 'Filmes | Lançamentos',
        genres: ['Comédia', 'Família'],
        overview: 'Uma aventura natalina encantadora onde um cãozinho esperto une uma família separada no feriado mais mágico do ano.',
        type: 'movie'
      },
      {
        id: 'lanc-3',
        title: 'Elis e Eu',
        poster: 'https://image.tmdb.org/t/p/w400/3D02TZJ2Tpnu3HNmFNZC7wPzxu8.jpg',
        backdrop: 'https://image.tmdb.org/t/p/w1280/3D02TZJ2Tpnu3HNmFNZC7wPzxu8.jpg',
        rating: '8.1',
        year: '2024',
        duration: '1h 50m',
        category: 'Filmes | Lançamentos',
        genres: ['Drama', 'Música', 'Biografia'],
        overview: 'A emocionante história da relação entre uma das maiores vozes da música brasileira e os que conviveram nos bastidores de seus maiores sucessos.',
        type: 'movie'
      },
      {
        id: 'lanc-4',
        title: 'Isto Não é um Teste',
        poster: 'https://image.tmdb.org/t/p/w400/9ps2jm2lacM2l2AHzSw2EUOoSON.jpg',
        backdrop: 'https://image.tmdb.org/t/p/w1280/9ps2jm2lacM2l2AHzSw2EUOoSON.jpg',
        rating: '7.9',
        year: '2025',
        duration: '1h 48m',
        category: 'Filmes | Lançamentos',
        genres: ['Suspense', 'Ação'],
        overview: 'Quando um sistema automatizado entra em modo de emergência, uma equipe de especialistas tem poucas horas para evitar uma catástrofe global.',
        type: 'movie'
      },
      {
        id: 'lanc-5',
        title: 'Deadpool & Wolverine',
        poster: 'https://image.tmdb.org/t/p/w400/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg',
        backdrop: 'https://image.tmdb.org/t/p/w1280/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg',
        rating: '8.6',
        year: '2024',
        duration: '2h 08m',
        category: 'Filmes | Lançamentos',
        genres: ['Ação', 'Comédia', 'Ficção Científica'],
        overview: 'Deadpool recruta um Wolverine relutante para salvar seu universo em uma missão repleta de adrenalina, nostalgia e piadas ácidas.',
        type: 'movie',
        trailerYoutubeId: '73_1biulkYk'
      },
      {
        id: 'lanc-6',
        title: 'Divertida Mente 2',
        poster: 'https://image.tmdb.org/t/p/w400/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg',
        backdrop: 'https://image.tmdb.org/t/p/w1280/stKGOmbuwhL48nxq9PloYAzCWio.jpg',
        rating: '8.5',
        year: '2024',
        duration: '1h 36m',
        category: 'Filmes | Lançamentos',
        genres: ['Animação', 'Aventura', 'Família'],
        overview: 'Riley agora é adolescente e sua sala de controle mental ganha novas emoções caóticas: Ansiedade, Inveja, Tédio e Vergonha.',
        type: 'movie',
        trailerYoutubeId: 'L4DrolmDxmw'
      },
      {
        id: 'lanc-7',
        title: 'Gladiador II',
        poster: 'https://image.tmdb.org/t/p/w400/2cxhvwyEwRlysAmRH4iodkvo0z5.jpg',
        backdrop: 'https://image.tmdb.org/t/p/w1280/3V4kLQg0kSqPLctI5ziYWMEAZYF.jpg',
        rating: '8.3',
        year: '2024',
        duration: '2h 28m',
        category: 'Filmes | Lançamentos',
        genres: ['Ação', 'Aventura', 'Drama Histórico'],
        overview: 'Anos após testemunhar a morte do herói Maximus, Lucius deve entrar no Coliseu para lutar pelo futuro de Roma contra os imperadores tiranos.',
        type: 'movie',
        trailerYoutubeId: '4rgYUipGJNo'
      },
      {
        id: 'lanc-8',
        title: 'Duna: Parte 2',
        poster: 'https://image.tmdb.org/t/p/w400/czembW0Rk1Ke7lCJGahbOhdCuhV.jpg',
        backdrop: 'https://image.tmdb.org/t/p/w1280/xOMo8BRK7PfcJv9JCnx7s520DRq.jpg',
        rating: '8.9',
        year: '2024',
        duration: '2h 46m',
        category: 'Filmes | Lançamentos',
        genres: ['Ficção Científica', 'Aventura', 'Guerra'],
        overview: 'Paul Atreides se une a Chani e aos Fremen em busca de vingança contra os conspiradores que destruíram sua família.',
        type: 'movie',
        trailerYoutubeId: 'Way9Dexny3w'
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
        id: 'acao-1',
        title: 'Peter Pan',
        poster: 'https://image.tmdb.org/t/p/w400/fxMlr0H1CC2WKAjOEqq0udt1snn.jpg',
        backdrop: 'https://image.tmdb.org/t/p/w1280/fxMlr0H1CC2WKAjOEqq0udt1snn.jpg',
        rating: '7.5',
        year: '2023',
        duration: '1h 46m',
        category: 'Filmes | Ação',
        genres: ['Ação', 'Aventura', 'Fantasia'],
        overview: 'Wendy e seus irmãos embarcam em uma jornada eletrizante para a Terra do Nunca ao lado do lendário Peter Pan e a fada Sininho.',
        type: 'movie'
      },
      {
        id: 'acao-2',
        title: 'A Sociedade dos Assassinos',
        poster: 'https://image.tmdb.org/t/p/w400/97dQxVBqcWmvZNVtriLP2n5YCsN.jpg',
        backdrop: 'https://image.tmdb.org/t/p/w1280/97dQxVBqcWmvZNVtriLP2n5YCsN.jpg',
        rating: '7.8',
        year: '2024',
        duration: '1h 55m',
        category: 'Filmes | Ação',
        genres: ['Ação', 'Suspense'],
        overview: 'Guerreiros de uma guilda secreta de assassinos precisam escolher entre seguir o código de honra medieval ou quebrar suas regras para salvar seus entes queridos.',
        type: 'movie'
      },
      {
        id: 'acao-3',
        title: 'Mulher Maravilha',
        poster: 'https://image.tmdb.org/t/p/w400/ujQthWB6c0ojlARk28NSTmqidbF.jpg',
        backdrop: 'https://image.tmdb.org/t/p/w1280/ujQthWB6c0ojlARk28NSTmqidbF.jpg',
        rating: '8.2',
        year: '2017',
        duration: '2h 21m',
        category: 'Filmes | Ação',
        genres: ['Ação', 'Aventura', 'Fantasia'],
        overview: 'Treinada desde cedo para ser uma guerreira imbatível, Diana descobre seu verdadeiro poder ao lutar ao lado da humanidade na Primeira Guerra Mundial.',
        type: 'movie',
        trailerYoutubeId: '1Q8fG9Mp5mM'
      },
      {
        id: 'acao-4',
        title: 'O Esquadrão Suicida',
        poster: 'https://www.themoviedb.org/t/p/w600_and_h900_face/58MckINQv9nulew8KuQgcwTRJGd.jpg',
        backdrop: 'https://image.tmdb.org/t/p/w1280/jlGmlMZh6oxV2f7GLo0v9fq20VO.jpg',
        rating: '7.9',
        year: '2021',
        duration: '2h 12m',
        category: 'Filmes | Ação',
        genres: ['Ação', 'Comédia'],
        overview: 'Os supervilões mais perigosos do mundo são enviados na remota ilha de Corto Maltese em uma missão suicida de busca e destruição.',
        type: 'movie',
        trailerYoutubeId: 'eg5ciq_mcC8'
      },
      {
        id: 'acao-5',
        title: 'John Wick 4: Baba Yaga',
        poster: 'https://image.tmdb.org/t/p/w400/gh2bmprLtUQ8o9v5mDCJ2LTVGZ0.jpg',
        backdrop: 'https://image.tmdb.org/t/p/w1280/h8gHn0OzRogL0GayvA0Vv82v8.jpg',
        rating: '8.8',
        year: '2023',
        duration: '2h 49m',
        category: 'Filmes | Ação',
        genres: ['Ação', 'Suspense', 'Crime'],
        overview: 'Com o preço por sua cabeça crescendo, Wick leva sua luta contra a Alta Cúpula até os limites do mundo, de Nova York a Paris, Osaka e Berlim.',
        type: 'movie',
        trailerYoutubeId: 'qEVUtrk8_B4'
      },
      {
        id: 'acao-6',
        title: 'Top Gun: Maverick',
        poster: 'https://image.tmdb.org/t/p/w400/62HCnUTziyWcpDaBO2i1DX17ljH.jpg',
        backdrop: 'https://image.tmdb.org/t/p/w1280/odJ4hx6g6vBt4lBWKFD1tGLILBW.jpg',
        rating: '8.7',
        year: '2022',
        duration: '2h 10m',
        category: 'Filmes | Ação',
        genres: ['Ação', 'Drama'],
        overview: 'Depois de mais de 30 anos como um dos principais aviadores da Marinha, Pete Mitchell treina um destacamento de graduados TOPGUN para uma missão especializada.',
        type: 'movie',
        trailerYoutubeId: 'giXco2jaZ_4'
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
        id: 'anim-1',
        title: 'Crianças Lobo',
        poster: 'https://image.tmdb.org/t/p/w400/mqeHZZ5IakUABFtJwTSw6bM0CND.jpg',
        backdrop: 'https://image.tmdb.org/t/p/w1280/mqeHZZ5IakUABFtJwTSw6bM0CND.jpg',
        rating: '8.6',
        year: '2012',
        duration: '1h 57m',
        category: 'Filmes | Animação',
        genres: ['Animação', 'Drama', 'Fantasia'],
        overview: 'Após a morte de seu parceiro lobisomem, uma jovem mãe se muda para o campo para criar seus dois filhos meio-humanos, meio-lobos.',
        type: 'movie'
      },
      {
        id: 'anim-2',
        title: 'As Aventuras De Tadeo E A Tábua De Esmeralda',
        poster: 'https://image.tmdb.org/t/p/w400/9KADuZT3KwmCYIrmarPuGyGTriw.jpg',
        backdrop: 'https://image.tmdb.org/t/p/w1280/9KADuZT3KwmCYIrmarPuGyGTriw.jpg',
        rating: '7.4',
        year: '2022',
        duration: '1h 29m',
        category: 'Filmes | Animação',
        genres: ['Animação', 'Aventura', 'Comédia'],
        overview: 'Tadeo acidentalmente liberta um feitiço milenar que coloca em risco a vida de seus melhores amigos, e deve viajar pelo mundo para revertê-lo.',
        type: 'movie'
      },
      {
        id: 'anim-3',
        title: 'Os Croods 2 Uma Nova Era',
        poster: 'https://image.tmdb.org/t/p/w400/f7BIa9xIerwviSMsa9BEY28sC3Y.jpg',
        backdrop: 'https://image.tmdb.org/t/p/w1280/f7BIa9xIerwviSMsa9BEY28sC3Y.jpg',
        rating: '7.9',
        year: '2020',
        duration: '1h 35m',
        category: 'Filmes | Animação',
        genres: ['Animação', 'Aventura', 'Família'],
        overview: 'Em busca de um novo lar, a família pré-histórica Croods descobre um paraíso murado habitado pela família Bem-Melhor.',
        type: 'movie'
      },
      {
        id: 'anim-4',
        title: 'Super Mario Bros. O Filme',
        poster: 'https://image.tmdb.org/t/p/w400/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg',
        backdrop: 'https://image.tmdb.org/t/p/w1280/9n2tJBplPbgR2ca05h6q08mR9sa.jpg',
        rating: '8.4',
        year: '2023',
        duration: '1h 32m',
        category: 'Filmes | Animação',
        genres: ['Animação', 'Aventura', 'Comédia'],
        overview: 'Mario e Luigi vão parar no fascinante Reino dos Cogumelos e precisam se unir à Princesa Peach e Donkey Kong para derrotar o temível Bowser.',
        type: 'movie',
        trailerYoutubeId: 'c3fKkZ1fCq4'
      },
      {
        id: 'anim-5',
        title: 'Homem-Aranha: Através do Aranhaverso',
        poster: 'https://image.tmdb.org/t/p/w400/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
        backdrop: 'https://image.tmdb.org/t/p/w1280/4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg',
        rating: '9.0',
        year: '2023',
        duration: '2h 20m',
        category: 'Filmes | Animação',
        genres: ['Animação', 'Ação', 'Ficção Científica'],
        overview: 'Miles Morales é catapultado através do Multiverso, onde encontra uma equipe de Pessoas-Aranha encarregadas de proteger a própria existência.',
        type: 'movie',
        trailerYoutubeId: 'cqGjhVJWtEg'
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
        id: 'anime-1',
        title: 'Fate stay night Heavens Feel III Spring Song',
        poster: 'https://image.tmdb.org/t/p/w400/btWv7Gxpz0GNCJZSSBZNGca2cIh.jpg',
        backdrop: 'https://image.tmdb.org/t/p/w1280/btWv7Gxpz0GNCJZSSBZNGca2cIh.jpg',
        rating: '8.7',
        year: '2020',
        duration: '2h 02m',
        category: 'Filmes | Anime',
        genres: ['Anime', 'Ação', 'Fantasia'],
        overview: 'O clímax épico da trilogia Heavens Feel. Shirou Emiya desafia seu destino para proteger Sakura Matou e pôr fim à sangrenta Guerra do Santo Graal.',
        type: 'movie'
      },
      {
        id: 'anime-2',
        title: 'Kyochuu Rettou Movie (LEG)',
        poster: 'https://image.tmdb.org/t/p/w400/sf0lHt1uG6LdgxG56VE0Aw6PCVH.jpg',
        backdrop: 'https://image.tmdb.org/t/p/w1280/sf0lHt1uG6LdgxG56VE0Aw6PCVH.jpg',
        rating: '7.1',
        year: '2020',
        duration: '1h 16m',
        category: 'Filmes | Anime',
        genres: ['Anime', 'Terror', 'Suspense'],
        overview: 'Sobreviventes de um acidente aéreo caem em uma ilha isolada infestada por insetos gigantes carnívoros.',
        type: 'movie'
      },
      {
        id: 'anime-3',
        title: 'Demon Slayer: Kimetsu no Yaiba - Vila dos Ferreiros',
        poster: 'https://image.tmdb.org/t/p/w400/7bWxAsNPv9ubpk0oIpXxJ9xeqj3.jpg',
        backdrop: 'https://image.tmdb.org/t/p/w1280/7bWxAsNPv9ubpk0oIpXxJ9xeqj3.jpg',
        rating: '8.8',
        year: '2023',
        duration: '1h 50m',
        category: 'Filmes | Anime',
        genres: ['Anime', 'Ação', 'Fantasia'],
        overview: 'Tanjiro viaja para a misteriosa Vila dos Ferreiros para consertar sua espada Nichirin e enfrenta novos demônios das Luas Superiores.',
        type: 'movie'
      },
      {
        id: 'anime-4',
        title: 'Jujutsu Kaisen 0',
        poster: 'https://image.tmdb.org/t/p/w400/3pTwXdZw2LmAwhjL4f0c4H7s3w8.jpg',
        backdrop: 'https://image.tmdb.org/t/p/w1280/3pTwXdZw2LmAwhjL4f0c4H7s3w8.jpg',
        rating: '8.7',
        year: '2021',
        duration: '1h 45m',
        category: 'Filmes | Anime',
        genres: ['Anime', 'Ação', 'Sobrenatural'],
        overview: 'Yuta Okkotsu ganha o controle de um espírito amaldiçoado extremamente poderoso e é matriculado na Escola Técnica de Jujutsu por Satoru Gojo.',
        type: 'movie'
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
        id: 'ser-1',
        title: 'A Casa do Dragão (House of the Dragon)',
        poster: 'https://image.tmdb.org/t/p/w400/7QMsOTMUswlwxJP0rTTZfmz2tX2.jpg',
        backdrop: 'https://image.tmdb.org/t/p/w1280/etj5CuMuam3hGQ3QIh8umv0XyXn.jpg',
        rating: '8.9',
        year: '2024',
        duration: '2 Temporadas',
        category: 'Séries | Max',
        genres: ['Fantasia', 'Drama', 'Ação'],
        overview: 'Duzentos anos antes dos eventos de Game of Thrones, a dinastia Targaryen trava uma guerra civil devastadora pelo Trono de Ferro: a Dança dos Dragões.',
        type: 'series'
      },
      {
        id: 'ser-2',
        title: 'The Last of Us',
        poster: 'https://image.tmdb.org/t/p/w400/uKvVjHNqB5VmOrdxqAt2V7JMrRI.jpg',
        backdrop: 'https://image.tmdb.org/t/p/w1280/uDgy6hyPd82kOHh6I95FLtLnj6p.jpg',
        rating: '9.0',
        year: '2023',
        duration: '1 Temporada',
        category: 'Séries | Max',
        genres: ['Drama', 'Ação', 'Ficção Científica'],
        overview: 'Joel, um sobrevivente endurecido, é contratado para contrabandear Ellie, uma garota de 14 anos imune ao fungo mortal, para fora de uma zona de quarentena opressiva.',
        type: 'series'
      },
      {
        id: 'ser-3',
        title: 'Stranger Things',
        poster: 'https://image.tmdb.org/t/p/w400/49WJfeN0moxb9IPfGn8AIqMGskD.jpg',
        backdrop: 'https://image.tmdb.org/t/p/w1280/56v2KjBlU4XaOv9rVYEQypROD7P.jpg',
        rating: '8.8',
        year: '2024',
        duration: '4 Temporadas',
        category: 'Séries | Netflix',
        genres: ['Ficção Científica', 'Mistério', 'Drama'],
        overview: 'Quando um garoto desaparece na cidade de Hawkins, amigos e familiares descobrem um mistério envolvendo experimentos secretos do governo e o Mundo Invertido.',
        type: 'series'
      },
      {
        id: 'ser-4',
        title: 'The Boys',
        poster: 'https://image.tmdb.org/t/p/w400/2ZmAVncB4ZCYn1XgT2T6FqK4o2w.jpg',
        backdrop: 'https://image.tmdb.org/t/p/w1280/2ZmAVncB4ZCYn1XgT2T6FqK4o2w.jpg',
        rating: '8.7',
        year: '2024',
        duration: '4 Temporadas',
        category: 'Séries | Prime Video',
        genres: ['Ação', 'Comédia Ácida', 'Ficção'],
        overview: 'Um grupo de justiceiros sem poderes se junta para derrubar super-heróis corruptos que abusam de seus dons sob a chancela de uma megacorporação.',
        type: 'series'
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
        id: 'live-1',
        title: 'Premiere Clubes 4K (Brasileirão)',
        poster: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=500&auto=format&fit=crop&q=80',
        backdrop: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=1280&auto=format&fit=crop&q=80',
        rating: '10.0',
        year: 'Ao Vivo',
        duration: '24 Horas',
        category: 'Canais | Futebol',
        genres: ['Futebol', 'Brasileirão', 'Copa do Brasil'],
        overview: 'Transmissão em alta resolução 4K com som de estádio, pré-jogo completo e todos os jogos da Série A e B sem travamentos.',
        type: 'football'
      },
      {
        id: 'live-2',
        title: 'Cazé TV Ao Vivo',
        poster: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=500&auto=format&fit=crop&q=80',
        backdrop: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1280&auto=format&fit=crop&q=80',
        rating: '9.9',
        year: 'Ao Vivo',
        duration: '24 Horas',
        category: 'Canais | Futebol',
        genres: ['Esportes', 'Futebol', 'Entretenimento'],
        overview: 'O canal de Casimiro Miguel com direitos exclusivos de grandes campeonatos, narrativas descontraídas e as melhores transmissões.',
        type: 'football'
      },
      {
        id: 'live-3',
        title: 'ESPN 4K (Champions & Premier League)',
        poster: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=500&auto=format&fit=crop&q=80',
        backdrop: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=1280&auto=format&fit=crop&q=80',
        rating: '9.8',
        year: 'Ao Vivo',
        duration: '24 Horas',
        category: 'Canais | Esportes',
        genres: ['UEFA Champions', 'Premier League', 'La Liga'],
        overview: 'Os maiores torneios do futebol europeu, NFL, NBA e tênis internacional em qualidade Ultra HD 60 FPS.',
        type: 'channel'
      },
      {
        id: 'live-4',
        title: 'Combate HD (UFC & Boxe)',
        poster: 'https://images.unsplash.com/photo-1517438476312-10d79c077509?w=500&auto=format&fit=crop&q=80',
        backdrop: 'https://images.unsplash.com/photo-1517438476312-10d79c077509?w=1280&auto=format&fit=crop&q=80',
        rating: '9.8',
        year: 'Ao Vivo',
        duration: '24 Horas',
        category: 'Canais | Lutas',
        genres: ['UFC', 'Boxe', 'Muay Thai'],
        overview: 'Card principal e preliminar de todas as edições numeradas do UFC, disputas mundiais de boxe e artes marciais.',
        type: 'channel'
      }
    ]
  }
];
