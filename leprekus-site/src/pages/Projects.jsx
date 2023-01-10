import { Page } from "../components/Page"

export const Projects = () => {
    const items = [<div style={{ background: 'red', width: '100%', height: '100%' }}/>]

    return (
        <Page
        title='Browse My Projects'
        text='These are my most recent projects that I made as part of the Codecademy Frontend Engineer Career Path.'
        items={items}
        />
        
    ) 
}