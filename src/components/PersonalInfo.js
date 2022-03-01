import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export default function PersonalInfo(props) {
    const [title, setTitle] = React.useState('');
    const { classes } = props;
    const handleChange = (event) => {
        setTitle(event.target.value);
    };
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Personal Info
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <InputLabel id="title-label">Title</InputLabel>
                    <Select
                        labelId="title-label"
                        id="title"
                        name="title"
                        label="Title"
                        value={title}
                        onChange={handleChange}
                        fullWidth
                        variant="standard"
                    >
                        <MenuItem value={"Mr"}>Mr.</MenuItem>
                        <MenuItem value={"Miss"}>Miss</MenuItem>
                    </Select>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="lastName"
                        name="lastName"
                        label="Last Name"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                    />
                </Grid>
            </Grid>
        </React.Fragment>

    )
}