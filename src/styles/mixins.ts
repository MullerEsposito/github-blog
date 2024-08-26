import { css } from 'styled-components'

export const mixins = {
  fonts: {
    textM: css`
      font-size: 1rem;
      line-height: 160%;
      font-weight: normal;
    `,
    textS: css`
      font-size: 0.875rem;
      line-height: 160%;
      font-weight: normal;
    `,
    titleL: css`
      font-size: 1.5rem;
      line-height: 130%;
    `,
    titleM: css`
      font-size: 1.25rem;
      line-height: 160%;
      font-weight: 800;
    `,
    titleS: css`
      font-size: 1.125rem;
      line-height: 160%;
      font-weight: normal;
    `,
    link: css`
      font-size: 0.75rem;
      line-height: 160%;
      font-weight: 700;
      color: #3294f8;
    `,
  },
}