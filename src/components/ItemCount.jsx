import{ useState} from 'react'

export const ItemCount = ({ stock, onAdd }) => {
    const [count, setCount] = useState(1)
    
    const handleIncrease = () => {
        if(count < stock) {
            setCount (prev => prev + 1);
        }
    };
    
    const handleDecrease = () => {
        if(count > 1) {
            setCount((prev) => prev - 1);
        }
    };

    const handleAdd = () =>{
        onAdd(count);
        setCount(0);
    };

    return (
    <>
    <button onClick={handleDecrease}>-</button>
    <button onClick={handleIncrease}>+</button>
    <span>{count}</span>
    <hr />
    <button onClick={handleAdd}>Agregar al carrito</button>
    </>
    );
};