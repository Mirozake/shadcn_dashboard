'use client';

import React from 'react'
import { User } from "lucide-react";
import UserItem from "./UserItem";
import { Command, CommandGroup, CommandItem, CommandList } from "@/components/ui/command";

interface MenuItem {
  link: string;
  icon?: React.ReactNode;
  text: string;
}

interface MenuGroup {
  group: string;
  items: MenuItem[];
}

export default function CustomSidebar() {
  const menuList: MenuGroup[] = [
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
  ];

  return (
    <div className="flex flex-col gap-2 w-[300px] border-r min-h-screen p-4">
      <div>
        <UserItem />
      </div>
      <div className="grow">
        <Command>
          <CommandList>
            {menuList.map((menu, key) => (
              <CommandGroup key={key} heading={menu.group}>
                {menu.items.map((option, optionKey) => (
                  <CommandItem key={optionKey}>
                    {option.icon}
                    {option.text}
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </div>
      <div>Settings / Notifications</div>
    </div>
  );
}