'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import type { ContactData } from '@/constants/contact'

import styles from './HeroSection.module.scss'
import Button from '@/shared/components/Button'
import { ButtonVariant } from '@/shared/enums/button'

interface HeroSectionProps {
  data: ContactData
}

const HeroSection: React.FC<HeroSectionProps> = ({ data }) => {
  const { form, support, contact } = data

  const [fields, setFields] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: '',
  })
  const [agreed, setAgreed] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  const issueTextParts = support.issueText.split('{email}')

  return (
    <section className={styles.hero}>
      <div className={styles.infoCol}>
        <div className={styles.infoTop}>
          <h1 className={styles.headline}>{support.headline}</h1>
          <p className={styles.description}>{support.description}</p>

          <hr className={styles.divider} />

          <h2 className={styles.issueHeading}>{support.issueHeading}</h2>
          <p className={styles.issueText}>
            {issueTextParts[0]}
            <a href={`mailto:${support.issueEmail}`} className={styles.issueEmail}>
              {support.issueEmail}
            </a>
            {issueTextParts[1]}
          </p>
        </div>

        <div className={styles.communityCard}>
          <h3 className={styles.communityTitle}>{support.communityTitle}</h3>
          <p className={styles.communityDescription}>{support.communityDescription}</p>
          <div className={styles.communityLinks}>
            {support.communityLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className={styles.communityLink}
              >
                <Image src={link.icon} alt={link.label} width={36.4} height={36.4} />
              </a>
            ))}
          </div>
        </div>

        <div className={styles.contactRow}>
          <a href={`mailto:${contact.email}`} className={styles.contactEmail}>
            {contact.email}
          </a>
          <div className={styles.socialLinks}>
            {contact.socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className={styles.socialLink}
              >
                <Image
                  src={link.icon}
                  alt={link.label}
                  width={20}
                  height={20}
                  className={styles.socialIcon}
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.formCard}>
        <h2 className={styles.formHeading}>{form.heading}</h2>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.row}>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="firstName">
                First Name
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="Johnny"
                value={fields.firstName}
                onChange={handleChange}
                className={styles.input}
              />
            </div>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="lastName">
                Last Name
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Finch"
                value={fields.lastName}
                onChange={handleChange}
                className={styles.input}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="email">
                Email ID
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Jhonny@revolte.com"
                value={fields.email}
                onChange={handleChange}
                className={styles.input}
              />
            </div>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="company">
                Company Name
              </label>
              <input
                id="company"
                name="company"
                type="text"
                placeholder="rootquotient"
                value={fields.company}
                onChange={handleChange}
                className={styles.input}
              />
            </div>
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="message">
              How can we help?
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell us more about your needs."
              value={fields.message}
              onChange={handleChange}
              className={clsx(styles.input, styles.textarea)}
              rows={6}
            />
          </div>

          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className={styles.checkbox}
            />
            <span className={styles.checkboxText}>
              {form.privacyPolicyLabel}
              <a href={form.privacyPolicyHref} className={styles.privacyLink}>
                {form.privacyPolicyLinkText}
              </a>
            </span>
          </label>

          <Button variant={ButtonVariant.Primary} className={styles.submitBtn} disabled={!agreed}>
            {form.submitLabel}
          </Button>
        </form>
      </div>
    </section>
  )
}

export default HeroSection
