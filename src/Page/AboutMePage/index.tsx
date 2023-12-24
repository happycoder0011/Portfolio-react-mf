import React from 'react'
import Badge from '../../components/Badge/Badge'
import { data } from '../../data'

const AboutMePage = () => {
  return (
    <div className='flex flex-col max-w-screen-md justify-center m-auto'>
      <div>
        <img src='https://placehold.co/128' className='rounded-full' />
      </div>
      <div>
        <p className='text-2xl'>Sheetal Singh 👋</p>
        <p className='text-lg'>@sheetalssr · Bengaluru, Karnataka</p>
        {data.badges.map(({ icon, label }) => (
          <Badge Icon={icon} label={label} />
        ))}

        <div>
          Welcome to my world. Living my best life writing code, solving
          problem, reading literature, writing poetry, travelling places &
          experiencing life. Create.Cherish.Code.
          <div>
            I'm open to partnering on side projects, mentoring, brainstorming,
            beta testing new products, freelance website development,technical
            writing, joining a book club, reviewing book proposals, and writing
            blog posts.
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMePage
