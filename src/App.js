import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Componentes/Footer/Footer";
import Header from "./Componentes/Header/Header";
import Main from "./Componentes/Main/Main";
import LivroDetalhes from "./Pages/LivroDetalhes/LivroDetalhes";
import TodosLivros from "./Pages/todosLivros/todosLivros";
import LiturgiaDoDia from "./Pages/LiturgiaDiaria/LiturgiaDiaria";
import Error404 from "./Pages/Error404/Error404";
import './App.css'






function App() {
  return (
    <div className="app">

      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/*" element={<Error404 />} />
          <Route path="/livro" element={<TodosLivros />} />
          <Route path="/livro/:id" element={<LivroDetalhes />} />
          <Route path="/liturgia" element={<LiturgiaDoDia />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>


  );
}

export default App;
