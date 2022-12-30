import { DivCarrinho, DivItensCarrinho, DivTotalCarrinho } from "./styled";

export const Carrinho = ({ produtosCarrinho, setProdutosCarrinho }) => {
  const totalPrice = produtosCarrinho.reduce(getTotal, 0);
  function getTotal(total, item) {
    return total + item.price;
  }
  function removeItem(item) {
    const newItens = produtosCarrinho.filter((produto) => produto.id !== item);
    setProdutosCarrinho(newItens);
  }

  function removeAll() {
    setProdutosCarrinho([]);
  }
  return (
    <DivCarrinho>
      <h2>Carrinho de compras</h2>
      {produtosCarrinho.length === 0 ? (
        <div className="carrinhoVazio">
          <h4>Sua sacola está vazia</h4>
          <h5>Adicione itens</h5>
        </div>
      ) : (
        <>
          <ul>
            {produtosCarrinho.map((produto) => {
              return (
                <li>
                  <img src={produto.img} alt="" />
                  <DivItensCarrinho>
                    <h3>{produto.name}</h3>
                    <span>{produto.category}</span>
                    <cite>
                      {`R$ ${parseFloat(produto.price).toFixed(2)}`.replace(
                        ".",
                        ","
                      )}
                    </cite>
                  </DivItensCarrinho>
                  <button onClick={() => removeItem(produto.id)}>
                    Remover
                  </button>
                </li>
              );
            })}
          </ul>
          <DivTotalCarrinho>
            <span>Total</span>
            <cite>{`R$ ${totalPrice.toFixed(2)}`.replace(".", ",")}</cite>
          </DivTotalCarrinho>
          <button className="btn-remover-todos" onClick={removeAll}>
            Remover Todos
          </button>
        </>
      )}
    </DivCarrinho>
  );
};
