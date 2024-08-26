import { Container } from "react-bootstrap";
import { useContext, useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { ItemsContext } from "../contexts/ItemsContext";

const initialValues = {
    phone: "",
    email: "",
    name: "",
    surname: "",
}

export const Cart = () => {
    const [buyer, setBuyer] = useState(initialValues);
    const [showForm, setShowForm] = useState(false);
    const { reset, removeItem, items } = useContext(ItemsContext);

    const total = items.reduce((acc, act) => acc + act.price * act.quantity, 0);

    const handleChange = (ev) => {
        setBuyer((prev) => {
            return { ...prev, [ev.target.name]: ev.target.value };
        });
    };

    const handleOrder = () => {
        if (!items.length) return alert("No has puesto nada en el carrito :(");
        setShowForm(true);
    };

    const handleSubmitOrder = () => {
        const order = {
            buyer,
            items,
            total,
        };

        const db = getFirestore();
        const orderCollection = collection(db, "orders");

        addDoc(orderCollection, order).then(({ id }) => {
            if (id) {
                alert("Su orden: " + id + " ha sido completada :)");
                reset();
                setBuyer(initialValues);
                setShowForm(false); 
            }
        });
    };

    if (!items.length) return <p>No has agregado nada al carrito.</p>;

    return (
        <>
            <Container>
                {items.map((items) => (
                    <div key={items.id}>
                        <h1>{items.title}</h1>
                        <img src={items.image} height={150} alt={items.title} />
                        <button onClick={() => removeItem(items.id)}>X</button>
                        <h2>Cantidad: {items.quantity}</h2>
                        <h3>Precio: {items.price}</h3>
                    </div>
                ))}
                
                <h4>Total: {total}</h4>
                <button type="button" onClick={handleOrder}>Comprar</button>
                <hr />
                {showForm && ( 
                    <form>
                        <div>
                            <label>Nombre:</label>
                            <input value={buyer.name} onChange={handleChange} name="name" />
                        </div>
                        <div>
                            <label>Apellido:</label>
                            <input value={buyer.surname} onChange={handleChange} name="surname" />
                        </div>
                        <div>
                            <label>Email:</label>
                            <input value={buyer.email} onChange={handleChange} name="email" />
                        </div>
                        <div>
                            <label>Telefono:</label>
                            <input value={buyer.phone} onChange={handleChange} name="phone" />
                        </div>
                        <button type="button" onClick={handleSubmitOrder}>Confirmar Compra</button>
                    </form>
                )}
            </Container>
        </>
    );
};