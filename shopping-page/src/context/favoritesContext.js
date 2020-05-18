import React,{ createContext ,useState } from 'react';

export const favoritesContext = createContext();

export const FavoritesContextProvider=({children})=>{
    
	const [favorites, setFavorites]  = useState([]);

	const addToFavorites = (name, price) => {
		if (!isNaN(price)) {
			const isAvailable = favorites.find((item) => name === item.neme);

			if (isAvailable) {
				setFavorites((favorites) =>
					favorites.map((item) => {
						if (item.neme === name) {
							return {
								...item,
								liked: item.count + 1
							};
						}
						return item;
					})
				);
			} else {
				setFavorites((favorites) => [
					...favorites,
					{
						name,
						price,
						liked: 1
					}
				]);
			}
		}
	};



    return(
        <favoritesContext.Provider value={{favorites, setFavorites , addToFavorites}}
		>{children}
        </favoritesContext.Provider>

    )
}
