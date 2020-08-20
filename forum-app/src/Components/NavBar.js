import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { outerTheme, logoTheme } from './ThemeProvider.js';
import { ThemeProvider } from '@material-ui/core/styles';
import Logo from '../Assets/CCWhite-Small.png';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';




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

        fontSize: '1.2rem',
        width: '10%',

        [theme.breakpoints.down('md')]: {
            fontSize: '1rem',
            marginLeft: '.5rem',
        },
    },

    mainNav: {
        marginLeft: '5%',
        fontSize: '1.2rem',

        [theme.breakpoints.down('md')]: {
            fontSize: '1rem',
        },

        // [theme.breakpoints.down('md')]: {
        //     marginLeft: '1%',
        // },
    },

    flexLayout: {
        display: 'flex',


    },
    tabs: {
        width: "100%",
        display: 'flex',

        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',




    },
    navContainer: {
        width: '100%',
    },
    rightNav: {
        width: '80%',
        display: 'flex',
        justifyContent: 'flex-end',
        marginLeft: '5%',

        [theme.breakpoints.down('md')]: {
            marginLeft: '1%',
        },

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
            <AppBar position="static">
                <Container className={classes.navContainer} maxWidth={'100vw'}>
                    <Tabs className={classes.tabs} value={value} onChange={handleChange} aria-label="simple tabs example">
                        <Link style={{ all: 'inherit' }} to={'/'}><img className={classes.logo} src={Logo} alt={'Couch critic logo'}></img></Link>
                        <Link style={{ all: 'inherit', marginLeft: '5%' }} to={'/popular'}><Tab className={classes.mainNav} label="Popular Flicks" {...a11yProps(1)} /></Link>
                        <Link style={{ all: 'inherit', marginLeft: '5%' }} to={'/search'}><Tab className={classes.mainNav} label="Search Movies" {...a11yProps(1)} /></Link>
                        <Link style={{ all: 'inherit', marginLeft: '5%' }} to={'/profile'}><Tab className={classes.mainNav} label="My Profile" {...a11yProps(2)} /></Link>
                        <div className={classes.rightNav}>
                            <Link style={{ all: 'inherit', marginLeft: '5%' }} to={'/login'}><Tab className={classes.endIcon} label="Log in / out" {...a11yProps(0)} /></Link>
                        </div>
                    </Tabs>
                </Container>
            </AppBar >
        </ThemeProvider >

    );
}


