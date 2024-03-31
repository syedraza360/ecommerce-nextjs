import { Menu } from "../constants";
import { mainMenu } from "src/mock/menus";

const initialState = { template: mainMenu };

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case Menu.UPDATE: {
      const { payload } = action;
      return { template: payload };
    }

    default:
      return state;
  }
};

export default menuReducer;
