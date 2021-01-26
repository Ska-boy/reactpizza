const initialState = {
  items: {},
  sum: 0,
  count: 0,
};

const cart = (state = initialState, action) => {
  if (action.type === 'SET_CART') {
    return {
      ...state,
      items: {
        ...state.items,
        [action.payload.id]: state.items[action.payload.id]
          ? [...state.items[action.payload.id], action.payload]
          : [action.payload],
      },
      // sum: action.payload.reduce(
      //   (previousValue, currentValue) => previousValue + currentValue.price,
      //   0,
      // ),
      sum: state.sum + action.payload.price,
      count: state.count + 1,
    };
  }
  if (action.type === 'DELETE_CART') {
    let newObj = { ...state.items };
    let delKey = Object.keys(state.items).filter((item, index) => {
      return +item === action.key;
    });
    delete newObj[delKey];
    return {
      ...state,
      items: { ...newObj },
      sum: state.sum - action.payload[0].price * action.payload.length,
      count: state.count - 1 * action.payload.length,
    };
  }
  if (action.type === 'CLEAR_CART') {
    return {
      ...state,
      items: action.payload,
      sum: 0,
      count: 0,
    };
  }
  if (action.type === 'PLUS_CNT') {
    let newObj = { ...state.items };
    newObj[action.key].push(newObj[action.key][0]);
    return {
      ...state,
      items: newObj,
      sum: state.sum + action.payload[0].price,
      count: state.count + 1,
    };
  }
  if (action.type === 'MINUS_CNT') {
    let newObj = { ...state.items };
    let newCnt = state.count;
    let newSum = state.sum;
    if (newObj[action.key].length > 1) {
      newObj[action.key].pop(newObj[action.key][0]);
      newCnt = newCnt - 1;
      newSum = newSum - action.payload[0].price;
    }
    return {
      ...state,
      items: newObj,
      sum: newSum,
      count: newCnt,
    };
  }
  return state;
};

export default cart;
