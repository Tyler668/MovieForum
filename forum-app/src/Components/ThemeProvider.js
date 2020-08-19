import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { grey, red, orange } from '@material-ui/core/colors';


export const outerTheme = createMuiTheme({
    palette: {
        primary: {
            main: grey[800],
        },
        secondary: {
            main: orange[500]
        }
    },
});

export const innerTheme = createMuiTheme({
    palette: {
        secondary: {
            main: red[500],
        },
    },
});


export const logoTheme = createMuiTheme({
    root: {
        height: '500px',
        width: '500px'
    }

})