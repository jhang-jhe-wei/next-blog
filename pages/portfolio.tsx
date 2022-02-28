import { GetStaticProps } from 'next'
import Head from 'next/head'
import Layout from '../components/layout'
import Card from '../components/portfolio/card'
import Tags from '../components/portfolio/tags'
import { ProjectProps } from '../interfaces/portfolio_interface'
import { getPortfolioData } from '../lib/portfolio'
import { useRouter } from 'next/router'

export default function Portfolio({portfolioData}:{portfolioData:ProjectProps[]}): React.ReactElement {
  const tags = Array.from(new Set(portfolioData.map(project => project.tag)));
  const queryTag = getQueryTag() || tags[0];

  return (
    <Layout>
      <Head><title>portfolio</title></Head>
      <div className="container mx-auto">
        <h1 className="text-5xl text-center text-primary dark:text-white mt-28">Portfolio</h1>
        <Tags tags={tags} queryTag={queryTag}/>
        <div className="mt-12 gap-9 grid grid-cols-3">
          {portfolioData.filter(project => project.tag == queryTag).map(project => <Card projectProps={project}/>)}
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

function getQueryTag() {
  const router = useRouter();
  const query = router.query.tag;
  if (query){
    if (Array.isArray(query)) return query[0];
    return query
  }
  return null;
}
