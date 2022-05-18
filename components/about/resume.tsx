export default function Resume() {
  return (
    <div className="pb-32 mt-32 text-center print:hidden">
      <h2 className="text-center text-white font-notosans shadow-gray-700 text-7xl">Download</h2>
      <button onClick={()=>{window.print()}} className="mt-20 inline-block border-2 border-cyan-450 text-white px-5 pt-3 pb-2 rounded-[10px] bg-cyan-450 dark:hover:border-primary hover:bg-white hover:text-cyan-450 hover:no-underline">
        下載我的履歷
      </button>
    </div>
  )
}
