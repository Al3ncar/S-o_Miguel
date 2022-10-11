import React from "react"
import Nitro from "./img/nitroO.jpg"

import Facelog from "./img/facelog.png"
import Preflog from "./img/prefeituralog.png"
import Twitt from "./img/twitterlog.png"

import * as S from "./styled"

export default function App(){
    return(
        <S.ContCity>
            <S.ContParf>
                <S.ContTitl>
                    <S.Titl>Cidade Nitro Operaria</S.Titl>
                </S.ContTitl>
                <S.BoxRedes>
                    <S.Box href="https://pt-br.facebook.com/noticiassaomiguel/" target="_blank">
                        <S.RedesImg src={Facelog} alt=""/>
                    </S.Box>
                    <S.Box href="https://twitter.com/sao_miguel" target="_blank">
                        <S.RedesImg src={Twitt} alt=""/>
                    </S.Box>
                    <a href="https://www.prefeitura.sp.gov.br/cidade/secretarias/subprefeituras/sao_miguel_paulista/historico/index.php?p=432" target="_blank">
                        <S.RedesImg src={Preflog} alt=""/>
                    </a>
                </S.BoxRedes>
                <S.ContParg>
                    <S.Parg>
                        Fundada em 1936, a história da Nitro Química aposta de expansão do parque industrial após a crise de 1929 - se atrela à urbanização do quadricentenário bairro de São Miguel Paulista.
                    </S.Parg>
                </S.ContParg>
                <S.ContBtn>
                    <S.Btn>
                        <S.Ancs href="https://www.prefeitura.sp.gov.br/cidade/secretarias/subprefeituras/sao_miguel_paulista/historico/index.php?p=432" target="_blank">Seja mais sobre</S.Ancs>
                    </S.Btn>
                </S.ContBtn>
            </S.ContParf>
            <S.BoxImg>
                <S.ImgFund src={Nitro} alt=""/>
            </S.BoxImg>
        </S.ContCity>
    )
}