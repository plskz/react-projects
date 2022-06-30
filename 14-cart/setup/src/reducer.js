const reducer = (state, action) => {
  switch (action.type) {
    case 'CLEAR_CART': {
      return { ...state, cart: [] };
    }

    case 'REMOVE': {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }

    case 'GET_TOTALS': {
      let { total, amount } = state.cart.reduce((cartTotal, cartItem) => {
          cartTotal.total += cartItem.price * cartItem.amount;
          cartTotal.amount += cartItem.amount;
          return cartTotal;
        }, { total: 0, amount: 0 });

      total = total.toFixed(2);

      return { ...state, total, amount };
    }

    case 'LOADING': {
      return { ...state, loading: true };
    }

    case 'DISPLAY_ITEMS': {
      return { ...state, cart: action.payload, loading: false };
    }

    case 'TOGGLE_AMOUNT': {
      const tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          switch (action.payload.type) {
            case 'inc':
              return { ...cartItem, amount: cartItem.amount + 1 };

            case 'dec':
              return { ...cartItem, amount: cartItem.amount - 1 };
          }
        }
        return cartItem;
      });

      return { ...state, cart: tempCart };
    }
  }

  throw new Error('no matching action type');
};

export default reducer;
