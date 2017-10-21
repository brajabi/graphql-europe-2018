import { css } from 'styled-components'

import rem from 'utils/rem'

export const mobile = body => css`
  @media (max-width: ${rem(800)}) {
    ${body}
  }
`
