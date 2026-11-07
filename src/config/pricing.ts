/**
 * cine4k.com.br — Tabela Oficial de Planos
 */

export interface PricingPlan {
  id: string;
  duration: string;
  screens: number;
  price: number;
  oldPrice?: number;
  discountPercentage?: number;
  desc: string;
  popular?: boolean;
  color: string;
  shadow: string;
  features: string[];
  ctaRoute: string;
  ctaText: string;
  whatsappMessage: string;
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'mensal',
    duration: '1 Mês',
    screens: 2,
    price: 30,
    oldPrice: 50,
    discountPercentage: 40,
    desc: 'Ideal para experimentar',
    popular: false,
    color: 'from-cyan-500 to-blue-500',
    shadow: 'shadow-cyan-500/50',
    features: [
      'Acesso completo ao Catálogo 4K',
      'Filmes + Séries + Canais ao vivo',
      'Reprodução em até 2 telas',
      'Suporte humano via WhatsApp'
    ],
    ctaRoute: '/ir/plano-mensal/',
    ctaText: 'ASSINAR AGORA! 🚀',
    whatsappMessage: 'Olá! Quero assinar o plano Mensal por R$ 30 no Cine 4K!'
  },
  {
    id: 'trimestral',
    duration: '3 Meses',
    screens: 2,
    price: 70,
    oldPrice: 120,
    discountPercentage: 42,
    desc: 'Economia garantida',
    popular: false,
    color: 'from-blue-500 to-indigo-500',
    shadow: 'shadow-blue-500/50',
    features: [
      'Mais de 100 mil títulos atualizados',
      'Qualidade 4K Ultra HD nativa',
      'Grade completa de esportes e filmes',
      'Suporte VIP via WhatsApp'
    ],
    ctaRoute: '/ir/plano-trimestral/',
    ctaText: 'ASSINAR AGORA! 🚀',
    whatsappMessage: 'Olá! Quero assinar o plano Trimestral por R$ 70 no Cine 4K!'
  },
  {
    id: 'semestral',
    duration: '6 Meses',
    screens: 3,
    price: 130,
    oldPrice: 240,
    discountPercentage: 46,
    desc: 'SUPER DESCONTO!',
    popular: true,
    color: 'from-cyan-400 via-blue-500 to-purple-600',
    shadow: 'shadow-cyan-500/80',
    features: [
      '3 Telas Simultâneas Liberadas',
      'Qualidade 4K a 60 FPS Reais',
      'Todos os Lançamentos e Pay-Per-View',
      'Prioridade Máxima no Atendimento'
    ],
    ctaRoute: '/ir/plano-semestral/',
    ctaText: 'ASSINAR AGORA! 🚀',
    whatsappMessage: 'Olá! Quero o plano Semestral por R$ 130 (Mais Vendido) no Cine 4K!'
  },
  {
    id: 'anual',
    duration: '12 Meses',
    screens: 3,
    price: 240,
    oldPrice: 480,
    discountPercentage: 50,
    desc: 'METADE DO PREÇO!',
    popular: false,
    color: 'from-emerald-500 to-cyan-500',
    shadow: 'shadow-emerald-500/50',
    features: [
      'Apenas R$ 20,00 por mês no plano anual',
      '3 Telas Liberadas para toda a família',
      'Sem reajustes durante 1 ano inteiro',
      'Liberação imediata em 2 minutos'
    ],
    ctaRoute: '/ir/plano-anual/',
    ctaText: 'ASSINAR AGORA! 🚀',
    whatsappMessage: 'Olá! Quero a oferta do plano Anual por R$ 240 (50% OFF) no Cine 4K!'
  }
];
