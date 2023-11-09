import React from 'react'
import Section1 from './Section1/Success1'
import Section2 from './Section2/Success2'
import SuccessData from './Section2/SuccessData'
const Index = () => {
  return( 
  <>
  <Section1/>
  <Section2 data={SuccessData}/>
  </>
  )
}

export default Index
