import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { RootState } from "../redux/store"
import { ContSearch } from "../styles";

export const Search = () => {

    const { search } = useSelector((state: RootState) => state.catSlice);
    return (
        <ContSearch>
            <ul >
                {
                    search &&
                    search.map(e =>
                        <Link to={`/breed/${e.name}`}>
                            <li>
                                {e.name}
                            </li>
                        </Link>
                    )
                }
            </ul>
        </ContSearch>
    )
}
