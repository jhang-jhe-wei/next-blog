import Nav from './nav/nav'
import Head from 'next/head'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Learn how to build a personal website using Next.js" />
      </Head>
      <Nav/>
      {children}
    </>
  )
}
