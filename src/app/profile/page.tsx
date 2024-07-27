"use client";

import { useState } from "react";
import Link from "next/link";
import { CircleHelpIcon, HomeIcon, UserIcon } from "@/elements/icon";
import UserProfile from "@/pages/user";
import Support from "@/pages/support";

const menuItems = [
   { id: "basic-info", label: "Basic Info", icon: UserIcon, component: UserProfile },
   { id: "help-and-support", label: "Help & Support", icon: CircleHelpIcon, component: Support }
];

export default function Component() {
   const [selectedMenu, setSelectedMenu] = useState("basic-info");

   return (
      <div className="container py-8 mx-auto px-4 md:px-6 w-full grid gap-6">
         <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr_400px] gap-6">
            <nav className="rounded-lg">
               <div className="space-y-3">
                  {menuItems.map((item) => (
                     <Link
                        key={item.id}
                        href="#"
                        className={`flex items-center gap-2 px-2 py-2 text-sm font-medium hover:bg-muted rounded-md ${selectedMenu === item.id && "bg-muted"
                           }`}
                        onClick={() => setSelectedMenu(item.id)}
                        prefetch={false}
                     >
                        <item.icon className="w-4 h-4" />
                        {item.label}
                     </Link>
                  ))}
                  <Link
                     href={'/'}
                     className="flex items-center gap-2 px-2 py-2 text-sm font-medium hover:bg-muted rounded-md"
                  >
                     <HomeIcon className="w-4 h-4" />
                     Back to Home
                  </Link>
               </div>
            </nav>

            <div className="lg:col-span-2">
               {menuItems.map((item) =>
                  selectedMenu === item.id ? <item.component key={item.id} /> : null
               )}
            </div>
         </div>
      </div>
   );
}
