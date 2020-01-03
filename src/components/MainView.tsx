import React from 'react'
import './MainView.css'
import MainViewContent from './MainViewContent'

export default class MainView extends React.Component {
  render() {
    return (
      <div className="main-view">
        <div className="main-view__content">
          <MainViewContent title={'Title'}>Content</MainViewContent>
        </div>
      </div>
    )
  }
}
