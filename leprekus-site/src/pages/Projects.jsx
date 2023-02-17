import Card from '../components/Card/Card';
import Cardholder from '../components/Card/Cardholder';

export default function Projects () {
    return (
        <section className='flex items-center flex-col text-center'>
            <h1>My Project <span className='text-pink-400'>Showcase.</span></h1>
            <Cardholder>
                <Card>projects card format</Card>
                <Card>projects card format</Card>
                <Card>projects card format</Card>
                <Card>projects card format</Card>
            </Cardholder>
        </section>
    )
}