import React from "react"
import Nitro from "./img/nitro(1).jpg"
import * as S from "./styled"

export default function App(){
    return(
        <S.ContCity>
            <S.ContParf>
                <S.ContTitl>
                    <S.Titl>Cidade Nitro Operaria</S.Titl>
                </S.ContTitl>
                <S.ContParg>
                    <S.Parg>
                        Fundada em 1936, a história da Nitro Química aposta de expansão do parque industrial após a crise de 1929 - se atrela à urbanização do quadricentenário bairro de São Miguel Paulista.
                    </S.Parg>
                </S.ContParg>
            </S.ContParf>
            <S.BoxImg>
                <S.ImgFund src={Nitro} alt=""/>
            </S.BoxImg>
        </S.ContCity>
    )
}