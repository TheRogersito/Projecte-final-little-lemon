function Footer() {
    return (
      <>
        <footer className="container">
            <div className="logoDown">
                <img src={require("../src/images/logohead.png")} alt="logo"/>
            </div>
            <div>
                <ul>
                    <li>Navigation</li>
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Reservations</li>
                    <li>Order Online</li>
                    <li>Login</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>Contact</li>
                    <li></li>
                    <li>Address</li>
                    <li>Phone Number</li>
                    <li>Email</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>Social Media Links</li>
                    <li></li>
                    <li>Address</li>
                    <li>Phone Number</li>
                    <li>Email</li>
                </ul>
            </div>
        </footer>
      </>
    );
  }
export default Footer;