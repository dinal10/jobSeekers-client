// theme.js
import { extendTheme } from '@chakra-ui/react'


const theme = extendTheme({
    fonts: {
        heading: `'dm sans', sans-serif`,
        body: `'nunito', sans-serif`
    },
    colors: {
        transparent: 'transparent',
        black: '#001c30',
        navy: '#176b87',
        teal: '#64ccc5',
        mint: '#dafffb',
        white: '#ffffff'
      },

},

)

export default theme