import type { CSSObject } from '@emotion/serialize';

export const globalStyles: CSSObject = {
  '*': {
    'box-sizing': 'border-box',
  },
  html: {
    'font-family': `"Source Sans 3", sans-serif`,
    'font-optical-sizing': 'auto',
    'font-weight': '400',
    'font-style': 'normal',
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
