

import { cn } from "@/lib/utils"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Link from "next/link"
import React from "react"
import LinkApp from "../global/LinkApp"

export function CategoryHeader({
    isHome=false,
    lng
}:{
    isHome?: boolean,
    lng: string
}) {
    const categories = [
      { id: 2, name: "New in", url: "new-in" },
      { id: 3, name: "Sale", url: "sale" },
      { id: 4, name: "Electronics", url: "electronics" },
      { id: 5, name: "Screens", url: "screens" },
      { id: 6, name: "Speakers", url: "speakers" },
      { id: 7, name: "Covers", url: "covers" },
      { id: 8, name: "Cables", url: "cables" },
      { id: 9, name: "Chargers", url: "chargers" },
      { id: 10, name: "Others", url: "others" }
    ]
    
    return (
      <NavigationMenu className="z-50 relative hidden lg:block">
        <NavigationMenuList className="flex rtl:flex-row-reverse">
          <NavigationMenuItem>
            <NavigationMenuTrigger className={` ${!isHome && '!text-black'}`}>All Categories</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <Link
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      {/* <Icons.logo className="h-6 w-6" /> */}
                      <div className="mb-2 mt-4 text-lg font-medium">
                        shadcn/ui
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Beautifully designed components built with Radix UI and
                        Tailwind CSS.
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/docs" title="Introduction">
                  Re-usable components built using Radix UI and Tailwind CSS.
                </ListItem>
                <ListItem href="/docs/installation" title="Installation">
                  How to install dependencies and structure your app.
                </ListItem>
                <ListItem href="/docs/primitives/typography" title="Typography">
                  Styles for headings, paragraphs, lists...etc
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {categories && categories.length > 0 && categories.map(item => <NavigationMenuItem key={item.id}>
            <LinkApp href={`/categories/${item.url}`} lng={lng}>
              <NavigationMenuLink className={`${navigationMenuTriggerStyle()} ${!isHome && '!text-black'}`}>
                {item.name}
              </NavigationMenuLink>
            </LinkApp>
          </NavigationMenuItem>)}
        </NavigationMenuList>
      </NavigationMenu>
    )
  }
  
  const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
  >(({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  })
  ListItem.displayName = "ListItem"