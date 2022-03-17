import "../styles/navbar.scss";

const Navbar = () => {
  return (
    <header className="header">

        <a href="#" className="logo">best <span>App</span></a>


        <input type="checkbox" id="menu-btn" />
        <label htmlFor="menu-btn" className="fas fa-bars"></label>


        <nav className="navbar">
            <a href="#home">home</a>
            <a href="#features">features</a>
            <a href="#about">about</a>
            <a href="#review">review</a>
            <a href="#pricing">home</a>
            <a href="#contact">home</a>
        </nav>

    </header>
  )
}

export default Navbar