import React from 'react'

import { Button, Field, SUI, TextInput } from '../..'

export default {
  title: 'Elements/Field',
  component: Field,

  argTypes: {
    size: {
      options: SUI.SIZES,
      control: { type: 'inline-radio' },
    },
  },

  args: {
    size: SUI.SIZE.MEDIUM,
  },
}

export const _Field = (props: any) => (
  <form onSubmit={event => event.preventDefault()}>
    <p>
      &lt;Field /&gt; is just a &lt;div /&gt; with some vertical margin. It is <b>not</b> a{' '}
      <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset" rel="noreferrer" target="_blank">
        fieldset
      </a>
      .
    </p>

    <Field {...props}>
      <TextInput label="Email" type="email" />
    </Field>
    <Field {...props}>
      <TextInput label="Password" type="password" />
    </Field>
    <Field {...props}>
      <Button type="submit">Sign Up</Button>
    </Field>
  </form>
)
