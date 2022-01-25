import React from 'react';
import './App.css';
import Header from './component/Header/header';
import Sidebar from './component/sidebar/sidebar';
import Feed from './component/feed/Feed';
import Widgets from './component/widgets/widgets';
import Login from './component/login/login';
import { useStateValue } from './context/stateProvider';

function App() {
  const [{user} , dispatch] = useStateValue();
  return (
    <div className="app">
      {!user ?  <Login/> :
      <>
       <Header />
       <div className = "app_body">
         <Sidebar />
         <Feed />
         <Widgets/>
       </div>
       </>
      }
    </div>
  );
}

export default App;
