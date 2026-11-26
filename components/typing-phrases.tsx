"use client"

import { ReactTyped } from "react-typed"

export function TypingPhrases({ strings }: { strings: string[] }) {
  return (
    <ReactTyped
      strings={strings}
      typeSpeed={55}
      backSpeed={30}
      backDelay={1600}
      loop
      showCursor
      cursorChar="_"
    />
  )
}
