import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

export default function PersonalInfo() {
    const [title, setTitle] = React.useState('');

    const handleChange = (event) => {
        setTitle(event.target.value);
    };
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Demographics
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="dateOfBirth"
                        name="dateOfBirth"
                        label="Date of Birth"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="joinDate"
                        name="joinDate"
                        label="Join Date"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                    />
                </Grid>
            </Grid>
        </React.Fragment>

    )
}
