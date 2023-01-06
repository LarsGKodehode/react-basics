function StyledGlobalCSS() {
  return (
    // This is actually JSX (HTML in JavaScript) so while pretty similar to normal HTML there are some differences
    // Notably in the naming scheme, we are using lowerCaseCamelCase
    <div className="wrapper">
      <h2 className="text glow">Look at me</h2>
      <p>I'm Stylish!</p>
   </div>
  )
}

export default StyledGlobalCSS