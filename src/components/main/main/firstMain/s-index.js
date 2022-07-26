import React,{useState} from "react"
import * as S from "./styled"

import Ods1 from "./Card/ods1_index"
import Ods2 from "./Card/ods2_index"
import Ods3 from "./Card/ods3_index"
import Ods4 from "./Card/ods4_index"
import Ods5 from "./Card/ods5_index"

import IconOds1 from "./Card/imgsCard/ods1/ods1.jpg"
import IconOds2 from "./Card/imgsCard/ods2/ods2.png"
import IconOds3 from "./Card/imgsCard/ods3/ods3.png"
import IconOds4 from "./Card/imgsCard/ods4/ods4.png"
import IconOds5 from "./Card/imgsCard/ods5/ods5.png"

export default function Soluçao(){
    const [ods1, setods1] = useState(false)
    const [ods2, setods2] = useState(false)
    const [ods3, setods3] = useState(false)
    const [ods4, setods4] = useState(false)
    const [ods5, setods5] = useState(false)
    const CloseMod = ()=>{
        setods1(false);
        setods2(false);
        setods3(false);
        setods4(false);
        setods5(false);
    }
    return(
        <S.Cont>
            <S.ContInfo>
                <S.ContTilt>
                    <h4>Os Objetivos de Desenvolvimento Sustentavel de São Miguel</h4>
                </S.ContTilt>
                <S.ContParg>
                    <p>
                        Os Objetivos de Desenvolvimento Sustentavel são atender as nescessidades de um conjunto de individuos visando um melhor ambiente cujo eles residem. Com o foco de erradicalizar problemas entre cuminidades, sendo, a fome, pobreza, poluiçao, criminalidade,
                        tais conflito e açoes sao prejudiciais para as periferias
                    </p>
                </S.ContParg>
            </S.ContInfo>
            <S.ContBoxs>
                <S.ContBoxFirst>
                    <S.BtnIcons onClick={()=>{setods1(true)}}>
                        <S.Icons src={IconOds1} alt=""/>
                    </S.BtnIcons>
                    {ods1?( <Ods1 onClose={()=>{CloseMod()}}/>) : null}
                </S.ContBoxFirst>
                <div>
                    <S.ContBoxIcons>
                        <S.BoxIcons>
                            <S.BtnIcons onClick={()=>{setods2(true)}}>
                                <S.Icons src={IconOds2} alt=""/>
                            </S.BtnIcons>
                            {ods2?( <Ods2 onClose={()=>{CloseMod()}}/>):null}
                        </S.BoxIcons>
                        <S.BoxIcons>
                            <S.BtnIcons onClick={()=>{setods3(true)}}>
                                
                                <S.Icons src={IconOds3} alt=""/>
                            </S.BtnIcons>
                            {ods3?( <Ods3 onClose={()=>{CloseMod()}}/>):null}
                        </S.BoxIcons>

                    </S.ContBoxIcons>
                    <S.ContBoxIcons>
                        <S.BoxIcons>
                            <S.BtnIcons onClick={()=>{setods4(true)}}>
                                
                                <S.Icons src={IconOds4} alt=""/>
                            </S.BtnIcons>
                            {ods4?( <Ods4 onClose={()=>{CloseMod()}}/>):null}
                        </S.BoxIcons>
                        <S.BoxIcons>
                            <S.BtnIcons onClick={()=>{setods5(true)}}>
                                
                                <S.Icons src={IconOds5} alt=""/>
                            </S.BtnIcons>
                            {ods5?( <Ods5 onClose={()=>{CloseMod()}}/>):null}
                        </S.BoxIcons>
                    </S.ContBoxIcons>

                </div>
            </S.ContBoxs>
        </S.Cont>
    )
}