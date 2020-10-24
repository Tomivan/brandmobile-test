<template>
    <div class="pages">
        <Sidebar/>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import Sidebar from '../components/sidebar'
export default {
    name: 'Pages',
    components: Sidebar
}
</script>

<style scoped>
.pages{
    display: flex;
}
.content{
    background-color: #edf0f0;
}
</style>