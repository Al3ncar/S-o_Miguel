import React from "react";
import * as S from "./styled"

export default function App(){
    return(
        <S.ContNav>
            <S.NavList>
                <S.List>
                    <S.Anc href="" target="_blank"><li>Sobre</li></S.Anc>
                    <S.Anc href="" target="_blank"><li>Curiosidades</li></S.Anc>
                    <S.Anc href="#solucao"><li>Desenvolvimento</li></S.Anc>
                    <S.Anc href="" target="_blank"><li>Novidade</li></S.Anc>
                    <S.Anc href="" target="_blank"><li>Contato</li></S.Anc>
                </S.List>
            </S.NavList>
        </S.ContNav>
    )
}