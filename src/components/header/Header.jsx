import React from "react";
import './Header.css';
import IconBlackPower from '../../img/icon-black-power.webp';

export default function Header() {
    return(
        <div className="header">
            <div className="logo">
                <img src={IconBlackPower} alt="icone de um homem com o cabelo black power" />
            </div>
            <div className="listLink">
                <ul className="list">
                    <a href="#">
                        <li>Home</li>
                    </a>
                    <a href="#">
                        <li>Projetos</li>
                    </a>
                    <a href="#">
                        <li>Contato</li>
                    </a>                    
                </ul>
            </div>
            <div className="about">
                <button className="buttonAbout">Conheça mais</button>
            </div>           
        </div>
    )
}