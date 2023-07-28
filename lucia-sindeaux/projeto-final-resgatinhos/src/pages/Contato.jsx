import Header from "../components/Header";
import styles from "../styles/pages/contato.module.css";
import { useState } from "react";
import database from "../services/firebase";
import { ref, push, set } from "firebase/database";

const Contato = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [notafiscal, setImgURL] = useState("");
  const [cupomfiscal, setCupomFiscal] = useState("")

  function handleInputNome(e) {
    setNome(e.target.value);
  }

  function handleInputEmail(e) {
    setEmail(e.target.value);
  }

  function handleInputMensagem(e) {
    setMensagem(e.target.value);
  }

  function handleInputImagem(e) {
    setImgURL(e.target.value);
  }

  function handleInputCupom(e) {
    setCupomFiscal(e.target.value);
  }


  function handleSubmit(e) {
    e.preventDefault();
    const messageListRef = ref(database, "mensagens"); 
    const newMessageRef = push(messageListRef); 
    set(newMessageRef, {
      nome: nome,
      email: email,
      texto: mensagem,
      notafiscal: notafiscal,
    });

    setNome("");
    setEmail("");
    setMensagem("");
    setImgURL("");
    setCupomFiscal("")
  }

  return (
    <>
      <Header
        title="Juntos pelos Resgatinhos!"
        subtitle="Você pode ajudar a ONG Resgatinhos de várias maneiras e fazer a diferença na vida dos animais resgatados. 
        Ao se juntar à nossa causa, você estará proporcionando cuidados adequados, abrigo seguro e a oportunidade para que esses animais encontrem lares amorosos, onde possam desfrutar de uma vida digna e feliz. A construção desse futuro melhor depende de cada um de nós. Abaixo estão algumas formas de contribuição:"
      />
      <div className={styles.ajudar}>
        <p className={styles.formasAjuda}>
          {" "}
          <b>Enviar a Nota Fiscal do Programa Nota Paraná:</b> Ao realizar
          compras, você pode ajudar doando as notas fiscais sem CPF para a ONG.
          Basta preencher o formulário disponível no nosso site com os dados da
          nota, e o valor arrecadado será utilizado para custear os cuidados e
          tratamentos dos gatinhos resgatados.
        </p>
        <p className={styles.formasAjuda}>
          {" "}
          <b>Apadrinhar um Gatinho:</b> Se você busca uma conexão mais próxima
          com um dos nossos resgatinhos, pode se tornar um padrinho ou madrinha.
          Contribuindo com uma doação mensal, você estará garantindo que esse
          gatinho receba todos os cuidados necessários até encontrar um lar
          amoroso para chamar de seu.
        </p>
        <p className={styles.formasAjuda}>
          {" "}
          <b>Doações de Ração, Remédios e Produtos de Limpeza:</b> Aceitamos
          doações de ração para gatos, medicamentos e produtos de limpeza para
          manter o abrigo sempre limpo e higienizado. Sua doação contribuirá
          diretamente para o bem-estar e conforto dos nossos resgatinhos
          enquanto aguardam por uma família adotiva.
        </p>
        <p className={styles.formasAjuda}>
          {" "}
          <b>Voluntariado:</b> Se você deseja dedicar seu tempo e habilidades
          diretamente com os animais, torne-se um voluntário. Você poderá
          auxiliar na limpeza do abrigo, cuidar dos gatinhos, promover campanhas
          de adoção e muito mais. O trabalho voluntário é fundamental para o
          sucesso das nossas atividades.
        </p>
        <p className={styles.formasAjuda}>
          {" "}
          <b>Divulgação:</b> Compartilhe a nossa causa e eventos em suas redes
          sociais ou entre seus amigos e familiares. Quanto mais pessoas
          conhecerem o nosso trabalho, maiores serão as chances de encontrar
          lares amorosos para os nossos resgatinhos.
        </p>
        <p className={styles.formasAjuda}>
          {" "}
          <b>Adoção Responsável:</b> Uma das maneiras mais significativas de
          ajudar a ONG Resgatinhos é proporcionar um lar amoroso e permanente
          para um dos nossos gatinhos resgatados. A adoção responsável é a chave
          para proporcionar uma vida feliz e segura aos nossos resgatinhos.
        </p>
      </div>
      <div className={styles.notaParana}>
        <p className={styles.doeNota}>
          <p className={styles.doeNota}>
            <b>NOTA PARANÁ</b>
          </p>
          <p className={styles.doeNota}>
            Você pode doar seu cupom fiscal sem o CPF para a Arte & Vida. Assim
            podemos cadastrar sua notinha no site da Nota Paraná, e após
            processamento recebemos o retorno de crédito, caso aja, e poderemos
            participar também do sorteio em dinheiro, que muito nos ajudará.
          </p>
          <p className={styles.doeNota}>
            <b>Como doar?</b>
          </p>
          <p className={styles.doeNota}>
            Você que não que não informou o CPF, digita a Nota Fiscal, ou
            realiza a leitura do QR Code no sistema da Nota Paraná, localizando
            a nossa Instituição pela Razão Social: Resgatinhos - Amor em patas.
            Lembrando que para digitar a nota fiscal é necessário acessar o
            sistema com o seu CPF e senha. O prazo para doar uma nota é de 30
            dias do mês da emissão.
          </p>
          <p className={styles.doeNota}>
            <b>
              Você também pode nos enviar sua nota fiscal sem CPF através do
              formulário abaixo. Com isso conseguimos baixar as notas enviadas e
              cadastrar no Nota paraná.
            </b>
          </p>
          <p className={styles.doeNota}>
            <b>
              *É importante que você envie a imagem em boa qualidade para que
              possamos ver todos os dados com clareza
            </b>
          </p>
        </p>
      </div>
      <div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            className={styles.formInput}
            type="file"
            placeholder="Envie sua nota fiscal"
            onChange={handleInputImagem}
            value={notafiscal}
          />
          <input
            className={styles.formInput}
            type="text"
            placeholder="Digite o seu nome completo"
            onChange={handleInputNome}
            value={nome}
          />
          <input
            className={styles.formInput}
            type="number"
            placeholder="Digite o número do cupom fiscal"
            onChange={handleInputCupom}
            value={cupomfiscal}
          />
          <input
            className={styles.formInput}
            type="email"
            placeholder="Digite o seu e-mail para contato"
            onChange={handleInputEmail}
            value={email}
          />

          <textarea
            className={styles.formInput}
            placeholder="Quer deixar algum recado pra gente?"
            onChange={handleInputMensagem}
            value={mensagem}
          />
          <button className={styles.formButton} type="submit">
            Enviar Nota Fiscal para doação
          </button>
        </form>
      </div>
    </>
  );
};

export default Contato;
