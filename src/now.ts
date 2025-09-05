import { add } from "date-fns";

// console.log(new Date(Date.now() + 3 * 24 * 60 * 60 * 1000));

const current = new Date();

console.log(
  add(current, {
    days: 2,
  })
);
