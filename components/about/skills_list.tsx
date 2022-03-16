import { SkillsListProps } from "../../interfaces/about_interface"
export default function SkillsList({ data }:SkillsListProps):React.ReactElement {
  return (
    <div id="skills" className="mt-32">
      <h2 className="text-center text-white font-notosans shadow-gray-700 text-7xl">
        Skills
      </h2>
      <h2 className="mt-2 text-3xl text-center text-secondary">技能專長</h2>
      <ul className="mt-10 grid grid-cols-11 gap-8">
        {
          data.map((skills, index)=> (
            <li key={skills.title} className={`py-9 px-10 bg-white dark:bg-opacity-10 ${(index % 3 == 0)? "col-span-5": "col-span-6"}`}>
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
          ))
        }
      </ul>
    </div>
  )
}
