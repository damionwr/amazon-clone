export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0);


const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {

        ...state,
        basket: [...state.basket, action.item]
      };

    case "REMOVE_FROM_BASKET":

      let newBasket = [...state.basket];

      const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

      if (index >= 0) {

        newBasket.splice(index, 1);
      } else {
        console.warn(
          `cant remove (id: ${action.id}) s there is no match`
        );
      }




      return { ...state, basket: newBasket };

    default:
      return state;
  }
};

export default reducer;