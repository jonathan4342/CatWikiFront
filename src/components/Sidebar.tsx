import * as SC from '../styles/StylesComponentes'
import logo from '../HeroImagelg.png'
import logoC from '../CatwikiLogo.svg'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useEffect } from 'react';
import { getCats } from '../store/slice/Slice';
import { useAppDispatch, useAppSelector } from '../store/store';
import Cat from './Cat';

const SideBar = () => {

    const dispatch = useAppDispatch()
    const { cats } = useAppSelector().catSlice
    const catsHome = cats.slice(0, 4)
    useEffect(() => {
        dispatch(getCats())
    }, [dispatch])

    return (
        <>
            <SC.ContainerInput>
                <img src={logo} alt="img" width='1200px' />
                <div className='cat'>
                    <img src={logoC} alt="img" />
                    <h1>
                        Get to know more about your cat breed
                    </h1>
                </div>

            </SC.ContainerInput>
            <SC.ContainerDivs>
                <div className="div-1">
                    <div className='div1'>Most Search breeds</div>
                    <span className='raya'></span>
                </div>
                <SC.DivBreedsMas>
                    <div className='DivBreedsMas1'>
                        <h2>
                            66+ Breeds For you
                            to discover
                        </h2>
                    </div>
                    <div>
                        <SC.ButtonG>
                            SEE MORE <ArrowRightAltIcon className='arrow' />
                        </SC.ButtonG>
                    </div>
                </SC.DivBreedsMas>
                <SC.ContainerImgCats>
                    {/* <div className='raya-2'></div> */}
                    <SC.ImgCats>
                        {
                            catsHome?.map(e => <Cat key={e.id}{...e} />)
                        }
                    </SC.ImgCats>
                </SC.ContainerImgCats>
            </SC.ContainerDivs>
        </>
    )
}

export default SideBar;