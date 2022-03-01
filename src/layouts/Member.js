import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import PersonalInfo from '../components/PersonalInfo';
import ContactDetails from '../components/ContactDetails';
import Demographics from '../components/Demographics';
import JobInfo from '../components/JobInfo';
import MemberStatus from '../components/MemberStatus';
import { httpAuth } from '../libs/axios';

const TOKEN = sessionStorage.getItem("TOKEN");

function Member(props) {
    const handleLogout = () => {
        sessionStorage.setItem('TOKEN', '');
        props.handleLogin(false);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const dataForm = {
            home_phone: data.get('homePhone'),
            cell_phone: data.get('cellPhone'),
            email: data.get('emailAddress'),
            title_id: data.get('title'),
            last_name: data.get('lastName'),
            union_membership_status_id: data.get('memberStatus'),
            birth_date: data.get('dateOfBirth'),
            join_date: data.get('joinDate'),
            original_hire: data.get('originalHire'),
            position_id: data.get('position'),
            badge_number: data.get('badge'),
        }
        console.log('form', dataForm);
        httpAuth(TOKEN).post('/member', dataForm).then(response => {
            console.log('response', response);
        }).catch(error => {
            console.log('error', error);
        })
    };

    return (
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            
            <h1>Add Member</h1>

            <PersonalInfo/>
            <MemberStatus/>
            <Demographics/>
            <JobInfo/>
            <ContactDetails/>

            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
                Send
            </Button>

            <Button
                type="button"
                onClick={handleLogout}
                color="error"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
                Close
            </Button>

        </Box>
    );
}

export default Member;
