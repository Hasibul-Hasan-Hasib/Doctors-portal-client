import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from '../Service/Service';
import Fluoride from '../../../images/fluoride.png';
import Cavity from '../../../images/cavity.png'
import Whitening from '../../../images/whitening.png'


const services = [
    {
        name: 'Fluoride Treatment',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, porro? Cum, error? Inventore magni dolorum at doloribus nemo hic id nisi, quia soluta ea culpa dolorem, quidem impedit voluptate exercitationem similique? Vitae nostrum eum iste quos quae eligendi maiores perferendis ad nam! Aliquam officia quae, assumenda quas dignissimos nam vitae?',
        img: Fluoride 
    },
    {
        name: 'Cavity filling',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, porro? Cum, error? Inventore magni dolorum at doloribus nemo hic id nisi, quia soluta ea culpa dolorem, quidem impedit voluptate exercitationem similique? Vitae nostrum eum iste quos quae eligendi maiores perferendis ad nam! Aliquam officia quae, assumenda quas dignissimos nam vitae?',
        img: Cavity 
    },
    {
        name: 'Fluoride Treatment',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, porro? Cum, error? Inventore magni dolorum at doloribus nemo hic id nisi, quia soluta ea culpa dolorem, quidem impedit voluptate exercitationem similique? Vitae nostrum eum iste quos quae eligendi maiores perferendis ad nam! Aliquam officia quae, assumenda quas dignissimos nam vitae?',
        img:  Whitening 
    },
]


const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service service={service} />)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;