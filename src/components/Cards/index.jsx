import { toast } from "react-toastify";
import {
  Ul,
  Li,
  DivCards,
  DivImg,
  DivLimparBusca,
  ContainerCards,
} from "./styles";

export const Cards = ({
  produtos,
  produtosPesquisa,
  setProdutosPesquisa,
  setDescription,
  descricao,
  setProdutosCarrinho,
  produtosCarrinho,
}) => {
  const limparCarrinho = () => {
    setProdutosPesquisa([]);
    setDescription("");
  };

  const adicionarCarrinho = (id, name, category, price, img) => {
    const x = produtosCarrinho.find((element) => element.id === id);
    if (!x) {
      setProdutosCarrinho((previusCard) => [
        ...previusCard,
        { img, name, id, category, price },
      ]);
    } else {
      toast.error("Produto já adicionado!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <ContainerCards>
      {produtosPesquisa.length > 0 ? (
        <DivLimparBusca>
          <h2>
            Resultados para: <cite>{descricao}</cite>
          </h2>
          <button type="button" onClick={limparCarrinho}>
            Limpar Busca
          </button>
        </DivLimparBusca>
      ) : (
        <></>
      )}
      <Ul>
        {(produtosPesquisa.length > 0 ? produtosPesquisa : produtos).map(
          (produto) => {
            return (
              <Li key={produto.id}>
                <DivImg>
                  <img src={produto.img} alt="Hamburguer" />
                </DivImg>
                <DivCards>
                  <h2>{produto.name}</h2>
                  <span>{produto.category}</span>
                  <h3>
                    {`R$ ${parseFloat(produto.price).toFixed(2)}`.replace(
                      ".",
                      ","
                    )}
                  </h3>
                  <button
                    onClick={() =>
                      adicionarCarrinho(
                        produto.id,
                        produto.name,
                        produto.category,
                        produto.price,
                        produto.img
                      )
                    }
                  >
                    Adicionar
                  </button>
                </DivCards>
              </Li>
            );
          }
        )}
      </Ul>
    </ContainerCards>
  );
};
