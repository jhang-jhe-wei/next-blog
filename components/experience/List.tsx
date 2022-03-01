import { ListProps } from "../../interfaces/experience_interface"
export default function List(ListProps:ListProps):React.ReactElement {
  return (
    <div className="flex">
      <h2 className="absolute text-white font-notosans shadow-gray-700 rotate-90 origin-top-left text-7xl">
        {ListProps.backgroundText.split(" ").map(text=>(
          <span key={text}>
            {text}
            <br/>
          </span>
        ))}
      </h2>
      <h2 className="z-10 flex-1 text-3xl border-r-2 border-gray-300 text-secondary">{ListProps.category}</h2>
      <ul className="z-20 pb-56 list-disc list-inside flex-2">
        {
          ListProps.data.map(item => (
            <li key={item.title} className="mb-16 text-4xl text-gray-400 -translate-x-1.5">
              <p className="absolute inline-block w-20 text-base text-right -translate-x-48 translate-y-1">
                {item.started_at}
                <br/>
                ~
                <br/>
                {item.ended_at}
              </p>
              <h3 className="inline ml-10 text-2xl font-bold align-middle text-cyan-450">
                {item.title}．
                <span className="text-xl font-normal">
                  {item.subTitle}
                </span>
              </h3>
              <ul className="mt-8 text-lg list-disc list-outside ml-28 text-primary">
                {item.highlights.map(highlight => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
