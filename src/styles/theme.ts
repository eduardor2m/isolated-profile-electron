import { createTheme } from '@material-ui/core/styles'
import { amber, lightBlue, red } from '@material-ui/core/colors'

// Create a theme instance.
const theme = createTheme({
    typography: { fontSize: 25 },
    palette: {
        primary: {
            main: lightBlue[500]
        },
        secondary: {
            main: amber[400]
        },
        error: {
            main: red.A400
        },
        background: {
            default: '#fff'
        },
        text: {
            primary: 'rgba(0, 0, 0, 0.54)',
            secondary: '#fff'
        }
    }
})

export default theme