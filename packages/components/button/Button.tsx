import { ButtonHTMLAttributes, MouseEventHandler, useMemo } from 'react'

import classNames from 'classnames'

import {
  CancelButton,
  DangerButton,
  PrimaryDarkButton,
  PrimaryLightButton,
  SecondaryDarkButton,
  SecondaryLightButton,
  ThirdLightButton,
} from './Button.style'

export type ButtonSizeType = 'small' | 'medium' | 'large'
export type ButtonType =
  | 'primary-light'
  | 'primary-dark'
  | 'secondary-light'
  | 'secondary-dark'
  | 'third-light'
  | 'cancel'
  | 'danger'

export interface ButtonProps extends ButtonHTMLAttributes<any> {
  /** @default medium */
  buttonSize?: ButtonSizeType
  /** @default primary-light */
  buttonType?: ButtonType
  disabled?: boolean
  isLoading?: boolean
  rounded?: boolean
  /** flex-1을 주므로 부모 컨테이너가 flex여야 한다 */
  wide?: boolean
}

const DefaultButton = (props: ButtonProps) => {
  const {
    buttonType = 'primary-light',
    buttonSize = 'medium',
    isLoading,
    className,
    children,
    onClick,
    wide,
    ...rest
  } = props

  const Element = useMemo(() => {
    switch (buttonType) {
      case 'primary-light':
        return PrimaryLightButton
      case 'primary-dark':
        return PrimaryDarkButton
      case 'secondary-light':
        return SecondaryLightButton
      case 'secondary-dark':
        return SecondaryDarkButton
      case 'third-light':
        return ThirdLightButton
      case 'cancel':
        return CancelButton
      case 'danger':
        return DangerButton
    }
  }, [buttonType])

  const handleClick: MouseEventHandler<HTMLButtonElement> = e => {
    if (isLoading) return
    onClick?.(e)
  }

  return (
    <Element
      className={classNames(
        { 'pointer-events-none': isLoading },
        { 'flex-1': wide },
        className,
      )}
      onClick={handleClick}
      buttonSize={buttonSize}
      {...rest}
    >
      <div
        className={classNames(
          'flex items-center justify-center',
          isLoading ? 'opacity-0' : 'opacity-100',
        )}
      >
        {children}
      </div>
      <div
        className={classNames(
          'loading absolute top-0 left-0 flex h-full w-full items-center justify-center',
          isLoading ? 'opacity-100' : 'opacity-0',
        )}
      ></div>
    </Element>
  )
}

export default DefaultButton
