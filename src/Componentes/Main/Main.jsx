import React from 'react';
import livros from '../../json/dadosBiblia.json';
import styles from './Main.module.css';
import { Link } from 'react-router-dom';

function Main() {
  const antigoTestamento = livros.antigoTestamento.slice(0, 2);
  const novoTestamento = livros.novoTestamento.slice(0, 2);

  return (
    <div className={styles.main}>

      <div className={styles.sobre}>
        <p>
          <h1>Biblía Digital</h1>
          <span>
            A Associação Nossa Senhora de Fátima preparou para você uma Bíblia Online, para que lhe seja possível ler, estudar e meditar a Palavra de Deus onde quer que você esteja e sempre que desejar!

            Você poderá fazê-lo aqui nesta página, ou também no Aplicativo Salve Maria! Neste aplicativo você tem a Bíblia Sagrada, a Liturgia Diária, o Santo do Dia, Orações e muito mais para seu benefício espiritual!

          </span><br /><br />

          <span>Confira alguns livros em destaque :</span><br /><br />

        </p>
      </div>
      <div className={styles.container}>
        {antigoTestamento.map((conjunto, index) => (
          <div key={index} className={styles.card}>
            <Link to={`/livro/${conjunto.id}`}>
              <h2 className={styles.livros}>{conjunto.nome_do_livro}</h2>
            </Link>
          </div>
        ))}
        {novoTestamento.map((conjunto, index) => (
          <div key={index} className={styles.card}>
            <Link to={`/livro/${conjunto.id}`}>
              <h2 className={styles.livros} >{conjunto.nome_do_livro}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
