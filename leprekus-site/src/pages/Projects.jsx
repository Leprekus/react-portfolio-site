import { Page } from "../components/Page"
import redditClientImg from '../assets/reddit-client.png'
import pomodoroTimerImg from '../assets/pomodoro-timer.png'
export const Projects = () => {
    const items = [
   
        <a
        className="project"
        href="https://reddit-client.leprekus.dev/"
        target='_blank'
        style={{
        background: `url(${redditClientImg})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
         width: 200,
         height: '100%' }}/>,
        <a
        className="project"
        href="https://pomodoro-timer.leprekus.dev/"
        target='_blank'
        style={{
        background: `url(${pomodoroTimerImg})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
         width: 200,
         height: '100%' }}/>

    ]

    return (
        <Page
        title='Browse My Projects'
        text='These are my most recent projects that I made as part of the Codecademy Frontend Engineer Career Path.'
        items={items}
        displayItems={2}
        caption='Reddit Clone'
        />
        
    ) 
}