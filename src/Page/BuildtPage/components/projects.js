import React from 'react'

import { data } from './../../../data';

function Projects () {

  const HandleClick = link => {
    window.open(link)
  }

  return (
      <div className='container h-screen overflow-auto'>
        {data.projects.map(({id,github,url,image}) => 
        <div className='card'>
          <div className='border'></div>
          <img src={image} width="396px" height="264px"/>
          <button
            className='github_button'
            id={id}
            onClick={() => HandleClick(github)}
          />
          <button
            className='project_button'
            id={id}
            onClick={() => HandleClick(url)}
          />
        </div>
        )}
      </div>
  )
}

export default Projects
