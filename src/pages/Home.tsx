import { Link } from 'react-router-dom'
import { Zap, Lock, Smartphone } from 'lucide-react'
import Layout from '../components/Layout'
import Card from '../components/Card'
import Button from '../components/Button'

export default function Home() {
  const features = [
    {
      icon: Zap,
      title: 'Fast',
      description: 'Lightning-fast performance powered by Vite',
    },
    {
      icon: Lock,
      title: 'Private',
      description: 'All processing happens in your browser',
    },
    {
      icon: Smartphone,
      title: 'Mobile First',
      description: 'Perfect experience on any device',
    },
  ]

  return (
    <Layout maxWidth="lg" className="py-2xl">
      <div className="text-center mb-3xl">
        <h1 className="text-5xl font-bold text-neutral-900 mb-md">
          <span className="gradient-hoolah bg-clip-text text-transparent">Fast, Simple & Powerful</span>
        </h1>
        <p className="text-xl text-neutral-600 mb-xl">
          Essential tools for developers, right in your browser. No signup. No ads. No tracking.
        </p>
        <Link to="/tools">
          <Button size="lg" className="px-2xl py-md text-lg">
            Explore Tools →
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-lg mb-3xl">
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <Card key={index} className="text-center">
              <div className="flex justify-center mb-md">
                <div className="p-md bg-primary-100 rounded-lg">
                  <Icon size={32} className="text-primary-600" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-sm">{feature.title}</h3>
              <p className="text-neutral-600 text-sm">{feature.description}</p>
            </Card>
          )
        })}
      </div>

      <div className="bg-primary-50 border border-primary-200 rounded-lg p-lg">
        <h2 className="text-2xl font-bold text-neutral-900 mb-md">What is Hoolah?</h2>
        <p className="text-neutral-700 mb-md">
          Hoolah is an open ecosystem of tools and services for developers. It starts with <strong>Hoolah Tools</strong> — a collection of essential utilities you need every day.
        </p>
        <p className="text-neutral-600 text-sm">Philosophy: <strong>66 = Innovation & Infrastructure</strong></p>
      </div>
    </Layout>
  )
}