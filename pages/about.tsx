import { GetStaticProps } from 'next'
import Head from 'next/head'
import Toc from '../components/about/toc'
import Profile from '../components/about/profile'
import List from '../components/about/List'
import Layout from '../components/layout'
import Achievement from '../components/about/achievement'
import Footer from '../components/about/footer'
import { getAboutData } from '../lib/about'
import { AchievementItemProps, ListItemProps } from '../interfaces/about_interface'

interface AboutData {
    education: ListItemProps[];
    work: ListItemProps[];
    achievement: AchievementItemProps[];
}

export default function about({aboutData}:{aboutData:AboutData}): React.ReactElement{
  return (
    <Layout>
      <div className="max-w-sm mx-auto md:max-w-5xl">
        <Head><title>Wells 的經歷</title></Head>
        <h1 className="mt-32 text-5xl text-center">About</h1>
        <Toc/>
        <Profile/>
        <div className="mt-56">
          <List category="教育背景" backgroundText="Education Background" data={aboutData.education} />
          <List category="工作經驗" backgroundText="Work Experience" data={aboutData.work} />
        </div>
      </div>
      <Achievement data={aboutData.achievement}/>
      <Footer/>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const aboutData = await getAboutData();
  return {
    props: {
      aboutData
    }
  }
}
