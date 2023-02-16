import Blob from '../components/Blob';
import memoji from '../assets/memoji.png';
export default function Landing() {
  return (
    <section className="h-full flex flex-col w-full
    md:flex-row
    ">
      <div className='
      w-full space-y-5 flex flex-col justify-center items-center px-10
      md:w-1/2
      md:items-start
      '>
        <h2>Hello, It's Me</h2>
        <h1>Raul Rodriguez</h1>
        <h2>
          And I am a <span className="text-pink-400">Frontend Developer.</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
          deleniti inventore blanditiis necessitatibus perferendis quisquam
          corporis ad ut dignissimos nam quo doloremque similique excepturi,
          consectetur tempora provident aliquid pariatur veniam.
        </p>
        <ul>
          <li>github</li>
          <li>instagram</li>
          <li>linkedin</li>
        </ul>
        <button>Download CV</button>
      </div>

      <div id='bg-blob' 
      className='w-full flex justify-center items-center
      md:w-1/2
      '
      style={{minWidth: 400}}
      >
      <img src={memoji} alt='avatar' className='max-w-sm max-h-full'/>
      </div>
    </section>
  );
}
