import { Button } from '@/components/ui/button'
import Code from '@/components/ui/code'
import { Separator } from '@/components/ui/separator'
import { useState } from 'react'
import { Each } from 'react-powerpack'

export default function ExampleEach() {

    const [items, setItems] = useState([1, 2, 3, 4, 5, 6])

    const addItem = () => {
        const randomNumber = Math.floor(Math.random() * 100);
        setItems([...items, randomNumber]);
    }

    const removeItem = () => {
        const newItems = [...items];
        newItems.pop();
        setItems(newItems);
    }


    return(
        <div className='p-2 border-2 rounded-xl'>
            <Code language='jsx' style={{}} code={`const [items, setItems] = useState([${items.join(',')}])`} />

            <div className='example-buttons'>
                <Button onClick={addItem} className='m-2'>Add Item</Button>
                <Button onClick={removeItem} className='m-2'>Remove Item</Button>
            </div>

            <Separator />

            <div className='show-example p-2 m-2'>
                <Each of={items} render={(item, index) =>
                    <div key={index}>
                        <div className='flex flex-wrap'>
                            <div className='flex bg-[rgba(0,0,0,0.5)] m-2 p-1 rounded-xl shadow-xl'>
                                item: {item} with key = {index}
                            </div>
                        </div>
                    </div>
                } />
            </div>
        </div>
    )
}