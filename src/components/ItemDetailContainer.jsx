import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import data from '../components/data/products.json';

export const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const fetchData = new Promise((resolve) => {
            setTimeout(() => resolve(data), 1000);
        });

        fetchData.then((response) => {
            const foundItem = response.find((item) => item.id === Number(id));
            setItem(foundItem);
        }).finally(() => {
            setLoading(false);
        });
    }, [id]);

    if (loading) return <Container className="mt-4">Espera un momento por favor</Container>;

    if (!item) return <Container className="mt-4">No se encontraron productos.</Container>;

    return (
        <Container className="mt-4">
            <h1>Producto</h1>
            <h2>{item.name}</h2>
            <img src={item.img} height={350} alt={item.name} />
            <h4>{item.category}</h4>
            <p>{item.detail}</p>
        </Container>
    );
};


