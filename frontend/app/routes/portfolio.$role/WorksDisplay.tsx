import { Link, useParams, useSearchParams } from '@remix-run/react'
import _ from 'lodash'
import matter from 'matter-js'
import { Pt, Vec } from 'pts'
import { cloneElement, useEffect, useRef, useState } from 'react'
import { ClientOnly } from 'remix-utils/client-only'
import invariant from 'tiny-invariant'
import { WORKS_QUERYResult } from '~/sanity/types'
import { generateId } from '~/util/dom'
import { lerp, useDimensions } from '~/util/hooks'
import { probLog, scale, useEventListener } from '@util/util'
import anime from 'animejs'
import { SanityImage } from 'sanity-image'
import { BASE_URL } from '~/constants'

export default function WorksDisplay(
  props: Parameters<typeof WorksDisplayClient>[0],
) {
  return (
    <ClientOnly fallback={<></>}>
      {() => <WorksDisplayClient {...props} />}
    </ClientOnly>
  )
}
const itemWidth = 300
const margin = 24

function WorksDisplayClient({ works }: { works: WORKS_QUERYResult }) {
  const [search, setSearch] = useSearchParams()
  const { slug } = useParams()

  const frame = useRef<HTMLDivElement>(null)

  const [width, setWidth] = useState(0)
  const isTrapezoidal =
    works.length >= width * 2 ||
    (works.length > width && works.length % width === 0)

  const resize = () => {
    const newWidth = Math.min(
      works.length,
      Math.max(
        1,
        Math.floor(
          Math.min(window.innerWidth - itemWidth, 1000) / (itemWidth + margin),
        ),
      ),
    )
    if (width !== newWidth) {
      setWidth(newWidth)
    }
  }
  useEventListener('resize', resize, [works.length, width])
  useEffect(resize, [works])

  return (
    <div
      className="w-full pb-12"
      style={{ marginLeft: isTrapezoidal ? 0 : itemWidth / 4 }}
    >
      <div
        className={`mx-auto grid w-fit max-w-[1000px]`}
        style={{
          gridTemplateColumns: `repeat(${width}, minmax(0, 1fr))`,
        }}
        ref={frame}
      >
        {works.map((work, i) => {
          let rowNumber = Math.floor(i / width)
          return <Bubble {...{ rowNumber, work, itemWidth }} />
        })}
      </div>
    </div>
  )
}

function Bubble({
  work,
  rowNumber,
}: {
  work: WORKS_QUERYResult[number]
  rowNumber: number
}) {
  const left = rowNumber % 2 ? itemWidth / 4 : -itemWidth / 4

  const { title, subtitle, slug } = work
  const frame = useRef<HTMLDivElement>(null!)
  useEventListener(
    'mousemove',
    (ev) => {
      const position = frame.current.getBoundingClientRect()
      const toMouse = new Pt(
        position.left + position.width / 2,
        position.top + position.height / 2,
      ).subtract(ev.clientX, ev.clientY)

      toMouse.scale(16 / toMouse.magnitude())
      frame.current.style.setProperty('left', `${left + toMouse.x}px`)
      frame.current.style.setProperty('top', `${toMouse.y}px`)
      // anime({
      //   target: frame.current,
      //   left: `${left + toMouse.x}px`,
      //   top: `${toMouse.y}px`,
      //   // easing: 'spring(1, 80, 10, 0)',
      //   duration: 10,
      // })
    },
    [left],
  )

  useEffect(() => {
    anime({
      targets: frame.current,
      scale: [0, 1],
      duration: 100,
    })
  }, [work])

  return (
    <div
      ref={frame}
      data-spring={generateId(work)}
      key={generateId(work)}
      className={`relative flex aspect-square flex-none overflow-hidden rounded-full hover:z-10 circle`}
      style={{
        left,
        width: itemWidth,
        margin: `${margin / 2}px ${margin}px`,
      }}
    >
      <Link
        className="relative z-10 flex h-full w-full flex-col items-center justify-center space-y-2 px-2"
        to={slug!.current!}
        preventScrollReset
      >
        <div className="rounded-lg bg-black/50 px-1 text-center font-menu text-xl shadow-lg">
          {title}
        </div>
        <div className="rounded-lg bg-black/50 px-1 text-center font-menu text-sm text-gray-200 shadow-lg">
          {subtitle}
        </div>
      </Link>

      <div className="w-full h-full absolute top-0 left-0">
        {work.videoBannerURL ? (
          <video
            src={work.videoBannerURL}
            muted
            autoPlay
            loop
            className="object-cover w-full h-full"
          />
        ) : (
          <SanityImage
            id={work.imageBanner!.asset!._ref}
            baseUrl={BASE_URL}
            className="w-full h-full object-cover"
          />
        )}
      </div>
    </div>
  )
}
