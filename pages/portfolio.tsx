import Layout from '../components/layout'
import Head from 'next/head'
import { getPortfolioData } from '../lib/portfolio'
import { GetStaticProps } from 'next'
import Card from '../components/card'
import Link from 'next/link'

export default function Portfolio({portfolioData}:{portfolioData:object}): React.ReactNode {
  return (
    <Layout>
      <Head><title>portfolio</title></Head>
      <div className="container mx-auto">
        <h1 className="text-5xl text-center text-white mt-28">Portfolio</h1>
        <ul className="flex justify-center mt-20">
          <li className="px-6 text-base text-center "><Link href="#"><a className="text-white">前端</a></Link></li>
          <li className="px-6 text-base text-center border-white border-x-2"><Link href="#"><a className="text-white opacity-40">後端</a></Link></li>
          <li className="px-6 text-base topacity-40 ext-center"><Link href="#"><a className="text-white opacity-40">其他</a></Link></li>
        </ul>
        <div className="flex flex-wrap justify-between mt-12">
          {portfolioData.map(portfolio => <Card portfolio={portfolio}/>)}
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
