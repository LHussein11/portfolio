import React, { useState, createContext, useContext, ReactNode, Dispatch, SetStateAction } from 'react';

type LangContextType = {
    lang: 'en' | 'sv';
    setLang: Dispatch<SetStateAction<'en' | 'sv'>>;
}

export const LangCxt = createContext<LangContextType | undefined>(undefined)

const LangProvider:  React.FC<{ children: ReactNode }> = ({ children }) => {
    const [lang, setLang] = useState<'en' | 'sv'>('sv');
  return (
    <LangCxt.Provider value={{lang, setLang}}>
        {children}
    </LangCxt.Provider>
  )
}

export const useLang = () => {
    const context = useContext(LangCxt);
    if (!context) {
      throw new Error('useLang must be used within a LangProvider');
    }
    return context;
}  


export default LangProvider