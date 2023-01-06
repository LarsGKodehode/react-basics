const arrayOfData = [
  "First element",
  "Second element",
  "Third element",
  "Fourth element",
]

function ComponentArrayMap() {
  return (
    <ul>

      {
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