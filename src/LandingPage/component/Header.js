import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import snr from '../../Assets/snr.png'
import OnlinePredictionOutlinedIcon from '@mui/icons-material/OnlinePredictionOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import SpaOutlinedIcon from '@mui/icons-material/SpaOutlined';

const Header = () => {
    return (
        <Container>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '90vh'
                }}
            >
                <img style={{width: '10rem', height: '10rem'}} src={snr} alt='snr logo'/>
                <Typography
                    variant="h4"
                    sx={{
                        mt: '1rem',
                        // fontWeight: 700,
                        fontSize: '2rem',
                        letterSpacing: '.1rem',
                        color: '#167dc2',
                        textDecoration: 'none',
                        textAlign: 'center'
                    }}
                >
                    Welcome to
                </Typography>
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 700,
                        fontSize: '2.5rem',
                        letterSpacing: '.1rem',
                        color: '#167dc2',
                        textDecoration: 'none',
                        textAlign: 'center'
                    }}
                >
                    Sense & Respond Software LLC
                </Typography>
                {/* <Typography
                    variant="h6"
                    component="a"
                    sx={{
                        mt: '3rem'
                        // fontSize: '2.5rem',
                    }}
                >
                    Blend Innovation with Services
                </Typography> */}
                <Typography
                    variant="h6"
                    sx={{
                        mt: '3rem',
                        fontSize: '1rem',
                        textAlign: 'center',
                        width: {sm: '50%', xs: '100%', md: '45%'},
                        fontStyle: 'italic',
                        color: 'gray'
                    }}
                >
                    Effective communication is the backbone of any successful project. It facilitates collaboration, fosters understanding, and minimizes errors or misunderstandings.
                </Typography>

                <Box 
                    sx={{
                        mt: '4rem',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: {sm: '80%', xs: '100%', md: '60%'}
                    }}
                >
                    <Typography
                        sx={{
                            display: 'flex',
                            fontSize: '0.8rem',
                            alignItems: 'center',
                        }}
                    >
                        <OnlinePredictionOutlinedIcon sx={{mr: '0.3rem', width: '1.3rem', color: '#167dc2'}}/> Planning
                    </Typography>
                    <Typography
                        sx={{
                            display: 'flex',
                            fontSize: '0.8rem',
                            alignItems: 'center',
                        }}
                    >
                        <PeopleAltOutlinedIcon sx={{mr: '0.3rem', width: '1.3rem', color: '#167dc2'}}/> Engagement
                    </Typography>
                    <Typography
                        sx={{
                            display: 'flex',
                            fontSize: '0.8rem',
                            alignItems: 'center',
                        }}
                    >
                        <SpaOutlinedIcon sx={{mr: '0.3rem', width: '1.3rem', color: '#167dc2'}}/> Solution
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
};

export default Header;