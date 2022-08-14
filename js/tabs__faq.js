const tabsBtn2   = document.querySelectorAll(".info");
const tabsItems2 = document.querySelectorAll(".visible");

tabsBtn2.forEach(onTabClick);

function onTabClick(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if( ! currentBtn.classList.contains('active') ) {
            tabsBtn2.forEach(function(item) {
                item.classList.remove('active');
            });

            tabsItems2.forEach(function(item) {
                item.classList.remove('active');
            });

            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }
    });
}

document.querySelector('.block__one').click();
