import React from "react";

export default function Contact() {
    return (
        <section>
            <h3>Contato</h3>
            <div id="contact" className="contact">
                <p>Para mais informações, entre em contato conosco:</p>
                <div className="contact-image">
                    <img src="/luiz_ft.webp" alt="ft_membro1" />
                    <img src="/math_ft.webp" alt="ft_membro2" />
                    <img src="/geo_ft.webp" alt="ft_membro3" />
                    <img src="/gab_ft.webp" alt="ft_membro4" />
                    <img src="/vitor_ft.webp" alt="ft_membro5" />
                </div>
            </div>
        </section>
    );
}
