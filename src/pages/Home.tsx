import * as SC from '../styles/StylesComponentes';
import logo from '../CatwikiLogo.svg'
import SideBar from '../components/Sidebar';
const Home =()=>{
    return(
        <SC.BoxCont>
            <div>
            <img src={logo} alt="img" className='logo'/>
            </div>
            <SideBar/>
        </SC.BoxCont>
    )
}
export default Home;