import { ProjectProps } from "../../interfaces/portfolio_interface"
import useReveal from "../../lib/use_reveal"
interface ProjectComponentProps {
  project: ProjectProps;
  index: number;
}
export default function Project({project, index}: ProjectComponentProps) {
  const [element, reveal] = useReveal()

  return (
    <li ref={element} className={`bg-white dark:bg-primary-opacity flex mb-10 transition-opacity-and-transform duration-500 ${reveal? 'opacity-100' : 'translate-y-20 opacity-0'} ${index % 2 == 0? "": "flex-row-reverse"}`}>
      <img className="max-w-xs bg-white max-h-72" src={project.image} alt=""/>
      <div className="flex flex-col justify-between px-12 py-7">
        <div>
          <h3 className="text-xl text-secondary">{project.title}</h3>
          <p className="mt-5 text-primary dark:text-white">{project.description}</p>
        </div>
        <div>
          <a className="px-4 py-2 text-sm text-white border rounded-[10px] border-secondary hover:no-underline bg-secondary hover:bg-white hover:text-secondary" href={project.demo_link}>Demo</a>
          <a className="px-4 py-2 mx-2 text-sm text-white border rounded-[10px] border-secondary hover:no-underline bg-secondary hover:bg-white hover:text-secondary" href={project.code_link}>Source Code</a>
        </div>
      </div>
    </li>
  )
}
