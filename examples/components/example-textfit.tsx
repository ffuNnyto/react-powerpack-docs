import { Badge } from '@/src/components/ui/badge';
import { Separator } from '@/src/components/ui/separator';
import { TextFit } from 'react-powerpack';

export default function ExampleTextFit() {
    return (
        <div className='p-2 border-2 rounded-xl'>
            <Badge variant='destructive' className='m-2'>BETA</Badge>
            <Separator />
            <div className=' h-[30px] m-1 p-1 bg-secondary inline-flex'>

                <TextFit fitW={0.8}>
                    Hello World
                </TextFit>
            </div>
            <div className='h-[50px] m-1 p-1 bg-secondary'>

                <TextFit fitH={0.6}>
                    Hello World
                </TextFit>
            </div>
            <div className='h-[100px] m-1 p-1 bg-secondary'>
                <TextFit >
                    Hello World
                </TextFit>
            </div>

            <div className='h-[155px] m-1 p-1 bg-secondary'>

                <TextFit>
                    Hello World
                </TextFit>
            </div>
        </div>
    )
}