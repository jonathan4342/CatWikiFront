import * as SC from '../styles/StylesComponentes'
import logo from '../HeroImagelg.png'
import logoC from '../CatwikiLogo.svg'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/store';
import Cat from './Cat';
import img1 from '../image1.png';
import img2 from '../image2.png';
import img3 from '../image3.png';
import { getCats } from '../redux/actions/Actions';
import { Autocomplete, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const SideBar = () => {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { cats } = useAppSelector().catSlice;
    const catsHome = cats.slice(0, 4);
    const [input, setInput] = useState('');

    useEffect(() => {
        dispatch(getCats())
    }, [dispatch])
    const nameCats = cats.map(e => e.name)

    return (
        <>
            <div>
                <SC.ContainerInput>
                    <img src={logo} alt="img" width='1200px' />
                    <div className='cat'>
                        <img src={logoC} alt="img" />
                        <h1>
                            Get to know more about your cat breed.
                        </h1>
                        <input
                            placeholder="Enter your breed"
                            className="input"
                        />
                    </div>
                </SC.ContainerInput>
                <SC.ContainerDivs>
                    <div className="div-1">
                        <div className='div1'>Most Search breeds.</div>
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
                        <SC.ImgCats>
                            {
                                catsHome?.map(e => <Cat key={e.id}{...e} />)
                            }
                        </SC.ImgCats>
                    </SC.ContainerImgCats>
                </SC.ContainerDivs>
                <SC.ContainerSHC>
                    <SC.SHCTexto>
                        <span className='raya'></span>
                        <h1>Why should you have a cat?</h1>
                        <h3>Having a cat aroud you can actually trigger the release of calming chemicals in your body which lowee you stress and anxiety leves.</h3>
                        <SC.ButtonG backgroundColor='white' border='1px solid white'>
                            READ MORE <ArrowRightAltIcon className='arrow' />
                        </SC.ButtonG>
                    </SC.SHCTexto>
                    <div className='SCHImg'>
                    <SC.SCHImg1>
                        <img src={img2} alt="img2"  className='img1'/>
                        <img src={img1} alt="img1"  className='img2'/>
                    </SC.SCHImg1>
                    <SC.SCHImg1>
                        <img src={img3} alt="img3"  className='img3' />
                    </SC.SCHImg1>
                    </div>
                    
                </SC.ContainerSHC>
            </div>

        </>
    )
}

export default SideBar;