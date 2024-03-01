import { Button } from '@/src/components/ui/button'
import Code from '@/src/components/ui/code'
import { Separator } from '@/src/components/ui/separator'
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

    const removeAll = () => {
        setItems([])
    }


    return (
        <div className='p-2 border-2 rounded-xl'>
            <Code language='jsx' style={{}} code={`const [items, setItems] = useState([${items.join(',')}])`} />

            <div className='example-buttons'>
                <Button onClick={addItem} className='m-2'>Add Item</Button>
                <Button onClick={removeItem} className='m-2'>Remove Item</Button>
                <Button onClick={removeAll} className='m-2'>Remove All</Button>
            </div>

            <Separator />

            <div className='show-example p-2 m-2 flex flex-wrap mx-auto max-w-screen-sm'>
                <Each of={items} render={(item, index) =>
                    <div key={index} className='flex border-2 m-2 p-1 rounded-md shadow-xl bg-primary dark:bg-secondary text-white dark:text-primary'>
                        item: {item} with key = {index}
                    </div>
                } />
            </div>
        </div>
    )
}