import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import UserAvatar from "./avatar";
import { HomeIcon, UserIcon } from "./icon";
import Link from "next/link";

const menuItems = [
    { id: "home", label: "Home", icon: HomeIcon },
];

function Sidebar() {
    return (
        <div className="space-y-4">
            <nav className="space-y-2">
                {menuItems.map((item) => (
                    <Button
                        key={item.id}
                        variant="ghost"
                        className="w-full justify-start gap-2 px-4 text-left"
                    >
                        <item.icon className="h-4 w-4" />
                        {item.label}
                    </Button>
                ))}
                <Link
                    href={'/profile'}
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium hover:bg-muted rounded-md"
                >
                    <UserIcon className="w-4 h-4" />
                    Profile
                </Link>
            </nav>
        </div>
    );
}

export default Sidebar;
