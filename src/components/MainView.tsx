import React from 'react'
import './MainView.scss'
import MainViewContent from './MainViewContent'
import {
  Devices,
  Experiences,
  Life,
  OtherSkillItems,
  ProfileItems,
  SkillItems
} from '../assets/items'
import SkillBox from './SkillBox'
import Device from './Device'
import MailIcon from '../assets/mail.png'
import XIcon from '../assets/twitter.png'

export default class MainView extends React.Component {
  render() {
    const profile = ProfileItems.map((x) => (
      <div className="row" key={x.key}>
        <div className="row__title">{x.title}</div>
        <div>
          {x.content}
          {x.contentJa ? <div className="row__en">{x.contentJa}</div> : <></>}
        </div>
      </div>
    ))

    const skills = SkillItems.map((x) => (
      <SkillBox
        key={x.name}
        name={x.name}
        directory={x.directory}
        frameworks={x.frameworks}
        comment={x.comment}
        since={x.since}
        fontSize={x.fontSize}
      />
    ))

    const otherSkills = OtherSkillItems.map((x) => (
      <div className="other-skill" key={x.name}>
        <img
          className="other-skill__image"
          src={`/langs/other/${x.imagePath}`}
          alt={x.name}
        />
        <div className="other-skill__text">{x.name}</div>
      </div>
    ))

    const devices = Devices.map((x) => (
      <Device key={x.name} name={x.name} spec={x.spec} />
    ))
    return (
      <div className="main-view">
        <section className="profile">
          <MainViewContent name={'Profile'}>{profile}</MainViewContent>
        </section>
        <section className="skills">
          <MainViewContent name={'Skills'}>
            <div className="skill-contents">{skills}</div>

            <div className="other-skills">{otherSkills}</div>
          </MainViewContent>
        </section>
        <section className="experiences">
          <MainViewContent name={'Experiences'}>
            {Experiences.map((ex) => (
              <div className="experience">
                <span className="experience__date">
                  {ex.fromDate}～{ex.toDate}
                </span>
                <br />
                {ex.text}
              </div>
            ))}
          </MainViewContent>
        </section>
        <section className="life">
          <MainViewContent name={'Life & Events'}>{Life}</MainViewContent>
        </section>
        <section>
          <MainViewContent name="PCs">
            <div className="devices">{devices} </div>
          </MainViewContent>
        </section>
        <section>
          <MainViewContent name={'Contact'}>
            <a href="mailto:mail@kichi2004.jp" className="contact-email">
              <img
                src={MailIcon}
                alt="mail"
                className="contact-email__icon"
              />
              <div className="contact-email__address">mail@kichi2004.jp</div>
            </a>
            <a
              href="https://twitter.com/messages/compose?recipient_id=&ref_src=twsrc%5Etfw"
              className="contact-twitter"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={XIcon}
                alt="X (Twitter)"
                className="contact-twitter__icon"
              />
              <div className="contact-twitter__address">
                Message @kichi2004_
              </div>
            </a>
          </MainViewContent>
        </section>
      </div>
    )
  }
}
