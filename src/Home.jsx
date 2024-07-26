import {Link} from 'react-router-dom';


Const NavBar = () => {
    return (
        <>
        <Link  to ='/home'>Home</Link>
        <Link  to ='/books'>Book Collection</Link>
        <Link  to ='/login'>Log in / Register</Link>
        
        </>
    )
}

export default NavBar 