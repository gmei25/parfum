import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import Container from "react-bootstrap/Container";

import { ItemsContext } from "../contexts/ItemsContext";
import { ItemCount } from "./ItemCount";

export const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const { id } = useParams();

    const {addItem} = useContext(ItemsContext);
    const onAdd = (count)=> {
        addItem({...item, quantity: count })
    };

    useEffect(() => {
        const db = getFirestore();
        
        const refDoc = doc(db, "items", id);

        getDoc(refDoc)
        .then((snapshot) => {
            setItem({id: snapshot.id, ...snapshot.data()});
        })
        .finally(() => setLoading(false));

    }, [id]);

    if (loading) return <Container className="mt-4">Espera un momento por favor</Container>;

    if (!item) return <Container className="mt-4">No se encontraron productos.</Container>;

    return (
        <Container className="mt-4">
            <h1>{item.title}</h1>
            <h2>{item.categoryId}</h2>
            <h3>{item.description}</h3>
            <img src={item.image} height={350} alt={item.name} />
            <br />
            <b>{item.price}</b>
            <ItemCount stock={item.stock} onAdd={onAdd} />
        </Container>
    );
};


