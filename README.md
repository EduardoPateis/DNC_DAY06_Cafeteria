# DNC_DAY06_Cafeteria
# DNC_DAY06_Cafeteria
Correção do modal:

data-bs-toggle="modal" 
data-bs-target="#meuModal"
Alinhamento da xicara do modal:
<div id="meuModal" class="modal fade text-center" role="dialog">
Modal:

Removido o header e extendido todos os componetes para o body
Removido o botão de close do body
    <div id="meuModal" class="modal fade text-center" role="dialog">
        <div class="modal-dialog modal-dialog-scrollable ">
            <div class="modal-content ">
            <!-- Botão fora do body para aplicar o flex end -->
                <div class="d-flex justify-content-end p-0 m-0 border-0 ">
                    <button type="button" class="m-2 btn btn-close flex-shrink-1" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body text-center ">
                <!-- Title não deixou alinhar no centro -->
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
        </div>
    </div>

