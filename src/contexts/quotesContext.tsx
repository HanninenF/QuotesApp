import { createContext, useState } from "react";
import { QuotesType } from "../types/quotesTypes";
import { quotesData } from "../data/quotes";

type QuotesContextProps = {
  quotes: QuotesType[];
  setQuotes: React.Dispatch<React.SetStateAction<QuotesType[]>>;
};

export const quotesContext = createContext<QuotesContextProps | null>(null);

export const QuotesContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [quotes, setQuotes] = useState<QuotesType[]>(quotesData);

  return (
    <quotesContext.Provider value={{ quotes, setQuotes }}>
      {children}
    </quotesContext.Provider>
  );
};
