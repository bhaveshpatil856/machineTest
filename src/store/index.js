import {combineReducers} from 'redux';
import { getTaskReducer } from '../reducers/taskReducer';
import storage from 'redux-persist/lib/storage';

const reducers = combineReducers({
                        task: getTaskReducer
});

export default reducers;

export const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['task']
}
