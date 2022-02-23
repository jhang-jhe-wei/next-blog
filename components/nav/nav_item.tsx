import { NavItemProps } from '../../interfaces/nav_interface'
import Link from 'next/link'
export default function NavItem(props:NavItemProps):React.ReactElement{
  return(
    <li className="ml-12">
      <Link href={props.href}>
        <a className="text-primary dark:text-white dark:hover:text-secondary hover:text-secondary">
        {props.children}
        </a>
      </Link>
    </li>
  )
}
