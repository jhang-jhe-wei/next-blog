import { AchievementProps } from "../../interfaces/about_interface"
import { useState, useEffect, useRef } from "react"
export default function Achievement({item}:{item: AchievementProps}) {
  const [reveal, setReveal] = useState(false)
  const element = useRef(null)
  useEffect(()=>{
    if(reveal) return;
    const scrollEventHandler = () => {
      if((window.scrollY + window.innerHeight / 4 * 3) > (element.current.offsetTop + element.current.offsetParent.offsetParent.offsetTop)){
        setReveal(true);
      }
    }
    document.addEventListener('scroll', scrollEventHandler)
    return () => {document.removeEventListener('scroll', scrollEventHandler)}
  }, [reveal])

  return (
    <li ref={element} className={`transition-all duration-500 ${reveal? 'opacity-100' : 'translate-y-20 opacity-0'}`}>
      <h3 className="text-2xl font-bold text-cyan-450">{item.title}</h3>
      {item.isFull?
      <ul className="mt-8 text-base list-disc list-inside text-primary dark:text-light grid grid-cols-2 gap-x-10">
        {item.highlights.map(highlight => (
          <li key={highlight}>
            {highlight}
          </li>
        ))}
      </ul>:
      <ul className="mt-8 text-base list-disc list-inside text-primary dark:text-light">
        {item.highlights.map(highlight => (
          <li key={highlight}>
            {highlight}
          </li>
        ))}
      </ul>
      }
    </li>
  )
}
