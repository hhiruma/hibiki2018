Vue.component('left-sidebar', {
    data: function(){
        return {
            nextStageInfo: '',
            bgImgUri: bgImgLink,
            showMenu: false,
            mouseOver: false
        }
    },
    template: `
        <div id="LS_container" :class="{LS_menu_show: showMenu, LS_menu_hide: !showMenu, LS_menu_over: mouseOver && !showMenu}">
            <div id="LS_trigger" @click="showMenu = !showMenu" @mouseover="mouseOver=true" @mouseleave="mouseOver=false">
                <template v-if="showMenu">
                    <i class="fas fa-chevron-circle-left" style="margin: 5px 0px;"></i>
                </template>
                <template v-else>
                    <i class="fas fa-chevron-circle-right" style="margin: 5px 0px;"></i>
                </template>
                <div style="font-size: 10px">
                    次回舞台
                </div>
            </div>
            <div id="LS_main_container" @click="showMenu = !showMenu" @mouseover="mouseOver=true" @mouseleave="mouseOver=false">
                <div id="LS_title">
                    ★次回舞台
                </div>
                <div id="LS_content">
                    {{ nextStageInfo }}
                </div>
                <div id="LS_to_stage_page_linker">
                    詳細
                </div>
            </div>
        </div>
    `,
    created: function(){
        pageContent = global_pages.filter(el => {
            return el.title === '舞台一覧'
        })[0].content
        this.nextStageInfo = pageContent.split('==========').filter(el => {return el.split('$')[0] === 'next_stage_small'})[0].split('$')[1]
        console.log(this.nextStageInfo);
    }
})