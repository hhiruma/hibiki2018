Vue.component('left-sidebar', {
    data: function(){
        return {
            nextStageInfo: ''
        }
    },
    template: `
        <div id="LS_container">
            <div id="LS_trigger">
                次回舞台
            </div>
            <div id="LS_main_container">
                <div id="LS_title">
                    次回舞台
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