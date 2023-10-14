

export function ContactForm() {


    return (
        <form action="">
            <div className="form-container default-container">
                <div className="inputs">
                    <div className="input-group">
                        <label htmlFor="name" >Your name here</label>
                        <input name="name" id="name" type="text" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email" >Your email here</label>
                        <input name="email" id="email" type="text" />
                    </div>
                </div>
                <div className="message-div">
                    <div className="message-label">
                        <label htmlFor="message">Your cool message:</label>
                    </div>
                    <div className="message-text">
                        <textarea name="message" id="message" ></textarea>
                    </div>
                </div>
                <div className="form-button-div">
                    <button type="submit">Send</button>
                </div>
            </div>
        </form>
    )
}