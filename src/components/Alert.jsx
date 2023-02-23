import React from 'react'

function Alert(props) {
  return (
    <div className="alert alert-success " role="alert">
 {props.alert}
</div>
  )
}

export default Alert
