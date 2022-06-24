var tabParent = document.querySelector('.menu-bar');
var tabItems = document.querySelectorAll('.menu-bar_item');
var tabContents = document.querySelectorAll('.main-body');

    function hideTabContent(){
      tabContents.forEach(function(item){
          item.style.display = 'none';
      });
  
      tabItems.forEach(function(item){
          item.classList.remove('menu-bar_item_active');
      });
  }

  function showTabContent(index = 0) {
    tabContents[index].style.display = 'flex';
    tabItems[index].classList.add('menu-bar_item_active');
}

hideTabContent();
showTabContent();

tabItems.forEach(function(item, index){
    item.addEventListener('click', function(){
        hideTabContent();
        showTabContent(index);
    });
});

tabParent.addEventListener('click', function(e){
    
    if(e.target && e.target.classList.contains('menu-bar_item')){

        tabItems.forEach(function(item, index){

            if(e.target === item){
                hideTabContent();
                showTabContent(index);   
            }

        });
    }
});


var toggleBtn = document.querySelector('.toggle'),
        modal = document.querySelector('.modal'),
        modalClose = document.querySelector('.close');

toggleBtn.addEventListener('click', () => {
    modal.classList.add('active');
});

modalClose.addEventListener('click', () => {
    modal.classList.remove('active');
});