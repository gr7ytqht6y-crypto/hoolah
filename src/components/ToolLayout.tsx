import { ReactNode } from 'react'
import Card from './Card'
import Layout from './Layout'

interface ToolLayoutProps {
  title: string
  description: string
  children: ReactNode
}

export default function ToolLayout({ title, description, children }: ToolLayoutProps) {
  return (
    <Layout maxWidth="md" className="py-xl">
      <div className="mb-2xl">
        <h1 className="text-4xl font-bold text-neutral-900 mb-md">{title}</h1>
        <p className="text-neutral-600 text-lg">{description}</p>
      </div>
      <Card>
        {children}
      </Card>
    </Layout>
  )
}