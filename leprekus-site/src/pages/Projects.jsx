import Card from '../components/Card/Card';
import Cardholder from '../components/Card/Cardholder';
import redditClient from '../assets/reddit-client.png'

import mediumClone from '../assets/projects/medium-clone.png'
export default function Projects () {
    const links = ['https://tracked-projects.vercel.app/']
    //const imgs = [mediumClone]
    const headers = ['Medium Clone']
    const bgs = [mediumClone]
    const text = ['This is a great place to share your thoughts in this simple blog site! It is written in Typescript in the Nextjs framework and uses sanity as its CMS. Users are able to create and store posts in their account and share them with anyone who visits the website!']
    return (
        <section className='flex items-center flex-col text-center'>
            <h1>My Project <span className='text-pink-400'>Showcase.</span></h1>
            <Cardholder>
                {links.map((link, i) => (
                <Card
                    link={link}
                    header={headers[i]}
                    bg={bgs[i]}
                >{ text[i] }</Card>            
                ))}
                <Card bg={redditClient}>projects card format</Card>
                <Card bg={''}>projects card format</Card>
                <Card bg={''}>projects card format</Card>
            </Cardholder>
        </section>
    )
}