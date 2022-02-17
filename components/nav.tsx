import Link from 'next/link'

export default function Nav(): React.ReactNode{
  return (
    <nav className="sticky top-0 px-10 py-6 bg-primary bg-opacity-60 backdrop-blur">
      <div className="flex items-center justify-between mx-auto">
        <Link href="/" ><a className="text-2xl text-white hover:no-underline">Wells</a>
        </Link>
        <ul className="flex items-center justify-between">
          <NavItem href="/portfolio">作品集</NavItem>
          <NavItem href="#">經歷</NavItem>
          <NavItem href="https://blog.wells.tw">部落格</NavItem>
          <NavItem href="#" styleName="px-4 py-2 rounded-lg hover:no-underline bg-secondary hover:bg-white">聯絡我</NavItem>
          <NavItem href="#"><a href="#" className="text-white hover:text-secondary"><svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg></a></NavItem>
        </ul>
      </div>
    </nav>
  )
}

function NavItem(props:NavItemProps): React.Component{
  return(<li className="ml-12"><Link href={props.href}><a className={`text-white hover:text-secondary hover:no-underline ${props.styleName}`}>{props.children}</a></Link></li>
)
}

interface NavItemProps {
  href: string;
  styleName: string|null;
  children: React.ReactNode;
}
