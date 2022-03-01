import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';

export default function ContactDetails() {
    const [position, setPosition] = React.useState('');

    const handleChange = (event) => {
        setPosition(event.target.value);
    };

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Job Info
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="originalHire"
                        name="originalHire"
                        label="Original Hire"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="badge"
                        name="badge"
                        label="Badge #"
                        fullWidth
                        autoComplete="family-name"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12}>
                    <InputLabel id="position-label">Position</InputLabel>
                    <Select
                        labelId="position-label"
                        id="position"
                        name="position"
                        label="Position"
                        value={position}
                        onChange={handleChange}
                        fullWidth
                        variant="standard"
                    >
                        <MenuItem value="">
                            <em>Select a position</em>
                        </MenuItem>
                        <MenuItem value={1}>Developer Sr.</MenuItem>
                        <MenuItem value={2}>Developer Ssr.</MenuItem>
                        <MenuItem value={3}>Developer Jr.</MenuItem>
                    </Select>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}