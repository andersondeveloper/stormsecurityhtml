// JavaScript Document

// Ancora / Scrool  //
jQuery(document).ready(function($) {
 $(".scroll").click(function(event) {
  event.preventDefault();
  $('html,body').animate({scrollTop: $(this.hash).offset().top}, 800);
 });
// Ancora / Scrool  //


//Plugin Twitter//
 !function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0], p = /^http:/.test(d.location) ? 'http' : 'https';
  if (!d.getElementById(id)) {
   js = d.createElement(s);
   js.id = id;
   js.src = p + '://platform.twitter.com/widgets.js';
   fjs.parentNode.insertBefore(js, fjs);
  }
 }(document, 'script', 'twitter-wjs');
//Plugin Twitter//


// Hover/Active Menu //
 $(window).load(function() {
  $('.menu ul li a').on('click', function() {
   $('.menu ul li').children('span').removeClass('ativo');
   $(this).parent().children('span').addClass('ativo');
  });
 });
// Hover/Active Menu //

// MENU MOBILE //
 $('.open-menu').css('display', 'none');
 $('.toggler-2').click(function() {
  $(this).toggleClass('menu-ativo', ' ');
  $('.open-menu').toggle();
 });
 // MENU MOBILE //

// CARROSEL // 
 (function() {
  var carouselContent, carouselIndex, carouselLength, firstClone, firstItem, isAnimating, itemWidth, lastClone, lastItem;

  carouselContent = $(".carousel__content");

  carouselIndex = 0;

  carouselLength = carouselContent.children().length;

  isAnimating = false;

  itemWidth = 100 / carouselLength;

  firstItem = $(carouselContent.children()[0]);

  lastItem = $(carouselContent.children()[carouselLength - 1]);

  firstClone = null;

  lastClone = null;

  carouselContent.css("width", carouselLength * 100 + "%");

  carouselContent.transition({
   x: (carouselIndex * -itemWidth) + "%"
  }, 0);

  $.each(carouselContent.children(), function() {
   return $(this).css("width", itemWidth + "%");
  });

  $(".nav--left").on("click", function() {
   if (isAnimating) {
    return;
   }
   isAnimating = true;
   carouselIndex--;
   if (carouselIndex === -1) {
    lastItem.prependTo(carouselContent);
    carouselContent.transition({
     x: ((carouselIndex + 2) * -itemWidth) + "%"
    }, 0);
    return carouselContent.transition({
     x: ((carouselIndex + 1) * -itemWidth) + "%"
    }, 1000, "easeInOutExpo", function() {
     carouselIndex = carouselLength - 1;
     lastItem.appendTo(carouselContent);
     carouselContent.transition({
      x: (carouselIndex * -itemWidth) + "%"
     }, 0);
     return isAnimating = false;
    });
   } else {
    return carouselContent.transition({
     x: (carouselIndex * -itemWidth) + "%"
    }, 1000, "easeInOutExpo", function() {
     return isAnimating = false;
    });
   }
  });

  $(".nav--right").on("click", function() {
   if (isAnimating) {
    return;
   }
   isAnimating = true;
   carouselIndex++;
   return carouselContent.transition({
    x: (carouselIndex * -itemWidth) + "%"
   }, 1000, "easeInOutExpo", function() {
    isAnimating = false;
    if (firstClone) {
     carouselIndex = 0;
     carouselContent.transition({
      x: (carouselIndex * -itemWidth) + "%"
     }, 0);
     firstClone.remove();
     firstClone = null;
     carouselLength = carouselContent.children().length;
     itemWidth = 100 / carouselLength;
     carouselContent.css("width", carouselLength * 100 + "%");
     $.each(carouselContent.children(), function() {
      return $(this).css("width", itemWidth + "%");
     });
     return;
    }
    if (carouselIndex === carouselLength - 1) {
     carouselLength++;
     itemWidth = 100 / carouselLength;
     firstClone = firstItem.clone();
     firstClone.addClass("clone");
     firstClone.appendTo(carouselContent);
     carouselContent.css("width", carouselLength * 100 + "%");
     $.each(carouselContent.children(), function() {
      return $(this).css("width", itemWidth + "%");
     });
     return carouselContent.transition({
      x: (carouselIndex * -itemWidth) + "%"
     }, 0);
    }
   });
  });

 }).call(this);
// CARROSEL //
});


// Validação de Dados //
function validar() {
 var nome = form1.nome.value;
 var email = form1.email.value;
 var mensagem = form1.mensagem.value;

 if (nome == "") {
  alert('Preencha o campo com seu nome!');
  form1.nome.focus();
  return false;
 }
 if (email == "") {
  alert('Preencha o campo com seu email!');
  form1.email.focus();
  return false;
 }



 function validaEmail(email) {
  var str = email;
  var filtro = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  if (filtro.test(str)) {
   return true;
  } else {
   return false;
  }
 }

 if (validaEmail(email)) {
 } else {
  alert("Digite um e-mail valido");
  form1.email.focus();
  return false;
 }


 if (mensagem == "") {
  alert('Preencha o campo com sua mensagem!');
  form1.mensagem.focus();
  return false;
 }
}
// Validação de Dados //






// Clipping //
$(document).ready(function() {

 $(".links-blogs li a").click(function() {
  var infoId = $(this).attr("data-id");
  var linha = $("#" + infoId).html();
  $(".portifolio").empty();
  $(".portifolio").append(linha);
  $(".links-blogs li a").removeClass("a-ativo");
  $(this).addClass("a-ativo");
 });

 $(".next").click(function() {
  $(".links-blogs li a.a-ativo").parent().next().children('a').trigger('click');
 });

 $(".prev").click(function() {
  $(".links-blogs li a.a-ativo").parent().prev().children('a').trigger('click');
 });




});



$(document).ready(function() {
 $("#selectmenu").change(function() {
  var carrega = $(this).val();
  var carregaSelect = $("#" + carrega).html();
  $(".portifolio").empty();
  $(".portifolio").append(carregaSelect);
 });
});
// Clipping //