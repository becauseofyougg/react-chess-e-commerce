import React from 'react'
import styled from 'styled-components'
import { Search, ShoppingCart } from '@material-ui/icons'
import { Badge } from "@material-ui/core";




const Container = styled.div `
    height: 60px;    
`

const Wrapper = styled.div `
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Left = styled.div `
    flex:1;
    display: flex;
    align-items: center;
`
const Language = styled.span`
    font-size: 14;
    cursor: pointer;
`

const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`
const Input = styled.input`
    border: none;
`
const Center = styled.div `
    flex: 1;
    text-align: center;
`
const Logo = styled.h1`
    font-weight: bold;
`
const Right = styled.div `
    flex:1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`

const Navbar = () => {
    return ( 
        <div>
            <Container>
                <Wrapper>
                    <Left>
                        <Language>En</Language>
                        <SearchContainer>
                            <Input></Input>
                            <Search style={{color: "gray", fontSize: "16px"}}></Search>
                        </SearchContainer>
                    </Left> 
                    <Center><Logo>Frodigen</Logo></Center>
                    <Right>
                        <MenuItem>Register</MenuItem>
                        <MenuItem>Sign in</MenuItem>
                        <MenuItem>
                                <Badge badgeContent={4} color="secondary">
                                    <ShoppingCart />
                                </Badge>
                        </MenuItem>
                    </Right>
                </Wrapper>
            </Container>
        </div>
    )
}

export default Navbar