import React from 'react';
import * as S from "./styled"
import Ods4Back from "./imgsCard/ods4/ods4Back.png"

export default function Card({onClose=()=>{}, children, id="modal"}) {
    const Hand = (event) =>{
        if(event.target.id === id )onClose()
    }
    return(
        <S.Cont id={id} onClick={Hand}>
            <S.ContMod>
                <S.ContBtnClose>
                    <S.BtnClose onClick={onClose}>x</S.BtnClose>
                </S.ContBtnClose>
                <S.BoxOds>
                    <S.Ods src={Ods4Back} alt=""/>
                </S.BoxOds>
                <div>
                    <S.ContTilt>
                        <h5>
                            Objetivos 1. Acabar com a Pobreza em todos as suas formas, em todos os lugares
                        </h5>
                    </S.ContTilt>
                    <S.ListOds>
                        <S.ItemOds>
                            <p>
                                1.2 
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat omnis iusto, totam voluptatem officia iste dolorem nesciunt sequi aut quidem blanditiis, odit eligendi illum. Eveniet commodi perferendis labore sed quia.
                            </p>
                        </S.ItemOds>
                        <S.ItemOds>
                            <p>
                                1.3

                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat omnis iusto, totam voluptatem officia iste dolorem nesciunt sequi aut quidem blanditiis, odit eligendi illum. Eveniet commodi perferendis labore sed quia.
                            </p>
                        </S.ItemOds>
                        <S.ItemOds>
                            <p>
                                1.4
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat omnis iusto, totam voluptatem officia iste dolorem nesciunt sequi aut quidem blanditiis, odit eligendi illum. Eveniet commodi perferendis labore sed quia.
                            </p>
                        </S.ItemOds>
                        <S.ItemOds>
                            <p>
                                1.5
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat omnis iusto, totam voluptatem officia iste dolorem nesciunt sequi aut quidem blanditiis, odit eligendi illum. Eveniet commodi perferendis labore sed quia.
                            </p>
                        </S.ItemOds>
                    </S.ListOds>
                </div>
            </S.ContMod>
        </S.Cont>
    )
}

