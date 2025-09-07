'use client'

import * as React from 'react'
import { GithubLogo } from '@phosphor-icons/react'
import Link from 'next/link'

export function GithubRepo() {
  return (
    <Link
      href="https://github.com/IsabellaHanqiDing/MP1/tree/main"
      target="_blank"
      rel="noopener noreferrer nofollow"
      className="text-md group flex flex-row items-center justify-start font-medium text-white/70 hover:text-white hover:bg-purple-600/20 hover:shadow-[0_0_15px_rgba(168,85,247,0.25)] rounded-md p-2 transition-all duration-200"
    >
      <GithubLogo size={18} weight="duotone" />
      <span className="sr-only">Github Repo</span>
    </Link>
  )
}