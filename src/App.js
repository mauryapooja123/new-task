import logo from "./logo.svg";
import "./App.css";
import ModelForm from "./component/Form/ModelForm";
import User from "./component/Parent/User";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TableData from "./component/Table/TableData";
import TablePreant from "./component/Table/TablePreant";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/table" element={<TablePreant />} />
        <Route path="/user" element={<User />} />
        <Route path="edit/:id" element={<ModelForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
