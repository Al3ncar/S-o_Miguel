import styled from "styled-components";

export const Cont = styled.section`
    width:100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top:0;
    left:0;
    background-color: rgba(0, 0, 0, 0.8);

    z-index: 10;
`
export const ContMod = styled.div`
    width:50%;
    height: 95%;
    background-color: #fff;
    border-radius: 0.5vw;
    position: relative;
`
export const BoxOds = styled.div`
    width:100%;
    height: 30%;

`
export const Ods = styled.img`
    width:100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.5vw 0.5vw 0 0 ;

`
export const ListOds = styled.ul`
    width:100%;
    list-style: none;

`
export const ItemOds = styled.li`
    width:100%;
    font-size: 1vw;
    padding:2% 4%;
    text-align: left;
`
export const ContTilt = styled.div`
    width:100%;
    padding:2%;
    font-size: 1.4vw;
    text-align: center;
`

export const ContBtnClose = styled.div`
    width:4%;
    display: flex;
    justify-content: center;
    position: absolute;
    right: 2%;
    top: 1%;
`
export const BtnClose = styled.button`
    width:100%;
    color: white;
    border: none;
    background-color: transparent;
    font-size: 2vw;
    position: relative;
    display: flex;
    justify-content: center;
    &:hover{
        cursor:pointer;
        transform:scale(1.1);
    }
`

