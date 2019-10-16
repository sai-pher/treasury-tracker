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

        <GridLayout class="page-content">
            <Label class="page-icon fa" text.decode="&#xf1ea;"></Label>
            <Label :text="message" class="page-placeholder"></Label>
        </GridLayout>

    </Page>
</template>

<script>
    import * as utils from "~/shared/utils";
    import SelectedPageService from "../shared/selected-page-service";

    export default {
        mounted() {
            SelectedPageService.getInstance().updateSelectedPage("Browse");
        },
        computed: {
            message() {
                return "<!-- Page content goes here -->";
            }
        },
        methods: {
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
