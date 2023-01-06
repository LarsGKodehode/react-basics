/**
 * This component accepts props (parameters) that we can use
 */
function ComponentWithProps(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.text}</p>
    </div>
  )
}

export default ComponentWithProps




// The components down here showcases syntaxt variation that you will encounter
// The are functional the same as the component we are exporting 

// Both uses JavaScript destructuring
function VariationA(props) {
  const { title, text } = props
  return (
    <div>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  )
}

function VariationB({
  title,
  text
}) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  )
}