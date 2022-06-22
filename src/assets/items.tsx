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

const calcAge = () => calcYear(new Date(2004, 0, 28))

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
        University of Tsukuba,
        <br />
        College of Information Science
      </div>
    )
  },
  {
    key: 'work',
    title: 'Work',
    content: (
      <div>
        JX PRESS Corporation / JX通信社
        <br />
        <span className="small">Development Partner</span>
      </div>
    )
  },
  {
    key: 'lives',
    title: 'Live in',
    content: <div>Tsukuba City, Ibaraki</div>
  },
  {
    key: 'from',
    title: 'From',
    content: <div>Fukuoka City, Fukuoka</div>
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
  imagePath?: string
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
        name: '.NET / .NET Core'
      },
      {
        name: '.NET Framework'
      }
    ]
  },
  {
    name: 'Ruby',
    directory: 'ruby',
    since: '2019/05～',
    comment: 'バックエンド API 開発での利用経験があります。',
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
    comment: 'フロントエンドアプリ開発に利用しています．実務経験約 1 年半',
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
    comment: 'フロントエンドアプリ開発に利用しています．実務経験あり'
  },
  {
    name: 'Python',
    directory: 'python',
    since: '2017/10 以前',
    fontSize: '3.2rem',
    comment:
      '業務でのアプリ開発や競技プログラミング，スクリプト作成等に利用しています．実務経験あり'
  },
  {
    name: 'AtCoder',
    directory: 'atcoder',
    since: '2018/02～',
    comment:
      '競技プログラミングです．AtCoder 1 級（青: A ランク）で，PAST 上級です．',
    fontSize: '2.8rem',
    frameworks: [
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
  // {
  //   name: 'PHP',
  //   imagePath: 'php.png'
  // },
  // {
  //   name: 'Java',
  //   imagePath: 'java.png'
  // },
  // {
  //   name: 'Kotlin',
  //   imagePath: 'kotlin.png'
  // }
]

export type ExperienceType = {
  fromDate?: string
  toDate?: string
  text: string
}

/*
export const Experiences: ExperienceType[] = [
  {
    fromDate: '2019/05',
    toDate: '2020/06',
    text: '(株) diffeasy にてインターンシップ'
  }
]
*/

export type DeviceType = {
  name: string
  spec: { [key: string]: string | JSX.Element }
}

export const Devices: DeviceType[] = [
  {
    name: 'Desktop PC',
    spec: {
      CPU: 'Intel Core i7-12700',
      RAM: '48GB',
      SSD: 'M.2 1TB + SATA 1TB',
      GPU: 'GeForce RTX 3060 Ti'
    }
  },
  {
    name: 'Prestige 14',
    spec: {
      CPU: 'Intel Core i7-1195G7',
      RAM: '32GB',
      SSD: '1TB',
      GPU: 'GeForce GTX 1650 Ti Max-Q'
    }
  },
  {
    name: 'MacBook Air 2020',
    spec: {
      CPU: 'Intel Core i7-1060NG7',
      RAM: '16GB',
      SSD: '256GB',
      GPU: 'Intel Iris Plus Graphics'
    }
  }
]
