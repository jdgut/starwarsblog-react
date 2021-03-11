const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			apiUrl: "https://swapi.dev/api",
			characters: [],
			planets: [],
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
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
			}
		}
	};
};

export default getState;