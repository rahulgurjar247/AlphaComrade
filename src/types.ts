export interface Project {
  id: string
  title: string
  tagline: string
  category: string
  status: string
  statusColor?: string
  description: string
  highlights: string[]
  tags: string[]
  liveUrl?: string
  repoUrl?: string
  badge?: string
  screenshots?: string[]
  featuredImage?: string
  stats?: { label: string; value: string }[]
}

export interface Metric {
  label: string
  value: string
  change?: string
  iconName: string
}
