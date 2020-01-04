import React from 'react'
import './MainView.scss'
import MainViewContent from './MainViewContent'
import { ProfileItems, SkillItems } from '../assets/items'
import SkillBox from './SkillBox'

export default class MainView extends React.Component {
  render() {
    const profile = ProfileItems.map(x => (
      <div className="main-view__profile__table__row" key={x.key}>
        <div>{x.title}</div>
        {x.content}
      </div>
    ))

    const skills = SkillItems.map(x => (
      <div className="main-view__skills__skill" key={x.name}>
        <SkillBox
          name={x.name}
          directory={x.directory}
          frameworks={x.frameworks}
          comment={x.comment}
          since={x.since}
        />
      </div>
    ))

    return (
      <div className="main-view">
        <div className="main-view__profile">
          <MainViewContent name={'Profile'}>
            <div className="main-view__profile__table">{profile}</div>
          </MainViewContent>
        </div>
        <div className="main-view__skills">
          <MainViewContent name={'Skills'}>
            <div className="main-view__skills__contents">{skills}</div>
          </MainViewContent>
        </div>
      </div>
    )
  }
}
