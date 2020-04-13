import React from "react";
import { Container } from "../assets/styling/components/globalStyling";
import { WorkContainer, Content, H1, WorkCard, ImgSum, Title, Summary } from "../assets/styling/components/workStyling";
import { TechnologiesSmall, IconBoxSmall, IconImgSmall } from "../assets/styling/components/aboutStyling"
import { projects } from "../assets/data/workData"
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function Work() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <Container>
            <Content>
                <H1>WORK</H1>
                <WorkContainer>
                    <div className={classes.root}>
                        <AppBar position="static" color="default">
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                indicatorColor="primary"
                                textColor="primary"
                                variant="fullWidth"
                                aria-label="full width tabs example"
                            >
                                {
                                    projects.map((curr, index) => {
                                        return (
                                            <Tab label={curr.title} {...a11yProps(index)} />
                                        )
                                    })
                                }
                            </Tabs>
                        </AppBar>
                        <SwipeableViews
                            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                            index={value}
                            onChangeIndex={handleChangeIndex}
                        >
                            {
                                projects.map((curr, index) => {
                                    return (
                                        <TabPanel value={value} index={index} dir={theme.direction}>
                                            <h4> {curr.title}</h4>
                                            <Summary>{curr.writeup}</Summary>
                                            <TechnologiesSmall>
                                                {
                                                    curr.tech.map((curr, index) => {
                                                        return (
                                                            <IconBoxSmall key={index}>
                                                                <IconImgSmall src={curr.icon} alt={curr.name} />
                                                            </IconBoxSmall>
                                                        )
                                                    })
                                                }
                                            </TechnologiesSmall>
                                            <ImgSum src={curr.image} alt={curr.title} />
                                        </TabPanel>
                                    )
                                })
                            }
                        </SwipeableViews>
                    </div>
                </WorkContainer>
            </Content>
        </Container>
    );
}