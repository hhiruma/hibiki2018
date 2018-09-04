//全体の挙動を管理するためのVue App
new Vue({
    el: "main",
    data: {
        currentPage: "トップ",
    },
    methods: {
        changePage: function(newPage){
            this.currentPage = newPage
        }
    },
})
