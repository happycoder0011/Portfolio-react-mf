import React from 'react'
import Badge from '../../components/Badge/Badge'
import profile from '../../../Assets/profile.jpg'
import { data } from '../../data'

const AboutMePage = () => {
  return (
    <div className='flex flex-col max-w-screen-md justify-center m-auto pt-40 pb-24 px-4 sm:pt-4 overflow-auto h-screen'>
      <div>
        <img src={profile} className='rounded-full' />
      </div>
      <div>
        <p className='text-2xl'>Sheetal Singh 👋</p>
        <p className='text-lg'>@sheetalssr · Bengaluru, Karnataka</p>
        {data.badges.map(({ icon, label }) => (
          <Badge Icon={icon} label={label} />
        ))}

        <div>
          <h4>Welcome to my world.</h4>
          <h4>Living my best life !!</h4>
          <h4> writing code,</h4>
          <h4>solving problem, reading literature,</h4>
          <h4>writing poetry, travelling places</h4>
          <h4>& experiencing life.</h4>
          <h4>Create . Cherish . Code . </h4>
          <br />
          <div>
            I'm open to partnering on{' '}
            <span className='hover:text-blue-500 cursor-pointer border-b border-dotted'>
              side projects,
            </span>{' '}
            <span className='hover:text-red-500 cursor-pointer border-b border-dotted'>
              mentoring,
            </span>{' '}
            <span className='hover:text-green-500 cursor-pointer border-b border-dotted'>
              brainstorming,
            </span>{' '}
            <span className='hover:text-yellow-500 cursor-pointer border-b border-dotted'>
              beta testing new products,
            </span>{' '}
            <span className='hover:text-red-100 cursor-pointer border-b border-dotted'>
              freelance website development,
            </span>{' '}
            <span className='hover:text-pink-500 cursor-pointer border-b border-dotted'>
              technical writing,
            </span>{' '}
            <span className='hover:text-purple-500 cursor-pointer border-b border-dotted'>
              joining a book club,
            </span>{' '}
            <span className='hover:text-yellow-500 cursor-pointer border-b border-dotted'>
              reviewing book proposals,
            </span>{' '}
            <span className='hover:text-green-500 cursor-pointer border-b border-dotted'>
              and writing blog posts.
            </span>{' '}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMePage
