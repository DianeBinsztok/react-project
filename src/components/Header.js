import '../styles/Header.css';
import Nav from './Nav'

function Header() {
    return (    
        <header>
            <p id="site-title">Ma liste en React</p>
            <Nav />
        </header> 
    );
   
}
export default Header;