


import Code from '@/src/components/ui/code';
import { Button } from '@/src/components/ui/button';
import { useState } from 'react';
import { ClickOutsideComponent } from 'react-powerpack';


export default function ExampleClickOutsideComponent() {


    const [text, setText] = useState('Click me')

    const onClickOutside = () => {
        setText('You Click Outside,Click me again')
    }


    return (

        <div className='p-2 border-2 rounded-xl'>


            <Code language='jsx' style={{}} code={`const [text, setText] = useState('${text}')`} />


            <ClickOutsideComponent onClickOutside={onClickOutside}>
                <Button onClick={() => setText('Click Me')} variant='outline'>
                    {text}
                </Button>
            </ClickOutsideComponent>




            <div className='show-example p-2 m-2'>

            </div>
        </div>
    )
}