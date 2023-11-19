import { expense } from "./expense";
import { groupUser } from "./groupUser";

export interface group {
    title: string;
    img: string;
    expenses: Array<expense>;
    groupUser: groupUser;
}