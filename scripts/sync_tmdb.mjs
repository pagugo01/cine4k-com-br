// scripts/sync_tmdb.mjs
/**
 * Sincronizador Oficial TMDb para cine4k.com.br
 * Busca os lançamentos mundiais mais recentes direto da TMDb
 * 100% Independente. Zero dependência de terceiros.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const TMDB_KEY = '2dca580c2a14b55200e784d157207b4d';

async function fetchTmdb(endpoint) {
  const url = `https://api.themoviedb.org/3/${endpoint}${endpoint.includes('?') ? '&' : '?'}api_key=${TMDB_KEY}&language=pt-BR`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`TMDb error: ${res.status}`);
  return await res.json();
}

async function main() {
  console.log('🔄 Sincronizando catálogo oficial Cine 4K com TMDb...');

  // 1. Lançamentos em Cartaz
  const nowPlaying = await fetchTmdb('movie/now_playing?page=1');
  // 2. Filmes de Ação Populares
  const actionMovies = await fetchTmdb('discover/movie?with_genres=28&sort_by=popularity.desc&page=1');
  // 3. Filmes de Animação
  const animationMovies = await fetchTmdb('discover/movie?with_genres=16&sort_by=popularity.desc&page=1');
  // 4. Animes
  const animeMovies = await fetchTmdb('discover/movie?with_genres=16&with_keywords=210024|287501&sort_by=popularity.desc&page=1');
  // 5. Séries Populares
  const popularSeries = await fetchTmdb('tv/popular?page=1');

  function mapMovie(m, categoryName, genres = ['4K']) {
    const isTv = !!m.name;
    const title = isTv ? m.name : m.title;
    const year = (isTv ? m.first_air_date : m.release_date)?.split('-')[0] || '2026';
    return {
      id: `tmdb-${m.id}`,
      title,
      poster: `https://image.tmdb.org/t/p/w400${m.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w1280${m.backdrop_path || m.poster_path}`,
      rating: m.vote_average ? m.vote_average.toFixed(1) : '8.5',
      year,
      duration: isTv ? 'Série 4K' : '2h 10m',
      category: categoryName,
      genres,
      overview: m.overview || 'Assista a este lançamento completo em ultra resolução 4K no Cine 4K.',
      type: isTv ? 'series' : 'movie'
    };
  }

  const lancamentosItems = nowPlaying.results
    .filter(m => m.poster_path && m.title)
    .slice(0, 10)
    .map(m => mapMovie(m, 'Filmes | Lançamentos', ['Lançamento', 'Cinema']));

  const heroItem = lancamentosItems[0];

  const acaoItems = actionMovies.results
    .filter(m => m.poster_path && m.title)
    .slice(0, 10)
    .map(m => mapMovie(m, 'Filmes | Ação', ['Ação', 'Adrenalina']));

  const animacaoItems = animationMovies.results
    .filter(m => m.poster_path && m.title)
    .slice(0, 10)
    .map(m => mapMovie(m, 'Filmes | Animação', ['Animação', 'Família']));

  const animeItems = animeMovies.results
    .filter(m => m.poster_path && m.title)
    .slice(0, 8)
    .map(m => mapMovie(m, 'Filmes | Anime', ['Anime', 'Japão']));

  const seriesItems = popularSeries.results
    .filter(m => m.poster_path && m.name)
    .slice(0, 10)
    .map(m => mapMovie(m, 'Séries | Populares em 4K', ['Série', 'Drama']));

  const futebolCanais = [
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
      overview: 'O canal de Casimiro Miguel com direitos exclusivos de grandes campeonatos, transmissões descontraídas e as melhores coberturas.',
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
  ];

  const content = `/**
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

export const FEATURED_HERO: CatalogItem = ${JSON.stringify(heroItem, null, 2)};

export const CATALOG_CATEGORIES: CatalogCategory[] = [
  {
    id: 'lancamentos',
    name: 'Filmes | Lançamentos',
    badge: '401 itens >',
    itemCount: 401,
    items: ${JSON.stringify(lancamentosItems, null, 2)}
  },
  {
    id: 'acao',
    name: 'Filmes | Ação',
    badge: '866 itens >',
    itemCount: 866,
    items: ${JSON.stringify(acaoItems, null, 2)}
  },
  {
    id: 'animacao',
    name: 'Filmes | Animação',
    badge: '819 itens >',
    itemCount: 819,
    items: ${JSON.stringify(animacaoItems, null, 2)}
  },
  {
    id: 'anime',
    name: 'Filmes | Anime',
    badge: '72 itens >',
    itemCount: 72,
    items: ${JSON.stringify(animeItems, null, 2)}
  },
  {
    id: 'series',
    name: 'Séries | Populares em 4K',
    badge: '1.139 séries >',
    itemCount: 1139,
    items: ${JSON.stringify(seriesItems, null, 2)}
  },
  {
    id: 'futebol-canais',
    name: 'Canais Ao Vivo | Futebol & PPV',
    badge: '200+ canais >',
    itemCount: 200,
    items: ${JSON.stringify(futebolCanais, null, 2)}
  }
];
`;

  fs.writeFileSync(path.join(projectRoot, 'src', 'data', 'catalog.ts'), content, 'utf-8');
  console.log('✅ Catálogo atualizado com sucesso via TMDb!');
}

main().catch(console.error);

