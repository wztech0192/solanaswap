import SectionContainer from '@/components/SectionContainer';
import { Fade, Stack, Typography } from '@mui/material';
import { useLayoutEffect } from 'react';

export const Swap = () => {
  useLayoutEffect(() => {
    const initPolyswapApp = () => {
      window.InitPolyswapApp('polyswap-root', {
        marketer: 'SolanaSwap',
        defaultSlippage: 5,
        affiliateFee: 1.5,

        affiliateFeeRecipient: '0x5163593B9512C57b7F5f8ebc7c12B34615cdE49E',
        affiliateFeeRecipientByChains: {
          8451113: '7P4CPEx9C51FegAHVy87jP7YrvuejmQEeRJ7uzjyq3rA',
        },
        enableDarkMode: true,
        primaryColorDark: '#81f1db',
        chainId: 8451113,
        defaultSelectedTokenByChains: {
          137: {
            defaultOutputToken: '0xb7486718ea21C79BBd894126f79F504fd3625f68',
          },
          8451113: {
            defaultOutputToken: '9hX5qubXT56uhtDWuUqiYLu5eFfrBi3YizfX4nFPmqk',
          },
        },
        fontFamily: '"Exo"',
        overrides: {
          Card: {
            sx: {
              backdropFilter: 'blur(15px)',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              border: '1px solid rgba(50, 50, 50)',
              background:
                'linear-gradient(45deg, rgba(153, 69, 255, 0.3) 0%, rgba(0, 0, 0, 0.8) 30%, rgba(0, 0, 0, 0.8) 70%, rgba(20, 241, 149, 0.2) 100%)',
            },
          },
        },
        showSwapRouteCard: true,
        showPriceComparisonCard: true,
        showTokenInfoCard: true,
      });
    };

    if (window.InitPolyswapApp) {
      initPolyswapApp();
      return;
    }

    const script = document.createElement('script');
    script.src =
      'https://cdn.jsdelivr.net/npm/@polyswapai/widget@latest/bundles/polyswap-app.min.js';
    script.async = true;

    script.onload = initPolyswapApp;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Fade in>
      <div>
        <SectionContainer
          minHeight="100vh"
          pt={{
            xs: '75px',
            md: '125px',
          }}>
          <Stack alignItems="center" justifyContent="center">
            <Typography
              gutterBottom
              width="auto"
              sx={{
                fontSize: '36px',
                background: 'linear-gradient(90deg, #9945FF 0%, #14F195 100%)',
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
          </Stack>
          <Stack width="100%" alignItems="center" id="polyswap-root"></Stack>
        </SectionContainer>
      </div>
    </Fade>
  );
};
