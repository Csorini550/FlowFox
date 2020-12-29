import "./index.css";
import picture from "./cute-fox-cartoon_160606-227.jpg"


import { useSelector } from 'react-redux';





const Home = () => {

    const loggedInUser = useSelector(state => {

        return state.session.user;
    })


    return (
        <div>
            {loggedInUser && <h3> Welcome {loggedInUser.username} start building that foxy flow</h3>}
            <div id="home-page-container">
                <img src={picture} />

            </div>
        </div>
    )
};


export default Home;