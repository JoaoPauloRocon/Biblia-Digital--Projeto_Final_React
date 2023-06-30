import React, { useState, useEffect } from 'react';
import styles from './LiturgiaDiaria.module.css';
function LiturgiaDoDia() {
  const [liturgia, setLiturgia] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    const formattedDate = formatDate(selectedDate);
    fetchLiturgia(formattedDate);
  }, [selectedDate]);

  const formatDate = (date) => {
    const dia = date.getDate().toString().padStart(2, '0');
    const mes = (date.getMonth() + 1).toString().padStart(2, '0');
    return `${dia}-${mes}`;
  };

  const fetchLiturgia = async (formattedDate) => {
    try {
      const response = await fetch(`https://liturgia.up.railway.app/${formattedDate}`);
      const data = await response.json();
      setLiturgia(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDateChange = (event) => {
    const selectedDate = new Date(event.target.value + "T00:00:00-03:00");
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    if (selectedDate.getDate() === 1) {
      selectedDate.setMonth(selectedDate.getMonth() + 1);
    }

    if (isNaN(selectedDate)) {
      setSelectedDate(currentDate);
    } else {
      setSelectedDate(selectedDate);
    }
  };

  if (!liturgia) {
    return (
      <div>
        <div className={styles.loadingSpinner}></div>
      </div>
    );
  }
  
  const {
    data,
    cor,
    dia: diaLiturgico,
    oferendas,
    comunhao,
    primeiraLeitura,
    segundaLeitura,
    salmo,
    evangelho
  } = liturgia;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Liturgia do Dia - {data}</h2>
      <h4 className={styles.sectionTitle}>Selecione uma data:</h4>
      <input
        type="date"
        value={selectedDate.toISOString().split('T')[0]}
        onChange={handleDateChange}
        className={styles.dateInput}
      />

      <div className={styles.cardContainer}>
      <div
          className={`${styles.card} ${selectedCard === 'cor' ? styles.selected : ''}`}
          onClick={() => setSelectedCard('cor')}
        >
          <h4 className={styles.cardTitle}>Cor do Dia</h4>
          
        </div>
        <div
          className={`${styles.card} ${selectedCard === 'diaLiturgico' ? styles.selected : ''}`}
          onClick={() => setSelectedCard('diaLiturgico')}
        >
          <h4 className={styles.cardTitle}>Dia Litúrgico</h4>
          
        </div>
        <div
          className={`${styles.card} ${selectedCard === 'oferendas' ? styles.selected : ''}`}
          onClick={() => setSelectedCard('oferendas')}
        >
          <h4 className={styles.cardTitle}>Oração do Dia</h4>
          
        </div>
        <div
          className={`${styles.card} ${selectedCard === 'comunhao' ? styles.selected : ''}`}
          onClick={() => setSelectedCard('comunhao')}
        >
          <h4 className={styles.cardTitle}>Comunhão</h4>
          
        </div>
        <div
          className={`${styles.card} ${selectedCard === 'primeiraLeitura' ? styles.selected : ''}`}
          onClick={() => setSelectedCard('primeiraLeitura')}
        >
          <h4 className={styles.cardTitle}>Primeira Leitura</h4>
          {primeiraLeitura && (
            <>
              
            </>
          )}
        </div>
        <div
          className={`${styles.card} ${selectedCard === 'segundaLeitura' ? styles.selected : ''}`}
          onClick={() => setSelectedCard('segundaLeitura')}
        >
          <h4 className={styles.cardTitle}>Segunda Leitura</h4>
          {segundaLeitura && (
            <>
              
            </>
          )}
        </div>
        <div
          className={`${styles.card} ${selectedCard === 'salmo' ? styles.selected : ''}`}
          onClick={() => setSelectedCard('salmo')}
        >
          <h4 className={styles.cardTitle}>Salmo</h4>
          {salmo && (
            <>
             
            </>
          )}
        </div>
        <div
          className={`${styles.card} ${selectedCard === 'evangelho' ? styles.selected : ''}`}
          onClick={() => setSelectedCard('evangelho')}
        >
          <h4 className={styles.cardTitle}>Evangelho</h4>
          {evangelho && (
            <>
           
            
            </>
          )}
        </div>
      </div>

      {selectedCard && (
        <div className={styles.overlay}>
          <div className={styles.cardOverlay}>
          {selectedCard === 'cor' && (
              <>
                <h4 className={styles.sectionTitle}>Cor Do Dia</h4>
                <p className={styles.sectionContent}>{cor}</p>
              </>
            )}
            {selectedCard === 'diaLiturgico' && (
              <>
                <h4 className={styles.sectionTitle}>Dia Litúrgico</h4>
                <p className={styles.sectionContent}>{diaLiturgico}</p>
              </>
            )}
            {selectedCard === 'oferendas' && (
              <>
                <h4 className={styles.sectionTitle}>Oração do Dia</h4>
                <p className={styles.sectionContent}>{oferendas}</p>
              </>
            )}
            {selectedCard === 'comunhao' && (
              <>
                <h4 className={styles.sectionTitle}>Comunhão</h4>
                <p className={styles.sectionContent}>{comunhao}</p>
              </>
            )}
            {selectedCard === 'primeiraLeitura' && primeiraLeitura && (
              <>
                <h4 className={styles.sectionTitle}>Primeira Leitura</h4>
                <p><strong>Referência:</strong> {primeiraLeitura.referencia}</p>
                <p>{primeiraLeitura.texto}</p>
              </>
            )}
            {selectedCard === 'segundaLeitura' && segundaLeitura && (
              <>
                <h4 className={styles.sectionTitle}>Segunda Leitura</h4>
                <p><strong>Referência:</strong> {segundaLeitura.referencia}</p>
                <p>{segundaLeitura.texto}</p>
              </>
            )}
            {selectedCard === 'salmo' && salmo && (
              <>
                <h4 className={styles.sectionTitle}>Salmo</h4>
                <p><strong>Referência:</strong> {salmo.referencia}</p>
                <p><em>{salmo.refrao}</em></p>
                <p>{salmo.texto}</p>
              </>
            )}
            {selectedCard === 'evangelho' && evangelho && (
              <>
                <h4 className={styles.sectionTitle}>Evangelho</h4>
                <p><strong>Referência:</strong> {evangelho.referencia}</p>
                <p>{evangelho.texto}</p>
              </>
            )}
            <button onClick={() => setSelectedCard(null)}  className={styles.close}>Fechar</button>
          </div>
        </div>
      )}

    </div>
  );
}

export default LiturgiaDoDia;
