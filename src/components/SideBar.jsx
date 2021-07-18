import React from 'react'
import styled from 'styled-components'

function SideBar() {
    return (
        
            <Container>
                <h1>Side Bar</h1>
            </Container>
        
    )
}

const Container = styled.div`
    min-width:400px;
    backdrop-filter:blur(35px);
    background-color:rgb(255,255,255,0.8)
`

export default SideBar
