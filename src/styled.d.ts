// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string,
      red: string,
      dark: string,
      light: string,
      grey: {
        light: string,
        main: string,
        dark: string,
      },
      hover: {
        primary: string,
        red: string,
        grey: string,
        dark: string,
      },
      active: {
        primary: string,
        red: string,
        grey: string,
        dark: string,
      },
    },
  
    widths: {
      content: string,
    },
  }
}