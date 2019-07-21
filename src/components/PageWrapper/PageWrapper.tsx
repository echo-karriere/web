import React from 'react'
import {Content, Footer, Wrapper} from './style'
import {NavigationMenu} from "./components/NavigationMenu";

interface PageWrapperProps {
}

function PageWrapper(props: PageWrapperProps) {

  return (
    <Wrapper>
      <NavigationMenu/>
      <Content>
      </Content>
      <Footer>
        echo - Fagutvalget for informatikk
      </Footer>
    </Wrapper>
  )
}

export default PageWrapper