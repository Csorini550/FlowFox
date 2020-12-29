import "./index.css";
import picture from "./cute-fox-cartoon_160606-227.jpg"


import {useSelector} from 'react-redux';




const Home = () => {

    const loggedInUser = useSelector(state => {
       
        return state.session.user;
    })


    return (
        <div>
        <div id="home-page-container">
            <img src={picture} />
            <div id="home-page-overlay">
                <h1>Welcome to FoxyFlow</h1>
            </div>
            </div>
               {loggedInUser && <h3> Welcome {loggedInUser.username} start building that foxy flow</h3>}
        </div>
    )
};


export default Home;