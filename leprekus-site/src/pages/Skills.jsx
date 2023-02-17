import Layout from '../components/Layout';
import Listholder from '../components/List/Listholder';
import ListItem from '../components/List/ListItem';
import cypress from '../assets/cypress.png';
import js from '../assets/js.png';
import python from '../assets/python.png';
import react from '../assets/react.png';
import redux from '../assets/redux.png';
import { Divider } from '@mui/material';
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
        <div className='w-full flex justify-center mb-10'>
          <ul>
              <li>
                  <h1>Soft <span className='text-pink-400
                  '>Skills.</span></h1>
              </li>
              <li>
                  <p>lorem</p>
              </li>
              <hr className='h-px my-4 bg-slate-600 border-0'/>
              <li>
                  <p>lorem</p>
              </li>
              <hr className='h-px my-4 bg-slate-600 border-0'/>
              <li>
                  <p>lorem</p>
              </li>
              <hr className='h-px my-4 bg-slate-600 border-0'/>
              <li>
                  <p>lorem</p>
              </li>
          </ul>
        </div>
      </Layout>
    );
}