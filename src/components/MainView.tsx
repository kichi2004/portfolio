import React from 'react'
import './MainView.scss'
import MainViewContent from './MainViewContent'
import { OtherSkillItems, ProfileItems, SkillItems } from '../assets/items'
import SkillBox from './SkillBox'

export default class MainView extends React.Component {
  render() {
    const profile = ProfileItems.map(x => (
      <div className="row" key={x.key}>
        <div className="row__title">{x.title}</div>
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
      <div className="other-skill" key={x.name}>
        <img
          className="other-skill__image"
          src={require(`../assets/langs/other/${x.imagePath}`)}
          alt={x.name}
        />
        <div className="other-skill__text">{x.name}</div>
      </div>
    ))

    return (
      <div className="main-view">
        <div className="profile">
          <MainViewContent name={'Profile'}>{profile}</MainViewContent>
        </div>
        <div className="skills">
          <MainViewContent name={'Skills'}>
            <div className="skill-contents">{skills}</div>

            <div className="other-skills">{otherSkills}</div>
          </MainViewContent>
        </div>
        <div>
          <MainViewContent name={'Contact'}>
            <a href="mailto:mail@kichi2004.jp" className="contact-mail">
              <img
                src={require('../assets/mail.png')}
                alt="mail"
                className="contact-mail__icon"
              />
              <div className="contact-mail__address">mail@kichi2004.jp</div>
            </a>
            <a
              href="https://twitter.com/messages/compose?recipient_id=&ref_src=twsrc%5Etfw"
              className="contact-twitter"
            >
              <img
                src={require('../assets/twitter.png')}
                alt="twitter"
                className="contact-twitter__icon"
              />
              <div className="contact-twitter__address">
                Message @kichi2004_
              </div>
            </a>
          </MainViewContent>
        </div>
      </div>
    )
  }
}
