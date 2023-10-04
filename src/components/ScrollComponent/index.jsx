
export function ScrollCircle({ text = "Scroll Down - Scroll Down - Scroll Down -" }) {
    return (
        <div className="scroll-div">
            <div className="scroll-text">
                {text.split("").map(
                    (char, i) =>
                        <span key={i} style={{ transform: `rotate(${i * 8.5}deg)` }}>
                            {char}
                        </span>
                )}
            </div>
            <div className="scroll-arrow">
                <a href="#projects-section">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>2-Arrow Down</title><g id="_2-Arrow_Down" data-name="2-Arrow Down"><path d="M26.29,20.29,18,28.59V0H16V28.59L7.71,20.29,6.29,21.71l10,10a1,1,0,0,0,1.41,0l10-10Z" /></g></svg>
                </a>
            </div>
        </div >
    )
}