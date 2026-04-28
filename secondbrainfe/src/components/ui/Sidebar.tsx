import { Logo } from "../../icons/Logo";
import { TwitterIcon } from "../../icons/TwitterIcon";
import { YouTubeIcon } from "../../icons/YouTubeIcon";
import { Sidebaritem } from "./Sidebaritem";

export function Sidebar() {
    return <div className="h-screen bg-white border-r-2 w-72 fixed left-0 top-0 pl-6">
        <div className="flex text-2xl pt-4 items-center pb-4">
            <div className="pr-2">
                <Logo/>
            </div>
            <div className="font-bold">
                Second Brain
            </div>
        </div>
        <div>
            <Sidebaritem text="Twitter" icon={<TwitterIcon/>}/>
            <Sidebaritem text="YouTube" icon={<YouTubeIcon/>}/>
        </div>
    </div>
} 