import React, { PropsWithChildren } from 'react'
import './MainViewContent.scss'

interface MainViewContentProps {
  name: string
}

export default class MainViewContent extends React.Component<
  PropsWithChildren<MainViewContentProps>
> {
  render = () => (
    <div className="main-view-content">
      <h3 className="main-view-content__title">{this.props.name}</h3>
      <div className="main-view-content__content">{this.props.children}</div>
    </div>
  )
}
