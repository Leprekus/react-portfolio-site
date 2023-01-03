import { Grow } from '@mui/material'
export const Bevel = ({ width=150, height=150, src='', timeout=1000}) => {
    const bevel = {
        backgroundColor: 'red',
        width: width,
        height: height,
        clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)',
        backgroundImage: `url(${src})`
    }
    return (
        <Grow 
        in={true}
        style={{ transformOrigin: '0 0 0' }}
        {...(true ? { timeout: timeout } : {})}
        >
            <div style={bevel}>
            </div>
        </Grow>
        )
}