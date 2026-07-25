const CACHE_NAME = 'afrikivu-diabete-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/manifest.json'
];

// Offline emergency glycemic protocol and herbal data fallback
const OFFLINE_FALLBACK_DATA = {
  emergencyProtocol: {
    hypoglycemia: "HYPOGLYCÉMIE (< 70 mg/dL): Prenez immédiatement 15g de sucres rapides (ex: 3 morceaux de sucre, demi-verre de jus de fruit, 1 cuillère à soupe de miel ou de sirop de canne). Attendez 15 minutes et retestez. Ne prenez pas de décoctions de plantes amères (Ndakala/Vernonia) pendant une crise d'hypoglycémie.",
    hyperglycemia: "HYPERGLYCÉMIE (> 250 mg/dL): Buvez beaucoup d'eau pure (1 à 2 litres par petites gorgées). Évitez tout repas riche en amidon (Fufu de manioc raffiné, riz blanc, banane plantain mûre). Une tisane de feuilles de Moringa ou de Bissap sans sucre peut aider en complément. Contactez un centre de santé si cela persiste."
  },
  plants: [
    {
      id: "vernonia",
      nameFr: "Vernonia / Feuille amère",
      nameSwahili: "Ndakala / Majani ya uchungu",
      nameLingala: "Ndolé",
      nameMashi: "Kimbwire / Mujumbe",
      nameKinyarwanda: "Umubirizi",
      glycemicImpact: "Réduction modérée à forte de la glycémie post-prandiale",
      preparation: "Bien laver à l'eau claire pour enlever l'excès d'amertume sans détruire les principes actifs. Bouillir 15 minutes max ou consommer en infusion tiède (1 tasse avant le repas principal)."
    },
    {
      id: "moringa",
      nameFr: "Moringa oleifera",
      nameSwahili: "Moringa / Mlonge",
      nameLingala: "Moringa",
      nameMashi: "Moringa / Karunga",
      nameKinyarwanda: "Moringa",
      glycemicImpact: "Régulateur de l'insuline et antioxydant puissant",
      preparation: "Sécher les feuilles à l'ombre (jamais en plein soleil). Piles en poudre fine. Ajouter 1 cuillère à café dans une bouillie de sorgho ou de mil sans sucre, ou dans une sauce tiède."
    },
    {
      id: "saka-saka",
      nameFr: "Feuilles de Manioc (Saka-Saka / Pondu)",
      nameSwahili: "Sombe / Kisovu",
      nameLingala: "Pondu",
      nameMashi: "Sombe / Lushi",
      nameKinyarwanda: "Isombe",
      glycemicImpact: "Faible index glycémique si préparé SANS excès d'huile de palme",
      preparation: "ATTENTION: Les feuilles crues contiennent des glucosides cyanogènes toxiques. Piler et bouillir IMPÉRATIVEMENT pendant au moins 45 minutes dans une marmite non couverte au début. Pour un diabétique, réduire l'huile de palme de 70% et ajouter de l'ail, de l'oignon et des aubergines africaines (Ngai-ngai/Djakhatou) pour le goût."
    }
  ]
};

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.url.includes('/api/ai/herbal-directory') && !navigator.onLine) {
    event.respondWith(
      new Response(JSON.stringify({ status: 'offline', data: OFFLINE_FALLBACK_DATA.plants }), {
        headers: { 'Content-Type': 'application/json' }
      })
    );
    return;
  }
  
  if (event.request.method === 'GET') {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const resClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            if (event.request.url.startsWith('http')) {
              cache.put(event.request, resClone);
            }
          });
          return response;
        })
        .catch(() => {
          return caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) {
              return cachedResponse;
            }
            if (event.request.mode === 'navigate') {
              return caches.match('/index.html');
            }
            return new Response(JSON.stringify({ error: 'Hors ligne / Offline' }), {
              status: 503,
              headers: { 'Content-Type': 'application/json' }
            });
          });
        })
    );
  }
});
