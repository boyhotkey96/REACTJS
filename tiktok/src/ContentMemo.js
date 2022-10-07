import {memo} from 'react'
import React from 'react'

function ContentMemo({count}) {
  console.log("Re-render ContentMomo")
  return (
    <h1>This is Memo Content: {count}</h1>
  )
}

export default React.memo(ContentMemo)