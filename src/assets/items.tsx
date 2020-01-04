import React from 'react'

type ProfileType = {
  key: string
  title: string
  content: JSX.Element
}

const calcYear = (from: Date) =>
  Math.floor(
    (new Date().getTime() - from.getTime()) / (1000 * 60 * 60 * 24 * 365)
  )

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
    key: 'birthday',
    title: 'Birthday',
    content: <div>Jan 28, 2004</div>
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
  fontSize?: string
  frameworks?: Framework[]
}

type Framework = {
  name: string
  imagePath: string
}

export const SkillItems: SkillType[] = [
  {
    name: 'C#',
    directory: 'csharp',
    since: '2017/01～',
    comment:
      '競技プログラミングや，Windows Forms アプリ / Twitter BOT 開発，業務でのバッチ作成など，幅広い分野で利用しています。',
    frameworks: [
      {
        name: '.NET Core',
        imagePath: 'dotnet_core.png'
      },
      {
        name: '.NET Framework',
        imagePath: 'dotnet_framework.png'
      }
    ]
  },
  {
    name: 'Ruby',
    directory: 'ruby',
    since: '2019/05～',
    comment: '主に業務でのバックエンド開発に利用しています。',
    frameworks: [
      {
        name: 'Ruby on Rails',
        imagePath: 'rails.svg'
      }
    ]
  },
  {
    name: 'MySQL',
    directory: 'mysql',
    since: '2019/05～',
    comment:
      'データベース管理・アクセス (プログラム内を含む) に利用しています。'
  },
  {
    name: 'HTML/CSS',
    directory: 'html',
    since: 'Unknown',
    fontSize: '2.2rem',
    comment: 'Web アプリケーションを作るための前提知識としています。',
    frameworks: [
      {
        name: 'HTML5',
        imagePath: 'html5.png'
      },
      {
        name: 'CSS',
        imagePath: 'css3.png'
      },
      {
        name: 'SCSS / SASS',
        imagePath: 'sass.svg'
      }
    ]
  },
  {
    name: 'JavaScript',
    directory: 'js',
    since: 'Unknown',
    fontSize: '2.2rem',
    comment:
      'TypeScript を含め， Web アプリケーションを作るための前提知識としています。',
    frameworks: [
      {
        name: 'ECMAScript',
        imagePath: 'ecma.png'
      },
      {
        name: 'TypeScript',
        imagePath: 'typescript.svg'
      }
    ]
  },
  {
    name: 'Vue.js',
    directory: 'vue',
    since: '2019/01～',
    comment: '業務を含むフロントエンド開発に利用しています。',
    frameworks: [
      {
        name: 'NuxtJS',
        imagePath: 'nuxt.png'
      },
      {
        name: 'Vuetify.js',
        imagePath: 'vuetify.webp'
      }
    ]
  },
  {
    name: 'React.js',
    directory: 'react',
    since: '2020/01～',
    fontSize: '3rem',
    comment: 'このサイト (ポートフォリオ) 作成に初めて利用しました。'
  },
  {
    name: 'AtCoder',
    directory: 'atcoder',
    since: '2018/02～',
    comment: '競技プログラミング。実質本業で，2020年1月時点で水色です。',
    fontSize: '2.8rem',
    frameworks: [
      {
        name: 'Python',
        imagePath: 'python.png'
      },
      {
        name: 'C++',
        imagePath: 'cpp.png'
      }
    ]
  }
]

export const OtherSkillItems: {
  name: string
  imagePath: string
}[] = [
  {
    name: 'PHP',
    imagePath: 'php.png'
  },
  {
    name: 'Java',
    imagePath: 'java.png'
  },
  {
    name: 'Kotlin',
    imagePath: 'kotlin.png'
  }
]
