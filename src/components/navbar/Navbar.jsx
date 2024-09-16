import React, { memo } from "react";
import { FaShoppingCart } from "react-icons/fa";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { Increment, Decrement } from "../../slices/cartSlice";


const Navbar = () => {
  const { cart } = useSelector((state) => state.cart);
  const count = useSelector((state) => state.cart.value);
  const price = useSelector((state) => state.cart.totalprice);
  const dispatch = useDispatch();

  return (
    <>
      <nav className="navbar py-3 px-4">
        <div className="logo">
          <h4>CremipeStore</h4>
        </div>
        <div className="navbar-item">
          <ul className="d-flex mt-3">
            <li className="pe-5">Home</li>
            <li className="pe-5">About</li>
            <li className="pe-5">Shop</li>
            <li className="pe-5">Contact</li>
          </ul>
        </div>
        <div className="">
          <FaShoppingCart
            className="cart-logo mx-5"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
            size={20}
          />
          <div
            className="offcanvas offcanvas-start"
            tabIndex="-1"
            id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                Your Cart
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              {cart &&
                cart.map((item) => (
                  <div
                    className="card mb-3"
                    key={item.id}
                    style={{ maxWidth: "100%" }}
                  >
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img
                          src={item.image}
                          className="img-fluid rounded-start"
                          alt={item.title}
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">{item.title}</h5>
                          <p
                            className="card-text"
                            style={{
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            }}
                          >
                            {item.description}
                          </p>
                          <p className="card-text">
                            <small className="text-body-secondary">
                          $ {price}
                            </small>
                            <button
                              className="btn btn-primary mx-2"
                              onClick={() => dispatch(Increment())}
                            >
                              +
                            </button>
                            {count}
                            <button
                              className="btn btn-danger mx-2"
                              onClick={() => dispatch(Decrement())}
                            >
                              -
                            </button>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default memo(Navbar);
