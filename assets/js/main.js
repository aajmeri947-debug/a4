(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){function $(i){return document.getElementById(i);}
var P=[['Top handle','Lets you carry the bag by hand, like a briefcase.','Check: stitched and riveted into the body, not just glued.'],['Flap','Covers the main compartment and protects contents from rain.','Check: it should close easily over a full load.'],['Straps and buckles','Fasten the flap. Many modern satchels hide a magnetic or push-lock clasp behind the buckles.','Check: solid metal buckles, leather that does not crack at the holes.'],['Body and gusset','The main bag. The gusset is the side panel that sets how deep it is.','Check: an expandable gusset adds room without making the bag bulky.'],['D-rings','Metal rings that hold the shoulder strap.','Check: welded or solid rings, sewn in with a reinforced tab.'],['Base and feet','The bottom panel takes the most wear.','Check: a reinforced base or metal feet keep it clean and dry.']];
var pins=[].slice.call(document.querySelectorAll('.sa-pin'));if(pins.length){function sp(n){pins.forEach(function(p,i){p.classList.toggle('on',i===n);p.setAttribute('aria-label','Part '+(i+1)+': '+P[i][0]);});$('an-o').innerHTML='<h3>'+(n+1)+'. '+P[n][0]+'</h3><p>'+P[n][1]+'</p><small>'+P[n][2]+'</small>';}pins.forEach(function(p,i){p.addEventListener('click',function(){sp(i);});});sp(0);}
var W=[['How do you get to work?',[['Train or bus','Standing, one hand busy','t'],['Car','Short walks, bag on the seat','c'],['Bicycle','Both hands on the bars','b'],['On foot','Long walks every day','w']]],['What do you carry most days?',[['Light','Tablet, notebook, a pen','l'],['Medium','Laptop and a few documents','m'],['Heavy','Laptop, charger, files and lunch','h']]],['What is your dress code?',[['Formal','Suits and polished shoes','f'],['Smart casual','Jacket, no tie','s'],['Relaxed','Jeans and trainers','r']]]];
var wz=$('wz');if(wz){var st=0,a=[];var li=[].slice.call($('wz-s').children);function mark(){li.forEach(function(l,i){l.className=i<st?'done':(i===st?'on':'');});}
 function q(){mark();if(st>=3){res();return;}var h='<h3>'+W[st][0]+'</h3><div class="sa-opts">';W[st][1].forEach(function(o){h+='<button type="button" data-v="'+o[2]+'"><b>'+o[0]+'</b><span>'+o[1]+'</span></button>';});wz.innerHTML=h+'</div>';
  [].forEach.call(wz.querySelectorAll('button'),function(b){b.addEventListener('click',function(){a[st]=b.getAttribute('data-v');st++;q();});});wz.querySelector('button').focus({preventScroll:true});}
 function res(){var c=a[0],l=a[1],d=a[2],s,why=[];
  if(c==='b')s='Messenger';else if(c==='w'&&l==='h')s='Backpack';else if(d==='f'&&l!=='h')s='Briefcase';else if(d==='r'&&l==='l')s='Tote';else s='Satchel';
  if(c==='t')why.push('A top handle plus a shoulder strap gives you a free hand on the train.');if(c==='b')why.push('A cross-body strap stays put while you ride.');if(c==='w')why.push('Spreading the weight matters on a daily walk.');
  if(l==='h')why.push('Look for a padded strap and an expandable gusset.');if(l==='l')why.push('A slimmer bag will feel lighter and look sharper.');
  if(d==='f')why.push('Smooth, darker leather and minimal hardware suit formal clothes.');if(d==='r')why.push('Oiled or suede leathers suit a relaxed wardrobe.');
  li.forEach(function(x){x.className='done';});wz.innerHTML='<div class="sa-res"><small>Your shape</small><h3>'+s+'</h3><ul><li>'+why.join('</li><li>')+'</li></ul><button type="button" id="wz-x">Start again</button></div>';$('wz-x').addEventListener('click',function(){st=0;a=[];q();});}
 q();}
var C=[['Jan','Wipe off winter salt and grime',0],['Feb','Light condition, test a hidden spot first',1],['Mar','Check stitching at the handle',0],['Apr','Spring clean: empty and air the lining',1],['May','Brush and wipe after showers',0],['Jun','Keep out of hot cars and direct sun',0],['Jul','Store with paper stuffing if unused',0],['Aug','Check buckles and D-rings',0],['Sep','Full condition before autumn rain',1],['Oct','Treat with a leather protector',0],['Nov','Dry naturally if soaked, never by a heater',0],['Dec','Year-end clean and inspection',1]];
var cal=$('cal');if(cal){var now=new Date().getMonth(),h='';C.forEach(function(m,i){h+='<button type="button" data-i="'+i+'" class="'+(m[2]?'big ':'')+(i===now?'now':'')+'"><b>'+m[0]+'</b><span>'+m[1]+'</span><i>'+(m[2]?'Main task':'Quick task')+'</i></button>';});cal.innerHTML=h;
 function cn(i){$('cal-n').innerHTML='<b>'+C[i][0]+':</b> '+C[i][1]+'. '+(C[i][2]?'Set aside about 20 minutes.':'Five minutes is enough.');}
 [].forEach.call(cal.querySelectorAll('button'),function(b){b.addEventListener('click',function(){cn(+b.getAttribute('data-i'));});});cn(now);}
})();
