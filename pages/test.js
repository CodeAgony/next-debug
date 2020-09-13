import React from 'react'

const testConst = "test"

const Test = ({ stars }) => {


const testFn = () => {
  console.log(testConst)
}

testFn()

  return (
    <div>
      Testttt {stars}
    </div>
  )
}

debugger
Test.getInitialProps = async (ctx) => {
console.log("Test.getInitialProps -> ctx", ctx)

  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const json = await res.json()
  return { stars: json.stargazers_count }
}

export default Test

