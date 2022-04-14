import Light from './light'
import Neonsign from './neonsign'
export default function Signboard(){
  return (
    <>
      <div className="w-full border-b-4 border-primary dark:border-white">
        <div className="flex items-end justify-around max-w-xl mx-auto lg:max-w-7xl">
          <Light/>
          <Light/>
          <Light/>
          <div className="hidden lg:block bg-light dark:bg-primary translate-y-6">
            <Neonsign width='500'/>
          </div>
          <Light/>
          <Light/>
          <Light/>
        </div>
      </div>
      <div className="block mt-10 lg:hidden">
        <div className="max-w-md mx-auto">
          <Neonsign width='80%'/>
        </div>
      </div>
    </>
  )
}
