import styled from "styled-components"

export const LoginButton = styled.button`
  background-color: black;
  padding: 1rem;
  border: none;
  border-radius: 5rem;
  `

  export const LoginLink = styled.a`
  color: #1db954;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
`

export const Container = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  height:100vh;
  width:100vw;
  background-color: #1db954;
  gap: 5rem;
  img {
    height:20vh;
  }
`