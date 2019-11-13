<template>
    <Page class="page">
        <ActionBar class="action-bar">
            <!--
            Use the NavigationButton as a side-drawer button in Android
            because ActionItems are shown on the right side of the ActionBar
            -->
            <NavigationButton @tap="onDrawerButtonTap" icon="res://menu" ios:visibility="collapsed"></NavigationButton>
            <!--
            Use the ActionItem for IOS with position set to left. Using the
            NavigationButton as a side-drawer button in iOS is not possible,
            because its function is to always navigate back in the application.
            -->
            <ActionItem @tap="onDrawerButtonTap"
                        android:visibility="collapsed"
                        icon="res://navigation/menu"
                        ios.position="left">
            </ActionItem>
            <Label class="action-bar-title" text="Add Contributor"></Label>
        </ActionBar>

        <StackLayout class="form">
            <Label text="Please fill out the form for a new contributor."></Label>
            <Label :text="count"></Label>

            <GridLayout rows="auto, auto, auto">

                <DockLayout class="input-field" row="0" stretchLastChild="false">
                    <StackLayout class="input-field" dock="left" width="45%">
                        <TextField autocapitalizationType="none" autocorrect="false"
                                   class="input"
                                   hint="First Name"
                                   returnKeyType="next" v-model="fname"></TextField>
                        <StackLayout class="hr-light"></StackLayout>
                    </StackLayout>
                    <StackLayout class="input-field" dock="right" width="45%">
                        <TextField autocapitalizationType="none" autocorrect="false"
                                   class="input"
                                   hint="Last Name"
                                   returnKeyType="next" v-model="lname"></TextField>
                        <StackLayout class="hr-light"></StackLayout>
                    </StackLayout>
                </DockLayout>

                <StackLayout class="input-field" row="1">
                    <TextField autocapitalizationType="false" autocorrect="false"
                               class="input" hint="Email"
                               keyboardType="email"
                               returnKeyType="next" v-model="email"></TextField>
                    <StackLayout class="hr-light"></StackLayout>
                </StackLayout>

                <StackLayout class="input-field" row="2">
                    <TextField class="input" hint="Phone number"
                               keyboardType="phone"
                               returnKeyType="done" v-model="pnum"></TextField>
                    <StackLayout class="hr-light"></StackLayout>
                </StackLayout>
            </GridLayout>

            <DockLayout stretchLastChild="false">

                <Button @tap="" class="btn btn-outline m-t-20" dock="left"
                        text="Cancel" width="30%"></Button>
                <Button @tap="myCount" class="btn btn-outline m-t-20" dock="center"
                        text="count" width="30%"></Button>
                <Button @tap="onAddNewContributor" class="btn btn-primary m-t-20" dock="right"
                        text="Add" width="30%"></Button>
            </DockLayout>

        </StackLayout>
    </Page>
</template>

<script>

    import {mapMutations} from 'vuex'
    import * as utils from "~/shared/utils";
    import SelectedPageService from "../shared/selected-page-service";

    export default {
        mounted() {
            SelectedPageService.getInstance().updateSelectedPage("AddContributor");
        },
        computed: {
            message() {
                return {
                    name: "AddContributor"
                };
            },
            count() {
                return this.$store.state.count;
            }
        },
        methods: {
            onDrawerButtonTap() {
                utils.showDrawer();
            },

            onAddNewContributor() {
                if (this.fname && this.lname) {
                    let c = {
                        id: this.count,
                        first_name: this.fname,
                        last_name: this.lname,
                        email: this.email,
                        phone_number: this.pnum,
                        base_contribution: 50,
                        contributions: [
                            {date: "01-05-2019", amount: 0, paid: false},
                        ]
                    };

                    this.$store.dispatch("addContributorAsync", c).then(
                        console.log("Success: contributor added")
                    );
                    // this.myCount();

                    this.fname = "";
                    this.lname = "";
                    this.email = "";
                    this.pnum = "";

                    console.log(c)
                }
            },

            // myCount(){
            //     this.$store.commit('incrementCount');
            // },

            ...mapMutations({
                myCount: 'incrementCount',
            })
        },
        data() {
            return {
                fname: "",
                lname: "",
                email: "",
                pnum: "",
                name: "AddContributor",

                contributors: []
            };
        }
    };

    // export default {
    //     data() {
    //         return {textFieldValue: "",}
    //     },
    //     name: "AddContributor"
    // }
</script>

<style scoped>

</style>
