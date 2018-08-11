var topMenubarElement = Vue.component('top-menubar-element',{
    props: ['title', 'currentPage'],
    template: `
        <div v-if="title == currentPage" class="TM_element hvr-underline-from-left">
            {{ title }}
        </div>
        <div v-else class="TM_element hvr-underline-from-center">
            {{ title }}
        </div>
    `,
    created: function(){
        console.log(this.title);
        console.log(this.currentPage);
    }
})

Vue.component('top-menubar', {
    props: ['current-page'],
    data: function(){
        return {
            pageList: global_pages,
            pageTitleList: []
            // pageTitleList: global_pages.map(x => delete x['content'])
        }
    },
    template: `
        <div id="TM_container">
            <top-menubar-element v-for="title in pageTitleList" :title="title" :currentPage="currentPage">
            </top-menubar-element>
        </div>
    `,
    components: {
        'top-menubar-element': topMenubarElement
    },
    created: function(){
        for(page of this.pageList){
            this.pageTitleList.unshift(page.title)
        }
        console.log(this.pageTitleList)
    }
})