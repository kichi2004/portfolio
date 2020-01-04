import React from 'react'
import './MainViewContent.scss'

interface MainViewContentProps {
  name: string
}

export default class MainViewContent extends React.Component<
  MainViewContentProps
> {
  render = () => (
    <div className="main-view-content">
      <div className="main-view-content__title">{this.props.name}</div>
      <div className="main-view-content__content">{this.props.children}</div>
    </div>
  )
}
