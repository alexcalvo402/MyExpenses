interface expense {
  title: string;
  amount: number;
  date: Date;
}

interface groupExpense extends expense{
  user_name:string
}

export {expense, groupExpense}
