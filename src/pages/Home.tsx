import * as SC from '../styles/StylesComponentes';
import logo from '../CatwikiLogo.svg'
import SideBar from '../components/SideBar'
import ShouldHaveCats from '../components/ShouldHaveCats';
import Footer from '../components/Footer';

const Home =()=>{
    return(
        <SC.BoxCont>
            <div>
            <img src={logo} alt="img" className='logo'/>
            </div>
            <SideBar/>
            <ShouldHaveCats/>
            <Footer/>
        </SC.BoxCont>
    )
}
export default Home;