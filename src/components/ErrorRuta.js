import React from 'react'
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {Button} from "@material-ui/core";

function ErrorRuta() {
    const backgroundStyle = {
        backgroundColor: "#e6e6fa",
        backgroundImage:" url(\"data:image/svg+xml,%3Csvg width='42' height='44' viewBox='0 0 42 44' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Page-1' fill='none' fill-rule='evenodd'%3E%3Cg id='brick-wall' fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M0 0h42v44H0V0zm1 1h40v20H1V1zM0 23h20v20H0V23zm22 0h20v20H22V23z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\") ",
        minHeight: '100vh'
    };

    return (
        <Grid container
              spacing={0}
              direction="column"
              alignItems="center"
              justify="center"
              style={backgroundStyle}
        >
            <Grid item xs={12} >
                <Typography
                    variant="h1"
                    style={{textAlign: "center", color: "#2A2831"}}
                >
                    <i className="fas fa-ghost"></i>
                </Typography>
                <Typography
                    variant="h1"
                    style={{textAlign:"center", color: "#2A2831"}}
                >
                    4 0 4
                </Typography>
                <Typography
                    variant="h3"
                    gutterBottom
                    style={{textAlign:"center", textShadow:"2px 2px 2px grey", color: "#2A2831"}}
                >
                    Page Not Found
                </Typography>
            </Grid>
            <Grid item>
                <Button
                    href="/"
                    variant="contained"
                    color="primary"
                    style={{marginTop:"30px"}}
                >
                    VOLVER AL HOME
                </Button>
            </Grid>
        </Grid>
    );
}

export default ErrorRuta;