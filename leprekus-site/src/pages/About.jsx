import Card from '../components/Card';
import Cardholder from '../components/Cardholder';
import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout>
      <Cardholder>
          <Card className='m-4'>Experience1 card format</Card>
          <Card className='m-4'>Experience2 card format</Card>
          <Card className='m-4'>Experience3 card format</Card>
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
