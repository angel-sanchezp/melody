import React from 'react';
import { useSelector } from 'react-redux'

import { Switch, Route } from "react-router-dom";
import { withRouter } from "react-router";
import routes from './routes.js'

import { AppHeader } from "./cmps/AppHeader.jsx";
import { Footer } from './cmps/Footer.jsx';
import { YouPlayer } from './cmps/YouPlayer.jsx';



export const App = () => {
  const { videoToPlay } = useSelector(state => state.boardModule)

  return (
    <>
      <AppHeader />
      <main className="main-app">
        <Switch>
          {routes.map(route => <Route key={route.path} exact component={route.component} path={route.path} />)}
        </Switch>
      </main>
      <div className="player-song">
       <YouPlayer videoId={videoToPlay} />
      </div>
      <Footer />
    </>
  )
}

