import { GetStaticProps } from 'next'
import Head from 'next/head'
import Toc from '../components/about/toc'
import Profile from '../components/about/profile'
import List from '../components/about/List'
import Layout from '../components/layout'
import Achievements from '../components/about/achievements'
import Footer from '../components/about/footer'
import { getAboutData } from '../lib/about'
import { SkillsProps, AchievementProps, ListItemProps } from '../interfaces/about_interface'
import SkillsList from '../components/about/skills_list'
import Resume from '../components/about/resume'

interface AboutData {
    education: ListItemProps[];
    works: ListItemProps[];
    achievements: AchievementProps[];
    skillsList: SkillsProps[];
}

export default function about({aboutData}:{aboutData:AboutData}): React.ReactElement{
  return (
    <Layout>
      <div className="max-w-sm mx-auto md:max-w-5xl">
        <Head><title>Wells 的經歷</title></Head>
        <h1 className="mt-32 text-5xl text-center text-primary dark:text-light">About</h1>
        <Toc/>
        <Profile/>
        <div className="mt-56">
          <List id="education" category="教育背景" backgroundText="Education Background" data={aboutData.education} />
          <List id="works" category="工作經驗" backgroundText="Work Experience" data={aboutData.works} />
        </div>
      </div>
      <Achievements data={aboutData.achievements}/>
      <div className="max-w-sm mx-auto md:max-w-5xl">
        <SkillsList data={aboutData.skillsList}/>
      </div>
      <Resume/>
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
