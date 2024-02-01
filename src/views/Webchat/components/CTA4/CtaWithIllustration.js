import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import Container from 'components/Container';
import illustration from '../../../../assets/template/webchatIllustration5.png';
import Image from 'next/image';
import { Button } from '@mui/material';

const CtaWithIllustration = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Container maxWidth={{ md: 1450 }} marginBottom={10}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box
            maxWidth={600}
            height={1}
            width={1}
            align="center"
            data-aos={isMd ? 'fade-up-left' : 'fade-up'}
            data-aos-delay={100}
            data-aos-offset={100}
            data-aos-duration={600}
          >
            <Image alt="Natural Frameworks All In One Inbox" src={illustration} />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            marginTop={{ md: 2 }}
            data-aos={isMd ? 'fade-up-right' : 'fade-up'}
            data-aos-delay={100}
            data-aos-offset={100}
            data-aos-duration={600}
          >
            <Box marginBottom={2}>
              <Typography
                sx={{
                  textTransform: 'uppercase',
                  fontWeight: 'medium',
                }}
                gutterBottom
                color={'secondary'}
              >
                CHATBOT & FAQS
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                }}
              >
                Respond automatically to questions.
              </Typography>
            </Box>
            <Box marginBottom={3}>
              <Typography variant="h6" component="p" color="text.secondary">
                Sam, our chatbot, frees up your team&apos;s time by answering
                questions, scheduling appointments, and closing deals
                automatically. Sam learns business specific questions and
                delivers automated answers.
              </Typography>
            </Box>
            <Button variant={'contained'} size={'large'} href="pricing">
              Get started
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CtaWithIllustration;
