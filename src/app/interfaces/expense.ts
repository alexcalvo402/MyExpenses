interface expense {
  title: string;
  amount: number;
  user_id:number,
  group_id:number,
  date?: Date;
  expense_id?:number
}

interface groupExpense extends expense{
  user_name:string
}

export {expense, groupExpense}
