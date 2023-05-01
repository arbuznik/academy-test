import React, { FC }                             from 'react'
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'

import * as theme                                from './theme'
import { GlobalStyles }                          from './global.styles'

interface IProps {
  children: React.ReactNode,
}

export const ThemeProvider: FC<IProps> = ({ children }) => (
  <>
    <GlobalStyles />
    <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
  </>
)
