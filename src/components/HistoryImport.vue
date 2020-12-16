<template>
    <list :listData="listData"></list>
</template>

<script>
    import listDate from './../assets/mock/listDate.json'
    import List from "./List";
    export default {
        name: "HistoryImport",
        components: {List},
        data() {
            return{
                listData: []
            }
        },
        mounted() {
            this.listData = listDate;
        }
    }
</script>

<style scoped>

</style>
