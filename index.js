var header1 = $(".header1");

// Change header1 text after a short pause
setTimeout(function() {
  header1.text("Meet Spyridon Tasios");
  header1.animate({opacity: 1}, 1000);
}, 1300);

$(document).ready(function() {
    $('.header2').delay(1500).animate({ opacity: 1 }, 1000);
    $('.header3').delay(2500).animate({ opacity: 1 }, 1000);
    $('.header4').delay(3500).animate({ opacity: 1 }, 1000);
    $('.header5').delay(4500).animate({ opacity: 1 }, 1000);
  });