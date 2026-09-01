
(function(){
  var t=document.querySelector('.ast-nav-toggle');
  var n=document.getElementById('ast-primary-nav');
  if(t&&n){t.addEventListener('click',function(){n.classList.toggle('open');});
    n.querySelectorAll('li').forEach(function(li){
      var sub=li.querySelector(':scope > .ast-sub');
      if(sub&&window.matchMedia('(max-width:782px)').matches){
        var a=li.querySelector(':scope > a');
        if(a){a.addEventListener('click',function(e){
          if(sub.offsetParent!==null){e.preventDefault();li.classList.toggle('open');}});}
      }});}
  var b=document.getElementById('ast-top');
  if(b){window.addEventListener('scroll',function(){
    b.classList.toggle('show',window.scrollY>480);});
    b.addEventListener('click',function(){window.scrollTo({top:0,behavior:'smooth'});});}
  var f=document.getElementById('ast-search-form');
  if(f){f.addEventListener('submit',function(e){
    e.preventDefault();
    var q=document.getElementById('ast-search-input').value.trim();
    if(q){window.location.href='/search/?q='+encodeURIComponent(q);}
  });}
})();
