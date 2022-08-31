import { useAppSelector } from "../../redux/store"
import { OpacityLoader } from "../loaders/OpacityLoader"

export const Images = () => {
    const { catImg } = useAppSelector().catSlice

    return (
        <>
            <h1 className="otherPhotos">Other photos</h1>
            <div className="conCat">
                {
                    catImg?.length === 0 ? <OpacityLoader /> :
                        catImg?.map(e => <img src={e} alt="img"  className="imgCat" />)
                }
            </div>
        </>
    )
}