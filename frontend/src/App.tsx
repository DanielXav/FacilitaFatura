import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Cliente from './pages/Cliente';
import FormCliente from './pages/FormCliente';
import Fatura from './pages/Fatura';
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clientes" element={<Cliente />} />
        <Route path="/clientes/cadastrar" element={<FormCliente />} />
        <Route path="/faturas" element={<Fatura />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;