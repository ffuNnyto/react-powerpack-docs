import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'


export default function FAQ() {
  return (
    <Accordion type='single' collapsible className='w-full'>
      <AccordionItem value='item-1'>
        <AccordionTrigger>What is React PowerPack?</AccordionTrigger>
        <AccordionContent className='italic font-bold m-2'>
          - React PowerPack is a comprehensive library of components and hooks for React applications. It provides developers with a rich set of tools to simplify UI development and streamline common tasks
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-2'>
        <AccordionTrigger>What types of components are included?</AccordionTrigger>
        <AccordionContent className='italic font-bold m-2'>
          - React PowerPack includes a diverse range of components such as buttons, forms, modals, tooltips, and more. These components are highly customizable and designed to adapt to various design requirements
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-3'>
        <AccordionTrigger>Are the components and hooks customizable?</AccordionTrigger>
        <AccordionContent className='italic font-bold m-2'>
          - Yes, both the components and hooks provided by React PowerPack are highly customizable. They offer extensive props and configuration options to tailor them to your specific needs.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-4'>
        <AccordionTrigger>Is React PowerPack suitable for beginners?</AccordionTrigger>
        <AccordionContent className='italic font-bold m-2'>
          - Yes, React PowerPack is designed to be beginner-friendly. It comes with clear documentation, examples, and best practices to help users get started quickly and efficiently.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}