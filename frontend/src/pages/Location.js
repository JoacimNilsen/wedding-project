import React from 'react'
import styled from 'styled-components'
import { Navbar} from 'components/Navbar'
import { Header, InfoText } from 'styles/TextStyle'
import { Button } from 'library/Button'

const LocationWrapper = styled.section`

`

export const Location = () => {
  
  return (
    <>
    <Navbar />
    <LocationWrapper>
    <Header>Where is the wedding?</Header>
    <InfoText>The wedding will take place at Enskede church and the closest subway is Sandsborg.
      After the ceremony we will dance all night at a venue in Slakthusområdet nearby. 
      If you would like to join us for breakfast, we will be staying at Quality Hotel Globe.
    <Button title='Book Quality Hotel' onClick={() => window.open('https://www.nordicchoicehotels.se/hotell/sverige/stockholm/quality-hotel-globe/')} />
    </InfoText>
  
    </LocationWrapper>
    </>
  )
}