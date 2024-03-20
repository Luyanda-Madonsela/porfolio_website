import React, { ReactNode } from 'react'

export const metadata = {
  title: 'Unsuccessful',
  description: 'Get in touch by sending me a message',
}

interface ContactProps {
  children: ReactNode
}

export default function Contact({ children }: ContactProps) {
  return <div>{children}</div>
}
