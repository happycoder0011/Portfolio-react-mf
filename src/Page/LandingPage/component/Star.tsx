import React from 'react'
import '../../../index.scss'
function Stars ({ children }) {
  const wH = window.innerHeight
  const wW = window.innerWidth
  const n = 600
  var stars: any[] = []
  for (let i = 0; i < n; i++) {
    var classname =
      i % 20 == 0 ? 'star star--big' : i % 9 == 0 ? 'star star--medium' : 'star'
    var mystyle = {
      position: 'relative',
      top: `${Math.round(Math.random() * wH)}px`,
      left: `${Math.round(Math.random() * wW)}px`,
      animationDuration: `${Math.round(Math.random() * 3000) + 3000}ms`,
      animationDelay: `${Math.round(Math.random() * 3000)}ms`,
      display: 'inline-flex'
    }
    stars.push(<div className={classname} style={mystyle} />)
  }

  return (
    <div>
      {stars}
      {children}
    </div>
  )
}

export default Stars
