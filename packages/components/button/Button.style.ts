import styled from '@emotion/styled'

import { ButtonSizeType, ButtonProps } from './Button'

const getStyleByButtonSize = (buttonSize: ButtonSizeType) => {
  switch (buttonSize) {
    case 'large':
      return `
        font-weight: 600;
        height: 60px;
        padding: 0 24px;
        font-size: 16px;
        line-height: 24px;
      `
    case 'medium':
      return `
        font-weight: 500;
        height: 48px;
        padding: 0 20px;
        font-size: 14px;
        line-height: 20px;
      `
    case 'small':
      return `
        font-weight: 500;
        height: 40px;
        padding: 0 16px;
        font-size: 14px;
        line-height: 20px;
      `
  }
}

const commonButton = styled.button<ButtonProps>`
  overflow: hidden;
  position: relative;
  width: fit-content;
  ${({ buttonSize = 'medium' }) => getStyleByButtonSize(buttonSize)}
  border-radius: ${({ rounded }) => (rounded ? '100px' : '8px')};
  &:disabled {
    cursor: not-allowed;
  }
`

export const PrimaryLightButton = styled(commonButton)`
  color: ${props => props.theme.colors.white};
  background: ${props => props.theme.colors.primary.base};
  .loading {
    path {
      fill: ${props => props.theme.colors.white};
    }
    defs linearGradient stop {
      stop-color: ${props => props.theme.colors.white};
    }
  }
  &:hover {
    background: ${props => props.theme.colors.primary.light};
  }
  &:active {
    background: ${props => props.theme.colors.primary.dark};
  }
  &:disabled {
    color: ${props => props.theme.colors.body.disabled};
    background: ${props => props.theme.colors.background.base};
    .loading {
      path {
        fill: ${props => props.theme.colors.body.disabled};
      }
      defs linearGradient stop {
        stop-color: ${props => props.theme.colors.body.disabled};
      }
    }
  }
`
export const PrimaryDarkButton = styled(commonButton)`
  color: ${props => props.theme.colors.white};
  background: ${props => props.theme.colors.primary.gradient};
  .loading {
    path {
      fill: ${props => props.theme.colors.white};
    }
    defs linearGradient stop {
      stop-color: ${props => props.theme.colors.white};
    }
  }
  &:disabled {
    color: ${props => props.theme.colors.studio.body.assistant};
    background: ${props => props.theme.colors.background['overlay-light']};
    .loading {
      path {
        fill: ${props => props.theme.colors.studio.body.assistant};
      }
      defs linearGradient stop {
        stop-color: ${props => props.theme.colors.studio.body.assistant};
      }
    }
  }
`

export const SecondaryLightButton = styled(commonButton)`
  color: ${props => props.theme.colors.primary.base};
  border-style: solid;
  border-color: ${props => props.theme.colors.primary.base};
  border-width: ${({ buttonSize = 'medium' }) =>
    buttonSize === 'large' ? '2px' : '1px'};
  .loading {
    path {
      fill: ${props => props.theme.colors.primary.base};
    }
    defs linearGradient stop {
      stop-color: ${props => props.theme.colors.primary.base};
    }
  }
  &:hover {
    color: ${props => props.theme.colors.primary.light};
    border-color: ${props => props.theme.colors.primary.light};
  }
  &:active {
    color: ${props => props.theme.colors.primary.dark};
    border-color: ${props => props.theme.colors.primary.dark};
  }
  &:disabled {
    color: ${props => props.theme.colors.body.disabled};
    border-color: ${props => props.theme.colors.gray.base};
    .loading {
      path {
        fill: ${props => props.theme.colors.body.disabled};
      }
      defs linearGradient stop {
        stop-color: ${props => props.theme.colors.body.disabled};
      }
    }
  }
`
export const SecondaryDarkButton = styled(commonButton)`
  color: ${props => props.theme.colors.white};
  background: ${props => props.theme.colors.background['overlay-light']};
  .loading {
    path {
      fill: ${props => props.theme.colors.white};
    }
    defs linearGradient stop {
      stop-color: ${props => props.theme.colors.white};
    }
  }
  &:hover {
    background: ${props => props.theme.colors.background['overlay-lighter']};
  }
  &:active {
    background: ${props => props.theme.colors.background['overlay-lightest']};
  }
  &:disabled {
    color: ${props => props.theme.colors.studio.body.assistant};
    background: ${props => props.theme.colors.studio.dimmer.base};
    .loading {
      path {
        fill: ${props => props.theme.colors.studio.body.assistant};
      }
      defs linearGradient stop {
        stop-color: ${props => props.theme.colors.studio.body.assistant};
      }
    }
  }
`

export const ThirdLightButton = styled(commonButton)`
  background: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.primary.base};
  .loading {
    path {
      fill: ${props => props.theme.colors.primary.base};
    }
    defs linearGradient stop {
      stop-color: ${props => props.theme.colors.primary.base};
    }
  }
  &:hover {
    color: ${props => props.theme.colors.primary.light};
  }
  &:active {
    color: ${props => props.theme.colors.primary.dark};
  }
  &:disabled {
    color: ${props => props.theme.colors.body.description};
    background: ${props => props.theme.colors.background.darker};
    .loading {
      path {
        fill: ${props => props.theme.colors.body.description};
      }
      defs linearGradient stop {
        stop-color: ${props => props.theme.colors.body.description};
      }
    }
  }
`

export const CancelButton = styled(commonButton)`
  color: ${props => props.theme.colors.body.assistant};
  background: ${props => props.theme.colors.background.dark};
  .loading {
    path {
      fill: ${props => props.theme.colors.body.assistant};
    }
    defs linearGradient stop {
      stop-color: ${props => props.theme.colors.body.assistant};
    }
  }
  &:hover {
    background: ${props => props.theme.colors.background.base};
  }
  &:active {
    color: ${props => props.theme.colors.body.base};
    background: ${props => props.theme.colors.background.base};
    .loading {
      path {
        fill: ${props => props.theme.colors.body.base};
      }
      defs linearGradient stop {
        stop-color: ${props => props.theme.colors.body.base};
      }
    }
  }
  &:disabled {
    color: ${props => props.theme.colors.body.disabled};
    background: ${props => props.theme.colors.background.dark};
  }
`

export const DangerButton = styled(commonButton)`
  color: ${props => props.theme.colors.white};
  background: ${props => props.theme.colors.status.error};
  .loading {
    path {
      fill: ${props => props.theme.colors.white};
    }
    defs linearGradient stop {
      stop-color: ${props => props.theme.colors.white};
    }
  }
  &:disabled {
    color: ${props => props.theme.colors.body.disabled};
    background: ${props => props.theme.colors.background.base};
    .loading {
      path {
        fill: ${props => props.theme.colors.body.disabled};
      }
      defs linearGradient stop {
        stop-color: ${props => props.theme.colors.body.disabled};
      }
    }
  }
`
