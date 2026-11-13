(function () {
  'use strict';
  const $ = (id) => document.getElementById(id);
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const small = () => window.matchMedia('(max-width: 720px)').matches;

  /* ---------- Catalogue ---------- */
  const CLO = ['XS', 'S', 'M', 'L', 'XL'], NUM = ['36', '38', '40', '42', '44'], ONE = ['Unique'];
  const col = (n, h, f, s) => ({ n, h, f, s });
  const ECRU = col('Écru', '#efe6d5', 'clair'), NOIR = col('Noir', '#24211f', 'noir'), GARANCE = col('Garance', '#a4232b', 'rouge'),
    BOUTEILLE = col('Vert bouteille', '#1f3b33', 'vert'), CAMEL = col('Camel', '#b98a55', 'brun'), MARINE = col('Marine', '#1e2a44', 'bleu'),
    KAKI = col('Kaki', '#646844', 'vert'), GRIS = col('Gris chiné', '#9b9a96', 'noir');
  const P = [
    { id: 'pull-joseph', name: 'Pull Joseph', sym: 'pull', cat: 'Hauts', price: 129, mat: 'Laine mérinos', badge: 'new', added: 13,
      desc: 'Un col rond, une maille serrée, des finitions côtelées. Le pull que l\'on enfile sans réfléchir, de l\'automne au printemps.',
      colors: [CAMEL, GRIS, MARINE], sizes: CLO, out: ['XS'], low: 'M',
      comp: ['100 % laine mérinos extra-fine', 'Tricoté en Italie', 'Lavage à la main ou programme laine, à plat pour sécher'], pair: ['pantalon-leon', 'bonnet-gaspard', 'manteau-augustin'] },
    { id: 'robe-suzanne', name: 'Robe Suzanne', sym: 'robe', cat: 'Robes', price: 139, mat: 'Crêpe fluide', badge: 'new', added: 12,
      desc: 'Taille marquée, jupe qui danse, manches courtes. Elle se porte avec des bottes en hiver et des sandales en été.',
      colors: [BOUTEILLE, GARANCE, NOIR], sizes: NUM, out: ['44'], low: '38',
      comp: ['Crêpe de viscose certifiée', 'Doublure en coton', 'Lavage à 30 °C, repassage doux'], pair: ['manteau-augustin', 'tote-felicie', 'bonnet-gaspard'] },
    { id: 'chemise-albane', name: 'Chemise Albane', sym: 'chemise', cat: 'Hauts', price: 89, mat: 'Popeline de coton', badge: 'new', added: 11,
      desc: 'Une chemise droite à poche poitrine, en popeline dense qui ne se froisse presque pas. Boutons en nacre.',
      colors: [col('Blanc craie', '#f6f2e9', 'clair'), col('Bleu ciel', '#b9cde0', 'bleu'), KAKI], sizes: CLO, out: [], low: 'S',
      comp: ['100 % coton biologique', 'Confectionnée au Portugal', 'Lavage à 40 °C'], pair: ['jupe-margot', 'jean-colette', 'tote-felicie'] },
    { id: 'manteau-augustin', name: 'Manteau Augustin', sym: 'manteau', cat: 'Vestes et manteaux', price: 289, mat: 'Drap de laine', badge: '', added: 10,
      desc: 'Un manteau croisé, long et enveloppant, taillé dans un drap de laine épais. Fait pour durer dix hivers.',
      colors: [CAMEL, col('Anthracite', '#3a3836', 'noir')], sizes: CLO, out: ['XL'], low: 'L',
      comp: ['80 % laine, 20 % polyamide recyclé', 'Entièrement doublé', 'Nettoyage à sec uniquement'], pair: ['pull-joseph', 'robe-suzanne', 'bonnet-gaspard'] },
    { id: 'mariniere-solange', name: 'Marinière Solange', sym: 'pull', cat: 'Hauts', price: 59, mat: 'Jersey épais', badge: '', added: 9,
      desc: 'La marinière comme il faut : jersey lourd, col bateau, rayures tissées et non imprimées.',
      colors: [col('Écru et marine', '#efe6d5', 'bleu', '#1e2a44'), col('Écru et garance', '#efe6d5', 'rouge', '#a4232b')], sizes: CLO, out: [], low: '',
      comp: ['100 % coton peigné', 'Tricotée en Bretagne', 'Lavage à 30 °C sur l\'envers'], pair: ['jean-colette', 'jupe-margot', 'tote-felicie'] },
    { id: 'pantalon-leon', name: 'Pantalon Léon', sym: 'pantalon', cat: 'Bas', price: 119, mat: 'Velours côtelé', badge: '', added: 8,
      desc: 'Coupe droite, taille haute, velours à grosses côtes. Il s\'assouplit et se patine au fil des lavages.',
      colors: [col('Tabac', '#7a5230', 'brun'), KAKI, NOIR], sizes: NUM, out: ['36'], low: '40',
      comp: ['98 % coton, 2 % élasthanne', 'Ourlet offert en boutique', 'Lavage à 30 °C sur l\'envers'], pair: ['pull-joseph', 'chemise-albane', 'surchemise-basile'] },
    { id: 'jean-colette', name: 'Jean Colette', sym: 'pantalon', cat: 'Bas', price: 109, mat: 'Denim brut', badge: 'last', added: 7,
      desc: 'Un jean droit en denim brut, sans délavage chimique. Il se fait à vous en quelques semaines.',
      colors: [col('Brut', '#25324a', 'bleu'), col('Délavé', '#7f96b3', 'bleu')], sizes: NUM, out: ['36', '44'], low: '38',
      comp: ['100 % coton, toile de 13 oz', 'Tissé et confectionné en France', 'Premier lavage après un mois de port'], pair: ['mariniere-solange', 'chemise-albane', 'surchemise-basile'] },
    { id: 'jupe-margot', name: 'Jupe Margot', sym: 'jupe', cat: 'Bas', price: 79, mat: 'Laine mélangée', badge: '', added: 6,
      desc: 'Une jupe trapèze qui s\'arrête sous le genou, avec une ceinture large et deux poches cachées dans les plis.',
      colors: [GARANCE, NOIR, CAMEL], sizes: NUM, out: [], low: '42',
      comp: ['60 % laine, 40 % viscose', 'Doublée', 'Nettoyage à sec recommandé'], pair: ['chemise-albane', 'mariniere-solange', 'tote-felicie'] },
    { id: 'robe-ondine', name: 'Robe Ondine', sym: 'robe', cat: 'Robes', price: 119, mat: 'Velours fin', badge: '', added: 5,
      desc: 'La robe du soir qui se porte aussi le jour. Velours fin, tombé souple, décolleté rond.',
      colors: [col('Bleu nuit', '#1c2540', 'bleu'), col('Terracotta', '#b65a3a', 'rouge')], sizes: NUM, out: ['36'], low: '',
      comp: ['Velours de coton', 'Fermeture invisible au dos', 'Lavage à 30 °C, séchage à l\'air'], pair: ['manteau-augustin', 'tote-felicie', 'bonnet-gaspard'] },
    { id: 'surchemise-basile', name: 'Surchemise Basile', sym: 'chemise', cat: 'Vestes et manteaux', price: 99, mat: 'Sergé de coton', badge: '', added: 4,
      desc: 'Entre la chemise et la veste : un sergé épais, une coupe ample, à porter ouverte sur un tee-shirt.',
      colors: [KAKI, MARINE, ECRU], sizes: CLO, out: [], low: 'XL',
      comp: ['100 % coton sergé', 'Confectionnée au Portugal', 'Lavage à 40 °C'], pair: ['tee-marcel', 'pantalon-leon', 'jean-colette'] },
    { id: 'tee-marcel', name: 'Tee-shirt Marcel', sym: 'tee', cat: 'Hauts', price: 39, mat: 'Coton bio épais', badge: '', added: 3,
      desc: 'Un tee-shirt qui tient : 220 grammes au mètre, col qui ne baille pas, coutures renforcées.',
      colors: [ECRU, NOIR, GARANCE, BOUTEILLE], sizes: CLO, out: [], low: '',
      comp: ['100 % coton biologique', 'Tricoté et cousu au Portugal', 'Lavage à 40 °C'], pair: ['surchemise-basile', 'jean-colette', 'tote-felicie'] },
    { id: 'tote-felicie', name: 'Cabas Félicie', sym: 'sac', cat: 'Accessoires', price: 35, mat: 'Toile de coton', badge: '', added: 2,
      desc: 'Un grand cabas en toile épaisse, avec une poche intérieure zippée. Il porte un ordinateur ou les courses du marché.',
      colors: [ECRU, GARANCE, NOIR], sizes: ONE, out: [], low: '',
      comp: ['Toile 100 % coton, 400 g/m²', 'Cousu en France', 'Lavage à 30 °C'], pair: ['tee-marcel', 'bonnet-gaspard', 'mariniere-solange'] },
    { id: 'bonnet-gaspard', name: 'Bonnet Gaspard', sym: 'bonnet', cat: 'Accessoires', price: 29, mat: 'Laine et cachemire', badge: 'last', added: 1,
      desc: 'Un bonnet à revers et à pompon, doux comme il faut. La petite pièce qui change une tenue.',
      colors: [GARANCE, CAMEL, MARINE, GRIS], sizes: ONE, out: [], low: 'Unique',
      comp: ['90 % laine, 10 % cachemire', 'Tricoté en Écosse', 'Lavage à la main'], pair: ['pull-joseph', 'manteau-augustin', 'tote-felicie'] }
  ];
  const byId = (id) => P.find((p) => p.id === id);
  const CATS = ['Hauts', 'Bas', 'Robes', 'Vestes et manteaux', 'Accessoires'];
  const CAT_ART = { 'Hauts': ['pull', '#b98a55'], 'Bas': ['pantalon', '#7a5230'], 'Robes': ['robe', '#1f3b33'], 'Vestes et manteaux': ['manteau', '#3a3836'], 'Accessoires': ['sac', '#a4232b'] };
  const FAMS = [['clair', 'Clair', '#efe6d5'], ['noir', 'Noir et gris', '#2a2725'], ['bleu', 'Bleu', '#2a3b5c'], ['rouge', 'Rouge', '#a4232b'], ['vert', 'Vert', '#3f5a45'], ['brun', 'Brun et camel', '#a47a4d']];
  const LOOKS = [
    { t: 'Le dimanche', p: 'Du doux, du chaud, rien qui serre.', items: [['pull-joseph', 0], ['pantalon-leon', 0], ['bonnet-gaspard', 0]] },
    { t: 'Le bureau', p: 'Net, sans être raide.', items: [['chemise-albane', 0], ['jupe-margot', 1], ['tote-felicie', 0]] },
    { t: 'Le dîner', p: 'Une robe, un manteau, et c\'est tout.', items: [['robe-suzanne', 1], ['manteau-augustin', 1], ['tote-felicie', 2]] }
  ];
  const FREE = 80, SHIP = { retrait: 0, relais: 4.9, domicile: 6.9 }, SHIP_N = { retrait: 'Retrait en boutique', relais: 'Point relais', domicile: 'Livraison à domicile' };

  const fmt = (n) => (Number.isInteger(n) ? String(n) : n.toFixed(2).replace('.', ',')) + ' €';
  const g = (sym, c) => '<svg class="gm" viewBox="0 0 200 240" aria-hidden="true" focusable="false" style="--c:' + c.h + ';--s:' + (c.s || 'transparent') + '"><use href="#g-' + sym + '"/></svg>';
  const HEART = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20s-7-4.400-7-10a4 4 0 0 1 7-2.600A4 4 0 0 1 19 10c0 5.600-7 10-7 10z"/></svg>';
  const badgeHtml = (b) => b === 'new' ? '<span class="badge new">Nouveau</span>' : b === 'last' ? '<span class="badge last">Dernières pièces</span>' : '';

  /* ---------- Mémoire locale (panier et favoris) ---------- */
  const load = (k, d) => { try { const v = JSON.parse(localStorage.getItem(k)); return v || d; } catch (e) { return d; } };
  const save = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* stockage indisponible : le panier reste en mémoire */ } };
  let cart = load('garance-cart', []).filter((i) => byId(i.id) && byId(i.id).colors[i.ci] && i.qty > 0);
  let wish = new Set(load('garance-wish', []).filter(byId));
  let promoCode = '';

  /* ---------- Filtres ---------- */
  const st = { cat: 'all', size: '', price: '', fam: '', q: '', sort: 'new' };
  const cardColor = {};
  const norm = (s) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  function filtered() {
    const q = norm(st.q.trim());
    let list = P.filter((p) => {
      if (st.cat === 'fav' ? !wish.has(p.id) : st.cat !== 'all' && p.cat !== st.cat) return false;
      if (st.size && (!p.sizes.includes(st.size) || p.out.includes(st.size))) return false;
      if (st.fam && !p.colors.some((c) => c.f === st.fam)) return false;
      if (st.price) { const [a, b] = st.price.split('-').map(Number); if (p.price < a || p.price > b) return false; }
      if (q && !norm([p.name, p.cat, p.mat, p.colors.map((c) => c.n).join(' ')].join(' ')).includes(q)) return false;
      return true;
    });
    const s = { new: (a, b) => b.added - a.added, asc: (a, b) => a.price - b.price, desc: (a, b) => b.price - a.price, az: (a, b) => a.name.localeCompare(b.name, 'fr') }[st.sort];
    return list.sort(s);
  }
  function cardHtml(p, i) {
    let ci = cardColor[p.id] || 0;
    if (st.fam && !cardColor[p.id]) { const k = p.colors.findIndex((c) => c.f === st.fam); if (k > 0) ci = k; }
    const c = p.colors[ci], on = wish.has(p.id);
    return '<article class="card in" data-id="' + p.id + '" style="--d:' + Math.min(i * 0.04, 0.4) + 's;--c:' + c.h + '">' +
      '<button class="card-media" type="button" data-open="' + p.id + '" data-ci="' + ci + '" aria-label="Voir ' + p.name + ', ' + c.n + ', ' + fmt(p.price) + '">' + g(p.sym, c) + badgeHtml(p.badge) + '<span class="quick">Choisir ma taille</span></button>' +
      '<button class="ic heart card-heart" type="button" data-wish="' + p.id + '" aria-pressed="' + on + '" aria-label="' + (on ? 'Retirer ' : 'Ajouter ') + p.name + (on ? ' des favoris' : ' aux favoris') + '">' + HEART + '</button>' +
      '<div class="card-body"><h3>' + p.name + '</h3><p class="price">' + fmt(p.price) + '</p><p class="mat">' + p.mat + '</p>' +
      '<div class="swatches" role="group" aria-label="Couleurs de ' + p.name + '">' + p.colors.map((x, k) =>
        '<button class="sw' + (x.s ? ' stripe' : '') + '" type="button" data-sw="' + p.id + '" data-ci="' + k + '" aria-pressed="' + (k === ci) + '" aria-label="' + x.n + '" title="' + x.n + '" style="--c:' + x.h + ';--s:' + (x.s || x.h) + '"></button>').join('') +
      '</div></div></article>';
  }
  function renderGrid() {
    const list = filtered();
    $('grid').innerHTML = list.map(cardHtml).join('');
    $('empty').hidden = list.length > 0;
    $('count').textContent = list.length + (list.length > 1 ? ' articles' : ' article') + (st.cat === 'fav' ? ' dans vos favoris' : '');
    const n = [st.size, st.price, st.fam].filter(Boolean).length;
    $('moreN').textContent = n ? '(' + n + ')' : '';
    document.querySelectorAll('#chips .chip').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.cat === st.cat)));
    document.querySelectorAll('#fams .famb').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.fam === st.fam)));
  }
  function setCat(c, scroll) {
    st.cat = c; renderGrid();
    if (scroll) $('boutique').scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
  }
  function resetAll() {
    Object.assign(st, { cat: 'all', size: '', price: '', fam: '', q: '', sort: 'new' });
    $('q').value = ''; $('fSize').value = ''; $('fPrice').value = ''; $('sort').value = 'new';
    renderGrid();
  }

  /* Rayons, puces, couleurs, tailles */
  $('cats').innerHTML = CATS.map((c) => {
    const n = P.filter((p) => p.cat === c).length;
    return '<button class="cat rv" type="button" data-cat="' + c + '" style="--bg:color-mix(in srgb, ' + CAT_ART[c][1] + ' 18%, #ece6d9)"><span class="cat-art">' + g(CAT_ART[c][0], { h: CAT_ART[c][1] }) + '</span><b>' + c + '</b><span>' + n + (n > 1 ? ' articles' : ' article') + '</span></button>';
  }).join('');
  $('chips').innerHTML = '<button class="chip" type="button" data-cat="all" aria-pressed="true">Tout <small>' + P.length + '</small></button>' +
    CATS.map((c) => '<button class="chip" type="button" data-cat="' + c + '" aria-pressed="false">' + c + ' <small>' + P.filter((p) => p.cat === c).length + '</small></button>').join('') +
    '<button class="chip" type="button" data-cat="fav" aria-pressed="false">♥ Favoris <small id="chipFav">' + wish.size + '</small></button>';
  $('fams').innerHTML = FAMS.map((f) => '<button class="famb" type="button" data-fam="' + f[0] + '" aria-pressed="false" aria-label="' + f[1] + '" title="' + f[1] + '" style="--c:' + f[2] + '"></button>').join('');
  $('fSize').insertAdjacentHTML('beforeend', CLO.concat(NUM).map((s) => '<option>' + s + '</option>').join(''));

  $('cats').addEventListener('click', (e) => { const b = e.target.closest('[data-cat]'); if (b) setCat(b.dataset.cat, true); });
  $('chips').addEventListener('click', (e) => { const b = e.target.closest('[data-cat]'); if (b) setCat(b.dataset.cat, false); });
  $('fams').addEventListener('click', (e) => { const b = e.target.closest('[data-fam]'); if (b) { st.fam = st.fam === b.dataset.fam ? '' : b.dataset.fam; renderGrid(); } });
  $('q').addEventListener('input', (e) => { st.q = e.target.value; renderGrid(); });
  $('sort').addEventListener('change', (e) => { st.sort = e.target.value; renderGrid(); });
  $('fSize').addEventListener('change', (e) => { st.size = e.target.value; renderGrid(); });
  $('fPrice').addEventListener('change', (e) => { st.price = e.target.value; renderGrid(); });
  $('reset').addEventListener('click', resetAll);
  $('reset2').addEventListener('click', resetAll);
  if (small()) $('more').removeAttribute('open');

  $('grid').addEventListener('click', (e) => {
    const sw = e.target.closest('[data-sw]'), w = e.target.closest('[data-wish]'), o = e.target.closest('[data-open]');
    if (sw) {
      cardColor[sw.dataset.sw] = Number(sw.dataset.ci);
      const card = sw.closest('.card'), tmp = document.createElement('div');
      tmp.innerHTML = cardHtml(byId(sw.dataset.sw), 0);
      tmp.firstChild.classList.remove('in');
      card.replaceWith(tmp.firstChild);
      const again = $('grid').querySelector('[data-sw="' + sw.dataset.sw + '"][data-ci="' + sw.dataset.ci + '"]');
      if (again) again.focus();
    } else if (w) { toggleWish(w.dataset.wish); }
    else if (o) { openProduct(o.dataset.open, Number(o.dataset.ci), o); }
  });

  /* ---------- Favoris ---------- */
  function syncWish() {
    save('garance-wish', [...wish]);
    [['wishN', true], ['wishN2', true]].forEach(([id]) => { const n = $(id); n.textContent = wish.size; n.hidden = wish.size === 0; });
    const cf = $('chipFav'); if (cf) cf.textContent = wish.size;
  }
  function toggleWish(id) {
    const p = byId(id), had = wish.has(id);
    if (had) wish.delete(id); else wish.add(id);
    syncWish(); renderGrid();
    if (pd.open && cur && cur.p.id === id) paintWish();
    toast(had ? p.name + ' retiré des favoris' : p.name + ' ajouté aux favoris');
    const again = $('grid').querySelector('[data-wish="' + id + '"]');
    if (again && !pd.open) again.focus();
  }
  const goFav = () => setCat('fav', true);
  $('btnWish').addEventListener('click', goFav);
  $('tabWish').addEventListener('click', goFav);
  $('btnSearch').addEventListener('click', () => { $('boutique').scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' }); setTimeout(() => $('q').focus({ preventScroll: true }), reduce ? 0 : 450); });

  /* ---------- Silhouettes ---------- */
  $('looks').innerHTML = LOOKS.map((l, i) => {
    const its = l.items.map(([id, ci]) => ({ p: byId(id), ci }));
    return '<article class="look rv" style="--d:' + (i * 0.08) + 's"><div class="look-art">' +
      its.map((x) => '<button class="look-piece" type="button" data-open="' + x.p.id + '" data-ci="' + x.ci + '" aria-label="Voir ' + x.p.name + '">' + g(x.p.sym, x.p.colors[x.ci]) + '</button>').join('') +
      '</div><div class="look-body"><h3>' + l.t + '</h3><p>' + l.p + '</p><div class="look-list">' +
      its.map((x) => '<button type="button" data-open="' + x.p.id + '" data-ci="' + x.ci + '"><span>' + x.p.name + ' · ' + x.p.colors[x.ci].n + '</span><b>' + fmt(x.p.price) + '</b></button>').join('') +
      '</div><p class="look-total"><span>La silhouette complète</span><span>' + fmt(its.reduce((s, x) => s + x.p.price, 0)) + '</span></p></div></article>';
  }).join('');
  $('looks').addEventListener('click', (e) => { const o = e.target.closest('[data-open]'); if (o) openProduct(o.dataset.open, Number(o.dataset.ci), o); });

  /* ---------- Fenêtres ---------- */
  const pd = $('pd'), cartD = $('cart'), co = $('co');
  let opener = null;
  [pd, cartD, co].forEach((d) => {
    d.addEventListener('click', (e) => { if (e.target === d || e.target.closest('[data-close]')) d.close(); });
    d.addEventListener('close', () => { if (opener && document.contains(opener) && !pd.open && !cartD.open && !co.open) { opener.focus(); } });
  });
  const show = (d, from) => { if (from) opener = from; if (!d.open) d.showModal(); d.scrollTop = 0; };

  /* ---------- Fiche article ---------- */
  let cur = null;
  const GUIDE = {
    clo: ['<table><thead><tr><th>Taille</th><th>XS</th><th>S</th><th>M</th><th>L</th><th>XL</th></tr></thead><tbody>',
      '<tr><td>Poitrine</td><td>82</td><td>88</td><td>94</td><td>100</td><td>106</td></tr><tr><td>Taille</td><td>64</td><td>70</td><td>76</td><td>82</td><td>88</td></tr><tr><td>Hanches</td><td>90</td><td>96</td><td>102</td><td>108</td><td>114</td></tr></tbody></table><p class="tiny">Mesures en centimètres, prises sur le corps.</p>'].join(''),
    num: ['<table><thead><tr><th>Taille</th><th>36</th><th>38</th><th>40</th><th>42</th><th>44</th></tr></thead><tbody>',
      '<tr><td>Tour de taille</td><td>66</td><td>70</td><td>74</td><td>78</td><td>82</td></tr><tr><td>Hanches</td><td>92</td><td>96</td><td>100</td><td>104</td><td>108</td></tr><tr><td>Longueur de jambe</td><td>78</td><td>79</td><td>80</td><td>81</td><td>82</td></tr></tbody></table><p class="tiny">Mesures en centimètres. L\'ourlet est offert en boutique.</p>'].join(''),
    one: '<p>Taille unique. Le cabas mesure 38 × 42 cm ; le bonnet convient aux tours de tête de 54 à 60 cm.</p>'
  };
  function paintWish() {
    const on = wish.has(cur.p.id), b = $('pdWish');
    b.setAttribute('aria-pressed', String(on));
    b.setAttribute('aria-label', on ? 'Retirer des favoris' : 'Ajouter aux favoris');
  }
  function paintProduct() {
    const p = cur.p, c = p.colors[cur.ci];
    $('pdStage').style.setProperty('--c', c.h);
    $('pdStage').innerHTML = g(p.sym, c);
    $('pdColorName').textContent = c.n;
    $('pdThumbs').innerHTML = p.colors.map((x, k) => '<button class="th" type="button" data-ci="' + k + '" aria-pressed="' + (k === cur.ci) + '" aria-label="' + x.n + '">' + g(p.sym, x) + '</button>').join('');
    $('pdColors').innerHTML = p.colors.map((x, k) => '<button class="sw' + (x.s ? ' stripe' : '') + '" type="button" data-ci="' + k + '" aria-pressed="' + (k === cur.ci) + '" aria-label="' + x.n + '" title="' + x.n + '" style="--c:' + x.h + ';--s:' + (x.s || x.h) + '"></button>').join('');
    $('pdSizes').innerHTML = p.sizes.map((s) => '<button class="sz" type="button" data-size="' + s + '" aria-pressed="' + (s === cur.size) + '"' + (p.out.includes(s) ? ' disabled aria-label="' + s + ', épuisé"' : '') + '>' + s + '</button>').join('');
    $('pdQty').textContent = cur.qty;
    $('pdAdd').textContent = (small() ? 'Ajouter · ' : 'Ajouter au panier · ') + fmt(p.price * cur.qty);
    $('pdStock').innerHTML = cur.size && cur.size === p.low ? '<b>Plus que 2 pièces</b> dans cette taille.' : cur.size ? 'En stock, expédié sous 24 heures.' : p.out.length ? 'Les tailles barrées sont épuisées.' : 'Toutes les tailles sont en stock.';
  }
  function openProduct(id, ci, from) {
    const p = byId(id);
    if (!p) return;
    cur = { p, ci: ci || 0, size: p.sizes.length === 1 ? p.sizes[0] : '', qty: 1 };
    $('pdCat').textContent = p.cat + ' · ' + p.mat;
    $('pdName').textContent = p.name;
    $('pdPrice').textContent = fmt(p.price);
    $('pdBadge').innerHTML = badgeHtml(p.badge);
    $('pdDesc').textContent = p.desc;
    $('pdSizeMsg').textContent = '';
    $('pdGuide').innerHTML = GUIDE[p.sizes === CLO ? 'clo' : p.sizes === NUM ? 'num' : 'one'];
    $('tp1').innerHTML = '<ul>' + p.comp.map((x) => '<li>' + x + '</li>').join('') + '</ul>';
    $('pdPair').innerHTML = p.pair.map(byId).map((x) => '<button class="pair-card" type="button" data-open="' + x.id + '"><i style="--c:' + x.colors[0].h + '">' + g(x.sym, x.colors[0]) + '</i><b>' + x.name + '</b>' + fmt(x.price) + '</button>').join('');
    selectTab(0);
    paintProduct(); paintWish();
    show(pd, from);
  }
  $('pdThumbs').addEventListener('click', (e) => { const b = e.target.closest('[data-ci]'); if (b) { cur.ci = Number(b.dataset.ci); paintProduct(); } });
  $('pdColors').addEventListener('click', (e) => { const b = e.target.closest('[data-ci]'); if (b) { cur.ci = Number(b.dataset.ci); paintProduct(); $('pdColors').querySelector('[aria-pressed="true"]').focus(); } });
  $('pdSizes').addEventListener('click', (e) => { const b = e.target.closest('[data-size]'); if (b && !b.disabled) { cur.size = b.dataset.size; $('pdSizeMsg').textContent = ''; paintProduct(); $('pdSizes').querySelector('[aria-pressed="true"]').focus(); } });
  $('pdMinus').addEventListener('click', () => { cur.qty = Math.max(1, cur.qty - 1); paintProduct(); });
  $('pdPlus').addEventListener('click', () => { cur.qty = Math.min(9, cur.qty + 1); paintProduct(); });
  $('pdWish').addEventListener('click', () => toggleWish(cur.p.id));
  $('pdPair').addEventListener('click', (e) => { const b = e.target.closest('[data-open]'); if (b) { openProduct(b.dataset.open, 0); $('pdName').setAttribute('tabindex', '-1'); $('pdName').focus(); } });
  $('pdAdd').addEventListener('click', () => {
    if (!cur.size) {
      $('pdSizeMsg').textContent = 'Choisissez une taille';
      const s = $('pdSizes'); s.classList.remove('shake'); void s.offsetWidth; s.classList.add('shake');
      const first = s.querySelector('.sz:not([disabled])'); if (first) first.focus();
      return;
    }
    addToCart(cur.p.id, cur.ci, cur.size, cur.qty);
    pd.close();
    openCart();
  });
  const tabBtns = [$('tb1'), $('tb2'), $('tb3')], tabPanels = [$('tp1'), $('tp2'), $('tp3')];
  function selectTab(i, focus) {
    tabBtns.forEach((b, k) => { b.setAttribute('aria-selected', String(k === i)); b.tabIndex = k === i ? 0 : -1; tabPanels[k].hidden = k !== i; });
    if (focus) tabBtns[i].focus();
  }
  tabBtns.forEach((b, i) => {
    b.addEventListener('click', () => selectTab(i));
    b.addEventListener('keydown', (e) => { if (e.key === 'ArrowRight') selectTab((i + 1) % 3, true); if (e.key === 'ArrowLeft') selectTab((i + 2) % 3, true); });
  });

  /* ---------- Panier ---------- */
  const lineKey = (i) => i.id + '|' + i.ci + '|' + i.size;
  const sub = () => cart.reduce((s, i) => s + byId(i.id).price * i.qty, 0);
  const pieces = () => cart.reduce((s, i) => s + i.qty, 0);
  const discount = () => promoCode === 'BIENVENUE10' ? Math.round(sub() * 10) / 100 : 0;
  const shipCost = (mode) => mode === 'retrait' || sub() - discount() >= FREE ? 0 : SHIP[mode];
  function addToCart(id, ci, size, qty) {
    const item = { id, ci, size, qty }, ex = cart.find((i) => lineKey(i) === lineKey(item));
    if (ex) ex.qty = Math.min(9, ex.qty + qty); else cart.push(item);
    syncCart(true);
    toast(byId(id).name + ' ajouté au panier');
  }
  function sumRows(mode) {
    const d = discount(), rows = ['<div><dt>Sous-total</dt><dd>' + fmt(sub()) + '</dd></div>'];
    if (d) rows.push('<div class="minus"><dt>Code BIENVENUE10</dt><dd>− ' + fmt(d) + '</dd></div>');
    if (mode) { const s = shipCost(mode); rows.push('<div><dt>' + SHIP_N[mode] + '</dt><dd>' + (s ? fmt(s) : 'Offert') + '</dd></div>'); }
    else rows.push('<div><dt>Livraison</dt><dd>choisie à l\'étape suivante</dd></div>');
    rows.push('<div class="total"><dt>Total</dt><dd>' + fmt(Math.round((sub() - d + (mode ? shipCost(mode) : 0)) * 100) / 100) + '</dd></div>');
    return rows.join('');
  }
  function syncCart(bump) {
    save('garance-cart', cart);
    const n = pieces();
    ['cartN', 'cartN2'].forEach((id) => { const b = $(id); b.textContent = n; b.hidden = n === 0; if (bump) { b.classList.remove('bump'); void b.offsetWidth; b.classList.add('bump'); } });
    $('cartCount').textContent = n ? '· ' + n + (n > 1 ? ' articles' : ' article') : '';
    const body = $('cartBody');
    if (!cart.length) {
      body.innerHTML = '<div class="cart-empty"><i>' + g('sac', { h: '#e4d9c2' }) + '</i><h3>Votre panier est vide.</h3><p class="muted">Les belles choses sont juste derrière.</p><button class="btn btn-ink" type="button" data-close>Voir la boutique</button></div>';
      $('cartFoot').hidden = true; $('shipBar').hidden = true;
      return;
    }
    $('cartFoot').hidden = false; $('shipBar').hidden = false;
    body.innerHTML = cart.map((i, k) => {
      const p = byId(i.id), c = p.colors[i.ci];
      return '<div class="ci"><button class="ci-art" type="button" data-open="' + p.id + '" data-ci="' + i.ci + '" aria-label="Voir ' + p.name + '" style="--c:' + c.h + '">' + g(p.sym, c) + '</button>' +
        '<div class="ci-main"><b>' + p.name + '</b><span>' + c.n + ' · taille ' + i.size + '</span>' +
        '<div class="qty" role="group" aria-label="Quantité de ' + p.name + '"><button type="button" data-q="-1" data-k="' + k + '" aria-label="Retirer un">−</button><output>' + i.qty + '</output><button type="button" data-q="1" data-k="' + k + '" aria-label="Ajouter un">+</button></div></div>' +
        '<div class="ci-side"><b>' + fmt(p.price * i.qty) + '</b><button class="rm" type="button" data-rm="' + k + '">Retirer</button></div></div>';
    }).join('');
    const rest = Math.round((FREE - (sub() - discount())) * 100) / 100;
    $('shipTxt').innerHTML = rest > 0 ? 'Plus que <b>' + fmt(rest) + '</b> pour la livraison offerte.' : '<b>Livraison offerte</b> sur cette commande.';
    $('shipFill').style.width = Math.min(100, Math.round((sub() - discount()) / FREE * 100)) + '%';
    $('cartSum').innerHTML = sumRows(null);
  }
  function openCart(from) { syncCart(false); show(cartD, from); }
  $('btnCart').addEventListener('click', (e) => openCart(e.currentTarget));
  $('tabCart').addEventListener('click', (e) => openCart(e.currentTarget));
  $('cartBody').addEventListener('click', (e) => {
    const q = e.target.closest('[data-q]'), rm = e.target.closest('[data-rm]'), o = e.target.closest('[data-open]');
    if (q) {
      const it = cart[Number(q.dataset.k)]; it.qty += Number(q.dataset.q);
      if (it.qty < 1) cart.splice(Number(q.dataset.k), 1); else it.qty = Math.min(9, it.qty);
      syncCart(false);
      const again = $('cartBody').querySelector('[data-q="' + q.dataset.q + '"][data-k="' + q.dataset.k + '"]'); if (again) again.focus();
    } else if (rm) { const p = byId(cart[Number(rm.dataset.rm)].id); cart.splice(Number(rm.dataset.rm), 1); syncCart(false); toast(p.name + ' retiré du panier'); }
    else if (o) { cartD.close(); openProduct(o.dataset.open, Number(o.dataset.ci)); }
  });
  $('codeForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const v = $('code').value.trim().toUpperCase(), m = $('codeMsg');
    if (v === 'BIENVENUE10') { promoCode = v; m.textContent = 'Code appliqué : 10 % de réduction.'; m.classList.remove('bad'); }
    else { promoCode = ''; m.textContent = v ? 'Ce code n\'est pas valable.' : 'Saisissez un code.'; m.classList.add('bad'); }
    syncCart(false);
  });

  /* ---------- Commande (simulation) ---------- */
  const stepEls = [$('s1'), $('s2'), $('s3'), $('s4')];
  let step = 0;
  const shipMode = () => (co.querySelector('input[name="ship"]:checked') || {}).value || 'retrait';
  function paintCo() {
    const mode = shipMode();
    $('coItems').innerHTML = cart.map((i) => { const p = byId(i.id), c = p.colors[i.ci]; return '<li><i style="--c:' + c.h + '">' + g(p.sym, c) + '</i><span>' + p.name + (i.qty > 1 ? ' × ' + i.qty : '') + '<small>' + c.n + ' · ' + i.size + '</small></span><b>' + fmt(p.price * i.qty) + '</b></li>'; }).join('');
    $('coSum').innerHTML = sumRows(mode);
    co.querySelectorAll('[data-ship]').forEach((e) => { const s = shipCost(e.dataset.ship); e.textContent = s ? fmt(s) : e.dataset.ship === 'retrait' ? 'Gratuit' : 'Offert'; });
    $('addr').hidden = mode !== 'domicile';
    $('payShop').hidden = mode !== 'retrait';
    if (mode !== 'retrait' && co.querySelector('input[name="pay"]:checked').value === 'Paiement en boutique') co.querySelector('input[name="pay"]').checked = true;
    const total = Math.round((sub() - discount() + shipCost(mode)) * 100) / 100;
    const shopPay = co.querySelector('input[name="pay"]:checked').value === 'Paiement en boutique';
    $('payBtn').textContent = shopPay ? 'Confirmer la commande (démonstration)' : 'Payer ' + fmt(total) + ' (démonstration)';
  }
  function goStep(n) {
    step = n;
    stepEls.forEach((el, i) => { el.hidden = i !== n; });
    [...$('coSteps').children].forEach((li, i) => { li.className = i < n ? 'ok' : i === n ? 'on' : ''; });
    $('coSteps').hidden = n === 3;
    paintCo();
    co.scrollTop = 0;
    const f = co.querySelector(['#cPrenom', 'input[name="ship"]:checked', 'input[name="pay"]:checked', '#doneT'][n]);
    if (f) f.focus({ preventScroll: true });
  }
  $('goPay').addEventListener('click', () => { if (!cart.length) return; cartD.close(); goStep(0); show(co); });
  const RULES = {
    cPrenom: (v) => v.length > 1, cNom: (v) => v.length > 1, cMail: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v),
    cTel: (v) => /^(?:\+33|0033|0)[1-9]\d{8}$/.test(v.replace(/[\s.\-]/g, '')), cAdr: (v) => v.length > 4, cCp: (v) => /^\d{5}$/.test(v), cVille: (v) => v.length > 1
  };
  function validate(ids) {
    let first = null;
    ids.forEach((id) => {
      const inp = $(id), ok = RULES[id](inp.value.trim());
      inp.closest('.field').classList.toggle('bad', !ok); inp.setAttribute('aria-invalid', String(!ok));
      if (!ok && !first) first = inp;
    });
    if (first) first.focus();
    return !first;
  }
  Object.keys(RULES).forEach((id) => $(id).addEventListener('input', () => { const f = $(id).closest('.field'); if (f.classList.contains('bad') && RULES[id]($(id).value.trim())) { f.classList.remove('bad'); $(id).setAttribute('aria-invalid', 'false'); } }));
  $('s1').addEventListener('submit', (e) => { e.preventDefault(); if (validate(['cPrenom', 'cNom', 'cMail', 'cTel'])) goStep(1); });
  $('s2').addEventListener('submit', (e) => { e.preventDefault(); if (shipMode() !== 'domicile' || validate(['cAdr', 'cCp', 'cVille'])) goStep(2); });
  $('s2').addEventListener('change', paintCo);
  $('s3').addEventListener('change', paintCo);
  co.querySelectorAll('[data-back]').forEach((b) => b.addEventListener('click', () => goStep(Number(b.dataset.back) - 1)));
  $('s3').addEventListener('submit', (e) => {
    e.preventDefault();
    const ok = $('cgv').checked;
    $('cgvErr').hidden = ok;
    if (!ok) { $('cgv').focus(); return; }
    const mode = shipMode(), num = 'GAR-' + String(Date.now() % 1000000).padStart(6, '0');
    const total = Math.round((sub() - discount() + shipCost(mode)) * 100) / 100;
    $('doneT').textContent = 'Merci ' + $('cPrenom').value.trim() + ', c\'est commandé.';
    $('doneP').textContent = 'Commande n° ' + num + ' · ' + fmt(total) + ' · ' + SHIP_N[mode].toLowerCase() + '. ' +
      (mode === 'retrait' ? 'Votre paquet vous attendrait en boutique dans deux heures.' : 'Votre colis partirait sous 24 heures.');
    cart = []; promoCode = ''; $('code').value = ''; $('codeMsg').textContent = ''; $('cgv').checked = false;
    syncCart(false);
    goStep(3);
  });
  $('doneBtn').addEventListener('click', () => co.close());

  /* ---------- Lettre d'information ---------- */
  $('news').addEventListener('submit', (e) => {
    e.preventDefault();
    const ok = RULES.cMail($('mail').value.trim());
    $('mailErr').hidden = ok; $('mailOk').hidden = !ok;
    $('mail').setAttribute('aria-invalid', String(!ok));
    if (!ok) { $('mail').focus(); return; }
    $('mailOk').textContent = 'Merci, c\'est noté. (Démonstration : aucune adresse n\'est enregistrée.)';
    $('mail').value = '';
  });

  /* ---------- Petites choses ---------- */
  let toastT;
  function toast(msg) { const t = $('toast'); t.textContent = msg; t.classList.add('on'); clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('on'), 2200); }

  const PROMOS = ['Livraison offerte dès 80 € d\'achat', 'Retrait gratuit en boutique, prêt en 2 heures', '10 % sur la première commande avec le code BIENVENUE10'];
  if (!reduce) { let pi = 0; setInterval(() => { const p = $('promo'); p.classList.add('out'); setTimeout(() => { pi = (pi + 1) % PROMOS.length; p.textContent = PROMOS[pi]; p.classList.remove('out'); }, 350); }, 4500); }

  (function () {
    const parts = new Intl.DateTimeFormat('fr-FR', { timeZone: 'Europe/Paris', weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false }).formatToParts(new Date());
    const get = (t) => (parts.find((p) => p.type === t) || {}).value || '';
    const day = get('weekday').replace('.', '').toLowerCase(), m = parseInt(get('hour'), 10) * 60 + parseInt(get('minute'), 10);
    const end = day === 'sam' ? 1170 : 1140, openDay = !['dim', 'lun'].includes(day);
    if (openDay && m >= 600 && m < end) $('openT').textContent = 'Ouvert en ce moment, jusqu\'à ' + (day === 'sam' ? '19 h 30' : '19 h');
    else { $('open').classList.add('off'); $('openT').textContent = openDay && m < 600 ? 'Fermé, ouvre à 10 h' : 'Fermé pour le moment'; }
  })();

  const T = { t1: ['manteau', { h: '#b98a55' }], t2: ['pull', { h: '#efe6d5', s: '#1e2a44' }], t3: ['sac', { h: '#efe6d5' }] };
  document.querySelectorAll('#collage .tile').forEach((t) => { const k = ['t1', 't2', 't3'].find((c) => t.classList.contains(c)); t.innerHTML = g(T[k][0], T[k][1]); });
  if (!reduce) {
    const tiles = [...document.querySelectorAll('#collage .tile')];
    let tick = false;
    window.addEventListener('scroll', () => {
      if (tick) return; tick = true;
      requestAnimationFrame(() => { const y = window.scrollY; if (y < 1200) tiles.forEach((t) => { t.style.transform = 'translateY(' + (-y * Number(t.dataset.depth)).toFixed(1) + 'px)'; }); tick = false; });
    }, { passive: true });
    const rb = $('ribbon'), copy = rb.firstElementChild.cloneNode(true); rb.appendChild(copy);
  }

  const rv = () => {
    const items = document.querySelectorAll('.rv:not(.in)');
    if ('IntersectionObserver' in window && !reduce) {
      const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -6% 0px', threshold: .06 });
      items.forEach((n) => io.observe(n));
    } else items.forEach((n) => n.classList.add('in'));
  };

  renderGrid(); syncWish(); syncCart(false); rv();
})();
