import { SkillsListProps } from "../../interfaces/about_interface"
import SkillsListItem from "./skills_list_item"
export default function SkillsList({ data }:SkillsListProps):React.ReactElement {
  return (
    <div id="skills" className="mt-32">
      <h2 className="hidden text-4xl text-center text-white md:block font-notosans shadow-gray-700 xl:text-7xl">
        Skills
      </h2>
      <h2 className="mt-2 text-2xl text-center md:text-4xl text-secondary">技能專長</h2>
      <ul className="mt-10 grid grid-cols-11 gap-8">
        {
          data.map((skills, index) => (
            <SkillsListItem key={skills.title} skills={skills} index={index}/>
          ))
        }
      </ul>
    </div>
  )
}
