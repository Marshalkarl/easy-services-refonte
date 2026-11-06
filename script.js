(function(){
var p=location.pathname.split('/').pop()||'index.html';
var L=[['index.html','Accueil'],['services.html','Nos services'],['plateformes.html','Nos plateformes'],['references.html','Nos références']];
var nav=L.map(function(l){return '<a href="'+l[0]+'"'+(p==l[0]?' class="on"':'')+'>'+l[1]+'</a>'}).join('')+'<a class="cta" href="contact.html">Contact</a>';
document.body.insertAdjacentHTML('afterbegin','<header><div class="w"><a href="index.html"><img src="img/logo.png" alt="Easy Services"></a><nav id="mn" aria-label="Navigation principale">'+nav+'</nav><button class="bg" id="mb" type="button" aria-label="Ouvrir le menu" aria-expanded="false" aria-controls="mn"><span></span><span></span><span></span></button></div><div class="ov" id="mo"></div></header>');
var ex=L.concat([['contact.html','Contact']]).map(function(l){return '<li><a href="'+l[0]+'">'+l[1]+'</a></li>'}).join('');
document.body.insertAdjacentHTML('beforeend','<footer><div class="w"><div><img src="img/footer-logo.png" alt="Easy Services"><p>EASY SERVICES est une société multi-services spécialisée dans les solutions informatiques et financières. Nous proposons également des solutions de géolocalisation et de suivi (tracking).</p></div><div><h4>Explorer</h4><ul>'+ex+'</ul></div><div><h4>Nous contacter</h4><p>+228 22 20 72 42 / 98 36 41 41</p><p>info@easyservices.tg</p><p>Adewui, non loin de l\'ambassade du Sénégal.</p></div></div><div class="fb">EASY SERVICES · Lomé, Togo</div></footer>'+
'<div id="cp"><div class="h">Assistant EASY SERVICES<button id="cx" aria-label="Fermer">✕</button></div><div class="bd"><span class="bu">Bonjour ! Comment puis-je vous aider ?</span><a href="services.html">Nos services</a><a href="plateformes.html">Nos plateformes</a><a href="contact.html">Demander un devis</a><a href="contact.html">Parler à un conseiller</a></div><form class="ft" action="contact.html"><input placeholder="Écrivez votre message..." aria-label="Message"><button>Envoyer</button></form></div>'+
'<button id="cb" aria-label="Ouvrir le chat"><svg viewBox="0 0 24 24"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"/></svg></button>');
var mb=document.getElementById('mb'),mn=document.getElementById('mn');
function menu(o){document.body.classList.toggle('menu-open',o);mb.setAttribute('aria-expanded',o);mb.setAttribute('aria-label',o?'Fermer le menu':'Ouvrir le menu')}
mb.onclick=function(){menu(!document.body.classList.contains('menu-open'))};
document.getElementById('mo').onclick=function(){menu(false)};
mn.addEventListener('click',function(e){if(e.target.closest('a'))menu(false)});
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&document.body.classList.contains('menu-open')){menu(false);mb.focus()}});
window.matchMedia('(min-width:1025px)').addEventListener('change',function(e){if(e.matches)menu(false)});
var c=document.getElementById('cp');
document.getElementById('cb').onclick=function(){c.classList.toggle('on')};
document.getElementById('cx').onclick=function(){c.classList.remove('on')};
var f=document.getElementById('cf');
if(f)f.onsubmit=function(e){e.preventDefault();var d=new FormData(f);
location.href='mailto:info@easyservices.tg?subject='+encodeURIComponent(d.get('sujet')||'Contact')+'&body='+encodeURIComponent('Nom : '+d.get('nom')+'\nEmail : '+d.get('email')+'\nSociété : '+d.get('societe')+'\n\n'+d.get('message'))};
})();

