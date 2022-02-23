import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import ProjectCard from '../components/project_card'
import { ProjectCardProps } from '../interfaces/project_card_interface'
import { getPortfolioData } from '../lib/portfolio'

export default function Portfolio({portfolioData}:{portfolioData:ProjectCardProps[]}): React.ReactElement {
  return (
    <Layout>
      <Head><title>portfolio</title></Head>
      <div className="container mx-auto">
        <h1 className="text-5xl text-center text-primary dark:text-white mt-28">Portfolio</h1>
        <ul className="flex justify-center mt-20">
          <li className="px-6 text-base text-center "><Link href="#"><a className="text-primary dark:text-white">前端</a></Link></li>
          <li className="px-6 text-base text-center border-primary dark:border-white border-x-2"><Link href="#"><a className="text-primary dark:text-white opacity-40">後端</a></Link></li>
          <li className="px-6 text-base topacity-40 ext-center"><Link href="#"><a className="text-primary dark:text-white opacity-40">其他</a></Link></li>
        </ul>
        <div className="mt-12 gap-9 grid grid-cols-3">
            {portfolioData.map(project => <ProjectCard projectProps={project}/>)}
        </div>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const portfolioData = await getPortfolioData()
  return {
    props: {
      portfolioData
    }
  }
}
