import type { Theme } from '@emotion/react';

export const theme: Theme = {
  colors: {
    primary: 'var(--color-primary)',
    card: { primary: 'var(--color-white)', border: '#CCCCCC' },
    group: {
      border: '#DDDDDD',
    },
    font: {
      primary: 'var(--color-black)',
      secondary: 'var(--color-grey)',
      selected: 'var(--color-active)',
    },
    icon: '#000000',
  },
  sizes: {
    font: {
      header: 24,
      subheader: 18,
      primary: 16,
    },
    space: {
      card: 16,
      group: {
        header: 24,
        details: 8,
      },
      task: {
        padding: 16,
        gap: 2,
      },
    },
  },
  progressBar: {
    font: '#E6FDF9',
    background: '#E6FDF9',
    indicator: 'var(--color-active)',
  },
};
