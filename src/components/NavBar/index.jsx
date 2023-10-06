
export const NavBar = () => {
    return (
        <nav className="default-nav">
            <ul className="text-medium">
                <li>
                    <div>
                        <a href="#hero-section">Home</a>
                    </div>
                </li>
                <li>
                    <div className="li">
                        <a href="#projects-section">Projects</a>
                    </div>
                </li>
                <li>
                    <div className="li">
                        <a href="#contact-section">Contact</a>
                    </div>
                </li>
            </ul>
        </nav>
    )
}