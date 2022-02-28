import React, { MouseEvent, useRef, useState } from 'react'
import styled, { css } from 'styled-components'

interface HorizontalSlideProps {
  children: React.ReactNode
  className?: string
}

const Container = styled.div<{ isDragging: boolean }>`
  display: flex;
  overflow: scroll;

  width: auto;

  z-index: 100;

  cursor: grab;

  ${(props) =>
    props.isDragging &&
    css`
      cursor: grabbing;
    `}
`

function HorizontalSlide({ children, className }: HorizontalSlideProps) {
  const [horizontal, setHorizontal] = useState({
    isDragging: false,
    originalX: 0,
    scrollLeft: 0,
  })
  const containerRef = useRef<HTMLDivElement>(null)

  const stopDrag = () => {
    setHorizontal({
      ...horizontal,
      isDragging: false,
    })
  }

  const onMouseDown = (e: MouseEvent) => {
    if (!containerRef.current) return
    setHorizontal({
      ...horizontal,
      originalX: e.clientX,
      scrollLeft: containerRef.current.scrollLeft,
      isDragging: true,
    })
  }
  const onMouseMove = (e: MouseEvent) => {
    if (!containerRef.current) return
    if (!horizontal.isDragging) return

    const scrollLeft = horizontal.scrollLeft + horizontal.originalX - e.clientX

    if (scrollLeft < 0) {
      containerRef.current.scrollLeft = 0
    } else if (scrollLeft > containerRef.current.scrollWidth) {
      containerRef.current.scrollLeft = containerRef.current.scrollWidth
    } else {
      containerRef.current.scrollLeft = scrollLeft
    }
  }
  const onMouseUp = () => {
    stopDrag()
  }
  const onMouseLeave = () => {
    stopDrag()
  }

  return (
    <Container
      className={`${className || ''} none-scrollbar none-dragging`}
      ref={containerRef}
      isDragging={horizontal.isDragging}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </Container>
  )
}

export default HorizontalSlide
