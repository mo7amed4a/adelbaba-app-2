"use client";
import React from "react";
import { SidebarGroup } from "../ui/sidebar";
import { usePathname } from "next/navigation";
import LinkApp from "../global/LinkApp";

export default function AccountSidebarLinks({ lng }: { lng: string }) {
  const pathname = usePathname();
  return (
    <div className="text-sm cursor-pointer previous-orders py-4">
      <SidebarGroup
        className={pathname.includes("/account/overview") ? "active" : ""}
      >
        <LinkApp href="/account/overview" lng={lng}>
          Overview
        </LinkApp>
      </SidebarGroup>
      <SidebarGroup
        className={pathname.includes("/account/purchases") ? "active" : ""}
      >
        <LinkApp href="/account/purchases" lng={lng}>
          Track Purchases
        </LinkApp>
      </SidebarGroup>
      <SidebarGroup
        className={pathname.includes("/account/support") ? "active" : ""}
      >
        <LinkApp href="/account/support" lng={lng}>
          Support
        </LinkApp>
      </SidebarGroup>
      <SidebarGroup
        className={pathname.includes("/account/settings") ? "active" : ""}
      >
        <LinkApp href="/account/settings" lng={lng}>
          Settings
        </LinkApp>
      </SidebarGroup>
      <SidebarGroup
        className={pathname.includes("/account/seller") ? "active" : ""}
      >
        <LinkApp href="/account/seller" lng={lng}>
          Become a seller
        </LinkApp>
      </SidebarGroup>
    </div>
  );
}
