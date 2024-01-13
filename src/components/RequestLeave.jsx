import {Alert, AlertTitle, Typography} from "@mui/material";

function RequestLeave() {
    return(
        <Alert
            severity="warning"
            isOpen={true}
            sx={{ margin: '50px' }}
        >
            <AlertTitle>
                Feature Coming Soon!
            </AlertTitle>
            <Typography
                variant="body2"
            >
                Please email your manager to submit a leave request.
            </Typography>
        </Alert>
    )
}
export default RequestLeave