import React, { useState } from 'react'
import { Fact } from '.'

function App(props: { facts: Fact[] }) {
  const [hovered, setHovered] = useState(false)
  const facts = props.facts.map((fact, i) => {
    return <li key={i}>{fact.text}</li>
  })
  return (
    <div>
      <div>
        <img
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          src='assets/logo.png'
          style={{
            height: '120px',
            filter: `blur(${hovered ? 2 : 0}px)`,
            transition: 'filter 333ms',
          }}
        />
      </div>
      <ul>{facts}</ul>
    </div>
  )
}

export default App
