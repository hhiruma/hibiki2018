Vue.component('main-container', {
    props: ['current-page'],
    data: function(){
        return {
            showContainer: false
        }
    },
    template: `
        <div id="MC_container" :class="{MC_container_show: showContainer, MC_container_hidden: !showContainer}">
        </div>
    `,
    watch: {
        currentPage: function (newPage){
            if (newPage === "トップ"){
                this.showContainer = false
            } else {
                this.showContainer = true
            }
        }
    }
})