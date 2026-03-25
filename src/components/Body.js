import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = ()=>{

    // state variable use state
    const [listOfRestaurants,setListOfRestaurants] = useState([]);

    // useEffect
    useEffect(()=>{
        fetchData();
    },[]);

    // live rendering
    const fetchData = async()=>{
        const data = await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=17.38430&lng=78.45830&carousel=true&third_party_vendor=1");

        const json = await data.json();

        console.log(json);

        // optional chaining
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    }

    // click handler to filter top rated
  const handleTopRated = () => {
    const filteredList = listOfRestaurants.filter(res => res.info.avgRating > 4);
    setListOfRestaurants(filteredList);
  };


    // ternary operator
    return listOfRestaurants.length===0? <Shimmer /> : (
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