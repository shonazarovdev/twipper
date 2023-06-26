import React, { FC } from "react";
import { Link } from "react-router-dom";
import {
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
} from "@mui/material";
import { routes } from "../../data/routes";
import { SidebarPropsI } from "./types";

const Sidebar: FC<SidebarPropsI> = ({}) => {
    return (
        <Box sx={{ height: "100%" }}>
            <List sx={{ display: "grid", rowGap: ".5rem", width: "100%" }}>
                {routes.map((route) => (
                    <ListItem
                        disablePadding
                        key={route.id}
                        sx={{ width: "100%" }}
                    >
                        <Link
                            to={route.path}
                            style={{ textDecoration: "none", width: "100%" }}
                        >
                            <ListItemButton
                                sx={{
                                    borderRight: "1px solid #000",
                                    width: "100%",
                                }}
                            >
                                <ListItemText>{route.label}</ListItemText>
                            </ListItemButton>
                        </Link>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default Sidebar;
