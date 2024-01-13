import {List, ListItem, ListItemButton, ListItemIcon, Icon, ListItemText, Checkbox} from "@mui/material";

function Tasks() {
    return(
        <List>
            <ListItem>
                <ListItemButton>
                    <ListItemIcon>
                        <Icon>
                            inbox
                        </Icon>
                    </ListItemIcon>
                    <ListItemText
                        primary="Check out the new portal"
                        secondary=""
                    />
                    <Checkbox />
                </ListItemButton>
            </ListItem>
            <ListItem>
                <ListItemButton>
                    <ListItemIcon>
                        <Icon>
                            flag
                        </Icon>
                    </ListItemIcon>
                    <ListItemText
                        primary="Replace toner"
                        secondary="Printer 2"
                    />
                    <Checkbox />
                </ListItemButton>
            </ListItem>
            <ListItem>
                <ListItemButton>
                    <ListItemIcon>
                        <Icon>
                            error
                        </Icon>
                    </ListItemIcon>
                    <ListItemText
                        primary="Remove spider in kitchen"
                        secondary="NOW!!!"
                    />
                    <Checkbox />
                </ListItemButton>
            </ListItem>
        </List>
    )
}
export default Tasks