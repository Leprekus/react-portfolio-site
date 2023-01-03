export const Credits = ({ displayCredits, setDisplayCredits }) => {
    const credits = {
        display: displayCredits, 
        position: 'absolute', 
        zIndex: 100,
        height: '100vh',
        width: '100vw',
        background: 'rgba( 113, 113, 113, 0.25 )',
        boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
        backdropFilter: 'blur( 10px )',
        borderRadius: 10,
    }
    const creditsContainer = {
        height: '85%',
        width: '80%',
        background: '#FFF',
        position: 'absolute',
        right: '50%',
        bottom: 0,
        transform: 'translate(50%, 0)',
        margin: 'auto',
        borderRadius: '7px',
        boxShadow: '0px 0px 15px #717171',
        color: 'black'
    }
    const toggleDisplay = () => {
        console.log(displayCredits)
        setDisplayCredits('none')
    }
    return (
        <div style={credits}>
            <div style={creditsContainer}>
                <button onClick={toggleDisplay}>x</button>
                <a href="https://www.flaticon.com/authors/maxim-basinski-premium" target='_blank'>
                    <h3>Maxim Basinski Premium</h3>
                </a>
                <p>Creator of "User" Icon</p>
                <hr/>
                <a href="https://www.flaticon.com/authors/freepik" target='_blank'>
                    <h3>Freepik</h3>
                </a>
                <p>Creator of "CPU" Icon</p>
                <hr/>
                <a href="https://www.flaticon.com/authors/prosymbols-premium" target='_blank'>
                    <h3>Prosymbols Premium</h3>
                </a>
                <p>Creator of "CV" Icon</p>
                <hr/>
                <a href="https://www.flaticon.com/authors/smashicons" target='_blank'>
                    <h3>Smashicons</h3>
                </a>
                <p>Creator of "Cloud" Icon</p>
                <hr/>
            </div>
        </div>
    )
}