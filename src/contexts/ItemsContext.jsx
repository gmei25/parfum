import { createContext, useState } from "react";

export const ItemsContext = createContext();

export const Prov = ({ children }) => {
    const [items, setItems] = useState([]);

    const reset = () => setItems([]);

    const addItem = (item) => {
        const alreadyExists = items.some((i) => i.id === item.id);

        if (alreadyExists) {
            const transform = items.map((i) => {
                if (i.id === item.id) {
                    return { ...i, quantity: (i.quantity || 0) + (item.quantity || 0) };
                } else {
                    return i;
                }
            });
            setItems(transform);
        } else {
            setItems((prev) => [...prev, { ...item, quantity: item.quantity || 0 }]);
        }
    };

    const removeItem = (id) => {
        if (!id) return
        const remove = items.filter(i => i.id !== id);
        setItems(remove);
    };

    return (
        <ItemsContext.Provider value={{ addItem, items, reset, removeItem }}>
            {children}
        </ItemsContext.Provider>
    );
};
