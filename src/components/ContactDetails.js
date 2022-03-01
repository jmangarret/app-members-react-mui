import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

export default function ContactDetails() {
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Contact Details
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="homePhone"
                        name="homePhone"
                        label="Home Phone"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="cellPhone"
                        name="cellPhone"
                        label="Cell Phone"
                        fullWidth
                        autoComplete="family-name"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="emailAddress"
                        name="emailAddress"
                        label="Email Address"
                        fullWidth
                        autoComplete="shipping address-line1"
                        variant="standard"
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}