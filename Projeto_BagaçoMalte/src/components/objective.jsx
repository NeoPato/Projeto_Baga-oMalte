import React from "react";

export default function Objective() {
    return(
        <section id="objective" class="objective">
          <h3>Objetivo</h3>
          <div class="objective-list">
            <div class="objective-item">
              <h4>Farinha e Barra de Cereais</h4>
              <p>Nossa proposta para o reaproveitamento do bagaço de malte é a produção de Farinha a 
                partir do bagaço de malte, para produtos panificados ou venda direta, visto seu valor 
                nutricional, há enorme potencial no repertório alimentar diário para pessoas saudáveis 
                ou com condições que causam transtornos alimentares, como anorexia e diabetes. 
                Além disso, temos como alternativa, a inclusão do bagaço de malte em mix de cereais, 
                como a barrinha de cereal, testada na prática pela nossa equipe!</p>
            </div>
            <div className="objective-item">
              <h4>Reaproveitamento do Bagaço de Malte</h4>
              <p>O bagaço de malte é um resíduo da produção de cerveja, que muitas vezes é descartado 
                inadequadamente, causando impactos ambientais. Nosso objetivo é transformar esse resíduo 
                em um produto valioso, promovendo a sustentabilidade e a economia circular.</p>
            </div>
            <div className="objective-item">
              <h4>Benefícios Nutricionais</h4>
              <p>O bagaço de malte é rico em fibras, proteínas e nutrientes essenciais. Ao utilizá-lo 
                na produção de farinha e barras de cereais, contribuímos para uma alimentação mais saudável 
                e equilibrada, beneficiando a saúde dos consumidores.</p>
            </div>
            <div className="objective-item">
              <div className="objective-gallery">
                <div className="objective-image">
                  <img src="/barra-cereal-malte(1).webp" alt="Barra 1" />
                </div>
                <div className="objective-image">
                  <img src="/barra-cereal-malte(2).webp" alt="Barra 2" />
                </div>
                <div className="objective-image">
                  <img src="/barra-cereal-malte(3).webp" alt="Barra 3" />
                </div>
              </div>
            </div>
          </div>
        </section>
    );
}