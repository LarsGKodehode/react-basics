// Components
import ComponentBasic from "./components/ComponentBasic/ComponentBasic"
import ComponentWithProps from "./components/ComponentWithProps/ComponentWithProps"
import ComponentArrayMap from "./components/ComponentArrayMap/ComponentArrayMap"
import ComponentWithChildren from "./components/ComponentWithChildren/ComponentWithChildren"
import StyledInline from "./components/StyledInline/StyledInline"


// Uncomment the lines with the the components to see them in effect
// Keyboard shortcut for commenting/uncommenting marked text: Ctrl + *
function App() {
  return (
    <>
      {/* <ComponentBasic /> */}

      {/* We are using syntaxt similar to HTML attributes for passing in props (arguments) */}
      {/* <ComponentWithProps title="Title Text" text="Put text you want inside here" /> */}

      {/* You can think of this as a more complex custom <div> element */}
      {/* <ComponentWithChildren>
        <h2>Whooo hoooo!</h2>
        <h3>We are wrapped</h3>
      </ComponentWithChildren> */}

      {/* <ComponentArrayMap /> */}


      {/* <StyledInline /> */}
    </>
  )
}

export default App