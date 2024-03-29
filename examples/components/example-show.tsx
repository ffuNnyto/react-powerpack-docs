import { Button } from '@/src/components/ui/button'
import Code from '@/src/components/ui/code'

import { useState } from 'react'
import { Show } from 'react-powerpack'


export default function ExampleShow() {

    const [visible, setVisible] = useState(false)

    const handleVisible = () => setVisible(!visible)

    return (
        <div className='p-2 border-2 rounded-xl'>
            <Button variant='outline' className='m-2' onClick={handleVisible}>Handle Visible</Button>
            <div className='show-example p-2 m-2'>

                <Code style={{}} language='jsx' code={`const [visible, setVisible] = useState(${visible})`} />
                <Show>
                    <Show.When isTrue={visible}>
                        <div className='text-white bg-pink-400 rounded-xl p-2'>
                            This show when is visible
                        </div>
                    </Show.When>
                    <Show.Else>
                        <div className='bg-blue-400 text-white rounded-xl p-2'>
                            This show when is invisible
                        </div>
                    </Show.Else>
                </Show>
            </div>
        </div>

    )
}