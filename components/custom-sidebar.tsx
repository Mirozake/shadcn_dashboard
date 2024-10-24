"use client"

import React from "react"
import { FolderOpen, Grid, Library, LayoutDashboard } from "lucide-react"
import Link from "next/link"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function CustomSidebar() {
  return (
    <div className="w-64 bg-gray-100 flex flex-col h-full">
      <div className="p-4 border-b">
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User avatar" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">John Doe</p>
            <p className="text-xs text-gray-500">john@example.com</p>
          </div>
        </div>
      </div>
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        <Button variant="ghost" className="w-full justify-start" asChild>
          <Link href="/test">
            <FolderOpen className="mr-2 h-4 w-4" />
            Test Page
          </Link>
        </Button>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="manage">
            <AccordionTrigger className="hover:no-underline">
              <Button variant="ghost" className="w-full justify-start">
                <Grid className="mr-2 h-4 w-4" />
                Manage
              </Button>
            </AccordionTrigger>
            <AccordionContent>
              <div className="pl-6 space-y-2">
                <Button variant="ghost" className="w-full justify-start text-sm">Test1</Button>
                <Button variant="ghost" className="w-full justify-start text-sm">Test2</Button>
                <Button variant="ghost" className="w-full justify-start text-sm">Test3</Button>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Button variant="ghost" className="w-full justify-start">
          <Library className="mr-2 h-4 w-4" />
          Library
        </Button>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="overview">
            <AccordionTrigger className="hover:no-underline">
              <Button variant="ghost" className="w-full justify-start">
                <LayoutDashboard className="mr-2 h-4 w-4" />
                Overview
              </Button>
            </AccordionTrigger>
            <AccordionContent>
              <div className="pl-6 space-y-2">
                <Button variant="ghost" className="w-full justify-start text-sm">Test1</Button>
                <Button variant="ghost" className="w-full justify-start text-sm">Test2</Button>
                <Button variant="ghost" className="w-full justify-start text-sm">Test3</Button>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </nav>
    </div>
  )
}