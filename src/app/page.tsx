"use client";

import { useState } from "react";
import {
  COLOR_OF_THE_YEAR,
  DEFAULT_YEAR,
  YEARS,
  backgroundFor,
  swatchLabel,
  textColorFor,
} from "@/lib/pantone";
import Sticker from "@/components/Sticker";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  CompassIcon,
  GlobeIcon,
  MapPinIcon,
} from "@/components/icons";

const sectionLabel =
  "font-sans text-[13px] font-medium uppercase tracking-[0.08em] opacity-80 mb-3";
const bodyText = "text-[17px] leading-[1.7] opacity-90";
const pillButton =
  "flex h-[34px] w-[34px] cursor-pointer items-center justify-center rounded-full border border-current bg-transparent";
const inlineLink = "border-b border-current";

function ExtLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={inlineLink}
    >
      {children}
    </a>
  );
}

export default function Home() {
  const [year, setYear] = useState(DEFAULT_YEAR);
  const colors = COLOR_OF_THE_YEAR[year];
  const idx = YEARS.indexOf(year);

  return (
    <main
      className="flex min-h-screen flex-col px-6 pb-8 pt-10 transition-colors duration-500 sm:px-12 sm:pt-12"
      style={{
        background: backgroundFor(colors),
        color: textColorFor(colors),
        transition: "background 0.5s ease, color 0.5s ease",
      }}
    >
      <div className="mx-auto flex w-full max-w-[640px] flex-1 flex-col">
      <div className="font-sans mb-10 flex flex-wrap items-center gap-2.5 pt-6 sm:pt-14">
        <button
          aria-label="Previous year"
          className={pillButton}
          disabled={idx === YEARS.length - 1}
          onClick={() => idx < YEARS.length - 1 && setYear(YEARS[idx + 1])}
        >
          <ChevronLeftIcon />
        </button>
        <select
          aria-label="Pantone Color of the Year"
          className="cursor-pointer rounded-full border border-current bg-transparent px-3.5 py-1.5 text-sm"
          value={year}
          onChange={(e) => setYear(Number(e.target.value))}
        >
          {YEARS.map((y) => (
            <option key={y} value={y} className="text-black">
              {y}
            </option>
          ))}
        </select>
        <button
          aria-label="Next year"
          className={pillButton}
          disabled={idx === 0}
          onClick={() => idx > 0 && setYear(YEARS[idx - 1])}
        >
          <ChevronRightIcon />
        </button>
        <span className="ml-2 text-xs tracking-[0.04em] opacity-75">
          {swatchLabel(colors)}
        </span>
      </div>

      <h1 className="mb-5 max-w-[520px] text-left text-[28px] font-medium leading-[1.3] sm:text-[32px]">
        Hello! I&apos;m Sasha, welcome to my digital home.
      </h1>

      <div className={`max-w-[500px] text-left ${bodyText}`}>
        <p className="mb-4">
          I&apos;m an inventor and founder. I work at{" "}
          <ExtLink href="https://theovision.co/">Theo Vision</ExtLink> building
          the future of consumer optics.
        </p>
        <p className="mb-8">
          I&apos;m obsessed with stem cells, Artemis missions, the physics
          behind bumblebee flight, and prime numbers. Currently, I work at Theo
          Vision while studying{" "}
          <ExtLink href="https://mems.duke.edu/academics/masters/ai-materials-science-meng/">
            AI and materials science at Duke University
          </ExtLink>
          . I was 1 of 40 finalists for the{" "}
          <ExtLink href="https://thielfellowship.org/">Thiel Fellowship</ExtLink>
          , where I discovered the magic of San Francisco.
        </p>
      </div>

      <section className="mb-8 max-w-[500px] text-left">
        <p className={sectionLabel}>Foundation</p>
        <p className={`mb-4 ${bodyText}`}>
          I studied at the #1 public school in the United States, the{" "}
          <ExtLink href="https://www.ncssm.edu/">
            North Carolina School of Science and Mathematics
          </ExtLink>
          . I also dual enrolled at{" "}
          <ExtLink href="https://onlinehighschool.stanford.edu/">
            Stanford University Online High School
          </ExtLink>
          .
        </p>
        <p className={`mb-4 ${bodyText}`}>
          So yes, my two high school mascots were the unicorn, and a pixel.
          That&apos;s right. One of my high school mascots was a computer
          pixel.
        </p>
        <div className="relative">
          <Sticker rotate={-10} opacity={0.75} style={{ top: -16, right: 36 }}>
            <MapPinIcon />
          </Sticker>
          <Sticker
            rotate={8}
            shape="circle"
            size={28}
            opacity={0.6}
            style={{ top: 14, right: -2 }}
          >
            <CompassIcon />
          </Sticker>
          <Sticker rotate={6} style={{ bottom: -14, right: 64 }}>
            <GlobeIcon />
          </Sticker>
          <p className={`max-w-[420px] ${bodyText}`}>
            I&apos;ve lived in{" "}
            <ExtLink href="https://www.livetheresidency.com/">
              San Francisco
            </ExtLink>
            , Dublin,{" "}
            <ExtLink href="https://www.foundherhouse.org/">New York</ExtLink>,
            DC, and am from the same town where Mr Beast is. Pretty nifty.
          </p>
        </div>
      </section>

      <section className="mb-8 max-w-[500px] text-left">
        <p className={sectionLabel}>Off the clock</p>
        <p className={bodyText}>
          I play chess, poker, and mahjong weekly, and bridge anytime I can
          find 3 people to play with. My two brilliant siblings are studying
          neuroprothetics and cyberlaw. I&apos;m fluent in Mandarin, get the
          WSJ delivered and read it on paper, and am rather obsessive about my
          coffee morning routine.
        </p>
      </section>

      <section className="max-w-[500px] text-left">
        <p className={sectionLabel}>Why Pantone?</p>
        <p className={bodyText}>
          I recently watched <em>King of Color</em> and walked away inspired by
          the creativity and courage it takes to build something the world
          didn&apos;t know it needed. This page is a small tribute, pick a year
          above and stand in its color. And check out my{" "}
          <a
            href="https://boxd.it/gKiZj"
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-current"
          >
            letterboxd
          </a>
          .
        </p>
      </section>

      <footer className="font-sans mt-auto flex justify-center gap-5 pb-2 pt-16 text-sm">
        <a
          href="https://github.com/sashasurkin"
          target="_blank"
          rel="noopener noreferrer"
          className="border-b border-current pb-0.5"
        >
          Projects
        </a>
        <a
          href="https://x.com/sashasurk"
          target="_blank"
          rel="noopener noreferrer"
          className="border-b border-current pb-0.5"
        >
          Writing
        </a>
        <a
          href="mailto:sasha@w-eye-ze.com"
          className="border-b border-current pb-0.5"
        >
          Contact
        </a>
      </footer>
      </div>
    </main>
  );
}
