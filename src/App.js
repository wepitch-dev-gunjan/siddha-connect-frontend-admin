import { Route, Routes } from "react-router-dom/dist";
import "./style.scss";
import Login from './pages/login';

function App() {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
    </Routes>
  );
}

export default App;
