import Card from '../components/Card/Card';
import Cardholder from '../components/Card/Cardholder';
import Layout from '../components/Layout';

import codecademy from '../assets/codecademy.png'
import uniformCentral from '../assets/uniform_central.png'
import aroc from '../assets/aroc.png'
export default function About() {
  return (
    <Layout>
      <Cardholder title='My Experience'>
          <Card header='Uniform Central' img={uniformCentral}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores eligendi ex enim voluptatem repellat vel expedita soluta? Ab, maxime accusamus numquam sunt quas, eligendi soluta rem a, harum fugiat deleniti.</Card>
          <Card header='Aroc Medical Clinic' img={aroc}>Experience2 card format</Card>
          <Card header='Codecademy' img={codecademy}>Experience3 card format</Card>
      </Cardholder>
      <div>
          <h2>About Me</h2>
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
