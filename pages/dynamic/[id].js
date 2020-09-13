import React from 'react'
import { useRouter } from "next/router"

export const DynamicPage = () => {
const router = useRouter();
console.log("DynamicPage -> router", router)

  return (
    <div>
      dynamic page
    </div>
  )
}

export default DynamicPage