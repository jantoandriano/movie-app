import { Link } from "react-router-dom"
import styled from "@emotion/styled";

const Menu = styled(Link)`
    color: white;
    background-color: black;
    border-radius: 5px;
    padding: 10px;  
    text-decoration: none;
`

export const MenuNavbar = () => {
    return (
        <>
            <Menu to="/movie/fav">Favourites</Menu>
            <Menu to="/movie/top-rated">Top Rated</Menu>
            <Menu to="/movie/popular">Popular</Menu>
        </>
    )
}