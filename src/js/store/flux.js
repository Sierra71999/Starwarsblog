const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      favorites: [],
	  item: "",
	  description: {}
    },
    actions: {
      // Use getActions to call a function within a fuction
      setItems: (e) => {
        setStore({
          // favorites: getStore().favorites,
          item: e,
          description: getStore().description,
        });
      },
      setItems: () => {
        setStore({
          //   favorites: getStore().favorites,
          item: getStore().item,
          description: e.result.properties,
        });
      },
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
    },
  };
};

export default getState;
