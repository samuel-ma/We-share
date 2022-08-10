import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import SocketContextProvider from './contexts/SocketContextProvider'
import ProfileContextProvider from './contexts/ProfileContextProvider'
import UserContextProvider from './contexts/UserContextProvider'
import MessagesContextProvider from './contexts/MessagesContextProvider'
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import './style/style.css'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <ProfileContextProvider>
          <SocketContextProvider>
            <UserContextProvider>
              <MessagesContextProvider>
                <App />
              </MessagesContextProvider>
            </UserContextProvider>
          </SocketContextProvider>
        </ProfileContextProvider>
      </Switch>
    </Router>
    </React.StrictMode>,
  document.getElementById('root')
);


