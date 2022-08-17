import * as SC from '../styles/StylesComponentes';
import Logo from '../components/Logo'
import SideBar from '../components/Sidebar'
import Footer from '../components/Footer';

const Home =()=>{
    return(
        <SC.BoxCont>
            <Logo/>
            <SideBar/>
            <Footer/>
        </SC.BoxCont>
    )
}
export default Home;