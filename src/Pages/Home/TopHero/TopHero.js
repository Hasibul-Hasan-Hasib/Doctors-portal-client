import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Image from '../../../images/treatment.png'


const image = {
    width: '100%',
}

const writtenContent = {
    alignItems: 'center',
    justifyContent: 'space-between',
}


const TopHero = () => {
    return (
        <>
            <Container>
                <Grid container spacing={2} sx={writtenContent}>
                    <Grid item xs={5}>
                        <img style={image} src={Image} alt="" />
                    </Grid>
                    <Grid item xs={7}>
                        <Typography sx={{ fontWeight: 600, fontSize: '2.5rem', marginBottom: 2 }}>
                            Exceptional Dental<br/> Care, on Your Terms
                        </Typography>
                        <Typography variant="h6" sx={{ marginBottom: 2, color:'gray' }}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id commodi nihil placeat incidunt repudiandae aliquid illo mollitia molestiae ut! Voluptas doloremque, repellat dicta, eaque quas voluptatem excepturi odio sed atque eum ducimus laboriosam nemo unde.
                        </Typography>
                        <Box><Button variant="contained" sx={{ background: 'linear-gradient(45deg, #0CFFEB 0%, #0CFF87 100%)', fontWeight: '600', paddingX: 2, paddingY: 1, marginTop: 2 }}>Learn More</Button></Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default TopHero;