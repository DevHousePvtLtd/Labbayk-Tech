var navLinks = document.getElementById("navLinks");
function showmenu() {
  console.log('showMenu');
  navLinks.style.right = "0";
}
function hidemenu() {
  console.log('hideMenu');
  navLinks.style.right = "-500px";
}

$('.floating-label').on({
  'focus': function(){
    if( $(this).val() === "" ){
      $(this).parent().find('label').addClass('field-active');
    }
    if( $(this).val()==="" ){
      $(this).parent().find('label').addClass('field-active');
    }
  },
  'blur': function(){
    if( $(this).val() === "" ){
      $(this).parent().find('label').removeClass('field-active');
    }
  }
});
$('.select').on({
  'click': function(){
   
      $(this).parent().find('label').addClass('field-active');
    
  },
  'blur': function(){
    if( $(this).val() === "" ){
      $(this).parent().find('label').removeClass('field-active');
    }
  }
});
