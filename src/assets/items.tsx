import React from 'react'
import dayjs from 'dayjs'

type ProfileType = {
  key: string
  title: string
  content: React.ReactElement
  contentJa?: React.ReactElement
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
      '競技プログラミングや、Windows Forms アプリ / X (Twitter) BOT 開発、業務でのバッチ作成など、幅広い分野で利用しています。',
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
    comment: ''
  },
  {
    name: 'HTML/CSS',
    directory: 'html',
    since: '-',
    fontSize: '2.2rem',
    comment: '',
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
    comment: '',
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
    comment: 'フロントエンドアプリ開発に利用しています。',
    frameworks: [
      {
        name: 'Nuxt',
        imagePath: 'nuxt.png'
      },
      {
        name: 'Vuetify',
        imagePath: 'vuetify.webp'
      }
    ]
  },
  {
    name: 'React.js',
    directory: 'react',
    since: '2020/01～',
    fontSize: '3rem',
    comment: 'フロントエンドアプリ開発に利用しています。'
  },
  {
    name: 'Python',
    directory: 'python',
    since: '2017/10 以前',
    fontSize: '3.2rem',
    comment:
      '業務でのアプリ開発や競技プログラミング、スクリプト作成等に利用しています。'
  },
  {
    name: 'AtCoder',
    directory: 'atcoder',
    since: '2018/02～',
    comment:
      '競技プログラミングです。AtCoder 1 級（青: A ランク）で、PAST 上級です。',
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

type LifeType = {
  year: number
  contents: {
    month: string
    content: React.ReactElement
    key: string
  }[]
}[]

const lifeData: LifeType = [
  {
    year: 2027,
    contents: [
      {
        month: '2027/03',
        content: <p>筑波大学を卒業予定。</p>,
        key: 'graduation'
      }
    ]
  },
  {
    year: 2025,
    contents: [
      {
        month: '2025/04',
        content: <p>筑波大学に復学。</p>,
        key: 'back-to-univ'
      },
      {
        month: '2025/03',
        content: (
          <p>
            <a
              href="https://www.youtube.com/live/GpWYBv-BWBw?si=gJsCEwZ0PbqzsYHO"
              target="_blank"
              rel="noreferrer"
            >
              REIGNITE VALORANT College Tournament
            </a>{' '}
            オフライン本戦にてオブザーバーを担当。
          </p>
        ),
        key: 'rct-2025'
      }
    ]
  },
  {
    year: 2024,
    contents: [
      {
        month: '2024/11',
        content: (
          <p>
            Tsukuba Programming Circle にて、プログラミングコンテスト{' '}
            <a href="https://tpc.connpass.com/event/329505/">ITF.PC 2024</a>{' '}
            を主催。 オンサイト（オフライン会場：筑波大学）には約20名が参加。
          </p>
        ),
        key: 'itfpc2024'
      },
      {
        month: '2024/10',
        content: <p>ICPC 2024 日本予選に参加。（38位）</p>,
        key: 'icpc2024'
      },
      {
        month: '2024/07',
        content: (
          <p>
            eスポーツチーム OWLS 第3期に運営（マネージャー）として参加。
            運営業務のほかに、技術担当として、大会の配線や新しい大会用オーバーレイなどの開発を行った。
          </p>
        ),
        key: 'owls2024'
      },
      {
        month: '2024/04',
        content: <p>普通自動車第1種運転免許（AT限定）を取得。</p>,
        key: 'driver-license'
      },
      {
        month: '2024/04',
        content: <p>筑波大学を休学。</p>,
        key: 'absent'
      },
      {
        month: '2024/03',
        content: <p>フランス・ボルドー大学へ1か月間の留学（英語）。</p>,
        key: 'study-abroad-bordeaux'
      }
    ]
  },
  {
    year: 2023,
    contents: [
      {
        month: '2023/10',
        content: <p>ICPC 2023 日本予選に参加。（36位）</p>,
        key: 'icpc2023'
      },
      {
        month: '2023/09',
        content: (
          <p>
            TPC (Tsukuba Programming Circle) にて、プログラミングコンテスト{' '}
            <a href="https://connpass.com/event/288504/">ITF.PC 2023</a>{' '}
            を主催。 オンサイト（オフライン会場：筑波大学）には約30名が参加。
          </p>
        ),
        key: 'itfpc2023'
      },
      {
        month: '2023/06',
        content: <p>eスポーツチーム OWLS 第2期に選手として参加。</p>,
        key: 'owls2023'
      },
      {
        month: '2023/04',
        content: <p>Tsukuba Programming Circle の代表に就任。</p>,
        key: 'tpc-leader'
      },
      {
        month: '2023/01',
        content: (
          <p>
            筑波大学eスポーツ大会（VALORANT）第1回「OWL GAME」を開催。（配信：
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
            選手として出場するかたわら、マップ選択画面のシステムと、
            リアルタイムに配信画面に表示する UI・試合中のオーバーレイを開発。
            配信ソフトの設定、配線等も担当。
            <br />
            これをもって、OWLS 第1期が解散。
          </p>
        ),
        key: 'owlgame1'
      }
    ]
  },
  {
    year: 2022,
    contents: [
      {
        month: '2022/10',
        content: <p>ICPC 2022 日本予選に参加。（132位）</p>,
        key: 'icpc2022'
      },
      {
        month: '2022/07',
        content: (
          <p>
            筑波大学アスレチックデパートメント「OWLS」eスポーツチームにプレイヤーとして参加。
          </p>
        ),
        key: 'owls2022'
      },
      {
        month: '2022/04',
        content: <p>茨城県つくば市に転居、筑波大学に入学。</p>,
        key: 'entry-to-tsukuba'
      },
      {
        month: '2022/03',
        content: <p>つくば開成福岡高等学校を卒業。</p>,
        key: 'graduate-high-school'
      }
    ]
  },
  {
    year: 2021,
    contents: [
      {
        month: '',
        content: (
          <p>パソコン甲子園 2021 プログラミング部門に参加。（本選 20 位）</p>
        ),
        key: 'pck2021'
      }
    ]
  },
  {
    year: 2020,
    contents: [
      {
        month: '',
        content: <p>JOI 2020 / 2021 に参加。（予選Aランク、本選Bランク）</p>,
        key: 'joi2021'
      },
      {
        month: '',
        content: (
          <p>パソコン甲子園 2020 プログラミング部門に参加。（本選 22 位）</p>
        ),
        key: 'pck2020'
      }
    ]
  },
  {
    year: 2019,
    contents: [
      {
        month: '',
        content: <p>JOI 2019 / 2020 に参加。（予選Bランク）</p>,
        key: 'joi2020'
      },
      {
        month: '2019/04',
        content: <p>つくば開成福岡高等学校に入学。</p>,
        key: 'entry-to-high-school'
      }
    ]
  },
  {
    year: 2018,
    contents: [
      {
        month: '',
        content: <p>JOI 2018 / 2019 に参加。（予選Bランク）</p>,
        key: 'joi2019'
      }
    ]
  }
]

export const Life = (
  <div className="life__wrap">
    {lifeData.map((year) => (
      <div key={year.year}>
        <h4 className="life__year">{year.year}</h4>
        {year.contents.map((content) => (
          <div className="life-content__wrap" key={content.key}>
            <div className="life-content__date">{content.month}</div>
            <div className="life-content">{content.content}</div>
          </div>
        ))}
      </div>
    ))}
  </div>
)

export type ExperienceType = {
  fromDate?: string
  toDate?: string
  text: string | React.ReactNode
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
    fromDate: '2024/06',
    text: '業務委託でのコンテンツ制作'
  },
  {
    fromDate: '2019/11',
    text: (
      <>
        <a href="https://mofecoder.com" target="_blank" rel="noreferrer">
          MOFE
        </a>{' '}
        (旧称: CafeCoder) の開発・運営
      </>
    )
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
      SSD: '2x M.2 1TB + SATA 1TB',
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
