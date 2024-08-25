import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import{
    getFirestore,
    getDocs,
    where,
    query,
    collection,
} from "firebase/firestore";


export const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

    useEffect(() => {
        const db = getFirestore();

        const refCollection = !id
            ? collection(db, "items")
            : query(collection(db, "items"), where("categoryId", "==", id));
        
        getDocs(refCollection)
            .then((snapshot) =>{
                setItems(
                    snapshot.docs.map((doc)=> {
                        return { id: doc.id, ...doc.data()};
                    })
                );
            })
            .finally(()=> setLoading(false));

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
                    <Card.Img variant="top" src={item.image} height={300} />
                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>{item.description}</Card.Text>
                        <Card.Text>{item.categoryId}</Card.Text>
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
