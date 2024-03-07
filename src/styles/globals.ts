import type { CSSObject } from '@emotion/serialize';

export const globalStyles: CSSObject = {
  '*': {
    'box-sizing': 'border-box',
  },
  body: {
    padding: 0,
    margin: 0,
  },
  ':root': {
    '--color-white': '#FFFFFF',
    '--color-primary': '#EEEEEE',
    '--color-black': '#333333',
    '--color-grey': '#999999',
    '--color-active': '#02BC9C',
  },
};
