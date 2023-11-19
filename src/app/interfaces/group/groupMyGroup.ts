import { groupWithoutGroupId } from './groupWithoutGroupId';

export interface groupMyGroup extends groupWithoutGroupId {
    last_user_name: string;
    last_amount: number;
    date: string;
    amount_due: number;
}