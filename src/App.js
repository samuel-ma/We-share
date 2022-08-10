import {Route} from 'react-router-dom'
import Home from './pages/main'
import Navbar from './components/navbar'
import Sidebar from './components/sidebar';
import Conversation from './pages/messages/Conversation';
import Login from './pages/forms/Login';
import Profile from './pages/profile';


function App() {

  return (
    <>
    <div className='app-outer-wraper'>
      <Navbar />
      <div className='app-wraper d-flex'>
        <Sidebar />
        <div className='app-content'>
          <Route exact path='/' component={Home} />
          <Route exact path='/users/profile/:userId' component={Profile} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/messages/conversation/:conversationId' component={Conversation} />
        </div>
      </div>
    </div>
    </>
  );
}


export default App;
