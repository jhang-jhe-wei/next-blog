import { ProjectProps as Project } from "../../interfaces/portfolio_interface"
import useReveal from "../../lib/use_reveal"
export default function Card({project}:{project: Project}) {
  const [element, reveal] = useReveal()

  return(
    <div ref={element} className={`mx-auto max-w-xs bg-white font-notosans transition-all duration-500 ${reveal? 'opacity-100' : 'translate-y-20 opacity-0'}`}>
      <img className="h-80 w-80 object-scale-down object-center bg-gray-300" src={project.image} alt="Sunset in the mountains"/>
      <div className="mx-6 mt-5 text-lg">
        <h2 className="font-bold text-secondary">{project.title}</h2>
        <p className="line-clamp-4 mt-5 text-sm text-zinc-700">{project.description}</p>
      </div>
      <div className="pb-8 mx-6 mt-8">
        {
          project.demo_link && <a className="px-4 py-2 text-sm mr-2 text-white border rounded-[10px] border-secondary hover:no-underline bg-secondary hover:bg-white hover:text-secondary" href={project.demo_link}>Demo</a>
        }
        {
          project.code_link && <a className="px-4 py-2 text-sm text-white border rounded-[10px] border-secondary hover:no-underline bg-secondary hover:bg-white hover:text-secondary" href={project.code_link}>Source Code</a>
        }
      </div>
    </div>
  )
}
