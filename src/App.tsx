import Container from '@mui/material/Container';
import {
  Grid,
  Box,
  Typography,
  Button,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
} from '@mui/material';
import heroMob from '/image-web-3-mobile.jpg';
import heroDesk from '/image-web-3-desktop.jpg';

import Header from './components/Header';

export default function App() {
  const newsData = [
    {
      title: 'Hydrogen vs Electric Cars?',
      body: 'Will hydrogen-fueled cars ever catch up to EVs?',
    },
    {
      title: 'The Downsides of AI Artistry',
      body: 'What are the possible adverse effects of on-demand AI image generation?',
    },
    ,
    {
      title: 'Is VC Funding Drying Up?',
      body: 'Private funding by VC firms is down 50% YOY. We take a look at what that means.',
    },
  ];

  const servicesData = [
    {
      imgSrc: '/image-retro-pcs.jpg',
      number: '01',
      title: 'Reviving Retro PCs',
      body: 'What happens when old PCs are given modern upgrades?',
    },
    {
      imgSrc: '/image-top-laptops.jpg',
      number: '02',
      title: 'Top 10 Laptops of 2022',
      body: 'Our best picks for various needs and budgets.',
    },
    {
      imgSrc: '/image-gaming-growth.jpg',
      number: '03',
      title: 'The Growth of Gaming',
      body: 'How the pandemic has sparked fresh opportunities.',
    },
  ];

  return (
    <div className="h-dvh grid place-items-center">
      <Container maxWidth="lg" sx={{ pb: { xs: 10, md: 0 } }}>
        <Header />
        <main>
          <Grid container spacing={4} mb={8}>
            <Grid size={{ xs: 12, md: 8 }}>
              <Box sx={{ mb: 3 }}>
                <picture>
                  <source srcSet={heroDesk} media="(min-width: 600px)" />
                  <img
                    src={heroMob}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </picture>
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
                        '&:hover': {
                          backgroundColor: 'var(--clr-navy-950)',
                          color: 'white',
                        },
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
            >
              <Table sx={{ height: '100%' }}>
                <TableHead>
                  <TableRow>
                    <TableCell
                      padding="none"
                      variant="head"
                      sx={{ borderBottom: 'none' }}
                    >
                      <Typography
                        component="h2"
                        variant="h4"
                        sx={{ color: 'var(--clr-gold-400)' }}
                      >
                        NEW
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {newsData.map((item, index) => (
                    <TableRow key={item?.title}>
                      <TableCell
                        padding="none"
                        sx={{
                          py: 3,
                          borderColor: 'var(--clr-navy-600)',
                          borderBottom:
                            index === newsData.length - 1 ? 'none' : '',
                        }}
                      >
                        <Typography
                          component="h3"
                          mb={1}
                          sx={{
                            color: 'white',
                            fontSize: '20px',
                            fontWeight: 'bolder',
                          }}
                        >
                          {item?.title}
                        </Typography>
                        <Typography
                          sx={{
                            color: 'var(--clr-grey-300)',
                            fontSize: '15px',
                          }}
                        >
                          {item?.body}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Grid>
          </Grid>

          {/*------------ SERVICES SECTION --------- */}
          <Grid container>
            {servicesData.map((item) => (
              <Grid
                key={item.title}
                size={{ xs: 12, md: 12 / servicesData.length }}
                sx={{ display: 'flex', gap: '1.5rem' }}
              >
                <Box sx={{ width: '100px', flexShrink: 0 }}>
                  <img
                    src={item.imgSrc}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </Box>

                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}
                >
                  <Typography
                    component="h3"
                    sx={{
                      color: 'var(--clr-red-500)',
                      fontWeight: 'bold',
                      fontSize: '2rem',
                    }}
                  >
                    {item.number}
                  </Typography>
                  <Typography
                    component="h4"
                    sx={{
                      color: 'var(--clr-navy-900)',
                      fontWeight: 900,
                      fontSize: '18px',
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: 'var(--clr-navy-600)',
                      fontSize: '15px',
                    }}
                  >
                    {item.body}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </main>
      </Container>
    </div>
  );
}
