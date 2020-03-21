import React, {useState} from 'react'
import {Form, Input, Button, Title} from './styles'
import {useInputValue} from '../../hooks/useInputValue'

export const UserForm = ({onSubmit, title}) =>  {

const email = useInputValue('')
const password = useInputValue('')


  return (
    <React.Fragment>
      <Title>{title}</Title>
      <Form action="" onSubmit={onSubmit} >
        <Input type="text" placeholder="email" {...email} />
        {/* en email uso ...email porque las propiedades son las mismas q las etiquetas que tiene el input */}
        <Input type="password" placeholder="password" value={password.value} onChange={ password.onChange} />
        <Button type="submit"> {title} </Button>
      </Form>
    </React.Fragment>
  )
}
