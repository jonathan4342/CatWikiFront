import { Link } from "react-router-dom"
import { CatsProps } from "../interfaces/Interfaces"
import * as SC from '../styles'
const Cat = (props: CatsProps) => {
    return (
        <SC.CatImgs>
            <Link to={`/breed/${props.name}`} className='link'>
                <img src={props.img} alt="img"  className='imgcat' />
                <h2>{props.name}</h2>
            </Link>
        </SC.CatImgs>
    )
}
export default Cat