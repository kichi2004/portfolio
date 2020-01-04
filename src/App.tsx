import React from 'react'
import MainView from './components/MainView'
import './App.scss'

const App: React.FC = () => {
  return (
    <div className="wrapper">
      <div className="top">
        <div className="top__elements">
          <img
            className="top__elements__icon"
            src={require('./assets/icon.png')}
            alt="ICON"
          />
          <span className="top__elements__name">kichi2004</span>
        </div>
        <div className="triangle" />
      </div>
      <MainView />
      <div className="footer">
        (c) kichi2004 2020-2020
        <br />
        Last Update: 2020/01/05
      </div>
    </div>
  )
}

export default App
