$(document).ready(function(){
    $("#header_menu, .vstup_zayvka").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

$(document).ready(function(){  
  $("#rus, #eng").click(function(){     
    $("html").attr("dir", "ltl"); 
  });
  $("#ara").click(function(){
    $("html").attr("dir", "rtl");
  });  
});

$(document).ready(function() {
    $('.lan').click(function(event) {
        $('.lanpole').toggleClass('active');
    });
});

$(document).ready(function() {
    $('#rus, #ara, #eng').click(function(event) {
        $('.lanpole').removeClass('active');
    });
});
$(document).ready(function() {
    $('.toggle_lang').click(function(event) {
        $('.light, .dark').toggleClass('active');
    });
});
$(document).ready(function() {
  $('.header__burger').click(function(event) {
    $('.header__burger, .header_menu, .mm').toggleClass('active');
    });
});

$(document).ready(function(){
  $('.about_menu, .services_menu, .shares_menu, .contacts_menu, #rus, #ara, #eng, .toggle_lang').click(function(event){
      $('.header_menu, .header__burger, .mm').removeClass('active');
  });
});
jQuery(document).ready(function($) {
  let t1 = $('.services_z1');
  let t2 = $('.services_z2');
  let t3 = $('.services_z3');
  let getT1Height = t1.outerHeight();
  let getT2Height = t2.outerHeight();
  let getT3Height = t3.outerHeight();
  let max = 0;
  let ar = [3];
  ar[0]=getT1Height;
  ar[1]=getT2Height;
  ar[2]=getT3Height;
  for (let i = 0; i < 2; i++){
    if(ar[i]>max)
      max=ar[i];
  }
  
    t1.css('min-height', max);
    t2.css('min-height', max);
    t3.css('min-height', max);  
});
jQuery(document).ready(function($) {
  let t1 = $('#services_vod1');
  let t2 = $('#services_vod2');
  let t3 = $('#services_vod3');
  let getT1Height = t1.outerHeight();
  let getT2Height = t2.outerHeight();
  let getT3Height = t3.outerHeight();
  let max = 0;
  let ar = [3];
  ar[0]=getT1Height;
  ar[1]=getT2Height;
  ar[2]=getT3Height;
  for (let i = 0; i < 3; i++){
    if(ar[i]>max)
      max=ar[i];
  }
  t1.css('min-height', max);
  t2.css('min-height', max);
  t3.css('min-height', max);  
});
jQuery(document).ready(function($) {
  let t1 = $('#pole1');
  let t2 = $('#pole2');
  let t3 = $('#pole3');
  let getT1Height = t1.outerHeight();
  let getT2Height = t2.outerHeight();
  let getT3Height = t3.outerHeight();
  let max = 0;
  let ar = [3];
  ar[0]=getT1Height;
  ar[1]=getT2Height;
  ar[2]=getT3Height;
  for (let i = 0; i < 3; i++){
    if(ar[i]>max)
      max=ar[i];
  }
  t1.css('min-height', max);
  t2.css('min-height', max);
  t3.css('min-height', max);  
});

jQuery(document).ready(function($) {
  let t1 = $('#how_text1');
  let t2 = $('#how_text2');
  let t3 = $('#how_text3');
  let t4 = $('#how_text4');
  let getT1Width = t1.outerWidth();
  let getT2Width = t2.outerWidth();
  let getT3Width = t3.outerWidth();
  let getT4Width = t4.outerWidth();
  let max = 0;
  let ar = [4];
  ar[0]=getT1Width;
  ar[1]=getT2Width;
  ar[2]=getT3Width;
  ar[3]=getT4Width;
  for (let i = 0; i < 4; i++){
    if(ar[i]>max)
      max=ar[i];
  }
  t1.css('min-width', max);
  t2.css('min-width', max);
  t3.css('min-width', max);  
  t4.css('min-width', max);  
});


 jQuery(document).ready(function($){
   let ar = [3];
   ar[0] = $('#pole1');
   ar[1] = $('#pole2');
   ar[2] = $('#pole3');
   let i = 0;
    $('.services_photo').click(function(event) {
         if(i==2){
           ar[i].removeClass('active');
           ar[i-2].addClass('active');
           i=0;
          
         }
         else{
           ar[i].removeClass('active');
           ar[i+1].addClass('active');
           i+=1;
         }
     });
 });

$(document).ready(function() {
  $('.services_photo').click(function(event) {
    $('#help_text1, #help_text2, #help_text3').addClass('active');
    });
});


jQuery(document).ready(function($) {
  let t1 = $('#how_text1');
  let t2 = $('#how_text2');
  let t3 = $('#how_text3');
  let t4 = $('#how_text4');
  let getT1Height = t1.outerHeight();
  let getT2Height = t2.outerHeight();
  let getT3Height = t3.outerHeight();
  let getT4Height = t4.outerHeight();
  let max = 0;
  let ar = [4];
  ar[0]=getT1Height;
  ar[1]=getT2Height;
  ar[2]=getT3Height;
  ar[3]=getT4Height;
  for (let i = 0; i < 3; i++){
    if(ar[i]>max)
      max=ar[i];
  }
  t1.css('min-height', max);
  t2.css('min-height', max);
  t3.css('min-height', max);  
  t4.css('min-height', max);  
});



$(document).ready(function() {
  $('#services_b1').click(function(event) {
    $('#services_t1').toggleClass('active');
    });
});
$(document).ready(function() {
  $('#services_b1').click(function(event) {
    $('#services_t2, #services_t3').removeClass('active');
    });
});

$(document).ready(function() {
  $('#services_b2').click(function(event) {
    $('#services_t2').toggleClass('active');
    });
$(document).ready(function() {
  $('#services_b2').click(function(event) {
    $('#services_t3, #services_t1').removeClass('active');
    });
});  
});$(document).ready(function() {
  $('#services_b3').click(function(event) {
    $('#services_t3').toggleClass('active');
    });
});
$(document).ready(function() {
  $('#services_b3').click(function(event) {
    $('#services_t2, #services_t1').removeClass('active');
    });
});

$(document).ready(function() {
  $('.toggle_lang').click(function(event) {
    $('.toggle_lang').toggleClass('active');
    });
});

const btn = document.querySelector('.toggle_lang');

  function initialState(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
  }

  initialState('light-theme');

  function toggleTheme() { 
    if(localStorage.getItem('theme') == 'dark-theme'){
      initialState('light-theme');
    }else
      initialState('dark-theme');
  }

  btn.addEventListener('click', (e) => {
    toggleTheme();
  });  
