import { Box, useTheme } from '@mui/material';
import Effect from 'vanta/dist/vanta.birds.min';
import { memo, useLayoutEffect, useRef } from 'react';

const AnimatedBackground = memo(() => {
  const theme = useTheme();

  const vantaRef = useRef<typeof Effect>();
  console.log(Effect);
  useLayoutEffect(() => {
    try {
      const vantaEffect = Effect({
        el: '#animated-bg',
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1,
        speedLimit: 0.3,
        color1: '#9945ff',
        color2: '#14f195',
        colorMode: 'lerp',
        separation: 48.0,
        quantity: 4.0,
        backgroundColor: '#000000',
      });
      vantaRef.current = vantaEffect;
      return () => {
        vantaEffect.destroy();
      };
    } catch (e) {
      console.error(e);
    }
  }, [theme.palette.background.default]);

  return (
    <>
      <Box
        id="animated-bg"
        width="100%"
        height="100vh"
        position="fixed"
        top={0}
        left={0}
      />
      <Box
        sx={{
          backdropFilter: 'blur(8px)',
        }}
        width="100%"
        height="100vh"
        position="fixed"
        top={0}
        left={0}
      />
    </>
  );
});

export default AnimatedBackground;
