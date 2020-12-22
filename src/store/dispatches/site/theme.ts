import { TDispatchType } from "../../actions/dispatchType";
import { setTheme, THEME_TYPES } from "../../actions/theme";

export const dispatchTheme = (type: THEME_TYPES = THEME_TYPES.LIGHT): any => {
    return (dispatch: TDispatchType) => {
        dispatch(setTheme(type));
    };
};
