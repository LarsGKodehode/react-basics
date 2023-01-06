const arrayOfData = [
  "First element",
  "Second element",
  "Third element",
  "Fourth element",
]

/**
 * This component shwocases how we can create a list of JSX elements from a list of data
 */
function ComponentArrayMap() {
  return (
    <ul>

      {
        // Mind the key prop we are passing here. This is somthing we have to pass along so React
        // is able to distinguish between different JSX elements.
        // Of note is that we can pass in any value as long as it is unique among it's siblings
        // An easy way to do this is by using the index of the element available from the array.map method
        arrayOfData.map(
          (element, index) => {
            <li key={index}>{element}</li>
          }
        )
      }

    </ul>
  )
}

export default ComponentArrayMap