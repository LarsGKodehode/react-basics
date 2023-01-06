/**
 * This component showcases how to apply inline HTML styling tags
 * Limit usage to special cases 
 */
function StyledInline() {
  return (
    // Mind the double sets of braces, one for using JavaScript, one for creating an object
    <div style={{backgroundColor: "violet", borderRadius: "1rem", padding: "1rem", margin: "1rem"}}>
      <h2 style={{color: "white"}}>Look at me</h2>
      <p style={{fontStyle: "italic"}}>I'm Stylish!</p>
    </div>
  )
}

export default StyledInline