import {Stack, Typography, IconButton, Icon} from "@mui/material";

function Header() {
    return (
        <Stack
            direction="row"
            spacing="16px"
            divider=""
            justifyContent="space-between"
            sx={{ backgroundColor: 'black' }}
            padding="10px 20px"
            alignItems="center"
        >
            <Typography
                variant="h4"
                color="white"
            >
                Portal
            </Typography>
            <IconButton
                size="large"
            >
                <Icon
                    fontSize="inherit"
                    color="primary"
                    sx={{ color: 'white' }}
                >
                    menu
                </Icon>
            </IconButton>
        </Stack>
    )
}
export default Header;