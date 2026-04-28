import type { ReactElement } from "react";

export function Sidebaritem({text,icon}:{
    text : string,
    icon : ReactElement
}){
    return <div className="flex  text-gray-800 font-semibold cursor-pointer hover:bg-gray-200 rounded-md ">
        <div className="pr-2 py-2">
            {icon}
        </div>
        <div className="pr-2 py-2">
            {text}
        </div>
    </div>
}