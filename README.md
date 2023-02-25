# Projeto 4

# Show
---------------------------- Um preview da Página ---------------------------------
<div>
<img src="./assets/imgs/GIF_DEMO.gif">
by @ Pricila - https://github.com/pripc
</div>

# Projeto 4:

Baseado nas orientações do pdf:

 <embed src="assets/docs/inst_projeto_4.pdf" type="application/pdf" width="100" height="100">

# Usando o bootStrap

 (https://getbootstrap.com/)

# Bora lá: 

1 --------Menu de navegação - navbar ---------------------



 <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <img src="./assets/imgs/Logo.png" alt="Logo da cafeteria - xicara de café" />
            <a class="navbar-brand" href="#">DNC Coffee</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-bs-toggle="modal" data-bs-target="#meuModal" href="#">Sobre</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-bs-toggle="modal" data-bs-target="#atendimentoCard" href="#">Atendimento</a>
                    </li>
                </ul>
            </div>
        </div>
        <a href="#" class="btn btn-outline-success rounded-pill" style="width: 10rem"> Fazer Pedido </a>
    </nav>


1.1 Observação:
    O uso do  <a herf ="https://getbootstrap.com/docs/5.0/components/collapse/"> data-bs-toggle e do data-bs-target </a>

2 ------------ Main e sessões ----------------------------------------------
<main>
        <section class="container-fluid p-0">
            <img class="image__banner" src="assets/imgs/principal.png" width="100%" />
        </section>
        <section class="card-group position-relative">
            <div id="cardUm" onmouseleave="hiddeButton('#cardUm')" onmouseenter="HighlightButton('#cardUm')"
                class="card m-3" style="width: 17rem">
                <img src="assets/imgs/card1.png" class="card-img-top" alt="Xicara de café" />
                <div class="card-body">
                    <p class="card-text">
                        Nossa loja de café se encontra em um lugar, 100% fictício, porém
                        caso se sinta interessado pode vir tomar um café conosco em nossa
                        sede em São José dos Campos.
                    </p>
                    <div class="d-flex justify-content-center">
                        <button id="cardUm" class="btnescondido btn btn-dark w-50 m-0"
                            style="background-color:#2A3342">Comprar agora</button>
                    </div>
                </div>
            </div>
            <div id="cardDois" onmouseleave="hiddeButton('#cardDois')" onmouseenter="HighlightButton('#cardDois')"
                class="card m-3" style="width: 17rem">
                <img src="assets/imgs/card2.png" class="card-img-top" alt="Xicara de café" />
                <div class="card-body">
                    <p class="card-text">
                        Nossa casa de café é a melhor da região, aqui você tem tudo que
                        precisa, uma boa conversar, bons amigos e um ambiente sem igual.
                        Aproveite, pois Melhor que a DNC não existe!
                    </p>
                    <div class="d-flex justify-content-center">
                        <button id="cardDois" class="btnescondido btn btn-dark w-50 m-0"
                            style="background-color:#2A3342">Comprar agora</button>
                    </div>
                </div>
            </div>
            <div id="cardTres" onmouseleave="hiddeButton('#cardTres')" onmouseenter="HighlightButton('#cardTres')"
                class="card m-3" style="width: 17rem">
                <img src="assets/imgs/card3.png" class="card-img-top" alt="Grãos de café" />
                <div class="card-body">
                    <p class="card-text">
                        Por que a DNC? Porque podem contar sempre com um serviço genuíno,
                        uma atmosfera acolhedora e uma incrível xícara de café, torrado
                        por especialistas e preparado de forma enriquecedora.
                    </p>
                    <div class="d-flex justify-content-center">
                        <button id="cardTres" class="btnescondido btn btn-dark w-50 m-0"
                            style="background-color:#2A3342">Comprar agora</button>
                    </div>
                </div>
            </div>
            <div id="cardQuatro" onmouseleave="hiddeButton('#cardQuatro')" onmouseenter="HighlightButton('#cardQuatro')"
                class="card m-3" style="width: 17rem">
                <img src="assets/imgs/card4.png" class="card-img-top" alt="Grãos e xicara de café" />
                <div class="card-body">
                    <p class="card-text">
                        A escola especialista em formar talentos, com foco em
                        empregabilidade, migração de carreira e aumento de performance.
                    </p>
                    <div class="d-flex justify-content-center">
                        <button id="cardQuatro" class="btnescondido btn btn-dark w-50 m-0"
                            style="background-color:#2A3342">Comprar agora</button>
                    </div>
                </div>
            </div>
        </section>
 </main>
3 ---------------------- Modais ------------------------
3.1 Modal 1 --------------------------------------------
    <div id="meuModal" class="modal fade text-center" role="dialog">
        <div class="modal-dialog modal-dialog-scrollable ">
            <div class="modal-content ">
                <div class="d-flex justify-content-end p-0 m-0 border-0 ">
                    <button type="button" class="m-2 btn btn-close flex-shrink-1" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body text-center ">
                    <h1 class="m-1">Quem somos nós?</h1>
                    <div class="">
                        <h5>
                            Tudo o que fazemos procura respeitar essa conexão,
                            desde nosso compromisso com o café de melhor qualidade do
                            mundo até a forma como nós interagimos com nossos clientes e
                            nossas comunidades para conduzir nosso negócio de modo responsável.
                        </h5>
                        <img class="" src="assets/imgs/cafe.png" alt="Xicara de café">
                    </div>
                </div>
            </div>
3.2 Modal 2 --------------------------------------------
        </div>
    </div>
    <div id="atendimentoCard" class="modal fade text-center" role="dialog">
        <div class="modal-dialog modal-dialog-scrollable ">
            <div class="modal-content ">
                <div class="d-flex justify-content-end p-0 m-0 border-0 ">
                    <button type="button" class="m-2 btn btn-close flex-shrink-1" data-bs-dismiss="modal"></button>
                </div>
                <h1 class="mb-2 mt-2">Atendimento</h1>
                <p>Rua José Alencar, 111, Centro</p>
                <p>CEP:12209-000 | +55 (11) 3333-8000</p>
                <!-- Unica forma que eu consegui para centralicar o botão -->
                <div class="d-flex justify-content-center pb-5 ">
                    <button type="button" class=" btn btn-primary border-0 ps-3 pe-3 pb-2 pt-2 w-50 "
                        style="background-color:#2A3342; color:white">Entrar em contato</button>
                </div>
            </div>
        </div>
    </div>


4------------ O Jabá ------------------------------------
Não pode faltar o Jabá!
    <footer class="py-5 my-5">
        <p class="text-center text-muted"> © Eduardo "The Dangerous!"</p>
    </footer>
