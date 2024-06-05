const buyBtns = document.querySelectorAll('.btn-open')
const modal = document.querySelector('.modal1')
const modalcontainer = document.querySelector('.js-container')
const modalclose = document.querySelector('.js-close')
// //hamf hiển thị modal mua vé(thêm class open vào modal)
function showBuytickets() {
  // e.preventDefault();
  modal.classList.add('open')
} //hàm ẩn modal mua vé(gỡ bỏ class open của modal)
function hideBuytickets() {
  modal.classList.remove('open')
}

for (const buyBtn of buyBtns) {
  buyBtn.addEventListener('click', showBuytickets)
}
modalclose.addEventListener('click', hideBuytickets)
modal.addEventListener('click', hideBuytickets)
modalcontainer.addEventListener('click', function (event) {
  event.stopPropagation()
});

// $('.btn-open').click(function(e){
//   e.preventDefault();
//   $('.modal1').addClass('open')
// })
// $('.js-close').click(function (e) { 
//   e.preventDefault();
//   $('.modal1').removeClass('open');
// });
// $('.modal1').click(function (e) { 
//   if($(e.target).hasClass('modal1')){
//     $('.modal1').removeClass('open');
//   }
  
// });
// $('.js-container').click(function(event) {
//   event.stopPropagation();
// });
// $.ajax({
//   type: "method",
//   url: "url",
//   data: "data",
//   dataType: "dataType",
//   success: function (response) {
    
//   }
// });