import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/layout'
import utilStyles from  '../styles/utils.module.css'
import Date from '../components/date'
import { getSortedPostsData } from '../lib/posts'

export const name = "Wells"
export default function Home({allPostsData}) {
  return (
    <Layout>
      <div className="max-w-xl px-4 mx-auto mt-12 mb-24" >
        <header className="flex flex-col items-center">
          <Image
            priority
            src="/images/profile.png"
            className={utilStyles.borderCircle}
            height={144}
            width={144}
            alt={name}
          />
          <h1 className={utilStyles.heading2Xl}>{name}</h1>
        </header>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
      {allPostsData.map(({ id, date, title }) => (
        <li className={utilStyles.listItem} key={id}>
          <Link href={`/posts/${id}`}>
            <a>{title}</a>
          </Link>
          <br />
          <small className={utilStyles.lightText}>
            <Date dateString={date} />
          </small>
        </li>
            ))}
          </ul>
        </section>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
