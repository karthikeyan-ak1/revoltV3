export interface FooterNavGroup {
  label: string
  links: { label: string; href: string }[]
}

export interface FooterData {
  ctaHeadline: string
  ctaButtonLabel: string
  ctaButtonHref: string
  ctaBackgroundImage: string
  logoSrc: string
  logoAlt: string
  tagline: string
  bookDemoLabel: string
  bookDemoHref: string
  navGroups: FooterNavGroup[]
  socialLinks: { icon: string; href: string; label: string }[]
  legalLinks: { label: string; href: string }[]
}

export const FOOTER_DATA: FooterData = {
  ctaHeadline: 'Go from idea to production without building delivery stack',
  ctaButtonLabel: 'Book a Demo',
  ctaButtonHref: '/book-demo',
  ctaBackgroundImage: '/images/footer-card-bg.png',

  logoSrc: '/images/navbarLogo.webp',
  logoAlt: 'Revolte',
  tagline: 'AI for Software Engineering',
  bookDemoLabel: 'Book A Demo',
  bookDemoHref: '/book-demo',

  navGroups: [
    {
      label: 'Product',
      links: [
        { label: 'How Revolte Works', href: '/how-it-works' },
        { label: 'Capability', href: '/capability' },
        { label: 'Pricing', href: '/pricing' },
      ],
    },
    {
      label: 'Resources',
      links: [
        { label: 'Documentation', href: '/docs' },
        { label: 'Blog', href: '/blog' },
        { label: 'FAQ', href: '/faq' },
      ],
    },
    {
      label: 'Contact',
      links: [],
    },
  ],

  socialLinks: [
    { icon: '/icons/linkedIn.svg', href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: '/icons/instagram.svg', href: 'https://instagram.com', label: 'Instagram' },
    { icon: '/icons/x.svg', href: 'https://x.com', label: 'X' },
  ],

  legalLinks: [
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Privacy Policy', href: '/privacy' },
  ],
}
