import "./App.css";
import "./reset.css";
import "./components.css";
import { Header } from "./components/Header";
import { Cards } from "./components/Cards";
import { useEffect, useState } from "react";
import { api } from "./services/api";
import { Carrinho } from "./components/Carrinho";

function App() {
  const [produtos, setProdutos] = useState([]);
  const [produtosCarrinho, setProdutosCarrinho] = useState([]);
  const [produtosPesquisa, setProdutosPesquisa] = useState([]);
  const [description, setDescription] = useState("");
  const [descricao, setDescricao] = useState("");
  useEffect(() => {
    api
      .get("products", {})
      .then((response) => {
        setProdutos(response.data);
      })
      .catch((err) => console.error(err));
  }, [setProdutos]);

  return (
    <div className="App">
      <Header
        produtos={produtos}
        setProdutosPesquisa={setProdutosPesquisa}
        description={description}
        setDescription={setDescription}
        setDescricao={setDescricao}
        descricao={descricao}
      ></Header>
      <main>
        <Cards
          produtos={produtos}
          produtosPesquisa={produtosPesquisa}
          setProdutosPesquisa={setProdutosPesquisa}
          setDescription={setDescription}
          descricao={descricao}
          setDescricao={setDescricao}
          produtosCarrinho={produtosCarrinho}
          setProdutosCarrinho={setProdutosCarrinho}
        />
        <Carrinho
          produtosCarrinho={produtosCarrinho}
          setProdutosCarrinho={setProdutosCarrinho}
        />
      </main>
    </div>
  );
}

export default App;
