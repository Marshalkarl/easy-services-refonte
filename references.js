/* ===== NOS RÉFÉRENCES =====
   Source : document « NOS_REFERENCES.docx » (client, domaine, pays, solutions).
   Logos : - anciens logos  → https://easyservices.tg/images/logo-partenaires/
           - nouveaux logos → dossier local img/clients/ (à uploader avec le site)
   Les références sans logo affichent leur nom. */
const LOGOS="https://easyservices.tg/images/logo-partenaires/";
const L="img/clients/";

/* Solutions (clé → libellé affiché) */
const SOLUTIONS={
  antivirus:"Antivirus",
  cloud:"Cloud",
  sms:"SMS",
  geo:"Géolocalisation",
  paiement:"Paiement & monétique",
  assistance:"Assistance IT",
  solutionit:"Solution IT",
  equipement:"Équipement IT",
  reseaux:"Réseaux",
  audit:"Audit & conseil"
};

/* [ nom, logo, pays (séparés par des virgules), domaine, solutions (clés séparées par des virgules), site web ]
   Logo : nom de fichier seul = dossier du site actuel ; L+"fichier" = img/clients/
   Pour ajouter une référence : copie une ligne, change les valeurs. Logo ou site inconnu → "" */
const DATA=[
  /* --- Déjà présentes sur le site --- */
  ["Moov Africa","moov.png","Togo","Télécoms","sms","https://moov-africa.tg/"],
  ["Yas","yas.png","Togo","Télécoms","sms","https://yas.tg/"],
  ["Orabank","orabank.png","Togo","Banque","sms","https://www.orabank.net/fr"],
  ["Ecobank","ecobank.png","Togo","Banque","sms","https://ecobank.com/"],
  ["ADEC","adec.png","Côte d’Ivoire","Microfinance","antivirus,cloud,sms,assistance","https://ci-adec.com/"],
  ["Bboxx","BBOX.png","Togo","Énergie solaire","geo","https://www.bboxx.com/"],
  ["Carrefour CI","carrefour.jpg","Côte d’Ivoire","Distribution","solutionit","https://carrefour.ci/"],
  ["Caurie MF","caurie%20mf.png","Sénégal","Microfinance","antivirus,cloud","https://cauriemf.com/"],
  ["CERGIS","cergis.png","Togo,Côte d’Ivoire","Éditeur de solution bancaire","antivirus",""],
  ["Credit Access","credit%20access.png","Côte d’Ivoire","Microfinance","antivirus,cloud,sms,geo,paiement,assistance","https://creditaccess.ci/"],
  ["EDG Gabon","edg%20gabon.png","Gabon","Microfinance","antivirus,cloud,sms,paiement","https://edgemf.net/"],
  ["IFOD SA","ifod.jpg","RDC","Microfinance","antivirus,cloud,assistance","https://ifodsa.cd/"],
  ["SIAB Togo","logo-siab-togo.jpg","Togo","Banque","antivirus","https://siabtogo.com/"],
  ["Microsen","microsen.jpg","Sénégal","Microfinance","solutionit","https://microsen.com/"],
  ["Renaprov","renaprov.jpg","Cameroun","Microfinance","antivirus,cloud,sms,assistance","https://renaprovfinance.cm/"],
  ["Smico","smico.jpg","RDC","Microfinance","antivirus,cloud,assistance","https://www.smico.net/"],
  ["Sunu Bank","sunu%20bank.png","Togo","Banque","antivirus","https://www.sunubank.tg/"],
  ["Tonege","tonege.jpg","Togo","PME / Distribution","antivirus","https://tonege.servicesdunet.com/"],
  ["Tujenge Pamoja","tujengue%20pamoja.png","RDC","Microfinance","antivirus,cloud,assistance","https://imf-tujengepamoja.com/"],

  /* --- Références ajoutées (document NOS_REFERENCES) --- */
  ["EYON International",L+"eyon-international.png","Bénin","Transport","sms,geo,assistance","https://groupeyon.com/"],
  ["La Fontaine",L+"la-fontaine.png","Togo","Eau minérale","geo",""],
  ["Togo Phenix Corporation",L+"togo-phenix.jpg","Togo","PME / Pétrole","antivirus",""],
  ["COMEC",L+"comec.png","Togo","Coopérative militaire","antivirus,cloud,sms","https://www.comec.tg/"],
  ["FINAM",L+"finam.svg","Gabon,Congo","Microfinance","antivirus,cloud,assistance","https://www.finamgabon.com/"],
  ["CEC Cameroun",L+"cec-cameroun.png","Cameroun","Microfinance","antivirus,cloud,sms,assistance","https://ceccameroun.net/"],
  ["COOPEC CAHI",L+"coopec-cahi.jpg","RDC","Coopérative banque","antivirus,cloud,sms,assistance","https://www.coopeccahi.org/"],
  ["UIMCEC",L+"uimcec.jpg","Sénégal","Microfinance","antivirus,cloud","https://www.uimcec.sn/"],
  ["MDB",L+"mdb.png","Bénin","Microfinance","antivirus,cloud,sms,equipement","https://www.mdbbenin.com/"],
  ["FIN’Elle",L+"fin-elle.png","Côte d’Ivoire","Microfinance","cloud","https://www.fin-elle.com/"],
  ["PEBCO",L+"pebco.png","Bénin","Microfinance","antivirus,cloud,sms,solutionit","https://bj.linkedin.com/company/pebcobethesda"],
  ["Lafarge CI",L+"lafarge-ci.png","Côte d’Ivoire","Ciment","solutionit","https://suppliers-lhci.com/supplier/connexion"],
  ["AMIFA",L+"amifa.svg","Maroc,Sénégal,Gabon,Mali,Niger,Guinée Conakry","Microfinance","sms",""],
  ["UBTEC",L+"ubtec.png","Burkina Faso","Microfinance","antivirus,cloud,reseaux","https://ubtec-naam.org/"],
  ["Beetle Heritage",L+"beetle-heritage.png","Cameroun","Industrie – Alimentation","cloud","https://www.beetleheritage.com/"],
  ["Lafricamobile",L+"lafricamobile.png","Sénégal","Agrégateur SMS","sms","https://lafricamobile.com/"],
  ["Bisou Bisou",L+"bisou-bisou.jpg","RDC","Microfinance","cloud,assistance",""],
  ["Eliada",L+"eliada.jpg","Togo","Microfinance","antivirus,cloud,sms,assistance","https://tg.linkedin.com/company/mutuelle-eliada"],
  ["Coecept",L+"coecept.png","Togo","Microfinance","antivirus,sms","https://coecept.net/"],
  ["Renaca",L+"renaca.jpg","Bénin","Microfinance","antivirus,equipement","https://renacabenin.org/"],
  ["Segam Togo",L+"segam-togo.png","Togo","Location de voiture","sms","https://tg.linkedin.com/company/segam-sarl"],
  ["Assilassime",L+"assilassime.png","Togo","Microfinance","sms","https://www.assilassime.org/"],
  ["ESS Finance",L+"ess-finance.jpg","Gabon","Microfinance","sms",""],
  ["Sibafi",L+"sibafi.png","Gabon","Microfinance","sms","https://sibafi.com/"],
  ["Innov Finance",L+"innov-finance.png","Côte d’Ivoire","Microfinance","antivirus,cloud,sms,assistance","https://www.linkedin.com/company/innov-finance"],
  ["Konsort Group",L+"konsort-group.png","Côte d’Ivoire","Logistique – Mining","antivirus",""],
  ["Transship","","Côte d’Ivoire","Logistique","antivirus",""],
  ["Afincap","","Côte d’Ivoire","Cabinet conseil","antivirus",""],
  ["Adenka",L+"adenka.png","Côte d’Ivoire","Audits & Conseils","antivirus","https://adenka.ci/"],
  ["MUCREFCI",L+"mucrefci.jpg","Côte d’Ivoire","Microfinance","audit","https://www.mucrefci.org/"],
  ["Capsikan",L+"capsikan.png","Côte d’Ivoire","Négoce international","antivirus","https://capsikanci.com/fr/"],
  ["Komnayah",L+"komnayah.jpg","Côte d’Ivoire","Publicité, marketing","antivirus",""]
];
const list_=s=>s?s.split(',').map(x=>x.trim()).filter(Boolean):[];
/* Logo : chemin local (img/…) ou URL complète utilisés tels quels, sinon dossier du site actuel */
const logoSrc=f=>!f?'':/^(https?:|img\/)/.test(f)?f:LOGOS+f;
const REFS=DATA.map(d=>({n:d[0],img:logoSrc(d[1]),pays:list_(d[2]),dom:d[3]||'',s:list_(d[4]),url:d[5]||''}));

