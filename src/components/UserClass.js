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