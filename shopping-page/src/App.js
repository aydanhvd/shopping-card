import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Homepage, Cart, Favorites } from './pages';
import { ProductsContextProvider } from './context/products';
import { FavoritesContextProvider } from './context/favoritesContext';
import { CartContextProvider } from './context/cartContext';

function App() {
	return (
		<Router>
			<ProductsContextProvider>
				<FavoritesContextProvider>
					<CartContextProvider>
						<Switch>
							<Route exact path="/" component={Homepage} />
							<Route exact path="/cart" component={Cart} />
							<Route exact path="/favorites" component={Favorites} />
						</Switch>
					</CartContextProvider>
				</FavoritesContextProvider>
			</ProductsContextProvider>
		</Router>
	);
}

export default App;
