import React, { ReactNode } from 'react'

export const metadata = {
  title: 'About Me',
  description:
    'A brief summary of my employment history, skills and certifications',
}

interface AboutProps {
  children: ReactNode
}

export default function About({ children }: AboutProps) {
  return <div>{children}</div>
}
