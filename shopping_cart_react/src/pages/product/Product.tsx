import "./product.scss"
import 'bootstrap/dist/css/bootstrap.min.css';

const Product = () => {
  return (
    <div className="product">
      <div className="box box1">
        <img src="./public/product.jpg" className="img-thumbnail" alt="" width="550px" height="550px" />
        <p className="fs-6 fw-bold">Stock (75/100)</p>
        <div className="progress" role="progressbar" aria-label="Warning example" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>
          <div className="progress-bar bg-dark text-light" style={{ width: '75%' }}>75%</div>
        </div>
      </div>
      <div className="box box2">
        <div className="list-group border-light-subtle">
          <a href="#" className="list-group-item list-group-item-action" aria-current="true">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1 fw-bold">Product Name</h5>
            </div>
            <p className="fs-6">A product description is a form of marketing copy used to describe and explain the benefits of your product.</p>
            <p className="mb-1 fw-bold">Price: $99</p>
            <p className="mb-1 fw-bold">Quantity: </p>
            <input className="form-control" type="text" placeholder="1" aria-label="default input example"></input>
            <button type="button" className="btn btn-dark">Add to Cart</button>
          </a>
        </div>
      </div>
      <div className="box box3 border-light-subtle">
        <div className="card mb-4 rounded-3 shadow-sm border-light-subtle">
          <div className="card-header py-3">
            <h6 className="my-0 fw-bold">Specifications</h6>
          </div>
          <ul className="list-group border-light-subtle">
            <li className="list-group-item">Display: 6.1 inches</li>
            <li className="list-group-item">Resolution: 1080 x 2400 pixels</li>
            <li className="list-group-item">Processor: Snapdragon 888</li>
            <li className="list-group-item">Ram: 8GB</li>
            <li className="list-group-item">Storage: 128GB</li>
            <li className="list-group-item">Battery: 4500mAh</li>
          </ul>
        </div>
      </div>
      <div className="box box4">
        <div className="card mb-4 rounded-3 shadow-sm border-light-subtle">
          <div className="card-header py-3">
            <h6 className="my-0 fw-bold">Rate this Product</h6>
          </div>
          <div className="form-check">
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
              <label className="form-check-label" htmlFor="inlineRadio1">1</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
              <label className="form-check-label" htmlFor="inlineRadio2">2</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
              <label className="form-check-label" htmlFor="inlineRadio2">3</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
              <label className="form-check-label" htmlFor="inlineRadio2">4</label>
            </div>
            <button type="button" className="btn btn-dark">Submit Rating</button>
          </div>
        </div>
      </div>
      <div className="box box5">
        <div className="card mb-4 rounded-3 shadow-sm border-light-subtle">
          <div className="card-header py-3">
            <h6 className="my-0 fw-bold">Reviews</h6>
          </div>
          <ul className="list-group border-light-subtle">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">John Doe</h5>
              <p className="mb-1">Some placeholder content in a paragraph.</p>
            </div>
            <hr />
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">Jane Smith</h5>
              <p className="mb-1">Some placeholder content in a paragraph.</p>
            </div>
          </ul>
        </div>
      </div>


    </div>
  )
}

export default Product
