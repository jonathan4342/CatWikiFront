import * as SC from '../styles/StylesComponentes';
import Logo from '../components/Logo'
import SideBar from '../components/Sidebar'
import Footer from '../components/Footer';
import { useEffect } from 'react';
import { useAppDispatch } from '../redux/store';
import { setNull } from '../redux/slice/Slice';

const Home = () => {
    const dispatch= useAppDispatch();

    useEffect(()=>{
            dispatch(setNull())
    },[dispatch])
    return (
        <SC.BoxCont>
            <Logo />
            <SideBar />
            <Footer />
        </SC.BoxCont>
    )
}
export default Home;