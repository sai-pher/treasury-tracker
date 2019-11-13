import Vue from "nativescript-vue";
import Vuex from 'vuex';

Vue.use(Vuex);

const dataStore = new Vuex.Store({
    state: {
        count: 1,
        contributors: [
            {
                id: 0,
                first_name: "Ari",
                last_name: "Woode",
                email: "arimanwd@gmail.com",
                phone_number: "0264339966",
                base_contribution: 50,
                contributions: [
                    {date: "01-01-2019", amount: 50, paid: true},
                    {date: "01-02-2019", amount: 50, paid: true},
                    {date: "01-03-2019", amount: 50, paid: true},
                    {date: "01-04-2019", amount: 50, paid: true},
                    {date: "01-05-2019", amount: 0, paid: false},
                ]
            }
        ]
    },
    getters: {
        getContributorList(state) {
            return state.contributors;
        },
        getContributorNotPaidList(state) {
            return state.contributors.filter((item) => {
                return item.contributions[item.contributions.length - 1].paid === false;
            })
        },
        getContributor: (state) => (id) => {
            return state.contributors.find(contributor => contributor.id === id)
        },
        getContributorContributions: (state) => (id) => {
            return state.contributors.map((contributor) => {
                if (contributor.id === id) {
                    return contributor.contributions;
                }
            })
        },

        getNumContributors(state) {
            return state.contributors.length
        },
        getTotalContribution(state) {
            let sum = 0;
            state.contributors.forEach((contributor) => {
                contributor.contributions.forEach(contribution => {
                    sum += contribution.amount
                })
            })
        }
    },
    mutations: {
        incrementCount(state) {
            return state.count += 1;
        },

        addContributor(state, new_contributor) {
            state.contributors.push(new_contributor);
            // console.log(new_contributor["first_name"] + " Has been added")
        },

        addContribution(state) {
        }
    },
    actions: {
        addContributorAsync({state, commit}, n_c) {
            return new Promise((resolve, reject) => {
                commit("addContributor", n_c);
                resolve();
            }).then(() => {
                console.log(n_c.first_name + " has been added");
                commit("incrementCount");
            })
        }
    }
});

export default dataStore;
