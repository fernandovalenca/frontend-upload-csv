import { useState, createContext, PropsWithChildren } from "react";

type Product = {
  code: number;
  name: string;
  cost_price: number;
  sales_price: number;
  new_price: number;
  error: string;
};

type StatePropsType = {
  products: Product[];
};

type AppContextType = {
  state: {
    products: Product[];
  };
  setState: (state: StatePropsType) => void;
};

const INITIAL_STATE: AppContextType = {
  state: {
    products: [],
  },
  setState: () => {
    throw new Error("Function not implemented");
  },
};

export const AppContext = createContext(INITIAL_STATE);

const AppContextProvider = ({ children }: PropsWithChildren) => {
  const [state, setContext] = useState<StatePropsType>(INITIAL_STATE.state);

  const setState = (state: StatePropsType) => {
    setContext((prevState) => ({
      ...prevState,
      ...state,
    }));
  };

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
