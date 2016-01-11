var tabLinks = new Array(),
    contentDivs = new Array();

function init() {

    var tabListItems = document.getElementById('tabs').childNodes;// получаем все дочерние узлы элемента #tabs
    for ( var i = 0; i < tabListItems.length; i++ ) {  //прогоняем по циклу массив узлов
        if ( tabListItems[i].nodeName == "LI" ) { // если узел - LI, делаем следующее:
            var tabLink = getFirstChildWithTagName( tabListItems[i], 'A' ); // извлекаем первого ребенка данного элемента, который имеет данное имя тега и храним его в tabLink
            var id = getHash( tabLink.getAttribute('href') ); // извлекаем из атрибута href его значение после # и храним его в id
            tabLinks[id] = tabLink; // заполняем массив элементами
            contentDivs[id] = document.getElementById( id ); // заполняем массив элементами <div>
        }
    }

    var i = 0;

    for ( var id in tabLinks ) {
        tabLinks[id].onclick = showTab; // назначаем onclick обработчик события showTab для каждого tabLinks
        tabLinks[id].onfocus = function() { this.blur() }; // подчеркиваем первую вкладку, установив ей CSS-класс selected
        if ( i == 0 ) tabLinks[id].className = 'selected';
        i++;
    }

    var i = 0;

    for ( var id in contentDivs ) {
        if ( i != 0 ) contentDivs[id].className = 'tabContent hide';
        i++;
    }
}

function showTab() {
    var selectedId = getHash( this.getAttribute('href') );

    for ( var id in contentDivs ) {
        if ( id == selectedId ) {
            tabLinks[id].className = 'selected';
            contentDivs[id].className = 'tabContent';
        } else {
            tabLinks[id].className = '';
            contentDivs[id].className = 'tabContent hide';
        }
    }

    return false;
}

function getFirstChildWithTagName( element, tagName ) {
    for ( var i = 0; i < element.childNodes.length; i++ ) {
        if ( element.childNodes[i].nodeName == tagName ) return element.childNodes[i];
    }
}

function getHash( url ) {
    var hashPos = url.lastIndexOf ( '#' );
    return url.substring( hashPos + 1 );
}


























