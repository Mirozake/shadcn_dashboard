'use client';

import { User } from "lucide-react";
import UserItem from "./UserItem";
import { Command, CommandGroup, CommandItem, CommandList, CommandSeparator } from "@/components/ui/command";

export default function Sidebar() {
    const menuList = [
        {
            group: "General",
            items: [
                {
                    link: "/",
                    icon: <User />,
                    text: "Profile"
                },
                {
                    link: "/",
                    text: "Inbox"
                },
                {
                    link: "/",
                    text: "Billing"
                },
                {
                    link: "/",
                    text: "Notifications"
                },
            ]
        },
        {
            group: "Settings",
            items: [
                {
                    link: "/",
                    text: "General Settings"
                },
                {
                    link: "/",
                    text: "Privacy"
                },
                {
                    link: "/",
                    text: "Logs"
                }
            ]
        }
    ]
    return <div className="flex flex-col gap-2 w-[300px] border-r min-h-screen p-4">
        <div>
            <UserItem />
        </div>
        <div className="grow">
        <Command>
            <CommandList>
                {menuList.map((menu: any, key: number) => (
                    <CommandGroup key={key} heading={menu.group}>
                        {menu.items.map((option: any, optionKey: number) =>
                        <CommandItem key={optionKey}>
                            {option.icon}
                            {option.text}
                        </CommandItem>
                        )}
                    </CommandGroup>
                ))}
            </CommandList>
        </Command>

        </div>
        <div>Settings / Notifications</div>
    </div>;
}