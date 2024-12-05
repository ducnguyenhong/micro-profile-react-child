'use client';

import { ChakraProvider, createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';
import { ColorModeProvider, type ColorModeProviderProps } from './color-mode';

const customConfig = defineConfig({
  theme: {
    breakpoints: {
      xs: '320px', // mobile
      sm: '480px',
      md: '768px', // tablet
      lg: '992px',
      xl: '1280px', // desktop
      '2xl': '1600px',
      '3xl': '2000px'
    }
  }
});

const system = createSystem(defaultConfig, customConfig);

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
}
