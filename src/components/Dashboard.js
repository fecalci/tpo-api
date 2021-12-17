import { Helmet } from 'react-helmet';
import { Box, Container, Grid, Typography } from '@material-ui/core';
import { Card, Stack } from '@mui/material';
import CardContent from '@material-ui/core/CardContent';
import LatestProducts from '../components/dashboard/LatestProducts';
import Sales from '../components/dashboard/Sales';
import { Navigation } from './navigation'; 
import CustomImageList from './PicturesPercentiles'

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
            <CustomImageList/>
          </Grid>
          
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Card>
              <CardContent>
                  Nombre: {localStorage.getItem('ActualBebeName')}
                  <Typography variant="h5" component="div">
                      Fecha de Nacimiento: {localStorage.getItem('ActualBebeFecha').substring(0, 10)}
                  </Typography>             
              </CardContent>
            </Card>
            <br></br>
            <Card>
              <CardContent>
                  Altura: {localStorage.getItem('ActualBebeAltura')}
                  <Typography variant="h5" component="div" gap="10">
                      Peso: {localStorage.getItem('ActualBebePeso')}
                  </Typography>             
              </CardContent>
            </Card>
            <br></br>
            <Card>
              <CardContent>
                  Diametro del Craneo: {localStorage.getItem('ActualBebeCabeza')}

              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
    </div>
  </>
);

const DashboardSinData = () => (
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
            <CustomImageList/>
          </Grid>
          
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Card>
              <CardContent>
                  Nombre: 
                  <Typography variant="h5" component="div">
                      Fecha de Nacimiento:
                  </Typography>             
              </CardContent>
            </Card>
            <br></br>
            <Card>
              <CardContent>
                  Altura:
                  <Typography variant="h5" component="div" gap="10">
                      Peso:
                  </Typography>             
              </CardContent>
            </Card>
            <br></br>
            <Card>
              <CardContent>
                  Diametro del Craneo:

              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
    </div>
  </>
);

const DashboardChoose = localStorage.getItem('ActualBebe') ? Dashboard : DashboardSinData;

export default DashboardChoose;

