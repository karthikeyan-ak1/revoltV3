export interface ContactSocialLink {
  icon: string
  href: string
  label: string
}

export interface ContactCommunityLink {
  icon: string
  href: string
  label: string
}

export interface ContactData {
  form: {
    heading: string
    privacyPolicyLabel: string
    privacyPolicyLinkText: string
    privacyPolicyHref: string
    submitLabel: string
  }
  support: {
    headline: string
    description: string
    issueHeading: string
    issueText: string
    issueEmail: string
    communityTitle: string
    communityDescription: string
    communityLinks: ContactCommunityLink[]
  }
  contact: {
    email: string
    socialLinks: ContactSocialLink[]
  }
}

export const CONTACT_DATA: ContactData = {
  form: {
    heading: 'How can we help?',
    privacyPolicyLabel: 'By submitting this, I confirm that I have read and understood the ',
    privacyPolicyLinkText: 'Privacy Policy',
    privacyPolicyHref: '/privacy',
    submitLabel: 'Submit',
  },
  support: {
    headline: "We've got the support you need.",
    description:
      'Revolte support is available via documentation and email, helping teams find guidance or get help quickly.',
    issueHeading: 'Facing Issues or Errors?',
    issueText:
      'Email us at {email} with a brief description of the issue (include your project name if available).',
    issueEmail: 'support@revolte.ai',
    communityTitle: 'Join our Community',
    communityDescription: 'Join Revolte to connect with developers and get updates.',
    communityLinks: [
      { icon: '/icons/github.svg', href: 'https://github.com/revolte', label: 'GitHub' },
      { icon: '/icons/discord.svg', href: 'https://discord.gg/revolte', label: 'Discord' },
    ],
  },
  contact: {
    email: 'hello@revolte.ai',
    socialLinks: [
      {
        icon: '/icons/linkedin.svg',
        href: 'https://linkedin.com/company/revolte',
        label: 'LinkedIn',
      },
      { icon: '/icons/instagram.svg', href: 'https://instagram.com/revolte', label: 'Instagram' },
      { icon: '/icons/x.svg', href: 'https://x.com/revolte', label: 'X' },
    ],
  },
}
