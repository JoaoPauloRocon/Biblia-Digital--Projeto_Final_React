import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.contact}>
          <p className={styles.text}>Entre em contato:</p>
          <ul className={styles.contactList}>
            <li>Email: contato@bibliadigital.com</li>
            <li>Telefone: (123) 456-7890</li>
            <li>Endereço: Rua da Bíblia, 123 - Cidade</li>
          </ul>
        </div>
        <div className={styles.subscribe}>
          <p className={styles.text}>Inscreva-se para receber atualizações:</p>
          <form className={styles.form}>
            <input type="email" placeholder="Seu e-mail" className={styles.input} />
            <button type="submit" className={styles.button}>Inscrever</button>
          </form>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <p className={styles.text}>&copy; {new Date().getFullYear()} Bíblia Digital. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
