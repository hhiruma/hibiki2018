var topMenubarElement = Vue.component('top-menubar-element',{
    props: ['title', 'currentPage'],
    template: `
        <div v-if="title == currentPage" class="TM_element hvr-underline-from-left">
            {{ title }}
        </div>
        <div v-else class="TM_element hvr-underline-from-center" @click="$emit('changePage', title)">
            {{ title }}
        </div>
    `,
})

Vue.component('top-menubar', {
    props: ['current-page'],
    data: function(){
        return {
            pageList: global_pages,
            pageTitleList: []
        }
    },
    template: `
        <div id="TM_container">
            <top-menubar-element v-for="title in pageTitleList" :title="title" :currentPage="currentPage" @changePage="changePage">
            </top-menubar-element>
        </div>
    `,
    components: {
        'top-menubar-element': topMenubarElement
    },
    methods: {
        changePage(newTitle){
            this.$emit('change-page', newTitle)
        }
    },
    created: function(){
        for(page of this.pageList){
            this.pageTitleList.unshift(page.title)
        }
    }
})