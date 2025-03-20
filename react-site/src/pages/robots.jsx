import nardo_whole from '../assets/nardo-whole.png';
import { Box, Container, Stack, Typography } from '@mui/material';
import RobotCard from '../components/RobotCard';
import RobotCardList from '../components/RobotCardList';
import StickyBox from '../components/StickyBox';

export default function Robots() {
  return (
    <Container maxWidth="md">
      <Box display="flex" flexDirection="column" alignItems="center">
        <StickyBox />
        <Typography variant="h1" sx={{ fontFamily: 'Josefin Sans', mt: 5 }}>
          ROBOTS
        </Typography>
        <Typography variant="h3" sx={{ fontFamily: 'Josefin Sans', mt: 15 }}>
          UPCOMING ROBOTS
        </Typography>

        <Box display='flex' justifyContent='center' alignItems='center' sx={{ mt: 5 }}>
          <Typography width='75%' sx={{ fontFamily: 'Josefin Sans' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consectetur nisl quis diam iaculis ultricies.
            Proin at fringilla lacus, vulputate viverra nisl. Phasellus et nibh sed metus varius fringilla in eu nulla.
            Donec convallis eros id eros elementum gravida. Phasellus at pulvinar lacus.
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            Aenean ut ipsum vel massa condimentum feugiat. Donec at molestie nisi.
            Suspendisse suscipit arcu vitae venenatis tempor. Duis non arcu sem. Donec sit amet ultricies mi, id varius eros.
            Integer elementum lobortis mi vitae varius.
          </Typography>
        </Box>

        <Stack direction='row' spacing={5} sx={{ mt: 5 }}>
          <img src={nardo_whole} style={{ width: '50%', height: 'auto' }} />
          <Stack spacing={2} mt='10'>
            <Typography variant='h4' align='left' sx={{ fontFamily: 'Josefin Sans' }}>Rimshot | Kinetic</Typography>
            <Typography variant='body' align='left' width='80%' sx={{ fontFamily: 'Josefin Sans' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consectetur nisl quis diam iaculis ultricies.
              Proin at fringilla lacus, vulputate viverra nisl. Phasellus et nibh sed metus varius fringilla in eu nulla.
              Donec convallis eros id eros elementum gravida. Phasellus at pulvinar lacus.
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
              Aenean ut ipsum vel massa condimentum feugiat. Donec at molestie nisi.
              Suspendisse suscipit arcu vitae venenatis tempor. Duis non arcu sem. Donec sit amet ultricies mi, id varius eros.
              Integer elementum lobortis mi vitae varius.
            </Typography>
          </Stack>
        </Stack>

        <Stack direction='row' spacing={5} sx={{ mt: 5 }}>
          <Stack spacing={2} mt='10'>
            <Typography variant='h4' align='left' sx={{ fontFamily: 'Josefin Sans' }}>Capsize | Sportsman</Typography>
            <Typography variant='body' align='left' width='80%' sx={{ fontFamily: 'Josefin Sans' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consectetur nisl quis diam iaculis ultricies.
              Proin at fringilla lacus, vulputate viverra nisl. Phasellus et nibh sed metus varius fringilla in eu nulla.
              Donec convallis eros id eros elementum gravida. Phasellus at pulvinar lacus.
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
              Aenean ut ipsum vel massa condimentum feugiat. Donec at molestie nisi.
              Suspendisse suscipit arcu vitae venenatis tempor. Duis non arcu sem. Donec sit amet ultricies mi, id varius eros.
              Integer elementum lobortis mi vitae varius.
            </Typography>
          </Stack>
          <img src={nardo_whole} style={{ width: '50%', height: 'auto' }} />
        </Stack>

        <Stack direction='row' spacing={5} sx={{ mt: 5 }}>
          <img src={nardo_whole} style={{ width: '50%', height: 'auto' }} />
          <Stack spacing={2} mt='10'>
            <Typography variant='h4' align='left' sx={{ fontFamily: 'Josefin Sans' }}>Huey | Autonomous</Typography>
            <Typography variant='body' align='left' width='80%' sx={{ fontFamily: 'Josefin Sans' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consectetur nisl quis diam iaculis ultricies.
              Proin at fringilla lacus, vulputate viverra nisl. Phasellus et nibh sed metus varius fringilla in eu nulla.
              Donec convallis eros id eros elementum gravida. Phasellus at pulvinar lacus.
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
              Aenean ut ipsum vel massa condimentum feugiat. Donec at molestie nisi.
              Suspendisse suscipit arcu vitae venenatis tempor. Duis non arcu sem. Donec sit amet ultricies mi, id varius eros.
              Integer elementum lobortis mi vitae varius.
            </Typography>
          </Stack>
        </Stack>

        <Typography variant="h3" sx={{ fontFamily: 'Josefin Sans', mt: 15 }}>
          RETIRED ROBOTS
        </Typography>

        <Box display='flex' justifyContent='center' alignItems='center' sx={{ mt: 5 }}>
          <Typography width='75%' sx={{ fontFamily: 'Josefin Sans' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consectetur nisl quis diam iaculis ultricies.
            Proin at fringilla lacus, vulputate viverra nisl. Phasellus et nibh sed metus varius fringilla in eu nulla.
            Donec convallis eros id eros elementum gravida. Phasellus at pulvinar lacus.
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            Aenean ut ipsum vel massa condimentum feugiat. Donec at molestie nisi.
            Suspendisse suscipit arcu vitae venenatis tempor. Duis non arcu sem. Donec sit amet ultricies mi, id varius eros.
            Integer elementum lobortis mi vitae varius.
          </Typography>
        </Box>

        <RobotCardList type='Retired' capacity={3} />

        <Typography variant="h3" sx={{ fontFamily: 'Josefin Sans', mt: 15 }}>
          3 LB ROBOTS
        </Typography>

        <Box display='flex' justifyContent='center' alignItems='center' sx={{ mt: 5 }}>
          <Typography width='75%' sx={{ fontFamily: 'Josefin Sans' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consectetur nisl quis diam iaculis ultricies.
            Proin at fringilla lacus, vulputate viverra nisl. Phasellus et nibh sed metus varius fringilla in eu nulla.
            Donec convallis eros id eros elementum gravida. Phasellus at pulvinar lacus.
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            Aenean ut ipsum vel massa condimentum feugiat. Donec at molestie nisi.
            Suspendisse suscipit arcu vitae venenatis tempor. Duis non arcu sem. Donec sit amet ultricies mi, id varius eros.
            Integer elementum lobortis mi vitae varius.
          </Typography>
        </Box>

        {[...Array(3)].map((_, index) => (
          <Stack
            key={index}
            direction={{ xs: 'column', sm: index % 2 === 0 ? 'row' : 'row-reverse' }}
            spacing={5}
            sx={{ mt: 5, width: '100%', maxWidth: '1200px' }}
          >
            <Box sx={{ flex: 1 }}>
              <img
                src={nardo_whole}
                alt="Example"
                style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
              />
            </Box>
            <Stack spacing={2} sx={{ flex: 1 }}>
              <Typography variant="h4" align="left" sx={{ fontFamily: 'Josefin Sans' }}>
                {index === 0 ? 'Rimshot | Kinetic' : index === 1 ? 'Capsize | Sportsman' : 'Huey | Autonomous'}
              </Typography>
              <Typography variant="body1" align="left" sx={{ fontFamily: 'Josefin Sans', lineHeight: 1.6 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consectetur nisl quis diam iaculis ultricies.
                Proin at fringilla lacus, vulputate viverra nisl. Phasellus et nibh sed metus varius fringilla in eu nulla.
                Donec convallis eros id eros elementum gravida.
              </Typography>
            </Stack>
          </Stack>
        ))}
      </Box>
        <RobotCardList type='Three_lb' capacity={4} />

      </Box>
    </Container>
      <RobotCardList type='Retired' capacity={3} />

      <Typography variant="h3" sx={{ fontFamily: 'Josefin Sans', mt: 15 }}>
        3 LB ROBOTS
      </Typography>

      <Box display='flex' justifyContent='center' alignItems='center' sx={{ mt: 5 }}>
        <Typography width='75%' sx={{ fontFamily: 'Josefin Sans' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consectetur nisl quis diam iaculis ultricies.
          Proin at fringilla lacus, vulputate viverra nisl. Phasellus et nibh sed metus varius fringilla in eu nulla.
          Donec convallis eros id eros elementum gravida. Phasellus at pulvinar lacus.
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          Aenean ut ipsum vel massa condimentum feugiat. Donec at molestie nisi.
          Suspendisse suscipit arcu vitae venenatis tempor. Duis non arcu sem. Donec sit amet ultricies mi, id varius eros.
          Integer elementum lobortis mi vitae varius.
        </Typography>
      </Box>

      <RobotCardList type='Three_lb' capacity={4} />
      {/* capacity indicates how many cards per row */}

    </Box>
  );
}
