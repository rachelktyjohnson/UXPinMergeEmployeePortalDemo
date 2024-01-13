import {Stack, Divider, Avatar, Typography} from "@mui/material";

function User() {
    return (
        <Stack
            direction="row"
            spacing="16px"
            justifyContent="center"
            padding="50px"
            divider={
                <Divider
                    orientation="vertical"
                    flexItem={true}
                />
            }
        >
            <Avatar
                sx={{ width: '150px', height: '150px' }}
                src="https://placekitten.com/150/150"
                sizes="large"
            >

            </Avatar>
            <Stack
                direction="column"
                spacing="2px"
                justifyContent="center"
                divider={
                    <Divider
                        orientation="vertical"
                        flexItem={true}
                    />
                }
            >
                <Typography
                    variant="h4"
                >
                    Rachel Johnson
                </Typography>
                <Typography
                    variant="h6"
                >
                    Lead Designer
                </Typography>
                <Typography
                    variant="body1"
                >
                    rachel@portal.com
                </Typography>
            </Stack>
        </Stack>
    )
}
export default User;