import { AchievementsProps } from "../../interfaces/about_interface"
import Achievement from "./achievement"
export default function Achievements(achievementsProps:AchievementsProps):React.ReactElement {
  return (
    <div id="achievements" className="w-full text-nobile dark:from-slate-900 gray-700 dark:to-primary bg-gradient-to-r from-white to-light -translate-y-10">
      <div className="relative max-w-sm mx-auto md:max-w-5xl">
        <h2 className="text-3xl text-right -translate-y-14 text-secondary" >獲獎紀錄</h2>
        <h2 className="absolute text-white -right-20 top-96 font-notosans shadow-gray-700 rotate-90 origin-top-right text-7xl" >Achievement</h2>
        <ul className="py-20 border-b-2 border-gray-400 grid grid-cols-2 gap-y-20 gap-x-10">
          {achievementsProps.data.filter(item => (!item.isFull)).map(item => (
            <Achievement key={item.title} item={item}/>
          ))}
        </ul>
        <ul className="py-20 gird grid-cols-1 gap-y-20 ">
          {achievementsProps.data.filter(item => (item.isFull)).map(item => (
            <Achievement key={item.title} item={item}/>
          ))}
        </ul>
      </div>
    </div>
  )
}
