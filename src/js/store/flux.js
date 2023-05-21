const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      favorites: [],
      item: "",
      description: {},
      characters: [],
      planets: [],
      vehicles: [],
      cb_url: "",
      cf_url: "",
    },
    actions: {
      // Use getActions to call a function within a fuction
      //fetchDescription gets the info from the api
      fetchDescription: (e) => {
        fetch(e)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            setStore({
              favorites: getStore().favorites,
              item: getStore().item,
              description: data.result.properties,
            });
          });
      },
      //setItem spits it out
      setItems: (e) => {
        setStore({
          // favorites: getStore().favorites,
          item: e,
          description: getStore().description,
        });
      },

      getCharacters: () => {
        const characters = getStore().characters;
        return characters();
      },
      getPlanets: () => {
        const planets = getStore().planets;
        return planets();
      },
      getVehicles: () => {
        const vehicles = getStore().vehicles;
        return vehicles();
      },
      addFavorite: (item) => {
        const cb_url = getStore().cb_url;
        let f = getStore().favorites;

        fetch(cb_url + "/api/favorites", opts)
          .then((response) => response.json())
          .then((data) => {
            if (data.msg == "ok") {
              f.push(item);
              setStore({ favorites: f });
            }
          })
          .catch((error) => {
            console.log(error);
          });
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
    },
  };
};

export default getState;
