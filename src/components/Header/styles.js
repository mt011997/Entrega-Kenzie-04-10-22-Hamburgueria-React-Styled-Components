import styled from "styled-components";

export const HeaderStyled = styled.header `
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 1rem 0;
    background-color: var(--Gray-0);

@media(min-width: 760px){
    flex-direction: row;
    justify-content: space-around;
}
    
`

export const FormPesquisa = styled.form `
    display: flex;
    border: 2px solid var(--Gray-20);
    padding: 5px;
    border-radius: 10px;
    background-color: white;

    form:focus-within{
        border: 2px solid var(--Gray-100);
        border-color: var(--Gray-100);
    }

    input{
        font-size: 1rem;
        padding:5px;
        border: none;
        width: 95%;
        color: var(--Gray-50)
    }

    input:focus{
        outline: none;
    }

    input::placeholder{
        font-size: 1rem;
        color: var(--Gray-50);
    }

    button{
        background-color: var(--Color-primary);
        border: 1px solid var(--Color-primary);
        border-radius:5px;
        padding: 10px;
        color: var(--Gray-0);
        cursor: pointer;
    }
`