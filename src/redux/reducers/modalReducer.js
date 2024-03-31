import { ModalConstant, QuickviewModalConstant } from "../constants";

const initialState = { signUpModal: { visible: false, orderCreate: false } };

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case ModalConstant.OPEN_SIGN_UP_MODAL:
      return {
        ...state,
        signUpModal: { visible: true, authStatus: 0, orderCreate: false },
      };

    case ModalConstant.OPEN_SIGN_UP_MODAL_ORDER_CREATE:
      return {
        ...state,
        signUpModal: { visible: true, authStatus: 0, orderCreate: true },
      };

    case ModalConstant.CLOSE_SIGN_UP_MODAL:
      return { ...state, signUpModal: { visible: false } };

    case ModalConstant.OPEN_LOGIN_MODAL:
      return { ...state, signUpModal: { visible: true, authStatus: 1 } };

    default:
      return state;
  }
};

const quickviewInitialState = { quickViewModal: { visible: false, data: {} } };

export const quickviewModalReducer = (state = quickviewInitialState, action) => {
  switch (action.type) {
    case QuickviewModalConstant.OPEN_QUICKVIEW_MODAL:
      return {
        ...state,
        quickViewModal: { visible: true, data: action.payload },
      };

    case QuickviewModalConstant.CLOSE_QUICKVIEW_MODAL:
      return { ...state, quickViewModal: { visible: false, data: {} } };

    default:
      return state;
  }
};

// export default { modalReducer, quickviewModalReducer };
