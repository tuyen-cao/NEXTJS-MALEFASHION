import { LayoutProps } from '@/models/common'
import React from 'react'

const EmptyLayout:React.FC <{children: LayoutProps}> = (props) => {
    const {children} = props
  return (
    <>
      {children}
    </>
  )
}

export default EmptyLayout
