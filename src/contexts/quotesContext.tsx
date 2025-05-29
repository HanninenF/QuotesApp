import { createContext, useState } from "react";
import { QuotesType } from "../types/quotesTypes";
import { quotesData } from "../data/quotes";

type QuotesContextProps = {
  quotes: QuotesType[];
  setQuotes: React.Dispatch<React.SetStateAction<QuotesType[]>>;
  quotesIndex: number;
  setQuotesIndex: React.Dispatch<React.SetStateAction<number>>;
};

export const quotesContext = createContext<QuotesContextProps | null>(null);

export const QuotesContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [quotes, setQuotes] = useState<QuotesType[]>(quotesData);
  const [quotesIndex, setQuotesIndex] = useState(0);

  return (
    <quotesContext.Provider
      value={{ quotes, setQuotes, quotesIndex, setQuotesIndex }}
    >
      {children}
    </quotesContext.Provider>
  );
};
