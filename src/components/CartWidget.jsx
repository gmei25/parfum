import { Link } from 'react-router-dom';
import carrito from '../assets/cart.png';

export const CartWidget = () => {
    return(
    <Link to="/cart">
    <img src={carrito} height={35} />
    <span>4</span>
    </Link>
    );
};