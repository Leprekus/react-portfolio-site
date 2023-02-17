import Card from '../components/Card/Card';
import Cardholder from '../components/Card/Cardholder';
import redditClient from '../assets/reddit-client.png'
export default function Projects () {
    return (
        <section className='flex items-center flex-col text-center'>
            <h1>My Project <span className='text-pink-400'>Showcase.</span></h1>
            <Cardholder>
                <Card bg={''}>projects card format</Card>
                <Card bg={redditClient}>projects card format</Card>
                <Card bg={''}>projects card format</Card>
                <Card bg={''}>projects card format</Card>
            </Cardholder>
        </section>
    )
}