import { Link } from 'react-router-dom'
import { Code, Key, RefreshCw, Lock, LinkIcon, Clock, Hash, Zap } from 'lucide-react'
import Layout from '../components/Layout'
import Card from '../components/Card'

const tools = [
  {
    id: 'json-formatter',
    icon: Code,
    title: 'JSON Formatter',
    description: 'Validate, format, and minify JSON',
    status: 'Available',
  },
  {
    id: 'jwt-decoder',
    icon: Key,
    title: 'JWT Decoder',
    description: 'Decode and inspect JWT tokens',
    status: 'Coming Soon',
  },
  {
    id: 'uuid-generator',
    icon: RefreshCw,
    title: 'UUID Generator',
    description: 'Generate unique identifiers',
    status: 'Coming Soon',
  },
  {
    id: 'base64-encoder',
    icon: Lock,
    title: 'Base64 Encoder/Decoder',
    description: 'Encode and decode Base64',
    status: 'Coming Soon',
  },
  {
    id: 'url-encoder',
    icon: LinkIcon,
    title: 'URL Encoder/Decoder',
    description: 'Encode and decode URLs',
    status: 'Coming Soon',
  },
  {
    id: 'timestamp-converter',
    icon: Clock,
    title: 'Timestamp Converter',
    description: 'Convert between timestamps and dates',
    status: 'Coming Soon',
  },
  {
    id: 'hash-generator',
    icon: Hash,
    title: 'Hash Generator',
    description: 'Generate SHA-256, SHA-512, etc.',
    status: 'Coming Soon',
  },
  {
    id: 'regex-tester',
    icon: Zap,
    title: 'Regex Tester',
    description: 'Test regular expressions',
    status: 'Coming Soon',
  },
]

export default function Tools() {
  return (
    <Layout maxWidth="lg" className="py-2xl">
      <div className="mb-2xl">
        <h1 className="text-4xl font-bold text-neutral-900 mb-md">All Tools</h1>
        <p className="text-neutral-600 text-lg">Everything you need for development, right in your browser</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
        {tools.map((tool) => {
          const Icon = tool.icon
          const isAvailable = tool.status === 'Available'
          const href = isAvailable ? `/tools/${tool.id}` : '#'

          return (
            <Link key={tool.id} to={href} className={isAvailable ? 'hover:no-underline' : 'pointer-events-none'}>
              <Card className={isAvailable ? 'hover:shadow-lg hover:border-primary-300' : 'opacity-70'}>
                <div className="flex items-start justify-between mb-md">
                  <div className="p-md bg-primary-100 rounded-lg">
                    <Icon size={24} className="text-primary-600" />
                  </div>
                  <span className={`text-xs font-semibold px-sm py-xs rounded-full ${
                    isAvailable
                      ? 'bg-green-100 text-green-700'
                      : 'bg-neutral-200 text-neutral-600'
                  }`}>
                    {tool.status}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-sm">{tool.title}</h3>
                <p className="text-neutral-600 text-sm">{tool.description}</p>
              </Card>
            </Link>
          )
        })}
      </div>
    </Layout>
  )
}