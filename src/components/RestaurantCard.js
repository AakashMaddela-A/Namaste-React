import { CDN_URL } from "../utils/constants";


// restaurant card component to reuse in the body
const RestaurantCard = (props)=>{

    const {resData} = props;
    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo,deliveryTime,sla} = resData?.info;
    
    return(
        <div className="res-card" style={{backgroundColor: "#f6ea68"}}>
            <img className="res-logo" alt="res-logo" src={CDN_URL+`${resData.info.cloudinaryImageId}`} />
            <h3>{name}</h3>
            <h4>{cuisines?.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla?.deliveryTime} minutes</h4>
        </div>
    )
}

export default RestaurantCard;