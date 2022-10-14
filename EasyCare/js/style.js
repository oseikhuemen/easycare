document.addEventListener('scroll', () => {
    let myNav = document.getElementById("myNav");
    myNav.style.opacity = window.scrollY !== 0 ? .6 : 1;
  
  });









// carousel wahala

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})
