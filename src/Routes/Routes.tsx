import { Routes, Route } from "react-router-dom";
import HomePage from "../screens/homePage";

function Routers (){
    return(
        <Routes>
            <Route path="/" element={<HomePage></HomePage>}></Route>
        </Routes>
    )
}
export default Routers