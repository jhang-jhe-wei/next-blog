export default function Toc():React.ReactElement {
  const tags = ["關於我", "教育背景", "工作經驗", "獲獎與成就", "技能專長"]
  const anchors = ["profile", "education", "works", "achievements", "skills"]
  return (
    <ul className="flex justify-center mt-20">
    { tags.map((tag, index) =>
    <li key={ tag } className={`px-6 text-base text-center  ${(index == tags.length -1)? "": "border-r-2 border-primary dark:border-white"}`}>
      <button onClick={()=>{
        window.scrollTo({ top: document.getElementById(anchors[index]).offsetTop - window.innerHeight / 2, behavior: 'smooth' }) } }
        className="dark:text-opacity-40 dark:hover:text-opacity-100 text-opacity-40 hover:text-opacity-100 text-primary dark:text-light">
        { tag }
      </button>
    </li>
    )}
  </ul>
  )
}
