interface group {
  group_id?: number;
  name: string;
  image: string;
}

interface groupMyGroup extends group {
    last_user_name: string;
    last_amount: number;
    date: Date;
    amount_due: number;
}

export {group, groupMyGroup};