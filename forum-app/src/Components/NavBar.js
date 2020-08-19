import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { outerTheme, logoTheme } from './ThemeProvider.js'
import { ThemeProvider } from '@material-ui/core/styles';
import Logo from '../Assets/CCWhite-Small.png'




function NavBar(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="NavBar"
            hidden={value !== index}
            id={`simple-NavBar-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

NavBar.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-NavBar-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,

    },
    logo: {
        height: '90px',
        width: '90px',
        margin: '.8rem'

    },
    endIcon: {
        marginLeft: '108rem',
        fontSize: '1.2rem'


    },
    mainNav: {
        marginLeft: '5rem',
        fontSize: '1.2rem'
    },

}));

export default function SimpleTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    // const classes = logoTheme

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <ThemeProvider theme={outerTheme}>
            <div className={classes.root}>
                <AppBar position="static">

                    <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                        <img className={classes.logo} src={Logo}></img>
                        <Tab className={classes.mainNav} label="Search Movies" {...a11yProps(1)} />
                        <Tab className={classes.mainNav} label="My Profile" {...a11yProps(2)} />

                        <Tab className={classes.endIcon} label="Log in / out" {...a11yProps(0)} />
                    </Tabs>
                </AppBar>
            </div>
        </ThemeProvider>

    );
}


