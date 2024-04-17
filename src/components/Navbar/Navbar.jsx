import './Navbar.css';

function Navbar() {
    return (
        <div className='nav'>
            <div className='nav-logo'>EV-olution</div>
            <ul>
                <li>Home</li>
                <li>Еxplore</li>
                <li>About</li>
                <li className='nav-contact'>Contact</li>
            </ul>
        </div>
    );
}

export default Navbar;