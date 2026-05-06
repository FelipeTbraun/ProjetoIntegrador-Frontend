import Navbar from "../components/Navbar";
import "../styles/forms.css"

function Forms(){
    return(
        <>
  <Navbar />

  <div class="main-container">
        
        <div class="page-header">
            <h2>Nova Ocorrência</h2>
            <p>Preencha os dados abaixo para enviar sua solicitação à prefeitura.</p>
        </div>

        <div class="form-box">
            <form action="#" method="POST" enctype="multipart/form-data">
                
               
                <div class="form-row">
                    <div class="form-group">
                        <label for="nome"><i class="fa-solid fa-user"></i> Nome Completo</label>
                        <input type="text" id="nome" name="nome" placeholder="Seu nome" required/>
                    </div>
                    <div class="form-group">
                        <label for="celular"><i class="fa-solid fa-phone"></i> Celular / WhatsApp</label>
                        <input type="tel" id="celular" name="celular" placeholder="(19) 99999-9999" required/>
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-group">
                        <label for="motivo"><i class="fa-solid fa-tag"></i> Motivo do Formulário</label>
                        <select id="motivo" name="motivo" required>
                            <option value="" disabled selected>Selecione uma opção...</option>
                            <option value="elogio">Elogio</option>
                            <option value="reclamacao">Reclamação</option>
                            <option value="sugestao">Sugestão</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="situacao"><i class="fa-solid fa-circle-exclamation"></i> Situação</label>
                        <select id="situacao" name="situacao" required>
                            <option value="" disabled selected>Onde se encaixa?</option>
                            <option value="seguranca">Segurança</option>
                            <option value="transito">Trânsito</option>
                            <option value="ambiental">Ambiental</option>
                            <option value="eletrica">Elétrica</option>
                            <option value="patrimonio">Patrimônio</option>
                            <option value="outro">Outro</option>
                        </select>
                    </div>
                </div>

               
                <div class="form-row">
                    <div class="form-group">
                        <label for="rua"><i class="fa-solid fa-location-dot"></i> Rua / Local</label>
                        <input type="text" id="rua" name="rua" placeholder="Ex: Av. Fábio Barnabé" required/>
                    </div>
                    <div class="form-group">
                        <label for="bairro"><i class="fa-solid fa-map"></i> Bairro</label>
                        <input type="text" id="bairro" name="bairro" placeholder="Ex: Jardim Morada do Sol" required/>
                    </div>
                </div>

               
                <div class="form-group">
                    <label for="data"><i class="fa-solid fa-calendar-days"></i> Data do Ocorrido</label>
                    <input type="date" id="data" name="data" required/>
                </div>

               
                <div class="form-group">
                    <label for="descricao"><i class="fa-solid fa-align-left"></i> Descrição Detalhada</label>
                    <textarea id="descricao" name="descricao" placeholder="Descreva o que aconteceu, pontos de referência, etc..." required></textarea>
                </div>

               
                <div class="form-group">
                    <label><i class="fa-solid fa-camera"></i> Anexar Foto (Evidência)</label>
                    <div class="file-upload-wrapper">
                        <input type="file" id="imagem" name="imagem" accept="image/*"/>
                        <div class="upload-content">
                            <i class="fa-solid fa-cloud-arrow-up"></i>
                            <p>Clique aqui ou arraste a foto para enviar.</p>
                        </div>
                    </div>
                </div>

                <button type="submit" class="btn-submit">
                    <i class="fa-solid fa-paper-plane"></i> Enviar Formulário
                </button>

            </form>
        </div>
    </div>
  </>
    );
}

export default Forms;