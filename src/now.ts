import { add } from "date-fns";

// console.log(new Date(Date.now() + 3 * 24 * 60 * 60 * 1000));

const current = new Date();

console.log(
  add(current, {
    days: 2,
  })
);

//

type AppStatusCode = "NOT_AUTHORIZED" | "NOT_ALLOWED" | "SCREEN_NOT_ALLOWED";
// type AppStatusCode // 1001, 1002, 1003,

type ApiResponse = {
  appStatusCode: AppStatusCode;
  message: string;
};
