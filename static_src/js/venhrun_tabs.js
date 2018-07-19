function venhrun_tabs(v) {
    this.tabContent = document.getElementsByClassName(v.class_content);
    this.tab = document.getElementsByClassName(v.class_click);
    var new_this = this;
    var number = v.numbershow - 1 || 0;
    var hide = v.hide || 'hide';
    var show = v.show || 'show';
    var whiteborder = v.whiteborder || 'whiteborder';
    hideTabsContent(1);
    function hideTabsContent(a) {
        for (var i = a; i < new_this.tabContent.length; i++) {
            new_this.tabContent[i].classList.remove(show);
            new_this.tab[i].classList.remove(whiteborder);
            new_this.tabContent[i].classList.add(hide);
        }
    }
    document.getElementById(v.class_block_tabs).onclick = function (event) {
        var target = event.target;
        if (target.className == v.class_click) {
            for (var i = 0; i < new_this.tab.length; i++) {
                if (target == new_this.tab[i]) {
                    showTabsContent(i);
                    break;
                }
            }
        }
    }
    showTabsContent(number);
    function showTabsContent(b) {
        if (new_this.tabContent[b].classList.contains(hide)) {
            hideTabsContent(0);
            new_this.tab[b].classList.add(whiteborder);
            new_this.tabContent[b].classList.remove(hide);
            new_this.tabContent[b].classList.add(show);
        }
    }
}
