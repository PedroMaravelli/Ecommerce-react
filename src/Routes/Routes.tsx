import { Routes, Route } from "react-router-dom";
import CadastreSe from "../screens/CadastreSe";
import HomePage from "../screens/homePage";
import Login from "../screens/Login";


function Routers (){
    return(
        <Routes>
            <Route path="/" element={<HomePage></HomePage>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/cadastro" element={<CadastreSe></CadastreSe>}></Route>


        </Routes>
    )
}
export default Routers