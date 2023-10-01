import Link from "next/link"
import Img from "next/image"
import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"
import wissamlogo from "../components/wisamlogo1.png"

export function MainNav() {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <Img src={wissamlogo} alt="wissamlogo" width={45} height={45}/>
        {/* <span className="inline-block text-xl font-bold">
         
        </span> */}
      </Link>
    </div>
  )
}
