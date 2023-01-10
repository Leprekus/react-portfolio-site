export const Credits = ({ displayCredits, setDisplayCredits }) => {
    const credits = {
        display: displayCredits, 
        position: 'absolute', 
        zIndex: 100,
        height: '100%',
        width: '100vw',
        background: 'rgba( 113, 113, 113, 0.25 )',
        boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
        backdropFilter: 'blur( 10px )',
        borderRadius: 10,
        left: 0,
        top: 0,
        bottom: 0
    }
    const creditsContainer = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
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

    const closeButton = {
        width: 100,
        height: 50,
        borderRadius: 10,
    }
    const toggleDisplay = () => {
        console.log(displayCredits)
        setDisplayCredits('none')
    }
    return (
        <div style={credits}>
            <div style={creditsContainer}>
                <div>
                    <button onClick={toggleDisplay} style={closeButton}>x</button>
                </div>
                <a href="https://www.flaticon.com/authors/freepik" target='_blank'>
                    <h3>Freepik</h3>
                </a>
                <p>Creator of "Instagram" & "Youtube" Icon</p>
                <hr/>
                <a href="https://www.flaticon.com/authors/riajulislam" target='_blank'>
                    <h3>RiajulIslam</h3>
                </a>
                <p>Creator of "Github" Icon</p>
            </div>
        </div>
    )
}