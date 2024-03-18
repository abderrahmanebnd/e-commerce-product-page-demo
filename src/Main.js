import { useCard } from "./CardProvider";
import { PRICE, OFFER, CUR_PRICE } from "./HomePage";

export default function Main() {
  const { showLightBox } = useCard();
  return (
    <main className="main container">
      <Photos />
      <Details />
      {showLightBox && <LightBox />}
    </main>
  );
}

function Photos() {
  const { currentImg, handleChangeImg, handleShowLightBox } = useCard();

  return (
    <section className="photos">
      <div className="current-pic" onClick={handleShowLightBox}>
        <img src={`images/image-product-${currentImg}.jpg`} alt="pic" />
      </div>
      <ul className="thumbns">
        {Array.from({ length: 4 }, (_, i) => (
          <li key={i} className={currentImg === i + 1 ? "selected" : ""}>
            <img
              onClick={() => handleChangeImg(i + 1)}
              src={`images/image-product-${i + 1}-thumbnail.jpg`}
              alt={`${i + 1}`}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

function Details() {
  return (
    <section className="details">
      <h3>Sneaker company</h3>
      <h1>
        Fall limited edition
        <br /> sneakers
      </h1>
      <p className="desc">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="offer">
        <p>
          <span>${CUR_PRICE}</span>
          <span>{OFFER}%</span>
        </p>
        <del>${PRICE}</del>
      </div>
      <Buy />
    </section>
  );
}

function LightBox() {
  const { currentImg, handleChangeImg, handleShowLightBox, showLightBox } =
    useCard();
  return (
    <div className="light-box">
      <div>
        <div className="current-pic">
          <img
            src="images/icon-close.svg"
            className="close"
            alt="close"
            onClick={handleShowLightBox}
          />
          <img
            src="images/icon-previous.svg"
            alt="previous"
            className="prev"
            onClick={() => handleChangeImg(currentImg - 1)}
          />
          <img
            src="images/icon-next.svg"
            alt="next"
            className="next"
            onClick={() => handleChangeImg(currentImg + 1)}
          />

          <img
            className="showed-img"
            src={`images/image-product-${currentImg}.jpg`}
            alt="pic"
          />
        </div>
        <ul className="thumbns">
          {Array.from({ length: 4 }, (_, i) => (
            <li key={i} className={currentImg === i + 1 ? "selected" : ""}>
              <img
                onClick={() => handleChangeImg(i + 1)}
                src={`images/image-product-${i + 1}-thumbnail.jpg`}
                alt={`${i + 1}`}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Buy() {
  const { itemsNb, handleAddItem, handleRemoveItem, handleUpdateCardItems } =
    useCard();

  return (
    <div className="buy">
      <div>
        <img
          src="images/icon-minus.svg"
          alt="minus"
          onClick={handleRemoveItem}
        />
        <span>{itemsNb}</span>
        <img src="images/icon-plus.svg" alt="plus" onClick={handleAddItem} />
      </div>
      <button className="btn" onClick={() => handleUpdateCardItems(itemsNb)}>
        <img src="images/icon-cart-add.svg" alt="card" />
        <span>Add to cart</span>
      </button>
    </div>
  );
}
