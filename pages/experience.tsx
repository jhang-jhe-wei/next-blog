import Head from 'next/head'
import Toc from '../components/experience/toc'
import Profile from '../components/experience/profile'
import List from '../components/experience/List'
import Layout from '../components/layout'
import Achievement from '../components/experience/achievement'
import Footer from '../components/experience/footer'

export default function Experience(): React.ReactElement{
  const educationData = [{
    title: "臺灣科技大學",
    subTitle: "應用科技學士學位學程",
    started_at: "2018",
    ended_at: "2022",
    highlights: ["2021 總統教育獎優秀學生獎", "全校不分系系學會會長", "網球校隊隊員"]
  }, {
    title: "花蓮高工",
    subTitle: "電機科",
    started_at: "2018",
    ended_at: "2022",
    highlights: ["第 44 屆國際技能競賽國手"]
  }]

  const workData = [{
    title: "資訊長",
    subTitle: "毫米隧道科技股份有限公司",
    started_at: "六月2020",
    ended_at: "一月2021",
    highlights: [
      "本人與學長姐一同創立的新創公司",
      "在半年內募得百萬創業獎金",
      "經濟部創業歸故里數位應用獎 / Shooly 水電資訊媒合平台 / 75萬創業獎金",
      "Line ChatBot 設計大賽冠軍 / Shooly 水電資訊媒合平台 / 10萬獎金",
      "教育部 109 U-Start 第一階段入圍 / PP-Bank 子母帳戶系統 / 35萬創業獎金",
      "科技部 2020 FITI 全國前 40 名 / PP-Bank 子母帳戶系統 / 5萬創業獎金"
      ]
    }, {
    title: "軟硬體工程師",
    subTitle: "安耐美",
    started_at: "六月2020",
    ended_at: "一月2021",
    highlights: [
      "本人與學長姐一同創立的新創公司",
      "在半年內募得百萬創業獎金",
      "經濟部創業歸故里數位應用獎 / Shooly 水電資訊媒合平台 / 75萬創業獎金",
      "Line ChatBot 設計大賽冠軍 / Shooly 水電資訊媒合平台 / 10萬獎金",
      "教育部 109 U-Start 第一階段入圍 / PP-Bank 子母帳戶系統 / 35萬創業獎金",
      "科技部 2020 FITI 全國前 40 名 / PP-Bank 子母帳戶系統 / 5萬創業獎金"
      ]
    }]

  const achievementData = [
    {
      title: "國家代表隊國手",
      is_full: false,
      highlights: [
        "2017 上海國際技能競賽邀請賽 / 室內配線 / 世界金牌",
        " 第 44 屆阿布達比國際技能競賽 / 室內配線 / 世界優勝 ",
        "第 44 屆國際技能競賽 / 室內配線 / 國手"
      ]
    },
    {
      title: "特殊成就",
      is_full: false,
      highlights: [
        "2021 鴻海獎學鯨得主(10萬元)",
        "2021 總統教育獎：奮發向上獎 (2萬元)",
        "2020 國泰卓越獎學金：特殊功績得主 (10萬元)",
        "2020 台科大應科學院：優秀青年獎"
      ]
    },
    {
      title: "技能獎項",
      is_full: false,
      highlights: [
        "2020 全國大專校院智慧創新暨跨域整合創作競賽：亞軍 (5萬元)",
        "第 13 屆上銀智慧機器手競賽：全項冠軍 (45萬元)"
      ]
    },
    {
      title: "網球校隊選手",
      is_full: false,
      highlights: [
        "Easyoga 盃中壢站網球分級賽 2.5 ：單雙打季軍",
        "第二屆 Breakpoint 網球分級賽 2.0：單打冠軍"
      ]
    },
    {
      title: "演講經驗",
      is_full: true,
      highlights: [
        "台北電腦公會邀請至嘉義義竹國中演講「技職玩轉人生」/ 2021.11",
        "台北電腦公會邀請至彰化大城國中演講「技職玩轉人生」/ 2021.11",
        "勞動部技能競賽推廣活動「向下扎根職涯」邀請擔任講師/ 2021.09",
        "受邀至南方創客基地演講「走一條體制外的路」",
        "受邀至第48屆全國技能競賽北區分區賽解說室內配線 / 2019.04",
        "受邀至第47屆全國技能競賽解說室內配線 / 2018.08",
        "受邀至第47屆全國技能競賽北區分區賽解說室內配線 / 2018.04"
      ]
    }
  ]

  return (
    <Layout>
      <div className="max-w-sm mx-auto md:max-w-5xl">
        <Head><title>Wells 的經歷</title></Head>
        <h1 className="mt-32 text-5xl text-center">EXPERIENCE</h1>
        <Toc/>
        <Profile/>
        <div className="mt-56">
          <List category="教育背景" backgroundText="Education Background" data={educationData} />
          <List category="工作經驗" backgroundText="Work Experience" data={workData} />
        </div>
      </div>
      <Achievement data={achievementData}/>
      <Footer/>
    </Layout>
  )
}
