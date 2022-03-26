import Link from "next/link";
export default function NavMobileMenu({reveal}) {
  return (
  <div className={`z-40 fixed top-0 left-0 h-screen transition-all overflow-x-hidden duration-500 bg-opacity-95 bg-primary ${reveal? "w-full": "w-0"}`}>
    <div className="absolute w-full top-1/3">
      <ul>
        <li>
          <Link href="/" >
            <a className="block text-2xl text-center text-white hover:no-underline">Wells</a>
          </Link>
        </li>
        <li className="mt-4">
          <Link href="/portfolio" >
            <a className="block text-2xl text-center text-white hover:no-underline">作品集</a>
          </Link>
        </li>
        <li className="mt-4">
          <Link href="/about" >
            <a className="block text-2xl text-center text-white hover:no-underline">經歷</a>
          </Link>
        </li>
        <li className="mt-4">
          <Link href="https://blog.wells.tw" >
            <a className="block text-2xl text-center text-white hover:no-underline">部落格</a>
          </Link>
        </li>
        <li className="mt-4">
          <Link href="mailto:jhang0912407249@gmail.com" >
            <a className="block text-2xl text-center text-white hover:no-underline">聯絡我</a>
          </Link>
        </li>
        <li className="block mt-4 text-center text-white dark:text-white" onClick={()=>{
          let root = document.documentElement;
          if(root.className == ""){
            root.className = "dark";
          }else{
            root.className = "";
          }
        }}>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" href="#" >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </button>
        </li>
      </ul>
    </div>
  </div>
  )
}
