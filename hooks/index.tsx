import {useContext} from "react";
import { myStoreContext } from "../stores";

export const useMyStore = () => useContext(myStoreContext);
