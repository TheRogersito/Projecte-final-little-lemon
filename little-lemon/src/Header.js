import Nav from "./Nav.js"

function Header() {
  return (
    <>
      <header className="container">
        <img src={require('../src/images/Logo.png')} alt="logo" className="logoTop"></img>
        <Nav/>
      </header>
    </>
  );
}

export default Header;