import { useState } from 'react';
import { useClickOutside } from 'react-powerpack';

export default function ExampleClickOutSide() {


    const [text, setText] = useState('Click Outside')
    
    const ref = useClickOutside(() => {
        setText('Now Click inside the box')
    });

    return (
        <div className='p-5 items-center border-2 rounded-xl'>
            <div onClick={() => setText('Click Outside')} ref={ref} className='border-[1px] p-5'>
                {text}
            </div>

        </div>
    )
}