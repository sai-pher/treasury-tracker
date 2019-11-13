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
            <Label class="action-bar-title" text="Browse"></Label>
        </ActionBar>

        <ScrollView orientation="horizontal">

            <ListView @itemTap="onItemTap" class="list-group" for="contributor in contributors" style="height:1250px">
                <v-template>
                    <FlexboxLayout class="list-group-item" flexDirection="row">
                        <Label :text="contributor.first_name + ` `+ contributor.last_name"
                               class="list-group-item-heading"
                               style="width: 60%"></Label>
                    </FlexboxLayout>
                </v-template>
            </ListView>
        </ScrollView>


    </Page>
</template>

<script>
    import * as utils from "~/shared/utils";
    import SelectedPageService from "../shared/selected-page-service";
    import {mapGetters} from 'vuex'


    import Vue from "nativescript-vue";
    import RadCartesianChart from "nativescript-ui-chart/vue";

    Vue.use(RadCartesianChart);
    require("nativescript-ui-gauge/vue");
    export default {
        data() {
            return {
                countries: [
                    {name: "Australia", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/au.png"},
                    {name: "Belgium", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/be.png"},
                    {name: "Bulgaria", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/bg.png"},
                    {name: "Canada", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/ca.png"},
                    {name: "Switzerland", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/ch.png"},
                    {name: "China", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/cn.png"},
                    {name: "Czech Republic", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/cz.png"},
                    {name: "Germany", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/de.png"},
                    {name: "Spain", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/es.png"},
                    {name: "Ethiopia", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/et.png"},
                    {name: "Croatia", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/hr.png"},
                    {name: "Hungary", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/hu.png"},
                    {name: "Italy", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/it.png"},
                    {name: "Jamaica", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/jm.png"},
                    {name: "Romania", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/ro.png"},
                    {name: "Russia", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/ru.png"},
                    {name: "United States", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/us.png"},
                ],
                gaugeValue: 2
            }
        },
        mounted() {
            SelectedPageService.getInstance().updateSelectedPage("Browse");
        },
        computed: {
            ...mapGetters({
                contributors: "getContributorList"
            })
        },
        methods: {
            onItemTap: function (args) {
                console.log('Item with index: ' + args.index + ' tapped');
            },
            onDrawerButtonTap() {
                utils.showDrawer();
            }
        }
    };
</script>

<style lang="scss" scoped>
    // Start custom common variables
    @import '../app-variables';
    // End custom common variables

    // Custom styles
</style>
