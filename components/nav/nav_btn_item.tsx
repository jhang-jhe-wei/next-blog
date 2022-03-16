import { NavItemProps } from '../../interfaces/nav_interface'
import Link from 'next/link'
export default function NavBtnItem(props:NavItemProps):React.ReactElement{
  return(
    <li className="ml-12">
      <Link href={props.href}>
        <a className={`border border-secondary text-white px-5 pt-3 pb-2 rounded-[10px] bg-secondary dark:hover:border-primary hover:bg-white hover:text-secondary hover:no-underline`}>
        {props.children}
        </a>
      </Link>
    </li>
  )
}
