import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import { Images } from '../components/img/Images';
import { OpacityLoader } from '../components/loaders/OpacityLoader';
import Logo from '../components/Logo';
import { Scale } from '../components/Scale';
import { getCatId, getCatIdImg } from '../redux/actions/Actions';
import { RootState, useAppDispatch} from '../redux/store';
import * as SC from '../styles';


const CatId = () => {
    const name = useParams().id;

    const dispatch = useAppDispatch()
    const { catId } = useSelector((state:RootState)=>state.catSlice)

    const cat = catId?.find(e => e.id)

    useEffect(() => {
        dispatch(getCatId(name as string));
    }, [name, dispatch])

    useEffect(() => {
        dispatch(getCatIdImg(cat?.id as string));
    }, [dispatch, cat?.id])

    return (
        <SC.BoxCont>
            <Logo />
            {
                catId?.length === 0 ? <OpacityLoader /> :
                    <SC.ContainerCatId >
                        <SC.CatIdImg>
                            <img src={cat?.img} alt="img" className='idimg'/>
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
                            <Scale num={cat?.adaptability} text='adaptability' />
                            <Scale num={cat?.affectionLevel} text='Affection level' />
                            <Scale num={cat?.childFriendly} text='Child Friendly' />
                            <Scale num={cat?.grooming} text='Grooming' />
                            <Scale num={cat?.intelligence} text='Intelligence' />
                            <Scale num={cat?.healthIssues} text='Health issues' />
                            <Scale num={cat?.socialNeeds} text='Social needs' />
                            <Scale num={cat?.strangerFriendly} text='Strager friendly' />
                        </SC.CatDetails>
                    </SC.ContainerCatId>
            }
            <Images />
            <Footer />
        </SC.BoxCont>
    )
}
export default CatId;