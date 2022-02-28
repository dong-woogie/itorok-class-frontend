import React from 'react'
import styled from 'styled-components'
import colors from 'tailwindcss/colors'

interface ButtonGroupProps {
  children: React.ReactNode
  className?: string
}

const ButtonGroupBlock = styled.div`
  display: flex;

  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    outline: none;

    cursor: pointer;

    border-top: 1px solid ${colors.gray[300]};
    border-bottom: 1px solid ${colors.gray[300]};
    background-color: #fff;
    color: ${colors.gray[700]};

    &:hover {
      background-color: ${colors.gray[100]};
    }
  }

  .button + .button {
    border-left: 1px solid ${colors.gray[300]};
  }

  .button:nth-child(1) {
    border-left: 1px solid ${colors.gray[300]};
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  .button:nth-last-child(1) {
    border-right: 1px solid ${colors.gray[300]};
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  .button.selected {
    background-color: ${colors.emerald[400]};
    color: #fff;
  }
`

function ButtonGroup({ children, className }: ButtonGroupProps) {
  return <ButtonGroupBlock className={`${className}`}>{children}</ButtonGroupBlock>
}

export default ButtonGroup
