import { useEffect, useState } from "react";
import { CUR_PRICE } from "./HomePage";
import { useCard } from "./CardProvider";
import { Link } from "react-router-dom";

export function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 767);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 767);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isDesktop;
}

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <header className="header container">
      <img
        src="images/icon-menu.svg"
        alt="menu"
        className="menu"
        onClick={() => setIsNavOpen((n) => !n)}
      />
      <Link to="/">
        <img src="images/logo.svg" alt="logo" className="logo" />
      </Link>
      <NavBar setIsNavOpen={setIsNavOpen} isOpen={isNavOpen} />
      <Card />
      <img src="images/image-avatar.png" alt="avatar" className="avatar" />
    </header>
  );
}

function NavBar({ setIsNavOpen, isOpen }) {
  const isDesktop = useIsDesktop();

  return isDesktop ? (
    <nav>
      <ul className={`nav-bar`}>
        <li onClick={() => setIsNavOpen((n) => !n)}>
          <img src="images/icon-close.svg" alt="close" />
        </li>
        <li>
          <Link to="/collections">Collections</Link>
        </li>
        <li>
          <Link to="/men">Men</Link>
        </li>
        <li>
          <Link to="/women">Women</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  ) : !isDesktop && isOpen ? (
    <nav>
      <ul className={`nav-bar`}>
        <li onClick={() => setIsNavOpen((n) => !n)}>
          <img src="images/icon-close.svg" alt="close" />
        </li>
        <li>
          <Link to="/collections">Collections</Link>
        </li>
        <li>
          <Link to="/men">Men</Link>
        </li>
        <li>
          <Link to="/women">Women</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  ) : null;
}

function Card() {
  const { cardItems, handleClearCard } = useCard();
  const [isOpen, setIsOpen] = useState(false);

  function handleShowCard() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div className="card">
      {cardItems > 0 && <span className="nb-items">{cardItems}</span>}
      <img src="images/icon-cart.svg" alt="card" onClick={handleShowCard} />
      {isOpen && (
        <div className="card-items">
          <div>
            <span>Cart</span>
            <img
              src="images/icon-close.svg"
              alt="close"
              onClick={handleShowCard}
            />
          </div>
          {!cardItems && <div>Your cart is empty.</div>}
          {cardItems > 0 && (
            <div className="items">
              <div>
                <img src="images/image-product-1.jpg" alt="pic" />
                <div>
                  <p>Fall limited edition sneakers</p>
                  <p>
                    ${CUR_PRICE} x {cardItems}
                    <span>${Math.round(CUR_PRICE * cardItems).toFixed(2)}</span>
                  </p>
                </div>
                <img
                  src="images/icon-delete.svg"
                  alt="delete"
                  onClick={handleClearCard}
                />
              </div>
              <button className="btn">Checkout</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
