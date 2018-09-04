Vue.component('right-sidebar', {
    props: ['current-page'],
    data: function(){
        return {
            pageList: global_pages,
            pageTitleList: [],
            bgImgUri: bgImgLink,
            showMenu: true,
            mouseOver: false
        }
    },
    computed: {
        currentPg: function(){
            return this.currentPage
        }
    },
    template: `
        <div id="RS_container" :class="{RS_menu_show: showMenu, RS_menu_hide: !showMenu, RS_menu_over: mouseOver && !showMenu}">
            <div id="RS_trigger" @click="showMenu = !showMenu" @mouseover="mouseOver=true" @mouseleave="mouseOver=false">
                <template v-if="showMenu">
                    <i class="fas fa-chevron-circle-right" style="margin: 5px 0px;"></i>
                </template>
                <template v-else>
                    <i class="fas fa-chevron-circle-left" style="margin: 5px 0px;"></i>
                </template>
                <div style="font-size: 10px;">
                    メニュー
                </div>
            </div>

            <div id="RS_main_container" @mouseover="mouseOver=true" @mouseleave="mouseOver=false" @click="showMenu = !showMenu">
                <div id="RS_page_selector">
                    <div id="RS_page_selector_header">
                        <i class="fas fa-layer-group"></i>
                        ページ一覧
                    </div>
                    <div class="RS_page_selector_el" v-for="title in pageTitleList" @click="$emit('change-page', title)" >
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
                    <div id="RS_page_selector_header">
                        <i class="fab fa-twitter"></i>
                        Twitter
                    </div>
                    <a class="twitter-timeline"  href="https://twitter.com/sakigake_hibiki" data-widget-id="354643685218066432" data-width="255" data-height="1000" data-chrome="noheader nofooter" data-aria-polite="assertive">Twitter</a>
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