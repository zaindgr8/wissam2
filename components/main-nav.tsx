import { useTheme } from "next-themes";
import Link from "next/link";
import Img from "next/image";
import { Icons } from "@/components/icons";
import wissamlogo from "../components/wisamlogo1.png";
import wissamlogo1 from "../components/wisamlogo.png";

export function MainNav() {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <Img src={isDarkMode ? wissamlogo : wissamlogo1} alt="wissamlogo" width={45} height={45}/>
        {/* <span className="inline-block text-xl font-bold">
         
        </span> */}
      </Link>
    </div>
  );
}