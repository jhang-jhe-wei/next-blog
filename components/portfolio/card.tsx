import { ProjectProps } from "../../interfaces/portfolio_interface"
export default function Card({projectProps}:{projectProps: ProjectProps}) {
  return(
    <div className="max-w-sm bg-white font-notosans">
      <img className="w-full" src={projectProps.image} alt="Sunset in the mountains"/>
      <div className="mx-6 mt-5 text-base ">
        <h2 className="font-bold text-secondary">{projectProps.title}</h2>
        <p className="mt-5 text-zinc-700">{projectProps.description}</p>
      </div>
      <div className="px-6 pt-4 pb-5">
        <a className="px-4 py-2 text-xs text-white border-2 rounded border-secondary hover:no-underline bg-secondary hover:bg-white hover:text-secondary" href={projectProps.demo_link}>Demo</a>
        <a className="px-4 py-2 mx-2 text-xs text-white border-2 rounded border-secondary hover:no-underline bg-secondary hover:bg-white hover:text-secondary" href={projectProps.code_link}>Source Code</a>
      </div>
    </div>
  )
}
