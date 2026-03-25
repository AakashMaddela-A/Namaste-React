import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = ()=>{

    // state variable
    const [listOfRestaurants,setListOfRestaurants] = useState(resList);

    // click handler to filter top rated
  const handleTopRated = () => {
    const filteredList = listOfRestaurants.filter(res => res.info.avgRating > 4);
    setListOfRestaurants(filteredList);
  };


    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={handleTopRated}
                >
                    Top Rated Restaurant
                </button>
            </div>

            <div className="res-container">
                {
                    listOfRestaurants.map((restaurant) => (
                    <RestaurantCard 
                    key = {restaurant.info.id}
                    resData = {restaurant} 
                    />))
                }
            </div>
        </div>
    )
}

export default Body;