import React, { useState } from 'react';
import classes from '../Styles/about.module.css'
import { Box, Divider, Grid, IconButton, Stack, Typography } from '@mui/material';
import ForestIcon from '@mui/icons-material/Forest';
import AcUnitRoundedIcon from '@mui/icons-material/AcUnitRounded';
import { Add, Remove } from '@mui/icons-material';

const About = () => {
    const [openW, setOpenW] = useState(false);
    const [openB, setOpenB] = useState(false);
    const [openG, setOpenG] = useState(false);
    const [openT, setOpenT] = useState(false);
    return (
        <div>
            <div className={classes.background}>
                <div className={classes.header} style={{ marginBottom: "50px" }}>
                    <Stack direction={"row"} justifyContent={"space-between"} className={classes.content} alignItems={"center"}>
                        <Typography variant='h3' sx={{ fontWeight: "700" }}>About Us</Typography>
                        <Typography variant='body1' sx={{ fontSize: "18px" }} className={classes.caption}>Welcome to your home away from home</Typography>
                    </Stack>
                </div>
            </div>
            <Box sx={{ width: "70%", margin: "auto", marginBottom: "100px" }}>
                <Grid container justifyContent={"center"}>
                    <Grid item md={5} xs={12} mt={20}>
                        <img src='aboutus.webp' width={"100%"} height={"700px"} alt=''></img>
                    </Grid>
                    <Grid item md={1} xs={0}></Grid>
                    <Grid item md={5} xs={12} mt={15}>
                        <Stack direction={"column"} justifyContent={"start"} alignItems={"start"} spacing={3}>
                            <ForestIcon sx={{ color: '#EA9449', width: "60px", height: "100px" }}></ForestIcon>
                            <Typography variant='h3' fontWeight={"700"}>About Us</Typography>
                            <Typography variant='subtitle1' color={"#A4A4A4"} fontWeight={"600"} fontSize={"18px"}>Allow yourself a refined and relaxing holiday.</Typography>
                            <Typography variant='subtitle1' color={"#A4A4A4"} fontSize={"18px"}>With nature right at your doorstep, our glamping provides a tranquil escape from the hustle and bustle of everyday life,
                                inviting you to reconnect with the great outdoors in style and comfort.</Typography>
                            <Typography variant='subtitle1' color={"#8B8B8B"} fontSize={"18px"}>
                                <AcUnitRoundedIcon sx={{ color: "#7C782F", marginRight: "5px" }}></AcUnitRoundedIcon>
                                Luxury tents, wood cabins, and geodesic domes;
                            </Typography>
                            <Typography variant='subtitle1' color={"#8B8B8B"} fontSize={"18px"}>
                                <AcUnitRoundedIcon sx={{ color: "#7C782F", marginRight: "5px" }}></AcUnitRoundedIcon>
                                All amenities are included;
                            </Typography>
                            <Typography variant='subtitle1' color={"#8B8B8B"} fontSize={"18px"}>
                                <AcUnitRoundedIcon sx={{ color: "#7C782F", marginRight: "5px" }}></AcUnitRoundedIcon>
                                Tasty breakfast and activities with professional guides.
                            </Typography>
                            <Typography variant='subtitle1' color={"#A4A4A4"} fontSize={"18px"}>Whether you're embarking on a romantic retreat, a family adventure,
                                or a solo sojourn, Campass offers an idyllic escape where cherished memories are made and cherished.</Typography>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
            <div className={classes.services}>
                <Stack direction={"column"} width={"80%"}>
                    <ForestIcon sx={{ color: '#EA9449', width: "60px", height: "100px" }}></ForestIcon>
                    <Typography variant='h3' fontWeight={"700"}>Camp Infrastructure</Typography>
                    <Grid container mt={4} justifyContent={"space-between"} spacing={4}>
                        <Grid item md={3} xs={12}>
                            <Stack direction={"row"} spacing={2}>
                                <img src='wifi.svg' width={"50px"} height={"50px"} alt=''></img>
                                <div>
                                    <Typography variant='h5'>Fast Internet</Typography>
                                    <Typography variant='subtitle1' color={"#A4A4A4"} fontSize={"18px"}>Stay connected with high-speed internet access available throughout the glamping site.</Typography>
                                </div>
                            </Stack>
                        </Grid>
                        <Grid item md={3} xs={12}>
                            <Stack direction={"row"} spacing={2}>
                                <img src='cables.svg' width={"50px"} height={"50px"} alt=''></img>
                                <div>
                                    <Typography variant='h5'>Electrical Cabinets</Typography>
                                    <Typography variant='subtitle1' color={"#A4A4A4"} fontSize={"18px"}>Eectrical cabinets are located across the site, ensuring access to power for charging devices. </Typography>
                                </div>
                            </Stack>
                        </Grid>
                        <Grid item md={3} xs={12}>
                            <Stack direction={"row"} spacing={2}>
                                <img src='parking.svg' width={"50px"} height={"50px"} alt=''></img>
                                <div>
                                    <Typography variant='h5'>Parking</Typography>
                                    <Typography variant='subtitle1' color={"#A4A4A4"} fontSize={"18px"}>Ample parking spaces are provided for guests, allowing for hassle-free arrival and departure.</Typography>
                                </div>
                            </Stack>
                        </Grid>
                    </Grid>
                    <Grid container mt={4} justifyContent={"space-between"} spacing={4}>
                        <Grid item md={3} xs={12}>
                            <Stack direction={"row"} spacing={2}>
                                <img src='shower.svg' width={"50px"} height={"50px"} alt=''></img>
                                <div>
                                    <Typography variant='h5'>Sanitary Facilities</Typography>
                                    <Typography variant='subtitle1' color={"#A4A4A4"} fontSize={"18px"}>Clean and well-maintained sanitary facilities are available, including modern bathrooms and showers.</Typography>
                                </div>
                            </Stack>
                        </Grid>
                        <Grid item md={3} xs={12}>
                            <Stack direction={"row"} spacing={2}>
                                <img src='wash.svg' width={"50px"} height={"50px"} alt=''></img>
                                <div>
                                    <Typography variant='h5'>Washing Machines</Typography>
                                    <Typography variant='subtitle1' color={"#A4A4A4"} fontSize={"18px"}>Guests have access to washing machines on-site, making it easy to keep clothes fresh and clean.</Typography>
                                </div>
                            </Stack>
                        </Grid>
                        <Grid item md={3} xs={12}>
                            <Stack direction={"row"} spacing={2}>
                                <img src='aid.svg' width={"50px"} height={"50px"} alt=''></img>
                                <div>
                                    <Typography variant='h5'>First Aid / Ambulance</Typography>
                                    <Typography variant='subtitle1' color={"#A4A4A4"} fontSize={"18px"}>Our site is equipped with first aid kits and access to medical assistance in case of emergencies.</Typography>
                                </div>
                            </Stack>
                        </Grid>
                    </Grid>
                </Stack>
            </div>
            <Box sx={{ width: "70%", margin: "auto", marginBottom: "50px" }}>
                <Grid container justifyContent={"center"}>
                    <Grid item md={5} xs={12} mt={20}>
                        <img src='events.webp' width={"100%"} height={"700px"} alt=''></img>
                    </Grid>
                    <Grid item md={1} xs={0}></Grid>
                    <Grid item md={5} xs={12} mt={15}>
                        <Stack direction={"column"} justifyContent={"start"} alignItems={"start"} spacing={3}>
                            <ForestIcon sx={{ color: '#EA9449', width: "60px", height: "100px" }}></ForestIcon>
                            <Typography variant='h3' fontWeight={"700"}>Your Event, Our Venue</Typography>
                            <Typography variant='subtitle1' color={"#A4A4A4"} fontWeight={"600"} fontSize={"18px"}>Celebrate your special events at Campass.</Typography>
                            <Typography variant='subtitle1' color={"#A4A4A4"} fontSize={"18px"}>Our glamping is a perfect place to celebrate your events and spend time with your colleagues or loved ones.</Typography>
                            <Stack direction={"column"} width={"100%"} spacing={2} divider={<Divider orientation='horizontal' sx={{ backgroundColor: "grey" }}></Divider>}>
                                <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} >
                                    <Typography variant='h5' fontWeight={"500"}>Wedding Ceremonies</Typography>
                                    <IconButton onClick={() => {
                                        if (!openW) {
                                            setOpenB(false);
                                            setOpenG(false);
                                            setOpenT(false);
                                        }
                                        setOpenW(!openW);
                                    }}>
                                        {!openW ? <Add sx={{ width: "30px", height: "30px" }}></Add> : <Remove sx={{ width: "30px", height: "30px" }}></Remove>}
                                    </IconButton>
                                </Stack>
                                {openW &&
                                    <Typography variant='subtitle1' color={"#A4A4A4"} fontSize={"18px"}>Campass provides an enchanting backdrop for couples seeking a unique and intimate wedding experience. With its breathtaking natural surroundings and rustic charm, our glamping site offers the perfect setting for exchanging vows amidst the beauty of Washington's wilderness. </Typography>
                                }
                                <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                                    <Typography variant='h5' fontWeight={"500"}>Birthday Parties</Typography>
                                    <IconButton onClick={() => {
                                        if (!openB) {
                                            setOpenW(false);
                                            setOpenG(false);
                                            setOpenT(false);
                                        }
                                        setOpenB(!openB);
                                    }}>
                                        {!openB ? <Add sx={{ width: "30px", height: "30px" }}></Add> : <Remove sx={{ width: "30px", height: "30px" }}></Remove>}
                                    </IconButton>
                                </Stack>
                                {openB &&
                                    <Typography variant='subtitle1' color={"#A4A4A4"} fontSize={"18px"}>Whether you're marking a milestone birthday or simply gathering with loved ones for a memorable celebration, our glamping site offers the perfect venue. From cozy wood cabins to spacious tents,
                                        guests can enjoy a variety of accommodations while enjoying outdoor activities, campfire gatherings, and delicious barbecue dinners.</Typography>
                                }
                                <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                                    <Typography variant='h5' fontWeight={"500"}>Group Retreats</Typography>
                                    <IconButton onClick={() => {
                                        if (!openG) {
                                            setOpenW(false);
                                            setOpenB(false);
                                            setOpenT(false);
                                        }
                                        setOpenG(!openG);
                                    }}>
                                        {!openG ? <Add sx={{ width: "30px", height: "30px" }}></Add> : <Remove sx={{ width: "30px", height: "30px" }}></Remove>}
                                    </IconButton>
                                </Stack>
                                {openG &&
                                    <Typography variant='subtitle1' color={"#A4A4A4"} fontSize={"18px"}>Escape the hustle and bustle of city life and reconnect with nature at Hidden Heaven Glamping.
                                        Our site is ideal for hosting group retreats, whether it's a yoga retreat, meditation getaway, or corporate retreat. </Typography>
                                }
                                <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                                    <Typography variant='h5' fontWeight={"500"}>Team Building</Typography>
                                    <IconButton onClick={() => {
                                        if (!openT) {
                                            setOpenW(false);
                                            setOpenB(false);
                                            setOpenG(false);
                                        }
                                        setOpenT(!openT);
                                    }}>
                                        {!openT ? <Add sx={{ width: "30px", height: "30px" }}></Add> : <Remove sx={{ width: "30px", height: "30px" }}></Remove>}
                                    </IconButton>
                                </Stack>
                                {openT &&
                                    <Typography variant='subtitle1' color={"#A4A4A4"} fontSize={"18px"}>Forge stronger bonds and enhance teamwork with a memorable team-building retreat at Hidden Heaven Glamping.
                                        Our site provides an idyllic backdrop for outdoor activities, adventure challenges, and collaborative workshops.  </Typography>
                                }
                            </Stack>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

export default About;
