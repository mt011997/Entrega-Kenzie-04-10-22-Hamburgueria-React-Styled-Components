import styled from "styled-components";

export const ContainerCards = styled.div `
    width:100%;
`

export const Ul = styled.ul `
    display:flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    width: 95%;
    margin: 0 auto;
    gap:0.3rem;

    @media(min-width: 1024px){
        flex-wrap: wrap;
    }
`

export const Li = styled.li `
    display:flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid var(--Gray-20);
    border-radius: 10px;
    min-width: 280px;
    margin:0.1rem 0;

`

export const DivImg = styled.div ` 
    display:flex;
    align-items: center;
    justify-content: baseline;
    background-color: var(--Gray-0);
    width: 100%;
    border-radius: 10px;
    
    img{
        width: 90px;
        margin: 0 auto;
    }
`

export const DivCards = styled.div `
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width:100%;
    padding: 10px;
    gap: 1.5rem;

    h2{
        font-size: 18px;
        font-weight: 700;
        line-height: 24px;
    }

    span{
        font-size: 12px;
        font-weight: 400;
        line-height: 16px;
        color: var(--Gray-50);
    }

    h3{
        font-size: 14px;
        font-weight: 600;
        line-height: 24px;
        color: var(--Color-primary)
    }

    button{
        background-color: var(--Color-primary);
        border: 1px solid var(--Color-primary);
        border-radius: 6px;
        color: var(--Gray-0);
        font-size: 12px;
        font-weight: 500;
        padding: 8px 12px;
        cursor: pointer;
    }
`

export const DivLimparBusca = styled.div `
    display: flex;
    padding: 10px;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;

    h2{
        font-size: 16px;
        font-weight: 700;
        line-height:34px;
    }

    cite{
        color: var(--Gray-50)
    }

    button{
        background-color: var(--Color-primary);
        border: 1px solid var(--Color-primary);
        border-radius: 5px;
        color: var(--Gray-0);
        width: 100px;
        cursor: pointer;
    }
`