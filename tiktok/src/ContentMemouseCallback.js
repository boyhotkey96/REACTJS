import {memo} from 'react'
import React from 'react'

function ContentMemo({onIncrease}) {
  console.log("Re-render ContentMomo")
  return (
    <>
      <h1>This is Memo Content</h1>
      <button onClick={onIncrease}>click useCallback()</button>
    </>
  )
}

export default React.memo(ContentMemo)