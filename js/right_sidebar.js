Vue.component('right-sidebar', {
    props: ['current-page'],
    data: function(){
        return {
            pageList: global_pages,
            pageTitleList: [],
        }
    },
    computed: {
        currentPg: function(){
            return this.currentPage
        }
    },
    template: `
        <div id="RS_container">
            <div id="RS_trigger">
                メニュー
            </div>

            <div id="RS_main_container">
                <div id="RS_page_selector">
                    <div id="RS_page_selector_header">
                        ページ
                    </div>
                    <div class="RS_page_selector_el" v-for="title in pageTitleList" @click="$emit('change-page', title)">
                        <div class="RS_page_selector_highlighter" v-if="title == currentPg">
                            画像：　{{ title }}
                        </div>
                        <template v-else>
                            画像：　{{ title }}
                        </template>
                    </div>
                </div>
                <hr>
                <div id="RS_twitter">
                </div>
            </div>
        </div>
    `,
    created: function(){
        for(page of this.pageList){
            this.pageTitleList.unshift(page.title)
        }
    }
})