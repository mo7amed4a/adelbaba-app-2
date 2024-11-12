"use client";
import { languages } from "@/app/i18n/settings";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Earth } from "lucide-react";
import { useRouter } from "next/navigation";

export default function LanguageList() {
  const router = useRouter();
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex gap-x-2 justify-center items-center py-2 w-full">
          <Earth className="size-8 md:size-5" />
          <span className="hidden md:block">Languages</span>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="center">
          <DropdownMenuLabel>Languages</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {languages.map((lng) => (
            <DropdownMenuItem
              className="cursor-pointer"
              key={lng}
              onClick={() => router.push("/" + lng)}
            >
              {lng}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
