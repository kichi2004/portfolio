import React from 'react'
import { SkillType } from '../assets/items'
import './SkillBox.scss'

interface SkillBoxProps extends SkillType {}

export default class SkillBox extends React.Component<SkillBoxProps> {
  render() {
    const langImage: any = require(`../assets/langs/${this.props.directory}/index.png`)
    const frameworks = (this.props.frameworks || []).map(x => (
      <div className="framework-item" key={x.name}>
        <img
          className="framework-item__image"
          alt={x.name}
          src={require(`../assets/langs/${this.props.directory}/${x.imagePath}`)}
        />
        <div className="framework-item__text">{x.name}</div>
      </div>
    ))
    return (
      <div className="skill-box">
        <img
          className="skill-box__lang-image"
          src={langImage}
          alt={this.props.name}
        />
        <div
          className="skill-box__lang-name"
          style={{
            fontSize: this.props.fontSize || '3.6rem'
          }}
        >
          {this.props.name}
        </div>
        <div className="skill-box__since">{this.props.since}</div>
        <div className="skill-box__comment">{this.props.comment}</div>
        <div className="framework-list">{frameworks}</div>
      </div>
    )
  }
}
