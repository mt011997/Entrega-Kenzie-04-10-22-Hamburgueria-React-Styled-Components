import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../../img/logo.svg";
import { FormPesquisa, HeaderStyled } from "./styles";

export const Header = ({
  produtos,
  setProdutosPesquisa,
  description,
  setDescription,
  descricao,
  setDescricao,
}) => {
  const procurarProduto = (event) => {
    event.preventDefault();

    const busca = description.toLowerCase().trim();
    if (busca === "") {
      toast.error("Produto não encontrado", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setProdutosPesquisa([]);
    } else {
      const filter = produtos.filter((produto) => {
        const dataName = produto.name.toLowerCase();
        const categoria = produto.category.toLowerCase();

        return dataName.includes(busca) || categoria.includes(busca);
      });
      setProdutosPesquisa(filter);
    }

    setDescricao(description);
  };

  return (
    <HeaderStyled>
      <img src={logo} alt="Logo" />
      <FormPesquisa>
        <input
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          type="text"
          placeholder="Digitar Pesquisa"
          required
        />
        <button type="button" onClick={procurarProduto}>
          Pesquisar
        </button>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          draggable
        />
      </FormPesquisa>
    </HeaderStyled>
  );
};
