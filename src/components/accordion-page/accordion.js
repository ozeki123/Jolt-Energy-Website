import './accordion.scss'

import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
        "& .MuiAccordion-root:before": {
            backgroundColor: "white",
          },
        "& .MuiPaper-root": {
            boxShadow: 'none'
        }
    },
    accordion: {
        border: 'none',
        boxShadow: 'none',
        
    },

    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15.5),
      fontWeight: 'bold',
      color: 'black',
      letterSpacing: -0.2, 
      lineHeight: 3
    },

    textSection: {
        fontSize: theme.typography.pxToRem(12.9), 
        lineHeight: 1.7
        
    }
  }));


const AccordionSection = () => {
    const classes = useStyles();
        const [expanded, setExpanded] = React.useState(false);

        const handleChange = (panel) => (event, isExpanded) => {
            setExpanded(isExpanded ? panel : false);
        };
    return (
        <div className={classes.root}>
        <h1>How it works</h1>
            <Accordion className={classes.accordion} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                >
                    <Typography className={classes.secondaryHeading}>We're committed to making visions reality</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className={classes.textSection}>
                    Select a plan that fits your requirements. After purchasing, an expert will contact you shortly for consultation. In this step we will have the you and our expert discuss the desired scope of installation. and its plausibility. 

The expert will identify whether or not the selected equipment you purchased can be installed in your home or not, and if any additional costs arise from installation. 
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
                >
                <Typography className={classes.secondaryHeading}>
                    Design specifications tailored to you
                </Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography className={classes.textSection}>
                    Our design philosophy revolves around your input. 
                    Our goal is to provide a service that makes you happy, 
                    and to achieve that we want you to be a 100% onboard with all the decisions regarding the design.
                    At every step, our designers will provide a mockup of its appearance and features.
                    We will continue to customize the design until you are satisfied with the result. 
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
                >
                    <Typography className={classes.secondaryHeading}>
                        We provide the resources you need
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography className={classes.textSection}>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                    vitae egestas augue. Duis vel est augue.
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
                >
                    <Typography className={classes.secondaryHeading}>
                        Consultation prior to purchase
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                    vitae egestas augue. Duis vel est augue.
                </Typography>
                </AccordionDetails>
            </Accordion>
    </div>
    )
}

export default AccordionSection;