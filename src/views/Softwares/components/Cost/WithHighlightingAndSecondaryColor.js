import React from 'react';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

import Container from 'components/Container';

const mock = [
  {
    title: 'AutoCAD',
    price: '$2,346',
    features: [
      'Powerful Design Tool: AutoCAD is a leading CAD software that empowers professionals and students to create precise 2D and 3D designs with ease.',
      'Versatile Functionality: Design anything from architectural blueprints to mechanical parts and electrical schematics, making it ideal for various industries.',
      'Intuitive Interface: User-friendly interface enables both beginners and experienced designers to navigate and access a wide range of tools, ensuring a smooth workflow.',
      'Collaboration and Customization: Collaborate seamlessly with team members, customize menus and shortcuts, and enhance productivity through teamwork.',
    ],
    isHighlighted: true,
    paymentLink: 'https://buy.stripe.com/bIY8xj3r50oW3GU5kq',
  },
  {
    title: 'Auto Desk Revit',
    price: '$3,366',
    features: [
      'Comprehensive Building Information Modeling (BIM) Tool: Autodesk Revit is a powerful software for architects, engineers, and construction professionals to create, analyze, and manage building designs in a collaborative BIM environment.',
      'Integrated Design and Documentation: Revit enables seamless integration of design and documentation processes, allowing users to create intelligent 3D models that automatically generate accurate construction documentation.',
      "Parametric Components and Families: With Revit's extensive library of parametric components and families, users can easily create and manipulate intelligent building elements, saving time and ensuring design consistency.",
      "Collaborative Workflows: Facilitate effective collaboration among team members with Revit's cloud-based collaboration tools, enabling real-time collaboration, model coordination, and shared project data.",
      'Accurate Analysis and Simulation: Perform accurate energy analysis, structural analysis, and other simulations directly within Revit, allowing users to optimize building performance and make informed design decisions.',
    ],
    isHighlighted: true,
    paymentLink: 'https://buy.stripe.com/7sI28V1iXdbIelydQX',
  },
  {
    title: 'Core Impact Pro',
    price: '$15,120',
    features: [
      "Comprehensive Penetration Testing Solution: Core Impact Pro is a leading penetration testing software that enables cybersecurity professionals to simulate real-world attacks and identify vulnerabilities in their organization's network, systems, and applications.",
      'Advanced Exploitation Techniques: Core Impact Pro provides a wide range of advanced exploitation techniques, including remote code execution, privilege escalation, and social engineering, allowing users to thoroughly test the security of their infrastructure.',
      "Automated Vulnerability Assessment: Streamline the vulnerability assessment process with Core Impact Pro's automated scanning capabilities, which help identify and prioritize potential security weaknesses for further investigation.",
      "Multi-Vector Attack Simulations: Conduct sophisticated multi-vector attack simulations using Core Impact Pro, replicating complex attack scenarios to assess the overall security posture of your organization's assets.",
      'Detailed Reporting and Remediation Guidance: Generate comprehensive reports with detailed findings and recommended remediation steps using Core Impact Pro. This helps organizations prioritize and address security vulnerabilities effectively.',
    ],
    isHighlighted: true,
    paymentLink: 'https://buy.stripe.com/7sI5l7e5J6Nkcdq00a',
  },
  {
    title: 'ExWorks',
    price: '$60,000',
    features: [
      "Efficient Shipping Solution: ExWorks is a comprehensive shipping service that offers efficient handling and transportation of goods from the seller's location to the buyer's designated destination.",
      'Flexible Arrangements: ExWorks provides flexibility for buyers and sellers to negotiate and determine the specific responsibilities and costs involved in the shipping process, allowing for customized arrangements.',
      'Simplified Logistics: With ExWorks, the seller is responsible for preparing the goods for export, including packaging, documentation, and customs clearance, simplifying logistics for the buyer.',
      'Cost Control: ExWorks allows buyers to have greater control over shipping costs, as they can select their preferred shipping provider and manage transportation arrangements based on their budget and requirements.',
      'Global Reach: ExWorks enables international trade by providing shipping services worldwide, connecting buyers and sellers across different countries and facilitating seamless global transactions.',
    ],
    isHighlighted: true,
    paymentLink: 'https://buy.stripe.com/cN214R6Dhb3Adhu4gp',
  },
];

const WithHighlightingAndSecondaryColor = () => {
  const theme = useTheme();

  return (
    <Container>
      <Grid
        container
        spacing={4}
        justifyContent="center" // Center horizontally
        alignItems="center" // Center vertically
      >
        <Grid item md={12} data-aos={'zoom-in-down'} data-aos-offset={150}>
          <Typography align="center" fontWeight={700} variant="h3">
            Available Softwares
          </Typography>
        </Grid>
        {mock.map((item, i) => (
          <Grid item xs={12} md={8} key={i}>
            <Box
              component={Card}
              height={1}
              display={'flex'}
              flexDirection={'column'}
              boxShadow={item.isHighlighted ? 4 : 0}
              data-aos={'flip-left'}
              data-aos-delay={i * 100}
              data-aos-offset={200}
            >
              <CardContent
                sx={{
                  padding: 4,
                }}
              >
                <Box
                  marginBottom={4}
                  display={'flex'}
                  justifyContent={'space-between'}
                >
                  <Typography variant={'h4'}>
                    <Box component={'span'} fontWeight={600}>
                      {item.title}
                    </Box>
                  </Typography>
                  <Box display={'flex'} alignItems={'baseline'}>
                    <Typography variant={'h4'} color={'primary'}>
                      <Box component={'span'} fontWeight={600}>
                        {item.price}
                      </Box>
                    </Typography>
                    <Typography variant={'subtitle2'} color={'text.secondary'}>
                      /yr
                    </Typography>
                  </Box>
                </Box>
                <Grid container spacing={1}>
                  {item.features.map((feature, j) => (
                    <Grid item xs={12} key={j}>
                      <Box
                        component={ListItem}
                        disableGutters
                        width={'auto'}
                        padding={0}
                        data-aos={'fade-right'}
                        data-aos-delay={i * 100}
                        data-aos-offset={200}
                        data-aos-duration={1000}
                      >
                        <Box
                          component={ListItemAvatar}
                          minWidth={'auto !important'}
                          marginRight={2}
                        >
                          <Box
                            component={Avatar}
                            bgcolor={theme.palette.secondary.main}
                            width={20}
                            height={20}
                          >
                            <svg
                              width={12}
                              height={12}
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </Box>
                        </Box>
                        <ListItemText primary={feature} />
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
              <Box flexGrow={1} />
              <CardActions sx={{ justifyContent: 'flex-end', padding: 4 }}>
                <Button
                  size={'large'}
                  variant={'contained'}
                  href={item.paymentLink}
                  target="blank"
                >
                  Purchase
                </Button>
              </CardActions>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default WithHighlightingAndSecondaryColor;
