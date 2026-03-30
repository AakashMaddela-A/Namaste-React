import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

    // for dynamic for id of restaurant
    const {resId} = useParams();

    // custom hook created
    const resInfo = useRestaurantMenu(resId);


    // if nothing there
    if (!resInfo) return <Shimmer />;

    
    const { name, cuisines, costForTwoMessage } = resInfo?.data?.cards[2]?.card?.card?.info || {};

    const itemCards = resInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;

    
    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines?.join(", ")}</p>
            <h2>Menu</h2>
            <ul>
                {itemCards?.map(item =>
                    <li key={item.card.info.id}>
                        {item.card.info.name} - {item.card.info.defaultPrice/100 || item.card.info.price/100}
                    </li>)}
            </ul>
        </div>
    );
};

export default RestaurantMenu;