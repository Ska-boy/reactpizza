export const setCart = (items) => ({
  type: 'SET_CART',
  payload: items,
});

export const deleteCartItem = (items, key) => ({
  type: 'DELETE_CART',
  payload: items,
  key: key,
});
export const clearCart = (items) => ({
  type: 'CLEAR_CART',
  payload: {},
});
export const plusCnt = (items, key) => ({
  type: 'PLUS_CNT',
  payload: items,
  key: key,
});
export const minusCnt = (items, key) => ({
  type: 'MINUS_CNT',
  payload: items,
  key: key,
});
