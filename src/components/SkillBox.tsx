import React from 'react'
import { SkillType } from '../assets/items'
import './SkillBox.scss'

interface SkillBoxProps extends SkillType {}

export default class SkillBox extends React.Component<SkillBoxProps> {
  render() {
    const langImage: any = require(`../assets/langs/${this.props.directory}/index.png`)
    return (
      <div className="skill-box">
        <img
          className="skill-box__lang-image"
          src={langImage}
          alt={this.props.name}
        />
        <div className="skill-box__lang-name">{this.props.name}</div>
        <div className="skill-box__since">{this.props.since}</div>
        <div className="skill-box__comment">{this.props.comment}</div>
      </div>
    )
  }
}
