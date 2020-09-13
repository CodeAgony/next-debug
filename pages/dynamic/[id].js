import React from 'react'
import { useRouter } from "next/router"

export const DynamicPage = ({login}) => {
const router = useRouter();
console.log("DynamicPage -> router", router)

  return (
    <div>
      Contibutor - {login}
    </div>
  )
}

DynamicPage.getInitialProps = async (ctx) => {
  console.log("Test.getInitialProps -> ctx", ctx)
  const { query } = ctx;
  console.log("DynamicPage.getInitialProps -> query", query)
  debugger
    const res = await fetch(`https://api.github.com/repos/CodeAgony/${query.id}/contributors`)
    const json = await res.json()
    console.log("DynamicPage.getInitialProps -> json", json)

    return { login: json[0].login }
  }

export default DynamicPage