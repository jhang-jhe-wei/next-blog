import { ListItemProps } from "../../interfaces/about_interface"
import { useState, useEffect, useRef } from "react"
export default function ListItem({item}:{item:ListItemProps}) {
  const [reveal, setReveal] = useState(false)
  const element = useRef(null)
  useEffect(()=>{
    if(reveal) return;
    const scrollEventHandler = () => {
      if((window.scrollY + window.innerHeight / 4 * 3) > element.current.offsetTop){
        setReveal(true);
      }
    }
    document.addEventListener('scroll', scrollEventHandler)
    return () => {document.removeEventListener('scroll', scrollEventHandler)}
  }, [reveal])

  return (
    <li ref={element} className={`mb-16 text-4xl text-gray-400 -translate-x-1.5 transition-all duration-500 ${reveal? 'opacity-100' : 'translate-y-20 opacity-0'}`}>
      <p className="absolute inline-block w-20 text-xl text-right -translate-x-40 translate-y-1">
        {item.startedAt}
        <br/>
        ~
        <br/>
        {item.endedAt}
      </p>
      <h3 className="inline ml-10 text-2xl font-bold align-middle text-cyan-450">
        {item.title}．
        <span className="text-xl font-normal">
          {item.subTitle}
        </span>
      </h3>
      <ul className="mt-8 text-lg list-disc list-outside ml-28 dark:text-light text-primary">
        {item.highlights.map(highlight => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
    </li>
  )
}
