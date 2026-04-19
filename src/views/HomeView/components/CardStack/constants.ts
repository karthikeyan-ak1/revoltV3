export const CARD = {
  CTA: 'See how Revolte works',
  ARROW: '→',
  BACKGROUND_IMAGE_ALT: 'BackgroundImage',
}

export interface Feature {
  title: string
  desc: string
  icon: string
  duration: number
}

export const FEATURES: Feature[] = [
  {
    title: 'Agent Harness',
    desc: 'One YAML to define your platform requirements. Revolte converts them into executable workflows, automatically provisioning infrastructure, services, and environments needed to build and run your application.',
    icon: '/images/fi_8088781.svg',
    duration: 18000,
  },
  {
    title: 'Delivery pane view',
    desc: "Revolte's AI agents develop, test, and deliver software seamlessly. Create custom agents to automate org-specific internal workflows, policies, and integrations.",
    icon: '/images/fi_7534169.svg',
    duration: 6667,
  },
  {
    title: 'CLI',
    desc: "Revolte works whether you're starting from scratch or connecting an existing codebase. Simply connect your repository and Revolte begins managing the delivery lifecycle.",
    icon: '/images/fi_15067114.svg',
    duration: 6667,
  },
  {
    title: 'Platform As Code',
    desc: 'Every change remains fully visible and reviewable. Engineers can inspect, modify, or override any action before deployment.',
    icon: '/images/fi_17208842.svg',
    duration: 6667,
  },
  {
    title: 'Managed Enviroments',
    desc: 'One YAML to define your platform requirements. Revolte converts them into executable workflows, automatically provisioning infrastructure, services, and environments needed to build and run your application.',
    icon: '/images/fi_16800905.svg',
    duration: 16667,
  },
  {
    title: 'Delivery Intelligence for delivery/AI',
    desc: 'Built-in dashboards provide DORA metrics, flow metrics, and delivery insights so teams can continuously improve software development performance.',
    icon: '/images/fi_11426492.svg',
    duration: 6667,
  },
]
