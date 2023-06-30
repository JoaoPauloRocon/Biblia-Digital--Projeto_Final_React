import React from 'react';
import livros from '../../json/dadosBiblia.json';
import styles from './TodosLivros.module.css';
import { Link } from 'react-router-dom';

function TodosLivros() {
    return (
        <div className={styles.container}>
            <div className={styles.antigo}>
                <h2>Antigo Testamento</h2>
                {livros.antigoTestamento.map(livro => (
                    <Link to={`/livro/${livro.id}`}><div key={livro.id} className={styles.card}>
                        {livro.nome_do_livro}
                    </div></Link>
                ))}
            </div>


            <div className={styles.novo}>
                <h2>Novo Testamento</h2>

                {livros.novoTestamento.map(livro => (
                    <Link to={`/livro/${livro.id}`}><div key={livro.id} className={styles.card}>
                        {livro.nome_do_livro}
                    </div></Link>
                ))}
            </div>
        </div>

    );
}

export default TodosLivros;
