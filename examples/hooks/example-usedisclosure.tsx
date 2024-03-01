import { Button } from '@/src/components/ui/button';
import { Show, useDisclosure } from 'react-powerpack';

export default function ExampleUseDisclosure() {

    const { isOpen, open, close, toggle } = useDisclosure();

    return (
        <div className='p-5 items-center border-2 rounded-xl'>

            <div>
                <Button variant='secondary' className='m-1' onClick={open}>Open Modal</Button>
                <Button variant='secondary' className='m-1' onClick={close}>Close Modal</Button>
                <Button variant='secondary' className='m-1' onClick={toggle}>Toggle Modal</Button>

                <Show>
                    <Show.When isTrue={isOpen}>
                        <div className='m-4 p-4 border-2 border-dotted'>
                            Modal content
                        </div>
                    </Show.When>
                </Show>
            </div>
        </div>
    )
}