import {createContext} from "react";
import {MyStore} from './MyStore'

export const myStoreContext = createContext(new MyStore())