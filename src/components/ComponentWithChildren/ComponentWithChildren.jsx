/**
 * This component wraps around children components
 */
function ComponentWithChildren(props) {
  return (
    <div>
      {props.children}
    </div>
  )
}

export default ComponentWithChildren