import "./checkout.scss"

const Checkout = () => {
  return (
    <div className="checkout">
      <div className="py-5 text-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag-check" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
          <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
        </svg>
        <h2>Checkout form</h2>
        <p className="lead">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
      </div>
      <div className="row g-5">
        <div className="col-md-5 col-lg-4 order-md-last">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-primary">Your cart</span>
            <span className="badge bg-primary rounded-pill">3</span>
          </h4>
          <ul className="list-group mb-3">
            <li className="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 className="my-0">Product name</h6>
                <small className="text-body-secondary">Brief description</small>
              </div>
              <span className="text-body-secondary">$12</span>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 className="my-0">Second product</h6>
                <small className="text-body-secondary">Brief description</small>
              </div>
              <span className="text-body-secondary">$8</span>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 className="my-0">Third item</h6>
                <small className="text-body-secondary">Brief description</small>
              </div>
              <span className="text-body-secondary">$5</span>
            </li>
            <li className="list-group-item d-flex justify-content-between bg-body-tertiary">
              <div className="text-success">
                <h6 className="my-0">Promo code</h6>
                <small>EXAMPLECODE</small>
              </div>
              <span className="text-success">−$5</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span>Total (USD)</span>
              <strong>$20</strong>
            </li>
          </ul>

          <form className="card p-2">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Promo code" />
              <button type="submit" className="btn btn-secondary">Redeem</button>
            </div>
          </form>
        </div>
        <div className="col-md-7 col-lg-8">
          <h4 className="mb-3">Billing address</h4>
          <form className="needs-validation" noValidate >
            <div className="row g-3">
              <div className="col-sm-6">
                <label htmlFor="firstName" className="form-label">First name</label>
                <input type="text" className="form-control" id="firstName" placeholder="" value="" required />
                <div className="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>

              <div className="col-sm-6">
                <label htmlFor="lastName" className="form-label">Last name</label>
                <input type="text" className="form-control" id="lastName" placeholder="" value="" required />
                <div className="invalid-feedback">
                  Valid last name is required.
                </div>
              </div>

              <div className="col-12">
                <label htmlFor="username" className="form-label">Username</label>
                <div className="input-group has-validation">
                  <span className="input-group-text">@</span>
                  <input type="text" className="form-control" id="username" placeholder="Username" required />
                  <div className="invalid-feedback">
                    Your username is required.
                  </div>
                </div>
              </div>

              <div className="col-12">
                <label htmlFor="email" className="form-label">Email <span className="text-body-secondary" >(Optional)</span></label>
                <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                <div className="invalid-feedback">
                  Please enter a valid email address for shipping updates.
                </div>
              </div>

              <div className="col-12">
                <label htmlFor="address" className="form-label">Address</label>
                <input type="text" className="form-control" id="address" placeholder="1234 Main St" required />
                <div className="invalid-feedback">
                  Please enter your shipping address.
                </div>
              </div>

              <div className="col-12">
                <label htmlFor="address2" className="form-label">Address 2 <span className="text-body-secondary">(Optional)</span></label>
                <input type="text" className="form-control" id="address2" placeholder="Apartment or suite" />
              </div>

              <div className="col-md-5">
                <label htmlFor="country" className="form-label">Country</label>
                <select className="form-select" id="country" required >
                  <option value="">Choose...</option>
                  <option>United States</option>
                </select>

                <div className="invalid-feedback">
                  Please select a valid country.
                </div>
              </div>

              <div className="col-md-4">
                <label htmlFor="state" className="form-label">State</label>
                <select className="form-select" id="state" required >
                  <option value="">Choose...</option>
                  <option>California</option>
                </select>
                <div className="invalid-feedback">
                  Please provide a valid state.
                </div>
              </div>

              <div className="col-md-3">
                <label htmlFor="zip" className="form-label">Zip</label>
                <input type="text" className="form-control" id="zip" placeholder="" required />
                <div className="invalid-feedback">
                  Zip code required.
                </div>
              </div>

            </div>
            <hr className="my-4" />

            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="same-address" />
              <label className="form-check-label" htmlFor="same-address">Shipping address is the same as my billing address</label>
            </div>

            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="save-info" />
              <label className="form-check-label" htmlFor="save-info">Save this information for next time</label>
            </div>

            <hr className="my-4" />

            <h4 className="mb-3">Payment</h4>

            <div className="my-3">
              <div className="form-check">
                <input id="credit" name="paymentMethod" type="radio" className="form-check-input" checked required />
                <label className="form-check-label" htmlFor="credit">Credit card</label>
              </div>
              <div className="form-check">
                <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required />
                <label className="form-check-label" htmlFor="debit">Debit card</label>
              </div>
              <div className="form-check">
                <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required />
                <label className="form-check-label" htmlFor="paypal">PayPal</label>
              </div>
            </div>

            <div className="row gy-3">
              <div className="col-md-6">
                <label htmlFor="cc-name" className="form-label">Name on card</label>
                <input type="text" className="form-control" id="cc-name" placeholder="" required />
                <small className="text-body-secondary">Full name as displayed on card</small>
                <div className="invalid-feedback">
                  Name on card is required
                </div>
              </div>

              <div className="col-md-6">
                <label htmlFor="cc-number" className="form-label">Credit card number</label>
                <input type="text" className="form-control" id="cc-number" placeholder="" required />
                <div className="invalid-feedback">
                  Credit card number is required
                </div>
              </div>

              <div className="col-md-3">
                <label htmlFor="cc-expiration" className="form-label">Expiration</label>
                <input type="text" className="form-control" id="cc-expiration" placeholder="" required />
                <div className="invalid-feedback">
                  Expiration date required
                </div>
              </div>

              <div className="col-md-3">
                <label htmlFor="cc-cvv" className="form-label">CVV</label>
                <input type="text" className="form-control" id="cc-cvv" placeholder="" required />
                <div className="invalid-feedback">
                  Security code required
                </div>
              </div>
            </div>

            <hr className="my-4" />

            <button className="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button>
          </form>
        </div>
      </div>
    </div>
  )

}

export default Checkout
