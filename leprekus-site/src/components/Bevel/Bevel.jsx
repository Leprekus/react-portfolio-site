import { Grow } from '@mui/material'
import './Bevel.css'
export const Bevel = ({ width=150, height=150, src='', timeout=1000}) => {
    const bevel = {
        backgroundColor: '#eceef2',
        width: width,
        height: height,
        clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)',
        backgroundImage: `url(${src})`,
        backgroundSize: '50% auto',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        //border-radius: 50px;
        position: 'relative',
        boxShadow:  'drop-shadow(30px 10px 4px #4444dd)',
        margin: '0.2rem 0',
        left: 0,
    }
    return (
        <Grow 
        in={true}
        style={{ transformOrigin: '0 0 0' }}
        {...(true ? { timeout: timeout } : {})}
        >
            <div style={bevel} className='bevel'>
            </div>
        </Grow>
        )
}