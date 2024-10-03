let tabLink = document.querySelectorAll('.tab-link');

tabLink.forEach(function(item){
    item.addEventListener('click', function(e){
        e.preventDefault();
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        tabLink.forEach(function(item){
            item.classList.remove('active');
        })

        currentBtn.classList.add('active');
        currentTab.classList.add('active')
    })
})