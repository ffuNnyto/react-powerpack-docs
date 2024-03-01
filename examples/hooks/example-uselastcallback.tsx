import { Button } from '@/src/components/ui/button';
import { useState } from 'react';
import { useLastCallback } from 'react-powerpack';



export default function ExampleUseLastCallback() {
    
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    }

    const lastIncrement = useLastCallback(increment);

    return (
        <div className='p-5 items-center border-2 rounded-xl flex'>
            <p >Count: {count}</p>
            <Button className='ml-4' variant='secondary' onClick={increment}>Increment</Button>
            <Button className='ml-4' variant='secondary' onClick={lastIncrement}>Last Increment</Button>
        </div>
    )
}