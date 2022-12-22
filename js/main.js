let links = Array.from(document.querySelectorAll('.navbar .navbar-nav .nav-link'));


links.forEach(link => {
    link.addEventListener('click',function(){
        links.forEach(lnk => {
            lnk.classList.remove('active')
        });
        link.classList.add('active')
    })
});
