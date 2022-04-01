import { SkillsProps } from '../../interfaces/about_interface'
import useReveal from "../../lib/use_reveal"
interface SkillsListItemProps {
  skills: SkillsProps,
  index: number
}
export default function SkillsListItem({ skills, index }:SkillsListItemProps){
  const [element, reveal] = useReveal()

  return (
    <li ref={element} className={`py-9 px-10 bg-white dark:bg-primary-opacity transition-opacity-and-transform duration-500 col-start-2 ${reveal? 'opacity-100' : 'translate-y-20 opacity-0'} ${(index % 4 % 3 == 0)? "xl:col-span-5": "xl:col-span-6"} ${(index % 2 ==0)? "col-span-8": "col-span-9"}`}>
      <h3 className="text-2xl font-bold text-cyan-450">{skills.title}</h3>
      <div className="flex mt-5">
        <ul className="mt-5">
          {
            skills.skills.map(skill => (
              <li key={skill.name} className="mb-5 text-right text-primary dark:text-light">
                {skill.name}
              </li>
            ))
          }
        </ul>
        <ul className="flex-1 mt-6.5 ml-5">
          {
            skills.skills.map(skill => (
              <li key={skill.name} className="mb-8.5">
                <div className="h-2.5 bg-gradient-to-r from-red-500 to-yellow-400 rounded-[10px]" style={{width: `${skill.proficiency}%`}}></div>
              </li>
            ))
          }
        </ul>
      </div>
    </li>

  )
}
