import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import { ItemsContext } from "../contexts/ItemsContext";

export const Cart = () => {
    const { removeItem, items } = useContext(ItemsContext);
    const total = items.reduce((acc, act) => acc + act.price * act.quantity, 0);
    const navigate = useNavigate(); // Hook para navegar entre rutas

    const handleOrder = () => {
        if (!items.length) return alert("No has puesto nada en el carrito :(");
        navigate("/checkout"); // Redirige a la página de Checkout
    };

    if (!items.length) return <p>No has agregado nada al carrito.</p>;

    return (
        <Container>
            {items.map((item) => (
                <div key={item.id}>
                    <h1>{item.title}</h1>
                    <img src={item.image} height={150} alt={item.title} />
                    <button onClick={() => removeItem(item.id)}>X</button>
                    <h2>Cantidad: {item.quantity}</h2>
                    <h3>Precio: {item.price}</h3>
                </div>
            ))}
            
            <h4>Total: {total}</h4>
            <button type="button" onClick={handleOrder}>Comprar</button>
        </Container>
    );
};
