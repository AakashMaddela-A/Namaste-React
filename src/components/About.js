import User from "./User";
import UserClass from "./UserClass";


const About = ()=>{
    return(
        <div>
            <h1>About</h1>
            <h2>This is Namaste React</h2>
            <UserClass name={"Aakash (Class)"} location={"Hyderabad (class)"} />
        </div>
    )
}

export default About;