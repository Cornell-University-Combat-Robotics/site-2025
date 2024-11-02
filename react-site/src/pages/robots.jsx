import nardo_whole from '../assets/nardo-whole.png';
import { Box, Stack, Typography } from '@mui/material';

export default function Robots() {
  return (
    <Box>
      <img src={nardo_whole} style={{ width: '100%', height: 'auto' }} />
      <Typography variant="h1" sx={{ fontFamily: 'Josefin Sans', mt: 5 }}>
        ROBOTS
      </Typography>
      <Typography variant="h3" sx={{ fontFamily: 'Josefin Sans', mt: 15 }}>
        UPCOMING ROBOTS
      </Typography>
      <Stack direction='row' spacing={5} sx={{ mt: 2 }}>
        <img src={nardo_whole} style={{ width: '50%', height: 'auto' }} />
        <Stack spacing={2}>
          <Typography variant='h4' align='left' sx={{ fontFamily: 'Josefin Sans' }}>Rimshot | Kinetic</Typography>
          <Typography variant='body' align='left' sx={{ fontFamily: 'Josefin Sans' }}>
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
    </Box>
  );
}
