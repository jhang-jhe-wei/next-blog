export default function Toc():React.ReactElement {
  const tags = ["關於我", "教育背景", "工作經驗", "獲獎與成就", "技能專長"]
  const queryTag = "關於我"
  return (
    <ul className="flex justify-center mt-20">
    { tags.map((tag, index) =>
    <li key={ tag } className={`px-6 text-base text-center  ${(index == tags.length -1)? "": "border-r-2 border-primary dark:border-white"}`}>
        <button className={`${queryTag == tag? "": "text-opacity-40"} text-primary dark:text-white`} >{ tag }</button>
    </li>
    )}
  </ul>
  )
}
