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

export const Checkout = () => {
    const [buyer, setBuyer] = useState(initialValues);
    const { items, reset } = useContext(ItemsContext);

    const total = items.reduce((acc, act) => acc + act.price * act.quantity, 0);

    const handleChange = (ev) => {
        setBuyer((prev) => {
            return { ...prev, [ev.target.name]: ev.target.value };
        });
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
            }
        });
    };

    if (!items.length) return <p>No has agregado nada al carrito.</p>;

    return (
        <Container>
            <h4>Total: {total}</h4>
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
        </Container>
    );
};
