import React from 'react'

const testConst = "test"

const Test = ({ stars }) => {


const testFn = () => {
  console.log(testConst)
}

debugger
testFn()

  return (
    <div>
      Test {stars}
    </div>
  )
}

Test.getInitialProps = async (ctx) => {
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const json = await res.json()
  return { stars: json.stargazers_count }
}

export default Test

