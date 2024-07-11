import Container from "react-bootstrap/Container";

export const ItemListContainer = (prop) => (
<Container className="mt-5">
    <h1>{prop.greeting}</h1>
</Container>
);