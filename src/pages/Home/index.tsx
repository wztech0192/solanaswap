import { Landing } from './Landing';
import { Fade } from '@mui/material';

export const Home = () => {
  return (
    <Fade in>
      <div>
        <Landing />
      </div>
    </Fade>
  );
};
