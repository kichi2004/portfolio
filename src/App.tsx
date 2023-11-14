import React from 'react'
import MainView from './components/MainView'
import './App.scss'

const App: React.FC = () => {
  return (
    <div className="wrapper">
      <div className="top">
        <div className="elements">
          <img
            className="elements__icon"
            src={require('./assets/icon.png')}
            alt="ICON"
          />
          <span className="elements__name">kichi2004</span>
        </div>
        <div className="top__sp">
          このサイトは、 PC での閲覧を推奨しています。
          <br />I recommend you to see this website with PC.
        </div>
        <div className="triangle" />
      </div>
      <MainView />
      <div className="footer">
        (c) kichi2004 2023
        <br />
        Last Update: 2023/11/14
      </div>
    </div>
  )
}

export default App
