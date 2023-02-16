import Blob from '../components/Blob';
import memoji from '../assets/memoji.png';
import github from '../assets/github.png';
import instagram from '../assets/instagram.png';
import youtube from '../assets/youtube.png';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import Layout from '../components/Layout';
export default function Landing() {  
  return (
<Layout>
  
    <div className='
    w-full space-y-5 flex flex-col justify-center px-10
    md:w-1/2
    md:items-start
    '>
      <h2>Hello, It's Me</h2>
      <h1>Raul Rodriguez</h1>
      <h2>
        And I am a {' '}
        <span className='text-pink-400'>
          <TypeAnimation
          sequence={[
            'Frontend Developer', 1000,
            'Rock', 1000,
            'Team Player', 1000,
            'Goal Oriented Person', 1000
          ]}
          wrapper='span'
          cursor='false'
          repeat={Infinity}
  
          />
        </span>
      </h2>
      <p>
        Pleased to meet you! I am self-taught and have been satisfying customers for one year providing top of the line developer experience. My hobbies include coding, learning, and exercising.
      </p>
      <div className='flex flex-row gap-3'>
        <a href='https://github.com/Leprekus' target='_blank' className='border-pink-400 border-2 p-2 rounded-full'><img className='w-5 h-5' src={github} alt='icon'/></a>
        <a href='https://www.instagram.com/rc.rdz/' target='_blank' className='border-pink-400 border-2 p-2 rounded-full'><img className='w-5 h-5' src={instagram} alt='icon'/></a>
        <a href='https://www.youtube.com/@Leprekusgameswithppl/videos' target='_blank' className='border-pink-400 border-2 p-2 rounded-full'><img className='w-5 h-5' src={youtube} alt='icon'/></a>
      </div>
      <div className='flex gap-4'>
        <Link to='/contact' className='px-4 py-2 bg-pink-400 rounded-full'>Contact</Link>
        <button className='px-4 py-2 border-pink-400 border-2 rounded-full'>Download CV</button>
      </div>
    </div>
    <div id='bg-blob'
    className='w-full flex justify-center items-center
    md:w-1/2
    '
    style={{minWidth: 400}}
    >
    <img src={memoji} alt='avatar' className='max-w-sm max-h-full'/>
    </div>
  
</Layout>
  );
}
