import { Helmet } from 'react-helmet';
import { Box, Container, Grid } from '@material-ui/core';
import LatestProducts from '../components/dashboard/LatestProducts';
import Sales from '../components/dashboard/Sales';
import { Navigation } from './navigation'; 

const Dashboard = () => (
  <>
  <div>
      <Navigation/>
  </div>
  <div>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        marginTop:'6%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <Sales />
          </Grid>
          
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <LatestProducts sx={{ height: '100%' }} />
          </Grid>
        </Grid>
      </Container>
    </Box>
    </div>
  </>
);

export default Dashboard;
