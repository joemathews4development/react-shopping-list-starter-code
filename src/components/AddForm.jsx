import { useState } from "react"

function AddForm(props) {

  const [nameInputValue, setNameInputValue] = useState("")
  const [priceInputValue, setPriceInputValue] = useState(0)

  const handleNameInputchange = (event) => {
    setNameInputValue(event.target.value)
  }

  const handlePriceInputchange = (event) => {
    setPriceInputValue(event.target.value)
  }

  function resetInput() {
    setNameInputValue("")
    setPriceInputValue(0)
  }

  const handleSubmitForm = (event) => {
    event.preventDefault() // removes any automated effect from html
    const newProduct = {
      name: nameInputValue,
      price: priceInputValue,
      isPurchased: false
    }
    props.setProducts([...props.products, newProduct])
    resetInput()
  }


  return (
    <div className="add-form container">
      
      <h2>Add Form</h2>

      <form onSubmit={handleSubmitForm}>

        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" value={nameInputValue} onChange={handleNameInputchange}/>
        </div>

        <div>
          <label htmlFor="price">Price: </label>
          <input type="number" name="price" value={priceInputValue} onChange={handlePriceInputchange}/>
        </div>

        <button type="submit">Add</button>

      </form>

    </div>
  )
}

export default AddForm