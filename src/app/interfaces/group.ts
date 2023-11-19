import { expense, groupExpense } from "./expense";
import { groupUser } from "./groupUser";

export interface group {
    title: string;
    img: string;
    expenses: Array<groupExpense>;
    groupUser: groupUser;
}