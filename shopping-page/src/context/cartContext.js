import React,{ createContext ,useState} from 'react';

export const cartContext = createContext();

export const CartContextProvider=({children})=>{
	const [ cart, setCart ] = useState([]);
	const [ modal, setModal ] = useState(false);

	const handleModal = () => {
			setModal((e) => !e);
		};
	const addToCart = (name, price) => {

		if (!isNaN(price)) {
			if (cart.find((item) => name === item.name)) {
				console.log (cart)
				setCart((cart) =>
					cart.map((item) => {
						if (item.name === name) {
							return {
								...item,
								count: item.count + 1
							};
						}
						return item;
					})
				);
			} else {
				setCart((cart) => [
					...cart,
					{
						name,
						price, 
						count: 1
					}
				]);
			}
		}
		
	};

    return(
        <cartContext.Provider value={{
			cart , 
			setCart,
			modal,
			setModal,
			addToCart,
			handleModal,
			}}>
            {children}
        </cartContext.Provider>

    )
}
