import React from 'react'
import { Path } from 'typescript'

type ProfileType = {
  key: string
  title: string
  content: JSX.Element
}

function calcYear(from: Date) {
  return Math.floor(
    (new Date().getTime() - from.getTime()) / (1000 * 60 * 60 * 24 * 365)
  )
}

const calcAge = () => calcYear(new Date(2004, 1, 28))
const calcGrade = () => calcYear(new Date(2009, 4, 1))

export const ProfileItems: ProfileType[] = [
  {
    key: 'name',
    title: 'Name',
    content: <div>Takayuki Ueno</div>
  },
  {
    key: 'age',
    title: 'Age',
    content: <div>{calcAge()}</div>
  },
  {
    key: 'school',
    title: 'School',
    content: (
      <div>
        Tsukuba Kaisei Fukuoka High School
        <span className="main-view__profile__table__row__small">
          ({calcGrade()}th grade)
        </span>
      </div>
    )
  },
  {
    key: 'work',
    title: 'Work',
    content: (
      <div>
        diffeasy Inc.
        <br />
        working as a programmer
      </div>
    )
  },
  {
    key: 'lives',
    title: 'From & Lives',
    content: <div>Fukuoka City, Fukuoka Prefecture</div>
  }
]

export type SkillType = {
  name: string
  directory: string
  comment: string
  since: string
  frameworks?: Framework[]
}

type Framework = {
  name: string
  filePath: string
}

export const SkillItems: SkillType[] = [
  {
    name: 'C#',
    directory: 'csharp',
    since: '2017/01～',
    comment: '',
    frameworks: [
      {
        name: '.NET Core',
        filePath: 'dotnet_core.png'
      }
    ]
  }
]
