import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import livros from '../../json/dadosBiblia.json';
import styles from './LivroDetalhes.module.css';

function LivroDetalhes() {
  const { id } = useParams();

  const livro = livros.antigoTestamento.find((conjunto) => conjunto.id === id) ||
    livros.novoTestamento.find((conjunto) => conjunto.id === id);

  const [capituloInicial, setCapituloInicial] = useState(1);
  const [versiculoInicial, setVersiculoInicial] = useState(1);
  const [capituloFinal, setCapituloFinal] = useState(livro.capitulos.length);
  const [versiculoFinal, setVersiculoFinal] = useState(livro.capitulos[livro.capitulos.length - 1].versiculos.length);

  const handleChangeCapituloInicial = (e) => {
    const capitulo = parseInt(e.target.value, 10);
    if (!isNaN(capitulo) && capitulo >= 1 && capitulo <= livro.capitulos.length) {
      setCapituloInicial(capitulo);
    }
  };

  const handleChangeVersiculoInicial = (e) => {
    const versiculo = parseInt(e.target.value, 10);
    if (!isNaN(versiculo) && versiculo >= 1 && versiculo <= livro.capitulos[capituloInicial - 1].versiculos.length) {
      setVersiculoInicial(versiculo);
    }
  };

  const handleChangeCapituloFinal = (e) => {
    const capitulo = parseInt(e.target.value, 10);
    if (!isNaN(capitulo) && capitulo >= 1 && capitulo <= livro.capitulos.length) {
      setCapituloFinal(capitulo);
    }
  };

  const handleChangeVersiculoFinal = (e) => {
    const versiculo = parseInt(e.target.value, 10);
    if (!isNaN(versiculo) && versiculo >= 1 && versiculo <= livro.capitulos[capituloFinal - 1].versiculos.length) {
      setVersiculoFinal(versiculo);
    }
  };

  if (!livro) {
    return <div>Livro não encontrado.</div>;
  }

  const listaVersiculos = livro.capitulos.reduce((versiculos, capitulo, capituloIndex) => {
    const numeroCapitulo = capituloIndex + 1;
    capitulo.versiculos.forEach((versiculo, versiculoIndex) => {
      const numeroVersiculo = versiculoIndex + 1;
      if (
        (numeroCapitulo === capituloInicial && numeroVersiculo >= versiculoInicial) ||
        (numeroCapitulo === capituloFinal && numeroVersiculo <= versiculoFinal) ||
        (numeroCapitulo > capituloInicial && numeroCapitulo < capituloFinal)
      ) {
        versiculos.push({
          capitulo: numeroCapitulo,
          versiculo: numeroVersiculo,
          texto: versiculo
        });
      }
    });
    return versiculos;
  }, []);

  return (
    <div className={styles.container}>
      <h2>{livro.nome_do_livro}</h2>

      <div className={styles.inputs}>
        <div>
          <label>
            Capítulo Inicial:
            <input
              type="number"
              value={capituloInicial}
              onChange={handleChangeCapituloInicial}
              min="1"
              max={livro.capitulos.length}
            />
          </label>
          <label>
            Versículo Inicial:
            <input
              type="number"
              value={versiculoInicial}
              onChange={handleChangeVersiculoInicial}
              min="1"
              max={livro.capitulos[capituloInicial - 1].versiculos.length}
            />
          </label>
        </div>
        <div>
          <label>
            Capítulo Final:
            <input
              type="number"
              value={capituloFinal}
              onChange={handleChangeCapituloFinal}
              min="1"
              max={livro.capitulos.length}
            />
          </label>
          <label>
            Versículo Final:
            <input
              type="number"
              value={versiculoFinal}
              onChange={handleChangeVersiculoFinal}
              min="1"
              max={livro.capitulos[capituloFinal - 1].versiculos.length}
            />
          </label>
        </div>
      </div>

      <ul>
        {listaVersiculos.map((versiculo, index) => (
          <p key={index}>
            <span>{versiculo.capitulo}:{versiculo.versiculo}. </span>
            {versiculo.texto}
          </p>
        ))}
      </ul>
    </div>
  );
}

export default LivroDetalhes;
