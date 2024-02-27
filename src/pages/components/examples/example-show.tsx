import { Button } from '@/components/ui/button'
import Code from '@/components/ui/code'
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
                        <div className='bg-primary text-black rounded-xl p-2'>
                            This show when is visible
                        </div>
                    </Show.When>
                    <Show.Else>
                        <div className='bg-secondary rounded-xl p-2'>
                            This show when is invisible
                        </div>
                    </Show.Else>
                </Show>
            </div>
        </div>

    )
}