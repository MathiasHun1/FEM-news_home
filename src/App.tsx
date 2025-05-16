import Container from '@mui/material/Container';
import { Grid, Box, Typography, Button } from '@mui/material';
import heroMob from '/image-web-3-mobile.jpg';

import Header from './components/Header';

export default function App() {
  return (
    <div>
      <Container maxWidth="lg">
        <Header />
        <Grid container>
          <Grid size={{ xs: 12, md: 8 }}>
            <Box sx={{ mb: 3 }}>
              <img
                src={heroMob}
                alt=""
                className="w-full h-full object-contain"
              />
            </Box>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Box>
                  <Typography
                    component="h1"
                    variant="h3"
                    sx={{
                      fontWeight: 'bold',
                      fontSize: '40px',
                      textWrap: 'pretty',
                    }}
                    gutterBottom={false}
                  >
                    The Bright Future of Web 3.0?
                  </Typography>
                </Box>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem',
                  }}
                >
                  <Typography sx={{ color: 'var(--clr-navy-600)' }}>
                    We dive into the next evolution of the web that claims to
                    put the power of the platforms back into the hands of the
                    people. But is it really fulfilling its promise?
                  </Typography>
                  <Button
                    sx={{
                      px: 4,
                      backgroundColor: 'var(--clr-red-500)',
                      color: 'var(--clr-navy-950)',
                      width: 'fit-content',
                      letterSpacing: '4px',
                      fontSize: '14px',
                    }}
                  >
                    READ MORE
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            size={{ xs: 12, md: 4 }}
            py={{ xs: 2, sm: 4, md: 2 }}
            px={{ xs: 3, sm: 5, md: 3 }}
            sx={{
              backgroundColor: 'var(--clr-navy-950)',
            }}
          ></Grid>
        </Grid>
      </Container>
    </div>
  );
}
