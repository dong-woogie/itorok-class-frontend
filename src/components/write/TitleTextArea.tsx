import styled from 'styled-components'
import TextAreaAutoSize from 'react-textarea-autosize'
import colors from 'tailwindcss/colors'

const TitleTextArea = styled(TextAreaAutoSize)`
  padding: 0;
  font-size: 2.5rem;
  width: 100%;
  resize: none;
  line-height: 1.5;
  outline: none;
  border: none;
  font-weight: bold;
  color: ${colors.gray[900]};
  &::placeholder {
    color: ${colors.gray[400]};
  }
`

export default TitleTextArea
