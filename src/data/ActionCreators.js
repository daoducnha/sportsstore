import { ActionTypes } from "./Type";
import {data as phData} from "./placeholderData";
export const loadData = (dataType) => ({
    type: ActionTypes.DATA_LOAD,
    payload: {
        dataType: dataType,
        data: phData[dataType]
    }
})
