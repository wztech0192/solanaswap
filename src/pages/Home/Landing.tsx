import SectionContainer from '@/components/SectionContainer';
import { RocketLaunch } from '@mui/icons-material';
import { Button, Stack, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const Landing = () => {
  return (
    <SectionContainer p={0}>
      <Stack
        height="100vh"
        alignItems="center"
        justifyContent="center"
        spacing={4}>
        <Typography
          sx={{
            fontSize: '36px',
            background: 'linear-gradient(45deg, #9945FF 0%, #14F195 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: '700 !important',
          }}
          typography={{
            xs: 'h3',
            sm: 'h2',
            md: 'h1',
          }}
          align="center">
          SolanaSwap
        </Typography>
        <Typography
          typography={{
            xs: 'h4',
            md: 'h2',
          }}
          align="center"
          sx={{
            fontWeight: '500 !important',
          }}>
          Get the Best Rates, Swap Instantly!
        </Typography>
        <Button
          variant="contained"
          startIcon={<RocketLaunch />}
          component={NavLink}
          to="/swap"
          sx={{
            padding: '12px 24px',
            fontSize: '1.25rem',
            fontWeight: '700 !important',
            background: 'linear-gradient(45deg, #9945FF 0%, #14F195 100%)',
          }}>
          Swap Now
        </Button>
      </Stack>
    </SectionContainer>
  );
};
