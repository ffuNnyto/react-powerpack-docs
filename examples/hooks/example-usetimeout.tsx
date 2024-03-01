import { useState } from 'react';
import { Show, useTimeout } from 'react-powerpack';

export default function ExampleUseTimeOut() {

    const [showMessage, setShowMessage] = useState(false);

    const showMessageAfterDelay = () => {
        setShowMessage(true);
    }
    
    useTimeout(showMessageAfterDelay, 3000);

    return (
        <div className='p-5 items-center border-2 rounded-xl'>
            <Show>
                <Show.When isTrue={showMessage}>
                    <div className='bg-secondary p-2 rounded-md'>
                        Message displayed after 3 seconds!
                    </div>
                </Show.When>
                <Show.Else>
                    <div className='bg-primary p-2 rounded-md text-secondary'>
                        Message will appear in 3 seconds
                    </div>
                </Show.Else>
            </Show>
        </div>
    )
}