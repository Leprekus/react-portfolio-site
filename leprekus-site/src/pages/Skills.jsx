import Layout from '../components/Layout';
import Listholder from '../components/List/Listholder';
import ListItem from '../components/List/ListItem';
import cypress from '../assets/cypress.png';
import js from '../assets/js.png';
import python from '../assets/python.png';
import react from '../assets/react.png';
import redux from '../assets/redux.png';
export default function Skills () {
    const images = [cypress, js, python, react, redux];
    //replace JS with TS
    //add NextJs
    //Add Sanity
    const titles = ['Cypress', 'JavaScript', 'React', 'Redux'];
    const descriptions = ['End to End testing with cypress', 'Type safe Code'];
    return (
      <Layout>
        <Listholder>
          {titles.map((title, i) => (
            <ListItem
              title={title}
              img={images[i]}
              description={descriptions[i]}
            />
          ))}
        </Listholder>
        <div>
          <h1>My Skillset</h1>
        </div>
      </Layout>
    );
}