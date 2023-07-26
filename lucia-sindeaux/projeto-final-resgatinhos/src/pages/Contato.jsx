import Header from "../components/Header";
import styles from "../styles/pages/contato.module.css";
import { useState } from "react";
import database from '../services/firebase'
import { ref, push, set } from 'firebase/database'

const Contato = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [notafiscal, setImgURL] = useState("")

  function handleInputNome(e) {
    setNome(e.target.value)
  }

  function handleInputEmail(e) {
    setEmail(e.target.value)
  }

  function handleInputMensagem(e) {
    setMensagem(e.target.value)
  }

  function handleInputImagem(e) {
    setImgURL(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()

    const messageListRef = ref(database, 'mensagens') //cria uma coleção no db do firebase
    const newMessageRef = push(messageListRef) //cria uma nosa mensagem e vai ser armazenada na messagelistref
    set(newMessageRef, {
      nome: nome,
      email: email,
      texto: mensagem,
      notafiscal: notafiscal
    })

    setNome('')
    setEmail('')
    setMensagem('')
    setImgURL('')
  }

  return (
    <>
      <Header title="Entre em contato comigo!" />
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
            placeholder="Digite o seu nome completo (como na nota fiscal) "
            onChange={handleInputNome}
            value={nome}
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
