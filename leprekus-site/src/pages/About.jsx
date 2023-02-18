import Card from '../components/Card/Card';
import Cardholder from '../components/Card/Cardholder';
import Layout from '../components/Layout';

import codecademy from '../assets/codecademy.png'
import uniformCentral from '../assets/uniform_central.png'
import aroc from '../assets/aroc.png'
import uniformCentralStoreFront from '../assets/uniform-central.png'
import clinicaMedica from '../assets/clinica-medica.png'
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
          <h2>About <span className='text-pink-400'>Me</span></h2>
          <h5>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat nulla,
            ex laboriosam, repudiandae labore voluptatibus numquam sit ipsum
            incidunt amet harum vero nostrum ut suscipit sunt quam minus aut
            repellat.
          </h5>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat nulla,
            ex laboriosam, repudiandae labore voluptatibus numquam sit ipsum
            incidunt amet harum vero nostrum ut suscipit sunt quam minus aut
            repellat.
          </p>
      </div>
    </Layout>
  );
}
