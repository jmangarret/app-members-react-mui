import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';

export default function MemberStatus() {
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Member Status
            </Typography>

            <FormControl>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="memberStatus"
                >
                    <FormControlLabel value="12" control={<Radio />} label="Initiated" />
                    <FormControlLabel value="13" control={<Radio />} label="Transferred" />
                </RadioGroup>
            </FormControl>
        </React.Fragment>
    );
}