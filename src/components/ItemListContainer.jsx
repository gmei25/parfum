import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Container from "react-bootstrap/Container";
import data from "../components/data/products.json";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const {id} = useParams();

    useEffect(() => {
        const fetchData = new Promise((resolve) => {
            setTimeout(() => resolve(data), 1000);
        });
        fetchData.then((response) => {
            if (!id) {
                setItems(response);
            }else{
                const filteredItems = response.filter(item => item.category === id);
                setItems(filteredItems);
            }
            setLoading(false);
            
        });
    }, [id]);

    if(loading) return <Container className="mt-4">Espera un momento...</Container>; 

    if(items.length === 0) 
        return <Container className="mt-4">No se encontraron productos.</Container>
    return(
        <Container className="mt-4">
            <h1>Todos los productos</h1>
            <div className="d-flex flex-wrap">

                {items.map((item) => (
                <Card key={item.id} style={{width: "18rem", margin: "1rem"}}>
                    <Card.Img variant="top" src={item.img} height={300} />
                    <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>{item.detail}</Card.Text>
                        <Card.Text>{item.category}</Card.Text>
                        <Link to={`/item/${item.id}`}>
                            <Button variant="primary">Ver detalle</Button>
                        </Link>
                    </Card.Body>
                </Card>
                ))}
            </div>
        </Container>
    );
};
