import Nav from '../components/nav/nav'
import Figure from '../components/landing/figure'
import Signboard from '../components/landing/signboard'
import PipelineDiagram from '../components/landing/pipeline_diagram'
import Footer from '../components/landing/footer'
import Layout from '../components/layout'

export default function Home():React.ReactElement {
  return (
    <div className="bg-[length:40px_40px] bg-grid-dark dark:bg-grid-light">
      <style global jsx>{`
        html,
        body,
        body > div:first-child,
        div#__next,
        div#__next > div {
          min-height: 100vh;
        }
    `}</style>
    <Layout>
      <div className="mt-2 lg:mt-0">
        <Signboard/>
      </div>
      <div className="justify-center hidden mx-auto mt-20 lg:flex">
        <PipelineDiagram/>
        <svg viewBox="0 0 800 503" fill="none" xmlns="http://www.w3.org/2000/svg">
          <Figure x="300" y="0" width="500"/>
          <path d="M0 340 H50 Q70 340, 90 360 L 190 480 Q210 500, 230 500 H800" strokeWidth="3" className="hidden lg:block stroke-primary dark:stroke-white"/>
        </svg>
      </div>
      <div className="lg:hidden">
        <div className="w-64 mx-auto mt-5 sm:w-80 md:w-96 lg:mt-9">
          <Figure x="0" y="0" width='100%'/>
        </div>
        <div className="pr-10">
          <PipelineDiagram/>
        </div>
        <div className="-translate-y-10 sm:-translate-y-24">
          <Footer/>
        </div>
      </div>
    </Layout>
   </div>
  )
}
