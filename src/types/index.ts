export interface Tool {
  id: string
  title: string
  description: string
  icon: string
  status: 'available' | 'coming-soon'
}

export type MessageType = 'error' | 'success' | 'info' | null