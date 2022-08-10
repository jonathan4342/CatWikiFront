import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Logo from '../components/Logo';
import { Scale } from '../components/Scale';
import { clearCatId, getCatId, getCatIdImg } from '../store/slice/Slice';
import { useAppDispatch, useAppSelector } from '../store/store';
import * as SC from '../styles/StylesComponentes';


const CatId = () => {
    const name = useParams().id;

    const dispatch = useAppDispatch()
    const { catId } = useAppSelector().catSlice

    const cat = catId?.find(e => e.id)

    useEffect(() => {
        dispatch(getCatId(name as string));
    }, [name])

    useEffect(() => {
        dispatch(getCatIdImg(cat?.id as string));
    }, [name])
    useEffect(() => {
        dispatch(clearCatId())
    },[name])
    return (
        <SC.BoxCont>
            <Logo />
            <SC.ContainerSHC paddingRight='100px' paddingLeft='10px'>
                <SC.CatIdImg>
                    <img src={cat?.img} alt="img" width='371px' height='371px'/>
                </SC.CatIdImg>
                {/* <Scale props={cat?.intelligence}/> */}
            </SC.ContainerSHC>
            <Footer />
        </SC.BoxCont>
    )
}
export default CatId;