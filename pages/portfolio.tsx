import { GetStaticProps } from 'next'
import Head from 'next/head'
import Layout from '../components/layout'
import Card from '../components/portfolio/card'
import Tags from '../components/portfolio/tags'
import { ProjectProps as Project } from '../interfaces/portfolio_interface'
import { getPortfolioData } from '../lib/portfolio'
import { useRouter } from 'next/router'

interface PortfolioProps {
  projects: Project[];
  tags: string[];
}

export default function Portfolio({projects, tags}: PortfolioProps): React.ReactElement {
  const queryTag = getQueryTag() || tags[0];

  return (
    <Layout>
      <Head><title>portfolio</title></Head>
      <div className="container mx-auto">
        <h1 className="text-5xl text-center text-primary dark:text-white mt-28">Portfolio</h1>
        <Tags tags={tags} queryTag={queryTag}/>
        <div className="pb-20 mt-12 gap-9 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {projects.filter(project => project.tag == queryTag).map(project => <Card key={project.title} project={project}/>)}
        </div>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<PortfolioProps> = async () => {
  const projects: Project[] = await getPortfolioData()
  const tags = Array.from(new Set(projects.map(project => project.tag)));
  return {
    props: {
      projects,
      tags
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
