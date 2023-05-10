//chromeda default hookslara ulaşabilmek için kullandık.
import { useDebugValue, useEffect, useState } from "react";

export function useLocalStorage(key, initialState) {
    const [state, setState] = useState(initialState);
    useDebugValue(state);

    useEffect(() => {
        if(state.length > 0)
        {   //localStorage'a, verilen keyi ve JSON formatına çevirmiş state i bas.
            localStorage.setItem(key, JSON.stringify(state));
        }
            
    }, [state]) //Dependency Array'e sen sadece state değiştiği zaman bu işlemi yap. 

    useEffect(() => { //localstorageden yukarıda verilen key ile eşit olan itemı çek 
            const item = localStorage.getItem(key);
            if(item)
            {
                setState(parse(item));
            }
    }, [state])

    return [state, setState]
}

function parse(obj) {
    try
    {
        return JSON.parse(obj)
    }
    catch
    {
        return obj
    }
}