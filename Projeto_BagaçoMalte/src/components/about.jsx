import React from "react";

export default function About() {
    return(
        <section id="about" class="about">
          <div class="about-text">
            <h3>Sobre</h3>
            <p>A cerveja é uma das bebidas mais populares do mundo, com origens nas antigas civilizações da Mesopotâmia e do Egito. No Brasil, 
              chegou com os colonizadores e se consolidou como parte importante da cultura e da economia, colocando o país entre os maiores produtores 
              globais. O crescimento recente se deve, principalmente, à popularização das cervejas artesanais. Contudo, esse avanço traz desafios ambientais, 
              já que a produção consome muita água e gera resíduos que, se não forem reaproveitados ou descartados corretamente, causam poluição e degradação 
              ambiental.</p>
          </div>
          <div class="about-image">
            <img src="\public\UniSenai_logo.png" alt="barra de cereal" />
          </div>
        </section>
    );
}