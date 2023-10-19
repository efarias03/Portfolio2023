import { ContactForm } from "../Form";


export function ContactContent() {
    return (
        <section id="contact-section" className="default-section column flex">
            
                <div id="contact-header" className="default-container">
                    <h1>Let's work together?</h1>
                </div>

                <ContactForm />
        </section>
    )
}