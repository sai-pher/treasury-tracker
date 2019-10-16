<template lang="html">
    <RadSideDrawer :drawerTransition="transition" drawerLocation="Left" gesturesEnabled="true" ref="drawer">
        <StackLayout backgroundColor="#ffffff" ~drawerContent>
            <slot name="drawerContent"></slot>
        </StackLayout>
        <Frame ref="drawerMainContent" ~mainContent>
            <slot name="mainContent"></slot>
        </Frame>
    </RadSideDrawer>
</template>

<script>
    import {SlideInOnTopTransition} from 'nativescript-ui-sidedrawer';

    export default {
        data() {
            return {
                transition: new SlideInOnTopTransition()
            }
        }
    }
</script>

<style lang="css">
</style>
