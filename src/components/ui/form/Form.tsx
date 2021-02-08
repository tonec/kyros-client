import React, { ComponentPropsWithoutRef } from 'react'
import { Form as BaseForm } from 'react-final-form'

type Props = ComponentPropsWithoutRef<typeof BaseForm>

function Form({ onSubmit, initialValues, render }: Props): JSX.Element {
  return <BaseForm onSubmit={onSubmit} initialValues={initialValues} render={render} />
}

export default Form
