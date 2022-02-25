import Head from 'next/head'
import Layout from '../components/layout'
import Toc from '../components/experience/toc'
import Profile from '../components/experience/profile'

export default function Experience(): React.ReactElement{
  return (
    <Layout>
      <Head><title>Wells 的經歷</title></Head>
      <h1 className="mt-32 text-5xl text-center">EXPERIENCE</h1>
      <Toc/>
      <Profile/>
    </Layout>
  )
}
