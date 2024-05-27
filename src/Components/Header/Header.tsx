import { AppBar, Box, Toolbar } from "@mui/material";
import React from "react";
import theme from "../../theme";
import Todo from "../../todo.png";



const Header = () => {
  return (
    <AppBar
      //className="px3"
      position="static"
      style={{ background: "#F9F9F9 !important" }}
    >
      <Toolbar className="flex justify-between px4">
        <img alt="logo" src={Todo} className="pointer img-width"/>
        <Box
          className="items-center"
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          <p
            className="font-14 pointer pText"
            //onClick={() => router.push("/support")}
            style={{ color: theme.color.white }}
          >
            Todo List
          </p>
          <p
            className="font-14 pointer ml2 pText"
            //onClick={() => router.push("/support")}
            style={{ color: theme.color.white }}
          >
            Completed List
          </p>
          {/* )} */}
        </Box>
        {/* ---- design for small screen ----  */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
