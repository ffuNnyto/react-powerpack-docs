import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from '@/components/ui/accordion'
  

export default function KeyFeatures() {
    return (
        <Accordion type='single' collapsible className='w-full'>
        <AccordionItem value='item-1'>
          <AccordionTrigger>Versatile Components</AccordionTrigger>
          <AccordionContent className='italic font-bold m-2'>
            - React PowerPack offers a wide range of pre-built components covering various UI elements such as buttons, forms, modals, and more. Each component is highly customizable and adaptable to different design requirements.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-2'>
          <AccordionTrigger>Flexible Hooks</AccordionTrigger>
          <AccordionContent className='italic font-bold m-2'>
            - The library includes a collection of hooks that address common functionalities and patterns encountered in React development. These hooks provide efficient solutions for state management, side effects, and interaction logic, enabling developers to build robust applications with ease
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-3'>
          <AccordionTrigger>Reusable Building Blocks</AccordionTrigger>
          <AccordionContent className='italic font-bold m-2'>
            - With React PowerPack, developers can leverage reusable building blocks to accelerate development cycles and maintain consistency across projects. The library promotes code reuse and modularity, allowing components and hooks to be easily integrated into existing codebases
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-4'>
          <AccordionTrigger>Developer-Friendly</AccordionTrigger>
          <AccordionContent className='italic font-bold m-2'>
            - React PowerPack prioritizes developer experience by offering clear documentation, examples, and best practices. The intuitive API design and straightforward usage make it accessible to developers of all skill levels, from beginners to experienced professionals
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
}