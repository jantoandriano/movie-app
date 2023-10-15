import { Link } from "react-router-dom"
import styled from "@emotion/styled";

const Menu = styled(Link)`
    color: white;
    background-color: black;
    border-radius: 5px;
    padding: 5px;  
    text-decoration: none;
    font-size: 12px;

    @media (min-width: 768px) {
        padding: 10px;
        font-size: 16px;
    }
`

const MenuWrapper = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    @media (min-width: 768px) {
        margin-top: 10px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
`

export const MenuNavbar = () => {
    return (
        <MenuWrapper>
            <Menu to="/">Home</Menu>
            <Menu to="/movie/toprated">Top Rated</Menu>
            <Menu to="/movie/popular">Popular</Menu>
            <Menu to="/movie/fav">Favourites</Menu>
        </MenuWrapper>
    )
}