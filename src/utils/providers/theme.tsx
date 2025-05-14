import { ReactNode } from 'react';
import { ThemeProvider as NextThemeProvider } from 'next-themes';

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemeProvider defaultTheme="light" enableSystem>
      {children}
    </NextThemeProvider>
  );
}
