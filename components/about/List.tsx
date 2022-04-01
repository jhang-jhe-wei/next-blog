import { ListProps } from "../../interfaces/about_interface"
import ListItem from "./list_item"
export default function List(listProps:ListProps):React.ReactElement {
  return (
    <div className="grid xl:grid-cols-3 grid-cols-5" id={listProps.id}>
      <h2 className="absolute hidden text-4xl text-white sm:block font-notosans shadow-gray-700 rotate-90 origin-top-left xl:text-7xl">
        {listProps.backgroundText.split(" ").map(text=>(
          <span key={text}>
            {text}
            <br/>
          </span>
        ))}
      </h2>
      <div className="col-span-1">
        <h2 className="hidden text-3xl xl:text-4xl xl:block text-secondary">{listProps.category}</h2>
      </div>
      <div className="relative z-20 col-span-4 xl:col-span-2">
        <h2 className="absolute block text-3xl left-20 -top-20 xl:hidden text-secondary">{listProps.category}</h2>
        <ul className="pb-20 list-disc list-inside border-l border-gray-400">
          {
            listProps.data.map(item => (
              <ListItem key={item.title} item={item}/>
            ))
          }
        </ul>
      </div>
    </div>
  )
}
