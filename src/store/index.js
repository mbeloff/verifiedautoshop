import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedMake: "Vehicle Make",
    selectedModel: "Vehicle Model",
    form: {
      name: "",
      number: "",
      email: "",
      make: "Vehicle Make",
      model: "Vehicle Model",
      contactVia: [],
      comments: ""
    },
    makes: [
      {
        label: "Alfa Romeo",
        models: ["test alfa"]
      },
      {
        label: "Audi",
        models: ["test audi"]
      },
      {
        label: "BMW",
        models: [""]
      },
      {
        label: "Chrysler",
        models: [""]
      },
      {
        label: "Citroen",
        models: [""]
      },
      {
        label: "Fiat",
        models: [""]
      },
      {
        label: "Great Wall",
        models: [""]
      },
      {
        label: "Holden",
        models: [""]
      },
      {
        label: "Honda",
        models: [""]
      },
      {
        label: "Hyundai",
        models: [""]
      },
      {
        label: "Isuzu",
        models: [""]
      },
      {
        label: "Jaguar",
        models: [""]
      },
      {
        label: "Jeep",
        models: [""]
      },
      {
        label: "Kia",
        models: [""]
      },
      {
        label: "Land Rover",
        models: [""]
      },
      {
        label: "Lexus",
        models: [""]
      },
      {
        label: "Mazda",
        models: [""]
      },
      {
        label: "Mercedes",
        models: [""]
      },
      {
        label: "Mini",
        models: [""]
      },
      {
        label: "Mitsubishi",
        models: [""]
      },
      {
        label: "Nissan",
        models: [""]
      },
      {
        label: "Peugeot",
        models: [""]
      },
      {
        label: "Porsche",
        models: [""]
      },
      {
        label: "Renault",
        models: [""]
      },
      {
        label: "Suburu",
        models: [""]
      },
      {
        label: "Suzuki",
        models: [""]
      },
      {
        label: "Toyota",
        models: [""]
      },
      {
        label: "Volkswagon",
        models: [""]
      },
      {
        label: "Volvo",
        models: [""]
      }
    ]
  },
  mutations: {
    storeForm(state, n) {
      state.form = n;
      state.form.vehicleMake = "Vehicle Make";
      state.form.vehicleModel = "Vehicle Model";
    }
  },
  actions: {},
  modules: {}
});
