# Projeto Web 2º Bimestre UVV
## Site para alocação de uma refugiada Ucraniana
### Professor: Ricardo Costa
### Total 10 pontos. Será avaliado: 
 - 2,5pts ***HTML***
 - 2,5 pts ***CSS***
 - 2,5pts ***JavaScript*** 
 - 2,5pts Responsividade do site
## Objetivo principal desse README
 - Além de seu uso genérico, apresentar o projeto do repositório respectivo no GitHub, foi pedido pelo professor para que o README fosse usado para explicar o que foi feito em JavaScript, sou iniciante nessa linguagem então não vou conseguir explicar tão bem a maioria dos códigos. Enfim, começando, do mais simples para o mais complexo:
### ***Popup do botão***
>function togglePopup(){
>
> document.getElementById("popup-1").classList.toggle("active");
>    
>}
 - O funcionamento do botão foi feito 95% em ***CSS***, eu somente precisei de um comando em JavaScript puxando o botao pelo Id "popup-1", para quando ele fosse clicado ele acionasse minhas divs que estavam antes em "display: none", para tornalas "active".

### ***Modo claro e modo escuro***
>const chk = document.getElementById('chk')
>
>chk.addEventListener('change', () => {
>  document.body.classList.toggle('dark')
>})
 - Esse foi bem simples tanto no ***CSS*** tanto no ***JavaScript***, pena que só consegui aplicar no ***body***, queria ter mudado a tela dos textos também e da header e do footer, mas acabou dando tudo errado então deixei por assim mesmo. Eu coloquei um input, com algumas configurações visuais, com o Id "chk", e quando acionado ele aciona um evento, onde a cor do body vira uma classe dark, deixando o body escuro, e apertando denovo desaciona essa classe.

### ***Condição para que o botão fosse ativado***
>var btReservar = document.getElementById("res")
>
>var input = document.getElementById("date-picker")
>
>enable();
>
>function enable(){
>
> btReservar = document.getElementById("res")
> 
> input = document.getElementById("date-picker")
>
> btReservar.disabled = true
> input.oninput = free
>}
>
>function free(){
>
>  btReservar.disabled = false
>}
 - Fiz exatamente como professor ensinou em sala de aula, mas em vez de usar a função "onclick" usei a "oninput. Atribui o Id do input e do botão a variáveis (sim está repetido, eu estou atribuindo o mesmo valor duas vezes, pois por algum motivo essa função estava tendo vários bugs e não funcionando, então quando funcionou eu não mexi mais) e fiz com que o botão se tornasse desativado dentro dessa função "enable" que eu criei, porém após ser inserido algum dado no input, era chamada uma função "free" e o botão era ativado.

### ***Responsividade do Header***
>const btnMobile = document.getElementById('btn-mobile');
>
>function toggleMenu(event) {
>
>if (event.type === 'touchstart') event.preventDefault();
>  
> const nav = document.getElementById('nav');
> 
> nav.classList.toggle('active');
> 
> const active = nav.classList.contains('active');
> 
> event.currentTarget.setAttribute('aria-expanded', active);
> 
> if (active) {
>     event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
>     
> } else {
>   event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
> }
>}
>
>btnMobile.addEventListener('click', toggleMenu);
>btnMobile.addEventListener('touchstart', toggleMenu);
 - Esse foi disparado o que eu mais tive dificuldade para fazer, pesquisei bastante, e grande parte da responsividade do header está no ***CSS***, bem mais compreensível por sinal. Mas a grosso modo, eu cirei uma constante que pegou o valor de um botão que só aparece quando a tela tem um width menor que 600px, então criei uma função com uma condicional onde se o tipo do evento for 'touchstart' executa essa função "event.preventDefault()", e também criei uma constante que puxava o valor da "nav" do header pelo Id, tornava-a 'active' (comportamento análogo ao exeomplo do popup), depois fiz uma condicional para que se o 'active' fosse true era feito um atributo para fechar o menu, se fosse falso, era feito um para abrir.
