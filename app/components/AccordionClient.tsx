"use client"
import React from 'react'
import { Accordion, AccordionItem, Link } from '@nextui-org/react'
import Icon from '@mdi/react';
import { mdiArrowRightThin } from '@mdi/js';

type Props = {
  items: Array<{
    title: string
    description: string
  }>
}

function AccordionClient({ items }: Props) {
  return (
    <Accordion>
      {items.map((item, index) => (
        <AccordionItem key={index} aria-label={item.title} title={item.title}>
          <p dangerouslySetInnerHTML={{__html: item.description}}></p>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default AccordionClient