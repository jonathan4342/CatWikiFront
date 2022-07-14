import * as SC from '../styles/StylesComponentes';
import logo from '../CatwikiLogo.svg'
import SideBar from '../components/Sidebar';
import ShouldHaveCats from '../components/ShouldHaveCats';

const Home =()=>{
    return(
        <SC.BoxCont>
            <div>
            <img src={logo} alt="img" className='logo'/>
            </div>
            <SideBar/>
            <ShouldHaveCats/>
        </SC.BoxCont>
    )
}
export default Home;