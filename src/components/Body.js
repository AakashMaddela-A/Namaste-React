import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = ()=>{

    // state variable use state
    const [listOfRestaurants , setListOfRestaurants] = useState([]);
    const [filteredRestaurant , setFilteredRestaurant] = useState([]);

    // track the user typing
    const[searchText ,setSearchText] = useState("")

    // useEffect
    useEffect(()=>{
        fetchData();
    },[]);

    // live rendering
    const fetchData = async()=>{
        const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=17.38430&lng=78.45830&carousel=true&third_party_vendor=1");

        const json = await data.json();

        console.log(json);

        // optional chaining
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    }

    // click handler to filter top rated
  const handleTopRated = () => {
    const filteredList = listOfRestaurants.filter(res => res.info.avgRating > 4);
    setFilteredRestaurant(filteredList);
  };


    // ternary operator
    return listOfRestaurants.length===0? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-Box" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value); 
                    }} />
                    <button onClick={()=>{
                        //filter here for the user typed
                        const filteredList = listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText));

                        setFilteredRestaurant(filteredList);

                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={handleTopRated}
                >
                    Top Rated Restaurant
                </button>
            </div>

            <div className="res-container">
                {
                    // for bug solvable making duplicate and storing
                    filteredRestaurant.map((restaurant) => (
                    <Link key = {restaurant.info.id} to={"/restaurants/"+ restaurant.info.id}><RestaurantCard 
                    resData = {restaurant} 
                    /></Link>))
                }
            </div>
        </div>
    )
}

export default Body;