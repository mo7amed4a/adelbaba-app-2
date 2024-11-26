import Link from "next/link"
import React from "react"

export default function LinkApp({children,href, lng, className}: {
    children: React.ReactNode
    href: string,
    lng: string,
    className?: string
}) {
  return (
    <Link href={`/${lng}${href}`} className={className}>{children}</Link>
  )
}
