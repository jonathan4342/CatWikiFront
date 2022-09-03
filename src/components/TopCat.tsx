import { Link } from "react-router-dom"
import { CatsProps } from "../interfaces/Interfaces"
import { Cat, CatImg, CatText, ContainerTopCat, Title } from "../styles"

export const TopCat = (props: CatsProps) => {

    return (
        <ContainerTopCat>
            <Link to={`/breed/${props.name}`} >
                <Cat>
                    <CatImg>
                        <img src={props.img} alt="img" />
                    </CatImg>
                    <CatText>
                        <Title fontWeight='600'>{props.number + 1}. {props.name}</Title>
                        <Title fontWeight='500' fontSize='1.125rem'>{props.description}</Title>
                    </CatText>
                </Cat>
            </Link>
        </ContainerTopCat>
    )
}
