import React from "react";
import Findex from "./headers/F_index"
import Sindex from "./headers/S_index"
import * as S from "./styled"
export default function App(){
    return(
        <S.ContHeader>
            <Findex/>
            <Sindex/>
        </S.ContHeader>
    )
}