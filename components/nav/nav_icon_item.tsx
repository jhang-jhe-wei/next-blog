import { useAppDispatch } from "../../reducers/store";
import { useCallback } from "react";
import { trunAllOn, trunAllOff } from "../../reducers/light/light_slice";
export default function NavIconItem():React.ReactElement{
  const dispatch = useAppDispatch();
  const switchMode = useCallback(()=>{
    let root = document.documentElement;
    if(root.className == ""){
      root.className = "dark";
      dispatch(trunAllOn());
    }else{
      root.className = "";
      dispatch(trunAllOff());
    }
  }, [])
  
  return (
    <div className="h-full ml-12 hover:text-secondary dark:hover:text-secondary text-primary dark:text-white" onClick={switchMode}>
      <button className="align-middle">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" href="#" >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      </button>
    </div>
  )
}