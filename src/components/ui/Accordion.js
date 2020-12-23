import React from 'react'
import { childrenType } from 'types'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

function AccordionSummary({ children }) {
  return (
    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
      {children}
    </ExpansionPanelSummary>
  )
}

AccordionSummary.propTypes = {
  children: childrenType.isRequired,
}

function AccordionDetails({ children }) {
  return <ExpansionPanelDetails>{children}</ExpansionPanelDetails>
}

AccordionDetails.propTypes = {
  children: childrenType.isRequired,
}

function AccordionPanel({ children }) {
  return <ExpansionPanel square>{children}</ExpansionPanel>
}

AccordionPanel.propTypes = {
  children: childrenType.isRequired,
}

function Accordion() {}

Accordion.Panel = AccordionPanel
Accordion.Summary = AccordionSummary
Accordion.Details = AccordionDetails

export default Accordion
