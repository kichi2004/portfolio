import React from 'react'
import './MainView.scss'
import MainViewContent from './MainViewContent'
import { OtherSkillItems, ProfileItems, SkillItems } from '../assets/items'
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
      <div key={x.name}>
        <SkillBox
          name={x.name}
          directory={x.directory}
          frameworks={x.frameworks}
          comment={x.comment}
          since={x.since}
          fontSize={x.fontSize}
        />
      </div>
    ))

    const otherSkills = OtherSkillItems.map(x => (
      <div className="main-view__skills__other-skill__box" key={x.name}>
        <img
          className="main-view__skills__other-skill__box__image"
          src={require(`../assets/langs/other/${x.imagePath}`)}
          alt={x.name}
        />
        <div className="main-view__skills__other-skill__box__text">
          {x.name}
        </div>
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
            <div className="main-view__skills__other-skill">{otherSkills}</div>
          </MainViewContent>
        </div>
        <div>
          <MainViewContent name={'Contact'}>
            <a
              href="mailto:mail@kichi2004.jp"
              className="main-view__contact__mail"
            >
              <img
                src={require('../assets/mail.png')}
                alt="mail"
                className="main-view__contact__mail__icon"
              />
              <div className="main-view__contact__mail__address">
                mail@kichi2004.jp
              </div>
            </a>
            <a
              href="https://twitter.com/messages/compose?recipient_id=&ref_src=twsrc%5Etfw"
              className="main-view__contact__twitter"
            >
              <img
                src={require('../assets/twitter.png')}
                alt="twitter"
                className="main-view__contact__twitter__icon"
              />
              <div className="main-view__contact__twitter__address">
                Message @kichi2004_
              </div>
            </a>
          </MainViewContent>
        </div>
      </div>
    )
  }
}
