import React from 'react'
import {IHeader} from './types'

import { Button } from '../Button'
import logo from '../../assets/logo-dio.png'

import {
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper 
 } from './styles'

const Header = ({autenticado}: IHeader) => {
  return (
    <Wrapper>
        <Container>
            <Row>
                <img src={logo} alt="Dio Logo" />
                {autenticado? (
                    <>
                        <BuscarInputContainer>
                            <Input placeholder='Buscar...' />
                        </BuscarInputContainer>
                        <Menu> Live Code</Menu>
                        <Menu>Global</Menu>
                    </>
                ) : null}
            </Row>
            <Row>
                {autenticado? (
                    <UserPicture src='https://avatars.githubusercontent.com/u/43899843?s=400&u=4548660a5ee4b348dfcf86fd8f8fdbf9e12d298e&v=4'/>
                ) : (
                    <>
                        <MenuRight href="#">Home</MenuRight>
                        <Button title ="Entrar" />
                        <Button title ="Cadastrar" />
                    </>
                )}
            </Row>
        </Container>
    </Wrapper>
  )
}

export { Header } 