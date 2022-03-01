import { AchievementProps } from "../../interfaces/experience_interface"
export default function Achievement(achievementProps:AchievementProps):React.ReactElement {
  return (
    <div className="w-full text-nobile bg-gradient-to-r from-white to-light -translate-y-10">
      <div className="relative max-w-sm mx-auto md:max-w-5xl">
        <h2 className="absolute right-0 text-3xl -top-11 text-secondary" >獲獎紀錄</h2>
        <ul className="py-20 border-b-2 border-gray-300 grid grid-cols-2 gap-y-20 gap-x-10">
          {achievementProps.data.filter(item => (!item.is_full)).map(item => (
            <li key={item.title}>
              <h3 className="text-2xl font-bold text-cyan-450">
                {item.title}
              </h3>
              <ul className="mt-8 text-base list-disc list-inside">
                {item.highlights.map(highlight => (
                  <li key={highlight}>
                    {highlight}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <ul className="py-20 gird grid-cols-1 gap-y-20 ">
          {achievementProps.data.filter(item => (item.is_full)).map(item => (
            <li key={item.title}>
              <h3 className="text-2xl font-bold text-cyan-450">
                {item.title}
              </h3>
              <ul className="mt-8 text-base list-disc list-inside grid grid-cols-2 gap-x-10">
                {item.highlights.map(highlight => (
                  <li key={highlight}>
                    {highlight}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
