import type { PropsWithChildren } from 'react'

export type TypographyRobotCondensedSize =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'subtitle'
  | 'paragraph'
  | 'body'
  | 'caption'
  | 'small'

export type TypographyRobotSize = 'sm' | 'md' | 'lg'

export type TypographyVariant = 'regular' | 'condensed'

export interface TypographyProps extends PropsWithChildren {
  variant?: TypographyVariant
  size?: TypographyRobotCondensedSize | TypographyRobotSize
  className?: string
  tabIndex?: number
}
