import { useState } from 'react';
import emailjs from "@emailjs/browser"

export function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("Notification")

    function sendEmail(e) {
        e.preventDefault()

        if (!name || !email || !message) {
            alert("Inputs Vazios")
            return;
        }

        const templateParams = {
            to_name: name,
            message: message,
            email: email
        }

        emailjs.send("service_hgq9qpg", "template_dwrzf7q", templateParams, "F1jTyhfQ3Ilad25mV")
            .then((res) => {
                setName("")
                setEmail("")
                setMessage("")
            })
            .catch((err) => {
                alert(err)
            })
    }

    return (
        <form action="" onSubmit={sendEmail}>
            <div className="notification">
                <div className="notification-icon">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
                </div>
                <div className="notification-content">
                    <div className="notification-title">
                        <span>{status}</span>
                    </div>
                    <div className="text">
                        <span>{status}</span>
                    </div>
                </div>
            </div>
            <div className="form-container default-container">
                <div className="inputs">
                    <div className="input-group">
                        <label htmlFor="name" >Your name here</label>
                        <input value={name} name="name" id="name" type="text" onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email" >Your email here</label>
                        <input value={email} name="email" id="email" type="text" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                </div>
                <div className="message-div">
                    <div className="message-label">
                        <label htmlFor="message">Your cool message:</label>
                    </div>
                    <div className="message-text">
                        <textarea value={message} name="message" id="message" onChange={(e) => setMessage(e.target.value)} ></textarea>
                    </div>
                </div>
                <div className="form-button-div">
                    <button type="submit">Send</button>
                </div>
            </div>
        </form>
    )
}