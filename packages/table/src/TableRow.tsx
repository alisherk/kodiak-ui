import {
  variant as getVariantStyles,
  VariantProps,
  sx,
  Theme,
  css,
  SerializedStyles,
  styled,
} from '@kodiak-ui/core'
import { tableRoot } from './Table'

export type TableRowProps = React.HTMLAttributes<HTMLTableRowElement> &
  VariantProps
/**
 * base
 *
 * Generate the base CSS for the SelectMenu component
 * that is aware of the Theme UI theme
 *
 * @param props
 */
export function base({ theme }: { theme: Theme }): SerializedStyles {
  return css({
    color: 'inherit',
    display: 'table-row',
    outline: 0,
    verticalAlign: 'middle',
  })(theme)
}

function variant({
  variant: variantProp,
  variantKey,
  theme,
}: { theme: Theme } & VariantProps): SerializedStyles {
  return getVariantStyles({ variant: variantProp, theme, variantKey })
}

export const TableRow = styled('tr')<TableRowProps>(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  tableRoot,
  base,
  variant,
  sx,
)