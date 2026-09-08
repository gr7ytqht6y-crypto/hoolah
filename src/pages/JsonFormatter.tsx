import { useState } from 'react'
import { Copy, Trash2, AlertCircle, CheckCircle } from 'lucide-react'
import ToolLayout from '../components/ToolLayout'
import Input from '../components/Input'
import Button from '../components/Button'

type MessageType = 'error' | 'success' | null

export default function JsonFormatter() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [message, setMessage] = useState<{ type: MessageType; text: string }>({ type: null, text: '' })

  const showMessage = (type: MessageType, text: string) => {
    setMessage({ type, text })
    setTimeout(() => setMessage({ type: null, text: '' }), 3000)
  }

  const validateJSON = (json: string): boolean => {
    try {
      JSON.parse(json)
      return true
    } catch {
      return false
    }
  }

  const handleValidate = () => {
    if (!input.trim()) {
      showMessage('error', 'Please enter JSON to validate')
      return
    }

    if (validateJSON(input)) {
      showMessage('success', 'Valid JSON ✓')
      setOutput('')
    } else {
      showMessage('error', 'Invalid JSON - syntax error')
      setOutput('')
    }
  }

  const handlePrettyPrint = () => {
    if (!input.trim()) {
      showMessage('error', 'Please enter JSON to format')
      return
    }

    try {
      const parsed = JSON.parse(input)
      const formatted = JSON.stringify(parsed, null, 2)
      setOutput(formatted)
      showMessage('success', 'Formatted successfully ✓')
    } catch (err) {
      showMessage('error', `Invalid JSON: ${err instanceof Error ? err.message : 'Syntax error'}`)
      setOutput('')
    }
  }

  const handleMinify = () => {
    if (!input.trim()) {
      showMessage('error', 'Please enter JSON to minify')
      return
    }

    try {
      const parsed = JSON.parse(input)
      const minified = JSON.stringify(parsed)
      setOutput(minified)
      showMessage('success', 'Minified successfully ✓')
    } catch (err) {
      showMessage('error', `Invalid JSON: ${err instanceof Error ? err.message : 'Syntax error'}`)
      setOutput('')
    }
  }

  const handleCopyOutput = () => {
    if (!output) {
      showMessage('error', 'Nothing to copy. Process JSON first')
      return
    }

    navigator.clipboard.writeText(output).then(() => {
      showMessage('success', 'Copied to clipboard ✓')
    }).catch(() => {
      showMessage('error', 'Failed to copy')
    })
  }

  const handleClearAll = () => {
    setInput('')
    setOutput('')
    setMessage({ type: null, text: '' })
  }

  return (
    <ToolLayout
      title="JSON Formatter"
      description="Validate, format, and minify your JSON data"
    >
      <div className="space-y-lg">
        {/* Message */}
        {message.type && (
          <div className={`flex items-center gap-md p-md rounded-md ${
            message.type === 'error'
              ? 'bg-red-50 border border-red-200'
              : 'bg-green-50 border border-green-200'
          }`}>
            {message.type === 'error' ? (
              <AlertCircle size={20} className="text-red-600 flex-shrink-0" />
            ) : (
              <CheckCircle size={20} className="text-green-600 flex-shrink-0" />
            )}
            <p className={message.type === 'error' ? 'text-red-700' : 'text-green-700'}>
              {message.text}
            </p>
          </div>
        )}

        {/* Input */}
        <div>
          <Input
            label="Input JSON"
            placeholder="Paste your JSON here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="h-48 resize-none"
            helperText="Enter valid JSON to get started"
          />
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-md">
          <Button onClick={handleValidate} variant="primary" size="md" className="w-full">
            Validate
          </Button>
          <Button onClick={handlePrettyPrint} variant="primary" size="md" className="w-full">
            Pretty
          </Button>
          <Button onClick={handleMinify} variant="primary" size="md" className="w-full">
            Minify
          </Button>
          <Button onClick={handleClearAll} variant="secondary" size="md" className="w-full">
            Clear
          </Button>
        </div>

        {/* Output */}
        {output && (
          <div>
            <Input
              label="Output JSON"
              value={output}
              readOnly
              className="h-48 resize-none bg-neutral-50"
              helperText="Your processed JSON"
            />
            <div className="mt-md">
              <Button
                onClick={handleCopyOutput}
                variant="primary"
                size="md"
                className="w-full flex items-center justify-center gap-md"
              >
                <Copy size={18} />
                Copy Output
              </Button>
            </div>
          </div>
        )}
      </div>
    </ToolLayout>
  )
}