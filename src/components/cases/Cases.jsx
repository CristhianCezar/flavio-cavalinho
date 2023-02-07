import React from "react";
import './Cases.css';
import PersonalTrainer from '../../img/personal-trainer.jpg';
import Break from '../../img/homem-break.jpg';
import ManBgBlack from '../../img/homem-bg-black.jpg';

export default function Cases() {
    return(
        <div className="cases">
            <div className="titleCases">
                <h1>Meus Cases.</h1>
            </div>
            <div className="imgCases">
                <div className="imgDescription">
                    <img src={PersonalTrainer} alt="imagem de um homem e uma mulher fazendo musculação" title="Personal treiner" />
                    <h2>Personal Trainer</h2>
                </div>
                <div className="imgDescription">
                    <img src={Break} alt="foto de um modelo fazendo freazee" title="Hip Hop" />
                    <h2>Dança</h2>
                </div>
                <div className="imgDescription">
                    <img src={ManBgBlack} alt="foto de um modelo com o fundo escuro" title="Modelo" />
                    <h2>Modelo</h2>
                </div>
            </div>
        </div>
    )
}