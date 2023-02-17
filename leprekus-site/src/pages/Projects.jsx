import Layout from '../components/Layout';
import Listholder from '../components/List/Listholder';
import ListItem from '../components/List/ListItem';
import cypress from '../assets/cypress.png'
export default function Projects() {
    const images = [cypress]
    const titles = ['Cypress']
    const descriptions = ['End to End testing with cypress']
  return (
    <Layout>
      <Listholder>
        {titles.map((title, i) => 
        <ListItem
        title={title}
        img={images[i]}
        description={descriptions[i]}
        />)}
      </Listholder>
      <div>
        <h1>My Skillet</h1>
      </div>
    </Layout>
  );
}
