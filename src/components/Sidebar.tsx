import * as SC from '../styles'
import Cat from './Cat';
import logo from '../HeroImagelg.png'
import img1 from '../image1.png';
import img2 from '../image2.png';
import img3 from '../image3.png';
import logoC from '../CatwikiLogo.svg'
import { getCats } from '../redux/actions/Actions';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RootState, useAppDispatch } from '../redux/store';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useSelector } from 'react-redux';
import { setSearch } from '../redux/slice/Slice';
import { Search } from './Search';

const SideBar = () => {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { cats } = useSelector((state: RootState) => state.catSlice);
    const catsHome = cats.slice(0, 4);
    const [input, setInput] = useState('');
    useEffect(() => {
        dispatch(getCats())
    }, [dispatch])
    const topCat = () => {
        navigate('/topCat')
    }
    const nameSearch = (e: any) => {
        setInput(e.target.value)
    }
    useEffect(() => {
        dispatch(setSearch(input))
    }, [input])

    return (
        <div>
            <SC.ContainerInput>
                <img src={logo} alt="img" width='75rem' />
                <div className='cat'>
                    <img src={logoC} alt="img" />
                    <h1>
                        Get to know more about your cat breed.
                    </h1>
                    <div className='search'>
                        <input
                            placeholder="Enter your breed"
                            className="input"
                            autoComplete='email'
                            value={input}
                            onChange={nameSearch}
                        />
                        <div className='iconSearch'>
                            <SearchIcon />
                        </div>
                    </div>
                    {
                        input.length >= 1 ? <Search /> : false
                    }
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
                        <SC.ButtonG onClick={topCat}>
                            SEE MORE <ArrowRightAltIcon className='arrow' />
                        </SC.ButtonG>
                    </div>
                </SC.DivBreedsMas>
                <SC.ContainerImgCats>
                    <SC.ImgCats>
                        {
                            catsHome?.map((e: any) => <Cat key={e.id}{...e} />)
                        }
                    </SC.ImgCats>
                </SC.ContainerImgCats>
            </SC.ContainerDivs>
            <SC.ContainerSHC >
                <SC.SHCTexto>
                    <span className='raya'></span>
                    <h1>Why should you have a cat?</h1>
                    <h3>Having a cat aroud you can actually trigger the release of calming chemicals in your body which lowee you stress and anxiety leves.</h3>
                    <SC.ButtonG backgroundColor='white' border='1px solid white' >
                        <a rel='noreferrer' href='https://www.mentalfloss.com/article/51154/10-scientific-benefits-being-cat-owner' target='_blank'>READ MORE</a> <ArrowRightAltIcon className='arrow' />
                    </SC.ButtonG>
                </SC.SHCTexto>
                <SC.SCHImg>
                    <SC.SCHImg1>
                        <img src={img2} alt="img2" className='img1' />
                        <img src={img1} alt="img1" className='img2' />
                    </SC.SCHImg1>
                    <SC.SCHImg1>
                        <img src={img3} alt="img3" className='img3' />
                    </SC.SCHImg1>
                </SC.SCHImg>
            </SC.ContainerSHC>
        </div>
    )
}

export default SideBar;