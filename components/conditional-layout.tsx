'use client'

import { usePathname } from 'next/navigation'
import LayoutWrapper from './layout-wrapper'

export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const noLayoutPages = ['/login', '/signup']

  const isPublicPage = noLayoutPages.includes(pathname)

  return isPublicPage ? <>{children}</> : <LayoutWrapper>{children}</LayoutWrapper>
}
