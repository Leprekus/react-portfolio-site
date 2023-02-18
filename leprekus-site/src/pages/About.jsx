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
  const imgs = [uniformCentral, aroc, codecademy]
  const links = ['https://clinica-medica.leprekus.dev/', 'https://clinica-medica.leprekus.dev/', 'https://clinica-medica.leprekus.dev/']
  const text = ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores eligendi ex enim voluptatem repellat vel expedita soluta? Ab, maxime accusamus numquam sunt quas, eligendi soluta rem a, harum fugiat deleniti', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores eligendi ex enim voluptatem repellat vel expedita soluta? Ab, maxime accusamus numquam sunt quas, eligendi soluta rem a, harum fugiat deleniti', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores eligendi ex enim voluptatem repellat vel expedita soluta? Ab, maxime accusamus numquam sunt quas, eligendi soluta rem a, harum fugiat deleniti',]
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
            Proactiveness: I constantly look for ways to improve processes and streamline workflows. In order to ensure that projects are completed efficiently and effectively. 
            <br />
            Communication: I have excellent communication skills, both written and verbal. I am able to clearly and effectively convey ideas and collaborate with team members to achieve shared goals.
            <br />
            Problem-solving: I have great problem-solving skills and have the ability to analyze complex issues and develop effective solutions. 
            <br />
            Goal-oriented: I am highly goal-oriented individual whose focused on delivering results. 
            <br />
            Adaptability: I am highly adaptable and able to work in a fast-paced, ever-changing environment. I am able to quickly learn new skills and technologies and integrate them into my work.
            <br />
            Overall, I believe that my soft skills complement my technical skills as a frontend developer and make me a valuable asset to our team.
          </p>

      </div>
    </Layout>
  );
}
