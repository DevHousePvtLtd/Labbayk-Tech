var navLinks = document.getElementById("navLinks");
function showmenu() {
  console.log('showMenu');
  navLinks.style.right = "0";
}
function hidemenu() {
  console.log('hideMenu');
  navLinks.style.right = "-500px";
}

// $('.floating-label').on({
//   'focus': function(){
//     if( $(this).val() === "" ){
//       $(this).parent().find('label').addClass('field-active');
//     }
//     if( $(this).val()==="" ){
//       $(this).parent().find('label').addClass('field-active');
//     }
//   },
//   'blur': function(){
//     if( $(this).val() === "" ){
//       $(this).parent().find('label').removeClass('field-active');
//     }
//   }
// });
// $('.select').on({
//   'click': function(){
   
//       $(this).parent().find('label').addClass('field-active');
    
//   },
//   'blur': function(){
//     if( $(this).val() === "" ){
//       $(this).parent().find('label').removeClass('field-active');
//     }
//   }
// });


function openModal(params) {
  document.getElementById(params).style.display='flex';
  document.getElementById(params).style.opacity=1;
}
function closeModal(params) {
  document.getElementById(params).style.display='none';
  document.getElementById(params).style.opacity=0;
}



function call(val){
  window.open("tel:"+val);
}

function email(val) {
  
  console.log(val);
  console.log("mailto:"+val);
  window.location.href = "mailto:"+val;
}