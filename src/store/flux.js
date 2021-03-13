const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			apiUrl: "https://swapi.dev/api",
			characters: [],
			planets: [],
			favorites: []
		},
		actions: {
			initializeData: () => {
				getActions().setCharacters();
				getActions().setPlanets();
			},
			setCharacters: async () => {
				const endpoint = `${getStore().apiUrl}/people/`;
				const data = await getActions().queryApi(endpoint);
				if ((await "results") in data) {
					setStore({ characters: data.results });
				}
			},
			setPlanets: async () => {
				const endpoint = `${getStore().apiUrl}/planets/`;
				const data = await getActions().queryApi(endpoint);
				if ((await "results") in data) {
					setStore({ planets: data.results });
				}
			},
			queryApi: async endpoint => {
				const response = await fetch(endpoint);
				try {
					if (response.ok) {
						const data = await response.json();
						return data;
					} else {
						return response;
					}
				} catch (error) {
					throw new Error(error);
				}
			},
			addToFavorites: (id, type) => {
				const el = `${id}-${type}`;
				setStore({ favorites: [...getStore().favorites, el]});
			},
			removeFromFavorites: (id, type) => {
				const el = `${id}-${type}`;
				const newFavorites = getStore().favorites.filter( i => i !== el);
				setStore({favorites: newFavorites });
			},
			saveToStorage: () => {
				localStorage.setItem('starwarsapi', getStore());
			}
		}
	};
};

export default getState;