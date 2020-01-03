import React from 'react'
import './MainViewContent.css'

interface MainViewContentProps {
  title: string
}

export default class MainViewContent extends React.Component<
  MainViewContentProps
> {
  render = () => (
    <div className="main-view-content">
      <div className="main-view-content__title">{this.props.title}</div>
      <div className="main-view-content__content">{this.props.children}</div>
    </div>
  )
}
