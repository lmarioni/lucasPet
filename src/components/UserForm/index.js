import React, {useState} from 'react'
import {Form, Input, Button, Title, Error} from './styles'
import {useInputValue} from '../../hooks/useInputValue'

export const UserForm = ({error, onSubmit, title, disabled}) =>  {

const email = useInputValue('')
const password = useInputValue('')

const handleSubmit = (event) => {
  event.preventDefault();
  onSubmit({email: email.value, password: password.value});
}

  return (
    <React.Fragment>
      <Form onSubmit={handleSubmit} disabled={disabled} >
      <Title>{title}</Title>
        <Input type="text" placeholder="email" {...email}  disabled={disabled} />
        {/* en email uso ...email porque las propiedades son las mismas q las etiquetas que tiene el input */}
        <Input type="password" placeholder="password" value={password.value} onChange={ password.onChange} disabled={disabled} />
        <Button disabled={disabled} type="submit"> {title} </Button>
      </Form>
        {error && <Error>{error}</Error> }
    </React.Fragment>
  )
}
