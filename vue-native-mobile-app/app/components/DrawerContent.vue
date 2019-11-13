<template lang="html">
    <GridLayout class="sidedrawer sidedrawer-left" rows="auto, *">
        <StackLayout class="sidedrawer-header" row="0">
            <Label class="sidedrawer-header-image fa" text.decode="&#xf2bd;"></Label>
            <Label class="sidedrawer-header-brand" text="User Name"></Label>
            <Label class="footnote" text="username@mail.com"></Label>
        </StackLayout>

        <ScrollView class="sidedrawer-content" row="1">
            <StackLayout>
                <GridLayout :class="'sidedrawer-list-item' + (selectedPage === 'Home' ? ' selected': '')"
                            @tap="onNavigationItemTap(Home)" columns="auto, *">
                    <Label class="fa" col="0" text.decode="&#xf015;"></Label>
                    <Label class="p-r-10" col="1" text="Home"></Label>
                </GridLayout>

                <GridLayout :class="'sidedrawer-list-item' + (selectedPage === 'Browse' ? ' selected': '')"
                            @tap="onNavigationItemTap(Browse)" columns="auto, *">
                    <Label class="fa" col="0" text.decode="&#xf1ea;"></Label>
                    <Label class="p-r-10" col="1" text="Browse"></Label>
                </GridLayout>

                <GridLayout :class="'sidedrawer-list-item' + (selectedPage === 'checkList' ? ' selected': '')"
                            @tap="onNavigationItemTap(checkList)" columns="auto, *">
                    <Label class="fa" col="0" text.decode="&#xf1ea;"></Label>
                    <Label class="p-r-10" col="1" text="check List"></Label>
                </GridLayout>

                <GridLayout :class="'sidedrawer-list-item' + (selectedPage === 'Search' ? ' selected': '')"
                            @tap="onNavigationItemTap(Search)" columns="auto, *">
                    <Label class="fa" col="0" text.decode="&#xf002;"></Label>
                    <Label class="p-r-10" col="1" text="Search"></Label>
                </GridLayout>

                <GridLayout :class="'sidedrawer-list-item' + (selectedPage === 'Featured' ? ' selected': '')"
                            @tap="onNavigationItemTap(Featured)" columns="auto, *">
                    <Label class="fa" col="0" text.decode="&#xf005;"></Label>
                    <Label class="p-r-10" col="1" text="Featured"></Label>
                </GridLayout>

                <StackLayout class="hr-light"></StackLayout>

                <GridLayout :class="'sidedrawer-list-item' + (selectedPage === 'Settings' ? ' selected': '')"
                            @tap="onNavigationItemTap(Settings)" columns="auto, *">
                    <Label class="fa" col="0" text.decode="&#xf013;"></Label>
                    <Label class="p-r-10" col="1" text="Settings"></Label>
                </GridLayout>

                <GridLayout :class="'sidedrawer-list-item' + (selectedPage === 'Add Contributor' ? ' selected': '')"
                            @tap="onNavigationItemTap(AddContributor)" columns="auto, *">
                    <Label class="fa" col="0" text.decode="&#xf013;"></Label>
                    <Label class="p-r-10" col="1" text="Add Contributor"></Label>
                </GridLayout>
            </StackLayout>
        </ScrollView>
    </GridLayout>
</template>

<script>
    import Home from "./Home";
    import Browse from "./Browse";
    import Featured from "./Featured";
    import Search from "./Search";
    import Settings from "./Settings";
    import AddContributor from "./AddContributor";
    import checkList from "./checkList"
    import * as utils from "~/shared/utils";
    import SelectedPageService from "~/shared/selected-page-service";

    export default {
        mounted() {
            SelectedPageService.getInstance().selectedPage$
                .subscribe((selectedPage) => this.selectedPage = selectedPage);
        },
        data() {
            return {
                Home: Home,
                Browse: Browse,
                checkList: checkList,
                Featured: Featured,
                Search: Search,
                Settings: Settings,
                AddContributor: AddContributor,
                selectedPage: ""
            };
        },
        components: {
            Home,
            Browse,
            checkList,
            Featured,
            Search,
            Settings,
            AddContributor
        },
        methods: {
            onNavigationItemTap(component) {
                this.$navigateTo(component, {
                    clearHistory: true
                });
                utils.closeDrawer();
            }
        }
    };
</script>

<style lang="scss" scoped>
    // Custom common variables
    @import '../app-variables';

    // Drawer navigation custom styles
    $sidedrawer-header-image-size: 60;
    $sidedrawer-header-image-offset-top: 20;
    $sidedrawer-header-image-offset-bottom: 5;
    $sidedrawer-list-item-offset-left: 15;
    $sidedrawer-list-icon-offset: 10;
    $sidedrawer-list-icon-size: 20;
    .sidedrawer {
        &.sidedrawer-left {
            background-color: $ab-background;

            .sidedrawer-header-image {
                color: $background-dark;
                height: $sidedrawer-header-image-size;
                width: $sidedrawer-header-image-size;
                font-size: $sidedrawer-header-image-size;
                padding: 0;
                margin-bottom: $sidedrawer-header-image-offset-bottom;
                margin-top: $sidedrawer-header-image-offset-top;
            }

            .footnote {
                color: rgba($ab-color, 0.5);
            }
        }

        .sidedrawer-header {
            background-color: $ab-background;

            .sidedrawer-header-brand {
                color: $ab-color;
            }
        }

        .sidedrawer-content {
            background-color: $side-drawer-background;
        }

        .sidedrawer-list-item {
            padding-left: $sidedrawer-list-item-offset-left;

            Label {
                vertical-align: center;
                color: $blue-dark;
            }

            .fa {
                width: $sidedrawer-list-icon-size;
                margin-right: $sidedrawer-list-icon-offset;
            }

            &.selected {
                background-color: $item-active-background;

                Label {
                    color: $item-active-color;
                }
            }
        }
    }
</style>
