import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import * as SC from '../styles/StylesComponentes'
import logo from '../HeroImagelg.png'
import logoC from '../CatwikiLogo.svg'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { getCats } from '../store/slice/Slice';

const SideBar = () => {

    const dispatch=useDispatch()

    // useEffect(() => {
    //     dispatch(getCats())
    // },[dispatch])

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
                <div className='input'>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={top100Films}
                        sx={{ width: 500 }}
                        renderInput={(params) => <TextField {...params} label="Enter your breed"
                        />}
                    />
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
            </SC.ContainerDivs>
        </>
    )
}

export default SideBar;