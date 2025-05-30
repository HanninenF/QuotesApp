/* import { nanoid } from "nanoid"; */
import { QuotesType } from "../types/quotesTypes";
import uuid from "react-native-uuid";

export const quotesData: QuotesType[] = [
  {
    id: uuid.v4(),
    text: "The journey of a thousand miles begins with a single step.",
    author: "Lao Tzu",
  },
  {
    id: uuid.v4(),
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    id: uuid.v4(),
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    id: uuid.v4(),
    text: "You miss 100% of the shots you don’t take.",
    author: "Wayne Gretzky",
  },
  {
    id: uuid.v4(),
    text: "In the middle of every difficulty lies opportunity.",
    author: "Albert Einstein",
  },
  {
    id: uuid.v4(),
    text: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    author: "Ralph Waldo Emerson",
  },
  {
    id: uuid.v4(),
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
];
