import React from 'react'
import Bezier from '../../../../src'
import Example from '../works/Example'
import HermitCrab from '../works/HermitCrab'

const HomePage: React.FC = () => {
  return (
    <Bezier.Root>
      <HermitCrab />
      {/* <Example /> */}
    </Bezier.Root>
  )
}

export default HomePage