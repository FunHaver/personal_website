function current_page_highlight(pageLocation = window.location.pathname) {
    
    const menuItems = document.getElementsByClassName('blog-menu-item');
    let menuItem;

    //Adds highlight to current page, clears any incorrect highlights
    for(let i = 0; i < menuItems.length; i++) {
        menuItem = menuItems[i].children[0];
        splitPath = menuItem.attributes.href.nodeValue.split('/')
        basePage = '/' + splitPath[1];
        console.log(basePage + " " + pageLocation)
        if (basePage === pageLocation || basePage + '/' === pageLocation) {
            menuItem.classList.add('current-page');
        } else if (menuItem.classList.contains('current-page') && basePage !== pageLocation) {
            menuItem.classList.remove('current-page');
        }
    }

}

window.addEventListener('load', (e) => {
    current_page_highlight();
})