import React from 'react'
import dayjs from 'dayjs'

type ProfileType = {
  key: string
  title: string
  content: JSX.Element
  contentJa?: JSX.Element
}

const calcYear = (fromDate: dayjs.ConfigType, float = false) =>
  dayjs().diff(fromDate, 'y', float)

const calcAge = (float = false) => calcYear(new Date(2004, 0, 28), float)

export const ProfileItems: ProfileType[] = [
  {
    key: 'name',
    title: 'Name',
    content: <div>Takayuki Ueno</div>
  },
  {
    key: 'age',
    title: 'Age',
    content: (
      <div>
        {calcAge()} <span className="small">({calcAge(true).toFixed(7)})</span>
      </div>
    )
  },
  {
    key: 'birthday',
    title: 'Birthday',
    content: <div>Jan 28, 2004</div>,
    contentJa: <div>2004 年 1 月 28 日</div>
  },
  {
    key: 'school',
    title: 'School',
    contentJa: <div>筑波大学 情報学群 情報科学類</div>,
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
    content: <div>Freelance Programmer</div>
  },
  {
    key: 'lives',
    title: 'Live in',
    contentJa: <div>茨城県つくば市</div>,
    content: <div>Tsukuba City, Ibaraki, Japan</div>
  },
  {
    key: 'from',
    title: 'From',
    contentJa: <div>福岡県福岡市</div>,
    content: <div>Fukuoka City, Fukuoka, Japan</div>
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
      '［実務経験あり］競技プログラミングや，Windows Forms アプリ / X (Twitter) BOT 開発，業務でのバッチ作成など，幅広い分野で利用しています。',
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
    comment: '［実務経験約1年］バックエンド API 開発での利用経験があります。',
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
    comment: '［実務経験あり］'
  },
  {
    name: 'HTML/CSS',
    directory: 'html',
    since: 'Unknown',
    fontSize: '2.2rem',
    comment: '［実務経験3年以上］',
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
    comment: '［実務経験3年以上］',
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
    comment: '［実務経験約2年］フロントエンドアプリ開発に利用しています．',
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
    comment: '［実務経験あり］フロントエンドアプリ開発に利用しています．'
  },
  {
    name: 'Python',
    directory: 'python',
    since: '2017/10 以前',
    fontSize: '3.2rem',
    comment:
      '［実務経験1年以上］業務でのアプリ開発や競技プログラミング，スクリプト作成等に利用しています．'
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

export const Life = (
  <div className="life__wrap">
    <h4 className="life__year">2026</h4>
    <div className="life-content__wrap">
      <div className="life-content__date">2026/03</div>
      <div className="life-content">
        <p>筑波大学を卒業予定．</p>
      </div>
    </div>
    <h4 className="life__year">2023</h4>
    <div className="life-content__wrap">
      <div className="life-content__date">2023/10</div>
      <div className="life-content">
        <p>ICPC 2023 日本予選に参加．</p>
      </div>
    </div>
    <div className="life-content__wrap">
      <div className="life-content__date">2023/09</div>
      <div className="life-content">
        <p>
          TPC (Tsukuba Programming Circle) にて，プログラミングコンテスト{' '}
          <a href="https://connpass.com/event/288504/">ITF.PC 2023</a> を主催．
          オンサイト（オフライン会場：筑波大学）には約30名が参加．
        </p>
      </div>
    </div>
    <div className="life-content__wrap">
      <div className="life-content__date">2023/01</div>
      <div className="life-content">
        <p>
          筑波大学eスポーツ大会（VALORANT）第1回「OWL GAME」を開催．（配信：
          <a
            href="https://youtu.be/8a2P3njaRKg"
            target="_blank"
            rel="noreferrer"
          >
            Day 1
          </a>
          {' / '}
          <a
            href="https://youtu.be/QRQpzuDV1UU"
            target="_blank"
            rel="noreferrer"
          >
            Day 2
          </a>
          ）
          <br />
          選手として出場するかたわら，マップ選択画面のシステムと，
          リアルタイムに配信画面に表示する UI・試合中のオーバーレイを開発．
          配信ソフトの設定，配線等も担当．
          <br />
          これをもって，OWLS 第1期が解散．
        </p>
      </div>
    </div>

    <h4 className="life__year">2022</h4>
    <div className="life-content__wrap">
      <div className="life-content__date">2022/10</div>
      <div className="life-content">
        <p>ICPC 2022 日本予選に参加．</p>
      </div>
    </div>
    <div className="life-content__wrap">
      <div className="life-content__date">2022/07</div>
      <div className="life-content">
        <p>
          筑波大学アスレチックデパートメント「OWLS」eスポーツチームにプレイヤーとして参加．
        </p>
      </div>
    </div>
    <div className="life-content__wrap">
      <div className="life-content__date">2022/04</div>
      <div className="life-content">
        <p>茨城県つくば市に転居，筑波大学に入学．</p>
      </div>
    </div>
    <div className="life-content__wrap">
      <div className="life-content__date">2022/03</div>
      <div className="life-content">
        <p>つくば開成福岡高等学校を卒業．</p>
      </div>
    </div>
    <h4 className="life__year">2021</h4>
    <div className="life-content__wrap">
      <div className="life-content__date" />
      <div className="life-content">
        <p>パソコン甲子園 2021 プログラミング部門に参加．（本選 20 位）</p>
      </div>
    </div>
    <h4 className="life__year">2020</h4>
    <div className="life-content__wrap">
      <div className="life-content__date" />
      <div className="life-content">
        <p>JOI 2020 / 2021 に参加．（予選Aランク，本選Bランク）</p>
      </div>
    </div>
    <div className="life-content__wrap">
      <div className="life-content__date" />
      <div className="life-content">
        <p>パソコン甲子園 2020 プログラミング部門に参加．（本選 22 位）</p>
      </div>
    </div>
    <h4 className="life__year">2019</h4>
    <div className="life-content__wrap">
      <div className="life-content__date" />
      <div className="life-content">
        <p>JOI 2019 / 2020 に参加．（予選Bランク）</p>
      </div>
    </div>
    <div className="life-content__wrap">
      <div className="life-content__date">2019/04</div>
      <div className="life-content">
        <p>つくば開成福岡高等学校に入学．</p>
      </div>
    </div>
    <h4 className="life__year">2018</h4>
    <div className="life-content__wrap">
      <div className="life-content__date" />
      <div className="life-content">
        <p>JOI 2018 / 2019 に参加．（予選Bランク）</p>
      </div>
    </div>
  </div>
)

export type ExperienceType = {
  fromDate?: string
  toDate?: string
  text: string
}

export const Experiences: ExperienceType[] = [
  {
    fromDate: '2019/05',
    toDate: '2020/06',
    text: '(株) diffeasy にてインターンシップ'
  },
  {
    fromDate: '2020/07',
    toDate: '2023/01',
    text: '(株) JX通信社にてインターンシップおよび業務委託による開発'
  },
  {
    fromDate: '2023/02',
    toDate: '2023/10',
    text: '(株) コードタクトにて業務委託による開発'
  },
  {
    fromDate: '2023/12',
    text: '業務委託開発（予定）'
  }
]

export type DeviceType = {
  name: string
  spec: { [key: string]: string | React.ReactElement }
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
    name: 'MacBook Pro (14-inch, 2023)',
    spec: {
      CPU: 'Apple M3 Pro (11-cores)',
      RAM: '18GB',
      SSD: '512GB',
      GPU: 'Apple M3 Pro (14-cores)'
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
  }
]
