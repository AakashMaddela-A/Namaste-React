
starting of react ->


const heading = React.createElement("h1",{id: "heading"},"Hello aakash from react!");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

--------------------------------------------------

const parent = React.createElement("div",
    {id:"parent"},
    React.createElement("div",{id:"child"},
        [
            React.createElement("h1",{},"Im h1 tag"),
            React.createElement("h2",{},"Im h2 tag"),
        ]
    )
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

--------------------------------------------------

# Namaste React 🚀

--
# Parcel
-Dev Build
-Local Server
-HMR = Hot Module Replacement
-File Watching Algorithm -written in C++
-Caching -Faster Builds
-Image Optimization
-Minification
-Bundling
-Compress
-consistent hashing
-code splitting
-differential bundling - support older browsers
-diagnostic
-error handling
-https
-tree shaking - remove unused code
-different dev and prod bundles

--------------------------------------------------------

# Namste food ordering

/**
 * 
 * Header
 *  -logo
 *  -nav items
 * body
 * -search
 * -restaurntcontainer
 *    -restaurantcard
 *        -img
 *        -name of res, star rating, cuisines, delivery time
 * footer
 * -copyright
 * -links
 * -address
 * -contact
 * 
 * * */

------------------------------------------------------------


// jsx - html like syntax (transpiled before it reaches the js engine)
// parcel will do this all inside the babel

const jsxHeading = (<h1>Namaste React using jsx</h1>);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);

------------------------------------------------------------------

// React Component
// class base components
// functional components

// functional components
const HeadingComponent = ()=>{
    return <h1>Namaste React Functional Component</h1>
}

------------------------------------------------------------------

// functional components
const HeadingComponent = ()=>{
    <div id="container">
        <h1 className="heading">Namaste React Functional Component</h1>
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);

------------------------------------------------------------------

            Component Composition

import React from "react";
import ReactDOM from "react-dom/client";


const Title = () => (<h1 id="heading">Namaste React using jsx</h1>);

const HeadingComponent = ()=>(
    <div id="container">
        <Title />
        <h1 className="heading">Namaste React Functional Component</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);

-------------------------------------------------------------

            React element inside component

import React from "react";
import ReactDOM from "react-dom/client";


const Title = (<h1 id="heading">Namaste React using jsx</h1>);

const HeadingComponent = ()=>(
    <div id="container">
        {Title}
        <h1 className="heading">Namaste React Functional Component</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);

-----------------------------------------------------------------

            component binding in react element


import React from "react";
import ReactDOM from "react-dom/client";


const elem = <span>React Element</span>

const HeadingComponent = ()=>(
    <div id="container">
        <h1 className="heading">Namaste React Functional Component</h1>
    </div>
);

const Title = (
    <h1 id="heading">
    {elem}
    Namaste React using jsx
    <HeadingComponent />
    </h1>
    );


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(Title);

---------------------------------------------------------------

            res card hard coded -> 

const RestaurantCard = ()=>{
    return(
        <div className="res-card" style={{backgroundColor: "#c8c4c4"}}>
            <img className="res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ijy2jxi7lfwsebdtazpi" />
            <h3>Meghana Foods</h3>
            <h4>Haleem, Biryani, Kebabs</h4>
            <h4>4.4 stars</h4>
            <h4>38 minutes</h4>
        </div>
    )
}


// body component
const Body = ()=>{
    return(
        <div className="body">
            <div className="search">
                Search
            </div>

            <div className="res-container">
                <RestaurantCard />
                <RestaurantCard />
            </div>
        </div>
    )
}

--------------------------------------------------------------


const RestaurantCard = ({resName, cuisine}) =>{
    return(
        <div>
            <h3>{resName}</h3>
            <h3>{cuisine}</h3>
        </div>
    )
}

---------------------------------------------------------------------


const RestaurantCard = (props)=>{

    
    return(
        <div className="res-card" style={{backgroundColor: "#c8c4c4"}}>
            <img className="res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ijy2jxi7lfwsebdtazpi" />
            <h3>{props.resName}</h3>
            <h4>{props.cusisine}</h4>
            <h4>{props.rating}</h4>
            <h4>{props.deliverytime}</h4>
        </div>
    )
}


// body component
const Body = ()=>{
    return(
        <div className="body">
            <div className="search">
                Search
            </div>

            <div className="res-container">
                <RestaurantCard resName="Meghana Foods" cusisine="Haleem, Biryani, Kebabs" rating="4.4 stars" deliverytime="30 minutes"/>
                <RestaurantCard resName="KFC" cusisine="Burger, Fast Food, Cokes"/>
            </div>
        </div>
    )
}

-------------------------------------------------------------------


                swiggy api data


// restaurant card component to reuse in the body
const RestaurantCard = (props)=>{

    const {resData} = props;
    
    return(
        <div className="res-card" style={{backgroundColor: "#c8c4c4"}}>
            <img className="res-logo" alt="res-logo" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/${resData.info.cloudinaryImageId}`} />
            <h3>{resData.info.name}</h3>
            <h4>{resData.info.cuisines.join(", ")}</h4>
            <h4>{resData.info.avgRating}</h4>
            <h4>{resData.info.costForTwo} For Two</h4>
            <h4>{resData.info.sla.deliveryTime} minutes</h4>
        </div>
    )
}



// live data of 
const resList = [ ];


// body component
const Body = ()=>{
    return(
        <div className="body">
            <div className="search">
                Search
            </div>

            <div className="res-container">
                <RestaurantCard resData={resList[1]} />
            </div>
        </div>
    )
}

------------------------------------------------------------------

                    swiggy api data

// restaurant card component to reuse in the body
const RestaurantCard = (props)=>{

    const {resData} = props;
    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo,deliveryTime,sla} = resData?.info;
    
    return(
        <div className="res-card" style={{backgroundColor: "#fbf8f8"}}>
            <img className="res-logo" alt="res-logo" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/${resData.info.cloudinaryImageId}`} />
            <h3>{name}</h3>
            <h4>{cuisines?.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla?.deliveryTime} minutes</h4>
        </div>
    )
}


