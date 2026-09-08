import Layout from '../components/Layout'
import Card from '../components/Card'

export default function About() {
  return (
    <Layout maxWidth="md" className="py-2xl">
      <div className="mb-2xl">
        <h1 className="text-4xl font-bold text-neutral-900 mb-md">About Hoolah</h1>
        <p className="text-neutral-600 text-lg">Learn about our mission and philosophy</p>
      </div>

      <div className="space-y-lg">
        <Card title="What is Hoolah?" description="Our vision and mission">
          <p>
            Hoolah is a modern technology ecosystem that brings together tools and services for developers and everyday users.
          </p>
          <p className="mt-md">
            We believe in creating simple, fast, and powerful solutions that respect user privacy. All tools work locally in your browser — your data stays with you.
          </p>
        </Card>

        <Card title="Our Philosophy: 66" description="Innovation & Infrastructure">
          <p>
            The number 66 represents the core of Hoolah's identity: Innovation (creating new solutions) and Infrastructure (building solid foundations).
          </p>
          <p className="mt-md">
            Every tool we create is designed to be innovative in its simplicity and built on infrastructure that respects your privacy.
          </p>
        </Card>

        <Card title="Hoolah Tools" description="The first product">
          <p>
            Hoolah Tools is the flagship product of the Hoolah ecosystem. It's a free, open web platform with essential utilities for developers and IT specialists.
          </p>
          <p className="mt-md">
            Start with JSON Formatter, UUID Generator, and more. New tools are added regularly based on community feedback.
          </p>
        </Card>

        <Card title="Technology" description="What powers Hoolah">
          <ul className="list-disc list-inside space-y-sm text-neutral-700">
            <li>React 18 for modern UI</li>
            <li>TypeScript for type safety</li>
            <li>Vite for blazing fast builds</li>
            <li>Tailwind CSS for beautiful design</li>
            <li>Zero external API calls for data privacy</li>
          </ul>
        </Card>

        <Card title="Open Source" description="Built for the community">
          <p>
            Hoolah is open source and available on GitHub. We welcome contributions, bug reports, and feature requests from the community.
          </p>
          <p className="mt-md">
            Licensed under MIT. Free to use, modify, and distribute.
          </p>
        </Card>
      </div>
    </Layout>
  )
}