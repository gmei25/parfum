import { BrowserRouter, Routes, Route} from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Cart } from "./components/Cart";
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { Prov } from "./contexts/ItemsContext";

function App() {

  return (
    <Prov>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />}/>
          <Route exact path="/category/:id" element={<ItemListContainer />}/>
          <Route exact path="/item/:id" element={<ItemDetailContainer/>}/>
          <Route exact path="/cart" element={<Cart />}/>
        </Routes>
      </BrowserRouter>
    </Prov>
  );
}

export default App
