import React from "react";
import { Container } from "../assets/styling/components/globalStyling";
import { SOLID } from "../assets/styling/variables";
import { WorkContainer, Content, H1, ImgSum, Title, Summary, ArrowContainer } from "../assets/styling/components/workStyling";
import { TechnologiesSmall, IconImgSmall } from "../assets/styling/components/aboutStyling"
import { projects } from "../assets/data/workData"
import { makeStyles, Theme, ThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: SOLID.darkGreen
        },
    },
});

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

function a11yProps(index: any) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    panel: {
        height: "75vh",
        overflow: "scroll",
    }
}));

export default function Work() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    const primary = "#2d3928"

    return (
        <Container>
            <Content>
                <H1>WORK</H1>
                <WorkContainer>
                    <ThemeProvider theme={theme}>
                        <div className={classes.root}>
                            <AppBar position="static" color="default">
                                <Tabs
                                    value={value}
                                    onChange={handleChange}
                                    indicatorColor="primary"
                                    textColor="primary"
                                    variant="scrollable"
                                    scrollButtons="auto"
                                    aria-label="scrollable auto tabs example"
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

                            {
                                projects.map((curr, index) => {
                                    return (
                                        <TabPanel value={value} index={index} className={classes.panel}>
                                            <Title> {curr.title}</Title>
                                            <Summary>{curr.writeup}</Summary>
                                            <TechnologiesSmall>
                                                {
                                                    curr.tech.map((curr, index) => {
                                                        return (

                                                            <IconImgSmall src={curr} />
                                                        )
                                                    })
                                                }
                                            </TechnologiesSmall>
                                            <ImgSum src={curr.image} alt={curr.title} />
                                        </TabPanel>
                                    )
                                })
                            }

                        </div>
                    </ThemeProvider>
                </WorkContainer>
            </Content>
            <ArrowContainer></ArrowContainer>
        </Container >
    );
}