import React from 'react'
import styled, { css } from 'styled-components'
import colors from 'tailwindcss/colors'

type ButtonColorType = 'emerald' | 'gray' | 'white' | 'rose'
interface ButtonComponentProps extends Omit<React.HTMLProps<HTMLButtonElement>, 'size'> {
  children: React.ReactNode
  color?: ButtonColorType
  disabled?: boolean
  size?: 'sm' | 'md'
  fullWidth?: boolean
}

const ButtonBlock = styled.button<{ color: ButtonColorType; disabled: boolean; size: 'sm' | 'md'; fullWidth: boolean }>`
  ${(props) => {
    if (props.color === 'white') {
      return css`
        color: ${colors.gray[700]};
        background: white;
        &:hover {
          background: ${colors.gray[100]};
        }
      `
    }

    if (props.color === 'gray') {
      return css`
        color: ${colors.gray[700]};
        background: ${colors.gray[200]};
        &:hover {
          background: ${colors.gray[300]};
        }
      `
    }

    return css`
      color: ${colors.white};
      background: ${colors[props.color][400]};
      &:hover {
        background: ${colors[props.color][500]};
      }
    `
  }}

  ${(props) =>
    props.disabled &&
    css`
      pointer-events: none;
      background: ${colors.gray[200]};
      color: ${colors.gray[100]};
      cursor: not-allowed;
    `}

    ${(props) => {
    if (props.size === 'sm') {
      return css`
        font-size: 0.875rem;
        padding: 0.4rem 1.5rem;
      `
    }

    if (props.size === 'md') {
      return css`
        font-size: 1.125rem /* 18px */;
        line-height: 1.75rem /* 28px */;
        font-weight: 600;
        width: 6rem /* 96px */;
        height: 2.5rem /* 40px */;
      `
    }
    return css``
  }}

  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
    `}
`

function ButtonComponent({
  children,
  className,
  color = 'rose',
  disabled = false,
  size = 'md',
  fullWidth = false,
  ...rest
}: ButtonComponentProps) {
  const htmlProps = rest as any

  return (
    <ButtonBlock
      className={`${className} focus:outline-none rounded flex items-center justify-center shadow`}
      color={color}
      disabled={disabled}
      size={size}
      fullWidth={fullWidth}
      {...htmlProps}
    >
      {children}
    </ButtonBlock>
  )
}

export default ButtonComponent