/* ===== Animations au scroll (toutes les pages) ===== */
(function(){
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches||!('IntersectionObserver' in window))return;

  // CSS d'animation (autonome)
  var st=document.createElement('style');
  st.textContent=
    '.js-an .an{opacity:0;transition:opacity .8s cubic-bezier(.2,.7,.2,1),transform .8s cubic-bezier(.2,.7,.2,1);will-change:opacity,transform}'+
    '.js-an .an-up{transform:translateY(34px)}'+
    '.js-an .an-l{transform:translateX(-56px)}'+
    '.js-an .an-r{transform:translateX(56px)}'+
    '.js-an .an-z{transform:scale(.92)}'+
    '.js-an .an.an-in{opacity:1;transform:none}';
  document.head.appendChild(st);
  document.documentElement.classList.add('js-an');

  var seen=new Set();
  function add(el,variant,delay){
    if(!el||seen.has(el))return;
    seen.add(el);
    el.classList.add('an','an-'+variant);
    if(delay)el.style.transitionDelay=delay+'s';
  }
  function each(sel,fn){document.querySelectorAll(sel).forEach(fn)}

  // 1. Colonnes des blocs "row" : image/colonne qui glisse, texte (.nv) qui se décompose
  each('main section:not(.hero-home) .row',function(row){
    var kids=Array.prototype.slice.call(row.children);
    kids.forEach(function(k,i){
      var side=(i===0)?'l':'r';
      if(k.classList.contains('nv')){
        Array.prototype.forEach.call(k.children,function(c,j){add(c,'up',.1+j*.12)});
      }else{
        add(k,side,0);
      }
    });
  });

  // 2. Blocs texte (.nv) restants, ex. section d'appel à l'action
  each('.nv',function(nv){
    Array.prototype.forEach.call(nv.children,function(c,j){add(c,'up',.05+j*.12)});
  });

  // 3. Titres directs, cartes, chiffres, bouton CTA
  each('main .w > .eb, main .w > h2',function(el){add(el,'up',0)});
  each('.cards',function(g){
    Array.prototype.forEach.call(g.querySelectorAll('.card'),function(c,i){add(c,'up',(i%3)*.12)});
  });
  each('.stats .w > div',function(el,i){add(el,'up',i*.1)});
  each('.mq',function(el){add(el,'up',.1)});
  each('.cta-row > a, .cta-row > button',function(el){add(el,'z',.45)});
  each('footer .w > div',function(el,i){add(el,'up',i*.1)});

  // Compteurs des chiffres clés (index)
  function countUp(b){
    var m=b.textContent.match(/^(\D*)(\d+(?:[\s\u00a0]\d{3})*)(.*)$/);
    if(!m)return;
    var end=parseInt(m[2].replace(/\D/g,''),10),dur=1400,t0=null;
    function step(t){
      if(!t0)t0=t;
      var p=Math.min((t-t0)/dur,1),e=1-Math.pow(1-p,3),n=Math.round(end*e);
      b.textContent=m[1]+(m[2].match(/\s|\u00a0/)?n.toLocaleString('fr-FR'):n)+m[3];
      if(p<1)requestAnimationFrame(step);else b.textContent=m[1]+m[2]+m[3];
    }
    requestAnimationFrame(step);
  }

  var io=new IntersectionObserver(function(entries){
    entries.forEach(function(en){
      if(!en.isIntersecting)return;
      var el=en.target;
      io.unobserve(el);
      el.classList.add('an-in');
      var b=el.matches('.stats .w > div')?el.querySelector('b'):null;
      if(b)countUp(b);
      // nettoyage : on rend l'élément à son état normal (le survol des cartes refonctionne)
      var wait=(parseFloat(el.style.transitionDelay)||0)*1000+1000;
      setTimeout(function(){
        el.classList.remove('an','an-up','an-l','an-r','an-z','an-in');
        el.style.transitionDelay='';el.style.willChange='';
      },wait);
    });
  },{threshold:.1,rootMargin:'0px 0px -5% 0px'});

  function start(){
  document.querySelectorAll('.an').forEach(function(el){io.observe(el)});
}
// on force le rendu de l'état « caché » avant de démarrer
void document.body.offsetHeight;
if(document.readyState==='complete'){
  requestAnimationFrame(function(){requestAnimationFrame(function(){setTimeout(start,150)})});
}else{
  window.addEventListener('load',function(){
    requestAnimationFrame(function(){requestAnimationFrame(function(){setTimeout(start,150)})});
  });
}
})();