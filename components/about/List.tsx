import { ListProps } from "../../interfaces/about_interface"
import ListItem from "./list_item"
export default function List(listProps:ListProps):React.ReactElement {
  return (
    <div className="flex" id={listProps.id}>
      <h2 className="absolute text-white font-notosans shadow-gray-700 rotate-90 origin-top-left text-7xl">
        {listProps.backgroundText.split(" ").map(text=>(
          <span key={text}>
            {text}
            <br/>
          </span>
        ))}
      </h2>
      <h2 className="z-10 flex-1 text-3xl border-r border-gray-400 text-secondary">{listProps.category}</h2>
      <ul className="z-20 pb-32 list-disc list-inside flex-2">
        {
          listProps.data.map(item => (
            <ListItem key={item.title} item={item}/>
          ))
        }
      </ul>
    </div>
  )
}
