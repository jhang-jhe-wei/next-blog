import { SkillsProps } from '../../interfaces/about_interface'
import useReveal from "../../lib/use_reveal"
interface SkillsListItemProps {
  skills: SkillsProps,
  index: number
}
export default function SkillsListItem({ skills, index }:SkillsListItemProps){
  const [element, reveal] = useReveal()

  return (
    <li ref={element} className={`py-9 px-10 bg-white dark:bg-primary-opacity transition-opacity-and-transform duration-500 col-span-full md:col-start-2 ${reveal? 'opacity-100' : 'translate-y-20 opacity-0'} ${(index % 4 % 3 == 0)? "xl:col-span-5": "xl:col-span-6"} ${(index % 2 ==0)? "md:col-span-8": "md:col-span-9"}`}>
      <h3 className="text-2xl font-bold text-cyan-450">{skills.title}</h3>
      <table className="mt-5">
        <tbody>
          {
            skills.skills.map(skill => (
              <tr key={skill.name}>
                <td className="pb-2 pr-5 overflow-x-scroll text-right whitespace-nowrap md:overflow-visible text-primary dark:text-light">
                  {skill.name}
                </td>
                <td className="w-full pb-2">
                  <div className="h-2.5 bg-gradient-to-r from-red-500 to-yellow-400 rounded-[10px]" style={{width: `${skill.proficiency}%`}}></div>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </li>

  )
}
