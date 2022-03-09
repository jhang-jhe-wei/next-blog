export default function ResumeBtn() {
  return (
    <div className="pb-32 mt-32 text-center">
      <button onClick={()=>{window.print()}} className={`border-2 border-cyan-450 text-white px-4 py-2 rounded-lg bg-cyan-450 dark:hover:border-primary hover:bg-white hover:text-cyan-450 hover:no-underline`}>
        觀看我的履歷
      </button>
    </div>
  )
}
