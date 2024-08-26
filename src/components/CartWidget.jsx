import { Link } from 'react-router-dom';
import cart from '../assets/cart.png';

export const CartWidget = ({totalItems}) => {
    return(
        <div>
    <Link to="/cart">
    <img src={cart} height={30} />
    <span>{totalItems}</span>
    </Link>
    </div>
    );
};