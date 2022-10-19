//quando clicar no botão deve abrir o menu mudando a classe do html
(function(){
    
    var $btn = document.getElementById('btn');
    var $html = document.querySelector('html');
    var ariaControl = $btn.getAttribute('aria-controls');
    var $menu = document.getElementById(ariaControl);
    
    $html.classList.remove('no-js');
    $html.classList.add('js');
    
    function openMenu(){
        $html.classList.toggle('menu-opened');
        var ariaExpanded = this.getAttribute('aria-expanded') === 'true';

        $btn.setAttribute('aria-expanded', !ariaExpanded);
        $menu.setAttribute('aria-expanded', !ariaControl);
    };
    
    $btn.addEventListener('click', openMenu);


})();