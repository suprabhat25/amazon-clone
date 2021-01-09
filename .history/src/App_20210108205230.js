import React from 'react'
import './App.css';
import './index.css'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Components/Home'
import Checkout from './Components/Checkout'
import Login from "./Components/Login"
import {useStateValue} from './Components/StateProvider'
import {auth} from "./Components/firebase";
function App() {
  const [{basket},dispatch] = useStateValue();

  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
     if(authUser){
       //user is logged in
       
     }
     else{
       //user is logged out
     }
    })
  },[])
  return (
   <Router>
     <div className="app">
       <Switch>
         <Route path='/checkout'>
         <Header/>
          <h1>checkout</h1>
          <Checkout/>
         </Route>
         <Route path='/login'>
           <Login/>
         </Route>
         <Route path='/'>
           <Header/>
           <Home/>
         </Route>
       </Switch>
     </div>
   </Router>
  );
}

export default App;
