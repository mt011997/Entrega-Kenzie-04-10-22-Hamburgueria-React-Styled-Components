import styled from "styled-components";

export const DivCarrinho = styled.div `
    width: 95%;
    max-width:380px;
    margin: 1rem auto;
    display:flex;
    align-items: center;
    flex-direction: column;

    h2{
        background-color: var(--Color-primary);
        width: 100%;
        padding: 20px;
        font-size: 18px;
        font-weight: 700;
        color: var(--Gray-0);
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
    }

    ul{
        margin: 10px 0;
        padding: 10px 10px;
        max-height: 20rem;
        width: 95%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        overflow-y: scroll;
    }

    li{
        display:flex;
        height: 90px;
        width:100%;
        gap: 1rem;
        justify-content: flex-start;
        background-color: var(--Gray-20);
        border-radius: 8px;
        padding:10px;
       
    }

    img{
        width:50px;
        height:50px;
        align-self: center;
    }

    li button{
        background: none;
        height: 40%;
        width: 40%;
        border: none;
        font-size: 12px;
        font-weight:500;
        color: var(--Gray-50);
        cursor: pointer;
    }

    .btn-remover-todos{
        padding: 20px;
        width: 90%;
        border: 1px solid var(--Gray-20);
        background-color: var(--Gray-20);
        border-radius: 10px;
        color: var(--Gray-50);
        cursor: pointer;
    }

    .carrinhoVazio{
        display: flex;
        flex-direction: column;
        gap: 2rem;
        width: 95%;
        text-align: center;
        padding: 40px 0;
    }

    .carrinhoVazio h4{
        font-size: 18px;
        font-weight: 700;
    }

    .carrinhoVazio h5{
        font-size: 14px;
        font-weight: 400;
        color: var(--Gray-50)
    }
`
export const DivItensCarrinho = styled.div `
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h3{
        font-size:16px;
        font-weight: 700;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        line-height: 22px;
    }

    span{
        font-size: 12px;
        font-weight: 400;
        color: var(--Gray-50);
    }

    cite{
        font-size: 12px;
        font-weight: 400;
    }
`

export const DivTotalCarrinho = styled.div `
    display: flex;
    width: 95%;
    padding: 20px;
    justify-content: space-between;
    border-top: 3px solid var(--Gray-20);

    span{
        font-size: 14px;
        font-weight:600;
    }

    cite{
        font-size: 14px;
        font-weight:600;
        color: var(--Gray-50);
    }
`