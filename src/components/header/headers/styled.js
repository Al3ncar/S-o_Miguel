import styled from "styled-components"
import Fund from "./img/nitro(1).jpg"
export const ContNav = styled.div`
    width:95%;
    margin:1.5% 2.5%;
    padding:0.5%;
    position:absolute;
    background-color:darkblue;
    z-index:5;
`
export const NavList = styled.nav`
    width: 100%;
`
export const List = styled.ul`
    width: 100%;
    display:flex;
    justify-content:space-around;
    align-items: center;
`
export const Anc = styled.a`
    width:100%;
    padding:1%;
    color:white;

    text-align: center;
    list-style: none;
    font-weight: bolder;
    font-size:1.3vw;
    z-index:5;
    &:hover{
        outline: solid 0.2vw white;
    }
`

//

export const ContCity = styled.div`
    width:100%;
    height: 100%;
    display:flex;

`
export const ContParf = styled.div`
    width:40%;
    height: 100%;
    display:flex;
    align-items:center;
    flex-direction:column;
`
export const ContTitl = styled.div`
    width:100%;
    margin-top:25%;

`
export const Titl = styled.h1`
    width: 60%;
    color:white;
    font-family: 'Sigmar One', cursive;

    position: absolute;
    top:25%;
    left: 3%;
    font-size: 4.5vw;
    z-index: 1;
`
export const ContParg = styled.div`
    width:60%;
    margin:35% 0 0 5%;
    color:white;
    font-weight: bolder;
    font-size: 1.6vw;
    z-index: 1;
`
export const Parg = styled.p`
    width:60%;
    padding:2%;
    background-color:darkblue;
    clip-path: polygon(0 0, 97% 0%, 100% 100%, 0 100%);
    position:absolute;
    top:73%;
    left:3%;
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
    clip-path: polygon(0 0, 100% 0%, 100% 100%, 10% 100%);
`