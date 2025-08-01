import { useEffect, useState } from 'react'

export default function TailwindScreenSize() {
   const [width, setWidth] = useState()

   useEffect(() => {
      const handleResize = () => {
         setWidth(window.innerWidth)
      }

      handleResize()

      window.addEventListener('resize', handleResize)

      return () => window.removeEventListener('resize', handleResize)
   }, [width])

   return (
      <div
         style={{
            position: 'fixed',
            top: '.5rem',
            left: '.5rem',
            zIndex: 9999,
            color: '#016630',
            fontSize: '1.25rem',
         }}
      >
         {width > 1536
            ? '2xl'
            : width > 1280
            ? 'xl'
            : width > 1024
            ? 'lg'
            : width > 768
            ? 'md'
            : width > 640
            ? 'sm'
            : 'xs'}
      </div>
   )
}
