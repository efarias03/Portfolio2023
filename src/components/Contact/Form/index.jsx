

export function ContactForm() {
    return (
        <div class="form-container default-container">
            <form>
                <div className="input-group">
                    <label htmlFor="name" >Your name here</label>
                    <input name="name" type="text" />
                </div>
                <div className="input-group">
                    <label htmlFor="name" >Your name here</label>
                    <input name="name" type="text" />
                </div>
                <div className="input-group">
                    <textarea name="message" id="" cols="50" rows="10"></textarea>
                </div>
                <div className="input-group">
                    <button className="default-button" type="submit">Send</button>
                </div>
            </form>
        </div>
    )
}