(function(){
  const $=id=>document.getElementById(id);
  const chipsS=$('chips'),sel=$('pays'),grid=$('grid');
  let srv='',pays='',shown=[];

  const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

  /* Listes dérivées des données */
  const paysList=[...new Set(REFS.flatMap(r=>r.pays))].sort((a,b)=>a.localeCompare(b,'fr'));
  const srvList=Object.keys(SOLUTIONS).filter(k=>REFS.some(r=>r.s.includes(k)));

  /* Les filtres se combinent (ET) */
  const match=(r,s,c)=>(!s||r.s.includes(s))&&(!c||r.pays.includes(c));

  /* Puces de solutions (créées ici, aucun changement HTML) */
  const wrap=document.createElement('div');wrap.className='ref-groups';
  chipsS.before(wrap);
  chipsS.className='ref-chips';chipsS.setAttribute('role','group');chipsS.setAttribute('aria-label','Filtrer par solution');
  const g=document.createElement('div');g.className='ref-group';
  g.innerHTML='<span class="ref-group-label">Solutions</span>';
  chipsS.innerHTML=[['','Toutes']].concat(srvList.map(k=>[k,SOLUTIONS[k]]))
    .map(([k,v])=>`<button type="button" class="ref-chip" data-k="${k}" aria-pressed="false">${v}<i></i></button>`).join('');
  g.appendChild(chipsS);wrap.appendChild(g);
  wrap.hidden=!srvList.length;

  /* Liste déroulante pays */
  sel.options[0].dataset.label='Tous les pays';
  paysList.forEach(p=>{const o=new Option(p,p);o.dataset.label=p;sel.add(o)});

  /* Compteurs animés */
  const countUp=(el,to)=>{let n=0;if(!to){el.textContent=0;return}const t=setInterval(()=>{n++;el.textContent=n;if(n>=to)clearInterval(t)},40)};
  countUp($('kRefs'),REFS.length);
  countUp($('kPays'),paysList.length);
  countUp($('kProd'),srvList.length);

  function refreshChips(){
    chipsS.querySelectorAll('.ref-chip').forEach(b=>{
      const k=b.dataset.k,on=k===srv;
      const n=REFS.filter(r=>match(r,k,pays)).length;
      b.classList.toggle('on',on);b.setAttribute('aria-pressed',on);
      b.querySelector('i').textContent=n;
      b.disabled=!on&&k!==''&&n===0;
    });
  }

  const logoHTML=r=>r.img
    ?`<img src="${r.img}" alt="${esc(r.n)}" loading="lazy" onerror="this.replaceWith(Object.assign(document.createElement('b'),{textContent:this.alt}))">`
    :`<b>${esc(r.n)}</b>`;

  function render(){
    shown=REFS.filter(r=>match(r,srv,pays));
    refreshChips();

    [...sel.options].forEach(o=>{
      const n=REFS.filter(r=>match(r,srv,o.value)).length;
      o.textContent=o.dataset.label+' ('+n+')';
      o.disabled=o.value!==''&&n===0&&o.value!==pays;
    });

    grid.innerHTML=shown.map((r,i)=>{
      const extra=r.s.length>3?`<span class="more">+${r.s.length-3}</span>`:'';
      return `<article class="ref-card" data-i="${i}" tabindex="0" role="button" aria-haspopup="dialog" aria-label="Voir les détails de ${esc(r.n)}" style="animation-delay:${Math.min(i,20)*40}ms">
      <div class="ref-logo">${logoHTML(r)}</div>
      <div class="ref-body"><h3>${esc(r.n)}</h3>
      ${r.dom?`<p class="ref-dom">${esc(r.dom)}</p>`:''}
      ${r.pays.length?`<p class="ref-pays">📍 ${esc(r.pays.join(' · '))}</p>`:''}
      <div class="ref-tags">${r.s.slice(0,3).map(k=>`<span>${esc(SOLUTIONS[k]||k)}</span>`).join('')}${extra}</div></div></article>`;
    }).join('');

    $('empty').hidden=shown.length>0;
    $('count').textContent=shown.length+(shown.length>1?' références':' référence');
  }

  /* ===== Pop-up de détails ===== */
  const dlg=document.createElement('dialog');
  dlg.className='ref-modal';dlg.setAttribute('aria-labelledby','refModalTitle');
  document.body.appendChild(dlg);

  function openModal(r){
    dlg.innerHTML=`<button type="button" class="ref-modal-x" aria-label="Fermer">&times;</button>
      <div class="ref-modal-logo">${logoHTML(r)}</div>
      <h2 id="refModalTitle">${esc(r.n)}</h2>
      <dl class="ref-modal-info">
        ${r.dom?`<div><dt>Domaine</dt><dd>${esc(r.dom)}</dd></div>`:''}
        ${r.pays.length?`<div><dt>${r.pays.length>1?'Pays':'Pays'}</dt><dd>${esc(r.pays.join(', '))}</dd></div>`:''}
        ${r.s.length?`<div><dt>Solutions</dt><dd class="ref-tags">${r.s.map(k=>`<span>${esc(SOLUTIONS[k]||k)}</span>`).join('')}</dd></div>`:''}
      </dl>
      ${r.url?`<a class="ref-site" href="${esc(r.url)}" target="_blank" rel="noopener noreferrer">Visiter le site ↗</a>`:''}`;
    dlg.showModal();
    document.body.classList.add('ref-lock');
  }
  dlg.addEventListener('click',e=>{if(e.target===dlg||e.target.closest('.ref-modal-x'))dlg.close()});
  dlg.addEventListener('close',()=>document.body.classList.remove('ref-lock'));

  const openFrom=el=>{const c=el.closest('.ref-card');if(c)openModal(shown[+c.dataset.i])};
  grid.addEventListener('click',e=>openFrom(e.target));
  grid.addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===' ')&&e.target.classList.contains('ref-card')){e.preventDefault();openFrom(e.target)}});

  /* ===== Filtres ===== */
  chipsS.addEventListener('click',e=>{
    const b=e.target.closest('.ref-chip');if(!b||b.disabled)return;
    srv=b.dataset.k;render();
  });
  sel.addEventListener('change',()=>{pays=sel.value;render()});
  $('reset').addEventListener('click',()=>{srv=pays='';sel.value='';render()});
  render();
})();