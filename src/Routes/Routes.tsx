import { Routes, Route } from "react-router-dom";
import HomePage from "../screens/homePage";
import Login from "../screens/Login";

function Routers (){
    return(
        <Routes>
            <Route path="/" element={<HomePage></HomePage>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>

        </Routes>
    )
}
export default Routers