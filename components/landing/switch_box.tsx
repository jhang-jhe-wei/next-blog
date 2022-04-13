export default function SwitchBox({ x, y }:{ x:string, y:string }){
  return (
    <svg x={x} y={y} width="70" height="40" viewBox="0 0 70 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="70" height="40" className="stroke-primary dark:stroke-white" strokeWidth="4"/>
      <rect x="20" y="12.5" width="30" height="15" className="stroke-primary dark:stroke-white" strokeWidth="4"/>
    </svg>
  )
}
