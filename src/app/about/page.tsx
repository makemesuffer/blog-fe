import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portrait from '@/images/avatar.png'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description: 'I’m Andrew Strigalev. I live in Warsaw, Poland.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portrait}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I’m Andrew Strigalev. I live in Warsaw, Poland, where I create.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I've always enjoyed building things. Doing something that has the
              potential to benefit someone, or simply to leave my mark on the
              development of humanity, is what I strive for.
            </p>
            <p>
              Ever since I was a kid, I have been very fond of strategy games.
              Building, developing civilisations, managing and performing
              various tasks was more fun for me than playing football, for
              example. As I remember now, my favourite games were Warcraft 3,
              Red Alert 3, Command & Conquer, Heroes of Might and Magic 3/4/5.
            </p>
            <p>
              I believe that I was finding a way to fulfill my desires in such
              games. I also liked to read the histories of various scholars and
              the myths of ancient Greece. In general, all books that have to do
              with facts or knowledge. Compared to encyclopedias, I was rarely
              interested in fiction. I am a man of axioms, order is often
              important to me. At the same time, I realize that not everything
              is perfect and may not become so. But without a measure of the
              ideal, you can't make up your path. The main thing is the fervor
              and aspiration with which you will walk on the path of eternal
              perfection.
            </p>
            <p>
              Today I'm working to make your holiday better as part of the
              Canvas Reply and Easyjet pro team. I also have my own personal
              start-up called Tapply. It's an e-commerce solution that allows
              you to create your own app in a couple of steps in the growing
              Telegram ecosystem. During my time, I have been a developer in
              such projects as EasyJet, Absolute Labs, Interactio and others. I
              also act as a teamlead in Wisy, a startup related to investing in
              cryptocurrency. I define the architecture and fully responsible
              for releases and updates of the application and managing a team of
              4 developers.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://x.com/andrewsagtech" icon={XIcon}>
              Follow on X
            </SocialLink>
            <SocialLink
              href="https://www.instagram.com/andrewtheswag/"
              icon={InstagramIcon}
              className="mt-4"
            >
              Follow on Instagram
            </SocialLink>
            <SocialLink
              href="https://github.com/makemesuffer"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/andrew-strigaliov-113721216/"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:andrew@sagtech.io"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              andrew@sagtech.io
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
