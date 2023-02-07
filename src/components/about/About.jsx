import React from "react";
import './About.css';
import Somersault from '../../img/homem-fazendo-mortal.jpg';

export default function About() {
    return(
        <div className="aboutMe">
            <div className="informationsAbout">
                <h1 className="titleAbout">Sobre mim.</h1>
                    <p>
                        Aqui é o Flavio, tudo tranquilo?<br/>
                        Sou profissonal de educação física e também tenho grande envolvimento<br/>
                        no mundo do Hip Hop, mais particularmente no mundo da dança. <br/>
                        Atualmente meus projetos são: projeto 1, projeto 2, projeto 3.<br/>
                    </p>
                </div>
                <div className="imgAbout">
                    <img src={Somersault} alt="homem fazendo o mortal de costa na praia" />
                </div>
            </div>
    )
}