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
    <li ref={element} className={`relative mb-16 text-3xl xl:text-4xl text-gray-400 transition-all duration-500 ${reveal? 'opacity-100' : 'translate-y-20 opacity-0'}`}>
      <svg viewBox="0 0 2 2" className="z-10 w-2 absolute -left-1 top-2">
        <circle cx="1" cy="1" r="1" className="fill-gray-400" />
      </svg>
      <div>
        <p className="absolute w-20 text-base text-right -left-28 xl:text-xl">
          {item.startedAt}
          <br/>
          ~
          <br/>
          {item.endedAt}
        </p>
        <div className="ml-10">
          <h3 className="text-xl font-bold align-middle xl:text-2xl text-cyan-450">
            {item.title}
            <span className="block md:inline">
              <svg viewBox="0 0 2 2" className="w-1.5 inline mr-2 md:mx-2">
                <circle cx="1" cy="1" r="1" className="fill-cyan-450" />
              </svg>
              <span className="text-lg font-normal xl:text-xl">
                {item.subTitle}
              </span>
            </span>
          </h3>
          <ul className="mt-5 text-base list-disc list-inside xl:text-lg dark:text-light text-primary">
            {item.highlights.map(highlight => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  )
}
