import * as React from 'react'
import { keyframes } from '@emotion/core'
import {
  variant,
  VariantProps,
  styled,
  css,
  sx,
  Theme,
  SerializedStyles,
} from '@kodiak-ui/core'
import { Box } from '../Box';

const loadingDotAnimations = keyframes`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`

type LoadingDotProps = {
  delay: number,
  size: number,
  offset: boolean
}

function LoadingDot({ delay, size, offset }: LoadingDotProps) {
  return (
    <Box
      as="span"
      sx={{
        animation: `${loadingDotAnimations} 1s ease-in-out ${delay}ms infinite;`,
        backgroundColor: 'currentColor',
        borderRadius: size,
        display: 'inline-block',
        marginLeft: `${size / 2}px`,
        marginTop: 1,
        height: size,
        verticalAlign: 'bottom',
        width: size,
      }}
    />
  )
}

export type LoadingIndicatorProps = {
  size?: number,
  delay?: number
} & VariantProps

function base({ theme }: { theme: Theme }): SerializedStyles {
  return css({
    label: 'loadingIndicator',
    display: 'flex',
    transition: 'color 150ms',
    lineHeight: 1,
    marginLeft: 1,
    alignSelf: 'center',
    textAlign: 'center',
    verticalAlign: 'bottom',
  })(theme)
}

const LoadingIndicatorStyle = styled('div')<LoadingIndicatorProps>(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  base,
  ({ variant: variantProp = 'default', variantKey = 'loadingIndicators', theme }) =>
    variant({ variant: variantProp, theme, variantKey }),
  sx,
)

export function LoadingIndicator({ size = 4, delay = 160, ...rest }: LoadingIndicatorProps) {
  return (
    <LoadingIndicatorStyle {...rest}>
      <LoadingDot delay={0} size={size} offset={true} />
      <LoadingDot delay={delay} size={size} offset />
      <LoadingDot delay={delay * 2} size={size} offset={false} />
    </LoadingIndicatorStyle>
  )
}
