import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import transition from '../../../lib/styles/transition'

interface ModalBaseProps {
  visible: boolean
  children: React.ReactNode
}

const ModalBlock = styled.div<{ visible: boolean }>`
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.09);

  @media only screen and (max-width: 480px) {
    width: calc(100% - 2rem);
  }

  ${(props) =>
    props.visible
      ? css`
          animation: ${transition.popInFromBottom} 0.4s forwards ease-in-out;
        `
      : css`
          animation: ${transition.popOutFromBottom} 0.2s forwards ease-in-out;
        `}
`

function ModalBase({ visible, children }: ModalBaseProps) {
  const [closed, setClosed] = useState(true)

  useEffect(() => {
    let timeoutId: any = 0
    if (visible) {
      setClosed(false)
    } else {
      timeoutId = setTimeout(() => setClosed(true), 200)
    }
    return () => clearTimeout(timeoutId)
  }, [visible])

  if (!visible && closed) return null
  return (
    <div className="fixed left-0 top-0 w-full h-full z-10">
      <div className="w-full h-full flex items-center justify-center bg-white bg-opacity-40">
        <ModalBlock visible={visible} className="bg-white py-6 px-8 w-96 rounded flex flex-col">
          {children}
        </ModalBlock>
      </div>
    </div>
  )
}

export default ModalBase
