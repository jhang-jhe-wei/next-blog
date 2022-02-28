import Image from 'next/image'
import Layout from '../components/layout'
import Timer from '../components/timer'
import utilStyles from  '../styles/utils.module.css'

export const name = "張哲瑋"
export const id = "b10730224"
export default function Home():React.ReactElement {
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
          <h1 className={`${utilStyles.heading2Xl} dark:text-white`}>{name}</h1>
          <h2 className={`${utilStyles.headingXl} dark:text-white`}>{id}</h2>
        </header>
      </div>
      <Timer />
    </Layout>
  )
}
