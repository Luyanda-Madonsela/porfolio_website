import React, { ReactNode } from 'react'

export const metadata = {
  title: 'My Projects',
  description:
    'All my projects with their corresponding demo links and tech stacks',
}

interface PortfolioProps {
  children: ReactNode
}

export default function Portfolio({ children }: PortfolioProps) {
  return <div>{children}</div>
}
