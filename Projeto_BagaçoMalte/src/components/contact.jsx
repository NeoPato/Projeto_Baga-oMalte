import React from "react";
import desenvolvedores from "../constants/desenvolvedores.json";

export default function Contact() {
  return (
    <section id="contact">
        <h3>Contato</h3>
        <div className="contacts-container">
        {desenvolvedores.map((contato, index) => (
            <div key={index} className="contact">
            <div className="contact-image">
                <img src={contato.img} alt={contato.nome} />
            </div>
            <div className="contact-info">
                <h4>{contato.nome}</h4>

                <p>
                    Gmail:{" "}
                    <a
                        href={`https://mail.google.com/mail/?view=cm&fs=1&to=${contato.email}`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        {contato.email}
                    </a>
                    </p>
                <p>
                GitHub:{" "}
                <a
                    href={`https://github.com/${contato.github}`}
                    target="_blank"
                    rel="noreferrer"
                >
                    {contato.github}
                </a>
                </p>
            </div>
            </div>
        ))}
        </div>
    </section>
  );
}
