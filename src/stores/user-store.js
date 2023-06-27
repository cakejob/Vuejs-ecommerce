import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
    token: "",
  }),
  actions: {
    setUserDetails(res) {
      this.id = res.data.user.id;
      this.token = res.data.token;

      this.$state.firstName = res.data.user.first_name;
      this.$state.lastName = res.data.user.last_name;
      this.$state.email = res.data.user.email;
    },
    clearUser() {
      this.$state.id = 0;
      this.$state.token = "";
      this.$state.firstName = "";
      this.$state.lastName = "";
      this.$state.email = "";
    },
  },
  persist: true,
});
