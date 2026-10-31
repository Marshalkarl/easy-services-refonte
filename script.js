(function(){
var p=location.pathname.split('/').pop()||'index.html';
var L=[['index.html','Accueil'],['services.html','Nos services'],['plateformes.html','Nos plateformes']];
var nav=L.map(function(l){return '<a href="'+l[0]+'"'+(p==l[0]?' class="on"':'')+'>'+l[1]+'</a>'}).join('')+'<a class="cta" href="contact.html">Contact</a>';
document.body.insertAdjacentHTML('afterbegin','<header><div class="w"><a href="index.html"><img src="img/logo.png" alt="Easy Services"></a><nav>'+nav+'</nav></div></header>');
var ex=L.concat([['contact.html','Contact']]).map(function(l){return '<li><a href="'+l[0]+'">'+l[1]+'</a></li>'}).join('');
document.body.insertAdjacentHTML('beforeend','<footer><div class="w"><div><img src="img/footer-logo.png" alt="Easy Services"><p>Informatique, finance et géolocalisation/tracking.</p></div><div><h4>Explorer</h4><ul>'+ex+'</ul></div><div><h4>Nous contacter</h4><p>+228 22 20 72 42 / 98 36 41 41</p><p>info@easyservices.tg</p><p>Adewui, non loin de l\'ambassade du Sénégal.</p></div></div><div class="fb">EASY SERVICES · Lomé, Togo</div></footer>'+
'<div id="cp"><div class="h">Assistant EASY SERVICES<button id="cx" aria-label="Fermer">✕</button></div><div class="bd"><span class="bu">Bonjour ! Comment puis-je vous aider ?</span><a href="services.html">Nos services</a><a href="plateformes.html">Nos plateformes</a><a href="contact.html">Demander un devis</a><a href="contact.html">Parler à un conseiller</a></div><form class="ft" action="contact.html"><input placeholder="Écrivez votre message..." aria-label="Message"><button>Envoyer</button></form></div>'+
'<button id="cb" aria-label="Ouvrir le chat"><svg viewBox="0 0 24 24"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"/></svg></button>');
var c=document.getElementById('cp');
document.getElementById('cb').onclick=function(){c.classList.toggle('on')};
document.getElementById('cx').onclick=function(){c.classList.remove('on')};
var f=document.getElementById('cf');
if(f)f.onsubmit=function(e){e.preventDefault();var d=new FormData(f);
location.href='mailto:info@easyservices.tg?subject='+encodeURIComponent(d.get('sujet')||'Contact')+'&body='+encodeURIComponent('Nom : '+d.get('nom')+'\nEmail : '+d.get('email')+'\nSociété : '+d.get('societe')+'\n\n'+d.get('message'))};
})();
