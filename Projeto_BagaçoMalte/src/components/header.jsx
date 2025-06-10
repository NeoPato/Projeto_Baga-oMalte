import React from "react";

export default function Header() {

  const handleScroll = (e, id) => {
    e.preventDefault();
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth', 
        block: 'start'
      });
    }
  };

  return (
    <header>
      <h2>Projeto de farinha e barra de cereais a partir do bagaço do malte!</h2>
      <nav>
        
        <a href="#about" onClick={(e) => handleScroll(e, '#about')}>Sobre</a>
        <a href="#objective" onClick={(e) => handleScroll(e, '#objective')}>Objetivo</a>
        <a href="#contact" onClick={(e) => handleScroll(e, '#contact')}>Contato</a>

      </nav>
    </header>
  );
}
