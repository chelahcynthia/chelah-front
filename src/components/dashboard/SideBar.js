import React from 'react'
import realestate from "../../assets/realestate.png";

const SideBar = () => {
  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <img 
          src={realestate} 
          className={`overflow-hidden transition-all ${
            expanded ? "w-32" : "w-0"
          }`}
          alt=""
          />

        </div>


      </nav>

    </aside>
  )
}

export default SideBar