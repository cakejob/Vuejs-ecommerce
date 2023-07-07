import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    id: 0,
    token: "",
    firstName: "",
    lastName: "",
    email: "",
    location: "",
    description: "",
  }),
  actions: {
    setUserDetails(res) {
      this.id = res.data.user.id;
      this.token = res.data.token;

      this.$state.firstName = res.data.user.first_name;
      this.$state.lastName = res.data.user.last_name;
      this.$state.email = res.data.user.email;
      this.$state.location = res.data.user.location;
      this.$state.description = res.data.user.description;
    },
    clearUser() {
      this.$state.id = 0;
      this.$state.token = "";
      this.$state.firstName = "";
      this.$state.lastName = "";
      this.$state.email = "";
      this.$state.location = "";
      this.$state.description = "";
      t;
    },
  },
  persist: true,
});
