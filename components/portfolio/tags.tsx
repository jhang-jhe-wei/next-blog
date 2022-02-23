import { useRouter } from 'next/router'
export default function Tags({tags, queryTag}:{tags:string[], queryTag:string|string[]}): React.ReactElement{
  const router = useRouter()

  return(
    <ul className="flex justify-center mt-20">
    { tags.map((tag, index) =>
    <li key={ tag } className={`px-6 text-base text-center  ${(index == tags.length -1)? "": "border-r-2 border-primary dark:border-white"}`}>
        <button className={`${queryTag == tag? "": "text-opacity-40"} text-primary dark:text-white`} onClick={() => addQuery(tag)} >{ tag }</button>
    </li>
    )}
  </ul>
  )

  function addQuery(query:string):void{
    router.push({
      pathname: "/portfolio",
      query: { tag: query },
    })
  }
}

