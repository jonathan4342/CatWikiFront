import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CatId from "../pages/CatId";
import Home from "../pages/Home";

const RoutesApp =()=>{
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/breed/:id' element={<CatId/>}/>
            </Routes>
        </Router>
    )
}

export default RoutesApp;