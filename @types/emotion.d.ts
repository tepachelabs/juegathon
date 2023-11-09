import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    color: {
      primary: string
      background: string
      lightBackground: string
    },
    fonts: {
      body: any,
      heading: any
    },
    logo: {
      src: string,
    }
  }
}
