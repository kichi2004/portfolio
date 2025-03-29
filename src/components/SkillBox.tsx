import React from 'react'
import { SkillType } from '../assets/items'
import './SkillBox.scss'

type SkillBoxProps = SkillType

export default class SkillBox extends React.Component<SkillBoxProps> {
  render() {
    const langImage = `/langs/${this.props.directory}/index.png`
    const frameworks = (this.props.frameworks || []).map((framework) => (
      <div className="framework-item" key={framework.name}>
        {framework.imagePath && (
          <img
            className="framework-item__image"
            alt={framework.name}
            src={`/langs/${this.props.directory}/${framework.imagePath}`}
          />
        )}
        <div className="framework-item__text">{framework.name}</div>
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
