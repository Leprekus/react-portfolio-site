import './DayNightMode.css'
import { useState } from 'react'
export const DayNightMode = () => {
    const [xAxis, setXAxis] = useState('-30%')
    const handleToggle = () => {
        xAxis === '30%' ? setXAxis('100%') : setXAxis('30%')
    }
    return (
        <div className='toggle-switch'>
            <label>
                <input type='checkbox'/>
                <span className='slider'/>
            </label>
        </div>    
    )
}