import React from 'react';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import Doctor from '../../../images/doctor.png'
import Background from '../../../images/appointment-bg.png'


const appointmentBanner = {
    background: `url(${Background})`,
    backgroundColor: 'rgba(45, 58, 74, 0.8)',
    backgroundBlendMode: 'darken',
    width: '90%',
    margin: '100px auto'
}

const AppointmentBanner = () => {
    return (
        <Container>
            <Grid container spacing={2} style={appointmentBanner}>
                <Grid item xs={12} sm={4}>
                    <img style={{ width: "26rem", marginTop: "-7rem" }} src={Doctor} alt="doctor uncle" />
                </Grid>
                <Grid item xs={12} sm={8} >
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        appointment
                    </Typography>
                    <Typography variant="h4" sx={{ fontWeight: 500, color: 'white' }}>
                        Make a Appointment now
                    </Typography>
                    <Typography variant="h7" sx={{ fontWeight: 600, color: 'white' }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, quam.
                    </Typography>
                    <Button variant="contained">Learn More</Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default AppointmentBanner;