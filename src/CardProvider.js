import { createContext, useContext, useState } from "react";

const CardContext = createContext();
function CardProvider({ children }) {
  const [itemsNb, setitemsNb] = useState(0);
  const [cardItems, setCardItems] = useState(0);
  const [currentImg, setCurrentImg] = useState(1);
  const [showLightBox, setShowLightBox] = useState(false);

  function handleRemoveItem() {
    if (itemsNb === 0) return;
    setitemsNb((itemsNb) => itemsNb - 1);
  }
  function handleAddItem() {
    setitemsNb((itemsNb) => itemsNb + 1);
  }

  function handleUpdateCardItems(n) {
    if (n === 0) return;
    setCardItems((cardItems) => cardItems + n);
  }

  function handleClearCard() {
    setCardItems(0);
  }

  function handleChangeImg(i) {
    if (i < 1 || i > 4) return;
    setCurrentImg(i);
  }

  function handleShowLightBox() {
    setShowLightBox((show) => !show);
  }

  const value = {
    itemsNb,
    handleAddItem,
    handleRemoveItem,
    cardItems,
    handleUpdateCardItems,
    handleClearCard,
    currentImg,
    handleChangeImg,
    showLightBox,
    handleShowLightBox,
  };
  return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
}

function useCard() {
  const context = useContext(CardContext);
  if (context === undefined)
    throw new Error("CardContext was used outside of the CardProvider");
  return context;
}
export { CardProvider, useCard };
