import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import navbarStyles from "./Navbar.Styles";

const globalWindowObj = window;

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ["Home", "Gallery", "RSVP", "Location"];

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isBgColorApplied, setIsBgColorApplied] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  React.useEffect(() => {
    const handleScroll = () => {
      if (globalWindowObj.scrollY >= 96) {
        setIsBgColorApplied(true);
      } else if (globalWindowObj.scrollY < 96) {
        setIsBgColorApplied(false);
      }
    };
    globalWindowObj.addEventListener("scroll", handleScroll);

    return () => {
      globalWindowObj.removeEventListener("scroll", handleScroll);
    };
  }, [isBgColorApplied]);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Box
          component="img"
          alt="logo-image"
          src="data:image/png;base64,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"
          sx={navbarStyles.navbarLogo}
        />
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        // border: "2px solid red",
      }}
    >
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          bgcolor: isBgColorApplied ? "#075F53" : "transparent",
          // border: "2px solid red",
          boxShadow: "0px 0px 0px 0px rgba(0, 0, 0, 0)",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                sm: "block",
                // border: "3px solid yellow",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "0px",
                // paddingTop: "10px",
              },
            }}
          >
            <Box
              component="img"
              alt="logo-image"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARgAAABGCAIAAACYHxzoAAAT3UlEQVR42u2daVBbyXqGZ+bmJn8yk6qkKlX5k5qb3Jt7K8mfpKZSlbrjDQx4BbOJ1WbfF4NZBHjB2HgbL3gDY8zYYIOXca7BYzxgg9lXGwuDwIAxi1i0C4HYxObklc6MRpwjHQlDKjDpt3o0QqfV/Z0+39Nfd5/W8Sf/TUREtGJ9gv8+EBERrUAEJCIiAhIREQGJiIiAREREREAiIiIgERERkIiICEhEREQEpI/QzMzMuHEtLCyQJiIiIJmmqKjoaUhIqLeXj4/3z8lb8+rL5Sb09fURlogISKYlk8ni4uKtt9pYbLG0tNiqSy4ursXFJSCNNBERAcksCUeEcTHxAGnzpi1bNlsgubt5lL8on5qaIo1DREAyV/Pz85WVVU6OzhRFeFNWWjY9PU1ahoiAtAwJBgRJiQcxnENE8nD3LCUUERGQlqXFxUWBQBAYEAiKEItcOK5VVdWEIiIC0vIoev/+fcyB2K2WVohFri5uz5+XEoqICEjL0AIo6u0ND42g5kWeHp41NbUz02SNjoiAZD5FCwvd3d2BAUFULHJ24lSUV5KVbiIC0vIo6uzsjNofhUAEivbt9aqpqSEUERGQlqH5+fmOjg6vfV4WWywBEsfZpa6uTq1Wk5YhIiCZq7m5OT6fHxYWTt17xbyourp6jVBk5kakhZ9EriYBybCLj0KKUZMaGxtbXFzU/6JSqVQoFPgu3rBXweO1+Hj7UtsX9nrubWho0FFElWCOlMoxZuHj4+OaEtilGJXLFTCD+XWY8e7dO6FQyE4Iwmlvb29bGx+veM/MgMZhqR0Wws7Z2Vn2a4HmZStHr0DI4OlMTU0ZbQ3KjLFxnLL+dSQgrQ5FVZVVO3fs2rhhE3sCAEFBwSKhiLoGeB0aHg4JCUWEwVF3Nw+4o8HLA+9pfdPq6+NH3XV14bjW1tbpU2RtZbPhjxtNGoDvenv50FiCd0ZGRG7auJn9uyh/88YtqJfmfPiztLTUysraztauubmZJULK5fL4OO6unbvj4+LxnklRYGAQmshw7V9v3LBhY1BgUNGTouHhYWM4ofWEQlFQYLCxcvST7S47XDja6YCi9KvplhaWxszAK7qzu3fvCQYE62iZdH2AVF1VDZDgi0hwVmMJwIQEh4rFYv0LPzg4mHzkKLWKHRYa/q6bzhKcpqmxyd8vgIpFuIqNjY36/oqO0sZ6G3vVOgPwdZCjX75KpYqIiMRR9hK0Ry3q6+ppwWRycvLsN+dQMjI4O3FKSp4ZYwnAxxyIgakHomPwnnYUZgAkqhyDBlAdATIEBgQBXWO1oHkBEks5umRnuwdjYxpI09PTGekZ6LCMfN2C+hwZvPZ537t7D2YTkFYPpOpqdLTwclcXt9CQsNDQMM0rI0WER5z95iyzMx4aGo6NjYOHUbsTurvf6cZIoOhl00tPj73U6oKzM6epqYnWHwOMqP0H9Cvy8/W32mqN/PZ7HBDxfrQnVGPAidQTExMTNA+OjNxPrQEGB4UYMx4pPCwCAzMGSFMnT5yiFuLhZE6Ozi9fvjTo5YDnAAtI4yoAgHJgObobmhmAB13V9m07qPmh7W471GJwfCgWS3AWKAf5Nadj5FzQZ3HjuS0tLbRCNCBlXKPM8PPxo30rODAYTbpj+y7tVhJLB3vHgkcF62KxZz2BhNbPzcmVyWQq40L/bbAQTDAOHzpM7fTx8/N/8+YNLjCuEIKPr48v5eUYlTEp0rGkqwJjJIwD4dCw5/ixVPTQ+gbQKNKBpOnsLSwFAgGL8aiF6bs6kEAR7NcMmXbblZWWMVfkzQTJxcUVPQuzdjQs4iEGh1S4QPTr7+83BhLGutH7o4UjQhWrmKdDgQSK0KO1tLxBY9K+AstbeC1HDifbWG9Ho3GcOT09PWt/vrSeQMIFvpN756Nv6YyMjKSmnthms53ae8rjtVRWViEWgSJ0wx4enq9evTI51aZWxtrbOyiQUo+nGkPXAEhbLJn+bVIUSBRC6enpqBRvEJkrKirVM+rlgqT5JRXHdXRUaWy5Aq3EjeNabLaEr1++fIV5djqQovZHs6/fGJQ+SO3t7QaXT/ChSCQ+pO340Gi4aiYbmYC0PJBu594GSOrFDxPziwbTHGvPhcvDjU+AE8Ct8YqRAzWS8XD3ePXSLIqoy8znt68EJNWcYeOnF4yCRK2X9PX1Xb50ecf2nXiPBqmurtHf+7cckEZZFuVQi+0uO+SM2h+FMMUCEspZWPwwOf/B/NPRB4nP57OsQ2Jyi6EmYiNemWYQkFYK0vjUzBORmtuuiuHTU1KHqkExy86SRCJJu5BGLR5QscjH27e5udlMilYO0vjcYnTreDTD+Ph2VfbA1MQ8G0jaJXL5lStXqT9hw9Oip7oQvSogQYgzKAGoYKwrEAzShlX6IMkVo/2T88e7JmIZp4NPsgemmSyZDxIGyZhl4UzRcVBDcQLSaoIkn5w+1KH62x8knz+RfKGX8OffFUtzBqZnTN2NlEqkRw4fweWBc2PGnJ+fz5zY/O+BJJ1Z+PtC8edPxF8stf9vnkqcmpQS9QIbSFoAUEh6egb6ac18ydauvr6BYmm1QILBmPvZWNu4ubr39vaygCRTjKLn+ucy2V8V0a/FXxdJOC+VSkavZj5IyJmuWd+zwqWvqakxeEuKgPTxII1OTmf0TVnVKjZV09O2utEnwhm1Gbf1wVJa2kXMlxCUPNw8KioqzP99xApBUqgXt1YoNlbJacZb1igQZkdnF02CRN0yunAhDe6ID3fvsi16UkTd5VwVkMbHx5OPHAUqmED29/ezg9Q2NufcpNzMuBZbtKejml8RSBfOp8FgdHZNTU0kIq3+HAmjo5GZBYNpyhRFuLL4OmYp/SLpmfMXd+3YBRd3dHAqLi4x8xkMKwQJnjU8vSBkWI5P5LMGFqcMgkTFn4yMDGrtwcnRqby8XCgUxqwGSBItKvD14OAQlMkCEsqZXfggMnIt5OrFlcyRMI718/VHTweQBALBGl+4W5cgfXRRGLJXyGYDeOO+vDH/lvFUviTl9Dc7tSwBjGclz8xZHVr5YsNHrNoxQdKwJFdcOH8BY7wNX29EdH3w4Lvw8IgVgjQzo66qrIKjI+exY8dVqgn2xYaVrNqxgDQ3O1dTU0ttgMAk9iOWBwlIbCDl5tz+6G0jmDt9Nzzzh1LZXzwWI/1rmaxOMSeVybNvfEttm3B24jx8+F8m50trByRIJpVdunSZOopZH6CCVSZBUihGmR08PsG5VFfXYGqE1tixfUdlRSVzZqIHUpQmwC4zUOiB5NLW1mZwwIa+kt/GD/APhBk4NUyQ1vi4bv2BlHktc2hoSGRcMpnMYCeHWFQtn/3H59LPCsWfFYp+91zKU85RM2F4w7lz51E+fH2PnX1BQSGzG14VkGB/d/c7FuMxjmLGW3aQqPkS5nvUSjEGQuwg4SjHmdPV1cWsva+vL+9OPka5WzZZwNEPHTysNHS7SQdSeFi4wXJ0EovFzNPRgYQGrKysGh4eoX1rUDD46FEB9cwmZDt86MjY2NiHNa/1BBK1dcXNzd1Y8vDwPHjwkEQioZWAidO94enfPpd+WiD6VYHoq3J5rXxWv4uD2+XcysGsnZovfffdQ9p+uZWDBLeAo7u6uhkzHofc3T0aGhtpQcAkSJq1E6kUfQG1IwFWYabEAhKyuTHMQJjC4JCqBYPDpKSD8GmDdVEgoRAbaxtXFzeWyxEYEFRf32Bgr512ixBKQBvSzXBxxehgq+VWahtHWGh4d3f3utgGvj5AQnC33+NAbdBiSXAFND08QL/pMaIrEav/qRSxSPSrQvHvn0lblHOMxSTNzZOsrCywhFpwgfPy8o2tPVA7GyjPO3nipDkgHYg+YGVlzW4/jqKbr2Ls8gRIZ06fwSF4OcucBHEJYzwwgJyJCYkGQQoNDUMGY2ZQn+OkLl68JJFIjVUEkNDImnK2sl4OK2sHe8cKxuAQIGVmXt+2bTu7GcDp9KkztEtJQFqRMD7GrPRocgqXm8CeEhOTrly+qu9DiEXfC2d+80z6aaEIg7r/qJS3jBm9YQuW8u7kJXATufHckydPGXuuNz4cGBg4kXoS3fa9e/dMLn4ASLhOQkIiu/Hx8fhfInPagPLv33+QmJAUH8dl3woNljLSMzCu+9OfHjGtghlXrlxNSkwyZgCC+Y2sGz09PexdA2C+eiU90Xg5upSScqy1tZV2Omq1+mnR04NJB419C62akX6thdcC8j+sH62PH/bhYqjMk74TYF70cHjm96WyT7Wx6A9lsqbROfblcerfnqCKYrkDCJYmJiaQx8y7T1OTU2ZZP64yOKtGLdSWVjNWJiYNzkx0R1kqxxmhInMiAHs5PxeomjC2lmDSjHX3I99f7E/NQVG5dPY3JZoR3Z8Viv+tXN7JvDv4S9T6+mHpL0a/TJBAUd7g9D8806wugKL/rJK/Us4R/yIiIC2PojLpLCj6rED060LN/aKu/x+xiIiAtGqamtfcdf2yRBOLfv1YvLVG8XZ8nlxmIgLS8mJRoXDmd89/jEX//kLepTL8FBtq4o5JLW2ZmJrW0/IrlUras26Yk2/aM4bM/CEaptQwgGVVQy6X056RxJyFMx5jpKQVqFarf3xEz0/P7mGaRyvE4NI/Gke/KZgLLbBWt7qAqRr+NP/HKQSkNRSLSsRqzepCgejPC8UWNYp3E/MGKbp58xaXyx0eHr6bf9fe3gFvdDzcyMo+ceKk/s4uvN/ruW+bzXb7PY4O9pq0b6+XPkv4VlraxR3bd1BHHewdOByX06fOmLwfDyTevGl14bg+f15q0OHgiNTeZ5SJ5OToHBEWyePx9FmCJa6ubjbWP5rn6ODk7x9QWlqmKxAUPSt5hlOws93z9R832O62c3bipKdn6LMklUr32NkjUafg4uJ66+YtGksSsSQrM8trn7eDgyMazdXFNTf3tj5LMpkcVeie9ADjd+3cbezUCEhreHVB8OPqAmLRZozoVIZHdOgpu7u6vb28S4pLhoaGggKDs7JuwGngnW1tbYCksbFRf9EWsSswIOjSxUstvBY+vx2po6ND35Wp+zNHjiS3vmltb+9Ahqoqzb9K1tzczP4TGtW4CrwlJCSh/IGBAeZqGyCB39+7d5/P57/teMtv4+fn3U1OPqrPOXD18fZJu3ARtXd0vIVtZWVlEeGRItHPj1JSjirfvu2sqKhwc3MvfV6KPCMjI/rVIVL5+wVUV9e0taGqdkgoXHInVPsko7MJCYn1dfUdGr2FxGKxfh7EZKAIkEAX4JFKZbt32754Ub7Gf0dEQFpCUYVslpoXfVYg/qpC3jPBNi+CW2SkX0PPLRKJ6uvr4UMCgWBsbDwl5dixlGO0SAKQQkPC8u7kNTU1NTQ21jc00O6ZAqSr2huddXX1OFpbV5eXl48+W/+pYAbDEe81LzwsnN/Wtj8y6sH9B8ybPwDJfo9DWWkZyJnQCm4eExOLvl8fJH8//5xbuYgAVJ7e3r7QkNCR4SWowGCco4+3b8+7Hng2DVqAFBISigy12nNobHopXLqlAJYg1iG8wEjdw1xphQAkW1s7hDLAg66kqrIKXJWXE5DWz4guf3D6y2LpJwUigPTF9+LL7yenTd3NA0LA48mTooaGRozK7t9/0Nbahk/gTLScWpBCc3Jy8/Pyb9y4gfBVWPhY3+nRASMiBQeFXM+8jqNZ17Mupl309fF9/76X5ZYOYgK+knMrB66bnZ3t4e7Z1dlFd83RUYzrjiYfzbyWef161rWMa5GR+7NvZE9PTeuDhOgaFRWNozAAORGyUo+n0n53oHlW5tAQQOo1ZBVAwrn39fZmop7r12EVgpJ+ZwFLHPY41NTUsuzCRh6M5Y6lHL+WkZmptQThlIC0Tiha+FAknPmtdqX705/Sl08ltXITT26AQ9TV1kdG7Idv4RUjsZSjxx4+fMh8hBpACgkOzc3NhSNiniAWSzCjoE26rl5NP3Xq9ED/gEQrDHs4zhwMsYxNDxAS4WfhYRHV1dXnzp47mpyCISX+xHCICRJc8+a3N9HT3759ByMr2sYZgOS1zys2Nu7b7G+RB8AjbjA32lEgeXv5GAMpODi0t7cX/Qt1jhMTS1YjVCrVoUOHL5y/gAy6LQi0ZxghIiF+1tXW4RDaRDgixJTpxYsXBKS1LvXCh2KR+l+KpZ8Xiv/y8ZL0Vbn87biJe0dSiTQ2JtbXx6+zszM6KjrAP8Cgk8FTMY9Crw9njYuLRzpyOFl/tw6cJiM9A7Pw+Hgul5uADH6+/qCC+SNt3aAOFUWER3R2dcLJqK1GXV1dfn7+P/xQvOQJr4pR7T+2WUXtRYLm5+aZ5gUHh+Tn30UIovIYpJcCCZMxg+cok8n2eu6Ljj6gOcHY+MTEpMeF308v/d3X4OBgdNQBnFecth2Skg4+LXqqz5JCrnB24mBmSEUtwOlg70hAWuuCL4zOLj4amcnoncroo6fr/VO8sTn2oASH7uvr6+npoeYPmM0bvOTUXu/Xr1/zeC3axKM90UbzVGTB4E9HNQmC27HsFgMYHUurQ4GIY0ODQ/rfwocoin31D3kwDDNnlzQQxRTL4OZAWIKT0p0gKgV1TPsx60MJPK2QZ3h4mDYNQyvpuhj82dz8+iN++UdA+j9gaWZBs9JgMJmzI0j3L6DgYrP4PQ7NLxWzv6dlMOk9zOoM/nMs5vwy1JzqTJZGs39hYdFkNmaltPLNN4yAREREREAiIiIgERERkIiICEhEREQEJCIiAhIREQGJiIiAREREREAiIiIgERERkIiICEhEREQEJCIiAhIR0ToDiYiIaIX6H2979XzEnmiDAAAAAElFTkSuQmCC"
              sx={navbarStyles.navbarLogo}
            />
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#fff" }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            width: !mobileOpen ? "0" : drawerWidth,
            transition: "width 1.8s ease",
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              //   transition: "width 1.6s ease", // Add transition property for width
              position: "fixed",
              top: 0,
              left: 0,
              height: "100%",
              zIndex: (theme) => theme.zIndex.drawer,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
