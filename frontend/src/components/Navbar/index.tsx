import './styles.css';

function Navbar() {
    return (
        <header>
            <nav className="container">
                <div className="nav-content">
                    <h1>FacilitaFatura</h1>
                    <div className="contact-container">
                        <a href="/" className="contact-link">Home</a>
                        <a href="/home" className="contact-link">Cliente</a>
                        <a href="/home" className="contact-link">Fatura</a>
                        <a href="/about" className="contact-link">Sobre</a>
                    </div>

                </div>
            </nav>
        </header>
    );
}

export default Navbar;
