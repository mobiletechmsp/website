import {
  Cable,
  ChartNoAxesColumnIncreasing,
  Cloud,
  Compass,
  DatabaseBackup,
  MonitorPlay,
  Network,
  PhoneCall,
  ShieldCheck,
  Wrench,
  type LucideProps,
} from 'lucide-react'
import type { ServiceIcon as IconName } from '@/data/site'

const icons: Record<IconName, React.ComponentType<LucideProps>> = {
  network: Network,
  shield: ShieldCheck,
  cloud: Cloud,
  database: DatabaseBackup,
  cable: Cable,
  monitor: MonitorPlay,
  phone: PhoneCall,
  compass: Compass,
  wrench: Wrench,
  chart: ChartNoAxesColumnIncreasing,
}

export function ServiceIcon({ name, ...props }: { name: IconName } & LucideProps) {
  const Icon = icons[name]
  return <Icon {...props} />
}
