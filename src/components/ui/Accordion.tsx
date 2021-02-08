import React from 'react'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

interface AccordionSummaryProps {
  children: React.ReactNode
}

function AccordionSummary({ children }: AccordionSummaryProps): JSX.Element {
  return <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>{children}</ExpansionPanelSummary>
}

type AccordionDetailsProps = {
  children: React.ReactNode
}

function AccordionDetails({ children }: AccordionDetailsProps): JSX.Element {
  return <ExpansionPanelDetails>{children}</ExpansionPanelDetails>
}

type AccordionPanelProps = {
  children: React.ReactElement
}

function AccordionPanel({ children }: AccordionPanelProps): JSX.Element {
  return <ExpansionPanel square>{children}</ExpansionPanel>
}

function Accordion(): null {
  return null
}

Accordion.Panel = AccordionPanel
Accordion.Summary = AccordionSummary
Accordion.Details = AccordionDetails

export default Accordion
