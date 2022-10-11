import styled from "styled-components"

export const ContNav = styled.div`
    width:75%;
    position:absolute;
    display:flex;
    justify-content:space-between;
    align-items: center;
    padding:0.5%;
    top:5%;
    right: 8.5%;
    background-color: darkblue;
    border-radius: 2vw;
`
export const NavList = styled.nav`
    width: 100%;
`
export const List = styled.ul`
    width: 100%;
    display:flex;
    justify-content:space-between;
    align-items: center;

`
export const Anc = styled.a`
    width:100%;
    padding:1% 0;
    color:white;

    text-align: center;
    list-style: none;
    font-weight: bolder;
    font-size:1vw;
    z-index:5;
    &:hover{
        outline: solid 0.2vw white;
        border-radius: 2vw;
    }
`

//

export const ContCity = styled.div`
    width:100%;
    height: 100%;
    display:flex;

`
export const ContParf = styled.div`
    width:8%;
    height: 100%;
    display:flex;
    align-items:center;
    flex-direction:column;

`
export const BoxRedes = styled.div`
    width:40%;
    z-index: 3;
    display: grid;
    place-items: center;
    position: relative;
    top:70%;
`
export const Box = styled.a`
    width: 80%;
    background-color: white;
    border-radius: 50%;
    display: grid;
    margin:10%;
`
export const RedesImg = styled.img`
    width:100%;
    border-radius: 50%;
`
export const ContTitl = styled.div`width:10%;`
export const Titl = styled.h1`
    width: 30%;
    color:white;
    /* font-family: 'Sigmar One', cursive; */

    position: absolute;
    top:25%;
    right: 81.5%;
    transform: rotate(270deg);
    font-size: 2vw;
    z-index: 1;
`
export const ContParg = styled.div`
    width: 100%;
    margin:35% 0 0 5%;
    color:white;
    font-weight: bolder;
    font-size: 1.2vw;
    z-index: 1;
    background-color: red;
`
export const Parg = styled.p`
    width:35%;
    padding:2%; 
    text-align:right;
    position:absolute;
    top:70%;
    right:8.5%;
    background-color: darkblue;
    border-radius: 2vw;
    
`
export const ContBtn = styled.div`
    width:15%;
    position:absolute;
    top:91%;
    right:15%;
`
export const Btn = styled.button`
    width:100%;
    font-weight: bolder;
    font-size:1.1vw;
    padding: 2% 1%;
    background-color: darkblue;
    color:white;
    border-radius: 2vw;
    border: none;
    transition:0.2s ease-in-out;
    :hover{
        transform:scale(1.1);
        background-color:white;
        color:darkblue;
    }

`
export const Ancs = styled.a`
    text-decoration:none;
    color:white;
    :hover{
        color:darkblue;
    }
`
export const BoxImg = styled.div`
    width:100%;
    height: 100%;
    display: flex;
    align-items: center;
`
export const ImgFund = styled.img`
    width:100%;
    height: 100%;
`