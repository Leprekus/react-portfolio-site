import Card from '../components/Card/Card';
import Cardholder from '../components/Card/Cardholder';
import Layout from '../components/Layout';

import codecademy from '../assets/codecademy.png'
import uniformCentral from '../assets/uniform_central.png'
import aroc from '../assets/aroc.png'
import uniformCentralStoreFront from '../assets/uniform-central.png'
import clinicaMedica from '../assets/clinica-medica.png'
import { Link } from 'react-router-dom';
export default function About() {
  const headers = ['Uniform Central', 'Aroc Medical Clinic', 'Codecademy']
  const bgs = [uniformCentralStoreFront, clinicaMedica, uniformCentralStoreFront/*add codecademy bg*/]
  //prefetch images on site load
  const imgs = [uniformCentral, aroc, codecademy]
  const links = ['https://uniformcentral.ca/', 'https://clinica-medica.leprekus.dev/', 'https://clinica-medica.leprekus.dev/']
  const text = ['My job at Uniform Central is where I was able to use my hobby in real life for the first time. I started using python to write simple scripts in order to migrate the inventory from our previous software to shopify. I then organized and separated the products by brand, category, and brand among other tags and filters. This made finding products easier for people browsing online.', 
                'This is my first comission developed for a client. Which happened to be a medical clinic. ',
                'All of my skills and knowledge stemmed off the Codecademy Frontend Engineer Career path. From them on I have continued to further my learning and delving deeper by myself.']
  return (
    <Layout>
      <Cardholder title='My Experience'>
          {headers.map((header, i) => 
            <Card 
            header={header} 
            bg={bgs[i]} 
            img={imgs[i]}
            link={links[i]}>{ text[i] }</Card>)}
      </Cardholder>
      <div>
          <h2>About <span className='text-pink-400'>Me.</span></h2>
          <h5>
            Check the <Link to="/skills" class="link text-pink-400">Skills</Link> section for a TLDR;</h5>
          <p className='leading-8'>
            Proactiveness: I constantly look for ways to improve streamline workflows.  
            <br />
            <br />
            Communication: I am able to clearly and effectively convey ideas and collaborate with team members to achieve shared goals.
            <br />
            <br />
            Problem-solving: I have the ability to analyze complex issues and develop effective solutions. 
            <br />
            <br />
            Goal-oriented: I am highly goal-oriented individual whose focused on delivering results. 
            <br />
            <br />
            Adaptability: I am highly adaptable and able to work in a fast-paced, ever-changing environment. I am able to quickly learn new skills and technologies and integrate them into my work.
            <br />
            <br />
            Overall, I believe that my soft skills complement my technical skills as a frontend developer and make me a valuable asset to our team.
          </p>

      </div>
    </Layout>
  );
}
