import { ContactForm } from "../components/ContactForm/ContactForm"
import { Page } from "../components/Page"

export const ContactMe = () => {
    const items = []
    return (
        <Page
        title="Let's get in Touch"
        text="I'm stoked that you got this far! Send me an email and let's get things started."
        contact
        items={items}
        displayItems={2}
        />
    ) 
}