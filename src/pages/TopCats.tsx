import { useSelector } from "react-redux"
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import { TopCat } from "../components/TopCat";
import { RootState } from "../redux/store"
import { BoxCont, Title } from "../styles";

export const TopCats = () => {

    const {cats}=useSelector((state:RootState)=>state.catSlice)
    const top=cats.slice(0,10);
    return (
        <BoxCont>
            <Logo/>
            <Title fontSize="2.25rem" fontWeight='700'>Top 10 most searched breeds.</Title>
            {
                top.map(e=><TopCat key={e.number} {...e} />)
            }
            <Footer/>
        </BoxCont>
    )
}
