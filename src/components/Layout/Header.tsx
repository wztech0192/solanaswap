import {
  Box,
  Button,
  IconButton,
  Stack,
  styled,
  Typography,
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import logoSrc from '@/assets/logo.png';

const StyledBoxBar = styled(Box)(() => ({
  transition: '0.3s ease-in-out',
  zIndex: 2,
  width: '100%',
  position: 'fixed',
  backdropFilter: 'blur(2px)',
}));

const StyledImage = styled('img')({
  transition: '0.3s ease-in-out',
});

const scrollTo = (id?: string) => {
  setTimeout(() => {
    if (id) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, 100);
};

export const Header = ({ scrolled }: { scrolled: boolean }) => {
  return (
    <StyledBoxBar bgcolor={scrolled ? 'rgba(0,0,0, 0.5)' : 'transparent'}>
      <Stack
        direction="row"
        spacing={{
          xs: 1,
          md: 2,
        }}
        py={0.5}
        px={{
          xs: 0.5,
          sm: 1,
        }}
        alignItems="center">
        <IconButton color="inherit" component={NavLink} to="/" sx={{ p: 0 }}>
          <StyledImage
            src={logoSrc}
            alt="SolanaSwap"
            sx={{
              width: {
                xs: scrolled ? '48px' : '68px',
              },
              height: {
                xs: scrolled ? '48px' : '68px',
              },
            }}
          />
        </IconButton>
        <Typography fontWeight="bold" display={{ xs: 'none', sm: 'inline' }}>
          SolanaSwap
        </Typography>
        <Box flexGrow="1" />
        <Button
          size="large"
          component={NavLink}
          to="/"
          onClick={() => {
            scrollTo();
          }}>
          <b>HOME</b>
        </Button>
        <Button
          size="large"
          component={NavLink}
          to="/swap"
          onClick={() => {
            scrollTo();
          }}>
          <b>SWAP</b>
        </Button>
      </Stack>
    </StyledBoxBar>
  );
};
