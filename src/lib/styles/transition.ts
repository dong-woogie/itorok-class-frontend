import { keyframes } from 'styled-components'

const popInFromBottom = keyframes`
  0% {
    opacity : 0;
    transform : translateY(400px) scale(0.75);
  }
  75% {
    opacity : 1;
    transform : translateY(-15px) scale(1.0);
  }
  100% {
    opacity : 1;
    transform: translateY(0px);
  };
`

const popOutFromBottom = keyframes`
  0% {
    opacity : 1;
    transform : translateY(0px) scale(1.0);
  }
  100%{
    opacity : 0;
    transform: translateY(400px) scale(0.75);
  };
`

const transition = {
  popInFromBottom,
  popOutFromBottom,
}

export default transition
