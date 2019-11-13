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
            <Label class="action-bar-title" text="Check List"></Label>
        </ActionBar>

        <ScrollView orientation="vertical">
            <ListView class="m-15 list-group" for="contributor in contributors">
                <v-template>
                    <DockLayout class="list-group-item" stretchLastChild="false">
                        <Label :text="`${contributor.first_name} ${contributor.last_name}`" class="h3" dock="left"
                               height="50" width="60%"></Label>
                        <DockLayout dock="right" stretchLastChild="false" width="40%">
                            <Label :text="contributor.base_contribution" class="h3" dock="left" height="50"
                                   width="40%"></Label>
                            <Button @tap="onPaidTap(contributor)" dock="right" text="Paid" width="60%"></Button>
                        </DockLayout>
                    </DockLayout>
                </v-template>

            </ListView>
        </ScrollView>

    </Page>

</template>

<script>
    import * as SelectedPageService from "../shared/selected-page-service";
    import * as utils from "~/shared/utils";
    import Vue from "nativescript-vue";
    import RadDataForm from "nativescript-ui-dataform/vue";
    import {mapGetters} from 'vuex'

    const dialogs = require('tns-core-modules/ui/dialogs');

    Vue.use(RadDataForm);
    export default {
        data() {
            return {
                textFieldValue: "",
                pageName: "Check List"
            }
        },
        mounted() {
            SelectedPageService.getInstance().updateSelectedPage("checkList");
        },
        computed: {
            ...mapGetters({
                contributors: "getContributorNotPaidList"
            })
        },
        methods: {
            onPaidTap(contributor) {
                console.log("Paid button was pressed");
                prompt({
                    title: "Amount Paid",
                    message: "How much was paid",
                    okButtonText: "OK",
                    cancelButtonText: "Cancel",
                    defaultText: `${contributor.base_contribution}`,
                    inputType: dialogs.inputType.text
                }).then(result => {
                    console.log(`Dialog result: ${result.result}, text: ${result.text}`);
                    if (result.result === true) {
                        // TODO: make a mutator method in store
                        contributor.contributions[contributor.contributions.length - 1].amount = result.text;
                        contributor.contributions[contributor.contributions.length - 1].paid = result.result;
                    }
                });
            },
            onDrawerButtonTap() {
                utils.showDrawer();
            }
        },
        name: "checkList"
    }
</script>

<style scoped>

</style>
