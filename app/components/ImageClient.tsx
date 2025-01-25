"use client"
import React from 'react'
import { Image } from "@heroui/react"

type Props = React.ComponentProps<typeof Image>

function ImageClient(props: Props) {
  return (
    <Image
        {...props}
    />
  )
}

export default ImageClient