import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { Box, Button } from '@mui/material';

import logo from '/logo.svg';
import menu from '/icon-menu.svg';

function Header() {
  const pages = ['Home', 'New', 'Popular', 'Trending', 'Categories'];

  return (
    <AppBar
      position="static"
      variant="outlined"
      color="transparent"
      sx={{ border: 'none' }}
    >
      <Container maxWidth="lg" disableGutters>
        <Toolbar
          disableGutters
          component="nav"
          sx={{ justifyContent: 'space-between' }}
        >
          <Box sx={{ width: { xs: '45px', md: '60px' } }}>
            <img src={logo} alt="" />
          </Box>

          <Box sx={{ display: { md: 'none' } }}>
            <img src={menu} alt="" />
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{
                  color: 'var(--clr-navy-600)',
                  textTransform: 'revert',
                  fontSize: 'calc(15rem/16)',
                  '&:hover, &:focus': {
                    backgroundColor: 'transparent',
                    color: 'var(--clr-red-500)',
                  },
                }}
                variant="text"
                disableFocusRipple
                disableRipple
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
