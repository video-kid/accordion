import type { CSSObject } from '@emotion/serialize';

export const globalStyles: CSSObject = {
  '*': {
    boxSizing: 'border-box',
  },
  html: {
    fontFamily: `"Source Sans 3", sans-serif`,
    fontOpticalSizing: 'auto',
    fontWeight: '400',
    fontStyle: 'normal',
  },
  body: {
    padding: 0,
    margin: 0,
    fontSize: '16px',
  },
  ':root': {
    '--color-white': '#FFFFFF',
    '--color-primary': '#EEEEEE',
    '--color-black': '#333333',
    '--color-grey': '#999999',
    '--color-active': '#02BC9C',
  },
};
