import React from 'react'

const Item = () => {
  return (
    <>
    <div className="items-info">
    <div className="product-img">
      <img
        src="https://photos.shineinblue.com/wp-content/uploads/2022/05/555-5.jpg"
        alt=""
      />
    </div>
    <div className="title">
      <h2>lost mastang</h2>
      <p>zoro</p>
    </div>
    <div className="add-minus-quantity">
      <i className="fas fa-minus minus"></i>
      <input type="text" placeholder="2" />
      <i className="fas fa-plus add"></i>
    </div>
    <div className="price">
      <h3>200rs</h3>
    </div>
    <div className="remove-item">
    <i className="fas fa-trash-alt remove"></i>
    </div>
  </div>
  <hr />
  </>
  )
}

export default Item
