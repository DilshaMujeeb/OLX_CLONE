import React,{useEffect,useContext} from 'react';
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Signup from './Pages/Signup';
import LoginPage from './Pages/Login'
import Create from './Pages/Create';
import View from './Pages/ViewPost';
import './App.css';
import { AuthContext, FirebaseContext } from './store/FirebaseContext';
import Post from './store/PostContext'
/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';


function App() {
  const { setUser } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
       setUser(user)
     })
  })
  return (
    <div>
      <Post>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/create" element={<Create />} />
          <Route path="/view" element={<View />} />
        </Routes>
        </Router>
        </Post>
    </div>
  );
}

export default App;
