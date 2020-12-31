import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import HomePage from "./components/Home"

import NewProject from "./components/NewProject";
import NewTask from "./components/NewTask";
import MyProjects from "./components/MyProjects";
function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (

    <div id='main'>
      <Router>
        <Navigation isLoaded={isLoaded} />
        {
          isLoaded && (
            <Switch>
              <Route path='/projects/:id/tasks'>
                <NewTask />
              </Route>
              <Route path="/project/new">
                <NewProject />
              </Route>
              <Route path="/login" >
                <LoginFormPage />
              </Route>
              <Route path="/signup">
                <SignupFormPage />
              </Route>
              <Route path="/projects">
                <MyProjects />
              </Route>
              <Route path="/" exact>
                <HomePage />
              </Route>
            </Switch>
          )
        }
      </Router>
    </div>

  );
}

export default App;

// return (
//   <>
//     <Navigation isLoaded={isLoaded} />
//     {isLoaded && (
//       <Router>
//         <Sidebar />
//         <Switch>
//           {/* <Route path="/login" >
//             <LoginFormPage />
//           </Route> */}
//           <Route path="/signup">
//             <SignupFormPage />
//           </Route>
//           <Route path="/" exact>
//             <HomePage />
//           </Route>
//         </Switch>
//       </Router>
//     )}
//   </>
// );
// }