// body component
const Body = ()=>{
    return(
        <div className="body">
            <div className="search">
                Search
            </div>

            <div className="res-container">
                {
                    resList.map((restaurant) => (
                    <RestaurantCard 
                    key = {restaurant.info.id}
                    resData = {restaurant} 
                    />))
                }
            </div>
        </div>
    )
}

-------------------------------------------------------------
-------------------------------------------------------

import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";

const Body = ()=>{

    // state variable
    const [listOfRestaurants,setListOfRestaurants] = useState(resList);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async()=>{
        const data = await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=17.38430&lng=78.45830&carousel=true&third_party_vendor=1");

        const json = await data.json();
    }

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

-----------------------------------------------------

        after removing the mockkData


import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";

const Body = ()=>{

    // state variable
    const [listOfRestaurants,setListOfRestaurants] = useState([]);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async()=>{
        const data = await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=17.38430&lng=78.45830&carousel=true&third_party_vendor=1");

        const json = await data.json();

        console.log(json);

        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    }

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


-------------------------------------------------


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


  // spinning loader
  if(listOfRestaurants.length===0){
    // shimmer ui fake cards
    return <Shimmer />
  }


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

--------------------------------------------------

   conditional rendering

    // conditional rendering
  if(listOfRestaurants.length===0){
    // shimmer ui fake cards
    return <Shimmer />
  }

  --------------------------------------------------
  -----------------------------------------------------
  --------------------------------------------------------


            class and function based component difference


import User from "./User";
import UserClass from "./UserClass";


const About = ()=>{
    return(
        <div>
            <h1>About</h1>
            <h2>This is Namaste React</h2>
            <User name={"Aakash (function)"}/>

            <UserClass name={"Aakash (Class)"} />
        </div>
    )
}

export default About;

////////////////////////////////////////////

  
import React from "react"


class UserClass extends React.Component{

    constructor(props){
        super(props);

        console.log(props);
    }
     
    render(){
        return(
            <div className="user-card">
            <h2>Name : {this.props.name}</h2>
            <h3>Location : Hyderabad</h3>
            <h4>Contact : 8309135608</h4>
        </div>
        )
    }
}


export default UserClass;

////////////////////////////////////////////////


const User = (props)=>{
    return(
        <div className="user-card">
            <h2>Name : {props.name}</h2>
            <h3>Location : Hyderabad</h3>
            <h4>Contact : 8309135608</h4>
        </div>
    )
}

export default User;

--------------------------------------------------
------------------------------------------------


import User from "./User";
import UserClass from "./UserClass";


const About = ()=>{
    return(
        <div>
            <h1>About</h1>
            <h2>This is Namaste React</h2>
            <UserClass name={"Aakash (Class)"} location={"Hyderabad (class)"} />
            <UserClass name={"Dhoni (Class)"} location={"Ranchi (class)"} />
        </div>
    )
}

export default About;






import { useEffect, useState } from "react";



const User = (props)=>{

    const [count] = useState(0);
    const [count2] = useState(1);

    useEffect(()=>{
        // Api Call
    })


    return(
        <div className="user-card">
            <h1>Count = {count}</h1>
            <h1>Count2 = {count2}</h1>

            <h2>Name : {props.name}</h2>
            <h3>Location : Hyderabad</h3>
            <h4>Contact : 8309135608</h4>
        </div>
    )
}

export default User;







import React from "react"


class UserClass extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            count:0,
        }
    }

    componentDidMount(){
        console.log("Child Component Did Mount");

        // Api call
    }
     
    render(){
        return(
            <div className="user-card">
            <h1>Count : {this.state.count}</h1>
            <button onClick={()=>{
                this.setState({
                    count:this.state.count+1,
                })
            }}>Count Increase</button>
            <h2>Name : {this.props.name}</h2>
            <h3>Location : {this.props.location}</h3>
            <h4>Contact : 8309135608</h4>
        </div>
        )
    }
}


export default UserClass;

---------------------------------------------------
---------------------------------------------------



using class componenet


import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            UserInfo: {
                name:"Dummy",
                location:"Default",
                avatar_url:"http://dummy-photo.com",
            }
        };
    }

    async componentDidMount() {
        try {
            const data = await fetch("https://api.github.com/users/AakashMaddela-A");
            const json = await data.json();

            this.setState({
                UserInfo: json,
            });
        } 
        catch (error) {
            console.error(error);
        }
    }


    componentDidUpdate(){
        console.log("component did update");
    }

    componentWillUnmount(){
        console.log("component unmounting");
    }

    render() {

        const user = this.state.UserInfo; 

        if (!user) return <h2>Loading...</h2>;

        const { name, location, followers, public_repos, avatar_url } = user;

        return (
            <div className="user-card">
                <img src={avatar_url} alt="profile" width="100" />
                <h2>Name : {name || "Not Available"}</h2>
                <h3>Location : {location || "Not Available"}</h3>
                <h4>Followers : {followers}</h4>
                <h4>Repos : {public_repos}</h4>
            </div>
        );
    }
}

export default UserClass;

----------------------------------------------------