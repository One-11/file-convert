<template>
    <list :listData="listData"></list>
</template>

<script>
    // import tableData from './../assets/mock/table.json'
    import listDate from './../assets/mock/listDate.json'
    import List from "./List";
    export default {
        name: "Import",
        components: {List},
        data() {
            return{
                listData: []
            }
        },
        mounted() {
            this.listData = listDate;
            // axios.get('../assets/mock/table.json')
            //     .then(res => {
            //         console.log(res);
            //         this.tableData = res
            //         });
        }
    }
</script>

<style scoped>

</style>
