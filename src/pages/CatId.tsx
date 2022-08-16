import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import { Images } from '../components/img/Images';
import { OpacityLoader } from '../components/loaders/OpacityLoader';
import Logo from '../components/Logo';
import { Scale } from '../components/Scale';
import { getCatId, getCatIdImg } from '../store/slice/Slice';
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
    return (
        <SC.BoxCont>
            <Logo />
            {
                catId?.length == 0 ? <OpacityLoader /> :
                    <SC.ContainerSHC paddingRight='100px' paddingLeft='10px' paddingTop='0'>
                        <SC.CatIdImg>
                            <img src={cat?.img} alt="img" width='371px' height='371px' />
                        </SC.CatIdImg>
                        <SC.CatDetails>
                            <h1>{cat?.name}</h1>
                            <p>{cat?.description}</p>
                            <SC.ContDivCat>
                                <div className='title'>Temperament: </div>
                                <div>{cat?.temperament}</div>
                            </SC.ContDivCat>
                            <SC.ContDivCat>
                                <div className='title'>Origin: </div>
                                <div>{cat?.origin}</div>
                            </SC.ContDivCat>
                            <SC.ContDivCat>
                                <div className='title'>Life span:</div>
                                <div>{cat?.lifeSpan} years</div>
                            </SC.ContDivCat>
                            {/* <Scale props={cat?.intelligence}/> */}
                        </SC.CatDetails>
                        
                    </SC.ContainerSHC>
            }
            <Images/>
            <Footer />
        </SC.BoxCont>
    )
}
export default CatId;