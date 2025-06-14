import splitText from "./splitText.js";
;(() => {
  ;(function () {
    'use strict'
    try {
      if (typeof document != 'undefined') {
        var e = document.createElement('style')
        ;(e.id = 'canvas-editor-style'),
          e.appendChild(
            document.createTextNode(
              '.ce-select-control-popup{max-width:160px;min-width:69px;max-height:225px;position:absolute;z-index:1;border:1px solid #e4e7ed;border-radius:4px;background-color:#fff;box-shadow:0 2px 12px #0000001a;box-sizing:border-box;margin:5px 0;overflow-y:auto}.ce-select-control-popup ul{list-style:none;padding:3px 0;margin:0;box-sizing:border-box}.ce-select-control-popup ul li{font-size:13px;padding:0 20px;position:relative;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:#666;height:36px;line-height:36px;box-sizing:border-box;cursor:pointer}.ce-select-control-popup ul li:hover{background-color:#eef2fd}.ce-select-control-popup ul li.active{color:var(--COLOR-HOVER, #5175f4);font-weight:700}.ce-date-container{display:none;width:300px;overflow:hidden;left:0;right:0;position:absolute;z-index:1;color:#606266;background:#ffffff;border-radius:4px;padding:10px;user-select:none;border:1px solid #e4e7ed;box-shadow:0 2px 12px #0000001a}.ce-date-container.active{display:block}.ce-date-wrap{display:none}.ce-date-wrap.active{display:block}.ce-date-title{display:flex;justify-content:center;align-items:center;text-align:center;color:#606266;font-size:16px}.ce-date-title>span{display:inline-block}.ce-date-title>span:not(.ce-date-title__now){font-family:cursive;cursor:pointer}.ce-date-title>span:not(.ce-date-title__now):hover{color:#5175f4}.ce-date-title .ce-date-title__pre-year,.ce-date-title .ce-date-title__pre-month{width:15%}.ce-date-title .ce-date-title__now{width:40%}.ce-date-title .ce-date-title__next-year,.ce-date-title .ce-date-title__next-month{width:15%}.ce-date-week{width:100%;display:flex;justify-content:center;margin-top:15px;padding-bottom:5px;border-bottom:1px solid #e4e7ed}.ce-date-week>span{list-style:none;width:14.28571%;text-align:center;color:#606266;font-size:14px}.ce-date-day{width:100%;display:flex;flex-wrap:wrap;align-items:center;margin-top:5px}.ce-date-day>div{width:14.28571%;height:40px;text-align:center;color:#606266;font-size:14px;cursor:pointer;line-height:40px;border-radius:4px}.ce-date-day>div:hover{color:#5175f4;opacity:.8}.ce-date-day>div.active{color:#5175f4;font-weight:700}.ce-date-day>div.disable{color:#c0c4cc}.ce-date-day>div.select{color:#fff;background-color:#5175f4}.ce-time-wrap{display:none;padding:10px;height:286px}.ce-time-wrap ::-webkit-scrollbar{width:0}.ce-time-wrap.active{display:flex}.ce-time-wrap li{list-style:none}.ce-time-wrap>li{width:33.3%;height:100%;text-align:center}.ce-time-wrap>li>span{transform:translateY(-5px);display:inline-block}.ce-time-wrap>li>ol{height:calc(100% - 20px);overflow-y:auto;border:1px solid #e2e2e2;position:relative}.ce-time-wrap>li:first-child>ol{border-right:0}.ce-time-wrap>li:last-child>ol{border-left:0}.ce-time-wrap>li>ol>li{line-height:30px;cursor:pointer;transition:all .3s}.ce-time-wrap>li>ol>li:hover{background-color:#eaeaea}.ce-time-wrap>li>ol>li.active{color:#fff;background:#5175F4}.ce-date-menu{width:100%;height:28px;display:flex;justify-content:flex-end;align-items:center;padding-top:10px;position:relative;border-top:1px solid #e4e7ed}.ce-date-menu button{display:inline-block;line-height:1;white-space:nowrap;cursor:pointer;background:#fff;border:1px solid #dcdfe6;color:#606266;appearance:none;text-align:center;box-sizing:border-box;outline:none;transition:.1s;font-weight:500;user-select:none;padding:7px 15px;font-size:12px;border-radius:3px;margin:0 0 0 10px}.ce-date-menu button:hover{color:#5175f4;border-color:#5175f4}.ce-date-menu button.ce-date-menu__time{border:1px solid transparent;position:absolute;left:0;margin-left:0}.ce-date-menu button.ce-date-menu__time:hover{color:#5175f4}.ce-block-item{position:absolute;z-index:0;overflow:hidden;border-radius:8px;background-color:#fff;border:1px solid rgb(235 236 240)}.ce-table-tool__row{position:absolute;width:12px;border-radius:6.5px;overflow:hidden;background-color:#e2e6ed}.ce-table-tool__row .ce-table-tool__row__item{width:100%;position:relative;cursor:pointer;transition:all .3s}.ce-table-tool__row .ce-table-tool__row__item:after{content:"";position:absolute;bottom:0;left:2px;width:8px;height:1px;background-color:#c0c6cf}.ce-table-tool__row .ce-table-tool__row__item:hover{background-color:#dadce0}.ce-table-tool__row .ce-table-tool__row__item:last-child:after{display:none}.ce-table-tool__quick__add{width:16px;height:16px;position:absolute;border-radius:50%;background-color:#e2e6ed;cursor:pointer}.ce-table-tool__quick__add:after{content:"+";color:#fff;position:absolute;top:50%;left:50%;transform:translate(-50%,-55%)}.ce-table-tool__select{width:16px;height:18px;position:absolute;border-radius:3px;cursor:pointer}.ce-table-tool__select:hover{background-color:#e2e6ed}.ce-table-tool__select:after{content:":::";color:#aaaaab;position:absolute;top:50%;left:50%;transform:translate(-75%,-50%) rotate(-90deg)}.ce-table-tool__col{position:absolute;height:12px;border-radius:6.5px;overflow:hidden;background-color:#e2e6ed;display:flex}.ce-table-tool__col .ce-table-tool__col__item{height:100%;position:relative;cursor:pointer;transition:all .3s}.ce-table-tool__col .ce-table-tool__col__item:after{content:"";position:absolute;top:2px;left:-1px;width:1px;height:8px;z-index:1;background-color:#c0c6cf}.ce-table-tool__col .ce-table-tool__col__item:hover{background-color:#dadce0}.ce-table-tool__col .ce-table-tool__col__item:first-child:after{display:none}.ce-table-tool__row .ce-table-tool__row__item.active,.ce-table-tool__col .ce-table-tool__col__item.active{background-color:#c4d7fa}.ce-table-tool__col .ce-table-tool__anchor{right:-5px;width:10px;height:12px;z-index:9;position:absolute;cursor:col-resize}.ce-table-tool__row .ce-table-tool__anchor{bottom:-5px;left:0;width:12px;height:10px;z-index:9;position:absolute;cursor:row-resize}.ce-table-anchor__line{z-index:9;position:absolute;border:1px dotted #000000}.ce-table-tool__border{position:absolute;z-index:1;background:transparent;pointer-events:none}.ce-table-tool__border__row{position:absolute;cursor:row-resize;pointer-events:auto}.ce-table-tool__border__col{position:absolute;cursor:col-resize;pointer-events:auto}.ce-resizer-selection{position:absolute;border:1px solid;pointer-events:none}.ce-resizer-selection .resizer-handle{position:absolute;z-index:9;width:10px;height:10px;box-shadow:0 1px 4px #0000004d;border-radius:5px;border:2px solid #ffffff;box-sizing:border-box;pointer-events:initial}.ce-resizer-selection .handle-0{cursor:nw-resize}.ce-resizer-selection .handle-1{cursor:n-resize}.ce-resizer-selection .handle-2{cursor:ne-resize}.ce-resizer-selection .handle-3{cursor:e-resize}.ce-resizer-selection .handle-4{cursor:se-resize}.ce-resizer-selection .handle-5{cursor:s-resize}.ce-resizer-selection .handle-6{cursor:sw-resize}.ce-resizer-selection .handle-7{cursor:w-resize}.ce-resizer-size-view{display:flex;align-items:center;height:20px;white-space:nowrap;position:absolute;z-index:9;top:-30px;left:0;opacity:.9;background-color:#000;padding:0 5px;border-radius:4px}.ce-resizer-size-view span{color:#fff;font-size:12px}.ce-resizer-image{position:absolute;opacity:.5}.ce-image-previewer{position:fixed;left:0;top:0;z-index:1000;width:100%;height:100%;overflow:hidden;background:#f2f4f7;display:flex;align-items:center;justify-content:center;animation:previewerAnimation .3s}@keyframes previewerAnimation{0%{opacity:.1}to{opacity:1}}.ce-image-previewer .image-close{width:24px;height:24px;display:inline-block;position:absolute;right:50px;top:30px;z-index:99;cursor:pointer;background:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIzLjk3IDdsMS40MTUgMS40MTQtNy43NzkgNy43NzggNy43NzkgNy43NzktMS40MTQgMS40MTQtNy43NzktNy43NzktNy43NzggNy43NzlMNyAyMy45N2w3Ljc3OC03Ljc3OUw3IDguNDE0IDguNDE0IDdsNy43NzggNy43NzhMMjMuOTcxIDd6IiBmaWxsPSIjM0Q0NzU3IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=) no-repeat;background-size:100% 100%;transition:all .3s;border-radius:50%}.ce-image-previewer .image-close:hover{background-color:#e2e6ed}.ce-image-previewer .ce-image-container{position:relative}.ce-image-previewer .ce-image-container img{cursor:move;position:relative}.ce-image-previewer .ce-image-menu{height:50px;position:absolute;bottom:50px;z-index:99;display:flex;align-items:center;justify-content:center}.ce-image-previewer .ce-image-menu i{width:32px;height:32px;margin:0 8px;cursor:pointer;display:inline-block;background-repeat:no-repeat;background-size:100% 100%;transition:all .3s;border-radius:50%}.ce-image-previewer .ce-image-menu i:hover{background-color:#e2e6ed}.ce-image-previewer .ce-image-menu i.zoom-in{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE0IDE0di00aDJ2NGg0djJoLTR2NGgtMnYtNGgtNHYtMmg0em04Ljc0OSAxMC4xNjNBMTEuOTUyIDExLjk1MiAwIDAxMTUgMjdDOC4zNzMgMjcgMyAyMS42MjcgMyAxNVM4LjM3MyAzIDE1IDNzMTIgNS4zNzMgMTIgMTJjMCAyLjk1NC0xLjA2NyA1LjY1OC0yLjgzNyA3Ljc0OWw0LjkwOCA0LjkwOC0xLjQxNCAxLjQxNC00LjkwOC00LjkwOHpNMTUgMjVjNS41MjMgMCAxMC00LjQ3NyAxMC0xMFMyMC41MjMgNSAxNSA1IDUgOS40NzcgNSAxNXM0LjQ3NyAxMCAxMCAxMHoiIGZpbGw9IiMzRDQ3NTciLz48L3N2Zz4=)}.ce-image-previewer .ce-image-menu i.zoom-out{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIyLjc0OSAyNC4xNjNBMTEuOTUyIDExLjk1MiAwIDAxMTUgMjdDOC4zNzMgMjcgMyAyMS42MjcgMyAxNVM4LjM3MyAzIDE1IDNzMTIgNS4zNzMgMTIgMTJjMCAyLjk1NC0xLjA2NyA1LjY1OC0yLjgzNyA3Ljc0OWw0LjkwOCA0LjkwOC0xLjQxNCAxLjQxNC00LjkwOC00LjkwOHpNMTUgMjVjNS41MjMgMCAxMC00LjQ3NyAxMC0xMFMyMC41MjMgNSAxNSA1IDUgOS40NzcgNSAxNXM0LjQ3NyAxMCAxMCAxMHptLTUtMTFoMTB2MkgxMHYtMnoiIGZpbGw9IiMzRDQ3NTciLz48L3N2Zz4=)}.ce-image-previewer .ce-image-menu i.rotate{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzNENDc1NyIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTYgNGM2LjYyNyAwIDEyIDUuMzczIDEyIDEyYTExLjk3IDExLjk3IDAgMDEtNCA4Ljk0NFYyM2gtLjg2QTkuOTY4IDkuOTY4IDAgMDAyNiAxNmMwLTUuNTIzLTQuNDc3LTEwLTEwLTEwUzYgMTAuNDc3IDYgMTZjMCA1LjE4NSAzLjk0NyA5LjQ0OSA5IDkuOTV2Mi4wMDlDOC44NCAyNy40NTEgNCAyMi4yOTEgNCAxNiA0IDkuMzczIDkuMzczIDQgMTYgNHoiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik0xOS44NzkgMjcuMzI4bDEuNzY3LTYuNzE3IDQuOTUgNC45NXoiLz48L2c+PC9zdmc+)}.ce-image-previewer .ce-image-menu i.original-size{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTQgNGgyNHYyNEg0VjR6bTIgMnYyMGgyMFY2SDZ6bTQgNWgydjEwaC0yVjExem01IDJoMnYyaC0ydi0yem0wIDRoMnYyaC0ydi0yem01LTZoMnYxMGgtMlYxMXoiIGZpbGw9IiMzRDQ3NTciLz48L3N2Zz4=)}.ce-image-previewer .ce-image-menu i.image-download{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTQuNSAxNXYzLjVoMTVWMTVIMjF2NUgzdi01aDEuNXptOC4yMzItMTEuMjI2djkuMTk2bDQuMDUtNC4wNSAxLjA2IDEuMDYtNS44MzQgNS44MzQtNS44MzMtNS44MzMgMS4wNi0xLjA2IDMuOTk4IDMuOTk2VjMuNzc0aDEuNXoiIGZpbGw9IiMzRDQ3NTciLz48L3N2Zz4=)}.ce-contextmenu-container{z-index:9;position:fixed;display:none;padding:4px;overflow-x:hidden;overflow-y:auto;background:#fff;box-shadow:0 2px 12px #38383833;border:1px solid #e2e6ed;border-radius:2px}.ce-contextmenu-content{display:flex;flex-direction:column}.ce-contextmenu-content .ce-contextmenu-sub-item:after{position:absolute;content:"";width:16px;height:16px;right:12px;background:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMCAwaDE2djE2SDB6Ii8+PGcgZmlsbD0iIzc2N0M4NSI+PHBhdGggZD0iTTcgMTIuMjQzbC0uNzA3LS43MDcgNC4yNDMtNC4yNDMuNzA3LjcwN3oiLz48cGF0aCBkPSJNNi4yOTMgNC40NjRMNyAzLjc1NyAxMS4yNDMgOGwtLjcwNy43MDd6Ii8+PC9nPjwvZz48L3N2Zz4=)}.ce-contextmenu-content .ce-contextmenu-item{min-width:140px;padding:0 32px 0 16px;height:30px;display:flex;align-items:center;white-space:nowrap;box-sizing:border-box;cursor:pointer}.ce-contextmenu-content .ce-contextmenu-item.hover{background:rgba(25,55,88,.04)}.ce-contextmenu-content .ce-contextmenu-item span{max-width:300px;font-size:12px;color:#3d4757;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.ce-contextmenu-content .ce-contextmenu-item span.ce-shortcut{color:#767c85;height:30px;flex:1;text-align:right;line-height:30px;margin-left:20px}.ce-contextmenu-content .ce-contextmenu-item i{width:16px;height:16px;vertical-align:middle;display:inline-block;background-repeat:no-repeat;background-size:100% 100%;flex-shrink:0;margin-right:8px}.ce-contextmenu-divider{background-color:#e2e6ed;margin:4px 16px;height:1px}.ce-contextmenu-print{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjM0Q0NzU3IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xMiA0aC0xVjJINXYySDRWMmExIDEgMCAwMTEtMWg2YTEgMSAwIDAxMSAxdjJ6bTAgNXY0YTEgMSAwIDAxLTEgMUg1YTEgMSAwIDAxLTEtMVY5aDF2NGg2VjloMXoiLz48cGF0aCBkPSJNMTIgMTJ2LTFoMlY1SDJ2NmgydjFIMmExIDEgMCAwMS0xLTFWNWExIDEgMCAwMTEtMWgxMmExIDEgMCAwMTEgMXY2YTEgMSAwIDAxLTEgMWgtMnoiLz48cGF0aCBkPSJNMyA4aDEwdjFIM3ptOC0yaDJ2MWgtMnoiLz48L2c+PC9zdmc+)}.ce-contextmenu-image{background-image:url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSLlm77lsYJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgMTYgMTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxzdHlsZT4uc3Qwe2ZpbGw6IzNkNDc1N308L3N0eWxlPjxnIGlkPSJfeDMwXzAt5YWs5YWxX3gyRl8wMuW3peWFt+agj194MkZf5o+S5YWl5Zu+54mHLTE2cHgtIj48ZyBpZD0iR3JvdXAtMTkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEgMSkiPjxwYXRoIGlkPSJDb21iaW5lZC1TaGFwZSIgY2xhc3M9InN0MCIgZD0iTTEgMGgxMmMuNiAwIDEgLjQgMSAxdjExYzAgLjYtLjQgMS0xIDFIMWMtLjYgMC0xLS40LTEtMVYxYzAtLjYuNC0xIDEtMXptMCAxdjExaDEyVjFIMXoiLz48Y2lyY2xlIGlkPSLmpK3lnIblvaIiIGNsYXNzPSJzdDAiIGN4PSIxMCIgY3k9IjQiIHI9IjEiLz48cGF0aCBpZD0iUGF0aCIgY2xhc3M9InN0MCIgZD0iTTguNSAxMS4ybC00LTQuMUwxIDEwLjdWOS4yYzEuNy0xLjYgMi43LTIuNSAzLTIuOC40LS41LjctLjQgMSAwTDguNSAxMCAxMSA3LjNjLjQtLjUuNi0uNSAxLS4xbDIgMi44djEuNWwtMi41LTMuNC0zIDMuMXoiLz48L2c+PC9nPjwvc3ZnPg==)}.ce-contextmenu-image-change{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyIDQpIiBmaWxsPSIjM0Q0NzU3Ij48Y2lyY2xlIGZpbGwtcnVsZT0ibm9uemVybyIgY3g9IjMiIGN5PSIxIiByPSIxIi8+PHBhdGggZD0iTTcuNDczIDguMjIzTDMuNDcgNC4xMDcgMCA3LjY2N3YtMS41QzEuNzE1IDQuNiAyLjcwNyAzLjY2NCAyLjk3NSAzLjM1OGMuNDAyLS40NTcuNjUxLS4zOSAxLjA0MiAwTDcuNDczIDcgOS45NiA0LjM0OWMuNDE0LS40NjIuNjItLjQ2MiAxLjAxMS0uMDcxTDEzIDcuMDZ2MS41bC0yLjUxLTMuNDEtMy4wMTcgMy4wNzJ6Ii8+PC9nPjxwYXRoIGQ9Ik02IDEuNUgxLjV2MTJoMTN2LTRWMTNhLjUuNSAwIDAxLS41LjVIMmEuNS41IDAgMDEtLjUtLjVWMmEuNS41IDAgMDEuNS0uNWg0em04LjUgOFY2bC0uNS41aDFsLS41LS41djMuNXpNNiAxLjVoNEw5LjUgMXYxbC41LS41SDZ6IiBzdHJva2U9IiMzRDQ3NTciLz48cGF0aCBkPSJNMTMuMDg1IDEuMzE2bC0zLjgxNCA0YTEgMSAwIDAwMS40NTggMS4zNjhsMy44MTUtNGExIDEgMCAxMC0xLjQ1OS0xLjM2OHoiIGZpbGw9IiMzRDQ3NTciIGZpbGwtcnVsZT0ibm9uemVybyIvPjwvZz48L3N2Zz4=)}.ce-contextmenu-insert-row-col{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBzdHJva2U9IiMzRDQ3NTciIGQ9Ik04LjUgNS41aDZ2NGgtNnoiLz48cGF0aCBmaWxsPSIjM0Q0NzU3IiBkPSJNNCA3djFoMlY3em0tMyAuNUw0IDV2NXpNMSAxaDEydjFIMXptMCAxMmgxMnYxSDF6Ii8+PC9nPjwvc3ZnPg==)}.ce-contextmenu-insert-top-row{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBmaWxsPSIjM0Q0NzU3IiBkPSJNOCA1SDd2M2gxem0tLjUtM0wxMCA1SDV6Ii8+PHJlY3Qgc3Ryb2tlPSIjM0Q0NzU3IiB4PSIxLjUiIHk9IjEwLjUiIHdpZHRoPSIxMiIgaGVpZ2h0PSIzIiByeD0iMSIvPjwvZz48L3N2Zz4=)}.ce-contextmenu-insert-bottom-row{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBmaWxsPSIjM0Q0NzU3IiBkPSJNNyAxMWgxVjhIN3ptLjUgM0w1IDExaDV6Ii8+PHJlY3Qgc3Ryb2tlPSIjM0Q0NzU3IiB4PSIxLjUiIHk9IjIuNSIgd2lkdGg9IjEyIiBoZWlnaHQ9IjMiIHJ4PSIxIi8+PC9nPjwvc3ZnPg==)}.ce-contextmenu-insert-left-col{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBmaWxsPSIjM0Q0NzU3IiBkPSJNMTEgN3YxaDNWN3ptLTMgLjVMMTEgNXY1eiIvPjxyZWN0IHN0cm9rZT0iIzNENDc1NyIgdHJhbnNmb3JtPSJyb3RhdGUoOTAgNCA3LjUpIiB4PSItMiIgeT0iNiIgd2lkdGg9IjEyIiBoZWlnaHQ9IjMiIHJ4PSIxIi8+PC9nPjwvc3ZnPg==)}.ce-contextmenu-insert-right-col{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBmaWxsPSIjM0Q0NzU3IiBkPSJNNSA4VjdIMnYxem0zLS41TDUgMTBWNXoiLz48cmVjdCBzdHJva2U9IiMzRDQ3NTciIHRyYW5zZm9ybT0icm90YXRlKDkwIDEyIDcuNSkiIHg9IjYiIHk9IjYiIHdpZHRoPSIxMiIgaGVpZ2h0PSIzIiByeD0iMSIvPjwvZz48L3N2Zz4=)}.ce-contextmenu-delete-row-col{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBzdHJva2U9IiM5MjlBQTgiIGQ9Ik04LjUgNi41aDZ2MmgtNnoiLz48cGF0aCBmaWxsPSIjM0Q0NzU3IiBkPSJNMiAxMmgxMXYxSDJ6TTIgMmgxMXYxSDJ6bS42MyAzTDcgOS4zNWwtLjYzNS42NUwyIDUuNjN6Ii8+PHBhdGggZmlsbD0iIzNENDc1NyIgZD0iTTIgOS4zNjNMNi4zNTUgNSA3IDUuNzA3IDIuNjk1IDEweiIvPjwvZz48L3N2Zz4=)}.ce-contextmenu-delete-row{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBzdHJva2U9IiM5MjlBQTgiIGQ9Ik04LjUgNS41aDZ2NGgtNnoiLz48cGF0aCBmaWxsPSIjM0Q0NzU3IiBkPSJNMSAxM2gxMnYxSDF6TTEgMWgxMnYxSDF6bTAgNGgxdjFIMXptMSAxaDF2MUgyem0xIDFoMXYxSDN6bTEtMWgxdjFINHptMS0xaDF2MUg1ek00IDhoMXYxSDR6TTIgOGgxdjFIMnptMyAxaDF2MUg1ek0xIDloMXYxSDF6Ii8+PC9nPjwvc3ZnPg==)}.ce-contextmenu-delete-col{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBzdHJva2U9IiM5MjlBQTgiIGQ9Ik01LjUgNy41di02aDR2NnoiLz48cGF0aCBmaWxsPSIjM0Q0NzU3IiBkPSJNMTMgMTVWM2gxdjEyek0xIDE1VjNoMXYxMnptNCAwdi0xaDF2MXptMS0xdi0xaDF2MXptMS0xdi0xaDF2MXptLTEtMXYtMWgxdjF6bS0xLTF2LTFoMXYxem0zIDF2LTFoMXYxem0wIDJ2LTFoMXYxem0xLTN2LTFoMXYxem0wIDR2LTFoMXYxeiIvPjwvZz48L3N2Zz4=)}.ce-contextmenu-delete-table{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzNENDc1NyIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTQgMTNoLTF2LTNIMnYzSDF2LTNhMSAxIDAgMDExLTFoMTFhMSAxIDAgMDExIDF2M3oiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik01LjYyNSAyTDEwIDYuMzc1IDkuMzc1IDcgNSAyLjYyNXoiLz48cGF0aCBkPSJNNSA2LjM3NUw5LjM3NSAybC42MjUuNjI1TDUuNjI1IDd6Ii8+PC9nPjwvc3ZnPg==)}.ce-contextmenu-merge-cell{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzNENDc1NyIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNNiAxdjFIMnYxMWg0djFIMmExIDEgMCAwMS0xLTFWMmExIDEgMCAwMTEtMWg0em0zIDBoNGExIDEgMCAwMTEgMXYxMWExIDEgMCAwMS0xIDFIOXYtMWg0VjJIOVYxeiIvPjxwYXRoIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTYgMWgxdjRINnptMiAwaDF2NEg4eiIvPjxwYXRoIGQ9Ik04IDcuNUwxMCA2djN6bS0xIDBMNSA2djN6Ii8+PHBhdGggZD0iTTkgN2gzdjFIOXpNMyA3aDN2MUgzeiIvPjxwYXRoIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTggMTBoMXY0SDh6bS0yIDBoMXY0SDZ6Ii8+PC9nPjwvc3ZnPg==)}.ce-contextmenu-merge-cancel-cell{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzNENDc1NyIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNNiAxdjFIMnYxMWg0djFIMmExIDEgMCAwMS0xLTFWMmExIDEgMCAwMTEtMWg0em0zIDBoNGExIDEgMCAwMTEgMXYxMWExIDEgMCAwMS0xIDFIOXYtMWg0VjJIOVYxeiIvPjxwYXRoIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTYgMWgxdjRINnptMiAwaDF2NEg4eiIvPjxwYXRoIGQ9Ik0zIDcuNUw1IDZ2M3ptOSAwTDEwIDZ2M3oiLz48cGF0aCBkPSJNNCA3aDN2MUg0em00IDBoM3YxSDh6Ii8+PHBhdGggZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNOCAxMGgxdjRIOHptLTIgMGgxdjRINnoiLz48L2c+PC9zdmc+)}.ce-contextmenu-vertical-align{background-image:url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjE2IiB2aWV3Qm94PSIwIDAgMTYgMTYiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMiAxM2gxMnYxSDJ6bTAtM2g4djFIMnptMC0zaDEydjFIMnptMC02aDEydjFIMnptMCAzaDh2MUgyeiIgZmlsbD0iIzNkNDc1NyIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+)}.ce-contextmenu-vertical-align-top{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTggOEg3djZoMXptLS41LTNMMTAgOEg1ek0yIDNoMTF2MUgyeiIgZmlsbD0iIzNENDc1NyIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+)}.ce-contextmenu-vertical-align-middle{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNOCAxMkg3djNoMXptLS41LTNsMi41IDNINXpNNyAzaDFWMEg3em0uNSAzTDUgM2g1ek0yIDdoMTF2MUgyeiIgZmlsbD0iIzNENDc1NyIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+)}.ce-contextmenu-vertical-align-bottom{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTcgOWgxVjNIN3ptLjUgM0w1IDloNXpNMiAxM2gxMXYxSDJ6IiBmaWxsPSIjM0Q0NzU3IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)}.ce-contextmenu-border-all{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIuNSAzYS41LjUgMCAwMS41LS41aDExYS41LjUgMCAwMS41LjV2MTFhLjUuNSAwIDAxLS41LjVIM2EuNS41IDAgMDEtLjUtLjVWM3oiIHN0cm9rZT0iIzNENDc1NyIvPjxwYXRoIGZpbGw9IiMzRDQ3NTciIGQ9Ik0zIDhoMTF2MUgzeiIvPjxwYXRoIGZpbGw9IiMzRDQ3NTciIGQ9Ik05IDN2MTFIOFYzeiIvPjwvc3ZnPg==)}.ce-contextmenu-border-empty{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMyAzaC0xVjJoMWExIDEgMCAwMTEgMXYxaC0xVjN6bS0zLTF2MUg4LjV2MmgtMVYzSDZWMmg0ek00IDJ2MUgzdjFIMlYzYTEgMSAwIDAxMS0xaDF6TTIgNmgxdjEuNWgydjFIM1YxMEgyVjZ6bTAgNmgxdjFoMXYxSDNhMSAxIDAgMDEtMS0xdi0xem00IDJ2LTFoMS41di0yaDF2MkgxMHYxSDZ6bTYgMHYtMWgxdi0xaDF2MWExIDEgMCAwMS0xIDFoLTF6bTItNGgtMVY4LjVoLTJ2LTFoMlY2aDF2NHpNOC41IDcuNXYtMWgtMXYxaC0xdjFoMXYxaDF2LTFoMXYtMWgtMXoiIGZpbGw9IiNBQUFDQjAiLz48L3N2Zz4=)}.ce-contextmenu-border-dash{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMyAzaC0xVjJoMWExIDEgMCAwMTEgMXYxaC0xVjN6bS0zLTF2MUg4LjV2MmgtMVYzSDZWMmg0ek00IDJ2MUgzdjFIMlYzYTEgMSAwIDAxMS0xaDF6TTIgNmgxdjEuNWgydjFIM1YxMEgyVjZ6bTAgNmgxdjFoMXYxSDNhMSAxIDAgMDEtMS0xdi0xem00IDJ2LTFoMS41di0yaDF2MkgxMHYxSDZ6bTYgMHYtMWgxdi0xaDF2MWExIDEgMCAwMS0xIDFoLTF6bTItNGgtMVY4LjVoLTJ2LTFoMlY2aDF2NHpNOC41IDcuNXYtMWgtMXYxaC0xdjFoMXYxaDF2LTFoMXYtMWgtMXoiIGZpbGw9IiMwMDAwMDAiLz48L3N2Zz4=)}.ce-contextmenu-border-external{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIuNSAzYS41LjUgMCAwMS41LS41aDExYS41LjUgMCAwMS41LjV2MTFhLjUuNSAwIDAxLS41LjVIM2EuNS41IDAgMDEtLjUtLjVWM3oiIHN0cm9rZT0iIzNENDc1NyIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOSA1VjNIOHYyaDF6bTAgOXYtMkg4djJoMXpNNSA4SDN2MWgyVjh6bTkgMGgtMnYxaDJWOHpNOSA3djFoMXYxSDl2MUg4VjlIN1Y4aDFWN2gxeiIgZmlsbD0iI0FBQUNCMCIvPjwvc3ZnPg==)}.ce-contextmenu-border-internal{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIuNSAzYS41LjUgMCAwMS41LS41aDExYS41LjUgMCAwMS41LjV2MTFhLjUuNSAwIDAxLS41LjVIM2EuNS41IDAgMDEtLjUtLjVWM3oiIHN0cm9rZT0iI0FBQUNCMCIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOSA1VjNIOHYyaDF6bTAgOXYtMkg4djJoMXpNNSA4SDN2MWgyVjh6bTkgMGgtMnYxaDJWOHpNOSA3djFoMXYxSDl2MUg4VjlIN1Y4aDFWN2gxeiIgZmlsbD0iIzNENDc1NyIvPjwvc3ZnPg==)}.ce-contextmenu-border-td{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIuNSAzYS41LjUgMCAwMS41LS41aDExYS41LjUgMCAwMS41LjV2MTFhLjUuNSAwIDAxLS41LjVIM2EuNS41IDAgMDEtLjUtLjVWM3oiIHN0cm9rZT0iI0FBQUNCMCIvPjxwYXRoIHN0cm9rZT0iIzNENDc1NyIgZD0iTTguNSAyLjUgdjYgaC02Ii8+PC9zdmc+)}.ce-contextmenu-border-td-top{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIuNSAzYS41LjUgMCAwMS41LS41aDExYS41LjUgMCAwMS41LjV2MTFhLjUuNSAwIDAxLS41LjVIM2EuNS41IDAgMDEtLjUtLjVWM3oiIHN0cm9rZT0iI0FBQUNCMCIvPjxwYXRoIHN0cm9rZT0iIzNENDc1NyIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNMi41IDMgaDEyIi8+PC9zdmc+)}.ce-contextmenu-border-td-left{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIuNSAzYS41LjUgMCAwMS41LS41aDExYS41LjUgMCAwMS41LjV2MTFhLjUuNSAwIDAxLS41LjVIM2EuNS41IDAgMDEtLjUtLjVWM3oiIHN0cm9rZT0iI0FBQUNCMCIvPjxwYXRoIHN0cm9rZT0iIzNENDc1NyIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNMyAzIHYxMSIvPjwvc3ZnPg==)}.ce-contextmenu-border-td-bottom{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIuNSAzYS41LjUgMCAwMS41LS41aDExYS41LjUgMCAwMS41LjV2MTFhLjUuNSAwIDAxLS41LjVIM2EuNS41IDAgMDEtLjUtLjVWM3oiIHN0cm9rZT0iI0FBQUNCMCIvPjxwYXRoIHN0cm9rZT0iIzNENDc1NyIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNMi41IDE0IGgxMiIvPjwvc3ZnPg==)}.ce-contextmenu-border-td-right{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIuNSAzYS41LjUgMCAwMS41LS41aDExYS41LjUgMCAwMS41LjV2MTFhLjUuNSAwIDAxLS41LjVIM2EuNS41IDAgMDEtLjUtLjVWM3oiIHN0cm9rZT0iI0FBQUNCMCIvPjxwYXRoIHN0cm9rZT0iIzNENDc1NyIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNMTQgMyB2MTEiLz48L3N2Zz4=)}.ce-contextmenu-border-td-forward{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIuNSAzYS41LjUgMCAwMS41LS41aDExYS41LjUgMCAwMS41LjV2MTFhLjUuNSAwIDAxLS41LjVIM2EuNS41IDAgMDEtLjUtLjVWM3oiIHN0cm9rZT0iI0FBQUNCMCIgLz48cGF0aCBzdHJva2U9IiMzRDQ3NTciIGQ9Ik0xNCAzIGwtMTEgMTEiIC8+PC9zdmc+)}.ce-contextmenu-border-td-back{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIuNSAzYS41LjUgMCAwMS41LS41aDExYS41LjUgMCAwMS41LjV2MTFhLjUuNSAwIDAxLS41LjVIM2EuNS41IDAgMDEtLjUtLjVWM3oiIHN0cm9rZT0iI0FBQUNCMCIgLz48cGF0aCBzdHJva2U9IiMzRDQ3NTciIGQ9Ik0zIDMgbDExIDExIiAvPjwvc3ZnPg==)}.ce-hyperlink-popup{background:#fff;box-shadow:0 2px 12px #626b8433;border-radius:2px;color:#3d4757;padding:12px 16px;position:absolute;z-index:1;text-align:center;display:none}.ce-hyperlink-popup a{min-width:100px;max-width:300px;font-size:12px;display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;cursor:pointer;text-decoration:none;border-bottom-width:1px;border-bottom-style:solid;color:#00f}.ce-zone-indicator>div{padding:3px 6px;color:#000;font-size:12px;background:rgb(218 231 252);position:absolute;transform-origin:0 0}.ce-zone-indicator-border__top,.ce-zone-indicator-border__bottom,.ce-zone-indicator-border__left,.ce-zone-indicator-border__right{display:block;position:absolute;z-index:0}.ce-zone-indicator-border__top{border-top:2px dashed rgb(238,238,238)}.ce-zone-indicator-border__bottom{border-top:2px dashed rgb(238,238,238);width:100%}.ce-zone-indicator-border__left{border-left:2px dashed rgb(238,238,238)}.ce-zone-indicator-border__right{border-right:2px dashed rgb(238,238,238)}.ce-zone-tip{display:none;align-items:center;height:30px;white-space:nowrap;position:fixed;opacity:.9;background-color:#000;padding:0 5px;border-radius:4px;z-index:9;transition:all .3s;outline:none;user-select:none;pointer-events:none;transform:translate(10px,10px)}.ce-zone-tip.show{display:flex}.ce-zone-tip span{color:#fff;font-size:12px}.ce-inputarea{width:100px;height:30px;min-width:0;min-height:0;margin:0;padding:0;left:0;top:0;letter-spacing:0;font-size:12px;position:absolute;z-index:-1;outline:none;resize:none;border:none;overflow:hidden;color:transparent;user-select:none;caret-color:transparent;background-color:transparent}.ce-cursor{width:1px;height:20px;left:0;right:0;position:absolute;outline:none;background-color:#000;pointer-events:none}.ce-cursor.ce-cursor--animation{animation-duration:1s;animation-iteration-count:infinite;animation-name:cursorAnimation}@keyframes cursorAnimation{0%{opacity:1}13%{opacity:0}50%{opacity:0}63%{opacity:1}to{opacity:1}}.ce-float-image{position:absolute;opacity:.5;pointer-events:none}'
            )
          ),
          document.head.appendChild(e)
      }
    } catch (i) {
      console.error('vite-plugin-css-injected-by-js', i)
    }
  })()
})()
var hr = Object.defineProperty,
  ur = Object.defineProperties
var gr = Object.getOwnPropertyDescriptors
var gi = Object.getOwnPropertySymbols
var Lr = Object.prototype.hasOwnProperty,
  Tr = Object.prototype.propertyIsEnumerable
var cn = (a, dt, Ft) =>
    dt in a
      ? hr(a, dt, { enumerable: !0, configurable: !0, writable: !0, value: Ft })
      : (a[dt] = Ft),
  C = (a, dt) => {
    for (var Ft in dt || (dt = {})) Lr.call(dt, Ft) && cn(a, Ft, dt[Ft])
    if (gi) for (var Ft of gi(dt)) Tr.call(dt, Ft) && cn(a, Ft, dt[Ft])
    return a
  },
  v = (a, dt) => ur(a, gr(dt))
var L = (a, dt, Ft) => (cn(a, typeof dt != 'symbol' ? dt + '' : dt, Ft), Ft)
;(function (a, dt) {
  typeof exports == 'object' && typeof module != 'undefined'
    ? dt(exports)
    : typeof define == 'function' && define.amd
      ? define(['exports'], dt)
      : ((a = typeof globalThis != 'undefined' ? globalThis : a || self),
        dt((a['canvas-editor'] = {})))
})(this, function (a) {
  'use strict'
  var dt = ''
  const Ft = '0.9.111'
  ;(a.MaxHeightRatio = void 0),
    (function (l) {
      ;(l.HALF = 'half'), (l.ONE_THIRD = 'one-third'), (l.QUARTER = 'quarter')
    })(a.MaxHeightRatio || (a.MaxHeightRatio = {})),
    (a.NumberType = void 0),
    (function (l) {
      ;(l.ARABIC = 'arabic'), (l.CHINESE = 'chinese')
    })(a.NumberType || (a.NumberType = {})),
    (a.ImageDisplay = void 0),
    (function (l) {
      ;(l.INLINE = 'inline'),
        (l.BLOCK = 'block'),
        (l.SURROUND = 'surround'),
        (l.FLOAT_TOP = 'float-top'),
        (l.FLOAT_BOTTOM = 'float-bottom')
    })(a.ImageDisplay || (a.ImageDisplay = {})),
    (a.LocationPosition = void 0),
    (function (l) {
      ;(l.BEFORE = 'before'),
        (l.AFTER = 'after'),
        (l.OUTER_BEFORE = 'outer-before'),
        (l.OUTER_AFTER = 'outer-after')
    })(a.LocationPosition || (a.LocationPosition = {})),
    (a.FlexDirection = void 0),
    (function (l) {
      ;(l.ROW = 'row'), (l.COLUMN = 'column')
    })(a.FlexDirection || (a.FlexDirection = {}))
  const H = '\u200B',
    dn = `
`,
    Qe = ' ',
    hn = '&nbsp;',
    Li = [
      '\xB7',
      '\u3001',
      ':',
      '\uFF1A',
      ',',
      '\uFF0C',
      '.',
      '\u3002',
      ';',
      '\uFF1B',
      '?',
      '\uFF1F',
      '!',
      '\uFF01'
    ],
    un = {
      [a.MaxHeightRatio.HALF]: 1 / 2,
      [a.MaxHeightRatio.ONE_THIRD]: 1 / 3,
      [a.MaxHeightRatio.QUARTER]: 1 / 4
    },
    gn = {
      ENGLISH: 'A-Za-z',
      SPANISH: 'A-Za-z\xC1\xC9\xCD\xD3\xDA\xE1\xE9\xED\xF3\xFA\xD1\xF1\xDC\xFC',
      FRENCH:
        'A-Za-z\xC0\xC2\xC7\xE0\xE2\xE7\xC9\xE9\xC8\xE8\xCA\xEA\xCB\xEB\xCE\xEE\xCF\xEF\xD4\xF4\xD9\xF9\xDB\xFB\u0178\xFF',
      GERMAN: 'A-Za-z\xC4\xE4\xD6\xF6\xDC\xFC\xDF',
      RUSSIAN: '\u0410-\u042F\u0430-\u044F\u0401\u0451',
      PORTUGUESE:
        'A-Za-z\xC1\xC9\xCD\xD3\xDA\xE1\xE9\xED\xF3\xFA\xC3\xD5\xE3\xF5\xC7\xE7',
      ITALIAN:
        'A-Za-z\xC0\xE0\xC8\xE8\xC9\xE9\xCC\xEC\xCD\xED\xCE\xEE\xD3\xF3\xD2\xF2\xD9\xF9',
      DUTCH:
        'A-Za-z\xC0\xE0\xC1\xE1\xC2\xE2\xC4\xE4\xC8\xE8\xC9\xE9\xCA\xEA\xCB\xEB\xCC\xEC\xCD\xED\xCE\xEE\xCF\xEF\xD3\xF3\xD2\xF2\xD4\xF4\xD6\xF6\xD9\xF9\xDB\xFB\xDC\xFC',
      SWEDISH: 'A-Za-z\xC5\xE5\xC4\xE4\xD6\xF6',
      GREEK:
        '\u0391\u03B1\u0392\u03B2\u0393\u03B3\u0394\u03B4\u0395\u03B5\u0396\u03B6\u0397\u03B7\u0398\u03B8\u0399\u03B9\u039A\u03BA\u039B\u03BB\u039C\u03BC\u039D\u03BD\u039E\u03BE\u039F\u03BF\u03A0\u03C0\u03A1\u03C1\u03A3\u03C3\u03C2\u03A4\u03C4\u03A5\u03C5\u03A6\u03C6\u03A7\u03C7\u03A8\u03C8\u03A9\u03C9'
    },
    Ti = '\u65E5'
  ;(a.RowFlex = void 0),
    (function (l) {
      ;(l.LEFT = 'left'),
        (l.CENTER = 'center'),
        (l.RIGHT = 'right'),
        (l.ALIGNMENT = 'alignment'),
        (l.JUSTIFY = 'justify')
    })(a.RowFlex || (a.RowFlex = {}))
  const De = /[0-9.]/,
    Pi = /[\uD800-\uDBFF][\uDC00-\uDFFF]/,
    Mi =
      /[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC2\uDECE-\uDEDB\uDEE0-\uDEE8]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g,
    Oi = new RegExp(`${Mi.source}|${Pi.source}`, 'g'),
    Si =
      /[、，。？！；：……「」“”‘’*（）【】〔〕〖〗〘〙〚〛《》———﹝﹞–—\\/·.,!?;:`~<>()[\]{}'"|]/,
    Ce = new RegExp(`^[${H}
]`)
  function Ln(l, t) {
    let e
    return function (...n) {
      e && window.clearTimeout(e),
        (e = window.setTimeout(() => {
          l.apply(this, n)
        }, t))
    }
  }
  function Xi(l, t) {
    let e = 0,
      n
    return function (...o) {
      const s = Date.now()
      s - e >= t
        ? (window.clearTimeout(n), l.apply(this, o), (e = s))
        : (window.clearTimeout(n),
          (n = window.setTimeout(() => {
            l.apply(this, o), (e = s)
          }, t)))
    }
  }
  function Ee(l, t) {
    if (!l || typeof l != 'object') return l
    let e = {}
    return (
      Array.isArray(l)
        ? (e = l.map(n => Ee(n, t)))
        : Object.keys(l).forEach(n => {
            if (!t.includes(n)) return (e[n] = Ee(l[n], t))
          }),
      e
    )
  }
  function k(l) {
    if (typeof structuredClone == 'function') return structuredClone(l)
    if (!l || typeof l != 'object') return l
    let t = {}
    return (
      Array.isArray(l)
        ? (t = l.map(e => k(e)))
        : Object.keys(l).forEach(e => (t[e] = k(l[e]))),
      t
    )
  }
  function Ke(l) {
    return l && l.nodeType === 1 && l.tagName.toLowerCase() === 'body'
  }
  function Se(l, t, e) {
    if (l && !Ke(l))
      for (l = e ? l : l.parentNode; l; ) {
        if (!t || t(l) || Ke(l)) return t && !t(l) && Ke(l) ? null : l
        l = l.parentNode
      }
    return null
  }
  function A() {
    function l() {
      return (((1 + Math.random()) * 65536) | 0).toString(16).substring(1)
    }
    return l() + l() + '-' + l() + '-' + l() + '-' + l() + '-' + l() + l() + l()
  }
  function Tn(l, t) {
    const e = document.createElement('a')
    ;(e.href = l), (e.download = t), e.click()
  }
  function Ni(l, t) {
    Ii(3, l, t)
  }
  function Ii(l, t, e) {
    let n = 0,
      o = 0
    const s = function (i) {
      ;(n = new Date().getTime() - o < 300 ? n + 1 : 0),
        (o = new Date().getTime()),
        n >= l - 1 && (e(i), (n = 0))
    }
    t.addEventListener('click', s)
  }
  function Xe(l) {
    return Object.prototype.toString.call(l) === '[object Object]'
  }
  function be(l) {
    return Array.isArray(l)
  }
  function ye(l) {
    return Object.prototype.toString.call(l) === '[object Number]'
  }
  function Fi(l) {
    return Object.prototype.toString.call(l) === '[object String]'
  }
  function Pn(l, t) {
    if (Xe(l) && Xe(t)) {
      const e = t
      for (const [n, o] of Object.entries(l))
        e[n] ? (e[n] = Pn(o, e[n])) : (e[n] = o)
    } else be(l) && be(t) && t.push(...l)
    return t
  }
  function Mn(l) {
    setTimeout(() => {
      l()
    }, 0)
  }
  function fi(l) {
    const t = [
        '\u96F6',
        '\u4E00',
        '\u4E8C',
        '\u4E09',
        '\u56DB',
        '\u4E94',
        '\u516D',
        '\u4E03',
        '\u516B',
        '\u4E5D'
      ],
      e = [
        '',
        '\u5341',
        '\u767E',
        '\u5343',
        '\u4E07',
        '\u5341',
        '\u767E',
        '\u5343',
        '\u4EBF',
        '\u5341',
        '\u767E',
        '\u5343',
        '\u4E07',
        '\u5341',
        '\u767E',
        '\u5343',
        '\u4EBF'
      ]
    if (!l || isNaN(l)) return '\u96F6'
    const n = l.toString().split('')
    let o = ''
    for (let s = 0; s < n.length; s++) {
      const i = n.length - 1 - s
      ;(o = `${e[s]}${o}`), (o = `${t[Number(n[i])]}${o}`)
    }
    return (
      (o = o.replace(/零(千|百|十)/g, '\u96F6').replace(/十零/g, '\u5341')),
      (o = o.replace(/零+/g, '\u96F6')),
      (o = o.replace(/零亿/g, '\u4EBF').replace(/零万/g, '\u4E07')),
      (o = o.replace(/亿万/g, '\u4EBF')),
      (o = o.replace(/零+$/, '')),
      (o = o.replace(/^一十/g, '\u5341')),
      o
    )
  }
  function kt(l, t, e) {
    for (let n = 0; n < l.length; n++) {
      const o = l[n],
        s = t[o]
      s !== void 0 ? (e[o] = s) : delete e[o]
    }
  }
  function Ut(l, t) {
    const e = {}
    for (const n in l) t.includes(n) && (e[n] = l[n])
    return e
  }
  function bt(l, t) {
    const e = {}
    for (const n in l) t.includes(n) || (e[n] = l[n])
    return e
  }
  function mi(l) {
    const e = new TextEncoder().encode(l),
      n = Array.from(e, s => String.fromCharCode(s))
    return window.btoa(n.join(''))
  }
  function Wi(l) {
    let t = l.parentElement
    for (; t; ) {
      const n = window.getComputedStyle(t).getPropertyValue('overflow-y')
      if (t.scrollHeight > t.clientHeight && (n === 'auto' || n === 'scroll'))
        return t
      t = t.parentElement
    }
    return document.documentElement
  }
  function On(l, t) {
    return l.length !== t.length ? !1 : !l.some(e => !t.includes(e))
  }
  function Vi(l, t) {
    if (!Xe(l) || !Xe(t)) return !1
    const e = Object.keys(l),
      n = Object.keys(t)
    return e.length !== n.length ? !1 : !e.some(o => t[o] !== l[o])
  }
  function Zi(l, t) {
    const e = l.x,
      n = l.x + l.width,
      o = l.y,
      s = l.y + l.height,
      i = t.x,
      r = t.x + t.width,
      R = t.y,
      c = t.y + t.height
    return !(e > r || n < i || o > c || s < R)
  }
  function Sn(l) {
    return l == null
  }
  function Xn(l) {
    return l.replace(
      /\r\n|\r/g,
      `
`
    )
  }
  const Ui = 12,
    Yi = {
      width: 1,
      color: '#000000',
      dragWidth: 2,
      dragColor: '#0000FF',
      dragFloatImageDisabled: !1
    },
    _t = 'editor-component',
    x = 'ce',
    Ne = `${x}-clipboard`,
    we = {
      print: { imagePreviewerDisabled: !1 },
      readonly: { imagePreviewerDisabled: !1 },
      form: { controlDeletableDisabled: !1 }
    }
  var ht
  ;(function (l) {
    ;(l.UP = 'top'), (l.DOWN = 'down'), (l.LEFT = 'left'), (l.RIGHT = 'right')
  })(ht || (ht = {}))
  const zt =
      typeof navigator != 'undefined' && /Mac OS X/.test(navigator.userAgent),
    pi =
      typeof navigator != 'undefined' &&
      /iPad|iPhone/.test(navigator.userAgent),
    Qi = /Mobile|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ;(a.ElementType = void 0),
    (function (l) {
      ;(l.TEXT = 'text'),
        (l.IMAGE = 'image'),
        (l.TABLE = 'table'),
        (l.HYPERLINK = 'hyperlink'),
        (l.SUPERSCRIPT = 'superscript'),
        (l.SUBSCRIPT = 'subscript'),
        (l.SEPARATOR = 'separator'),
        (l.PAGE_BREAK = 'pageBreak'),
        (l.CONTROL = 'control'),
        (l.AREA = 'area'),
        (l.CHECKBOX = 'checkbox'),
        (l.RADIO = 'radio'),
        (l.LATEX = 'latex'),
        (l.TAB = 'tab'),
        (l.DATE = 'date'),
        (l.BLOCK = 'block'),
        (l.TITLE = 'title'),
        (l.LIST = 'list')
    })(a.ElementType || (a.ElementType = {}))
  const yt = [
      'bold',
      'color',
      'highlight',
      'font',
      'size',
      'italic',
      'underline',
      'strikeout',
      'textDecoration'
    ],
    $t = ['rowFlex', 'rowMargin'],
    Di = [
      'type',
      'font',
      'size',
      'bold',
      'color',
      'italic',
      'highlight',
      'underline',
      'strikeout',
      'rowFlex',
      'url',
      'areaId',
      'hyperlinkId',
      'dateId',
      'dateFormat',
      'groupIds',
      'rowMargin',
      'textDecoration'
    ],
    Ci = [
      'type',
      'font',
      'size',
      'bold',
      'color',
      'italic',
      'highlight',
      'underline',
      'strikeout',
      'rowFlex',
      'rowMargin',
      'dashArray',
      'trList',
      'tableToolDisabled',
      'borderType',
      'borderColor',
      'width',
      'height',
      'url',
      'colgroup',
      'valueList',
      'control',
      'checkbox',
      'radio',
      'dateFormat',
      'block',
      'level',
      'title',
      'listType',
      'listStyle',
      'listWrap',
      'groupIds',
      'conceptId',
      'imgDisplay',
      'imgFloatPosition',
      'imgToolDisabled',
      'textDecoration',
      'extension',
      'externalId',
      'areaId',
      'area'
    ],
    Ei = [
      'conceptId',
      'extension',
      'externalId',
      'verticalAlign',
      'backgroundColor',
      'borderTypes',
      'slashTypes',
      'disabled',
      'deletable'
    ],
    ue = ['tdId', 'trId', 'tableId'],
    He = ['level', 'titleId', 'title'],
    Ie = ['listId', 'listType', 'listStyle'],
    Ge = ['control', 'controlId', 'controlComponent'],
    xt = ['font', 'size', 'bold', 'highlight', 'italic', 'strikeout'],
    ee = ['areaId', 'area'],
    Nn = [...ue, ...He, ...Ie, ...ee],
    Qt = [
      a.ElementType.TEXT,
      a.ElementType.HYPERLINK,
      a.ElementType.SUBSCRIPT,
      a.ElementType.SUPERSCRIPT,
      a.ElementType.CONTROL,
      a.ElementType.DATE
    ],
    Ki = [a.ElementType.IMAGE, a.ElementType.LATEX],
    bi = [
      a.ElementType.BLOCK,
      a.ElementType.PAGE_BREAK,
      a.ElementType.SEPARATOR,
      a.ElementType.TABLE
    ],
    yi = ['HR', 'TABLE', 'UL', 'OL'],
    wi = [a.ElementType.TITLE, a.ElementType.LIST],
    sn = class {
      constructor(t) {
        L(this, 'element')
        this.element = t
      }
      _defineIframeProperties(t) {
        Object.defineProperties(t, {
          parent: { get: () => null },
          __POWERED_BY_CANVAS_EDITOR__: { get: () => !0 }
        })
      }
      render(t) {
        var o, s
        const e = this.element.block,
          n = document.createElement('iframe')
        n.setAttribute('data-id', this.element.id),
          n.sandbox.add(...sn.sandbox),
          (n.style.border = 'none'),
          (n.style.width = '100%'),
          (n.style.height = '100%'),
          ((o = e.iframeBlock) == null ? void 0 : o.src)
            ? (n.src = e.iframeBlock.src)
            : ((s = e.iframeBlock) == null ? void 0 : s.srcdoc) &&
              (n.srcdoc = e.iframeBlock.srcdoc),
          t.append(n),
          this._defineIframeProperties(n.contentWindow)
      }
    }
  let Fe = sn
  L(Fe, 'sandbox', ['allow-scripts', 'allow-same-origin'])
  class In {
    constructor(t) {
      L(this, 'draw')
      L(this, 'options')
      L(this, 'imageCache')
      L(this, 'container')
      L(this, 'floatImageContainer')
      L(this, 'floatImage')
      ;(this.draw = t),
        (this.options = t.getOptions()),
        (this.container = t.getContainer()),
        (this.imageCache = new Map()),
        (this.floatImageContainer = null),
        (this.floatImage = null)
    }
    createFloatImage(t) {
      const { scale: e } = this.options
      let n = this.floatImageContainer,
        o = this.floatImage
      n ||
        ((n = document.createElement('div')),
        n.classList.add(`${x}-float-image`),
        this.container.append(n),
        (this.floatImageContainer = n)),
        o ||
          ((o = document.createElement('img')),
          n.append(o),
          (this.floatImage = o)),
        (n.style.display = 'none'),
        (o.style.width = `${t.width * e}px`),
        (o.style.height = `${t.height * e}px`)
      const s = this.draw.getHeight(),
        i = this.draw.getPageGap(),
        r = this.draw.getPageNo() * (s + i),
        R = t.imgFloatPosition
      ;(n.style.left = `${R.x * e}px`),
        (n.style.top = `${r + R.y * e}px`),
        (o.src = t.value)
    }
    dragFloatImage(t, e) {
      if (!this.floatImageContainer) return
      this.floatImageContainer.style.display = 'block'
      const n = parseFloat(this.floatImageContainer.style.left) + t,
        o = parseFloat(this.floatImageContainer.style.top) + e
      ;(this.floatImageContainer.style.left = `${n}px`),
        (this.floatImageContainer.style.top = `${o}px`)
    }
    destroyFloatImage() {
      this.floatImageContainer &&
        (this.floatImageContainer.style.display = 'none')
    }
    addImageObserver(t) {
      this.draw.getImageObserver().add(t)
    }
    getFallbackImage(t, e) {
      const n = 8,
        o = (t - Math.ceil(t / n) * n) / 2,
        s = (e - Math.ceil(e / n) * n) / 2,
        i = `<svg xmlns="http://www.w3.org/2000/svg" width="${t}" height="${e}" viewBox="0 0 ${t} ${e}">
                  <rect width="${t}" height="${e}" fill="url(#mosaic)" />
                  <defs>
                    <pattern id="mosaic" x="${o}" y="${s}" width="${n * 2}" height="${n * 2}" patternUnits="userSpaceOnUse">
                      <rect width="${n}" height="${n}" fill="#cccccc" />
                      <rect width="${n}" height="${n}" fill="#cccccc" transform="translate(${n}, ${n})" />
                    </pattern>
                  </defs>
                </svg>`,
        r = new Image()
      return (r.src = `data:image/svg+xml;base64,${mi(i)}`), r
    }
    render(t, e, n, o) {
      const { scale: s } = this.options,
        i = e.width * s,
        r = e.height * s
      if (this.imageCache.has(e.value)) {
        const R = this.imageCache.get(e.value)
        t.drawImage(R, n, o, i, r)
      } else {
        const R = this.draw.getRenderCount(),
          c = new Promise((d, h) => {
            const u = new Image()
            u.setAttribute('crossOrigin', 'Anonymous'),
              (u.src = e.value),
              (u.onload = () => {
                this.imageCache.set(e.value, u),
                  d(e),
                  R === this.draw.getRenderCount() &&
                    (e.imgDisplay === a.ImageDisplay.FLOAT_BOTTOM
                      ? this.draw.render({
                          isCompute: !1,
                          isSetCursor: !1,
                          isSubmitHistory: !1
                        })
                      : t.drawImage(u, n, o, i, r))
              }),
              (u.onerror = g => {
                const T = this.getFallbackImage(i, r)
                ;(T.onload = () => {
                  t.drawImage(T, n, o, i, r), this.imageCache.set(e.value, T)
                }),
                  h(g)
              })
          })
        this.addImageObserver(c)
      }
    }
  }
  const fe = 'R'.charCodeAt(0)
  function ne(l) {
    return Je[l] == null && Hi(l), Je[l]
  }
  function Hi(l) {
    const t = Gi[l]
    if (t == null) return
    const e = t.substring(3, 5),
      n = 1 * e.charCodeAt(0) - fe,
      o = 1 * e.charCodeAt(1) - fe,
      s = t.substring(5),
      i = [[]]
    let r = 1 / 0,
      R = -1 / 0,
      c = 1 / 0,
      d = -1 / 0,
      h = 0
    for (; h < s.length; ) {
      const u = s.substring(h, h + 2)
      if (u == ' R') i.push([])
      else {
        const g = u.charCodeAt(0) - fe - n,
          T = u.charCodeAt(1) - fe
        ;(r = Math.min(T, r)),
          (R = Math.max(T, R)),
          (c = Math.min(g, c)),
          (d = Math.max(g, d)),
          i[i.length - 1].push([g, T])
      }
      h += 2
    }
    Je[l] = { w: o - n, xmin: c, xmax: d, ymin: r, ymax: R, polylines: i }
  }
  const Je = {},
    Gi = {
      1: '  9MWRMNV RRMVV RPSTS',
      2: ' 16MWOMOV ROMSMUNUPSQ ROQSQURUUSVOV',
      3: ' 11MXVNTMRMPNOPOSPURVTVVU',
      4: ' 12MWOMOV ROMRMTNUPUSTURVOV',
      5: ' 12MWOMOV ROMUM ROQSQ ROVUV',
      6: '  9MVOMOV ROMUM ROQSQ',
      7: ' 15MXVNTMRMPNOPOSPURVTVVUVR RSRVR',
      8: '  9MWOMOV RUMUV ROQUQ',
      9: '  3PTRMRV',
      10: '  7NUSMSTRVPVOTOS',
      11: '  9MWOMOV RUMOS RQQUV',
      12: '  6MVOMOV ROVUV',
      13: ' 12LXNMNV RNMRV RVMRV RVMVV',
      14: '  9MWOMOV ROMUV RUMUV',
      15: ' 14MXRMPNOPOSPURVSVUUVSVPUNSMRM',
      16: ' 10MWOMOV ROMSMUNUQSROR',
      17: ' 17MXRMPNOPOSPURVSVUUVSVPUNSMRM RSTVW',
      18: ' 13MWOMOV ROMSMUNUQSROR RRRUV',
      19: ' 13MWUNSMQMONOOPPTRUSUUSVQVOU',
      20: '  6MWRMRV RNMVM',
      21: '  9MXOMOSPURVSVUUVSVM',
      22: '  6MWNMRV RVMRV',
      23: ' 12LXNMPV RRMPV RRMTV RVMTV',
      24: '  6MWOMUV RUMOV',
      25: '  7MWNMRQRV RVMRQ',
      26: '  9MWUMOV ROMUM ROVUV',
      27: '  9MWRMNV RRMVV RPSTS',
      28: ' 16MWOMOV ROMSMUNUPSQ ROQSQURUUSVOV',
      29: '  6MVOMOV ROMUM',
      30: '  9MWRMNV RRMVV RNVVV',
      31: ' 12MWOMOV ROMUM ROQSQ ROVUV',
      32: '  9MWUMOV ROMUM ROVUV',
      33: '  9MWOMOV RUMUV ROQUQ',
      34: ' 20MXRMPNOPOSPURVSVUUVSVPUNSMRM RQQTR RTQQR',
      35: '  3PTRMRV',
      36: '  9MWOMOV RUMOS RQQUV',
      37: '  6MWRMNV RRMVV',
      38: ' 12LXNMNV RNMRV RVMRV RVMVV',
      39: '  9MWOMOV ROMUV RUMUV',
      40: ' 12MWOMUM RPQTR RTQPR ROVUV',
      41: ' 14MXRMPNOPOSPURVSVUUVSVPUNSMRM',
      42: '  9MWOMOV RUMUV ROMUM',
      43: ' 10MWOMOV ROMSMUNUQSROR',
      44: ' 10MWOMRQOV ROMUM ROVUV',
      45: '  6MWRMRV RNMVM',
      46: ' 15MWNONNOMPMQNRPRV RVOVNUMTMSNRP',
      47: ' 13LXRMRV RPONPNSPTTTVSVPTOPO',
      48: '  6MWOMUV RUMOV',
      49: ' 12LXRMRV RNOOPOSQTSTUSUPVO',
      50: ' 13MXOVQVOROPPNRMSMUNVPVRTVVV',
      200: ' 12MWRMPNOPOSPURVTUUSUPTNRM',
      201: '  4MWPORMRV',
      202: '  9MWONQMSMUNUPTROVUV',
      203: ' 15MWONQMSMUNUPSQ RRQSQURUUSVQVOU',
      204: '  7MWSMSV RSMNSVS',
      205: ' 14MWPMOQQPRPTQUSTURVQVOU RPMTM',
      206: ' 14MWTMRMPNOPOSPURVTUUSTQRPPQOS',
      207: '  6MWUMQV ROMUM',
      208: ' 19MWQMONOPQQSQUPUNSMQM RQQOROUQVSVUUURSQ',
      209: ' 14MWUPTRRSPROPPNRMTNUPUSTURVPV',
      210: '  6PURURVSVSURU',
      211: '  7PUSVRVRUSUSWRY',
      212: ' 12PURPRQSQSPRP RRURVSVSURU',
      213: ' 13PURPRQSQSPRP RSVRVRUSUSWRY',
      214: ' 12PURMRR RSMSR RRURVSVSURU',
      215: ' 17NWPNRMSMUNUPRQRRSRSQUP RRURVSVSURU',
      216: '  3PTRMRQ',
      217: '  6NVPMPQ RTMTQ',
      218: ' 10NVQMPNPPQQSQTPTNSMQM',
      219: ' 16MWUNSMQMONOPQQTRUSUUSVQVOU RRLRW',
      220: '  3MWVLNW',
      221: '  7OVTLRNQPQSRUTW',
      222: '  7NUPLRNSPSSRUPW',
      223: '  3PTRLRW',
      224: '  3LXNRVR',
      225: '  6LXRNRV RNRVR',
      226: '  6LXNPVP RNTVT',
      227: '  6MWOOUU RUOOU',
      228: '  9MWRORU ROPUT RUPOT',
      229: '  6PURQRRSRSQRQ',
      230: '  7PUSMRORQSQSPRP',
      231: '  7PUSNRNRMSMSORQ',
      232: '  7LXSOVRSU RNRVR',
      233: ' 12MXRLPW RULSW ROPVP ROSVS',
      234: ' 21LXVRURTSSURVOVNUNSORRQSPSNRMPMONOPQSSUUVVV',
      235: ' 20LXNNOQOSNV RVNUQUSVV RNNQOSOVN RNVQUSUVV',
      501: '  9I[RFJ[ RRFZ[ RMTWT',
      502: ' 24G\\KFK[ RKFTFWGXHYJYLXNWOTP RKPTPWQXRYTYWXYWZT[K[',
      503: ' 19H]ZKYIWGUFQFOGMILKKNKSLVMXOZQ[U[WZYXZV',
      504: ' 16G\\KFK[ RKFRFUGWIXKYNYSXVWXUZR[K[',
      505: ' 12H[LFL[ RLFYF RLPTP RL[Y[',
      506: '  9HZLFL[ RLFYF RLPTP',
      507: ' 23H]ZKYIWGUFQFOGMILKKNKSLVMXOZQ[U[WZYXZVZS RUSZS',
      508: '  9G]KFK[ RYFY[ RKPYP',
      509: '  3NVRFR[',
      510: ' 11JZVFVVUYTZR[P[NZMYLVLT',
      511: '  9G\\KFK[ RYFKT RPOY[',
      512: '  6HYLFL[ RL[X[',
      513: ' 12F^JFJ[ RJFR[ RZFR[ RZFZ[',
      514: '  9G]KFK[ RKFY[ RYFY[',
      515: ' 22G]PFNGLIKKJNJSKVLXNZP[T[VZXXYVZSZNYKXIVGTFPF',
      516: ' 14G\\KFK[ RKFTFWGXHYJYMXOWPTQKQ',
      517: ' 25G]PFNGLIKKJNJSKVLXNZP[T[VZXXYVZSZNYKXIVGTFPF RSWY]',
      518: ' 17G\\KFK[ RKFTFWGXHYJYLXNWOTPKP RRPY[',
      519: ' 21H\\YIWGTFPFMGKIKKLMMNOOUQWRXSYUYXWZT[P[MZKX',
      520: '  6JZRFR[ RKFYF',
      521: ' 11G]KFKULXNZQ[S[VZXXYUYF',
      522: '  6I[JFR[ RZFR[',
      523: ' 12F^HFM[ RRFM[ RRFW[ R\\FW[',
      524: '  6H\\KFY[ RYFK[',
      525: '  7I[JFRPR[ RZFRP',
      526: '  9H\\YFK[ RKFYF RK[Y[',
      527: '  9I[RFJ[ RRFZ[ RMTWT',
      528: ' 24G\\KFK[ RKFTFWGXHYJYLXNWOTP RKPTPWQXRYTYWXYWZT[K[',
      529: '  6HYLFL[ RLFXF',
      530: '  9I[RFJ[ RRFZ[ RJ[Z[',
      531: ' 12H[LFL[ RLFYF RLPTP RL[Y[',
      532: '  9H\\YFK[ RKFYF RK[Y[',
      533: '  9G]KFK[ RYFY[ RKPYP',
      534: ' 25G]PFNGLIKKJNJSKVLXNZP[T[VZXXYVZSZNYKXIVGTFPF ROPUP',
      535: '  3NVRFR[',
      536: '  9G\\KFK[ RYFKT RPOY[',
      537: '  6I[RFJ[ RRFZ[',
      538: ' 12F^JFJ[ RJFR[ RZFR[ RZFZ[',
      539: '  9G]KFK[ RKFY[ RYFY[',
      540: '  9I[KFYF ROPUP RK[Y[',
      541: ' 22G]PFNGLIKKJNJSKVLXNZP[T[VZXXYVZSZNYKXIVGTFPF',
      542: '  9G]KFK[ RYFY[ RKFYF',
      543: ' 14G\\KFK[ RKFTFWGXHYJYMXOWPTQKQ',
      544: ' 10I[KFRPK[ RKFYF RK[Y[',
      545: '  6JZRFR[ RKFYF',
      546: ' 19I[KKKILGMFOFPGQIRMR[ RYKYIXGWFUFTGSIRM',
      547: ' 21H\\RFR[ RPKMLLMKOKRLTMUPVTVWUXTYRYOXMWLTKPK',
      548: '  6H\\KFY[ RK[YF',
      549: ' 18G]RFR[ RILJLKMLQMSNTQUSUVTWSXQYMZL[L',
      550: ' 17H\\K[O[LTKPKLLINGQFSFVGXIYLYPXTU[Y[',
      551: ' 20G[G[IZLWOSSLVFV[UXSUQSNQLQKRKTLVNXQZT[Y[',
      552: ' 41F]SHTITLSPRSQUOXMZK[J[IZIWJRKOLMNJPHRGUFXFZG[I[KZMYNWOTP RSPTPWQXRYTYWXYWZU[R[PZOX',
      553: ' 24H\\TLTMUNWNYMZKZIYGWFTFQGOIMLLNKRKVLYMZO[Q[TZVXWV',
      554: ' 35G^TFRGQIPMOSNVMXKZI[G[FZFXGWIWKXMZP[S[VZXXZT[O[KZHYGWFTFRHRJSMUPWRZT\\U',
      555: ' 28H\\VJVKWLYLZKZIYGVFRFOGNINLONPOSPPPMQLRKTKWLYMZP[S[VZXXYV',
      556: ' 28H\\RLPLNKMINGQFTFXG[G]F RXGVNTTRXPZN[L[JZIXIVJULUNV RQPZP',
      557: ' 29G^G[IZMVPQQNRJRGQFPFOGNINLONQOUOXNYMZKZQYVXXVZS[O[LZJXIVIT',
      558: ' 38F^MMKLJJJIKGMFNFPGQIQKPONULYJ[H[GZGX RMRVOXN[L]J^H^G]F\\FZHXLVRUWUZV[W[YZZY\\V',
      559: ' 25IZWVUTSQROQLQIRGSFUFVGWIWLVQTVSXQZO[M[KZJXJVKUMUOV',
      560: ' 25JYT^R[PVOPOJPGRFTFUGVJVMURR[PaOdNfLgKfKdLaN^P\\SZWX',
      561: ' 39F^MMKLJJJIKGMFNFPGQIQKPONULYJ[H[GZGX R^I^G]F\\FZGXIVLTNROPO RROSQSXTZU[V[XZYY[V',
      562: ' 29I\\MRORSQVOXMYKYHXFVFUGTISNRSQVPXNZL[J[IZIXJWLWNXQZT[V[YZ[X',
      563: ' 45@aEMCLBJBICGEFFFHGIIIKHPGTE[ RGTJLLHMGOFPFRGSISKRPQTO[ RQTTLVHWGYFZF\\G]I]K\\PZWZZ[[\\[^Z_YaV',
      564: ' 32E]JMHLGJGIHGJFKFMGNINKMPLTJ[ RLTOLQHRGTFVFXGYIYKXPVWVZW[X[ZZ[Y]V',
      565: ' 29H]TFQGOIMLLNKRKVLYMZO[Q[TZVXXUYSZOZKYHXGVFTFRHRKSNUQWSZU\\V',
      566: ' 31F_SHTITLSPRSQUOXMZK[J[IZIWJRKOLMNJPHRGUFZF\\G]H^J^M]O\\PZQWQUPTO',
      567: ' 32H^ULTNSOQPOPNNNLOIQGTFWFYGZIZMYPWSSWPYNZK[I[HZHXIWKWMXPZS[V[YZ[X',
      568: ' 38F_SHTITLSPRSQUOXMZK[J[IZIWJRKOLMNJPHRGUFYF[G\\H]J]M\\O[PYQVQSPTQUSUXVZX[ZZ[Y]V',
      569: ' 28H\\H[JZLXOTQQSMTJTGSFRFQGPIPKQMSOVQXSYUYWXYWZT[P[MZKXJVJT',
      570: ' 25H[RLPLNKMINGQFTFXG[G]F RXGVNTTRXPZN[L[JZIXIVJULUNV',
      571: ' 33E]JMHLGJGIHGJFKFMGNINKMOLRKVKXLZN[P[RZSYUUXMZF RXMWQVWVZW[X[ZZ[Y]V',
      572: ' 32F]KMILHJHIIGKFLFNGOIOKNOMRLVLYM[O[QZTWVTXPYMZIZGYFXFWGVIVKWNYP[Q',
      573: ' 25C_HMFLEJEIFGHFIFKGLILLK[ RUFK[ RUFS[ RaF_G\\JYNVTS[',
      574: ' 36F^NLLLKKKILGNFPFRGSISLQUQXRZT[V[XZYXYVXUVU R]I]G\\FZFXGVITLPUNXLZJ[H[GZGX',
      575: ' 38F]KMILHJHIIGKFLFNGOIOKNOMRLVLXMZN[P[RZTXVUWSYM R[FYMVWT]RbPfNgMfMdNaP^S[VY[V',
      576: ' 40H]ULTNSOQPOPNNNLOIQGTFWFYGZIZMYPWTTWPZN[K[JZJXKWNWPXQYR[R^QaPcNfLgKfKdLaN^Q[TYZV',
      583: '  9I[JFR[ RZFR[ RJFZF',
      601: ' 18I\\XMX[ RXPVNTMQMONMPLSLUMXOZQ[T[VZXX',
      602: ' 18H[LFL[ RLPNNPMSMUNWPXSXUWXUZS[P[NZLX',
      603: ' 15I[XPVNTMQMONMPLSLUMXOZQ[T[VZXX',
      604: ' 18I\\XFX[ RXPVNTMQMONMPLSLUMXOZQ[T[VZXX',
      605: ' 18I[LSXSXQWOVNTMQMONMPLSLUMXOZQ[T[VZXX',
      606: '  9MYWFUFSGRJR[ ROMVM',
      607: ' 23I\\XMX]W`VaTbQbOa RXPVNTMQMONMPLSLUMXOZQ[T[VZXX',
      608: ' 11I\\MFM[ RMQPNRMUMWNXQX[',
      609: '  9NVQFRGSFREQF RRMR[',
      610: ' 12MWRFSGTFSERF RSMS^RaPbNb',
      611: '  9IZMFM[ RWMMW RQSX[',
      612: '  3NVRFR[',
      613: ' 19CaGMG[ RGQJNLMOMQNRQR[ RRQUNWMZM\\N]Q][',
      614: ' 11I\\MMM[ RMQPNRMUMWNXQX[',
      615: ' 18I\\QMONMPLSLUMXOZQ[T[VZXXYUYSXPVNTMQM',
      616: ' 18H[LMLb RLPNNPMSMUNWPXSXUWXUZS[P[NZLX',
      617: ' 18I\\XMXb RXPVNTMQMONMPLSLUMXOZQ[T[VZXX',
      618: '  9KXOMO[ ROSPPRNTMWM',
      619: ' 18J[XPWNTMQMNNMPNRPSUTWUXWXXWZT[Q[NZMX',
      620: '  9MYRFRWSZU[W[ ROMVM',
      621: ' 11I\\MMMWNZP[S[UZXW RXMX[',
      622: '  6JZLMR[ RXMR[',
      623: ' 12G]JMN[ RRMN[ RRMV[ RZMV[',
      624: '  6J[MMX[ RXMM[',
      625: ' 10JZLMR[ RXMR[P_NaLbKb',
      626: '  9J[XMM[ RMMXM RM[X[',
      627: ' 24H]QMONMPLRKUKXLZN[P[RZUWWTYPZM RQMSMTNUPWXXZY[Z[',
      628: ' 31I\\UFSGQIOMNPMTLZKb RUFWFYHYKXMWNUORO RROTPVRWTWWVYUZS[Q[OZNYMV',
      629: ' 17I\\JPLNNMOMQNROSRSVR[ RZMYPXRR[P_Ob',
      630: ' 24I[TMQMONMPLSLVMYNZP[R[TZVXWUWRVOTMRKQIQGRFTFVGXI',
      631: ' 19JZWOVNTMQMONOPPRSS RSSOTMVMXNZP[S[UZWX',
      632: ' 23JYTFRGQHQIRJUKXK RXKTMQONRMUMWNYP[S]T_TaSbQbP`',
      633: ' 19H\\IQJOLMNMONOPNTL[ RNTPPRNTMVMXOXRWWTb',
      634: ' 27G\\HQIOKMMMNNNPMUMXNZO[Q[SZUWVUWRXMXJWGUFSFRHRJSMUPWRZT',
      635: '  9LWRMPTOXOZP[R[TYUW',
      636: ' 19I[OMK[ RYNXMWMUNQROSNS RNSPTQUSZT[U[VZ',
      637: '  9JZKFMFOGPHX[ RRML[',
      638: ' 21H]OMIb RNQMVMYO[Q[SZUXWT RYMWTVXVZW[Y[[Y\\W',
      639: ' 14I[LMOMNSMXL[ RYMXPWRUURXOZL[',
      640: ' 29JZTFRGQHQIRJUKXK RUKRLPMOOOQQSTTVT RTTPUNVMXMZO\\S^T_TaRbPb',
      641: ' 18J[RMPNNPMSMVNYOZQ[S[UZWXXUXRWOVNTMRM',
      642: ' 13G]PML[ RUMVSWXX[ RIPKNNM[M',
      643: ' 19I[MSMVNYOZQ[S[UZWXXUXRWOVNTMRMPNNPMSIb',
      644: ' 18I][MQMONMPLSLVMYNZP[R[TZVXWUWRVOUNSM',
      645: '  8H\\SMP[ RJPLNOMZM',
      646: ' 16H\\IQJOLMNMONOPMVMYO[Q[TZVXXTYPYM',
      647: ' 21G]ONMOKQJTJWKYLZN[Q[TZWXYUZRZOXMVMTORSPXMb',
      648: ' 14I[KMMMOOU`WbYb RZMYOWRM]K`Jb',
      649: ' 20F]VFNb RGQHOJMLMMNMPLULXMZO[Q[TZVXXUZP[M',
      650: ' 23F]NMLNJQITIWJZK[M[OZQW RRSQWRZS[U[WZYWZTZQYNXM',
      651: ' 22L\\UUTSRRPRNSMTLVLXMZO[Q[SZTXVRUWUZV[W[YZZY\\V',
      652: ' 23M[MVOSRNSLTITGSFQGPIOMNTNZO[P[RZTXUUURVVWWYW[V',
      653: ' 14MXTTTSSRQROSNTMVMXNZP[S[VYXV',
      654: ' 24L\\UUTSRRPRNSMTLVLXMZO[Q[SZTXZF RVRUWUZV[W[YZZY\\V',
      655: ' 17NXOYQXRWSUSSRRQROSNUNXOZQ[S[UZVYXV',
      656: ' 24OWOVSQUNVLWIWGVFTGSIQQNZKaJdJfKgMfNcOZP[R[TZUYWV',
      657: ' 28L[UUTSRRPRNSMTLVLXMZO[Q[SZTY RVRTYPdOfMgLfLdMaP^S\\U[XY[V',
      658: ' 29M\\MVOSRNSLTITGSFQGPIOMNSM[ RM[NXOVQSSRURVSVUUXUZV[W[YZZY\\V',
      659: ' 16PWSMSNTNTMSM RPVRRPXPZQ[R[TZUYWV',
      660: ' 20PWSMSNTNTMSM RPVRRLdKfIgHfHdIaL^O\\Q[TYWV',
      661: ' 33M[MVOSRNSLTITGSFQGPIOMNSM[ RM[NXOVQSSRURVSVUTVQV RQVSWTZU[V[XZYY[V',
      662: ' 18OWOVQSTNULVIVGUFSGRIQMPTPZQ[R[TZUYWV',
      663: ' 33E^EVGSIRJSJTIXH[ RIXJVLSNRPRQSQTPXO[ RPXQVSSURWRXSXUWXWZX[Y[[Z\\Y^V',
      664: ' 23J\\JVLSNROSOTNXM[ RNXOVQSSRURVSVUUXUZV[W[YZZY\\V',
      665: ' 23LZRRPRNSMTLVLXMZO[Q[SZTYUWUUTSRRQSQURWTXWXYWZV',
      666: ' 24KZKVMSNQMUGg RMUNSPRRRTSUUUWTYSZQ[ RMZO[R[UZWYZV',
      667: ' 27L[UUTSRRPRNSMTLVLXMZO[Q[SZ RVRUUSZPaOdOfPgRfScS\\U[XY[V',
      668: ' 15MZMVOSPQPSSSTTTVSYSZT[U[WZXYZV',
      669: ' 16NYNVPSQQQSSVTXTZR[ RNZP[T[VZWYYV',
      670: ' 16OXOVQSSO RVFPXPZQ[S[UZVYXV RPNWN',
      671: ' 19L[LVNRLXLZM[O[QZSXUU RVRTXTZU[V[XZYY[V',
      672: ' 17L[LVNRMWMZN[O[RZTXUUUR RURVVWWYW[V',
      673: ' 25I^LRJTIWIYJ[L[NZPX RRRPXPZQ[S[UZWXXUXR RXRYVZW\\W^V',
      674: ' 20JZJVLSNRPRQSQZR[U[XYZV RWSVRTRSSOZN[L[KZ',
      675: ' 23L[LVNRLXLZM[O[QZSXUU RVRPdOfMgLfLdMaP^S\\U[XY[V',
      676: ' 23LZLVNSPRRRTTTVSXQZN[P\\Q^QaPdOfMgLfLdMaP^S\\WYZV',
      677: ' 22J\\K[NZQXSVUSWOXKXIWGUFSGRHQJPOPTQXRZT[V[XZYY',
      683: ' 26I[WUWRVOUNSMQMONMPLSLVMYNZP[R[TZVXWUXPXKWHVGTFRFPGNI',
      684: ' 16JZWNUMRMPNNPMSMVNYOZQ[T[VZ RMTUT',
      685: ' 23J[TFRGPJOLNOMTMXNZO[Q[SZUWVUWRXMXIWGVFTF RNPWP',
      686: ' 21H\\VFNb RQMNNLPKSKVLXNZQ[S[VZXXYUYRXPVNSMQM',
      687: ' 16I[XOWNTMQMNNMOLQLSMUOWSZT\\T^S_Q_',
      700: ' 18H\\QFNGLJKOKRLWNZQ[S[VZXWYRYOXJVGSFQF',
      701: '  5H\\NJPISFS[',
      702: ' 15H\\LKLJMHNGPFTFVGWHXJXLWNUQK[Y[',
      703: ' 16H\\MFXFRNUNWOXPYSYUXXVZS[P[MZLYKW',
      704: '  7H\\UFKTZT RUFU[',
      705: ' 18H\\WFMFLOMNPMSMVNXPYSYUXXVZS[P[MZLYKW',
      706: ' 24H\\XIWGTFRFOGMJLOLTMXOZR[S[VZXXYUYTXQVOSNRNOOMQLT',
      707: '  6H\\YFO[ RKFYF',
      708: ' 30H\\PFMGLILKMMONSOVPXRYTYWXYWZT[P[MZLYKWKTLRNPQOUNWMXKXIWGTFPF',
      709: ' 24H\\XMWPURRSQSNRLPKMKLLINGQFRFUGWIXMXRWWUZR[P[MZLX',
      710: '  6MWRYQZR[SZRY',
      711: '  9MWSZR[QZRYSZS\\R^Q_',
      712: ' 12MWRMQNROSNRM RRYQZR[SZRY',
      713: ' 15MWRMQNROSNRM RSZR[QZRYSZS\\R^Q_',
      714: '  9MWRFRT RRYQZR[SZRY',
      715: ' 21I[LKLJMHNGPFTFVGWHXJXLWNVORQRT RRYQZR[SZRY',
      716: '  3NVRFRM',
      717: '  6JZNFNM RVFVM',
      718: ' 14KYQFOGNINKOMQNSNUMVKVIUGSFQF',
      719: ' 27H\\PBP_ RTBT_ RYIWGTFPFMGKIKKLMMNOOUQWRXSYUYXWZT[P[MZKX',
      720: '  3G][BIb',
      721: ' 11KYVBTDRGPKOPOTPYR]T`Vb',
      722: ' 11KYNBPDRGTKUPUTTYR]P`Nb',
      723: '  3NVRBRb',
      724: '  3E_IR[R',
      725: '  6E_RIR[ RIR[R',
      726: '  6E_IO[O RIU[U',
      727: '  6G]KKYY RYKKY',
      728: '  9JZRLRX RMOWU RWOMU',
      729: '  6MWRQQRRSSRRQ',
      730: '  8MWSFRGQIQKRLSKRJ',
      731: '  8MWRHQGRFSGSIRKQL',
      732: '  9E_UMXP[RXTUW RIR[R',
      733: ' 12H]SBLb RYBRb RLOZO RKUYU',
      734: ' 35E_\\O\\N[MZMYNXPVUTXRZP[L[JZIYHWHUISJRQNRMSKSIRGPFNGMIMKNNPQUXWZY[[[\\Z\\Y',
      735: ' 28G]IIJKKOKUJYI[ R[IZKYOYUZY[[ RIIKJOKUKYJ[I RI[KZOYUYYZ[[',
      737: '  6KYOBO[ RUBU[',
      738: '  6F^RBR[ RI[[[',
      739: '  4F^[BI[[[',
      740: ' 18E_RIQJRKSJRI RIYHZI[JZIY R[YZZ[[\\Z[Y',
      741: ' 33F^RHNLKPJSJUKWMXOXQWRU RRHVLYPZSZUYWWXUXSWRU RRUQYP\\ RRUSYT\\ RP\\T\\',
      742: ' 26F^RNQKPINHMHKIJKJOKRLTNWR\\ RRNSKTIVHWHYIZKZOYRXTVWR\\',
      743: ' 20F^RGPJLOIR RRGTJXO[R RIRLUPZR] R[RXUTZR]',
      744: ' 48F^RTTWVXXXZW[U[SZQXPVPSQ RSQUOVMVKUISHQHOINKNMOOQQ RQQNPLPJQISIUJWLXNXPWRT RRTQYP\\ RRTSYT\\ RP\\T\\',
      745: ' 55F^RRR[Q\\ RRVQ\\ RRIQHOHNINKONRR RRISHUHVIVKUNRR RRRNOLNJNIOIQJR RRRVOXNZN[O[QZR RRRNULVJVIUISJR RRRVUXVZV[U[SZR',
      746: ' 55F^ISJSLTMVMXLZ RISIRJQLQMRNTNWMYLZ RRGPIOLOOQUQXPZR\\ RRGTIULUOSUSXTZR\\ R[S[RZQXQWRVTVWWYXZ R[SZSXTWVWXXZ RKVYV',
      750: ' 18PSSRRSQSPRPQQPRPSQSSRUQV RQQQRRRRQQQ',
      751: ' 16PTQPPQPSQTSTTSTQSPQP RRQQRRSSRRQ',
      752: '  9NVPOTU RTOPU RNRVR',
      753: ' 28MWRKQMOPMR RRKSMUPWR RRMOQ RRMUQ RROPQ RROTQ RQQSQ RMRWR',
      754: ' 26MWMRMQNOONQMSMUNVOWQWR RPNTN ROOUO RNPVP RNQVQ RMRWR',
      755: ' 14LRLFLRRRLF RLIPQ RLLOR RLOMQ',
      756: ' 10MWRKQMOPMR RRKSMUPWR',
      757: ' 11MWWRWQVOUNSMQMONNOMQMR',
      758: ' 13G]]R]P\\MZJWHTGPGMHJJHMGPGR',
      759: ' 11MWMRMSNUOVQWSWUVVUWSWR',
      760: '  7LXLPNRQSSSVRXP',
      761: '  6RURUTTURTPRO',
      762: '  7RVRRUPVNVLUKTK',
      763: '  7NRRROPNNNLOKPK',
      764: ' 21MWWHVGTFQFOGNHMJMLNNOOUSVTWVWXVZU[S\\P\\N[MZ',
      765: ' 21G]IWHVGTGQHOINKMMMONPOTUUVWWYW[V\\U]S]P\\N[M',
      766: ' 31G]RRTUUVWWYW[V\\U]S]Q\\O[NYMWMUNTOPUOVMWKWIVHUGSGQHOINKMMMONPORR',
      767: ' 22H\\KFK[ RHF[FQP[Z RZV[Y\\[ RZVZY RWYZY RWYZZ\\[',
      768: ' 30KYUARBPCNELHKLKRLUNWQXSXVWXUYR RKPLMNKQJSJVKXMYPYVXZV]T_R`Oa',
      796: '  3>f>RfR',
      797: '  3D`D``D',
      798: '  3RRR>Rf',
      799: '  3D`DD``',
      800: '  3D`DR`R',
      801: '  3F^FY^K',
      802: '  3KYK^YF',
      803: '  3RRRDR`',
      804: '  3KYKFY^',
      805: '  3F^FK^Y',
      806: '  3KYKRYR',
      807: '  3MWMWWM',
      808: '  3RRRKRY',
      809: '  3MWMMWW',
      810: '  8GRRGPGMHJJHMGPGR',
      811: '  8GRGRGTHWJZM\\P]R]',
      812: '  8R]R]T]W\\ZZ\\W]T]R',
      813: '  8R]]R]P\\MZJWHTGRG',
      814: '  9D`DOGQKSPTTTYS]Q`O',
      815: '  9PUUDSGQKPPPTQYS]U`',
      816: '  9OTODQGSKTPTTSYQ]O`',
      817: '  9D`DUGSKQPPTPYQ]S`U',
      818: '  5KYRJYNKVRZ',
      819: '  5JZJRNKVYZR',
      820: '  5KYKVKNYVYN',
      821: '  5JZLXJPZTXL',
      822: ' 23JZJ]L]O\\Q[TXUVVSVOULTJSIQIPJOLNONSOVPXS[U\\X]Z]',
      823: ' 23I]]Z]X\\U[SXPVOSNONLOJPIQISJTLUOVSVVUXT[Q\\O]L]J',
      824: ' 23JZZGXGUHSIPLONNQNUOXPZQ[S[TZUXVUVQUNTLQIOHLGJG',
      825: ' 23G[GJGLHOIQLTNUQVUVXUZT[S[QZPXOUNQNNOLPISHUGXGZ',
      826: ' 21E[EPFRHTJUMVQVUUXSZP[NZLWLSMQNNPLSKVKYL\\M^',
      827: ' 19EYETHVKWPWSVVTXQYNYLXKVKSLPNNQMTMYN\\P_',
      828: ' 26OUQOOQOSQUSUUSUQSOQO RQPPQPSQTSTTSTQSPQP RRQQRRSSRRQ',
      829: ' 11RWRMSMUNVOWQWSVUUVSWRW',
      830: '  9D`DRJR RORUR RZR`R',
      831: '  5D`DUDO`O`U',
      832: '  6JZRDJR RRDZR',
      833: '  9D`DR`R RJYZY RP`T`',
      834: '  9D`DR`R RDRRb R`RRb',
      840: ' 18KYQKNLLNKQKSLVNXQYSYVXXVYSYQXNVLSKQK',
      841: '  6LXLLLXXXXLLL',
      842: '  5KYRJKVYVRJ',
      843: '  6LXRHLRR\\XRRH',
      844: ' 12JZRIPOJOOSMYRUWYUSZOTORI',
      845: '  6KYRKRY RKRYR',
      846: '  6MWMMWW RWMMW',
      847: '  9MWRLRX RMOWU RWOMU',
      850: ' 35NVQNOONQNSOUQVSVUUVSVQUOSNQN ROQOS RPPPT RQOQU RRORU RSOSU RTPTT RUQUS',
      851: ' 27NVNNNVVVVNNN ROOOU RPOPU RQOQU RRORU RSOSU RTOTU RUOUU',
      852: ' 17MWRLMUWURL RROOT RROUT RRRQT RRRST',
      853: ' 17LULRUWUMLR RORTU RORTO RRRTS RRRTQ',
      854: ' 17MWRXWOMORX RRUUP RRUOP RRRSP RRRQP',
      855: ' 17OXXROMOWXR RURPO RURPU RRRPQ RRRPS',
      856: ' 22LXRLNWXPLPVWRL RRRRL RRRLP RRRNW RRRVW RRRXP',
      857: ' 11RYRKRY RRKYNRQ RSMVNSO',
      860: ' 13MWRLRX ROOUO RMUOWQXSXUWWU',
      861: ' 11LXRLRX RLQMOWOXQ RPWTW',
      862: ' 14KYMNWX RWNMX ROLLOKQ RULXOYQ',
      863: ' 18I[NII[ RVI[[ RMM[[ RWMI[ RNIVI RMMWM',
      864: ' 21I[RGRV RMJWP RWJMP RIVL\\ R[VX\\ RIV[V RL\\X\\',
      865: ' 11G[MJSV RKPSL RG\\[\\[RG\\',
      866: ' 14LXPLPPLPLTPTPXTXTTXTXPTPTLPL',
      867: ' 32KYYPXNVLSKQKNLLNKQKSLVNXQYSYVXXVYT RYPWNUMSMQNPOOQOSPUQVSWUWWVYT',
      868: ' 10KYRJKVYVRJ RRZYNKNRZ',
      869: ' 34G]PIPGQFSFTGTI RGZHXJVKTLPLKMJOIUIWJXKXPYTZV\\X]Z RGZ]Z RQZP[Q\\S\\T[SZ',
      870: ' 64JZRMRS RRSQ\\ RRSS\\ RQ\\S\\ RRMQJPHNG RQJNG RRMSJTHVG RSJVG RRMNKLKJM RPLLLJM RRMVKXKZM RTLXLZM RRMPNOOOR RRMPOOR RRMTNUOUR RRMTOUR',
      871: ' 94JZRIRK RRNRP RRSRU RRYQ\\ RRYS\\ RQ\\S\\ RRGQIPJ RRGSITJ RPJRITJ RRKPNNOMN RRKTNVOWN RNOPORNTOVO RRPPSNTLTKRKSLT RRPTSVTXTYRYSXT RNTPTRSTTVT RRUPXOYMZLZKYJWJYLZ RRUTXUYWZXZYYZWZYXZ RMZOZRYUZWZ',
      872: ' 40JZRYQ\\ RRYS\\ RQ\\S\\ RRYUZXZZXZUYTWTYRZOYMWLUMVJUHSGQGOHNJOMMLKMJOKRMTKTJUJXLZOZRY',
      873: ' 32JZRYQ\\ RRYS\\ RQ\\S\\ RRYVXVVXUXRZQZLYIXHVHTGPGNHLHKIJLJQLRLUNVNXRY',
      874: ' 15I[IPKR RLKNP RRGRO RXKVP R[PYR',
      899: '  6QSRQQRRSSRRQ',
      900: ' 10PTQPPQPSQTSTTSTQSPQP',
      901: ' 14NVQNOONQNSOUQVSVUUVSVQUOSNQN',
      902: ' 18MWQMONNOMQMSNUOVQWSWUVVUWSWQVOUNSMQM',
      903: ' 18KYQKNLLNKQKSLVNXQYSYVXXVYSYQXNVLSKQK',
      904: ' 22G]PGMHJJHMGPGTHWJZM\\P]T]W\\ZZ\\W]T]P\\MZJWHTGPG',
      905: ' 34AcPALBJCGEEGCJBLAPATBXCZE]G_JaLbPcTcXbZa]__]aZbXcTcPbLaJ_G]EZCXBTAPA',
      906: ' 34<hP<K=G?DAAD?G=K<P<T=Y?]A`DcGeKgPhThYg]e`cc`e]gYhThPgKeGcD`A]?Y=T<P<',
      907: ' 50){O)I*E+@-;073370;-@+E*I)O)U*[+_-d0i3m7q;t@wEyIzO{U{[z_ydwitmqqmtiwdy_z[{U{OzIyEw@t;q7m3i0d-_+[*U)O)',
      908: ' 34>fRAPCMDJDGCEA>H@JAMAZB]D_G`M`PaRc RRATCWDZD]C_AfHdJcMcZb]`_]`W`TaRc',
      909: ' 33AcRAPCMDJDGCEABGAKAPBTDXG\\L`Rc RRATCWDZD]C_AbGcKcPbT`X]\\X`Rc RBHbH',
      997: '  3MWMXWX',
      998: '  3JZJZZZ',
      999: '  3JZJ]Z]',
      1001: ' 18KYRKMX RRNVX RRKWX ROTTT RKXPX RTXYX',
      1002: ' 35JZNKNX ROKOX RLKSKVLWNVPSQ RSKULVNUPSQ ROQSQVRWTWUVWSXLX RSQURVTVUUWSX',
      1003: ' 24KYVLWKWOVLTKQKOLNMMPMSNVOWQXTXVWWU RQKOMNPNSOVQX',
      1004: ' 26JZNKNX ROKOX RLKSKVLWMXPXSWVVWSXLX RSKULVMWPWSVVUWSX',
      1005: ' 22JYNKNX ROKOX RSOSS RLKVKVOUK ROQSQ RLXVXVTUX',
      1006: ' 20JXNKNX ROKOX RSOSS RLKVKVOUK ROQSQ RLXQX',
      1007: ' 36K[VLWKWOVLTKQKOLNMMPMSNVOWQXTXVW RQKOMNPNSOVQX RTXUWVU RVSVX RWSWX RTSYS',
      1008: ' 27J[NKNX ROKOX RVKVX RWKWX RLKQK RTKYK ROQVQ RLXQX RTXYX',
      1009: ' 12NWRKRX RSKSX RPKUK RPXUX',
      1010: ' 19LXSKSURWQX RTKTUSWQXPXNWMUNTOUNV RQKVK',
      1011: ' 27JZNKNX ROKOX RWKOS RQQVX RRQWX RLKQK RTKYK RLXQX RTXYX',
      1012: ' 14KXOKOX RPKPX RMKRK RMXWXWTVX',
      1013: ' 30I\\MKMX RNNRX RNKRU RWKRX RWKWX RXKXX RKKNK RWKZK RKXOX RUXZX',
      1014: ' 21JZNKNX ROMVX ROKVV RVKVX RLKOK RTKXK RLXPX',
      1015: ' 32KZQKOLNMMPMSNVOWQXTXVWWVXSXPWMVLTKQK RQKOMNPNSOVQX RTXVVWSWPVMTK',
      1016: ' 25JYNKNX ROKOX RLKSKVLWNWOVQSROR RSKULVNVOUQSR RLXQX',
      1017: ' 47KZQKOLNMMPMSNVOWQXTXVWWVXSXPWMVLTKQK RQKOMNPNSOVQX RTXVVWSWPVMTK RPWPUQTSTTUUZV[W[XZ RTUUXVZW[',
      1018: ' 37JZNKNX ROKOX RLKSKVLWNWOVQSROR RSKULVNVOUQSR RLXQX RSRTSUWVXWXXW RSRUSVWWX',
      1019: ' 32KZVMWKWOVMULSKQKOLNMNOOPQQTRVSWT RNNOOQPTQVRWSWVVWTXRXPWOVNTNXOV',
      1020: ' 16KZRKRX RSKSX RNKMOMKXKXOWK RPXUX',
      1021: ' 20J[NKNUOWQXTXVWWUWK ROKOUPWQX RLKQK RUKYK',
      1022: ' 15KYMKRX RNKRU RWKRX RKKPK RTKYK',
      1023: ' 24I[LKOX RMKOT RRKOX RRKUX RSKUT RXKUX RJKOK RVKZK',
      1024: ' 21KZNKVX ROKWX RWKNX RLKQK RTKYK RLXQX RTXYX',
      1025: ' 20LYNKRRRX ROKSR RWKSRSX RLKQK RTKYK RPXUX',
      1026: ' 16LYVKNX RWKOX ROKNONKWK RNXWXWTVX',
      1027: ' 18KYRKMX RRNVX RRKWX ROTTT RKXPX RTXYX',
      1028: ' 35JZNKNX ROKOX RLKSKVLWNVPSQ RSKULVNUPSQ ROQSQVRWTWUVWSXLX RSQURVTVUUWSX',
      1029: ' 14KXOKOX RPKPX RMKWKWOVK RMXRX',
      1030: ' 15KYRKLX RRMWX RRKXX RMWVW RLXXX',
      1031: ' 22JYNKNX ROKOX RSOSS RLKVKVOUK ROQSQ RLXVXVTUX',
      1032: ' 16LYVKNX RWKOX ROKNONKWK RNXWXWTVX',
      1033: ' 27J[NKNX ROKOX RVKVX RWKWX RLKQK RTKYK ROQVQ RLXQX RTXYX',
      1034: ' 44KZQKOLNMMPMSNVOWQXTXVWWVXSXPWMVLTKQK RQKOMNPNSOVQX RTXVVWSWPVMTK RQOQT RTOTT RQQTQ RQRTR',
      1035: ' 12NWRKRX RSKSX RPKUK RPXUX',
      1036: ' 27JZNKNX ROKOX RWKOS RQQVX RRQWX RLKQK RTKYK RLXQX RTXYX',
      1037: ' 15KYRKMX RRNVX RRKWX RKXPX RTXYX',
      1038: ' 30I\\MKMX RNNRX RNKRU RWKRX RWKWX RXKXX RKKNK RWKZK RKXOX RUXZX',
      1039: ' 21JZNKNX ROMVX ROKVV RVKVX RLKOK RTKXK RLXPX',
      1040: ' 36JZMJLM RXJWM RPPOS RUPTS RMVLY RXVWY RMKWK RMLWL RPQTQ RPRTR RMWWW RMXWX',
      1041: ' 32KZQKOLNMMPMSNVOWQXTXVWWVXSXPWMVLTKQK RQKOMNPNSOVQX RTXVVWSWPVMTK',
      1042: ' 21J[NKNX ROKOX RVKVX RWKWX RLKYK RLXQX RTXYX',
      1043: ' 25JYNKNX ROKOX RLKSKVLWNWOVQSROR RSKULVNVOUQSR RLXQX',
      1044: ' 20K[MKRQ RNKSQMX RMKWKXOVK RNWWW RMXWXXTVX',
      1045: ' 16KZRKRX RSKSX RNKMOMKXKXOWK RPXUX',
      1046: ' 33KZMONLOKPKQLRORX RXOWLVKUKTLSOSX RMONMOLPLQMRO RXOWMVLULTMSO RPXUX',
      1047: ' 40KZRKRX RSKSX RQNNOMQMRNTQUTUWTXRXQWOTNQN RQNOONQNROTQU RTUVTWRWQVOTN RPKUK RPXUX',
      1048: ' 21KZNKVX ROKWX RWKNX RLKQK RTKYK RLXQX RTXYX',
      1049: ' 33J[RKRX RSKSX RLPMONOOSQU RTUVSWOXOYP RMONROTQUTUVTWRXO RPKUK RPXUX',
      1050: ' 35KZMVNXQXMRMONMOLQKTKVLWMXOXRTXWXXV ROUNRNOOMQK RTKVMWOWRVU RNWPW RUWWW',
      1051: ' 18KYTKKX RSMTX RTKUX RNTTT RIXNX RRXWX',
      1052: ' 34JYPKLX RQKMX RNKUKWLWNVPSQ RUKVLVNUPSQ ROQRQTRUSUUTWQXJX RRQTSTUSWQX',
      1053: ' 25KXVLWLXKWNVLTKRKPLOMNOMRMUNWPXRXTWUU RRKPMOONRNVPX',
      1054: ' 26JYPKLX RQKMX RNKTKVLWNWQVTUVTWQXJX RTKULVNVQUTTVSWQX',
      1055: ' 22JYPKLX RQKMX RSORS RNKXKWNWK ROQRQ RJXTXUUSX',
      1056: ' 20JXPKLX RQKMX RSORS RNKXKWNWK ROQRQ RJXOX',
      1057: ' 33KYVLWLXKWNVLTKRKPLOMNOMRMUNWPXRXTWUVVS RRKPMOONRNVPX RRXTVUS RSSXS',
      1058: ' 27J[PKLX RQKMX RXKTX RYKUX RNKSK RVK[K ROQVQ RJXOX RRXWX',
      1059: ' 12NWTKPX RUKQX RRKWK RNXSX',
      1060: ' 19LXUKRUQWPX RVKSURWPXOXMWLUMTNUMV RSKXK',
      1061: ' 27JZPKLX RQKMX RYKOR RRPTX RSPUX RNKSK RVK[K RJXOX RRXWX',
      1062: ' 14KXQKMX RRKNX ROKTK RKXUXVUTX',
      1063: ' 30I\\OKKX ROMPX RPKQV RYKPX RYKUX RZKVX RMKPK RYK\\K RIXMX RSXXX',
      1064: ' 21JZPKLX RPKTX RQKTU RXKTX RNKQK RVKZK RJXNX',
      1065: ' 32KYRKPLOMNOMRMUNWPXRXTWUVVTWQWNVLTKRK RRKPMOONRNVPX RRXTVUTVQVMTK',
      1066: ' 24JYPKLX RQKMX RNKUKWLXMXOWQTROR RUKWMWOVQTR RJXOX',
      1067: ' 46KYRKPLOMNOMRMUNWPXRXTWUVVTWQWNVLTKRK RRKPMOONRNVPX RRXTVUTVQVMTK ROWOVPUQURVRZS[T[UZ RRVSZT[',
      1068: ' 35JZPKLX RQKMX RNKUKWLXMXOWQTROR RUKWMWOVQTR RSRTWUXVXWW RSRTSUWVX RJXOX',
      1069: ' 28KZWLXLYKXNWLUKRKPLOMOOPPUSVT RONPOURVSVVUWSXPXNWMULXMWNW',
      1070: ' 16KZTKPX RUKQX RPKNNOKZKYNYK RNXSX',
      1071: ' 20J[PKMUMWOXSXUWVUYK RQKNUNWOX RNKSK RWK[K',
      1072: ' 15KYOKPX RPKQV RYKPX RMKRK RVK[K',
      1073: ' 24I[NKMX ROKNV RTKMX RTKSX RUKTV RZKSX RLKQK RXK\\K',
      1074: ' 21KZPKTX RQKUX RYKLX RNKSK RVK[K RJXOX RRXWX',
      1075: ' 20LYPKRQPX RQKSQ RYKSQQX RNKSK RVK[K RNXSX',
      1076: ' 16LYXKLX RYKMX RQKONPKYK RLXUXVUTX',
      1101: ' 32LZQOPPPQOQOPQOTOVQVWWXXX RTOUQUWWX RURRSPTOUOWPXSXTWUU RRSPUPWQX',
      1102: ' 29JYNKNX ROKOX RORPPROTOVPWRWUVWTXRXPWOU RTOUPVRVUUWTX RLKOK',
      1103: ' 24LXVQUQURVRVQUPSOQOOPNRNUOWQXSXUWVV RQOPPOROUPWQX',
      1104: ' 32L[VKVX RWKWX RVRUPSOQOOPNRNUOWQXSXUWVU RQOPPOROUPWQX RTKWK RVXYX',
      1105: ' 26LXOSVSVRUPSOQOOPNRNUOWQXSXUWVV RUSUQSO RQOPPOROUPWQX',
      1106: ' 20LWTKULUMVMVLTKRKPMPX RRKQMQX RNOSO RNXSX',
      1107: ' 42LYQOOQOSQUSUUSUQSOQO RQOPQPSQU RSUTSTQSO RTPUOVO RPTOUOXPYTYVZ ROWPXTXVYV[T\\P\\N[NYPX',
      1108: ' 28J[NKNX ROKOX RORPPROTOVPWRWX RTOUPVRVX RLKOK RLXQX RTXYX',
      1109: ' 18NWRKRLSLSKRK RRORX RSOSX RPOSO RPXUX',
      1110: ' 23NWSKSLTLTKSK RSOSZR\\ RTOTZR\\P\\O[OZPZP[O[ RQOTO',
      1111: ' 27JZNKNX ROKOX RWOOU RRSVX RSSWX RLKOK RTOYO RLXQX RTXYX',
      1112: ' 12NWRKRX RSKSX RPKSK RPXUX',
      1113: ' 44F_JOJX RKOKX RKRLPNOPORPSRSX RPOQPRRRX RSRTPVOXOZP[R[X RXOYPZRZX RHOKO RHXMX RPXUX RXX]X',
      1114: ' 28J[NONX ROOOX RORPPROTOVPWRWX RTOUPVRVX RLOOO RLXQX RTXYX',
      1115: ' 28LYQOOPNRNUOWQXTXVWWUWRVPTOQO RQOPPOROUPWQX RTXUWVUVRUPTO',
      1116: ' 32JYNON\\ ROOO\\ RORPPROTOVPWRWUVWTXRXPWOU RTOUPVRVUUWTX RLOOO RL\\Q\\',
      1117: ' 29KYUOU\\ RVOV\\ RURTPROPONPMRMUNWPXRXTWUU RPOOPNRNUOWPX RS\\X\\',
      1118: ' 22KXOOOX RPOPX RPRQPSOUOVPVQUQUPVP RMOPO RMXRX',
      1119: ' 26LYTOUPUQVQVPTOQOOPORQSTTVU ROQQRTSVTVWTXQXOWOVPVPWQX',
      1120: ' 14LWPKPVRXTXUWUV RQKQVRX RNOTO',
      1121: ' 28J[NONUOWQXSXUWVU ROOOUPWQX RVOVX RWOWX RLOOO RTOWO RVXYX',
      1122: ' 15KYNORX ROORV RVORX RLOQO RTOXO',
      1123: ' 24I[LOOX RMOOU RROOX RROUX RSOUU RXOUX RJOOO RVOZO',
      1124: ' 21KYNOUX ROOVX RVONX RLOQO RTOXO RLXPX RSXXX',
      1125: ' 23KYNORX ROORV RVORXP[N\\M\\L[LZMZM[L[ RLOQO RTOXO',
      1126: ' 16LXUONX RVOOX ROONQNOVO RNXVXVVUX',
      1127: ' 32K[QOOPNQMSMUNWPXQXSWUUWRXO RQOOQNSNUOWPX RQOSOUPWWXX RSOTPVWXXYX',
      1128: ' 40KXRKPMOOMUK\\ RQLPNNTL\\ RRKTKVLVNUPRQ RTKULUNTPRQ RRQTRUTUVTWRXQXOWNT RRQSRTTTVRX',
      1129: ' 19KYLQNOPORPSSSXR\\ RLQNPPPRQSS RWOVRSXQ\\',
      1130: ' 39KYSOQOOPNQMSMUNWPXRXTWUVVTVRUPRNQLQKRJTJUKVM RQOOQNSNVPX RRXTVUTUQSO RQLRKTKVM',
      1131: ' 27LXVPTOQOOPOQPRRS RQOPPPQRS RRSOTNUNWPXSXUW RRSPTOUOWPX',
      1132: ' 28LWRKQLQMSNVNVMSNPOOPNRNTOVPWRXSYS[R\\P\\O[ RSNQOPPOROTPVRX',
      1133: ' 26IYJRKPLONOOPOQMX RMONPNQLX ROQPPROTOVPVRS\\ RTOUPURR\\',
      1134: ' 35IYJSKQLPNPOQOVPX RMPNQNUOWPXQXSWTVUTVQVNULTKRKQLQNRPURWS RQXSVTTUQUNTK',
      1135: ' 13NWROPVPWQXSXUWVU RSOQVQWRX',
      1136: ' 26KYOOLX RPOMX RUOVPWPVOTORQOR RORPSRWTXVWWU RORQSSWTX',
      1137: ' 15LXLKNKPLWX RNKOLVX RRPMX RRPNX',
      1138: ' 26KZOOK\\ RPOL\\ RNUNWOXQXSWTV RVOTVTWUXWXXWYU RWOUVUWVX',
      1139: ' 19JYNOMX ROONUMX RVRVOWOVRTUQWNXMX RLOOO',
      1140: ' 36MXRKQLQMSNVN RTNQOPPPRRSUS RTNROQPQRRS RSSPTOUOWQXSYTZT[S\\Q\\ RSSQTPUPWQX',
      1141: ' 28KXQOOPNQMSMUNWPXRXTWUVVTVRUPSOQO RQOOQNSNVPX RRXTVUTUQSO',
      1142: ' 20IZPPMX RPPNX RTPSX RTPTX RKQMOXO RKQMPXP',
      1143: ' 29JXSOQOOPNQMSJ\\ RQOOQNSK\\ RSOUPVRVTUVTWRXPXNWMU RSOUQUTTVRX',
      1144: ' 28K[YOQOOPNQMSMUNWPXRXTWUVVTVRUPYP RQOOQNSNVPX RRXTVUTUQSO',
      1145: ' 14KZSPQX RSPRX RMQOOXO RMQOPXP',
      1146: ' 24JXKRLPMOOOPPPROUOWPX RNOOPORNUNWPXQXSWUUVRVOUOVP',
      1147: ' 35KZOPNQMSMUNWPXRXUWWUXRXPWOUOTPSRRUO\\ RMUNVPWRWUVWTXR RXQWPUPSR RRUQXP\\',
      1148: ' 17KXMONOPPS[T\\ RNOOPR[T\\U\\ RVOTRNYL\\',
      1149: ' 28I[TKQ\\ RUKP\\ RJRKPLONOOPOVPWSWUVWT RMONPNTOWPXSXUWWTXRYO',
      1150: ' 36JZNPPPPONPMQLSLUMWNXPXQWRUSR RLUNWPWRU RRRRWSXUXWVXTXRWPVOVPWP RRUSWUWWV',
      1151: ' 32KZVOTVTWUXWXXWYU RWOUVUWVX RUSUQSOQOOPNQMSMUNWPXRXTV RQOOQNSNVPX',
      1152: ' 32JXOKMR RPKNRNVPX RNROPQOSOUPVRVTUVTWRXPXNWMUMR RSOUQUTTVRX RMKPK',
      1153: ' 22KXUPUQVQUPSOQOOPNQMSMUNWPXRXTWUV RQOOQNSNVPX',
      1154: ' 35KZWKTVTWUXWXXWYU RXKUVUWVX RUSUQSOQOOPNQMSMUNWPXRXTV RQOOQNSNVPX RUKXK',
      1155: ' 23KWNURTTSURUPSOQOOPNQMSMUNWPXRXTWUV RQOOQNSNVPX',
      1156: ' 23MXWKXLXKVKTLSNPYO[N\\ RVKULTNQYP[N\\L\\L[M\\ RPOVO',
      1157: ' 34KYVOTVSYR[ RWOUVTYR[P\\M\\L[M[N\\ RUSUQSOQOOPNQMSMUNWPXRXTV RQOOQNSNVPX',
      1158: ' 29KZPKLX RQKMX ROQPPROTOVPVRUUUWVX RTOUPURTUTWUXWXXWYU RNKQK',
      1159: ' 26MWSKSLTLTKSK RNROPPOROSPSRRURWSX RQORPRRQUQWRXTXUWVU',
      1160: ' 26MWTKTLULUKTK RORPPQOSOTPTRRYQ[O\\M\\M[N\\ RROSPSRQYP[O\\',
      1161: ' 32KXPKLX RQKMX RVPUQVQVPUOTORQPROR RORPSQWRXTXUWVU RORQSRWSX RNKQK',
      1162: ' 16NVSKPVPWQXSXTWUU RTKQVQWRX RQKTK',
      1163: ' 46F^GRHPIOKOLPLQJX RJOKPKQIX RLQMPOOQOSPSQQX RQORPRQPX RSQTPVOXOZPZRYUYWZX RXOYPYRXUXWYX[X\\W]U',
      1164: ' 33J[KRLPMOOOPPPQNX RNOOPOQMX RPQQPSOUOWPWRVUVWWX RUOVPVRUUUWVXXXYWZU',
      1165: ' 28KXQOOPNQMSMUNWPXRXTWUVVTVRUPSOQO RQOOQNSNVPX RRXTVUTUQSO',
      1166: ' 35JYKRLPMOOOPPPQM\\ RNOOPOQL\\ RPQROTOVPWRWTVVUWSXQXOVOT RTOVQVTUVSX RJ\\O\\',
      1167: ' 28KYVOR\\ RWOS\\ RUSUQSOQOOPNQMSMUNWPXRXTV RQOOQNSNVPX RP\\U\\',
      1168: ' 22LXMRNPOOQORPRQPX RPOQPQQOX RRQSPUOVOWPWQVQWP',
      1169: ' 24LYVPVQWQVPTOQOOPORQSTTVU ROQQRTSVTVWTXQXOWNVOVOW',
      1170: ' 16NWSKPVPWQXSXTWUU RTKQVQWRX RPOUO',
      1171: ' 33IZJRKPLONOOPORNUNWOX RMONPNRMUMWOXQXSWTV RVOTVTWUXWXXWYU RWOUVUWVX',
      1172: ' 24JXKRLPMOOOPPPROUOWPX RNOOPORNUNWPXQXSWUUVRVOUOVP',
      1173: ' 37H\\IRJPKOMONPNRMUMWNX RLOMPMRLULWNXOXQWRV RTORVRWTX RUOSVSWTXUXWWYUZRZOYOZP',
      1174: ' 38JZMRNPPOROSPSR RQORPRRQUPWNXMXLWLVMVLW RXPWQXQXPWOVOTPSRRURWSX RQUQWRXTXVWWU',
      1175: ' 35IYJRKPLONOOPORNUNWOX RMONPNRMUMWOXQXSWTV RVOTVSYR[ RWOUVTYR[P\\M\\L[M[N\\',
      1176: ' 27KYWOWPVQNVMWMX RNQOOROUQ ROPRPUQVQ RNVOVRWUW ROVRXUXVV',
      1177: ' 39H[RKSLSMTMTLRKOKMLLNLX ROKNLMNMX RXKYLYMZMZLXKVKTMTX RVKUMUX RJOWO RJXOX RRXWX',
      1178: ' 29J[UKVLWLWKQKOLNNNX RQKPLONOX RVOVX RWOWX RLOWO RLXQX RTXYX',
      1179: ' 27J[WKQKOLNNNX RQKPLONOX RUKVLVX RWKWX RLOVO RLXQX RTXYX',
      1180: ' 48F_PKQLQMRMRLPKMKKLJNJX RMKLLKNKX RYKZL[L[KUKSLRNRX RUKTLSNSX RZOZX R[O[X RHO[O RHXMX RPXUX RXX]X',
      1181: ' 46F_PKQLQMRMRLPKMKKLJNJX RMKLLKNKX R[KUKSLRNRX RUKTLSNSX RYKZLZX R[K[X RHOZO RHXMX RPXUX RXX]X',
      1182: ' 12NWRORX RSOSX RPOSO RPXUX',
      1184: ' 21LXVPTOROPPOQNSNUOWQXSXUW RROPQOSOVQX ROSSS',
      1185: ' 35LYSKQLPMOONRNUOWPXRXTWUVVTWQWNVLUKSK RSKQMPOOSOVPX RRXTVUTVPVMUK ROQVQ',
      1186: ' 34KZTKQ\\ RUKP\\ RQONPMRMUNWQXTXWWXUXRWPTOQO RQOOPNRNUOWQX RTXVWWUWRVPTO',
      1187: ' 22LXUPVRVQUPSOQOOPNRNTOVRX RQOOQOTPVRXSYS[R\\P\\',
      1191: ' 45I[VKWLXLVKSKQLPMOOLYK[J\\ RSKQMPOMYL[J\\H\\H[I\\ RZK[L[KYKWLVNSYR[Q\\ RYKXLWNTYS[Q\\O\\O[P\\ RLOYO',
      1192: ' 38IZVKWLXLXKSKQLPMOOLYK[J\\ RSKQMPOMYL[J\\H\\H[I\\ RVOTVTWUXWXXWYU RWOUVUWVX RLOWO',
      1193: ' 38IZVKWL RXKSKQLPMOOLYK[J\\ RSKQMPOMYL[J\\H\\H[I\\ RWKTVTWUXWXXWYU RXKUVUWVX RLOVO',
      1194: ' 63F^SKTLTM RULSKPKNLMMLOIYH[G\\ RPKNMMOJYI[G\\E\\E[F\\ RZK[L\\L\\KWKUL RTMSOPYO[N\\ RWKUMTOQYP[N\\L\\L[M\\ RZOXVXWYX[X\\W]U R[OYVYWZX RIO[O',
      1195: ' 63F^SKTLTM RULSKPKNLMMLOIYH[G\\ RPKNMMOJYI[G\\E\\E[F\\ RZK[L R\\KWKUL RTMSOPYO[N\\ RWKUMTOQYP[N\\L\\L[M\\ R[KXVXWYX[X\\W]U R\\KYVYWZX RIOZO',
      1196: ' 20MWNROPPOROSPSRRURWSX RQORPRRQUQWRXTXUWVU',
      1200: ' 28LYQKOLNONTOWQXTXVWWTWOVLTKQK RQKPLOOOTPWQX RTXUWVTVOULTK',
      1201: ' 10LYPNSKSX RRLRX ROXVX',
      1202: ' 35LYOMONNNNMOLQKTKVLWNVPTQQROSNUNX RTKULVNUPTQ RNWOVPVSWVWWV RPVSXVXWVWU',
      1203: ' 39LYOMONNNNMOLQKTKVLWNVPTQ RTKULVNUPTQ RRQTQVRWTWUVWTXQXOWNVNUOUOV RTQURVTVUUWTX',
      1204: ' 13LYSMSX RTKTX RTKMTXT RQXVX',
      1205: ' 33LYOKNQ ROKVK ROLSLVK RNQOPQOTOVPWRWUVWTXQXOWNVNUOUOV RTOUPVRVUUWTX',
      1206: ' 36LYVMVNWNWMVLTKRKPLOMNPNUOWQXTXVWWUWSVQTPQPNR RRKPMOPOUPWQX RTXUWVUVSUQTP',
      1207: ' 22LYNKNO RVMRTPX RWKTQQX RNMPKRKUM RNMPLRLUMVM',
      1208: ' 51LYQKOLNNOPQQTQVPWNVLTKQK RQKPLONPPQQ RTQUPVNULTK RQQORNTNUOWQXTXVWWUWTVRTQ RQQPROTOUPWQX RTXUWVUVTURTQ',
      1209: ' 36LYOVOUNUNVOWQXSXUWVVWSWNVLTKQKOLNNNPORQSTSWQ RSXUVVSVNULTK RQKPLONOPPRQS',
      1210: '  6NVRVQWRXSWRV',
      1211: '  8NVSWRXQWRVSWSYQ[',
      1212: ' 12NVROQPRQSPRO RRVQWRXSWRV',
      1213: ' 14NVROQPRQSPRO RSWRXQWRVSWSYQ[',
      1214: ' 15NVRKQLRSSLRK RRLRO RRVQWRXSWRV',
      1215: ' 29LYNNONOONONNOLQKTKVLWNWOVQSRRSRTST RTKVMVPUQSR RRWRXSXSWRW',
      1216: '  6OVRKRP RSKRP',
      1217: ' 12LXOKOP RPKOP RUKUP RVKUP',
      1218: ' 10MWQKPLPNQOSOTNTLSKQK',
      1219: '  9MWRJRP ROKUO RUKOO',
      1220: '  3KZXHM\\',
      1221: ' 16MWUHSJQMPPPTQWSZU\\ RSJRLQPQTRXSZ',
      1222: ' 16MWOHQJSMTPTTSWQZO\\ RQJRLSPSTRXQZ',
      1223: ' 12MWPHP\\ RQHQ\\ RPHUH RP\\U\\',
      1224: ' 12MWSHS\\ RTHT\\ ROHTH RO\\T\\',
      1225: ' 38LWSHQIPJPLRNSP RQIPL RSNRQ RPJQLSNSPRQPRRSSTSVQXPZ RRSSV RPXQ[ RSTRVPXPZQ[S\\',
      1226: ' 38MXQHSITJTLRNQP RSITL RQNRQ RTJSLQNQPRQTRRSQTQVSXTZ RRSQV RTXS[ RQTRVTXTZS[Q\\',
      1227: '  4MWTHPRT\\',
      1228: '  4MWPHTRP\\',
      1229: '  3OURHR\\',
      1230: '  6MWPHP\\ RTHT\\',
      1231: '  3I[LRXR',
      1232: '  6I[RLRX RLRXR',
      1233: '  9JZRMRX RMRWR RMXWX',
      1234: '  9JZRMRX RMMWM RMRWR',
      1235: '  6JZMMWW RWMMW',
      1236: '  6NVRQQRRSSRRQ',
      1237: ' 15I[RLQMRNSMRL RLRXR RRVQWRXSWRV',
      1238: '  6I[LPXP RLTXT',
      1239: '  9I[WLMX RLPXP RLTXT',
      1240: '  9I[LNXN RLRXR RLVXV',
      1241: '  4JZWLMRWX',
      1242: '  4JZMLWRMX',
      1243: ' 10JZWKMOWS RMTWT RMXWX',
      1244: ' 10JZMKWOMS RMTWT RMXWX',
      1245: ' 21H[YUWUUTTSRPQOONNNLOKQKRLTNUOUQTRSTPUOWNYN',
      1246: ' 16JZLTLRMPOPUSWSXR RLRMQOQUTWTXRXP',
      1247: '  8JZMSRPWS RMSRQWS',
      1248: '  7NVSKPO RSKTLPO',
      1249: '  7NVQKTO RQKPLTO',
      1250: ' 14LXNKOMQNSNUMVK RNKONQOSOUNVK',
      1251: '  8NVSLRMQLRKSLSNQP',
      1252: '  8NVSKQMQORPSORNQO',
      1253: '  8NVQLRMSLRKQLQNSP',
      1254: '  8NVQKSMSORPQORNSO',
      1256: ' 11JZWMQMONNOMQMSNUOVQWWW',
      1257: ' 11JZMMMSNUOVQWSWUVVUWSWM',
      1258: ' 11JZMMSMUNVOWQWSVUUVSWMW',
      1259: ' 11JZMWMQNOONQMSMUNVOWQWW',
      1260: ' 14JZWMQMONNOMQMSNUOVQWWW RMRUR',
      1261: ' 13I[TOUPXRUTTU RUPWRUT RLRWR',
      1262: ' 13MWRMRX ROPPORLTOUP RPORMTO',
      1263: ' 13I[POOPLROTPU ROPMROT RMRXR',
      1264: ' 13MWRLRW ROTPURXTUUT RPURWTU',
      1265: ' 37KYVSUPSOQOOPNQMSMUNWPXRXTWUVVTWQWNVLTKQKPLQLRK RQOOQNSNVPX RRXTVUTVQVNULTK',
      1266: ' 15JZLKRX RMKRV RXKRX RLKXK RNLWL',
      1267: ' 10G[IOLORW RKORX R[FRX',
      1268: ' 26I[XIXJYJYIXHVHTJSLROQUPYO[ RUITKSORUQXPZN\\L\\K[KZLZL[',
      1269: ' 40I[XIXJYJYIXHVHTJSLROQUPYO[ RUITKSORUQXPZN\\L\\K[KZLZL[ RQNOONQNSOUQVSVUUVSVQUOSNQN',
      1270: ' 26H\\ZRYTWUVUTTSSQPPONNMNKOJQJRKTMUNUPTQSSPTOVNWNYOZQZR',
      1271: ' 26JZXKLX ROKPLPNOOMOLNLLMKOKSLVLXK RUTTUTWUXWXXWXUWTUT',
      1272: ' 41J[YPXPXQYQYPXOWOVPUTTVSWQXOXMWLVLTMSORRPSNSLRKPKOLONPQUWWXXXYW ROXMVMTOR RONPPVWWX',
      1273: ' 29J[UPSOQOPQPRQTSTUS RUOUSVTXTYRYQXNVLSKRKOLMNLQLRMUOWRXSXVW',
      1274: ' 34KZQHQ\\ RTHT\\ RWLVLVMWMWLUKPKNLNNOPVSWT RNNOOVRWTWVVWTXQXOWNVNUOUOVNV',
      1275: ' 12KYRKN\\ RVKR\\ RNQWQ RMVVV',
      1276: ' 40LXTLSLSMTMTLSKQKPLPNQPTRUS RPNQOTQUSUUSW RQPOROTPVSXTY ROTPUSWTYT[S\\Q\\P[PZQZQ[P[',
      1277: ' 29LXRKQLRMSLRK RRMRQ RRQQSRVSSRQ RRVR\\ RPOONNOOPPOTOUNVOUPTO',
      1278: ' 42LXRMSLRKQLRMRQQRSURV RRQSRQURVRZQ[R\\S[RZ RPOONNOOPPOTOUNVOUPTO RPXOWNXOYPXTXUWVXUYTX',
      1279: ' 12LYVKVX RNKVK RQQVQ RNXVX',
      1281: ' 24H\\QKNLLNKQKSLVNXQYSYVXXVYSYQXNVLSKQK RRQQRRSSRRQ',
      1282: ' 33LYQKPLPMQN RTKULUMTN RRNPOOQORPTRUSUUTVRVQUOSNRN RRURY RSUSY ROWVW',
      1283: ' 23LYRKPLONOOPQRRSRUQVOVNULSKRK RRRRX RSRSX ROUVU',
      1284: ' 24H\\QKNLLNKQKSLVNXQYSYVXXVYSYQXNVLSKQK RRKRY RKRYR',
      1285: ' 25JYRRPQOQMRLTLUMWOXPXRWSUSTRR RWMRR RRMWMWR RRMVNWR',
      1286: ' 25JZLLMKOKQLRNRPQRPSNT ROKPLQNQQPS RVKUX RWKTX RNTXT',
      1287: ' 27JYNKNU ROKNR RNROPQOSOUPVQVTTVTXUYVYWX RSOUQUTTV RLKOK',
      1288: ' 27LYONRKRQ RVNSKSQ RRQPROTOUPWRXSXUWVUVTURSQ RRTRUSUSTRT',
      1289: ' 27JZRKRY RMKMPNRPSTSVRWPWK RLMMKNM RQMRKSM RVMWKXM ROVUV',
      1290: ' 27JYNKNX ROKOX RLKSKVLWNWOVQSROR RSKULVNVOUQSR RLXVXVUUX',
      1291: ' 20LYWKTKQLONNQNSOVQXTYWY RWKTLRNQQQSRVTXWY',
      1292: ' 23JZRRPQOQMRLTLUMWOXPXRWSUSTRR RSLQQ RWMRR RXQSS',
      1293: ' 12KYPMTW RTMPW RMPWT RWPMT',
      1294: ' 34J[OUMULVLXMYOYPXPVNTMRMONMOLQKTKVLWMXOXRWTUVUXVYXYYXYVXUVU RNMPLULWM',
      1295: ' 34J[OOMOLNLLMKOKPLPNNPMRMUNWOXQYTYVXWWXUXRWPUNULVKXKYLYNXOVO RNWPXUXWW',
      1401: ' 21F^KHK\\ RLHL\\ RXHX\\ RYHY\\ RHH\\H RH\\O\\ RU\\\\\\',
      1402: ' 20H]KHRQJ\\ RJHQQ RJHYHZMXH RK[X[ RJ\\Y\\ZWX\\',
      1403: ' 20KYVBTDRGPKOPOTPYR]T`Vb RTDRHQKPPPTQYR\\T`',
      1404: ' 20KYNBPDRGTKUPUTTYR]P`Nb RPDRHSKTPTTSYR\\P`',
      1405: ' 12KYOBOb RPBPb ROBVB RObVb',
      1406: ' 12KYTBTb RUBUb RNBUB RNbUb',
      1407: ' 40KYTBRCQDPFPHQJRKSMSOQQ RRCQEQGRISJTLTNSPORSTTVTXSZR[Q]Q_Ra RQSSUSWRYQZP\\P^Q`RaTb',
      1408: ' 40KYPBRCSDTFTHSJRKQMQOSQ RRCSESGRIQJPLPNQPURQTPVPXQZR[S]S_Ra RSSQUQWRYSZT\\T^S`RaPb',
      1409: ' 24KYU@RCPFOIOLPOSVTYT\\S_Ra RRCQEPHPKQNTUUXU[T^RaOd',
      1410: ' 24KYO@RCTFUIULTOQVPYP\\Q_Ra RRCSETHTKSNPUOXO[P^RaUd',
      1411: ' 13AXCRGRR` RGSRa RFSRb RX:Rb',
      1412: ' 32F^[CZD[E\\D\\C[BYBWCUETGSJRNPZO^N` RVDUFTJRVQZP]O_MaKbIbHaH`I_J`Ia',
      2001: ' 18H\\RFK[ RRFY[ RRIX[ RMUVU RI[O[ RU[[[',
      2002: ' 45G]LFL[ RMFM[ RIFUFXGYHZJZLYNXOUP RUFWGXHYJYLXNWOUP RMPUPXQYRZTZWYYXZU[I[ RUPWQXRYTYWXYWZU[',
      2003: ' 32G\\XIYLYFXIVGSFQFNGLIKKJNJSKVLXNZQ[S[VZXXYV RQFOGMILKKNKSLVMXOZQ[',
      2004: ' 30G]LFL[ RMFM[ RIFSFVGXIYKZNZSYVXXVZS[I[ RSFUGWIXKYNYSXVWXUZS[',
      2005: ' 22G\\LFL[ RMFM[ RSLST RIFYFYLXF RMPSP RI[Y[YUX[',
      2006: ' 20G[LFL[ RMFM[ RSLST RIFYFYLXF RMPSP RI[P[',
      2007: ' 40G^XIYLYFXIVGSFQFNGLIKKJNJSKVLXNZQ[S[VZXX RQFOGMILKKNKSLVMXOZQ[ RXSX[ RYSY[ RUS\\S',
      2008: ' 27F^KFK[ RLFL[ RXFX[ RYFY[ RHFOF RUF\\F RLPXP RH[O[ RU[\\[',
      2009: ' 12MXRFR[ RSFS[ ROFVF RO[V[',
      2010: ' 20KZUFUWTZR[P[NZMXMVNUOVNW RTFTWSZR[ RQFXF',
      2011: ' 27F\\KFK[ RLFL[ RYFLS RQOY[ RPOX[ RHFOF RUF[F RH[O[ RU[[[',
      2012: ' 14I[NFN[ ROFO[ RKFRF RK[Z[ZUY[',
      2013: ' 30F_KFK[ RLFRX RKFR[ RYFR[ RYFY[ RZFZ[ RHFLF RYF]F RH[N[ RV[][',
      2014: ' 21G^LFL[ RMFYY RMHY[ RYFY[ RIFMF RVF\\F RI[O[',
      2015: ' 44G]QFNGLIKKJOJRKVLXNZQ[S[VZXXYVZRZOYKXIVGSFQF RQFOGMILKKOKRLVMXOZQ[ RS[UZWXXVYRYOXKWIUGSF',
      2016: ' 29G]LFL[ RMFM[ RIFUFXGYHZJZMYOXPUQMQ RUFWGXHYJYMXOWPUQ RI[P[',
      2017: ' 64G]QFNGLIKKJOJRKVLXNZQ[S[VZXXYVZRZOYKXIVGSFQF RQFOGMILKKOKRLVMXOZQ[ RS[UZWXXVYRYOXKWIUGSF RNYNXOVQURUTVUXV_W`Y`Z^Z] RUXV\\W^X_Y_Z^',
      2018: ' 45G]LFL[ RMFM[ RIFUFXGYHZJZLYNXOUPMP RUFWGXHYJYLXNWOUP RI[P[ RRPTQURXYYZZZ[Y RTQUSWZX[Z[[Y[X',
      2019: ' 34H\\XIYFYLXIVGSFPFMGKIKKLMMNOOUQWRYT RKKMMONUPWQXRYTYXWZT[Q[NZLXKUK[LX',
      2020: ' 16I\\RFR[ RSFS[ RLFKLKFZFZLYF RO[V[',
      2021: ' 23F^KFKULXNZQ[S[VZXXYUYF RLFLUMXOZQ[ RHFOF RVF\\F',
      2022: ' 15H\\KFR[ RLFRX RYFR[ RIFOF RUF[F',
      2023: ' 24F^JFN[ RKFNV RRFN[ RRFV[ RSFVV RZFV[ RGFNF RWF]F',
      2024: ' 21H\\KFX[ RLFY[ RYFK[ RIFOF RUF[F RI[O[ RU[[[',
      2025: ' 20H]KFRQR[ RLFSQS[ RZFSQ RIFOF RVF\\F RO[V[',
      2026: ' 16H\\XFK[ RYFL[ RLFKLKFYF RK[Y[YUX[',
      2027: ' 18H\\RFK[ RRFY[ RRIX[ RMUVU RI[O[ RU[[[',
      2028: ' 45G]LFL[ RMFM[ RIFUFXGYHZJZLYNXOUP RUFWGXHYJYLXNWOUP RMPUPXQYRZTZWYYXZU[I[ RUPWQXRYTYWXYWZU[',
      2029: ' 14I[NFN[ ROFO[ RKFZFZLYF RK[R[',
      2030: ' 15H\\RFJ[ RRFZ[ RRIY[ RKZYZ RJ[Z[',
      2031: ' 22G\\LFL[ RMFM[ RSLST RIFYFYLXF RMPSP RI[Y[YUX[',
      2032: ' 16H\\XFK[ RYFL[ RLFKLKFYF RK[Y[YUX[',
      2033: ' 27F^KFK[ RLFL[ RXFX[ RYFY[ RHFOF RUF\\F RLPXP RH[O[ RU[\\[',
      2034: ' 56G]QFNGLIKKJOJRKVLXNZQ[S[VZXXYVZRZOYKXIVGSFQF RQFOGMILKKOKRLVMXOZQ[ RS[UZWXXVYRYOXKWIUGSF ROMOT RUMUT ROPUP ROQUQ',
      2035: ' 12MXRFR[ RSFS[ ROFVF RO[V[',
      2036: ' 27F\\KFK[ RLFL[ RYFLS RQOY[ RPOX[ RHFOF RUF[F RH[O[ RU[[[',
      2037: ' 15H\\RFK[ RRFY[ RRIX[ RI[O[ RU[[[',
      2038: ' 30F_KFK[ RLFRX RKFR[ RYFR[ RYFY[ RZFZ[ RHFLF RYF]F RH[N[ RV[][',
      2039: ' 21G^LFL[ RMFYY RMHY[ RYFY[ RIFMF RVF\\F RI[O[',
      2040: ' 36G]KEJJ RZEYJ RONNS RVNUS RKWJ\\ RZWY\\ RKGYG RKHYH ROPUP ROQUQ RKYYY RKZYZ',
      2041: ' 44G]QFNGLIKKJOJRKVLXNZQ[S[VZXXYVZRZOYKXIVGSFQF RQFOGMILKKOKRLVMXOZQ[ RS[UZWXXVYRYOXKWIUGSF',
      2042: ' 21F^KFK[ RLFL[ RXFX[ RYFY[ RHF\\F RH[O[ RU[\\[',
      2043: ' 29G]LFL[ RMFM[ RIFUFXGYHZJZMYOXPUQMQ RUFWGXHYJYMXOWPUQ RI[P[',
      2044: ' 20H]KFRPJ[ RJFQP RJFYFZLXF RKZXZ RJ[Y[ZUX[',
      2045: ' 16I\\RFR[ RSFS[ RLFKLKFZFZLYF RO[V[',
      2046: ' 33I\\KKKILGMFOFPGQIRMR[ RKIMGOGQI RZKZIYGXFVFUGTISMS[ RZIXGVGTI RO[V[',
      2047: ' 48H]RFR[ RSFS[ RPKMLLMKOKRLTMUPVUVXUYTZRZOYMXLUKPK RPKNLMMLOLRMTNUPV RUVWUXTYRYOXMWLUK ROFVF RO[V[',
      2048: ' 21H\\KFX[ RLFY[ RYFK[ RIFOF RUF[F RI[O[ RU[[[',
      2049: ' 41G^RFR[ RSFS[ RIMJLLMMQNSOTQU RJLKMLQMSNTQUTUWTXSYQZM[L RTUVTWSXQYM[L\\M ROFVF RO[V[',
      2050: ' 43G]JXK[O[MWKSJPJLKIMGPFTFWGYIZLZPYSWWU[Y[ZX RMWLTKPKLLINGPF RTFVGXIYLYPXTWW RKZNZ RVZYZ',
      2051: ' 18H\\UFH[ RUFV[ RTHU[ RLUUU RF[L[ RR[X[',
      2052: ' 41F^OFI[ RPFJ[ RLFWFZG[I[KZNYOVP RWFYGZIZKYNXOVP RMPVPXQYSYUXXVZR[F[ RVPWQXSXUWXUZR[',
      2053: ' 34H]ZH[H\\F[L[JZHYGWFTFQGOIMLLOKSKVLYMZP[S[UZWXXV RTFRGPINLMOLSLVMYNZP[',
      2054: ' 30F]OFI[ RPFJ[ RLFUFXGYHZKZOYSWWUYSZO[F[ RUFWGXHYKYOXSVWTYRZO[',
      2055: ' 22F]OFI[ RPFJ[ RTLRT RLF[FZLZF RMPSP RF[U[WVT[',
      2056: ' 20F\\OFI[ RPFJ[ RTLRT RLF[FZLZF RMPSP RF[M[',
      2057: ' 42H^ZH[H\\F[L[JZHYGWFTFQGOIMLLOKSKVLYMZP[R[UZWXYT RTFRGPINLMOLSLVMYNZP[ RR[TZVXXT RUT\\T',
      2058: ' 27E_NFH[ ROFI[ R[FU[ R\\FV[ RKFRF RXF_F RLPXP RE[L[ RR[Y[',
      2059: ' 12LYUFO[ RVFP[ RRFYF RL[S[',
      2060: ' 21I[XFSWRYQZO[M[KZJXJVKULVKW RWFRWQYO[ RTF[F',
      2061: ' 27F]OFI[ RPFJ[ R]FLS RSOW[ RROV[ RLFSF RYF_F RF[M[ RS[Y[',
      2062: ' 14H\\QFK[ RRFL[ RNFUF RH[W[YUV[',
      2063: ' 30E`NFH[ RNFO[ ROFPY R\\FO[ R\\FV[ R]FW[ RKFOF R\\F`F RE[K[ RS[Z[',
      2064: ' 21F_OFI[ ROFVX ROIV[ R\\FV[ RLFOF RYF_F RF[L[',
      2065: ' 42G]SFPGNILLKOJSJVKYLZN[Q[TZVXXUYRZNZKYHXGVFSF RSFQGOIMLLOKSKVLYN[ RQ[SZUXWUXRYNYKXHVF',
      2066: ' 27F]OFI[ RPFJ[ RLFXF[G\\I\\K[NYPUQMQ RXFZG[I[KZNXPUQ RF[M[',
      2067: ' 61G]SFPGNILLKOJSJVKYLZN[Q[TZVXXUYRZNZKYHXGVFSF RSFQGOIMLLOKSKVLYN[ RQ[SZUXWUXRYNYKXHVF RLYLXMVOUPURVSXS_T`V`W^W] RSXT^U_V_W^',
      2068: ' 42F^OFI[ RPFJ[ RLFWFZG[I[KZNYOVPMP RWFYGZIZKYNXOVP RRPTQURVZW[Y[ZYZX RURWYXZYZZY RF[M[',
      2069: ' 35G^ZH[H\\F[L[JZHYGVFRFOGMIMKNMONVRXT RMKOMVQWRXTXWWYVZS[O[LZKYJWJUI[JYKY',
      2070: ' 16H]UFO[ RVFP[ ROFLLNF]F\\L\\F RL[S[',
      2071: ' 25F_NFKQJUJXKZN[R[UZWXXU\\F ROFLQKUKXLZN[ RKFRF RYF_F',
      2072: ' 15H\\NFO[ ROFPY R\\FO[ RLFRF RXF^F',
      2073: ' 24E_MFK[ RNFLY RUFK[ RUFS[ RVFTY R]FS[ RJFQF RZF`F',
      2074: ' 21G]NFU[ ROFV[ R\\FH[ RLFRF RXF^F RF[L[ RR[X[',
      2075: ' 20H]NFRPO[ ROFSPP[ R]FSP RLFRF RYF_F RL[S[',
      2076: ' 16G][FH[ R\\FI[ ROFLLNF\\F RH[V[XUU[',
      2077: ' 46H\\KILKXWYYY[ RLLXX RKIKKLMXYY[ RPPLTKVKXLZK[ RKVMZ RLTLVMXMZK[ RSSXN RVIVLWNYNYLWKVI RVIWLYN',
      2101: ' 39I]NONPMPMONNPMTMVNWOXQXXYZZ[ RWOWXXZZ[[[ RWQVRPSMTLVLXMZP[S[UZWX RPSNTMVMXNZP[',
      2102: ' 33G\\LFL[ RMFM[ RMPONQMSMVNXPYSYUXXVZS[Q[OZMX RSMUNWPXSXUWXUZS[ RIFMF',
      2103: ' 28H[WPVQWRXQXPVNTMQMNNLPKSKULXNZQ[S[VZXX RQMONMPLSLUMXOZQ[',
      2104: ' 36H]WFW[ RXFX[ RWPUNSMQMNNLPKSKULXNZQ[S[UZWX RQMONMPLSLUMXOZQ[ RTFXF RW[[[',
      2105: ' 31H[LSXSXQWOVNTMQMNNLPKSKULXNZQ[S[VZXX RWSWPVN RQMONMPLSLUMXOZQ[',
      2106: ' 22KXUGTHUIVHVGUFSFQGPIP[ RSFRGQIQ[ RMMUM RM[T[',
      2107: ' 60I\\QMONNOMQMSNUOVQWSWUVVUWSWQVOUNSMQM RONNPNTOV RUVVTVPUN RVOWNYMYNWN RNUMVLXLYM[P\\U\\X]Y^ RLYMZP[U[X\\Y^Y_XaUbObLaK_K^L\\O[',
      2108: ' 28G]LFL[ RMFM[ RMPONRMTMWNXPX[ RTMVNWPW[ RIFMF RI[P[ RT[[[',
      2109: ' 18MXRFQGRHSGRF RRMR[ RSMS[ ROMSM RO[V[',
      2110: ' 25MXSFRGSHTGSF RTMT_SaQbObNaN`O_P`Oa RSMS_RaQb RPMTM',
      2111: ' 27G\\LFL[ RMFM[ RWMMW RRSX[ RQSW[ RIFMF RTMZM RI[P[ RT[Z[',
      2112: ' 12MXRFR[ RSFS[ ROFSF RO[V[',
      2113: ' 44BcGMG[ RHMH[ RHPJNMMOMRNSPS[ ROMQNRPR[ RSPUNXMZM]N^P^[ RZM\\N]P][ RDMHM RD[K[ RO[V[ RZ[a[',
      2114: ' 28G]LML[ RMMM[ RMPONRMTMWNXPX[ RTMVNWPW[ RIMMM RI[P[ RT[[[',
      2115: ' 36H\\QMNNLPKSKULXNZQ[S[VZXXYUYSXPVNSMQM RQMONMPLSLUMXOZQ[ RS[UZWXXUXSWPUNSM',
      2116: ' 36G\\LMLb RMMMb RMPONQMSMVNXPYSYUXXVZS[Q[OZMX RSMUNWPXSXUWXUZS[ RIMMM RIbPb',
      2117: ' 33H\\WMWb RXMXb RWPUNSMQMNNLPKSKULXNZQ[S[UZWX RQMONMPLSLUMXOZQ[ RTb[b',
      2118: ' 23IZNMN[ ROMO[ ROSPPRNTMWMXNXOWPVOWN RKMOM RK[R[',
      2119: ' 32J[WOXMXQWOVNTMPMNNMOMQNRPSUUWVXW RMPNQPRUTWUXVXYWZU[Q[OZNYMWM[NY',
      2120: ' 16KZPFPWQZS[U[WZXX RQFQWRZS[ RMMUM',
      2121: ' 28G]LMLXMZP[R[UZWX RMMMXNZP[ RWMW[ RXMX[ RIMMM RTMXM RW[[[',
      2122: ' 15I[LMR[ RMMRY RXMR[ RJMPM RTMZM',
      2123: ' 24F^JMN[ RKMNX RRMN[ RRMV[ RSMVX RZMV[ RGMNM RWM]M',
      2124: ' 21H\\LMW[ RMMX[ RXML[ RJMPM RTMZM RJ[P[ RT[Z[',
      2125: ' 22H[LMR[ RMMRY RXMR[P_NaLbKbJaK`La RJMPM RTMZM',
      2126: ' 16I[WML[ RXMM[ RMMLQLMXM RL[X[XWW[',
      2127: ' 40G^QMNNLPKRJUJXKZN[P[RZUWWTYPZM RQMONMPLRKUKXLZN[ RQMSMUNVPXXYZZ[ RSMTNUPWXXZZ[[[',
      2128: ' 57G\\TFQGOIMMLPKTJZIb RTFRGPINMMPLTKZJb RTFVFXGYHYKXMWNTOPO RVFXHXKWMVNTO RPOTPVRWTWWVYUZR[P[NZMYLV RPOSPURVTVWUYTZR[',
      2129: ' 28H\\IPKNMMOMQNROSRSVRZOb RJOLNPNRO RZMYPXRSYP^Nb RYMXPWRSY',
      2130: ' 44I\\VNTMRMONMQLTLWMYNZP[R[UZWWXTXQWOSJRHRFSEUEWFYH RRMPNNQMTMXNZ RR[TZVWWTWPVNTKSISGTFVFYH',
      2131: ' 32I[XPVNTMPMNNNPPRSS RPMONOPQRSS RSSNTLVLXMZP[S[UZWX RSSOTMVMXNZP[',
      2132: ' 31I[TFRGQHQIRJUKZKZJWKSMPOMRLULWMYP[S]T_TaSbQbPa RULQONRMUMWNYP[',
      2133: ' 32G]HQIOKMNMONOPNTL[ RMMNNNPMTK[ RNTPPRNTMVMXNYOYRXWUb RVMXOXRWWTb',
      2134: ' 44F]GQHOJMMMNNNPMUMXNZO[ RLMMNMPLULXMZO[Q[SZUXWUXRYMYIXGVFTFRHRJSMUPWRZT RSZUWVUWRXMXIWGVF',
      2135: ' 15LXRMPTOXOZP[S[UYVW RSMQTPXPZQ[',
      2136: ' 29H\\NMJ[ ROMK[ RXMYNZNYMWMUNQROSMS ROSQTSZT[ ROSPTRZS[U[WZYW',
      2137: ' 23H\\KFMFOGPHQJWXXZY[ RMFOHPJVXWZY[Z[ RRMJ[ RRMK[',
      2138: ' 28F]MMGb RNMHb RMPLVLYN[P[RZTXVU RXMUXUZV[Y[[Y\\W RYMVXVZW[',
      2139: ' 24H\\NML[ ROMNSMXL[ RYMXQVU RZMYPXRVUTWQYOZL[ RKMOM',
      2140: ' 45IZTFRGQHQIRJUKXK RUKQLOMNONQPSSTVT RUKRLPMOOOQQSST RSTOUMVLXLZN\\S^T_TaRbPb RSTPUNVMXMZO\\S^',
      2141: ' 32I[RMONMQLTLWMYNZP[R[UZWWXTXQWOVNTMRM RRMPNNQMTMXNZ RR[TZVWWTWPVN',
      2142: ' 22G]PNL[ RPNM[ RVNV[ RVNW[ RIPKNNM[M RIPKONN[N',
      2143: ' 31H[LVMYNZP[R[UZWWXTXQWOVNTMRMONMQLTHb RR[TZVWWTWPVN RRMPNNQMTIb',
      2144: ' 35H][MQMNNLQKTKWLYMZO[Q[TZVWWTWQVOUNSM RQMONMQLTLXMZ RQ[SZUWVTVPUN RUN[N',
      2145: ' 16H\\SNP[ RSNQ[ RJPLNOMZM RJPLOONZN',
      2146: ' 31H\\IQJOLMOMPNPPNVNYP[ RNMONOPMVMYNZP[Q[TZVXXUYRYOXMWNXOYR RXUYO',
      2147: ' 37G]ONMOKQJTJWKYLZN[Q[TZWXYUZRZOXMVMTORSPXMb RJWLYNZQZTYWWYU RZOXNVNTPRSPYNb',
      2148: ' 23I[KMMMONPPU_VaWb RMMNNOPT_UaWbYb RZMYOWRM]K`Jb',
      2149: ' 34F]UFOb RVFNb RGQHOJMMMNNNPMUMXOZRZTYWVYS RLMMNMPLULXMZO[R[TZVXXUYS[M',
      2150: ' 44F]JQLOONNMLNJQITIWJZK[M[OZQWRT RIWJYKZMZOYQW RQTQWRZS[U[WZYWZTZQYNXMWNYOZQ RQWRYSZUZWYYW',
      2151: ' 39H]XMVTUXUZV[Y[[Y\\W RYMWTVXVZW[ RVTVQUNSMQMNNLQKTKWLYMZO[Q[SZUWVT RQMONMQLTLXMZ',
      2152: ' 36H[PFLSLVMYNZ RQFMS RMSNPPNRMTMVNWOXQXTWWUZR[P[NZMWMS RVNWPWTVWTZR[ RMFQF',
      2153: ' 25I[WPWQXQXPWNUMRMONMQLTLWMYNZP[R[UZWW RRMPNNQMTMXNZ',
      2154: ' 42H]ZFVTUXUZV[Y[[Y\\W R[FWTVXVZW[ RVTVQUNSMQMNNLQKTKWLYMZO[Q[SZUWVT RQMONMQLTLXMZ RWF[F',
      2155: ' 26I[MVQUTTWRXPWNUMRMONMQLTLWMYNZP[R[UZWX RRMPNNQMTMXNZ',
      2156: ' 35KZZGYHZI[H[GZFXFVGUHTJSMP[O_Na RXFVHUJTNRWQ[P^O`NaLbJbIaI`J_K`Ja ROMYM',
      2157: ' 43H\\YMU[T^RaObLbJaI`I_J^K_J` RXMT[S^QaOb RVTVQUNSMQMNNLQKTKWLYMZO[Q[SZUWVT RQMONMQLTLXMZ',
      2158: ' 31H]PFJ[ RQFK[ RMTOPQNSMUMWNXOXQVWVZW[ RUMWOWQUWUZV[Y[[Y\\W RMFQF',
      2159: ' 26LYUFTGUHVGUF RMQNOPMSMTNTQRWRZS[ RRMSNSQQWQZR[U[WYXW',
      2160: ' 32LYVFUGVHWGVF RNQOOQMTMUNUQR[Q^P`OaMbKbJaJ`K_L`Ka RSMTNTQQ[P^O`Mb',
      2161: ' 34H\\PFJ[ RQFK[ RXNWOXPYOYNXMWMUNQROSMS ROSQTSZT[ ROSPTRZS[U[WZYW RMFQF',
      2162: ' 18MYUFQTPXPZQ[T[VYWW RVFRTQXQZR[ RRFVF',
      2163: ' 52AbBQCOEMHMINIPHTF[ RGMHNHPGTE[ RHTJPLNNMPMRNSOSQP[ RPMRORQO[ RRTTPVNXMZM\\N]O]Q[W[Z\\[ RZM\\O\\QZWZZ[[^[`YaW',
      2164: ' 37F]GQHOJMMMNNNPMTK[ RLMMNMPLTJ[ RMTOPQNSMUMWNXOXQVWVZW[ RUMWOWQUWUZV[Y[[Y\\W',
      2165: ' 32I[RMONMQLTLWMYNZP[R[UZWWXTXQWOVNTMRM RRMPNNQMTMXNZ RR[TZVWWTWPVN',
      2166: ' 42G\\HQIOKMNMONOPNTJb RMMNNNPMTIb RNTOQQNSMUMWNXOYQYTXWVZS[Q[OZNWNT RWNXPXTWWUZS[ RFbMb',
      2167: ' 33H\\XMRb RYMSb RVTVQUNSMQMNNLQKTKWLYMZO[Q[SZUWVT RQMONMQLTLXMZ RObVb',
      2168: ' 26IZJQKOMMPMQNQPPTN[ ROMPNPPOTM[ RPTRPTNVMXMYNYOXPWOXN',
      2169: ' 28J[XOXPYPYOXNUMRMONNONQORVVWW RNPOQVUWVWYVZS[P[MZLYLXMXMY',
      2170: ' 18KYTFPTOXOZP[S[UYVW RUFQTPXPZQ[ RNMWM',
      2171: ' 37F]GQHOJMMMNNNQLWLYN[ RLMMNMQKWKYLZN[P[RZTXVT RXMVTUXUZV[Y[[Y\\W RYMWTVXVZW[',
      2172: ' 26H\\IQJOLMOMPNPQNWNYP[ RNMONOQMWMYNZP[Q[TZVXXUYQYMXMYO',
      2173: ' 41C`DQEOGMJMKNKQIWIYK[ RIMJNJQHWHYIZK[M[OZQXRV RTMRVRYSZU[W[YZ[X\\V]R]M\\M]O RUMSVSYU[',
      2174: ' 42H\\KQMNOMRMSOSR RQMRORRQVPXNZL[K[JZJYKXLYKZ RQVQYR[U[WZYW RYNXOYPZOZNYMXMVNTPSRRVRYS[',
      2175: ' 41G\\HQIOKMNMONOQMWMYO[ RMMNNNQLWLYMZO[Q[SZUXWT RZMV[U^SaPbMbKaJ`J_K^L_K` RYMU[T^RaPb',
      2176: ' 31H\\YMXOVQNWLYK[ RLQMOOMRMVO RMOONRNVOXO RLYNYRZUZWY RNYR[U[WYXW',
      2177: ' 43G^VGUHVIWHWGUFRFOGMILLL[ RRFPGNIMLM[ R\\G[H\\I]H]G\\FZFXGWIW[ RZFYGXIX[ RIM[M RI[P[ RT[[[',
      2178: ' 33G]WGVHWIXHWGUFRFOGMILLL[ RRFPGNIMLM[ RWMW[ RXMX[ RIMXM RI[P[ RT[[[',
      2179: ' 35G]VGUHVIWHWGUF RXFRFOGMILLL[ RRFPGNIMLM[ RWHW[ RXFX[ RIMWM RI[P[ RT[[[',
      2180: ' 54BcRGQHRISHRGPFMFJGHIGLG[ RMFKGIIHLH[ R]G\\H]I^H]G[FXFUGSIRLR[ RXFVGTISLS[ R]M][ R^M^[ RDM^M RD[K[ RO[V[ RZ[a[',
      2181: ' 56BcRGQHRISHRGPFMFJGHIGLG[ RMFKGIIHLH[ R\\G[H\\I]H]G[F R^FXFUGSIRLR[ RXFVGTISLS[ R]H][ R^F^[ RDM]M RD[K[ RO[V[ RZ[a[',
      2182: ' 12MXRMR[ RSMS[ ROMSM RO[V[',
      2184: ' 25IZWNUMRMONMPLSLVMYNZQ[T[VZ RRMPNNPMSMVNYOZQ[ RMTUT',
      2185: ' 43I\\TFQGOJNLMOLTLXMZO[Q[TZVWWUXRYMYIXGVFTF RTFRGPJOLNOMTMXNZO[ RQ[SZUWVUWRXMXIWGVF RNPWP',
      2186: ' 42G]UFOb RVFNb RQMMNKPJSJVKXMZP[S[WZYXZUZRYPWNTMQM RQMNNLPKSKVLXNZP[ RS[VZXXYUYRXPVNTM',
      2187: ' 27I[TMVNXPXOWNTMQMNNMOLQLSMUOWSZ RQMONNOMQMSNUSZT\\T^S_Q_',
      2190: ' 45G]LMKNJPJRKUOYP[ RJRKTOXP[P]O`MbLbKaJ_J\\KXMTOQRNTMVMYNZPZTYXWZU[T[SZSXTWUXTY RVMXNYPYTXXWZ',
      2191: ' 69E_YGXHYIZHYGWFTFQGOINKMNLRJ[I_Ha RTFRGPIOKNNLWK[J^I`HaFbDbCaC`D_E`Da R_G^H_I`H`G_F]F[GZHYJXMU[T_Sa R]F[HZJYNWWV[U^T`SaQbObNaN`O_P`Oa RIM^M',
      2192: ' 52F^[GZH[I\\H[GXFUFRGPIOKNNMRK[J_Ia RUFSGQIPKONMWL[K^J`IaGbEbDaD`E_F`Ea RYMWTVXVZW[Z[\\Y]W RZMXTWXWZX[ RJMZM',
      2193: ' 54F^YGXHYIZHZGXF R\\FUFRGPIOKNNMRK[J_Ia RUFSGQIPKONMWL[K^J`IaGbEbDaD`E_F`Ea R[FWTVXVZW[Z[\\Y]W R\\FXTWXWZX[ RJMYM',
      2194: ' 86@cTGSHTIUHTGRFOFLGJIIKHNGRE[D_Ca ROFMGKIJKINGWF[E^D`CaAb?b>a>`?_@`?a R`G_H`IaH`G]FZFWGUITKSNRRP[O_Na RZFXGVIUKTNRWQ[P^O`NaLbJbIaI`J_K`Ja R^M\\T[X[Z\\[_[aYbW R_M]T\\X\\Z][ RDM_M',
      2195: ' 88@cTGSHTIUHTGRFOFLGJIIKHNGRE[D_Ca ROFMGKIJKINGWF[E^D`CaAb?b>a>`?_@`?a R^G]H^I_H_G]F RaFZFWGUITKSNRRP[O_Na RZFXGVIUKTNRWQ[P^O`NaLbJbIaI`J_K`Ja R`F\\T[X[Z\\[_[aYbW RaF]T\\X\\Z][ RDM^M',
      2196: ' 20LYMQNOPMSMTNTQRWRZS[ RRMSNSQQWQZR[U[WYXW',
      2200: ' 40H\\QFNGLJKOKRLWNZQ[S[VZXWYRYOXJVGSFQF RQFOGNHMJLOLRMWNYOZQ[ RS[UZVYWWXRXOWJVHUGSF',
      2201: ' 11H\\NJPISFS[ RRGR[ RN[W[',
      2202: ' 45H\\LJMKLLKKKJLHMGPFTFWGXHYJYLXNUPPRNSLUKXK[ RTFVGWHXJXLWNTPPR RKYLXNXSZVZXYYX RNXS[W[XZYXYV',
      2203: ' 47H\\LJMKLLKKKJLHMGPFTFWGXIXLWNTOQO RTFVGWIWLVNTO RTOVPXRYTYWXYWZT[P[MZLYKWKVLUMVLW RWQXTXWWYVZT[',
      2204: ' 13H\\THT[ RUFU[ RUFJUZU RQ[X[',
      2205: ' 39H\\MFKP RKPMNPMSMVNXPYSYUXXVZS[P[MZLYKWKVLUMVLW RSMUNWPXSXUWXUZS[ RMFWF RMGRGWF',
      2206: ' 48H\\WIVJWKXJXIWGUFRFOGMILKKOKULXNZQ[S[VZXXYUYTXQVOSNRNOOMQLT RRFPGNIMKLOLUMXOZQ[ RS[UZWXXUXTWQUOSN',
      2207: ' 31H\\KFKL RKJLHNFPFUIWIXHYF RLHNGPGUI RYFYIXLTQSSRVR[ RXLSQRSQVQ[',
      2208: ' 63H\\PFMGLILLMNPOTOWNXLXIWGTFPF RPFNGMIMLNNPO RTOVNWLWIVGTF RPOMPLQKSKWLYMZP[T[WZXYYWYSXQWPTO RPONPMQLSLWMYNZP[ RT[VZWYXWXSWQVPTO',
      2209: ' 48H\\XMWPURRSQSNRLPKMKLLINGQFSFVGXIYLYRXVWXUZR[O[MZLXLWMVNWMX RQSORMPLMLLMIOGQF RSFUGWIXLXRWVVXTZR[',
      2210: '  6MWRYQZR[SZRY',
      2211: '  8MWR[QZRYSZS\\R^Q_',
      2212: ' 12MWRMQNROSNRM RRYQZR[SZRY',
      2213: ' 14MWRMQNROSNRM RR[QZRYSZS\\R^Q_',
      2214: ' 15MWRFQHRTSHRF RRHRN RRYQZR[SZRY',
      2215: ' 32I[MJNKMLLKLJMHNGPFSFVGWHXJXLWNVORQRT RSFUGVHWJWLVNTP RRYQZR[SZRY',
      2216: '  6NVRFQM RSFQM',
      2217: ' 12JZNFMM ROFMM RVFUM RWFUM',
      2218: ' 14KYQFOGNINKOMQNSNUMVKVIUGSFQF',
      2219: '  9JZRFRR RMIWO RWIMO',
      2220: '  3G][BIb',
      2221: ' 20KYVBTDRGPKOPOTPYR]T`Vb RTDRHQKPPPTQYR\\T`',
      2222: ' 20KYNBPDRGTKUPUTTYR]P`Nb RPDRHSKTPTTSYR\\P`',
      2223: ' 12KYOBOb RPBPb ROBVB RObVb',
      2224: ' 12KYTBTb RUBUb RNBUB RNbUb',
      2225: ' 40KYTBRCQDPFPHQJRKSMSOQQ RRCQEQGRISJTLTNSPORSTTVTXSZR[Q]Q_Ra RQSSUSWRYQZP\\P^Q`RaTb',
      2226: ' 40KYPBRCSDTFTHSJRKQMQOSQ RRCSESGRIQJPLPNQPURQTPVPXQZR[S]S_Ra RSSQUQWRYSZT\\T^S`RaPb',
      2227: '  4KYUBNRUb',
      2228: '  4KYOBVROb',
      2229: '  3NVRBRb',
      2230: '  6KYOBOb RUBUb',
      2231: '  3E_IR[R',
      2232: '  6E_RIR[ RIR[R',
      2233: '  9F^RJR[ RJRZR RJ[Z[',
      2234: '  9F^RJR[ RJJZJ RJRZR',
      2235: '  6G]KKYY RYKKY',
      2236: '  6MWRQQRRSSRRQ',
      2237: ' 15E_RIQJRKSJRI RIR[R RRYQZR[SZRY',
      2238: '  6E_IO[O RIU[U',
      2239: '  9E_YIK[ RIO[O RIU[U',
      2240: '  9E_IM[M RIR[R RIW[W',
      2241: '  4F^ZIJRZ[',
      2242: '  4F^JIZRJ[',
      2243: ' 10F^ZFJMZT RJVZV RJ[Z[',
      2244: ' 10F^JFZMJT RJVZV RJ[Z[',
      2245: ' 21F_[WYWWVUTRPQOONMNKOJQJSKUMVOVQURTUPWNYM[M',
      2246: ' 24F^IUISJPLONOPPTSVTXTZS[Q RISJQLPNPPQTTVUXUZT[Q[O',
      2247: '  8G]JTROZT RJTRPZT',
      2248: '  7LXTFOL RTFUGOL',
      2249: '  7LXPFUL RPFOGUL',
      2250: ' 18H\\KFLHNJQKSKVJXHYF RKFLINKQLSLVKXIYF',
      2251: '  8MWRHQGRFSGSIRKQL',
      2252: '  8MWSFRGQIQKRLSKRJ',
      2253: '  8MWRHSGRFQGQIRKSL',
      2254: '  8MWQFRGSISKRLQKRJ',
      2255: ' 10E[HMLMRY RKMR[ R[BR[',
      2256: ' 13F^ZJSJOKMLKNJQJSKVMXOYSZZZ',
      2257: ' 13F^JJJQKULWNYQZSZVYXWYUZQZJ',
      2258: ' 13F^JJQJUKWLYNZQZSYVWXUYQZJZ',
      2259: ' 13F^JZJSKOLMNKQJSJVKXMYOZSZZ',
      2260: ' 16F^ZJSJOKMLKNJQJSKVMXOYSZZZ RJRVR',
      2261: ' 11E_XP[RXT RUMZRUW RIRZR',
      2262: ' 11JZPLRITL RMORJWO RRJR[',
      2263: ' 11E_LPIRLT ROMJROW RJR[R',
      2264: ' 11JZPXR[TX RMURZWU RRIRZ',
      2265: ' 44I\\XRWOVNTMRMONMQLTLWMYNZP[R[UZWXXUYPYKXHWGUFRFPGOHOIPIPH RRMPNNQMTMXNZ RR[TZVXWUXPXKWHUF',
      2266: ' 15H\\JFR[ RKFRY RZFR[ RJFZF RKGYG',
      2267: ' 10AbDMIMRY RHNR[ Rb:R[',
      2268: ' 32F^[CZD[E\\D\\C[BYBWCUETGSJRNPZO^N` RVDUFTJRVQZP]O_MaKbIbHaH`I_J`Ia',
      2269: ' 50F^[CZD[E\\D\\C[BYBWCUETGSJRNPZO^N` RVDUFTJRVQZP]O_MaKbIbHaH`I_J`Ia RQKNLLNKQKSLVNXQYSYVXXVYSYQXNVLSKQK',
      2270: ' 26F_\\S[UYVWVUUTTQPPONNLNJOIQISJULVNVPUQTTPUOWNYN[O\\Q\\S',
      2271: ' 32F^[FI[ RNFPHPJOLMMKMIKIIJGLFNFPGSHVHYG[F RWTUUTWTYV[X[ZZ[X[VYTWT',
      2272: ' 49F_[NZO[P\\O\\N[MZMYNXPVUTXRZP[M[JZIXIUJSPORMSKSIRGPFNGMIMKNNPQUXWZZ[[[\\Z\\Y RM[KZJXJUKSMQ RMKNMVXXZZ[',
      2273: ' 56E`WNVLTKQKOLNMMPMSNUPVSVUUVS RQKOMNPNSOUPV RWKVSVUXVZV\\T]Q]O\\L[JYHWGTFQFNGLHJJILHOHRIUJWLYNZQ[T[WZYYZX RXKWSWUXV',
      2274: ' 42H\\PBP_ RTBT_ RXIWJXKYJYIWGTFPFMGKIKKLMMNOOUQWRYT RKKMMONUPWQXRYTYXWZT[P[MZKXKWLVMWLX',
      2275: ' 12H]SFLb RYFRb RLQZQ RKWYW',
      2276: ' 46JZUITJUKVJVIUGSFQFOGNINKOMQOVR ROMTPVRWTWVVXTZ RPNNPMRMTNVPXU[ RNVSYU[V]V_UaSbQbOaN_N^O]P^O_',
      2277: ' 30JZRFQHRJSHRF RRFRb RRQQTRbSTRQ RLMNNPMNLLM RLMXM RTMVNXMVLTM',
      2278: ' 56JZRFQHRJSHRF RRFRT RRPQRSVRXQVSRRP RRTRb RR^Q`RbS`R^ RLMNNPMNLLM RLMXM RTMVNXMVLTM RL[N\\P[NZL[ RL[X[ RT[V\\X[VZT[',
      2279: ' 12I\\XFX[ RKFXF RPPXP RK[X[',
      2281: ' 38E`QFNGKIILHOHRIUKXNZQ[T[WZZX\\U]R]O\\LZIWGTFQF RROQPQQRRSRTQTPSORO RRPRQSQSPRP',
      2282: ' 45J[PFNGOIQJ RPFOGOI RUFWGVITJ RUFVGVI RQJOKNLMNMQNSOTQUTUVTWSXQXNWLVKTJQJ RRUR[ RSUS[ RNXWX',
      2283: ' 27I\\RFOGMILLLMMPORRSSSVRXPYMYLXIVGSFRF RRSR[ RSSS[ RNWWW',
      2284: ' 28D`PFMGJIHLGOGSHVJYM[P\\T\\W[ZY\\V]S]O\\LZIWGTFPF RRFR\\ RGQ]Q',
      2285: ' 31G`PMMNKPJSJTKWMYPZQZTYVWWTWSVPTNQMPM R]GWG[HUN R]G]M\\IVO R\\HVN',
      2286: ' 28F\\IIJGLFOFQGRIRLQOPQNSKU ROFPGQIQMPPNS RVFT[ RWFS[ RKUYU',
      2287: ' 30I\\MFMU RNFMQ RMQNOONQMTMWNXPXRWTUV RTMVNWPWRTXTZU[W[YY RKFNF',
      2288: ' 44I\\RNOOMQLTLUMXOZR[S[VZXXYUYTXQVOSNRN RRHNJRFRN RSHWJSFSN RRSQTQURVSVTUTTSSRS RRTRUSUSTRT',
      2289: ' 37G^QHRFR[ RTHSFS[ RJHKFKMLPNRQSRS RMHLFLNMQ R[HZFZMYPWRTSSS RXHYFYNXQ RNWWW',
      2290: ' 31G]LFL[ RMFM[ RIFUFXGYHZJZMYOXPUQMQ RUFWGXHYJYMXOWPUQ RI[Y[YVX[',
      2291: ' 24H[YGUGQHNJLMKPKSLVNYQ[U\\Y\\ RYGVHSJQMPPPSQVSYV[Y\\',
      2292: ' 27F_OQMQKRJSIUIWJYKZM[O[QZRYSWSURSQROQ RSHPQ RZJRR R\\QST',
      2293: ' 12H\\OKUY RUKOY RKOYU RYOKU',
      2294: ' 48F^NVLUKUIVHXHYI[K\\L\\N[OYOXNVKRJOJMKJMHPGTGWHYJZMZOYRVVUXUYV[X\\Y\\[[\\Y\\X[VYUXUVV RJMKKMIPHTHWIYKZM',
      2295: ' 48F^NMLNKNIMHKHJIHKGLGNHOJOKNMKQJTJVKYM[P\\T\\W[YYZVZTYQVMUKUJVHXGYG[H\\J\\K[MYNXNVM RJVKXMZP[T[WZYXZV',
      2301: ' 40F_JMILIJJHLGNGPHQIRKSP RIJKHMHOIPJQLRPR[ R[M\\L\\J[HYGWGUHTISKRP R\\JZHXHVIUJTLSPS[',
      2302: ' 51F^IGJKKMMOPPTPWOYMZK[G RIGJJKLMNPOTOWNYLZJ[G RPONPMQLSLVMXOZQ[S[UZWXXVXSWQVPTO RPPNQMSMVNY RVYWVWSVQTP',
      2303: ' 30F^MJMV RNKNU RVKVU RWJWV RIGKIMJPKTKWJYI[G RIYKWMVPUTUWVYW[Y',
      2304: ' 48F^[ILIJJILINJPLQNQPPQNQLPJ[J RIMJOKPMQ RQMPKOJMI RIXXXZW[U[SZQXPVPTQSSSUTWIW R[TZRYQWP RSTTVUWWX',
      2305: ' 48F]OUMTLTJUIWIXJZL[M[OZPXPWOUJPINIKJILHOGSGWHYJZLZOYRVUUWUYV[X[YZZX RMSKPJNJKKILH RSGVHXJYLYOXRVU',
      2306: ' 48G_HKKHMKMV RJILLLV RMKPHRKRU ROIQLQU RRKUHWKW[ RTIVLV[ RWKZH[J\\M\\P[SZUXWUYP[ RYIZJ[M[PZSYUWWTYP[',
      2307: ' 41F^ISMSLRKOKMLJNHQGSGVHXJYMYOXRWS[S RITOTMRLOLMMJOHQG RSGUHWJXMXOWRUT[T RKXYX RKYYY',
      2308: ' 30F_GLJIMLMX RIJLMLX RMLPISLSX ROJRMRX RSLVIYLYW[Y RUJXMXXZZ]W',
      2309: ' 33G]ZIJY RZIWJQJ RXKUKQJ RZIYLYR RXKXNYR RQRJR RPSMSJR RQRQY RPSPVQY',
      2310: ' 33F^HOJKOU RJMOWRPWPZO[M[KZIXHWHUITKTMUPVRWUWXUZ RWHVIUKUMWQXTXWWYUZ',
      2311: ' 36F^IOLLPN RKMOORLUN RQMTOWLYN RVMXO[L RIULRPT RKSOURRUT RQSTUWRYT RVSXU[R',
      2312: ' 48F^JHNJPLQOQRPUNWJY RJHMIOJQLRO RRRQUOWMXJY RZHWIUJSLRO RRRSUUWWXZY RZHVJTLSOSRTUVWZY RIP[P RIQ[Q',
      2317: ' 12NVQQQSSSSQQQ RQQSS RSQQS',
      2318: ' 18JZMPQRTTVVWYW[V]U^ RMQST RMRPSTUVWWY',
      2319: ' 18JZWKVMTOPQMR RSPMS RUFVGWIWKVNTPQRMT',
      2320: ' 36H\\SMONLPKRKTLVNWQWUVXTYRYPXNVMSM RXNSM RVMQNLP RONKR RLVQW RNWSVXT RUVYR',
      2321: ' 36H\\SMONLPKRKTLVNWQWUVXTYRYPXNVMSM RXNSM RVMQNLP RONKR RLVQW RNWSVXT RUVYR',
      2322: ' 34J[SMPNNPMRMTNVPWRWUVWTXRXPWNUMSM ROPUM RNRVN RMTWO RNUXP ROVWR RPWVT',
      2323: ' 18JZOGO^ RUFU] RMNWL RMOWM RMWWU RMXWV',
      2324: ' 18JZNFNX RVLV^ RNNVL RNOVM RNWVU RNXVV',
      2325: ' 25JZNBNW RNNQLTLVMWOWQVSSUQVNW RNNQMTMVN RUMVOVQUSSU',
      2326: ' 18E_HIHL R\\I\\L RHI\\I RHJ\\J RHK\\K RHL\\L',
      2327: ' 18JZMNMQ RWNWQ RMNWN RMOWO RMPWP RMQWQ',
      2328: ' 49JZMLWX RMLONQOTOVNWMWKUKUMTO RONTO RQOWM RVKVN RULWL RWXUVSUPUNVMWMYOYOWPU RUVPU RSUMW RNVNY RMXOX',
      2329: ' 26JZPOOMOKMKMMNNPOSOUNWL RNKNN RMLOL RMMSO RPOUN RWLWY',
      2330: ' 86A^GfHfIeIdHcGcFdFfGhIiKiNhPfQdR`RUQ;Q4R/S-U,V,X-Y/Y3X6W8U;P?JCHEFHEJDNDREVGYJ[N\\R\\V[XZZW[T[PZMYKWITHPHMIKKJNJRKUMW RGdGeHeHdGd RU;Q?LCIFGIFKENERFVGXJ[ RR\\U[WZYWZTZPYMXKVITH',
      2331: '103EfNSOUQVSVUUVSVQUOSNQNOONPMSMVNYP[S\\V\\Y[[Y\\W]T]P\\MZJXIUHRHOIMJKLIOHSHXI]KaMcPeTfYf]e`cba RKLJNIRIXJ\\L`NbQdUeYe]d_cba RPOTO ROPUP RNQVQ RNRVR RNSVS ROTUT RPUTU RaLaNcNcLaL RbLbN RaMcM RaVaXcXcVaV RbVbX RaWcW',
      2332: ' 30D`H@Hd RM@Md RW@Wd R\\@\\d RMMWK RMNWL RMOWM RMWWU RMXWV RMYWW',
      2367: ' 12NVQQQSSSSQQQ RQQSS RSQQS',
      2368: ' 18JZMPQRTTVVWYW[V]U^ RMQST RMRPSTUVWWY',
      2369: ' 18JZWKVMTOPQMR RSPMS RUFVGWIWKVNTPQRMT',
      2370: ' 32H\\PMMNLOKQKSLUMVPWTWWVXUYSYQXOWNTMPM RMNLPLSMUNVPW RWVXTXQWOVNTM',
      2371: ' 36H\\SMONLPKRKTLVNWQWUVXTYRYPXNVMSM RXNSM RVMQNLP RONKR RLVQW RNWSVXT RUVYR',
      2372: ' 34J[SMPNNPMRMTNVPWRWUVWTXRXPWNUMSM ROPUM RNRVN RMTWO RNUXP ROVWR RPWVT',
      2373: ' 18JZOGO^ RUFU] RMNWL RMOWM RMWWU RMXWV',
      2374: ' 18JZNFNX RVLV^ RNNVL RNOVM RNWVU RNXVV',
      2375: ' 25JZNBNW RNNQLTLVMWOWQVSSUQVNW RNNQMTMVN RUMVOVQUSSU',
      2376: ' 18E_HIHL R\\I\\L RHI\\I RHJ\\J RHK\\K RHL\\L',
      2377: ' 18JZMNMQ RWNWQ RMNWN RMOWO RMPWP RMQWQ',
      2378: ' 36JZQCVMRTRU RULQS RTITKPRRUUY RW\\UYSXQXOYN[N]O_Ra RW\\UZSYOYO]P_Ra RSXPZN]',
      2379: ' 26JZPOOMOKMKMMNNPOSOUNWL RNKNN RMLOL RMMSO RPOUN RWLSY',
      2380: ' 86A^GfHfIeIdHcGcFdFfGhIiKiNhPfQdR`RUQ;Q4R/S-U,V,X-Y/Y3X6W8U;P?JCHEFHEJDNDREVGYJ[N\\R\\V[XZZW[T[PZMYKWITHPHMIKKJNJRKUMW RGdGeHeHdGd RU;Q?LCIFGIFKENERFVGXJ[ RR\\U[WZYWZTZPYMXKVITH',
      2381: ' 89IjNQOOQNSNUOVQVSUUSVQVOUNTMQMNNKPISHWH[I^K`NaRaW`[_]]`ZcVfQiMk RWHZI]K_N`R`W_[^]\\`YcTgQi RPOTO ROPUP RNQVQ RNRVR RNSVS ROTUT RPUTU ReLeNgNgLeL RfLfN ReMgM ReVeXgXgVeV RfVfX ReWgW',
      2382: ' 85D`H>Hf RI>If RM>Mf RQBSBSDQDQAR?T>W>Y?[A\\D\\I[LYNWOUOSNRLQNOQNROSQVRXSVUUWUYV[X\\[\\`[cYeWfTfReQcQ`S`SbQb RRBRD RQCSC RY?ZA[D[IZLYN RRLRNPQNRPSRVRX RYVZX[[[`ZcYe RR`Rb RQaSa',
      2401: ' 21AcHBHb RIBIb R[B[b R\\B\\b RDB`B RDbMb RWb`b',
      2402: ' 23BaGBQPFb RFBPP REBPQ REB\\B^I[B RGa\\a RFb\\b^[[b',
      2403: ' 28I[X+U1R8P=OANFMNMVN^OcPgRlUsXy RU1S6Q<P@OFNNNVO^PdQhSnUs',
      2404: ' 28I[L+O1R8T=UAVFWNWVV^UcTgRlOsLy RO1Q6S<T@UFVNVVU^TdShQnOs',
      2405: ' 14I[M+MRMy RN+NRNy RM+X+ RMyXy',
      2406: ' 14I[V+VRVy RW+WRWy RL+W+ RLyWy',
      2407: ' 48I[V+S-Q/P1O4O8P<TDUGUJTMRP RS-Q0P4P8Q;UCVGVJUMRPNRRTUWVZV]UaQiPlPpQtSw RRTTWUZU]T`PhOlOpPsQuSwVy',
      2408: ' 48I[N+Q-S/T1U4U8T<PDOGOJPMRP RQ-S0T4T8S;OCNGNJOMRPVRRTOWNZN]OaSiTlTpStQw RRTPWOZO]P`ThUlUpTsSuQwNy',
      2409: ' 32I[V.S1Q4O8N=NCOIPMSXT\\UbUgTlSoQs RS1Q5P8O=OBPHQLTWU[VaVgUlSpQsNv',
      2410: ' 32I[N.Q1S4U8V=VCUITMQXP\\ObOgPlQoSs RQ1S5T8U=UBTHSLPWO[NaNgOlQpSsVv',
      2411: ' 147Z:RARRo R@RQo R?RRr RZ"VJRr',
      2412: ' 57Ca].\\.[/[0\\1]1^0^.],[+Y+W,U.T0S3R:QJQjPsOv R\\/\\0]0]/\\/ RR:Rj RU.T1S:SZRjQqPtOvMxKyIyGxFvFtGsHsItIuHvGv RGtGuHuHtGt',
      2501: ' 20H\\RFJ[ RRIK[J[ RRIY[Z[ RRFZ[ RMUWU RLVXV',
      2502: ' 44H\\LFL[ RMGMZ RLFTFWGXHYJYMXOWPTQ RMGTGWHXJXMWOTP RMPTPWQXRYTYWXYWZT[L[ RMQTQWRXTXWWYTZMZ',
      2503: ' 38H]ZKYIWGUFQFOGMILKKNKSLVMXOZQ[U[WZYXZV RZKYKXIWHUGQGOHMKLNLSMVOYQZUZWYXXYVZV',
      2504: ' 32H]LFL[ RMGMZ RLFSFVGXIYKZNZSYVXXVZS[L[ RMGSGVHWIXKYNYSXVWXVYSZMZ',
      2505: ' 27I\\MFM[ RNGNZ RMFYF RNGYGYF RNPTPTQ RNQTQ RNZYZY[ RM[Y[',
      2506: ' 21I[MFM[ RNGN[M[ RMFYF RNGYGYF RNPTPTQ RNQTQ',
      2507: ' 44H]ZKYIWGUFQFOGMILKKNKSLVMXOZQ[U[WZYXZVZRUR RZKYKXIWHUGQGOHNIMKLNLSMVNXOYQZUZWYXXYVYSUSUR',
      2508: ' 22G]KFK[ RKFLFL[K[ RYFXFX[Y[ RYFY[ RLPXP RLQXQ',
      2509: '  8NWRFR[S[ RRFSFS[',
      2510: ' 20J[VFVVUYSZQZOYNVMV RVFWFWVVYUZS[Q[OZNYMV',
      2511: ' 22H]LFL[M[ RLFMFM[ RZFYFMR RZFMS RPOY[Z[ RQOZ[',
      2512: ' 14IZMFM[ RMFNFNZ RNZYZY[ RM[Y[',
      2513: ' 26F^JFJ[ RKKK[J[ RKKR[ RJFRX RZFRX RYKR[ RYKY[Z[ RZFZ[',
      2514: ' 20G]KFK[ RLIL[K[ RLIY[ RKFXX RXFXX RXFYFY[',
      2515: ' 40G]PFNGLIKKJNJSKVLXNZP[T[VZXXYVZSZNYKXIVGTFPF RQGNHLKKNKSLVNYQZSZVYXVYSYNXKVHSGQG',
      2516: ' 27H\\LFL[ RMGM[L[ RLFUFWGXHYJYMXOWPUQMQ RMGUGWHXJXMWOUPMP',
      2517: ' 48G]PFNGLIKKJNJSKVLXNZP[T[VZXXYVZSZNYKXIVGTFPF RQGNHLKKNKSLVNYQZSZVYXVYSYNXKVHSGQG RSXX]Y] RSXTXY]',
      2518: ' 34H\\LFL[ RMGM[L[ RLFTFWGXHYJYMXOWPTQMQ RMGTGWHXJXMWOTPMP RRQX[Y[ RSQY[',
      2519: ' 43H\\YIWGTFPFMGKIKKLMMNOOTQVRWSXUXXWYTZPZNYMXKX RYIWIVHTGPGMHLILKMMONTPVQXSYUYXWZT[P[MZKX',
      2520: ' 15J[RGR[ RSGS[R[ RLFYFYG RLFLGYG',
      2521: ' 24G]KFKULXNZQ[S[VZXXYUYF RKFLFLUMXNYQZSZVYWXXUXFYF',
      2522: ' 14H\\JFR[ RJFKFRX RZFYFRX RZFR[',
      2523: ' 26E_GFM[ RGFHFMX RRFMX RRIM[ RRIW[ RRFWX R]F\\FWX R]FW[',
      2524: ' 16H\\KFX[Y[ RKFLFY[ RYFXFK[ RYFL[K[',
      2525: ' 17I\\KFRPR[S[ RKFLFSP RZFYFRP RZFSPS[',
      2526: ' 20H\\XFK[ RYFL[ RKFYF RKFKGXG RLZYZY[ RK[Y[',
      2551: ' 38E\\XFVHTKQPOSLWIZG[E[DZDXEWFXEY RXFWJUTT[ RXFU[ RT[TYSVRTPRNQLQKRKTLWOZR[V[XZ',
      2552: ' 70F^UGTHSJQOOUNWLZJ[ RTHSKQSPVOXMZJ[H[GZGXHWIXHY ROLNNMOKOJNJLKJMHOGRFXFZG[I[KZMXNTORO RXFYGZIZKYMXN RTOWPXQYSYVXYWZU[S[RZRXSU RTOVPWQXSXVWYU[',
      2553: ' 41H]KHJJJLKNNOQOUNWMYKZIZGYFWFTGQJOMMQLULXMZP[R[UZWXXVXTWRURSSRU RWFUGRJPMNQMUMXNZP[',
      2554: ' 43F]UGTHSJQOOUNWLZJ[ RTHSKQSPVOXMZJ[H[GZGXHWJWLXNZP[S[UZWXYTZOZLYIWGUFPFMGKIJKJMKNMNNMOK',
      2555: ' 49I\\WIVJVLWMYMZKZIYGWFTFRGQHPJPLQNSO RTFRHQJQMSO RSOQONPLRKTKWLYMZO[R[UZWXXVXTWRURSSRU RQOOPMRLTLXMZ',
      2556: ' 46G\\WHVJTORUQWOZM[ RQLPNNOLOKMKKLINGQF[FXGWHVKTSSVRXPZM[K[IZHYHXIWJXIY RSFWGXG ROSPRRQVQXPZMXT',
      2557: ' 53G]JIIKIMJOLPOPROTNWKXHXGWFVFTGRIQKPNPQQSSTUTWSYQZO RWFUGSIRKQNQRST RZOYSWWUYSZO[L[JZIXIWJVKWJX RYSWVUXRZO[',
      2558: ' 55F^LLKKKILGOFRFOQMWLYKZI[G[FZFXGWHXGY RRFOONRLWKYI[ RJTKSMRVOXN[L]J^H^G]F\\FZGXJWLURTVTYV[W[YZ[X R\\FZHXLVRUVUYV[',
      2559: ' 33IYWHUKSPQUPWNZL[ RYLWNTOQOONNLNJOHQGUFYFWHVJTPRVQXOZL[J[IZIXJWKXJY',
      2560: ' 34IZYFWHUKSPPYN] RYMWOTPQPOONMNKOIQGUFYFWIVKSTQXPZN]M^K_J^J\\KZMXOWRVVU',
      2561: ' 59F^LLKKKIMGPFRFOQMWLYKZI[G[FZFXGWHXGY RRFOONRLWKYI[ RZGWKUMSNPO R]G\\H]I^H^G]F\\FZGWLVMTNPO RPOSPTRUYV[ RPORPSRTYV[W[YZ[X',
      2562: ' 40I[MILKLMMOOPRPUOWNZK[H[GZFYFWGVHTKPUOWMZK[ RVHTLRSQVPXNZK[I[HZHXIWKWMXPZR[U[WZYX',
      2563: ' 49D`RFNOKUIXGZE[C[BZBXCWDXCY RRFPMOQNVNZP[ RRFQJPOOVOZP[ R[FWORXP[ R[FYMXQWVWZY[Z[\\Z^X R[FZJYOXVXZY[',
      2564: ' 38G^RFQJOPMULWJZH[F[EZEXFWGXFY RRFRKSVT[ RRFSKTVT[ R`G_H`IaHaG`F^F\\GZJYLWQUWT[',
      2565: ' 34H]SFQGOIMLLNKRKVLYMZO[Q[TZVXXUYSZOZKYHXGWGUHSJQNPSPV RQGOJMNLRLVMYO[',
      2566: ' 53F]UGTHSJQOOUNWLZJ[ RTHSKQSPVOXMZJ[H[GZGXHWIXHY ROLNNMOKOJNJLKJMHOGRFVFYGZH[J[MZOYPVQTQRP RVFXGYHZJZMYOXPVQ',
      2567: ' 43H]UJULTNSOQPOPNNNLOIQGTFWFYGZIZMYPWSSWPYNZK[I[HZHXIWKWMXPZS[V[XZZX RWFXGYIYMXPVSSVOYK[',
      2568: ' 65F^UGTHSJQOOUNWLZJ[ RTHSKQSPVOXMZJ[H[GZGXHWIXHY ROLNNMOKOJNJLKJMHOGRFWFZG[I[KZMYNVORO RWFYGZIZKYMXNVO RROUPVRWYX[ RROTPURVYX[Y[[Z]X',
      2569: ' 36H\\NIMKMMNOPPSPVOXN[K\\H\\G[FZFXGWHVJUMSTRWPZN[ RVJUNTUSXQZN[K[IZHXHWIVJWIX',
      2570: ' 38I[YHXJVOTUSWQZO[ RSLRNPONOMMMKNIPGSF\\FZGYHXKVSUVTXRZO[M[KZJYJXKWLXKY RUFYGZG',
      2571: ' 39G]HJJGLFMFOHOKNNKVKYL[ RMFNHNKKSJVJYL[N[PZSWUTVR RZFVRUVUYW[X[ZZ\\X R[FWRVVVYW[',
      2572: ' 36G\\HJJGLFMFOHOKNOLVLYM[ RMFNHNKLRKVKYM[N[QZTWVTXPYMZIZGYFXFWGVIVLWNYP[Q]Q',
      2573: ' 41F]ILHLGKGIHGJFNFMHLLKUJ[ RLLLUK[ RVFTHRLOUMYK[ RVFUHTLSUR[ RTLTUS[ R`F^G\\IZLWUUYS[',
      2574: ' 52H\\PKOLMLLKLIMGOFQFSGTITLSPQUOXMZJ[H[GZGXHWIXHY RQFRGSISLRPPUNXLZJ[ R]G\\H]I^H^G]F[FYGWIULSPRURXSZT[U[WZYX',
      2575: ' 42G]JJLGNFOFQGQIOOORPT ROFPGPINONRPTRTUSWQYNZL R\\FZLWTUX R]F[LYQWUUXSZP[L[JZIXIWJVKWJX',
      2576: ' 44G\\ZHYJWOVRUTSWQYOZL[ RSLRNPONOMMMKNIPGSF]F[GZHYKXOVUTXQZL[H[GZGXHWJWLXOZQ[T[WZYX RVFZG[G',
      2601: ' 36H\\WMW[X[ RWMXMX[ RWPUNSMPMNNLPKSKULXNZP[S[UZWX RWPSNPNNOMPLSLUMXNYPZSZWX',
      2602: ' 36H\\LFL[M[ RLFMFM[ RMPONQMTMVNXPYSYUXXVZT[Q[OZMX RMPQNTNVOWPXSXUWXVYTZQZMX',
      2603: ' 32I[XPVNTMQMONMPLSLUMXOZQ[T[VZXX RXPWQVOTNQNOONPMSMUNXOYQZTZVYWWXX',
      2604: ' 36H\\WFW[X[ RWFXFX[ RWPUNSMPMNNLPKSKULXNZP[S[UZWX RWPSNPNNOMPLSLUMXNYPZSZWX',
      2605: ' 36I[MTXTXQWOVNTMQMONMPLSLUMXOZQ[T[VZXX RMSWSWQVOTNQNOONPMSMUNXOYQZTZVYWWXX',
      2606: ' 24LZWFUFSGRJR[S[ RWFWGUGSH RTGSJS[ ROMVMVN ROMONVN',
      2607: ' 48H\\XMWMW\\V_U`SaQaO`N_L_ RXMX\\W_UaSbPbNaL_ RWPUNSMPMNNLPKSKULXNZP[S[UZWX RWPSNPNNOMPLSLUMXNYPZSZWX',
      2608: ' 25H\\LFL[M[ RLFMFM[ RMQPNRMUMWNXQX[ RMQPORNTNVOWQW[X[',
      2609: ' 24NWRFQGQHRISITHTGSFRF RRGRHSHSGRG RRMR[S[ RRMSMS[',
      2610: ' 24NWRFQGQHRISITHTGSFRF RRGRHSHSGRG RRMRbSb RRMSMSb',
      2611: ' 22H[LFL[M[ RLFMFM[ RXMWMMW RXMMX RPTV[X[ RQSX[',
      2612: '  8NWRFR[S[ RRFSFS[',
      2613: ' 42CbGMG[H[ RGMHMH[ RHQKNMMPMRNSQS[ RHQKOMNONQORQR[S[ RSQVNXM[M]N^Q^[ RSQVOXNZN\\O]Q][^[',
      2614: ' 25H\\LML[M[ RLMMMM[ RMQPNRMUMWNXQX[ RMQPORNTNVOWQW[X[',
      2615: ' 36I\\QMONMPLSLUMXOZQ[T[VZXXYUYSXPVNTMQM RQNOONPMSMUNXOYQZTZVYWXXUXSWPVOTNQN',
      2616: ' 36H\\LMLbMb RLMMMMb RMPONQMTMVNXPYSYUXXVZT[Q[OZMX RMPQNTNVOWPXSXUWXVYTZQZMX',
      2617: ' 36H\\WMWbXb RWMXMXb RWPUNSMPMNNLPKSKULXNZP[S[UZWX RWPSNPNNOMPLSLUMXNYPZSZWX',
      2618: ' 21KYOMO[P[ ROMPMP[ RPSQPSNUMXM RPSQQSOUNXNXM',
      2619: ' 50J[XPWNTMQMNNMPNRPSUUWV RVUWWWXVZ RWYTZQZNY ROZNXMX RXPWPVN RWOTNQNNO RONNPOR RNQPRUTWUXWXXWZT[Q[NZMX',
      2620: ' 16MXRFR[S[ RRFSFS[ ROMVMVN ROMONVN',
      2621: ' 25H\\LMLWMZO[R[TZWW RLMMMMWNYPZRZTYWW RWMW[X[ RWMXMX[',
      2622: ' 14JZLMR[ RLMMMRY RXMWMRY RXMR[',
      2623: ' 26F^IMN[ RIMJMNX RRMNX RRPN[ RRPV[ RRMVX R[MZMVX R[MV[',
      2624: ' 16I[LMW[X[ RLMMMX[ RXMWML[ RXMM[L[',
      2625: ' 17JZLMR[ RLMMMRY RXMWMRYNb RXMR[ObNb',
      2626: ' 20I[VNL[ RXMNZ RLMXM RLMLNVN RNZXZX[ RL[X[',
      2651: ' 33K[UUTSRRPRNSMTLVLXMZO[Q[SZTX RPRNTMVMYO[ RVRTXTZV[XZYY[V RWRUXUZV[',
      2652: ' 23LZLVNSPO RSFMXMZO[P[RZTXUUURVVWWXWZV RTFNXNZO[',
      2653: ' 22LXTSSTTTTSSRQROSNTMVMXNZP[S[VYXV RQROTNVNYP[',
      2654: ' 33K[UUTSRRPRNSMTLVLXMZO[Q[SZTX RPRNTMVMYO[ RZFTXTZV[XZYY[V R[FUXUZV[',
      2655: ' 23LXOYQXRWSUSSRRQROSNTMVMXNZP[S[VYXV RQROTNVNYP[',
      2656: ' 27OXRRUOWLXIXGWFUGTIKdKfLgNfOcPZQ[S[UZVYXV RTISNRRO[M`Kd',
      2657: ' 38K[UUTSRRPRNSMTLVLXMZO[Q[SZTX RPRNTMVMYO[ RVRPd RWRT[R`PdOfMgLfLdMaO_R]V[YY[V',
      2658: ' 30L[LVNSPO RSFL[ RTFM[ ROUQSSRTRVSVUUXUZV[ RTRUSUUTXTZV[XZYY[V',
      2659: ' 19NVSLRMSNTMSL RQROXOZQ[SZTYVV RRRPXPZQ[',
      2660: ' 24NVSLRMSNTMSL RQRKd RRRO[M`KdJfHgGfGdHaJ_M]Q[TYVV',
      2661: ' 31LZLVNSPO RSFL[ RTFM[ RURUSVSURTRRTOU ROURVSZT[ ROUQVRZT[U[XYZV',
      2662: ' 17NVNVPSRO RUFOXOZQ[SZTYVV RVFPXPZQ[',
      2663: ' 45E^EVGSIRKSKUI[ RIRJSJUH[ RKUMSORPRRSRUP[ RPRQSQUO[ RRUTSVRWRYSYUXXXZY[ RWRXSXUWXWZY[[Z\\Y^V',
      2664: ' 32I[IVKSMROSOUM[ RMRNSNUL[ ROUQSSRTRVSVUUXUZV[ RTRUSUUTXTZV[XZYY[V',
      2665: ' 29KYRRPRNSMTLVLXMZO[Q[SZTYUWUUTSRRQSQURWTXVXXWYV RPRNTMVMYO[',
      2666: ' 30L[LVNSPO RQLHg RRLIg ROUQSSRTRVSVUUXUZV[ RTRUSUUTXTZV[XZYY[V',
      2667: ' 35K[UUTSRRPRNSMTLVLXMZO[Q[SZ RPRNTMVMYO[ RVRPdPfQgSfTcT[V[YY[V RWRT[R`Pd',
      2668: ' 24LZLVNSPRRSRUP[ RPRQSQUO[ RRUTSVRWRVU RVRVUWWXWZV',
      2669: ' 22NZNVPSQQQSTUUWUYTZR[ RQSSUTWTYR[ RNZP[U[XYZV',
      2670: ' 20NVNVPSRO RUFOXOZQ[SZTYVV RVFPXPZQ[ RPNVN',
      2671: ' 27K[NRLXLZN[O[QZSXUU RORMXMZN[ RVRTXTZV[XZYY[V RWRUXUZV[',
      2672: ' 23KZNRMTLWLZN[O[RZTXUUUR RORNTMWMZN[ RURVVWWXWZV',
      2673: ' 36H]LRJTIWIZK[L[NZPX RMRKTJWJZK[ RRRPXPZR[S[UZWXXUXR RSRQXQZR[ RXRYVZW[W]V',
      2674: ' 42JZJVLSNRPRQSQUPXOZM[L[KZKYLYKZ RWSVTWTWSVRURSSRUQXQZR[U[XYZV RQSRU RSSQU RPXQZ RQXOZ',
      2675: ' 32K[NRLXLZN[O[QZSXUU RORMXMZN[ RVRPd RWRT[R`PdOfMgLfLdMaO_R]V[YY[V',
      2676: ' 38LYLVNSPRRRTSTVSXPZN[ RRRSSSVRXPZ RN[P\\Q^QaPdNfLgKfKdLaO^R\\VYYV RN[O\\P^PaOdNf',
      2700: ' 42H\\QFNGLJKOKRLWNZQ[S[VZXWYRYOXJVGSFQF ROGMJLOLRMWOZ RNYQZSZVY RUZWWXRXOWJUG RVHSGQGNH',
      2701: ' 12H\\NJPISFS[ RNJNKPJRHR[S[',
      2702: ' 34H\\LKLJMHNGPFTFVGWHXJXLWNUQL[ RLKMKMJNHPGTGVHWJWLVNTQK[ RLZYZY[ RK[Y[',
      2703: ' 48H\\MFXFQO RMFMGWG RWFPO RQNSNVOXQYTYUXXVZS[P[MZLYKWLW RPOSOVPXS RTOWQXTXUWXTZ RXVVYSZPZMYLW ROZLX',
      2704: ' 18H\\UIU[V[ RVFV[ RVFKVZV RUILV RLUZUZV',
      2705: ' 53H\\MFLO RNGMN RMFWFWG RNGWG RMNPMSMVNXPYSYUXXVZS[P[MZLYKWLW RLOMOONSNVOXR RTNWPXSXUWXTZ RXVVYSZPZMYLW ROZLX',
      2706: ' 62H\\VGWIXIWGTFRFOGMJLOLTMXOZR[S[VZXXYUYTXQVOSNRNOOMQ RWHTGRGOH RPGNJMOMTNXQZ RMVOYRZSZVYXV RTZWXXUXTWQTO RXSVPSOROOPMS RQONQMT',
      2707: ' 12H\\KFYFO[ RKFKGXG RXFN[O[',
      2708: ' 68H\\PFMGLILKMMNNPOTPVQWRXTXWWYTZPZMYLWLTMRNQPPTOVNWMXKXIWGTFPF RNGMIMKNMPNTOVPXRYTYWXYWZT[P[MZLYKWKTLRNPPOTNVMWKWIVG RWHTGPGMH RLXOZ RUZXX',
      2709: ' 62H\\WPURRSQSNRLPKMKLLINGQFRFUGWIXMXRWWUZR[P[MZLXMXNZ RWMVPSR RWNUQRRQRNQLN RPRMPLMLLMIPG RLKNHQGRGUHWK RSGVIWMWRVWTZ RUYRZPZMY',
      2710: ' 16MXRXQYQZR[S[TZTYSXRX RRYRZSZSYRY',
      2711: ' 24MXTZS[R[QZQYRXSXTYT\\S^Q_ RRYRZSZSYRY RS[T\\ RTZS^',
      2712: ' 32MXRMQNQORPSPTOTNSMRM RRNROSOSNRN RRXQYQZR[S[TZTYSXRX RRYRZSZSYRY',
      2713: ' 40MXRMQNQORPSPTOTNSMRM RRNROSOSNRN RTZS[R[QZQYRXSXTYT\\S^Q_ RRYRZSZSYRY RS[T\\ RTZS^',
      2714: ' 24MXRFRTST RRFSFST RRXQYQZR[S[TZTYSXRX RRYRZSZSYRY',
      2715: ' 58I\\LKLJMHNGQFTFWGXHYJYLXNWOUPRQ RLKMKMJNHQGTGWHXJXLWNUORP RMIPG RUGXI RXMTP RRPRTSTSP RRXQYQZR[S[TZTYSXRX RRYRZSZSYRY',
      2716: ' 24MXTFRGQIQLRMSMTLTKSJRJQK RRKRLSLSKRK RRGQK RQIRJ',
      2717: ' 24MXTHSIRIQHQGRFSFTGTJSLQM RRGRHSHSGRG RSITJ RTHSL',
      2718: ' 71F_\\MZMXNWPUVTXSYQZMZKYJWJUKSLRQOSMTKTISGQFPFNGMIMKNNPQUWXZZ[\\[ R\\M\\NZNXO RYNXPVVUXSZQ[M[KZJYIWIUJSLQQNRMSKSIRG RSHQGPGNH ROGNINKONQQVWXYZZ\\Z\\[',
      2719: ' 51I\\RBR_S_ RRBSBS_ RWIYIWGTFQFNGLILKMMNNVRWSXUXWWYTZQZOYNX RWIVHTGQGNHMIMKNMVQXSYUYWXYWZT[Q[NZLXNX RXXUZ',
      2720: '  8G^[BIbJb R[B\\BJb',
      2721: ' 24KYUBSDQGOKNPNTOYQ]S`UbVb RUBVBTDRGPKOPOTPYR]T`Vb',
      2722: ' 24KYNBPDRGTKUPUTTYR]P`NbOb RNBOBQDSGUKVPVTUYS]Q`Ob',
      2723: ' 39JZRFQGSQRR RRFRR RRFSGQQRR RMINIVOWO RMIWO RMIMJWNWO RWIVINOMO RWIMO RWIWJMNMO',
      2724: '  8F_JQ[Q[R RJQJR[R',
      2725: ' 16F_RIRZSZ RRISISZ RJQ[Q[R RJQJR[R',
      2726: ' 16F_JM[M[N RJMJN[N RJU[U[V RJUJV[V',
      2727: ' 11NWSFRGRM RSGRM RSFTGRM',
      2728: ' 22I[NFMGMM RNGMM RNFOGMM RWFVGVM RWGVM RWFXGVM',
      2729: ' 30KYQFOGNINKOMQNSNUMVKVIUGSFQF RQFNIOMSNVKUGQF RSFOGNKQNUMVISF',
      2750: ' 42H]TFQGOIMLLOKSKVLYMZO[Q[TZVXXUYRZNZKYHXGVFTF RTFRGPINLMOLSLVMYO[ RQ[SZUXWUXRYNYKXHVF',
      2751: ' 15H]TJO[ RVFP[ RVFSIPKNL RUIQKNL',
      2752: ' 42H]OJPKOLNKNJOHPGSFVFYGZIZKYMWOTQPSMUKWI[ RVFXGYIYKXMVOPS RJYKXMXRZUZWYXW RMXR[U[WZXW',
      2753: ' 50H]OJPKOLNKNJOHPGSFVFYGZIZKYMVOSP RVFXGYIYKXMVO RQPSPVQWRXTXWWYVZS[O[LZKYJWJVKULVKW RSPUQVRWTWWVYUZS[',
      2754: ' 10H]XGR[ RYFS[ RYFJUZU',
      2755: ' 39H]QFLP RQF[F RQGVG[F RLPMOPNSNVOWPXRXUWXUZR[O[LZKYJWJVKULVKW RSNUOVPWRWUVXTZR[',
      2756: ' 46H]YIXJYKZJZIYGWFTFQGOIMLLOKSKWLYMZO[R[UZWXXVXSWQVPTOQOOPMRLT RTFRGPINLMOLSLXMZ RR[TZVXWVWRVP',
      2757: ' 30H]NFLL R[FZIXLSRQUPWO[ RXLRRPUOWN[ RMIPFRFWI RNHPGRGWIYIZH[F',
      2758: ' 63H]SFPGOHNJNMOOQPTPXOYNZLZIYGVFSF RSFQGPHOJOMPOQP RTPWOXNYLYIXGVF RQPMQKSJUJXKZN[R[VZWYXWXTWRVQTP RQPNQLSKUKXLZN[ RR[UZVYWWWSVQ',
      2759: ' 46H]YMXOVQTRQROQNPMNMKNIPGSFVFXGYHZJZNYRXUVXTZQ[N[LZKXKWLVMWLX ROQNONKOIQGSF RXGYIYNXRWUUXSZQ[',
      2760: '  6MXPYOZP[QZPY',
      2761: '  8MXP[OZPYQZQ[P]N_',
      2762: ' 11MXSMRNSOTNSM RPYOZP[QZ',
      2763: ' 14MXSMRNSOTNSM RP[OZPYQZQ[P]N_',
      2764: ' 17MXUFTGRS RUGRS RUFVGRS RPYOZP[QZPY',
      2765: ' 34H]OJPKOLNKNJOHPGSFWFZG[I[KZMYNSPQQQSRTTT RWFYGZIZKYMXNVO RPYOZP[QZPY',
      2766: '  8MXVFTHSJSKTLUKTJ',
      2767: '  8MXUHTGUFVGVHUJSL',
      2768: ' 55E_\\N[O\\P]O]N\\M[MYNWPRXPZN[K[HZGXGVHTISKRPPROTMUKUITGRFPGOIOLPRQUSXUZW[Y[ZYZX RK[IZHXHVITJSPP ROLPQQTSWUYWZYZZY',
      2769: ' 41H]TBL_ RYBQ_ RZJYKZL[K[JZHYGVFRFOGMIMKNMONVRXT RMKOMVQWRXTXWWYVZS[O[LZKYJWJVKULVKW',
      2770: '  3G]_BEb',
      2771: ' 20KZZBVESHQKOONTNXO]P`Qb RVESIQMPPOUOZP_Qb',
      2772: ' 20JYSBTDUGVLVPUUSYQ\\N_Jb RSBTEUJUOTTSWQ[N_',
      2773: '  9J[TFTR ROIYO RYIOO',
      2774: '  3E_IR[R',
      2775: '  6E_RIR[ RIR[R',
      2776: '  6E_IO[O RIU[U',
      2777: '  6NWUFSM RVFSM',
      2778: ' 12I[PFNM RQFNM RYFWM RZFWM',
      2779: ' 14KZSFQGPIPKQMSNUNWMXKXIWGUFSF',
      2801: ' 18H\\RFK[ RRFY[ RRIX[ RMUVU RI[O[ RU[[[',
      2802: ' 31G]LFL[ RMFM[ RIFYFYLXF RMPUPXQYRZTZWYYXZU[I[ RUPWQXRYTYWXYWZU[',
      2803: ' 45G]LFL[ RMFM[ RIFUFXGYHZJZLYNXOUP RUFWGXHYJYLXNWOUP RMPUPXQYRZTZWYYXZU[I[ RUPWQXRYTYWXYWZU[',
      2804: ' 14I[NFN[ ROFO[ RKFZFZLYF RK[R[',
      2805: ' 31F^NFNLMTLXKZJ[ RXFX[ RYFY[ RKF\\F RG[\\[ RG[Gb RH[Gb R[[\\b R\\[\\b',
      2806: ' 22G\\LFL[ RMFM[ RSLST RIFYFYLXF RMPSP RI[Y[YUX[',
      2807: ' 71CbRFR[ RSFS[ ROFVF RGGHHGIFHFGGFHFIGJIKMLONPWPYOZM[I\\G]F^F_G_H^I]H^G RNPLQKSJXIZH[ RNPMQLSKXJZI[G[FZEX RWPYQZS[X\\Z][ RWPXQYSZX[Z\\[^[_Z`X RO[V[',
      2808: ' 45H\\LIKFKLLINGPFTFWGXIXLWNTOQO RTFVGWIWLVNTO RTOVPXRYTYWXYWZT[O[MZLYKWKVLUMVLW RWQXTXWWYVZT[',
      2809: ' 27F^KFK[ RLFL[ RXFX[ RYFY[ RHFOF RUF\\F RXHLY RH[O[ RU[\\[',
      2810: ' 37F^KFK[ RLFL[ RXFX[ RYFY[ RHFOF RUF\\F RXHLY RH[O[ RU[\\[ RN@N?M?M@NBPCTCVBW@',
      2811: ' 43F^KFK[ RLFL[ RHFOF RLPSPUOVMWIXGYFZF[G[HZIYHZG RSPUQVSWXXZY[ RSPTQUSVXWZX[Z[[Z\\X RH[O[',
      2812: ' 25E^MFMLLTKXJZI[H[GZGYHXIYHZ RXFX[ RYFY[ RJF\\F RU[\\[',
      2813: ' 30F_KFK[ RLFRX RKFR[ RYFR[ RYFY[ RZFZ[ RHFLF RYF]F RH[N[ RV[][',
      2814: ' 27F^KFK[ RLFL[ RXFX[ RYFY[ RHFOF RUF\\F RLPXP RH[O[ RU[\\[',
      2815: ' 44G]QFNGLIKKJOJRKVLXNZQ[S[VZXXYVZRZOYKXIVGSFQF RQFOGMILKKOKRLVMXOZQ[ RS[UZWXXVYRYOXKWIUGSF',
      2816: ' 21F^KFK[ RLFL[ RXFX[ RYFY[ RHF\\F RH[O[ RU[\\[',
      2817: ' 29G]LFL[ RMFM[ RIFUFXGYHZJZMYOXPUQMQ RUFWGXHYJYMXOWPUQ RI[P[',
      2818: ' 32G\\XIYLYFXIVGSFQFNGLIKKJNJSKVLXNZQ[S[VZXXYV RQFOGMILKKNKSLVMXOZQ[',
      2819: ' 16I\\RFR[ RSFS[ RLFKLKFZFZLYF RO[V[',
      2820: ' 24H]KFRV RLFSV RZFSVQYPZN[M[LZLYMXNYMZ RIFOF RVF\\F',
      2821: ' 48F_RFR[ RSFS[ ROFVF RPILJJLIOIRJULWPXUXYW[U\\R\\O[LYJUIPI RPIMJKLJOJRKUMWPX RUXXWZU[R[OZLXJUI RO[V[',
      2822: ' 21H\\KFX[ RLFY[ RYFK[ RIFOF RUF[F RI[O[ RU[[[',
      2823: ' 27F^KFK[ RLFL[ RXFX[ RYFY[ RHFOF RUF\\F RH[\\[ R[[\\b R\\[\\b',
      2824: ' 28F]KFKQLSOTRTUSWQ RLFLQMSOT RWFW[ RXFX[ RHFOF RTF[F RT[[[',
      2825: ' 30BcGFG[ RHFH[ RRFR[ RSFS[ R]F][ R^F^[ RDFKF ROFVF RZFaF RD[a[',
      2826: ' 36BcGFG[ RHFH[ RRFR[ RSFS[ R]F][ R^F^[ RDFKF ROFVF RZFaF RD[a[ R`[ab Ra[ab',
      2827: ' 31F`PFP[ RQFQ[ RIFHLHFTF RQPXP[Q\\R]T]W\\Y[ZX[M[ RXPZQ[R\\T\\W[YZZX[',
      2828: ' 41CaHFH[ RIFI[ REFLF RIPPPSQTRUTUWTYSZP[E[ RPPRQSRTTTWSYRZP[ R[F[[ R\\F\\[ RXF_F RX[_[',
      2829: ' 29H]MFM[ RNFN[ RJFQF RNPUPXQYRZTZWYYXZU[J[ RUPWQXRYTYWXYWZU[',
      2830: ' 39H]LIKFKLLINGQFSFVGXIYKZNZSYVXXVZS[P[MZLYKWKVLUMVLW RSFUGWIXKYNYSXVWXUZS[ RPPYP',
      2831: ' 59CbHFH[ RIFI[ REFLF RE[L[ RVFSGQIPKOOORPVQXSZV[X[[Z]X^V_R_O^K]I[GXFVF RVFTGRIQKPOPRQVRXTZV[ RX[ZZ\\X]V^R^O]K\\IZGXF RIPOP',
      2832: ' 45G]WFW[ RXFX[ R[FOFLGKHJJJLKNLOOPWP ROFMGLHKJKLLNMOOP RRPPQORLYKZJZIY RPQOSMZL[J[IYIX RT[[[',
      2901: ' 39I]NONPMPMONNPMTMVNWOXQXXYZZ[ RWOWXXZZ[[[ RWQVRPSMTLVLXMZP[S[UZWX RPSNTMVMXNZP[',
      2902: ' 48H\\XFWGQINKLNKQKULXNZQ[S[VZXXYUYSXPVNSMQMNNLPKS RXFWHUIQJNLLN RQMONMPLSLUMXOZQ[ RS[UZWXXUXSWPUNSM',
      2903: ' 37H\\MMM[ RNMN[ RJMUMXNYPYQXSUT RUMWNXPXQWSUT RNTUTXUYWYXXZU[J[ RUTWUXWXXWZU[',
      2904: ' 14HZMMM[ RNMN[ RJMXMXRWM RJ[Q[',
      2905: ' 22F]NMNQMWLZK[ RWMW[ RXMX[ RKM[M RI[H`H[[[[`Z[',
      2906: ' 31H[LSXSXQWOVNTMQMNNLPKSKULXNZQ[S[VZXX RWSWPVN RQMONMPLSLUMXOZQ[',
      2907: ' 59E`RMR[ RSMS[ ROMVM RJNIOHNIMJMKNMRNSPTUTWSXRZN[M\\M]N\\O[N RPTNUMVKZJ[ RPTNVLZK[I[HZGX RUTWUXVZZ[[ RUTWVYZZ[\\[]Z^X RO[V[',
      2908: ' 42I[MOLMLQMONNPMTMWNXPXQWSTT RTMVNWPWQVSTT RQTTTWUXWXXWZT[P[MZLXLWMVNWMX RTTVUWWWXVZT[',
      2909: ' 27G]LML[ RMMM[ RWMW[ RXMX[ RIMPM RTM[M RI[P[ RT[[[ RWNMZ',
      2910: ' 37G]LML[ RMMM[ RWMW[ RXMX[ RIMPM RTM[M RI[P[ RT[[[ RWNMZ ROGOFNFNGOIQJSJUIVG',
      2911: ' 38H\\MMM[ RNMN[ RJMQM RNTPTSSTRVNWMXMYNXOWN RPTSUTVVZW[ RPTRUSVUZV[X[YZZX RJ[Q[',
      2912: ' 22G]NMNQMWLZK[J[IZJYKZ RWMW[ RXMX[ RKM[M RT[[[',
      2913: ' 30G^LML[ RLMR[ RMMRY RXMR[ RXMX[ RYMY[ RIMMM RXM\\M RI[O[ RU[\\[',
      2914: ' 27G]LML[ RMMM[ RWMW[ RXMX[ RIMPM RTM[M RMTWT RI[P[ RT[[[',
      2915: ' 36H\\QMNNLPKSKULXNZQ[S[VZXXYUYSXPVNSMQM RQMONMPLSLUMXOZQ[ RS[UZWXXUXSWPUNSM',
      2916: ' 21G]LML[ RMMM[ RWMW[ RXMX[ RIM[M RI[P[ RT[[[',
      2917: ' 36G\\LMLb RMMMb RMPONQMSMVNXPYSYUXXVZS[Q[OZMX RSMUNWPXSXUWXUZS[ RIMMM RIbPb',
      2918: ' 28H[WPVQWRXQXPVNTMQMNNLPKSKULXNZQ[S[VZXX RQMONMPLSLUMXOZQ[',
      2919: ' 16I\\RMR[ RSMS[ RMMLRLMYMYRXM RO[V[',
      2920: ' 22I[LMR[ RMMRY RXMR[P_NaLbKbJaK`La RJMPM RTMZM',
      2921: ' 52H]RFRb RSFSb ROFSF RRPQNPMNMLNKQKWLZN[P[QZRX RNMMNLQLWMZN[ RWMXNYQYWXZW[ RSPTNUMWMYNZQZWYZW[U[TZSX RObVb',
      2922: ' 21H\\LMW[ RMMX[ RXML[ RJMPM RTMZM RJ[P[ RT[Z[',
      2923: ' 23G]LML[ RMMM[ RWMW[ RXMX[ RIMPM RTM[M RI[[[[`Z[',
      2924: ' 28G]LMLTMVPWRWUVWT RMMMTNVPW RWMW[ RXMX[ RIMPM RTM[M RT[[[',
      2925: ' 30CbHMH[ RIMI[ RRMR[ RSMS[ R\\M\\[ R]M][ REMLM ROMVM RYM`M RE[`[',
      2926: ' 32CbHMH[ RIMI[ RRMR[ RSMS[ R\\M\\[ R]M][ REMLM ROMVM RYM`M RE[`[``_[',
      2927: ' 27H]QMQ[ RRMR[ RLMKRKMUM RRTVTYUZWZXYZV[N[ RVTXUYWYXXZV[',
      2928: ' 37E_JMJ[ RKMK[ RGMNM RKTOTRUSWSXRZO[G[ ROTQURWRXQZO[ RYMY[ RZMZ[ RVM]M RV[][',
      2929: ' 25J[OMO[ RPMP[ RLMSM RPTTTWUXWXXWZT[L[ RTTVUWWWXVZT[',
      2930: ' 34I\\MOLMLQMONNPMSMVNXPYSYUXXVZS[P[NZLXLWMVNWMX RSMUNWPXSXUWXUZS[ RRTXT',
      2931: ' 51DaIMI[ RJMJ[ RFMMM RF[M[ RVMSNQPPSPUQXSZV[X[[Z]X^U^S]P[NXMVM RVMTNRPQSQURXTZV[ RX[ZZ\\X]U]S\\PZNXM RJTPT',
      2932: ' 40G\\VMV[ RWMW[ RZMOMLNKPKQLSOTVT ROMMNLPLQMSOT RTTQUPVNZM[ RTTRUQVOZN[L[KZJX RS[Z[',
      3001: ' 36H\\RFKZ RQIW[ RRIX[ RRFY[ RMUVU RI[O[ RT[[[ RKZJ[ RKZM[ RWZU[ RWYV[ RXYZ[',
      3002: ' 78G]LFL[ RMGMZ RNFN[ RIFUFXGYHZJZLYNXOUP RXHYJYLXN RUFWGXIXMWOUP RNPUPXQYRZTZWYYXZU[I[ RXRYTYWXY RUPWQXSXXWZU[ RJFLG RKFLH ROFNH RPFNG RLZJ[ RLYK[ RNYO[ RNZP[',
      3003: ' 37G\\XIYFYLXIVGTFQFNGLIKKJNJSKVLXNZQ[T[VZXXYV RMILKKNKSLVMX RQFOGMJLNLSMWOZQ[',
      3004: ' 62G]LFL[ RMGMZ RNFN[ RIFSFVGXIYKZNZSYVXXVZS[I[ RWIXKYNYSXVWX RSFUGWJXNXSWWUZS[ RJFLG RKFLH ROFNH RPFNG RLZJ[ RLYK[ RNYO[ RNZP[',
      3005: ' 83G\\LFL[ RMGMZ RNFN[ RIFYFYL RNPTP RTLTT RI[Y[YU RJFLG RKFLH ROFNH RPFNG RTFYG RVFYH RWFYI RXFYL RTLSPTT RTNRPTR RTOPPTQ RLZJ[ RLYK[ RNYO[ RNZP[ RT[YZ RV[YY RW[YX RX[YU',
      3006: ' 70G[LFL[ RMGMZ RNFN[ RIFYFYL RNPTP RTLTT RI[Q[ RJFLG RKFLH ROFNH RPFNG RTFYG RVFYH RWFYI RXFYL RTLSPTT RTNRPTR RTOPPTQ RLZJ[ RLYK[ RNYO[ RNZP[',
      3007: ' 60G^XIYFYLXIVGTFQFNGLIKKJNJSKVLXNZQ[T[VZXZY[YS RMILKKNKSLVMX RQFOGMJLNLSMWOZQ[ RXTXY RWSWYVZ RTS\\S RUSWT RVSWU RZSYU R[SYT',
      3008: ' 81F^KFK[ RLGLZ RMFM[ RWFW[ RXGXZ RYFY[ RHFPF RTF\\F RMPWP RH[P[ RT[\\[ RIFKG RJFKH RNFMH ROFMG RUFWG RVFWH RZFYH R[FYG RKZI[ RKYJ[ RMYN[ RMZO[ RWZU[ RWYV[ RYYZ[ RYZ[[',
      3009: ' 39LXQFQ[ RRGRZ RSFS[ RNFVF RN[V[ ROFQG RPFQH RTFSH RUFSG RQZO[ RQYP[ RSYT[ RSZU[',
      3010: ' 45JYSFSWRZQ[ RTGTWSZ RUFUWTZQ[O[MZLXLVMUNUOVOWNXMX RMVMWNWNVMV RPFXF RQFSG RRFSH RVFUH RWFUG',
      3011: ' 69F\\KFK[ RLGLZ RMFM[ RXGMR RPPW[ RQPX[ RQNY[ RHFPF RUF[F RH[P[ RT[[[ RIFKG RJFKH RNFMH ROFMG RWFXG RZFXG RKZI[ RKYJ[ RMYN[ RMZO[ RWYU[ RWYZ[',
      3012: ' 52I[NFN[ ROGOZ RPFP[ RKFSF RK[Z[ZU RLFNG RMFNH RQFPH RRFPG RNZL[ RNYM[ RPYQ[ RPZR[ RU[ZZ RW[ZY RX[ZX RY[ZU',
      3013: ' 63E_JFJZ RJFQ[ RKFQX RLFRX RXFQ[ RXFX[ RYGYZ RZFZ[ RGFLF RXF]F RG[M[ RU[][ RHFJG R[FZH R\\FZG RJZH[ RJZL[ RXZV[ RXYW[ RZY[[ RZZ\\[',
      3014: ' 39F^KFKZ RKFY[ RLFXX RMFYX RYGY[ RHFMF RVF\\F RH[N[ RIFKG RWFYG R[FYG RKZI[ RKZM[',
      3015: ' 54G]QFNGLIKKJOJRKVLXNZQ[S[VZXXYVZRZOYKXIVGSFQF RMILKKNKSLVMX RWXXVYSYNXKWI RQFOGMJLNLSMWOZQ[ RS[UZWWXSXNWJUGSF',
      3016: ' 59G]LFL[ RMGMZ RNFN[ RIFUFXGYHZJZMYOXPUQNQ RXHYJYMXO RUFWGXIXNWPUQ RI[Q[ RJFLG RKFLH ROFNH RPFNG RLZJ[ RLYK[ RNYO[ RNZP[',
      3017: ' 77G]QFNGLIKKJOJRKVLXNZQ[S[VZXXYVZRZOYKXIVGSFQF RMILKKNKSLVMX RWXXVYSYNXKWI RQFOGMJLNLSMWOZQ[ RS[UZWWXSXNWJUGSF RNXOVQURUTVUXV^W`Y`Z^Z\\ RV\\W^X_Y_ RUXW]X^Y^Z]',
      3018: ' 80G]LFL[ RMGMZ RNFN[ RIFUFXGYHZJZLYNXOUPNP RXHYJYLXN RUFWGXIXMWOUP RRPTQUSWYX[Z[[Y[W RWWXYYZZZ RTQURXXYYZY[X RI[Q[ RJFLG RKFLH ROFNH RPFNG RLZJ[ RLYK[ RNYO[ RNZP[',
      3019: ' 44H\\XIYFYLXIVGSFPFMGKIKLLNOPURWSXUXXWZ RLLMNOOUQWRXT RMGLILKMMONUPXRYTYWXYWZT[Q[NZLXKUK[LX',
      3020: ' 57H\\JFJL RQFQ[ RRGRZ RSFS[ RZFZL RJFZF RN[V[ RKFJL RLFJI RMFJH ROFJG RUFZG RWFZH RXFZI RYFZL RQZO[ RQYP[ RSYT[ RSZU[',
      3021: ' 45F^KFKULXNZQ[S[VZXXYUYG RLGLVMX RMFMVNYOZQ[ RHFPF RVF\\F RIFKG RJFKH RNFMH ROFMG RWFYG R[FYG',
      3022: ' 34H\\KFR[ RLFRXR[ RMFSX RYGR[ RIFPF RUF[F RJFLH RNFMH ROFMG RWFYG RZFYG',
      3023: ' 55F^JFN[ RKFNVN[ RLFOV RRFOVN[ RRFV[ RSFVVV[ RTFWV RZGWVV[ RGFOF RRFTF RWF]F RHFKG RIFKH RMFLH RNFLG RXFZG R\\FZG',
      3024: ' 54H\\KFW[ RLFX[ RMFY[ RXGLZ RIFPF RUF[F RI[O[ RT[[[ RJFMH RNFMH ROFMG RVFXG RZFXG RLZJ[ RLZN[ RWZU[ RWYV[ RWYZ[',
      3025: ' 48G]JFQQQ[ RKFRQRZ RLFSQS[ RYGSQ RHFOF RVF\\F RN[V[ RIFKG RNFLG RWFYG R[FYG RQZO[ RQYP[ RSYT[ RSZU[',
      3026: ' 41H\\YFKFKL RWFK[ RXFL[ RYFM[ RK[Y[YU RLFKL RMFKI RNFKH RPFKG RT[YZ RV[YY RW[YX RX[YU',
      3051: ' 38H\\UFIZ RSJT[ RTHUZ RUFUHVYV[ RLUTU RF[L[ RQ[X[ RIZG[ RIZK[ RTZR[ RTYS[ RVYW[',
      3052: ' 78F^OFI[ RPFJ[ RQFK[ RLFWFZG[I[KZNYOVP RYGZIZKYNXO RWFXGYIYKXNVP RNPVPXQYSYUXXVZR[F[ RWQXSXUWXUZ RVPWRWUVXTZR[ RMFPG RNFOH RRFPH RSFPG RJZG[ RJYH[ RKYL[ RJZM[',
      3053: ' 41H]ZH[H\\F[L[JZHYGWFTFQGOIMLLOKSKVLYMZP[S[UZWXXV RQHOJNLMOLSLWMY RTFRGPJOLNOMSMXNZP[',
      3054: ' 63F]OFI[ RPFJ[ RQFK[ RLFUFXGYHZKZOYSWWUYSZO[F[ RWGXHYKYOXSVWTY RUFWHXKXOWSUWRZO[ RMFPG RNFOH RRFPH RSFPG RJZG[ RJYH[ RKYL[ RJZM[',
      3055: ' 80F]OFI[ RPFJ[ RQFK[ RULST RLF[FZL RNPTP RF[U[WV RMFPG RNFOH RRFPH RSFPG RWFZG RXFZH RYFZI RZFZL RULSPST RTNRPSR RTOQPSQ RJZG[ RJYH[ RKYL[ RJZM[ RP[UZ RR[UY RUYWV',
      3056: ' 70F\\OFI[ RPFJ[ RQFK[ RULST RLF[FZL RNPTP RF[N[ RMFPG RNFOH RRFPH RSFPG RWFZG RXFZH RYFZI RZFZL RULSPST RTNRPSR RTOQPSQ RJZG[ RJYH[ RKYL[ RJZM[',
      3057: ' 65H^ZH[H\\F[L[JZHYGWFTFQGOIMLLOKSKVLYMZP[R[UZWXYT RQHOJNLMOLSLWMY RVXWWXT RTFRGPJOLNOMSMXNZP[ RR[TZVWWT RTT\\T RUTWU RVTWW RZTXV R[TXU',
      3058: ' 81E_NFH[ ROFI[ RPFJ[ RZFT[ R[FU[ R\\FV[ RKFSF RWF_F RLPXP RE[M[ RQ[Y[ RLFOG RMFNH RQFOH RRFOG RXF[G RYFZH R]F[H R^F[G RIZF[ RIYG[ RJYK[ RIZL[ RUZR[ RUYS[ RVYW[ RUZX[',
      3059: ' 39KYTFN[ RUFO[ RVFP[ RQFYF RK[S[ RRFUG RSFTH RWFUH RXFUG ROZL[ ROYM[ RPYQ[ ROZR[',
      3060: ' 47I\\WFRWQYO[ RXFTSSVRX RYFUSSXQZO[M[KZJXJVKULUMVMWLXKX RKVKWLWLVKV RTF\\F RUFXG RVFWH RZFXH R[FXG',
      3061: ' 72F]OFI[ RPFJ[ RQFK[ R\\GMR RQOU[ RROV[ RSNWZ RLFTF RYF_F RF[N[ RR[Y[ RMFPG RNFOH RRFPH RSFPG RZF\\G R^F\\G RJZG[ RJYH[ RKYL[ RJZM[ RUZS[ RUYT[ RVYX[',
      3062: ' 49H\\QFK[ RRFL[ RSFM[ RNFVF RH[W[YU ROFRG RPFQH RTFRH RUFRG RLZI[ RLYJ[ RMYN[ RLZO[ RR[WZ RT[XX RV[YU',
      3063: ' 68D`MFGZ RMGNYN[ RNFOY ROFPX R[FPXN[ R[FU[ R\\FV[ R]FW[ RJFOF R[F`F RD[J[ RR[Z[ RKFMG RLFMH R^F\\H R_F\\G RGZE[ RGZI[ RVZS[ RVYT[ RWYX[ RVZY[',
      3064: ' 43F_OFIZ ROFV[ RPFVX RQFWX R\\GWXV[ RLFQF RYF_F RF[L[ RMFPG RNFPH RZF\\G R^F\\G RIZG[ RIZK[',
      3065: ' 56G]SFPGNILLKOJSJVKYLZN[Q[TZVXXUYRZNZKYHXGVFSF ROIMLLOKSKWLY RUXWUXRYNYJXH RSFQGOJNLMOLSLXMZN[ RQ[SZUWVUWRXNXIWGVF',
      3066: ' 60F]OFI[ RPFJ[ RQFK[ RLFXF[G\\I\\K[NYPUQMQ RZG[I[KZNXP RXFYGZIZKYNWPUQ RF[N[ RMFPG RNFOH RRFPH RSFPG RJZG[ RJYH[ RKYL[ RJZM[',
      3067: ' 78G]SFPGNILLKOJSJVKYLZN[Q[TZVXXUYRZNZKYHXGVFSF ROIMLLOKSKWLY RUXWUXRYNYJXH RSFQGOJNLMOLSLXMZN[ RQ[SZUWVUWRXNXIWGVF RLXMVOUPURVSXT]U^V^W] RT^U_V_ RSXS_T`V`W]W\\',
      3068: ' 78F^OFI[ RPFJ[ RQFK[ RLFWFZG[I[KZNYOVPNP RYGZIZKYNXO RWFXGYIYKXNVP RRPTQURWXXYYYZX RWYXZYZ RURVZW[Y[ZXZW RF[N[ RMFPG RNFOH RRFPH RSFPG RJZG[ RJYH[ RKYL[ RJZM[',
      3069: ' 44G^ZH[H\\F[L[JZHYGVFRFOGMIMLNNPPVSWUWXVZ RNLONVRWT ROGNINKOMUPWRXTXWWYVZS[O[LZKYJWJUI[JYKY',
      3070: ' 54G]TFN[ RUFO[ RVFP[ RMFKL R]F\\L RMF]F RK[S[ RNFKL RPFLI RRFMG RYF\\G RZF\\H R[F\\I R\\F\\L ROZL[ ROYM[ RPYQ[ ROZR[',
      3071: ' 48F_NFKQJUJXKZN[R[UZWXXU\\G ROFLQKUKYLZ RPFMQLULYN[ RKFSF RYF_F RLFOG RMFNH RQFOH RRFOG RZF\\G R^F\\G',
      3072: ' 35H\\NFNHOYO[ ROGPX RPFQW R[GO[ RLFSF RXF^F RMFNH RQFPH RRFOG RYF[G R]F[G',
      3073: ' 57E_MFMHKYK[ RNGLX ROFMW RUFMWK[ RUFUHSYS[ RVGTX RWFUW R]GUWS[ RJFRF RUFWF RZF`F RKFNG RLFMH RPFNI RQFNG R[F]G R_F]G',
      3074: ' 54G]NFT[ ROFU[ RPFV[ R[GIZ RLFSF RXF^F RF[L[ RQ[X[ RMFOH RQFPH RRFPG RYF[G R]F[G RIZG[ RIZK[ RTZR[ RTYS[ RUYW[',
      3075: ' 51G]MFQPN[ RNFRPO[ ROFSPP[ R\\GSP RKFRF RYF_F RK[S[ RLFNG RPFOH RQFNG RZF\\G R^F\\G ROZL[ ROYM[ RPYQ[ ROZR[',
      3076: ' 35G]ZFH[ R[FI[ R\\FJ[ R\\FNFLL RH[V[XU ROFLL RPFMI RRFNG RR[VZ RT[WX RU[XU',
      3101: ' 54I]NPNOOOOQMQMONNPMTMVNWOXQXXYZZ[ RVOWQWXXZ RTMUNVPVXWZZ[[[ RVRUSPTMULWLXMZP[S[UZVX RNUMWMXNZ RUSQTOUNWNXOZP[',
      3102: ' 47G\\LFL[MZOZ RMGMY RIFNFNZ RNPONQMSMVNXPYSYUXXVZS[Q[OZNX RWPXRXVWX RSMUNVOWRWVVYUZS[ RJFLG RKFLH',
      3103: ' 34H[WQWPVPVRXRXPVNTMQMNNLPKSKULXNZQ[S[VZXX RMPLRLVMX RQMONNOMRMVNYOZQ[',
      3104: ' 52H]VFV[[[ RWGWZ RSFXFX[ RVPUNSMQMNNLPKSKULXNZQ[S[UZVX RMPLRLVMX RQMONNOMRMVNYOZQ[ RTFVG RUFVH RXYY[ RXZZ[',
      3105: ' 41H[MSXSXQWOVNSMQMNNLPKSKULXNZQ[S[VZXX RWRWQVO RMPLRLVMX RVSVPUNSM RQMONNOMRMVNYOZQ[',
      3106: ' 40KYWHWGVGVIXIXGWFTFRGQHPKP[ RRHQKQZ RTFSGRIR[ RMMVM RM[U[ RPZN[ RPYO[ RRYS[ RRZT[',
      3107: ' 89I\\XNYOZNYMXMVNUO RQMONNOMQMSNUOVQWSWUVVUWSWQVOUNSMQM ROONQNSOU RUUVSVQUO RQMPNOPOTPVQW RSWTVUTUPTNSM RNUMVLXLYM[N\\Q]U]X^Y_ RN[Q\\U\\X] RLYMZP[U[X\\Y^Y_XaUbObLaK_K^L\\O[ RObMaL_L^M\\O[',
      3108: ' 65G^LFL[ RMGMZ RIFNFN[ RNQOOPNRMUMWNXOYRY[ RWOXRXZ RUMVNWQW[ RI[Q[ RT[\\[ RJFLG RKFLH RLZJ[ RLYK[ RNYO[ RNZP[ RWZU[ RWYV[ RYYZ[ RYZ[[',
      3109: ' 43LXQFQHSHSFQF RRFRH RQGSG RQMQ[ RRNRZ RNMSMS[ RN[V[ ROMQN RPMQO RQZO[ RQYP[ RSYT[ RSZU[',
      3110: ' 41KXRFRHTHTFRF RSFSH RRGTG RRMR^QaPb RSNS]R` ROMTMT]S`RaPbMbLaL_N_NaMaM` RPMRN RQMRO',
      3111: ' 61G]LFL[ RMGMZ RIFNFN[ RWNNW RRSY[ RRTX[ RQTW[ RTM[M RI[Q[ RT[[[ RJFLG RKFLH RUMWN RZMWN RLZJ[ RLYK[ RNYO[ RNZP[ RWYU[ RVYZ[',
      3112: ' 31LXQFQ[ RRGRZ RNFSFS[ RN[V[ ROFQG RPFQH RQZO[ RQYP[ RSYT[ RSZU[',
      3113: ' 99AcFMF[ RGNGZ RCMHMH[ RHQIOJNLMOMQNROSRS[ RQORRRZ ROMPNQQQ[ RSQTOUNWMZM\\N]O^R^[ R\\O]R]Z RZM[N\\Q\\[ RC[K[ RN[V[ RY[a[ RDMFN REMFO RFZD[ RFYE[ RHYI[ RHZJ[ RQZO[ RQYP[ RSYT[ RSZU[ R\\ZZ[ R\\Y[[ R^Y_[ R^Z`[',
      3114: ' 65G^LML[ RMNMZ RIMNMN[ RNQOOPNRMUMWNXOYRY[ RWOXRXZ RUMVNWQW[ RI[Q[ RT[\\[ RJMLN RKMLO RLZJ[ RLYK[ RNYO[ RNZP[ RWZU[ RWYV[ RYYZ[ RYZ[[',
      3115: ' 46H\\QMNNLPKSKULXNZQ[S[VZXXYUYSXPVNSMQM RMPLRLVMX RWXXVXRWP RQMONNOMRMVNYOZQ[ RS[UZVYWVWRVOUNSM',
      3116: ' 60G\\LMLb RMNMa RIMNMNb RNPONQMSMVNXPYSYUXXVZS[Q[OZNX RWPXRXVWX RSMUNVOWRWVVYUZS[ RIbQb RJMLN RKMLO RLaJb RL`Kb RN`Ob RNaPb',
      3117: ' 55H\\VNVb RWOWa RUNWNXMXb RVPUNSMQMNNLPKSKULXNZQ[S[UZVX RMPLRLVMX RQMONNOMRMVNYOZQ[ RSb[b RVaTb RV`Ub RX`Yb RXaZb',
      3118: ' 43IZNMN[ RONOZ RKMPMP[ RWOWNVNVPXPXNWMUMSNQPPS RK[S[ RLMNN RMMNO RNZL[ RNYM[ RPYQ[ RPZR[',
      3119: ' 43J[WOXMXQWOVNTMPMNNMOMQNSPTUUWVXY RNNMQ RNRPSUTWU RXVWZ RMONQPRUSWTXVXYWZU[Q[OZNYMWM[NY',
      3120: ' 22KZPHPVQYRZT[V[XZYX RQHQWRY RPHRFRWSZT[ RMMVM',
      3121: ' 43G^LMLVMYNZP[S[UZVYWW RMNMWNY RIMNMNWOZP[ RWMW[\\[ RXNXZ RTMYMY[ RJMLN RKMLO RYYZ[ RYZ[[',
      3122: ' 31I[LMR[ RMMRY RNMSY RXNSYR[ RJMQM RTMZM RKMNO RPMNN RVMXN RYMXN',
      3123: ' 45F^JMN[ RKMNX RLMOX RRMOXN[ RRMV[ RSMVX RRMTMWX RZNWXV[ RGMOM RWM]M RHMKN RNMLN RXMZN R\\MZN',
      3124: ' 48H\\LMV[ RMMW[ RNMX[ RWNMZ RJMQM RTMZM RJ[P[ RS[Z[ RKMMN RPMNN RUMWN RYMWN RMZK[ RMZO[ RVZT[ RWZY[',
      3125: ' 40H[LMR[ RMMRY RNMSY RXNSYP_NaLbJbIaI_K_KaJaJ` RJMQM RTMZM RKMNO RPMNN RVMXN RYMXN',
      3126: ' 41I[VML[ RWMM[ RXMN[ RXMLMLQ RL[X[XW RMMLQ RNMLP ROMLO RQMLN RS[XZ RU[XY RV[XX RW[XW',
      3151: ' 50G]WMUTUXVZW[Y[[Y\\W RXMVTVZ RWMYMWTVX RUTUQTNRMPMMNKQJTJVKYLZN[P[RZSYTWUT RNNLQKTKWLY RPMNOMQLTLWMZN[',
      3152: ' 52I\\PFNMMSMWNYOZQ[S[VZXWYTYRXOWNUMSMQNPOOQNT RQFOMNQNWOZ RVYWWXTXQWO RMFRFPMNT RS[UYVWWTWQVNUM RNFQG ROFPH',
      3153: ' 34I[WQWPVPVRXRXPWNUMRMONMQLTLVMYNZP[R[UZWW ROONQMTMWNY RRMPOOQNTNWOZP[',
      3154: ' 58G]YFVQUUUXVZW[Y[[Y\\W RZFWQVUVZ RVF[FWTVX RUTUQTNRMPMMNKQJTJVKYLZN[P[RZSYTWUT RMOLQKTKWLY RPMNOMQLTLWMZN[ RWFZG RXFYH',
      3155: ' 33I[MVQUTTWRXPWNUMRMONMQLTLVMYNZP[R[UZWX ROONQMTMWNY RRMPOOQNTNWOZP[',
      3156: ' 45JZZHZGYGYI[I[GZFXFVGTISKRNQRO[N^M`Kb RTJSMRRP[O^ RXFVHUJTMSRQZP]O_MaKbIbHaH_J_JaIaI` RNMYM',
      3157: ' 57H]XMT[S^QaOb RYMU[S_ RXMZMV[T_RaObLbJaI`I^K^K`J`J_ RVTVQUNSMQMNNLQKTKVLYMZO[Q[SZTYUWVT RNOMQLTLWMY RQMOONQMTMWNZO[',
      3158: ' 41G]OFI[K[ RPFJ[ RLFQFK[ RMTOPQNSMUMWNXPXSVX RWNWRVVVZ RWPUUUXVZW[Y[[Y\\W RMFPG RNFOH',
      3159: ' 35KXSFSHUHUFSF RTFTH RSGUG RLQMOOMQMRNSPSSQX RRNRRQVQZ RRPPUPXQZR[T[VYWW',
      3160: ' 45KXUFUHWHWFUF RVFVH RUGWG RMQNOPMRMSNTPTSRZQ]P_NaLbJbIaI_K_KaJaJ` RSNSSQZP]O_ RSPRTP[O^N`Lb',
      3161: ' 49G]OFI[K[ RPFJ[ RLFQFK[ RYOYNXNXPZPZNYMWMUNQROS RMSOSQTRUTYUZWZ RQUSYTZ ROSPTRZS[U[WZYW RMFPG RNFOH',
      3162: ' 26LXTFQQPUPXQZR[T[VYWW RUFRQQUQZ RQFVFRTQX RRFUG RSFTH',
      3163: ' 61@cAQBODMFMGNHPHSF[ RGNGSE[ RGPFTD[F[ RHSJPLNNMPMRNSPSSQ[ RRNRSP[ RRPQTO[Q[ RSSUPWNYM[M]N^P^S\\X R]N]R\\V\\Z R]P[U[X\\Z][_[aYbW',
      3164: ' 42F^GQHOJMLMMNNPNSL[ RMNMSK[ RMPLTJ[L[ RNSPPRNTMVMXNYPYSWX RXNXRWVWZ RXPVUVXWZX[Z[\\Y]W',
      3165: ' 46H\\QMNNLQKTKVLYMZP[S[VZXWYTYRXOWNTMQM RNOMQLTLWMY RVYWWXTXQWO RQMOONQMTMWNZP[ RS[UYVWWTWQVNTM',
      3166: ' 66G]HQIOKMMMNNOPOSNWKb RNNNSMWJb RNPMTIb ROTPQQORNTMVMXNYOZRZTYWWZT[R[PZOWOT RXOYQYTXWWY RVMWNXQXTWWVYT[ RFbNb RJaGb RJ`Hb RK`Lb RJaMb',
      3167: ' 57G\\WMQb RXMRb RWMYMSb RUTUQTNRMPMMNKQJTJVKYLZN[P[RZSYTWUT RMOLQKTKWLY RPMNOMQLTLWMZN[ RNbVb RRaOb RR`Pb RS`Tb RRaUb',
      3168: ' 30I[JQKOMMOMPNQPQTO[ RPNPTN[ RPPOTM[O[ RYOYNXNXPZPZNYMWMUNSPQT',
      3169: ' 47J[XPXOWOWQYQYOXNUMRMONNONQOSQTTUVVWX RONNQ RORQSTTVU RWVVZ RNOOQQRTSVTWVWXVZS[P[MZLYLWNWNYMYMX',
      3170: ' 23KYTFQQPUPXQZR[T[VYWW RUFRQQUQZ RTFVFRTQX RNMXM',
      3171: ' 42F^GQHOJMLMMNNPNSLX RMNMRLVLZ RMPKUKXLZN[P[RZTXVU RXMVUVXWZX[Z[\\Y]W RYMWUWZ RXMZMXTWX',
      3172: ' 29H\\IQJOLMNMONPPPSNX RONORNVNZ ROPMUMXNZP[R[TZVXXUYQYMXMXNYP',
      3173: ' 48CaDQEOGMIMJNKPKSIX RJNJRIVIZ RJPHUHXIZK[M[OZQXRU RTMRURXSZU[W[YZ[X]U^Q^M]M]N^P RUMSUSZ RTMVMTTSX',
      3174: ' 51G]JQLNNMPMRNSPSR RPMQNQRPVOXMZK[I[HZHXJXJZIZIY RRORRQVQY RZOZNYNYP[P[NZMXMVNTPSRRVRZS[ RPVPXQZS[U[WZYW',
      3175: ' 49G]HQIOKMMMNNOPOSMX RNNNRMVMZ RNPLULXMZO[Q[SZUXWT RYMU[T^RaPb RZMV[T_ RYM[MW[U_SaPbMbKaJ`J^L^L`K`K_',
      3176: ' 39H\\YMXOVQNWLYK[ RXOOOMPLR RVORNONNO RVORMOMMOLR RLYUYWXXV RNYRZUZVY RNYR[U[WYXV',
      3200: ' 50H\\QFNGLJKOKRLWNZQ[S[VZXWYRYOXJVGSFQF RNHMJLNLSMWNY RVYWWXSXNWJVH RQFOGNIMNMSNXOZQ[ RS[UZVXWSWNVIUGSF',
      3201: ' 28H\\QHQ[ RRHRZ RSFS[ RSFPINJ RM[W[ RQZO[ RQYP[ RSYT[ RSZU[',
      3202: ' 62H\\LJLKMKMJLJ RLIMINJNKMLLLKKKJLHMGPFTFWGXHYJYLXNUPPRNSLUKXK[ RWHXJXLWN RTFVGWJWLVNTPPR RKYLXNXSYWYYX RNXSZWZXY RNXS[W[XZYXYV',
      3203: ' 76H\\LJLKMKMJLJ RLIMINJNKMLLLKKKJLHMGPFTFWGXIXLWNTO RVGWIWLVN RSFUGVIVLUNSO RQOTOVPXRYTYWXYWZT[P[MZLYKWKVLUMUNVNWMXLX RWRXTXWWY RSOUPVQWTWWVZT[ RLVLWMWMVLV',
      3204: ' 28H\\SIS[ RTHTZ RUFU[ RUFJUZU RP[X[ RSZQ[ RSYR[ RUYV[ RUZW[',
      3205: ' 55H\\MFKPMNPMSMVNXPYSYUXXVZS[P[MZLYKWKVLUMUNVNWMXLX RWPXRXVWX RSMUNVOWRWVVYUZS[ RLVLWMWMVLV RMFWF RMGUG RMHQHUGWF',
      3206: ' 69H\\VIVJWJWIVI RWHVHUIUJVKWKXJXIWGUFRFOGMILKKOKULXNZQ[S[VZXXYUYTXQVOSNQNOONPMR RNIMKLOLUMXNY RWXXVXSWQ RRFPGOHNJMNMUNXOZQ[ RS[UZVYWVWSVPUOSN',
      3207: ' 43H\\KFKL RYFYIXLTQSSRWR[ RSRRTQWQ[ RXLSQQTPWP[R[ RKJLHNFPFUIWIXHYF RMHNGPGRH RKJLINHPHUI',
      3208: ' 79H\\PFMGLILLMNPOTOWNXLXIWGTFPF RNGMIMLNN RVNWLWIVG RPFOGNINLONPO RTOUNVLVIUGTF RPOMPLQKSKWLYMZP[T[WZXYYWYSXQWPTO RMQLSLWMY RWYXWXSWQ RPONPMSMWNZP[ RT[VZWWWSVPTO',
      3209: ' 69H\\MWMXNXNWMW RWOVQURSSQSNRLPKMKLLINGQFSFVGXIYLYRXVWXUZR[O[MZLXLWMVNVOWOXNYMY RMPLNLKMI RVHWIXLXRWVVX RQSORNQMNMKNHOGQF RSFUGVIWLWSVWUYTZR[',
      3210: ' 16MXRXQYQZR[S[TZTYSXRX RRYRZSZSYRY',
      3211: ' 24MXTZS[R[QZQYRXSXTYT\\S^Q_ RRYRZSZSYRY RS[T\\ RTZS^',
      3212: ' 32MXRMQNQORPSPTOTNSMRM RRNROSOSNRN RRXQYQZR[S[TZTYSXRX RRYRZSZSYRY',
      3213: ' 40MXRMQNQORPSPTOTNSMRM RRNROSOSNRN RTZS[R[QZQYRXSXTYT\\S^Q_ RRYRZSZSYRY RS[T\\ RTZS^',
      3214: ' 34MXRFQGQIRQ RRFRTST RRFSFST RSFTGTISQ RRXQYQZR[S[TZTYSXRX RRYRZSZSYRY',
      3215: ' 52I\\MKMJNJNLLLLJMHNGPFTFWGXHYJYLXNWOSQ RWHXIXMWN RTFVGWIWMVOUP RRQRTSTSQRQ RRXQYQZR[S[TZTYSXRX RRYRZSZSYRY',
      3216: ' 24MXTFRGQIQLRMSMTLTKSJRJQK RRKRLSLSKRK RRGQK RQIRJ',
      3217: ' 24MXTHSIRIQHQGRFSFTGTJSLQM RRGRHSHSGRG RSITJ RTHSL',
      3218: ' 74E_[O[NZNZP\\P\\N[MZMYNXPVUTXRZP[L[JZIXIUJSPORMSKSIRGPFNGMIMLNOPRTWWZY[[[\\Y\\X RKZJXJUKSLR RRMSI RSKRG RNGMK RNNPQTVWYYZ RN[LZKXKULSPO RMINMQQUVXYZZ[Z\\Y',
      3219: ' 56H\\PBP_ RTBT_ RXKXJWJWLYLYJXHWGTFPFMGKIKLLNOPURWSXUXXWZ RLLMNOOUQWRXT RMGLILKMMONUPXRYTYWXYWZT[P[MZLYKWKUMUMWLWLV',
      3220: '  8G^[BIbJb R[B\\BJb',
      3221: ' 27KYUBSDQGOKNPNTOYQ]S`Ub RQHPKOOOUPYQ\\ RSDRFQIPOPUQ[R^S`',
      3222: ' 27KYOBQDSGUKVPVTUYS]Q`Ob RSHTKUOUUTYS\\ RQDRFSITOTUS[R^Q`',
      3223: ' 39JZRFQGSQRR RRFRR RRFSGQQRR RMINIVOWO RMIWO RMIMJWNWO RWIVINOMO RWIMO RWIWJMNMO',
      3224: '  8F_JQ[Q[R RJQJR[R',
      3225: ' 16F_RIRZSZ RRISISZ RJQ[Q[R RJQJR[R',
      3226: ' 16F_JM[M[N RJMJN[N RJU[U[V RJUJV[V',
      3227: ' 11NWSFRGRM RSGRM RSFTGRM',
      3228: ' 22I[NFMGMM RNGMM RNFOGMM RWFVGVM RWGVM RWFXGVM',
      3229: ' 30KYQFOGNINKOMQNSNUMVKVIUGSFQF RQFNIOMSNVKUGQF RSFOGNKQNUMVISF',
      3250: ' 58H]TFQGOIMLLOKSKVLYMZO[Q[TZVXXUYRZNZKYHXGVFTF RQHOJNLMOLSLWMY RTYVWWUXRYNYJXH RTFRGPJOLNOMSMXNZO[ RQ[SZUWVUWRXNXIWGVF',
      3251: ' 20H]TJO[Q[ RWFUJP[ RWFQ[ RWFTIQKOL RTJRKOL',
      3252: ' 52H]OKOJPJPLNLNJOHPGSFVFYGZIZKYMWOMUKWI[ RXGYIYKXMVOSQ RVFWGXIXKWMUOMU RJYKXMXRYWYXX RMXRZWZ RMXR[U[WZXXXW',
      3253: ' 64H]OKOJPJPLNLNJOHPGSFVFYGZIZKYMXNVOSP RXGYIYKXMWN RVFWGXIXKWMUOSP RQPSPVQWRXTXWWYUZR[O[LZKYJWJULULWKWKV RVRWTWWVY RSPUQVSVWUYTZR[',
      3254: ' 15H]WJR[T[ RZFXJS[ RZFT[ RZFJUZU',
      3255: ' 49H]QFLP RQF[F RQGYG RPHUHYG[F RLPMOPNSNVOWPXRXUWXUZQ[N[LZKYJWJULULWKWKV RVPWRWUVXTZ RSNUOVQVUUXSZQ[',
      3256: ' 61H]YJYIXIXKZKZIYGWFTFQGOIMLLOKSKVLYMZO[R[UZWXXVXSWQVPTOQOOPNQMS RPINLMOLSLWMY RVXWVWSVQ RTFRGPJOLNOMSMXNZO[ RR[TZUYVVVRUPTO',
      3257: ' 39H]NFLL R[FZIXLTQRTQWP[ RRSPWO[ RXLRRPUOWN[P[ RMIPFRFWI ROGRGWI RMIOHRHWIYIZH[F',
      3258: '104H]SFPGOHNJNMOOQPTPWOYNZLZIYGWFSF RUFPG RPHOJONPO ROORP RSPWO RXNYLYIXG RYGUF RSFQHPJPNQP RTPVOWNXLXHWF RQPMQKSJUJXKZN[R[VZWYXWXTWRVQTP RRPMQ RNQLSKUKXLZ RKZP[VZ RVYWWWTVR RVQSP RQPOQMSLULXMZN[ RR[TZUYVWVSUQTP',
      3259: ' 61H]XNWPVQTRQROQNPMNMKNIPGSFVFXGYHZKZNYRXUVXTZQ[N[LZKXKVMVMXLXLW ROPNNNKOI RXHYJYNXRWUUX RQRPQOOOKPHQGSF RVFWGXIXNWRVUUWSZQ[',
      3260: ' 16MXPXOYOZP[Q[RZRYQXPX RPYPZQZQYPY',
      3261: ' 22MXQ[P[OZOYPXQXRYR[Q]P^N_ RPYPZQZQYPY RQ[Q\\P^',
      3262: ' 32MXSMRNROSPTPUOUNTMSM RSNSOTOTNSN RPXOYOZP[Q[RZRYQXPX RPYPZQZQYPY',
      3263: ' 38MXSMRNROSPTPUOUNTMSM RSNSOTOTNSN RQ[P[OZOYPXQXRYR[Q]P^N_ RPYPZQZQYPY RQ[Q\\P^',
      3264: ' 34MXVFUFTGRT RVGUGRT RVGVHRT RVFWGWHRT RPXOYOZP[Q[RZRYQXPX RPYPZQZQYPY',
      3265: ' 59H]OKOJPJPLNLNJOHPGSFWFZG[I[KZMYNWOSPQQQSSTTT RUFZG RYGZIZKYMXNVO RWFXGYIYKXMWNSPRQRSST RPXOYOZP[Q[RZRYQXPX RPYPZQZQYPY',
      3266: ' 22MXWFUGTHSJSLTMUMVLVKUJTJ RUGTITJ RTKTLULUKTK',
      3267: ' 22MXVIUITHTGUFVFWGWIVKULSM RUGUHVHVGUG RVIVJUL',
      3268: ' 72E_\\O\\N[N[P]P]N\\M[MYNWPRXPZN[K[HZGXGVHTISKRPPROTMUKUITGRFPGOIOLPRQURWTZV[X[YYYX RL[HZ RIZHXHVITJSLR RPPQSTYVZ RK[JZIXIVJTKSMRRO ROLPOQRSVUYWZXZYY',
      3269: ' 52H]TBL_ RYBQ_ RZKZJYJYL[L[JZHYGVFRFOGMIMLNNPPVSWUWXVZ RNLONVRWT ROGNINKOMUPWRXTXWWYVZS[O[LZKYJWJULULWKWKV',
      3270: '  8G^_BEbFb R_B`BFb',
      3271: ' 32JZZBXCUERHPKNOMSMXN\\O_Qb RSHQKOONTN\\ RZBWDTGRJQLPOOSN\\ RNTO]P`Qb',
      3272: ' 32JZSBUEVHWLWQVUTYR\\O_LaJb RVHVPUUSYQ\\ RSBTDUGVP RVHUQTUSXRZP]M`Jb',
      3273: ' 39J[TFSGUQTR RTFTR RTFUGSQTR ROIPIXOYO ROIYO ROIOJYNYO RYIXIPOOO RYIOO RYIYJONOO',
      3274: '  8F_JQ[Q[R RJQJR[R',
      3275: ' 16F_RIRZSZ RRISISZ RJQ[Q[R RJQJR[R',
      3276: ' 16F_JM[M[N RJMJN[N RJU[U[V RJUJV[V',
      3277: ' 11MWUFTGRM RUGRM RUFVGRM',
      3278: ' 22H\\PFOGMM RPGMM RPFQGMM RZFYGWM RZGWM RZF[GWM',
      3279: ' 30KZSFQGPIPKQMSNUNWMXKXIWGUFSF RSFPIQMUNXKWGSF RUFQGPKSNWMXIUF',
      3301: ' 62F^IHJIIJHIIGKFMFOGPHQKQOPRNTLUIV ROHPKPPOR RMFNGOJOPNSLU RLVOY RKVOZ RIVN[UV R\\G[H\\H\\G[FYFWGVHUJUYW[[W RWHVJVXXZ RYFXGWJWWYY',
      3302: '101E_GQGRHSJSLRLOKMIJIHKF RKOIK RJSKRKPIMHKHIIGKFNFPGQHRJRRQUOW RPHQJQT RNFOGPJPUOW RRISGUFWFYGZH[J\\K RYHZJ RWFXGYJZK\\K R\\KRP RYM[O\\R\\U[XYZV[S[PZJWIWHX RXNYN[P RVNYO[Q\\S RTZRZLWKW RZYXZUZRYNWKVIVHXHZI[JZIY',
      3303: ' 79F^RHPFNFLGJJINIRJVLYNZQ[T[WZYY[W RLHKJJMJRKVMYPZ RNFMGLIKMKQLUMWOYRZUZXY[W RUFRHQIPKPLQNTPURUT RQKQLUPUQ RQIQJRLUNVPVRUTSURUPTOR RUFVGXHZH RUGVHWH RTGVIXIZH[G',
      3304: ' 79E_HLHKIIKGNFRFUGWHYJ[M\\Q\\U[XYZV[S[PZJWIWHX RKHMGRGUHWIYK[N RTZRZLWKW RHKJIMHRHUIWJYL[O\\R RZYXZUZRYNWKVIVHXHZI[JZIY RPHMKLMLONSNU RMNMONQNR RMKMMOQOSNUMVKVJUJT',
      3305: ' 95F^RHPFNFLGJJINIRJVLYNZQ[T[WZYY[W RLHKJJMJRKVMYPZ RNFMGLIKMKQLUMWOYRZUZXY[W RUFRHQIPKPLQNTPURUT RQKQLUPUQ RQIQJRLUNVPVRUTSURUPTOR RUFVGXHZH RUGVHWH RTGVIXIZH[G RUNYK RYKZL\\L RXLYMZM RWMXNZN\\L',
      3306: ' 94F^MNKMJKJIKGNFQFTGXI RKHMGRGUH RJKKIMHRHXIZI[H[GZFYF RSHRIQKQMROVSWVWYV\\U]S^ RTPWSXVXYW[ RQMSOVQXSYVYYX[V]S^O^L]K\\JZJWLTLRKQ RL\\K[KWLU RO^M]L[LWMTMRLQJQIRIS RUPYL RYLZM\\M RXMYNZN RWNXOZO\\M',
      3307: ' 99E_UJTHSGQFNFKGIJHNHRIUJWLYNZQ[T[WZYY[W\\T\\Q[NYL RKHJJIMIRJUKW RZW[U[QZNYM RNFLGKIJMJRKVLXNZ RWZYXZUZQYOWM RUFRHPJOLOMPOSQTSTU RPLPMTQTR RPJPKQMTOUQUSTURVQVOUNS RTOYLZJ R\\FZJ RYG]I R\\F[GYGZHZJ[I]I\\H\\F',
      3308: ' 92F_RFPGNIMKMMNOPQQSQU RNLNMQQQR RNINKOMQORQRSQUPVNWLWJVIUHSHQIPJQIR RRFTHVHXG RQGSH RPGQHSIUIXG RRPYK RYK[N\\Q\\T[WYYVZR[ RXLZN[Q[UZW RVMWMYOZRZVYXXYVZ RVZTZRYPYNZM\\N^P_R_T^ RSZQZ RR[PZNZ',
      3309: ' 83F_PPNPLOKNJLJJKHLGOFQFTGWJYK RLHNGRGTHUI RJJKIMHQHTIVJYK[K\\J\\H[GYG RJXKYJZIYIWJVLVNWPYR\\T^ RNXOYQ\\R] RLVMWNYP\\Q]S^V^X]Y\\ZZZWYUWRVPVO RYXYWVRVQ RX]Y[YYXWVTURUPWNYNZOZP',
      3310: ' 83F_PPNPLOKNJLJJKHLGOFQFTGWJYK RLHNGRGTHUI RJJKIMHQHTIVJYK[K\\J\\H[GYG RJXKYJZIYIWJVLVNWPYR\\T^ RNXOYQ\\R] RLVMWNYP\\Q]S^V^X]Y\\ZZZWYUWRVPVO RYXYWVRVQ RX]Y[YYXWVTURUPWNYNZOZP',
      3311: ' 81E_[KZIXGUFRFOGMILKLNMQPWPYN[ RMNMOPUPV RNHMJMMNOPSQVQXPZN[L[JZ RHVJZ RGYKW RHVHXGYIYJZJXKWIWHV RNONMOKQJTJVKXMYM RUKWM RRJTKULVN RYMPQ RUOYXZY[Y RTPXXZZ RSPWYY[\\X',
      3312: ' 73G^ZSYTVTUSUQVOXLYJYH RVQVPYLYK RWTVSVRWPYNZLZJYHXGUFPFMGLHKJKLLNNQOSOTNV RLKLLOQOR RLHLJMLOOPQPSOUMWJY RMWOWRYUZXZZY RNXOXSZTZ RJYLXMXQZT[V[YZZY[W',
      3313: '128BbEQERFSHSJRJOIMGJGHIF RIOGK RHSIRIPGMFKFIGGIFKFMGOIPLPROUNWLYI[HZGZ RNIOLORNUMW RJZIYHY RKFMHNKNRMVLXKYJXIXF[ RNGPFRFTGVIWLWRVUUWSYQ[PZOZ RUIVLVRUV RRZQYPY RRFTHUKUSTWSYRXQXN[ RUHVGXFZF\\G]H^J_K R\\H]J RZF[G\\J]K_K R_K\\M[NZQZT[X][`X R\\N[P[T\\W^Z R_K]M\\O\\S]W_Y',
      3314: ' 96D`GQGRHSJSLRLOKMIJIHKF RKOIK RJSKRKPIMHKHIIGKFNFPGRISLSRRUQWOYL[KZIZG[ RQIRKRRQUPWOX RMZKYIY RNFPHQKQRPVNYLXJXG[ RRHSGUFWFYGZH[J\\K RYHZJ RWFXGYJZK\\K R\\KYMXNWQWTXXZ[]X RYNXPXTYW[Z R\\KZMYOYSZW\\Y',
      3315: ' 72D`PFNGLIKKKMMQMS RLLLMMOMP RLILKNONQMSLTJTISIR RPFQGWIZK[M\\P\\S[VZXXZU[R[OZIWHWGX RPGQHWJYKZL RPFPHQIWKYL[N\\P RSZQZKWJW RYYWZTZQYMWJVHVGXGZH[IZHY',
      3316: '100E`HQHRISKSMRMOLMJJJHLF RLOJK RKSLRLPJMIKIIJGLFOFQGRHSJSU RSWS\\R^P_M_L^L\\M[N\\M] RQHRJR\\Q^ ROFPGQJQU RQWQ\\P^O_ RSJXF RXFZI[K\\O\\R[UYXV[ RWGZK[N[O RVHXJZM[P[SZVYX RWYUVSU RQUOVMX RWZUWSVPV RV[TXSW RQWOWMX',
      3317: ' 88D`PFNGLIKKKMMQMS RLLLMMOMP RLILKNONQMSLTJTISIR RPFQGWIZK[M\\P\\S[VZX RXZU[R[OZIWHWGX RPGQHWJYKZL RPFPHQIWKYL[N\\P RSZQZKWJW RXZTZQYMWJVHVGXGZH[IZHY RTXVVXV\\Z]Z RWWXW[Z RUWVWZ[\\[^Y',
      3318: ' 96D`GQGRHSJSLRLOKMIJIHKF RKOIK RJSKRKPIMHKHIIGKFNFPGQHRJRVQXOZM[K[IZ RPHQJQVPX RNFOGPJPVOYM[ RGVIZ RFYJW RGVGXFYHYIZIXJWHWGV RRISGUFWFYGZH[J\\K RYHZJ RWFXGYJZK\\K R\\KRP RTOXYZ[]X RUOYX[Z RVNZX[Y\\Y',
      3319: ' 83E`\\H[G\\F]G]I\\KZKVISHOHKIIK RYJVHSGOGLH R]I\\JZJVGSFOFLGJIIKHNHRIUJWLYNZQ[U[XZZY\\W]T]Q\\OZNWNUOSRQSOS RLXNYQZUZYY RIUKWMXPYUYYX[W\\V]T RXOWOSSRS R]Q[OYOWPUSSTQTOSNQNOOMQL',
      3320: ' 81F_LNJMIKIIJGMFRFUGYJ[J\\I RJHLGRGUHXJ RIKJILHRHUIYK[K\\I\\G[FZG[H RUIRLQNQPSTSV RRORPSRSS RRLRNTRTTSVRWPWOVOT RJYKZJ[IZIXJVLVOWSYVZYZ[Y RLWMWSZUZ RIXJWKWMXQZT[W[ZZ\\X',
      3321: ' 45G]JHKHLILWJX RKGMHMXPZ RIILFNHNWPYRY RJXKXMYO[RYVV RTHUHVIVYX[[X RUGWHWYYZ RSIVFYHXIXXYYZY',
      3322: '100D`GQGRHSJSLRLOKMIJIHKF RKOIK RJSKRKPIMHKHIIGKFNFPGQHRJRRQUOW RPHQJQT RNFOGPJPUOW RRISGUFWFYG[J\\K RYHZJ RWFXGYJZK\\K RZKXKWLWNXP[R\\T RXO[Q RWMXN[P\\R\\V[XYZW[S[PZJWIWHX RTZRZLWKW RZYXZUZRYNWKVIVHXHZI[JZIY',
      3323: '143BcEQERFSHSJRJOIMGJGHIF RIOGK RHSIRIPGMFKFIGGIFLFNGOHPJPNOQMTKV RNHOJOONR RLFMGNJNOMSKV RNGPFSFUG RWFTGSISMTPVSWUWWVY RTMTNWSWT RWFUGTITLUNWQXTXVWXUZS[O[MZKXIWGWFX RNZKWJW RQ[OZLWJVGVFXFZG[HZGY RWFZF\\G^J_K R\\H]J RZF[G\\J]K_K R]K[KZLZN[P^R_T R[O^Q RZM[N^P_R_W^Y]Z[[X[UZ RYZXZVY R^Y\\ZZZXYWX',
      3324: ' 86F^KHMHOIPJQMQO RQQQUPXM[KZI[ RNZLYKY ROYNYLXI[ RMGPHQIRLRUSWUYWZ RIINFPGRISLSO RSQSTTWUXWYYY RQURXTZV[[X RSLTIWFYG[F RVGXHYH RUHVHXI[F RKSMOQO RSOWOYM RMPWP RKSMQQQ RSQWQYM',
      3325: ' 74E_HQHRISKSMRMOLMJJJHLF RLOJK RKSLRLPJMIKIIJGLFOFQGRHSJSORRQTQUSWTW RQHRJRPQSPUSX ROFPGQJQPPTOVRYUV RSJ[F RYGYZX] RZGZXY[ R[F[VZZY\\W^T_P_M^K\\JZKYLZK[',
      3326: ' 74F^NIOGQFTFVGWHXJXMWOVPTQ RQQOPNN RVHWIWNVO RTFUGVIVNUPTQ RMUNSORQQTQWRYTZVZZY\\W^T_P_N^KZJY RXTYVYZX\\ RTQWSXUX[W]V^T_ RO^N]LZKY RR_P^O]MZLYIYHZH\\I]J]',
      3401: ' 46J[TMQNOONPMSMVNYO[UX RNVOYPZ RQNOPNSNUOXQZ RRNSOUPUYW[ZX RSNVPVXXZ RTMUNWOXO RWPXO RWPWXXYYY',
      3402: ' 50J[LHMINK RTFQGOINKNXMY RPIOKOXRZ RTFRGQHPKPXRYSZ RMYNYPZQ[TZ RPPVMWOXRXUWXVYTZ RUNVOWQ RTNVPWSWUVXTZ',
      3403: ' 27KXRNTPVOTMRNOPNRNWOYQ[UY RSNUO RPPOROWPYQZ RQOPQPVQXSZ',
      3404: ' 47J[QFNINKOLSNVPWRWUVXTZ ROJOKSMVOWP ROHOIPJUMWOXRXUWXTZQ[ RRNNPNXMY ROPOXRZ RPOPXRYSZ RMYNYPZQ[',
      3405: ' 27KXPUVQSMOPNRNWOYQ[UY RUQRN RPPOROWPYQZ RTRROQOPQPVQXSZ',
      3406: ' 49LYXFWGUGSFQFPHPMOONP RVHTHRGQG RXFWHVITIRHQHPI RPKQMRNTOVOVP RNPPP RRPVP RPPPTQ` RSOPOQNQ[ RRPRTQ`',
      3407: ' 53J[TMQNOONPMSMVNYO[UX RNWOYPZ RQNOPNSNUOXQZ RRNSOUPUXV[V]U_ RSNVPVZ RTMUNWOXO RWPXO RWPW\\V^U_S`P`N_M^M]N]N^',
      3408: ' 50J[LHMINK RTFQGOINKNXMY RPIOKOYPZ RTFRGQHPKPXQYRY RMYOZP[SX RPPVMWOXSXWWZV\\T^Q` RUNVOWR RTNVQWTWWV[T^',
      3409: ' 39MWRFQGQHRISHSGRF RQGSH RQHSG ROOPOQPQYS[VX RPNRORXTZ RNPQMRNTO RSPTO RSPSXTYUY',
      3410: ' 45MWRFQGQHRISHSGRF RQGSH RQHSG ROOPOQPQ[P^O_M` RPNROR[Q] RNPQMRNTO RSPTO RSPS[R]P_M` RS[T]U^',
      3411: ' 63KYNHOIPK RUFSGQIPKPMOONP RPPPXOY RRIQKQM RQOPOQMQXSZ RUFSHRKRO RRPRXSYTY ROYQZR[UX RRLVIWJWLUNSO RUJVKVLUN RROWOWP RNPPP RRPWP',
      3412: ' 29MWOHPIQK RWFTGRIQKQXPY RSIRKRYTZ RWFUGTHSKSXTYUY RPYRZS[VX',
      3413: ' 74E_GOHOIPIXHYJ[ RHNJPJXIYJZKYJX RFPIMKOKXLYJ[ RNNPOQQQXPYR[ RPNQORQRXQYRZSYRX RKPNNPMRNSPSXTYR[ RVNWOYPYY[[^X RWNZPZX\\Z RSPVNXMYN[O\\O R[P\\O R[P[X\\Y]Y',
      3414: ' 49I[KOLOMPMXLYN[ RLNNPNXMYNZOYNX RJPMMOOOXPYN[ RRNSOUPUYW[ZX RSNVPVXXZ ROPRNTMUNWOXO RWPXO RWPWXXYYY',
      3415: ' 41J[NPNXMY ROPOXRZ RQOPPPXRYSZ RMYNYPZQ[TZ RNPQOVMWOXRXUWXVYTZ RUNVOWQ RTNVPWSWUVXTZ',
      3416: ' 57J[OJMLMNNQNXLZ RNYO` RNMNNOQO[ RNKNLONPQPXQXSYTZ RPYO` RSZQY RTZR[PY RNYLZ RPPVMWOXRXUWXVYTZ RUNVOWQ RTNVPWSWUVXTZ',
      3417: ' 43J[TMQNOONPMSMVNYO[UX RNWOYPZ RQNOPNSNUOXQZ RRNSOUPUXV` RSNVPV[ RTMUNWOXO RWPXO RWPWXV`',
      3418: ' 32KYNOOOPPPXOY RONQPQYSZ RMPPMRORXSYTY ROYQZR[UX RTNUPWOVMRO RUNVO',
      3419: ' 42LWXFWGUGSFQFPHPMOONP RVHTHRGQG RXFWHVITIRHQHPI RPKRP RPPPTQ` RQOPOQNQ[ RRPRTQ` RNPPP',
      3420: ' 37LXSIRLQNPONP RSISOVOVP RNPQP RSPVP RQPQXPY RROQORMRXTZ RSPSXTYUY RPYRZS[VX',
      3421: ' 47I[KOLOMPMXLY RLNNPNXPZ RJPMMOOOXQYRZ RLYMYOZP[RZUX RVMTOUPUYW[ZX RVPWOVNUOVPVXXZ RVMXOWPWXXYYY',
      3422: ' 47J[OKMMMONRNXMY RNNNOOROXRZ RNLNMOOPRPXRYSZ RMYNYPZQ[TZ RPPVMWOXRXUWXVYTZ RUNVOWQ RTNVPWSWUVXTZ',
      3423: ' 72F_KKIMIOJRJXIYK[ RJNJOKRKXJYKZLYKX RJLJMKOLRLXMYK[ RONQORQRXQY RQNROSQSXVZ RLPONQMSNTPTXVYWZ RQYRYTZU[XZ RTPZM[O\\R\\T[XZYXZ RYNZO[Q RXNZP[S[UZXXZ',
      3424: ' 44KZOOPOQPQXPXNYM[M]N_P`S`V_V^U^U_ RPNRPRXUZ RNPQMSOSXUYVZ RXYT[SZQYOYM[ RUNVPXOWMSO RVNWO',
      3425: ' 47J[OKMMMONRNXMY RNNNOOROYQZ RNLNMOOPRPXQYRY RMYOZP[SX RPPVMWOXSXWWZV\\T^Q` RUNVOWR RTNVQWTWWV[T^',
      3426: ' 43KYNPSMUNVPVRUTQV RSNUO RRNTOUQURTTSU RSUUWVYV]U_S`Q`O_N]N[OYQXWV RRVTWUY RQVTXUZU]T_S`',
      3427: ' 61JZRMPNMPMRNU RNPNROT RPNOOORPT RPNROTOVNWMWKVJTJ RQNSN RRMTNVN RNUVRWUWWVYR[ RUSVUVXUY RTSUUUXTZ RTZRYOYL[ RSZQZ RR[PZNZL[',
      3428: ' 78J[VFUGSGQFOFNHNMMOLP RTHRHPGOG RVFUHTIRIPHOHNI RNKPP RNPNTO` ROONOONO[ RPPPTO` RLPNP RPPUMWNXPXRWTSV RUNWO RTNVOWQWRVTUU RUUWVXXX[W]U_R` RUVWW RSVTVVWWYW\\V^',
      3429: ' 62J[PIOLNNMOKP RPIPXQYO[ ROONOONOXNYOZPYOX RKPNPNXMYO[ RPPUMWNXPXRWTSV RUNWO RTNVOWQWRVTUU RUUWVXXX[W]U_R` RUVWW RSVTVVWWYW\\V^',
      3501: ' 60G]LINGPFRFSGZW[X]X RQGRHYXZZ[YYX RNGPGQHXXYZZ[[[]X RLMMLOKPKQL RPLPM RMLOLPN RG[IYKXNXPY RJYNYOZ RG[JZMZN[PY RRJLX RNSVS',
      3502: '110F^HHJFMFOGQF RKGNG RHHJGLHOHQF RMKLLKNKOIOHPHRIQKQKW RLMLU RIPLP RMKMTLVKW RRIQJPLPU RQKQS RRIRRQTPU RRIXFZG[I[KYMUO RXGZIZK RVGXHYIYLWN RWNZP[R[X RYPZRZW RWNXOYQYX RJ[MYPXTXWY RLZOYTYVZ RJ[NZSZU[WYYX[X RUOUX RURYR RUUYU',
      3503: ' 69E]NGLHJJILHOHSIVJXMZP[S[VZXYZW[U RJKINISKWNYQZTZWY RNGLIKKJNJRKUNXQYTYWXYW[U RPJPV RQJQT RRIRSQUPV RPJRIUFWGYGZF RTGVHXH RSHUIWIYHZF RWIWX',
      3504: ' 72G^IFWFYGZIZX RKGWGYIYW RIFJGLHWHXIXX ROKNLMNMOKOJPJRKQMQMV RNMNT RKPNP ROKOSNUMV RI[LYOXSXVY RKZNYSYUZ RI[MZRZT[VYXXZX RRHRX RRMTNVNXM RRSTRVRXS',
      3505: ' 94G]IHKFMFOGQF RLGNG RIHKGMHOHQF RNKMLLNLOJOIPIRJQLQLW RMMMU RJPMP RNKNTMVLW RQMRJSHTGVFXF[G RTHVGXGZH RRJSIUHWHYI[G RQURRSPTOVOXP RTPVPWQ RRRSQUQVRXP RK[NYRXWX[Y RMZPYWYZZ RK[OZVZY[[Y RQMQX',
      3506: ' 91F]JHLFOFQGSF RMGPG RJHLGNHQHSF RPKOLNNNOLOKPKRLQNQNV ROMOT RLPOP RPKPSOUNV RSJSYRZQZMXKXIYG[ RTJTX RTPXP RPZOZMYJY RUIUOXO RXQUQUWTYP[N[LZJZG[ RSJUIXFZG\\G]F RWGYH[H RVHXIZI\\H]F RXIXW',
      3507: ' 87E^NGLHJJILHOHRIUJWLYNZQ[U[XZZX[V[SZQYPWOUO RJKINISJV RNGLIKKJNJSKVLXNZ RYXZWZSYQ RU[WZXYYWYSXQWPUO RPJPW RQJQU RRIRTQVPW RPJRIUFWGYGZF RTGVHXH RSHUIWIYHZF RYHUOU[ RUSYS RUVYV',
      3508: '112F^HHJFMFOGQF RKGNG RHHJGLHOHQF RMKLLKNKOIOHPHRIQKQKW RLMLU RIPLP RMKMTLVKW RJ[MYPXSXUY RLZOYRYTZ RJ[NZQZS[UY RRIQJPLPU RQKQS RRIRRQTPU RRITGVFXFZG RWGXGYH RTGVGXIZG RUOWNYLZM[P[TZXX[ RXMYNZPZUYX RWNXNYPYUX[ RUOUY RURYR RUUYU',
      3509: ' 67I\\LHNFQFTGVF ROGSG RLHNGQHTHVF RSKRLQNQOOONPNROQQQQV RRMRT ROPRP RSKSSRUQV RYHWJVMVXUZSZOXMXKYI[ RWKWW RRZQZOYLY RYHXJXVWXUZS[P[NZKZI[',
      3510: ' 65H\\LHNFQFTGVF ROGSG RLHNGQHTHVF RSKRLQNQOOONPNROQQQQV RRMRT ROPRP RSKSSRUQV RYHWJVMVXUZ RWKWW RYHXJXVWXUZR[O[LZJXJVKULUMVLWKW RJVMV',
      3511: '115F^HHJFMFOGQF RKGNG RHHJGLHOHQF RMKLLKNKOIOHPHRIQKQKW RLMLU RIPLP RMKMTLVKW RJ[MYPXSXUY RLZNYRYTZ RJ[NZQZS[UY RRIQJPLPU RQKQS RRIRRQTPU RRITGVFXFZG RWGXGYH RTGVGXIZG RUOXLYM[N RWMYN[N R[NYQWSUU RWSYTZX[Z\\Z RYVZZ RWSXTYZZ[[[\\Z RUOUY',
      3512: ' 85G]IHKFNFPGRF RLGOG RIHKGMHPHRF RNKMLLNLOJOIPIRJQLQLW RMMMU RJPMP RNKNTMVLW RK[NYRXWX[Y RMZPYWYZZ RK[OZVZY[[Y RSIRJQLQU RRKRS RSISRRTQU RSIUGWFYF[G RXGYGZH RUGWGYI[G RWGWX',
      3513: '107D`LJKKJMJOHOGPGRHQJQJU RKLKS RHPKP RLJLRKTJU RE[GYIXKXMYNYOX RHYKYMZ RE[GZJZL[M[NZOX RLJPFTJTWUYVY RPGSJSXRYSZTYSX RPPSP RNHOHRKROOO ROQRQRXQYS[VYWX RTJXF\\J\\W]Y^Y RXG[J[X]Z RXP[P RVHWHZKZOWO RWQZQZY\\[^Y ROHOX RWHWX',
      3514: ' 84E^GIIGKFMFOGQJVUXXYY RMGOIPKVWYZ RIGKGMHOKTVVYWZY[ RVHXIZI\\H]F RWGYH[H RVHXFZG\\G]F RKOIOHPHRIQKQ RIPKP RG[IYKXNXPY RJYMYOZ RG[JZMZN[PY RKGKX RYIY[ RRLSMUNWNYM RKTMSQSST',
      3515: ' 79E_NFLGJIIKHNHRIUJWLYNZQ[S[VZXYZW[U\\R\\N[KZIXGVFUGRIOJ RJJIMISJV RNFLHKJJMJSKVLXNZ RZV[S[MYIXH RVZXXYVZSZMYKWHUG ROJOW RPJPU RQJQTPVOW RUGUZ RUMWNXNZM RUSWRXRZS',
      3516: ' 70H^KFLGMIMOKOJPJRKQMQMYJ[MZMbO` RMHNJN` RKPNP RKFMGNHOJO` ROKRIVFZJZX RVGYJYX RTHUHXKXY RRXUXXY RSYUYWZ RRZTZV[XYZX RRIR_ RRMTNVNXM RRSTRVRXS',
      3517: ' 99E_NFLGJIIKHNHRIUJWLYNZP[T[VZXYZW[U\\R\\N[KZIXGVFUGRIOJ RJJIMISJV RNFLHKJJMJSKVLXNZ RZV[S[MYIXH RVZXXYVZSZMYKWHUG ROJOW RPJPU RQJQTPVOW RUGUZ RUMWNXNZM RUSWRXRZS RP[QZRZT[X`Za[a RT\\V_XaYa RRZS[VaXbZb[a',
      3518: '108F^HHJFMFOGQF RKGNG RHHJGLHOHQF RMKLLKNKOIOHPHRIQKQKW RLMLU RIPLP RMKMTLVKW RJ[MYPXRXUY RLZNYRYTZ RJ[NZQZS[UY RRIQJPLPU RQKQS RRIRRQTPU RRIUGWFYGZIZLYNXOTQRR RWGXGYIYMXN RUGWHXJXMWOTQ RTQVRWSZX[Y\\Y RWTYX[Z RTQVSXYZ[\\Y',
      3519: ' 94G^UITHRGOF RVHTG RWGSFOFLGKHJJKLLMONWNYOZPZRYU RKKLLOMXMZN[O[QZS RKHKJLKOLYL[M\\O\\QYUU[ RIOJPLQUQVRVSUU RJQLRTRUS RIOIPJRLSSSUTUU RI[LYPXSXVY RKZNYRYUZ RI[MZRZU[ RWGUISL RRNPQ ROSMUKVJVJUKV',
      3520: ' 71E]JJILHOHSIVKYMZP[S[VZXYZW[U RISJVLXNYQZTZWY RJJIMIQJTLWNXQYTYWXYW[U RHIIGKFOFUGYG[F RPGTHXH RHIIHKGNGTIWIYH[F RSIRJPKPV RQKQT RRJRSQUPV RWIWX',
      3521: ' 89F^HHJFLFOGQF RKGNG RHHJGMHOHQF RKJJLIOISJVKXMZP[S[VZXYZ[\\Y RJSKVNYQZTZ RKJJNJQKTLVNXQYUYXX RUIQJPLPV RQKQT RRJRSQUPV RUIWHYFZG\\HZIZW[Y\\Y RYIZHYGXHYIYX[Z RWHXIXX RUIUY RUNXN RURXR',
      3522: ' 72G^JFKGLILOJOIPIRJQLQLXJY RLHMJMX RJPMP RNYQYSZ RJFLGMHNJNXRXUY RJYMYPZR[UYXXZX RRJUIWHYFZG\\HZIZX RYIZHYGXHYIYW RWHXIXX RRJRX RRMTNVNXM RRSTRVRXS',
      3523: ' 95E`HFIGJIJOHOGPGRHQJQJXHY RJHKJKX RHPKP RLYNYPZ RHFJGKHLJLXOXQY RHYKYNZO[QYTXVYW[YY\\X ROHRFTHTXWXYY RRGSHSX ROHQHRIRXQY RWYXZ RWHZF\\H\\X RZG[H[X RWHYHZIZXYY ROHOX RWHWX RONRN RORRR RWNZN RWRZR',
      3524: ' 65G]HIJGLFNFOGWYXZZZ RMGNHVYWZ RJGLGMHUZV[X[ZZ\\X RWFYG[G\\F RWGXHZH RVHWIYI[H\\F RH[IYKXMXNY RJYLYMZ RH[IZKZM[ RWFSO RQRM[ RLPPP RSPXP',
      3525: ' 86G^JFKGLILOJOIPIRJQLQLXJY RLHMJMX RJPMP RNYQYSZ RJFLGMHNJNXRXUY RJYMYPZR[UYXX RRJUIWHYFZG\\HZIZ^Y`WbUaQ`L` RYIZHYGXHYIYY RWHXIXXZ[ RXaV`S` RY`V_P_L` RRJRX RRMTNVNXM RRSTRVRXS',
      3526: ' 57H\\XGWIROOSMWJ[ RVKNV RZFWJUNRRMXLZ RJHLFOGUGZF RKGOHSHWG RJHNIRIVHXG RLZNYRXVXZY RMZQYUYYZ RJ[OZUZX[ZY RMPQP RTPXP',
      3601: ' 53J[PRNTMVMXNZP[RYUX RMVNXOYQZ RNTNVOXQYRY RNPPPSOUNVMXOWPWXXYYY RONNOQO RTOWOVNVYWZ RMOOMPNROUPUYW[YY RMORT',
      3602: ' 44I[LHMJMXKY RNJMHNGNXQZ RLHOFOXQYRZ RKYMYOZP[RZUYWY ROPROTNUMVNXOYOWPWY RTNVOVX RROSOUPUY',
      3603: ' 35JXNONXLYMYOZP[ ROOOYQZ RPOPXRYSYQZP[ RNORNTMUNWOXO RSNTOVO RPORNTPVPXO',
      3604: ' 41IZRMPNMOMXKY RNONXQZ RRMOOOXQYRZ RKYMYOZP[RZUYWY RMHPFQIWOWY RPINHOGPIVOVX RMHUPUY',
      3605: ' 32JXNONXLYMYOZP[ ROOOYQZ RPOPXRYSYQZP[ RNORNTMWQURPU RSNVQ RPORNUR',
      3606: ' 41JWNHNXLYMYOZP[ ROHOYQZ RPHPXRYSYQZP[ RNHQGSFTGVHWH RRGSHUH RPHQGSIUIWH RKMNM RPMTM',
      3607: ' 56I[MOMXKYLYNZO[PZRYUX RNPNYPZ ROOOXQYRY RMOOORNTMUNWOYOWPW\\V_TaRbQaO`M` RSNVPV\\ RSaQ`P` RRNSOUPUZV]V_ RTaS`Q_O_M`',
      3608: ' 47I[LHMJMXKYLYNZO[ RNJMHNGNYPZ RLHOFOXQYO[ ROPROTNUMVNXOYOWPWYU[T] RTNVOVYU[ RROSOUPUYT]T`UbVbT`',
      3609: ' 35MWRFPHRITHRF RRGQHSHRG RRMQNOOQPQYS[UY RRPSORNQORPRYSZ RRMSNUOSPSXTYUY',
      3610: ' 39MWRFPHRITHRF RRGQHSHRG RRMQNOOQPQYS[T] RRPSORNQORPRYS[ RRMSNUOSPSYT]T`RbPbPaRb',
      3611: ' 50IZLHMJMXKYLYNZO[ RNJMHNGNYPZ RLHOFOXQYO[ ROPRNTMVPSROU RSNUP RRNTQ RSRTSVXWYXY RSSTTUYVZ RRSSTTYV[XY',
      3612: ' 22MWPHQJQXOYPYRZS[ RRJQHRGRYTZ RPHSFSXUYVYTZS[',
      3613: ' 67E_GOHOIPIXGYHYJZK[ RINJOJYLZ RGOIMKOKXMYK[ RKPNOPNQMSOSXUYS[ RPNRORYTZ RNOOOQPQXPYRZS[ RSPVOXNYMZN\\O]O[P[X\\Y]Y RXNZOZY[Z RVOWOYPYY[[]Y',
      3614: ' 45I[KOLOMPMXKYLYNZO[ RMNNONYPZ RKOMMOOOXQYO[ ROPROTNUMVNXOYOWPWXXYYY RTNVOVYWZ RROSOUPUYW[YY',
      3615: ' 40I[MOMXKY RNPNXQZ ROOOXQYRZ RKYMYOZP[RZUYWY RMOOORNTMUNWOYOWPWY RSNVPVX RRNSOUPUY',
      3616: ' 54I[LMMOMXKYMYMb RMNNONaO`N^ RNYOYQZ RLMNNOOOXQYRZ ROZP[RZUYWY ROZO^P`Mb ROPROTNUMVNXOYOWPWY RTNVOVX RROSOUPUY',
      3617: ' 44I[MOMXKY RNPNYPZ ROOOXQYRY RKYLYNZO[PZRYUX RMOOORNTMUNWOYOWPWb RSNVPVaU`V^ RRNSOUPU^T`Wb',
      3618: ' 38JXLOMONPNXLYMYOZP[ RMNOOOYQZ RLONMPOPXRYSYQZP[ RPOTMUNWOXO RSNTOVO RRNTPVPXO',
      3619: ' 59JZMOMSOTUTWUWY RNONS RVUVY RPNOOOSQT RSTUUUYTZ RMOPNRMTNVNWM RQNSN RPNROTOVN RWYTZR[PZNZL[ RSZQZ RTZRYOYL[ RWMVOTROWL[',
      3620: ' 28MWPHQJQXOYPYRZS[ RRJQHRGRYTZ RPHSFSXUYVYTZS[ RNMQM RSMVM',
      3621: ' 47I[KOLOMPMXKY RLNNONYPZ RKOMMOOOXQYRY RKYLYNZO[PZRYUX RUMVNXOYOWPWXXYYY RTNVOVYWZ RUMSOUPUYW[YY',
      3622: ' 36I[LMMOMXP[RYUXWX RMNNONXQZ RLMNNOOOWPXRY RUMVNXOYOWPWX RTNVOVW RUMSOUPUX',
      3623: ' 57E_HMIOIXL[NYQX RINJOJXMZ RHMJNKOKWLXNY RQMOOQPQXT[VYYX[X RPNRORXUZ RQMRNTOSPSWTXVY RYMZN\\O]O[P[X RXNZOZW RYMWOYPYX',
      3624: ' 59H[KOLONPOQSYTZV[XY RMNOOTYVZ RKOMMONPOTWUXWYXY RRSUMVNXNYM RUNVOWO RTOVPXOYM RQUN[MZKZJ[ RNZMYLY ROYMXKYJ[ RMTPT RSTVT',
      3625: ' 60I[KOLOMPMXKY RLNNONYPZ RKOMMOOOXQYRY RKYLYNZO[PZRYUX RUMVNXOYOWPW\\V_TaRbQaO`M` RTNVOV\\ RSaQ`P` RUMSOUPUZV]V_ RTaS`Q_O_M`',
      3626: ' 38I[XML[ RLONPQPTOXM RMNOOSO RLONMPNTNXM RL[PYSXVXXY RQYUYWZ RL[PZTZV[XY RNTVT',
      3700: ' 42H\\LHLXJY RMIMXPZ RNHNXPYQZ RLHNHSGUF RSGTHVIVY RTGWIWX RUFVGXHZHXIXY RJYLYNZO[QZVYXY',
      3701: ' 27H\\OHPIQKQXOY RQIPHQGRIRYTZ ROHRFSHSXUYVY ROYPYRZS[TZVY',
      3702: ' 48H\\LHNHPGQFSGVHXH RPHRG RLHNIPIRHSG RVHVP RWIWO RXHXPQPNQLSKVK[ RK[OYSXVXZY RNZQYVYYZ RK[PZUZX[ZY',
      3703: ' 57H\\LHMHOGPFRGVHXH ROHQG RLHNIPIRG RVHVO RWIWN RXHXOVOSPQQ RQPSQVRXRXY RWSWX RVRVY RKYMXOXQYRZ ROYQZ RKYMYOZP[RZVYXY',
      3704: ' 41H\\UFKPKUTU RVUZU[V[TZU RLPLT RMNMU RTGTXRY RUJVHUGUYWZ RUFWHVJVXXYYY RRYSYUZV[WZYY',
      3705: ' 53H\\LFLO RLFXF RMGVG RLHUHWGXF RVLUMSNOOLO RSNTNVOVY RUMWNWX RVLWMYNZNXOXY RKYMXOXQYRZ ROYQZ RKYMYOZP[RZVYXY',
      3706: ' 59H\\LHLXJY RMIMXPZ RNHNXPYQZ RLHNHRGTFUGWHXH RSGUH RRGTIVIXH RNPOPSOUNVM RSOTOVPVY RUNWPWX RVMWNYOZOXPXY RJYLYNZO[QZVYXY',
      3707: ' 38H\\KHMFPGUGZF RLGOHTHWG RKHOIRIVHZF RZFYHWKSOQRPUPXQ[ RRQQTQWRZ RUMSPRSRVSYQ[',
      3708: ' 71H\\LILO RMJMN RNINO RLINISHUGVF RSHTHVIVO RUGWHWN RVFWGYHZHXIXO RLONOVRXR RXOVONRLR RLRLXJY RMSMXPZ RNRNXPYQZ RVRVY RWSWX RXRXY RJYLYNZO[QZVYXY',
      3709: ' 60H\\LHLQJR RMIMROS RNHNQPRQR RLHNHSGUF RSGTHVIVY RTGWIWX RUFVGXHZHXIXY RJRKRMSNTOSQRUQVQ RKYMXOXQYRZ ROYQZ RKYMYOZP[RZVYXY',
      3710: ' 11LXRXPZR[TZRX RRYQZSZRY',
      3711: ' 14LXR^R\\PZRXSZS\\R^P_ RRYQZR[RY',
      3712: ' 22LXRMPORPTORM RRNQOSORN RRXPZR[TZRX RRYQZSZRY',
      3713: ' 25LXRMPORPTORM RRNQOSORN RR^R\\PZRXSZS\\R^P_ RRYQZR[RY',
      3714: ' 30LXRFQGOHQIRT RRISHRGQHRIRT RRFSGUHSIRT RRXPZR[TZRX RRYQZSZRY',
      3715: ' 51I[LJMHNGQFSFVGWHXJXLWNUPSQ RMJNH RVHWIWMVN RLJNKNIOGQF RSFUGVIVMUOSQ RRQRTSQQQRT RRXPZR[TZRX RRYQZSZRY',
      3716: ' 14LXTFRGQIQKRMTKRIRG RRJRLSKRJ',
      3717: ' 14LXRLRJPHRFSHSJRLPM RRGQHRIRG',
      3718: ' 62E_YNZO[O\\N RXOYP[P RXPYQZQ[P\\N RYNST RRUL[HVNP ROOSKOFJLPRTXVZX[Z[[Z\\X RLZIV RRKOG RKLPQTWVYXZ[Z RMZIU RRLNG RKKQQUWVXXY[Y\\X',
      3719: ' 60H\\PBP_ RTBT_ RTFVGWIWKYJXHWGTFPFMGKIKLLNOPURWSXUXXWZ RXJWH RLLMNOOUQWRXT RMYLW RMGLILKMMONUPXRYTYWXYWZT[P[MZLYKWMVMXNZP[',
      3720: '  8G^[BIbJb R[B\\BJb',
      3721: ' 27KYUBSDQGOKNPNTOYQ]S`Ub RQHPKOOOUPYQ\\ RSDRFQIPOPUQ[R^S`',
      3722: ' 27KYOBQDSGUKVPVTUYS]Q`Ob RSHTKUOUUTYS\\ RQDRFSITOTUS[R^Q`',
      3723: ' 39JZRFQGSQRR RRFRR RRFSGQQRR RMINIVOWO RMIWO RMIMJWNWO RWIVINOMO RWIMO RWIWJMNMO',
      3724: '  8F_JQ[Q[R RJQJR[R',
      3725: ' 16F_RIRZSZ RRISISZ RJQ[Q[R RJQJR[R',
      3726: ' 16F_JM[M[N RJMJN[N RJU[U[V RJUJV[V',
      3727: ' 11NWSFRGRM RSGRM RSFTGRM',
      3728: ' 22I[NFMGMM RNGMM RNFOGMM RWFVGVM RWGVM RWFXGVM',
      3729: ' 30KYQFOGNINKOMQNSNUMVKVIUGSFQF RQFNIOMSNVKUGQF RSFOGNKQNUMVISF',
      3801: ' 52E_NHLIJKIMHPHSIUKV RJLIOISJU RNHLJKLJOJRKVKXJZH[ RVHXHXYVY RYHYY RZGZZ RHFKGQHVHZG\\F RJPXP RH[KZQYVYZZ\\[',
      3802: ' 65E_LGLZ RMGMZ RPFNGNZP[ RHJJHLGPFUFXGZIZKYM RXHYIYKXM RUFWGXIXKWL RQUOTNRNPONPMSLVLYM[O\\Q\\T[WYYWZT[P[LZJYHW RZO[Q[UZW RVLYNZQZUYXWZ',
      3803: ' 60E_\\F[HZJXHVGSFQFNGLHJJILHOHRIUJWLYNZQ[S[VZXYZW[Y\\[ R[HZMZT[Y RZKYJ RZNYKXIVG RJKINISJV RNGLIKKJNJSKVLXNZ RYWZV RVZXXYVZS',
      3804: ' 46E_KGKZ RLGLZ RNFMGMZN[ RHKIIKGNFSFVGXHZJ[L\\O\\R[UZWXYVZS[N[KZIXHV RZK[N[SZV RVGXIYKZNZSYVXXVZ',
      3805: ' 86E_\\F[HZJXHVGSFQFNGLHJJILHOHRIUJWLYNZQ[S[VZXYZW[Y\\[ R[HZMZT[Y RZKYJ RZMXIVG RJKINISJV RNGLIKKJNJSKVLXNZ RYWZV RVZXXYVZS RJPKONOUQXQZP RPPRQURWRYQ RMORRUSWSYRZP RZMYLXLWMXNYM',
      3806: ' 69E_JHJZ RMGKHKY ROFMGLILYNY RHJJHLGOFSFVGXHYI\\F R\\F[HZLZO[S\\U RZIYK RVGXIYLZO RLPMOOOTPWPYO RQPTQVQXP RNOTRVRXQYOYLXKWKVLWMXL RH[JZNYSYYZ\\[',
      3807: ' 90E_\\F[HZJXHVGSFQFNGLHJJILHOHRIUJWLYNZQ[T[VZXYYXZV[Y\\[ R[HZMZT[Y RZKYJ RZNYKXIVG RJKINISJV RNGLIKKJNJSKVLXNZ RXXYVYR RVZWYXVXQ RKSLRMSLTKTJS RJPKNMMOMRNUPWQ RKOMNONROTP RJPLOOOUQYQZP',
      3808: ' 50E_JGJZH[ RKHKZ RNHLHLZ RHFJGNHSHYG\\F RLPMNOLRKVKYL[N\\Q\\T[UYV RZN[P[SZU RVKXLYMZOZSYVYXZZ\\[ RH[LZPZU[',
      3809: ' 23E_QIQY RRJRX RSISY RHFLHPITIXH\\F RH[KZOYUYYZ\\[',
      3810: ' 42E_TIVIVXUZS[ RWIWXVY RXHXY RHFLHPITIXH\\F RIOHQHUIXKZN[S[VZXYZW\\T RIUJXKY RHSJUKXLZN[',
      3811: ' 70E_JGJZH[ RKHKZ RNHLHLZ RHFJGNHSHYG\\F RLPMNOLRKUKXLYMYOXPSRQSPTPUQVRUQT RWLXMXOWP RUKWMWOVPSR RSRVRYSZUZWYX RWSYUYW RSRVSXUYXZZ[[\\[ RH[LZPZU[',
      3812: ' 45E_JGJZ RKHKY RNHLHLYNY R\\KZNYPXSXUYW[X RZOYRYUZW R\\K[MZQZT[X\\[ RHFJGNHSHYG\\F RH[JZNYSYYZ\\[',
      3813: ' 68E_QIQY RRJRX RSISY RNYLWJVIUHRHMIJKHMGPFTFWGYH[J\\M\\R[UZVXWVY RJUIRIMJJ RLWKUJRJLKIMG RZJ[M[RZU RWGYIZLZRYUXW RHFLHPITIXH\\F RH[KZOYUYYZ\\[',
      3814: ' 48E_JHJZH[ RLHKIKZ ROFMGLILZ RHJJHLGOFSFVGXHZJ[L\\O\\S[UYV RZK[N[RZU RVGXIYKZNZRYVYXZZ[[\\[ RH[LZPZU[',
      3815: ' 54E_QFNGLHJJILHOHRIUJWLYNZQ[S[VZXYZW[U\\R\\O[LZJXHVGSFQF RJKINISJV RNGLIKKJNJSKVLXNZ RZV[S[NZK RVZXXYVZSZNYKXIVG',
      3816: ' 51E_JIJZ RMHKJKY RQFOGMILKLYNY RHKJINGQFTFWGYH[J\\M\\O[RYTVURUOTMRLO RZJ[L[PZR RWGYIZLZPYSVU RH[JZNYSYYZ\\[',
      3817: ' 74E_QFNGLHJJILHOHRIUJWLYNZQ[S[VZXYZW[U\\R\\O[LZJXHVGSFQF RJKINISJV RNGLIKKJNJSKVLXNZ RZV[S[NZK RVZXXYVZSZNYKXIVG RJSKUNVTW[W\\X\\Z[[[Z\\Y RPWRW RKUNWQXSXTW',
      3818: ' 69E_JIJZH[ RKIKZ RLHLZ RHKJILHNGQFUFYG[I\\K\\N[PZQ RYHZI[K[NZP RUFWGYIZKZOYQ RXRUSRSPRPPROUOXPZR\\U\\W[XZX RXQYR[V[WZT RTOVPXRYTZX[Z\\[ RH[LZPZU[',
      3819: ' 94E_TFZG\\F[H[JYHWGTFPFMGJJIMIOJRLTOURUTTUSVQVP R[GZH[J RJPKRLSOTRTTS RKIJKJNKPMRPSRSTRVPWOXO RLQMQNPPNRMUMWNYPZRZUYXWZ RPMRLULXMZO[R[UZW RIWJYIZ RNPNOOMPLRKUKXL[O\\R\\T[WYYWZT[P[MZKYIWIYH[JZP[',
      3820: ' 66E_QHMHKIJJILHOHSIVJXKYMZP[S[VZXYZW[U\\R\\N[KYIWH RUHTITKULVKUJ RISJVLXNYQZTZWY RJJINIQJTLWNXQYTYWXYW[T\\R RHFKI RKHLG RIGJGKFMGQHWHZG\\F',
      3821: ' 51E_LHJJILHOHRIUJWLYNZQ[U[XZZY RKJJLIOISJV RKILJLKKMJPJSKVLXNZ RVHXHXXWZU[ RYHYXXY RZGZY\\[ RHFKGQHVHZG\\F',
      3822: ' 31E_HFR[ RIGJHQWRY RJGKHRWSX R\\FR[ RWNUS RYLUQTTTV RHFJGOHUHZG\\F',
      3823: ' 67E_LHJJILHOHRIUJWLYNZQ[S[VZXYZW[U\\R\\O[LZJXH RJLIOIRJUKW RJJKKKLJOJRKVLXNZ RYWZU[R[OZL RVZXXYVZRZOYLYKZJ RQIQ[ RRJRZ RSIS[ RHFLHPITIXH\\F',
      3824: ' 41E_HFXYYZ RIGKHZZ RLH\\[ R\\FSP RQRJZ RPSMULW RQRMTLUKWKY RHFLHPITIXH\\F RH[JZNYSYYZ\\[',
      3825: ' 47E_XHXZ RYHYY RZGZY RKHIJHMHPISKUMVPWSWVVXU RLUOVUV RHPIRKTNUTUVV RHFLHPITIXH\\F RHWJYLZP[T[XZ\\X',
      3826: ' 73E_HFIGKHNHSFVFYGZIZKYM RXGYIYKXM RVFWGXIXL RXNTOROPNPLRKTKXL RTKVLWMVNTO RYM[O\\R\\T[WYYWZT[P[MZKYIWHTHRIOJNLMNMPNPPOQNPOO RXMZO[Q[UZW RXNYOZQZUYXWZ',
      3901: ' 42J[PQMTMXP[TY RNTNXPZ ROROWRZ RRSMNNMONNO RONSNUMWOWXXY RUNVOVXUYVZWYVX RSNUPUXTYV[XY',
      3902: ' 31IZNHLFMJMXP[UYWX RNHNXPZ RNHPFOJOWRZ ROOTMWPWX RTNVPVX RRNUQUY',
      3903: ' 23KWNPNYP[RY ROPOYPZ RPOPXQYRY RNPTMVOTPRN RSNUO',
      3904: ' 32JZRMMPMXP[RZUYWY RNPNXPZ ROOOWRZ RPIPFQIWPWY RPIVPVX RPIMIPJUPUY',
      3905: ' 25KXNPNYP[RY ROPOYPZ RPOPXQYRY RNPTMWQPU RSNVQ RRNUR',
      3906: ' 32KWOIOXNYP[ RPIPXOYPZQYPX RQHQXRYP[ ROIUFWHUISG RTGVH RLMOM RQMUM',
      3907: ' 41J[MPMXP[UY RNPNXPZ ROOOWRZ RMPOOTMWPW]V_U`SaQaO`MaObQa RTNVPV]U_ RPaNa RRNUQU^T`Sa',
      3908: ' 42I[NHLFMJMXLYN[ RNHNXMYNZOYNX RNHPFOJOXPYN[ ROORNTMWPWYT]T`UbVbT` RTNVPVYU[ RRNUQUZT]',
      3909: ' 37MWRFPHRJTHRF RRGQHRISHRG RRMPOQPQXPYR[ RRPSORNQORPRXQYRZSYRX RRMTOSPSXTYR[',
      3910: ' 37MWRFPHRJTHRF RRGQHRISHRG RRMPOQPQYT] RRPSORNQORPRYS[ RRMTOSPSZT]T`RbPaPbRb',
      3911: ' 51IZNHLFMJMXLYN[ RNHNXMYNZOYNX RNHPFOJOXPYN[ ROPRNTMVPSROU RSNUP RRNTQ RRSSTTYV[XY RSSTUUYVZ RSRTSVXWYXY',
      3912: ' 21MWRHPFQJQXPYR[ RRHRXQYRZSYRX RRHTFSJSXTYR[',
      3913: ' 66E_GOHOIPIXHYJ[ RINJOJXIYJZKYJX RGOIMKOKXLYJ[ RKONNPMSOSXTYR[ RPNRORXQYRZSYRX RNNQPQXPYR[ RSOVNXM[O[X\\YZ[ RXNZOZXYYZZ[YZX RVNYPYXXYZ[',
      3914: ' 44I[KOLOMPMXLYN[ RMNNONXMYNZOYNX RKOMMOOOXPYN[ ROORNTMWOWXXYV[ RTNVOVXUYVZWYVX RRNUPUXTYV[',
      3915: ' 28JZMPMXP[UYWX RNPNXPZ ROOOWRZ RMPOOTMWPWX RTNVPVX RRNUQUY',
      3916: ' 47IZLMMOMXKYMYM_LbN` RNON` RLMNNOOOXQYRZ RNYOYQZ ROZP[UYWX ROZO_PbN` ROORNTMWPWX RTNVPVX RRNUQUY',
      3917: ' 31J[MPMXP[UY RNPNXPZ ROOOWRZ RMPOOTMWPW_XbV` RTNVPV` RRNUQU_TbV`',
      3918: ' 31KXMONOOPOXNYP[ RONPOPXOYPZQYPX RMOOMQOQXRYP[ RQOUMWOUPSN RTNVO',
      3919: ' 41JZMPMSOUURWTWX RNPNSOT ROOOSPT RUSVTVX RTSUTUY RMPSMVNTOQN RRNUN RWXQ[MYOXSZ ROYQZ',
      3920: ' 27MWRHPFQJQXPYR[ RRHRXQYRZSYRX RRHTFSJSXTYR[ RNMQM RSMVM',
      3921: ' 40I[KOLOMPMYP[UY RMNNONYPZ RKOMMOOOXRZ RVMXOWPWXXYYY RVPWOVNUOVPVYWZ RVMTOUPUYW[YY',
      3922: ' 36I[LMMOMXQ[SYWW RMNNONXQZ RLMNNOOOWRYSY RVMXOWPWW RVPWOVNUOVPVW RVMTOUPUX',
      3923: ' 59E_HMIOIXM[OYQX RINJOJXMZ RHMJNKOKWNYOY RRMPOQPQXU[WY[W RRPSORNQORPRXUZ RRMTOSPSWVYWY RZM\\O[P[W RZP[OZNYOZPZW RZMXOYPYX',
      3924: ' 39I[LONPUZV[XY RMNOOUYWZ RLONMONVXXY RXMVMVOXOXMVOSS RQUNYL[N[NYLYL[ RNTQT RSTVT',
      3925: ' 49I[KOLOMPMYP[UY RMNNONYPZ RKOMMOOOXRZ RVMXOWPW]V_U`SaQaO`MaObQa RVPWOVNUOVPV^U_ RPaNa RVMTOUPU^T`Sa',
      3926: ' 43L[RNOPOORNTMWOWSRU RTNVOVS RRNUPUSTT RRUWWW]V_U`SaQaO`MaObQa RVWV^U_ RPaNa RTVUWU^T`Sa'
    },
    B = {
      '\\frac': { glyph: 0, arity: 2, flags: {} },
      '\\binom': { glyph: 0, arity: 2, flags: {} },
      '\\sqrt': { glyph: 2267, arity: 1, flags: { opt: !0, xfl: !0, yfl: !0 } },
      '^': { glyph: 0, arity: 1, flags: {} },
      _: { glyph: 0, arity: 1, flags: {} },
      '(': { glyph: 2221, arity: 0, flags: { yfl: !0 } },
      ')': { glyph: 2222, arity: 0, flags: { yfl: !0 } },
      '[': { glyph: 2223, arity: 0, flags: { yfl: !0 } },
      ']': { glyph: 2224, arity: 0, flags: { yfl: !0 } },
      '\\langle': { glyph: 2227, arity: 0, flags: { yfl: !0 } },
      '\\rangle': { glyph: 2228, arity: 0, flags: { yfl: !0 } },
      '|': { glyph: 2229, arity: 0, flags: { yfl: !0 } },
      '\\|': { glyph: 2230, arity: 0, flags: { yfl: !0 } },
      '\\{': { glyph: 2225, arity: 0, flags: { yfl: !0 } },
      '\\}': { glyph: 2226, arity: 0, flags: { yfl: !0 } },
      '\\#': { glyph: 2275, arity: 0, flags: {} },
      '\\$': { glyph: 2274, arity: 0, flags: {} },
      '\\&': { glyph: 2273, arity: 0, flags: {} },
      '\\%': { glyph: 2271, arity: 0, flags: {} },
      '\\begin': { glyph: 0, arity: 1, flags: {} },
      '\\end': { glyph: 0, arity: 1, flags: {} },
      '\\left': { glyph: 0, arity: 1, flags: {} },
      '\\right': { glyph: 0, arity: 1, flags: {} },
      '\\middle': { glyph: 0, arity: 1, flags: {} },
      '\\cdot': { glyph: 2236, arity: 0, flags: {} },
      '\\pm': { glyph: 2233, arity: 0, flags: {} },
      '\\mp': { glyph: 2234, arity: 0, flags: {} },
      '\\times': { glyph: 2235, arity: 0, flags: {} },
      '\\div': { glyph: 2237, arity: 0, flags: {} },
      '\\leqq': { glyph: 2243, arity: 0, flags: {} },
      '\\geqq': { glyph: 2244, arity: 0, flags: {} },
      '\\leq': { glyph: 2243, arity: 0, flags: {} },
      '\\geq': { glyph: 2244, arity: 0, flags: {} },
      '\\propto': { glyph: 2245, arity: 0, flags: {} },
      '\\sim': { glyph: 2246, arity: 0, flags: {} },
      '\\equiv': { glyph: 2240, arity: 0, flags: {} },
      '\\dagger': { glyph: 2277, arity: 0, flags: {} },
      '\\ddagger': { glyph: 2278, arity: 0, flags: {} },
      '\\ell': { glyph: 662, arity: 0, flags: {} },
      '\\vec': { glyph: 2261, arity: 1, flags: { hat: !0, xfl: !0, yfl: !0 } },
      '\\overrightarrow': {
        glyph: 2261,
        arity: 1,
        flags: { hat: !0, xfl: !0, yfl: !0 }
      },
      '\\overleftarrow': {
        glyph: 2263,
        arity: 1,
        flags: { hat: !0, xfl: !0, yfl: !0 }
      },
      '\\bar': { glyph: 2231, arity: 1, flags: { hat: !0, xfl: !0 } },
      '\\overline': { glyph: 2231, arity: 1, flags: { hat: !0, xfl: !0 } },
      '\\widehat': {
        glyph: 2247,
        arity: 1,
        flags: { hat: !0, xfl: !0, yfl: !0 }
      },
      '\\hat': { glyph: 2247, arity: 1, flags: { hat: !0 } },
      '\\acute': { glyph: 2248, arity: 1, flags: { hat: !0 } },
      '\\grave': { glyph: 2249, arity: 1, flags: { hat: !0 } },
      '\\breve': { glyph: 2250, arity: 1, flags: { hat: !0 } },
      '\\tilde': { glyph: 2246, arity: 1, flags: { hat: !0 } },
      '\\underline': { glyph: 2231, arity: 1, flags: { mat: !0, xfl: !0 } },
      '\\not': { glyph: 2220, arity: 1, flags: {} },
      '\\neq': { glyph: 2239, arity: 1, flags: {} },
      '\\ne': { glyph: 2239, arity: 1, flags: {} },
      '\\exists': { glyph: 2279, arity: 0, flags: {} },
      '\\in': { glyph: 2260, arity: 0, flags: {} },
      '\\subset': { glyph: 2256, arity: 0, flags: {} },
      '\\supset': { glyph: 2258, arity: 0, flags: {} },
      '\\cup': { glyph: 2257, arity: 0, flags: {} },
      '\\cap': { glyph: 2259, arity: 0, flags: {} },
      '\\infty': { glyph: 2270, arity: 0, flags: {} },
      '\\partial': { glyph: 2265, arity: 0, flags: {} },
      '\\nabla': { glyph: 2266, arity: 0, flags: {} },
      '\\aleph': { glyph: 2077, arity: 0, flags: {} },
      '\\wp': { glyph: 2190, arity: 0, flags: {} },
      '\\therefore': { glyph: 740, arity: 0, flags: {} },
      '\\mid': { glyph: 2229, arity: 0, flags: {} },
      '\\sum': { glyph: 2402, arity: 0, flags: { big: !0 } },
      '\\prod': { glyph: 2401, arity: 0, flags: { big: !0 } },
      '\\bigoplus': { glyph: 2284, arity: 0, flags: { big: !0 } },
      '\\bigodot': { glyph: 2281, arity: 0, flags: { big: !0 } },
      '\\int': { glyph: 2412, arity: 0, flags: { yfl: !0 } },
      '\\oint': { glyph: 2269, arity: 0, flags: { yfl: !0 } },
      '\\oplus': { glyph: 1284, arity: 0, flags: {} },
      '\\odot': { glyph: 1281, arity: 0, flags: {} },
      '\\perp': { glyph: 738, arity: 0, flags: {} },
      '\\angle': { glyph: 739, arity: 0, flags: {} },
      '\\triangle': { glyph: 842, arity: 0, flags: {} },
      '\\Box': { glyph: 841, arity: 0, flags: {} },
      '\\rightarrow': { glyph: 2261, arity: 0, flags: {} },
      '\\to': { glyph: 2261, arity: 0, flags: {} },
      '\\leftarrow': { glyph: 2263, arity: 0, flags: {} },
      '\\gets': { glyph: 2263, arity: 0, flags: {} },
      '\\circ': { glyph: 902, arity: 0, flags: {} },
      '\\bigcirc': { glyph: 904, arity: 0, flags: {} },
      '\\bullet': { glyph: 828, arity: 0, flags: {} },
      '\\star': { glyph: 856, arity: 0, flags: {} },
      '\\diamond': { glyph: 743, arity: 0, flags: {} },
      '\\ast': { glyph: 728, arity: 0, flags: {} },
      '\\log': { glyph: 0, arity: 0, flags: { txt: !0 } },
      '\\ln': { glyph: 0, arity: 0, flags: { txt: !0 } },
      '\\exp': { glyph: 0, arity: 0, flags: { txt: !0 } },
      '\\mod': { glyph: 0, arity: 0, flags: { txt: !0 } },
      '\\lim': { glyph: 0, arity: 0, flags: { txt: !0, big: !0 } },
      '\\sin': { glyph: 0, arity: 0, flags: { txt: !0 } },
      '\\cos': { glyph: 0, arity: 0, flags: { txt: !0 } },
      '\\tan': { glyph: 0, arity: 0, flags: { txt: !0 } },
      '\\csc': { glyph: 0, arity: 0, flags: { txt: !0 } },
      '\\sec': { glyph: 0, arity: 0, flags: { txt: !0 } },
      '\\cot': { glyph: 0, arity: 0, flags: { txt: !0 } },
      '\\sinh': { glyph: 0, arity: 0, flags: { txt: !0 } },
      '\\cosh': { glyph: 0, arity: 0, flags: { txt: !0 } },
      '\\tanh': { glyph: 0, arity: 0, flags: { txt: !0 } },
      '\\csch': { glyph: 0, arity: 0, flags: { txt: !0 } },
      '\\sech': { glyph: 0, arity: 0, flags: { txt: !0 } },
      '\\coth': { glyph: 0, arity: 0, flags: { txt: !0 } },
      '\\arcsin': { glyph: 0, arity: 0, flags: { txt: !0 } },
      '\\arccos': { glyph: 0, arity: 0, flags: { txt: !0 } },
      '\\arctan': { glyph: 0, arity: 0, flags: { txt: !0 } },
      '\\arccsc': { glyph: 0, arity: 0, flags: { txt: !0 } },
      '\\arcsec': { glyph: 0, arity: 0, flags: { txt: !0 } },
      '\\arccot': { glyph: 0, arity: 0, flags: { txt: !0 } },
      '\\text': { glyph: 0, arity: 1, flags: {} },
      '\\mathnormal': { glyph: 0, arity: 1, flags: {} },
      '\\mathrm': { glyph: 0, arity: 1, flags: {} },
      '\\mathit': { glyph: 0, arity: 1, flags: {} },
      '\\mathbf': { glyph: 0, arity: 1, flags: {} },
      '\\mathsf': { glyph: 0, arity: 1, flags: {} },
      '\\mathtt': { glyph: 0, arity: 1, flags: {} },
      '\\mathfrak': { glyph: 0, arity: 1, flags: {} },
      '\\mathcal': { glyph: 0, arity: 1, flags: {} },
      '\\mathbb': { glyph: 0, arity: 1, flags: {} },
      '\\mathscr': { glyph: 0, arity: 1, flags: {} },
      '\\rm': { glyph: 0, arity: 1, flags: {} },
      '\\it': { glyph: 0, arity: 1, flags: {} },
      '\\bf': { glyph: 0, arity: 1, flags: {} },
      '\\sf': { glyph: 0, arity: 1, flags: {} },
      '\\tt': { glyph: 0, arity: 1, flags: {} },
      '\\frak': { glyph: 0, arity: 1, flags: {} },
      '\\cal': { glyph: 0, arity: 1, flags: {} },
      '\\bb': { glyph: 0, arity: 1, flags: {} },
      '\\scr': { glyph: 0, arity: 1, flags: {} },
      '\\quad': { glyph: 0, arity: 0, flags: {} },
      '\\,': { glyph: 0, arity: 0, flags: {} },
      '\\.': { glyph: 0, arity: 0, flags: {} },
      '\\;': { glyph: 0, arity: 0, flags: {} },
      '\\!': { glyph: 0, arity: 0, flags: {} },
      '\\alpha': { glyph: 2127, flags: {} },
      '\\beta': { glyph: 2128, flags: {} },
      '\\gamma': { glyph: 2129, flags: {} },
      '\\delta': { glyph: 2130, flags: {} },
      '\\varepsilon': { glyph: 2131, flags: {} },
      '\\zeta': { glyph: 2132, flags: {} },
      '\\eta': { glyph: 2133, flags: {} },
      '\\vartheta': { glyph: 2134, flags: {} },
      '\\iota': { glyph: 2135, flags: {} },
      '\\kappa': { glyph: 2136, flags: {} },
      '\\lambda': { glyph: 2137, flags: {} },
      '\\mu': { glyph: 2138, flags: {} },
      '\\nu': { glyph: 2139, flags: {} },
      '\\xi': { glyph: 2140, flags: {} },
      '\\omicron': { glyph: 2141, flags: {} },
      '\\pi': { glyph: 2142, flags: {} },
      '\\rho': { glyph: 2143, flags: {} },
      '\\sigma': { glyph: 2144, flags: {} },
      '\\tau': { glyph: 2145, flags: {} },
      '\\upsilon': { glyph: 2146, flags: {} },
      '\\varphi': { glyph: 2147, flags: {} },
      '\\chi': { glyph: 2148, flags: {} },
      '\\psi': { glyph: 2149, flags: {} },
      '\\omega': { glyph: 2150, flags: {} },
      '\\epsilon': { glyph: 2184, flags: {} },
      '\\theta': { glyph: 2185, flags: {} },
      '\\phi': { glyph: 2186, flags: {} },
      '\\varsigma': { glyph: 2187, flags: {} },
      '\\Alpha': { glyph: 2027, flags: {} },
      '\\Beta': { glyph: 2028, flags: {} },
      '\\Gamma': { glyph: 2029, flags: {} },
      '\\Delta': { glyph: 2030, flags: {} },
      '\\Epsilon': { glyph: 2031, flags: {} },
      '\\Zeta': { glyph: 2032, flags: {} },
      '\\Eta': { glyph: 2033, flags: {} },
      '\\Theta': { glyph: 2034, flags: {} },
      '\\Iota': { glyph: 2035, flags: {} },
      '\\Kappa': { glyph: 2036, flags: {} },
      '\\Lambda': { glyph: 2037, flags: {} },
      '\\Mu': { glyph: 2038, flags: {} },
      '\\Nu': { glyph: 2039, flags: {} },
      '\\Xi': { glyph: 2040, flags: {} },
      '\\Omicron': { glyph: 2041, flags: {} },
      '\\Pi': { glyph: 2042, flags: {} },
      '\\Rho': { glyph: 2043, flags: {} },
      '\\Sigma': { glyph: 2044, flags: {} },
      '\\Tau': { glyph: 2045, flags: {} },
      '\\Upsilon': { glyph: 2046, flags: {} },
      '\\Phi': { glyph: 2047, flags: {} },
      '\\Chi': { glyph: 2048, flags: {} },
      '\\Psi': { glyph: 2049, flags: {} },
      '\\Omega': { glyph: 2050, flags: {} }
    }
  function me(l, t = 'math') {
    const e = l.charCodeAt(0)
    if (65 <= e && e <= 90) {
      const n = e - 65
      return t == 'text' || t == 'rm'
        ? n + 2001
        : t == 'tt'
          ? n + 501
          : t == 'bf' || t == 'bb'
            ? n + 3001
            : t == 'sf'
              ? n + 2501
              : t == 'frak'
                ? n + 3301
                : t == 'scr' || t == 'cal'
                  ? n + 2551
                  : n + 2051
    }
    if (97 <= e && e <= 122) {
      const n = e - 97
      return t == 'text' || t == 'rm'
        ? n + 2101
        : t == 'tt'
          ? n + 601
          : t == 'bf' || t == 'bb'
            ? n + 3101
            : t == 'sf'
              ? n + 2601
              : t == 'frak'
                ? n + 3401
                : t == 'scr' || t == 'cal'
                  ? n + 2651
                  : n + 2151
    }
    if (48 <= e && e <= 57) {
      const n = e - 48
      return t == 'it'
        ? n + 2750
        : t == 'bf'
          ? n + 3200
          : t == 'tt'
            ? n + 700
            : n + 2200
    }
    return {
      '.': 2210,
      ',': 2211,
      ':': 2212,
      ';': 2213,
      '!': 2214,
      '?': 2215,
      "'": 2216,
      '"': 2217,
      '*': 2219,
      '/': 2220,
      '-': 2231,
      '+': 2232,
      '=': 2238,
      '<': 2241,
      '>': 2242,
      '~': 2246,
      '@': 2273,
      '\\': 804
    }[l]
  }
  const Dt = {
    SUB_SUP_SCALE: 0.5,
    SQRT_MAG_SCALE: 0.5,
    FRAC_SCALE: 0.85,
    LINE_SPACING: 0.5,
    FRAC_SPACING: 0.4
  }
  function Ji(l) {
    l = l.replace(/\n/g, ' ')
    let t = 0
    const e = []
    let n = ''
    for (; t < l.length; )
      l[t] == ' '
        ? n.length && (e.push(n), (n = ''))
        : l[t] == '\\'
          ? n.length == 1 && n[0] == '\\'
            ? ((n += l[t]), e.push(n), (n = ''))
            : (n.length && e.push(n), (n = l[t]))
          : /[A-Za-z0-9\.]/.test(l[t])
            ? (n += l[t])
            : (n.length && n != '\\' && (e.push(n), (n = '')),
              (n += l[t]),
              e.push(n),
              (n = '')),
        t++
    return n.length && e.push(n), e
  }
  function xi(l) {
    return {
      type: B[l] ? 'symb' : 'char',
      mode: 'math',
      text: l,
      chld: [],
      bbox: null
    }
  }
  function xe(l) {
    let t = 0,
      e = { type: 'node', text: '', mode: 'math', chld: [], bbox: null }
    function n() {
      if (l[t] != '[') return null
      let s = 0,
        i = t
      for (; i < l.length; ) {
        if (l[i] == '[') s++
        else if (l[i] == ']' && (s--, !s)) break
        i++
      }
      const r = xe(l.slice(t + 1, i))
      return (t = i), r
    }
    function o(s) {
      let i = t,
        r = i,
        R = 0,
        c = 0
      const d = []
      for (; i < l.length; ) {
        if (l[i] == '{') R || (r = i), R++
        else if (l[i] == '}') {
          if ((R--, !R && (d.push(xe(l.slice(r + 1, i))), c++, c == s))) break
        } else if (R == 0 && (d.push(xi(l[i])), c++, c == s)) break
        i++
      }
      return (t = i), d
    }
    for (t = 0; t < l.length; t++) {
      const s = B[l[t]],
        i = { type: '', text: l[t], mode: 'math', chld: [], bbox: null }
      if (s)
        if (s.arity) {
          t++, (i.type = 'func')
          let r = null
          s.flags.opt && ((r = n()), r && t++)
          const R = o(s.arity)
          ;(i.chld = R), r && i.chld.push(r)
        } else i.type = 'symb'
      else
        l[t] == '{'
          ? ((i.type = 'node'), (i.text = ''), (i.chld = o(1)))
          : (i.type = 'char')
      e.chld.push(i)
    }
    return e.chld.length == 1 && (e = e.chld[0]), e
  }
  function Fn(l) {
    let t = 0
    for (; t < l.length; ) {
      if (l[t].text == '\\begin') {
        let e
        for (e = t; e < l.length && l[e].text != '\\end'; e++);
        const n = l.splice(t + 1, e - (t + 1))
        Fn(n),
          (l[t].text = l[t].chld[0].text),
          (l[t].chld = n),
          l.splice(t + 1, 1)
      }
      t++
    }
  }
  function Vt(l, t, e, n, o, s) {
    if ((e == null && (e = t), !!l.bbox)) {
      s && ((l.bbox.x *= t), (l.bbox.y *= e)), (l.bbox.w *= t), (l.bbox.h *= e)
      for (let i = 0; i < l.chld.length; i++) Vt(l.chld[i], t, e, 0, 0, !0)
      ;(l.bbox.x += n), (l.bbox.y += o)
    }
  }
  function fn(l) {
    let t = 1 / 0,
      e = -1 / 0,
      n = 1 / 0,
      o = -1 / 0
    for (let s = 0; s < l.length; s++)
      !l[s].bbox ||
        ((t = Math.min(t, l[s].bbox.x)),
        (n = Math.min(n, l[s].bbox.y)),
        (e = Math.max(e, l[s].bbox.x + l[s].bbox.w)),
        (o = Math.max(o, l[s].bbox.y + l[s].bbox.h)))
    return { x: t, y: n, w: e - t, h: o - n }
  }
  function vi(l) {
    if (!l.length) return null
    const t = fn(l)
    for (let n = 0; n < l.length; n++)
      !l[n].bbox || ((l[n].bbox.x -= t.x), (l[n].bbox.y -= t.y))
    return { type: 'node', text: '', mode: 'math', chld: l, bbox: t }
  }
  function Bi(l, t = 'center') {
    for (let c = 0; c < l.length; c++)
      if (l[c].text == '^' || l[c].text == "'") {
        let d = 0,
          h = c
        for (
          ;
          h > 0 && (l[h].text == '^' || l[h].text == '_' || l[h].text == "'");

        )
          h--
        ;(d = l[h].bbox.y),
          l[c].text == "'"
            ? (l[c].bbox.y = d)
            : (Vt(l[c], Dt.SUB_SUP_SCALE, null, 0, 0),
              B[l[h].text] && B[l[h].text].flags.big
                ? (l[c].bbox.y = d - l[c].bbox.h)
                : l[h].text == '\\int'
                  ? (l[c].bbox.y = d)
                  : (l[c].bbox.y = d - l[c].bbox.h / 2))
      } else if (l[c].text == '_') {
        let d = 1,
          h = c
        for (
          ;
          h > 0 && (l[h].text == '^' || l[h].text == '_' || l[h].text == "'");

        )
          h--
        ;(d = l[h].bbox.y + l[h].bbox.h),
          Vt(l[c], Dt.SUB_SUP_SCALE, null, 0, 0),
          B[l[h].text] && B[l[h].text].flags.big
            ? (l[c].bbox.y = d)
            : l[h].text == '\\int'
              ? (l[c].bbox.y = d - l[c].bbox.h)
              : (l[c].bbox.y = d - l[c].bbox.h / 2)
      }
    function e(c, d, h, u, g) {
      let T = c,
        P = g,
        O = 1 / 0,
        M = -1 / 0
      for (; u > 0 ? T < l.length : T >= 0; ) {
        if (l[T].text == d) P++
        else if (l[T].text == h) {
          if ((P--, P == 0)) break
        } else
          l[T].text == '^' ||
            l[T].text == '_' ||
            (l[T].bbox &&
              ((O = Math.min(O, l[T].bbox.y)),
              (M = Math.max(M, l[T].bbox.y + l[T].bbox.h))))
        T += u
      }
      return [O, M]
    }
    for (let c = 0; c < l.length; c++)
      if (l[c].text == '\\left') {
        const [d, h] = e(c, '\\left', '\\right', 1, 0)
        d != 1 / 0 &&
          h != -1 / 0 &&
          ((l[c].bbox.y = d), Vt(l[c], 1, (h - d) / l[c].bbox.h, 0, 0))
      } else if (l[c].text == '\\right') {
        const [d, h] = e(c, '\\right', '\\left', -1, 0)
        d != 1 / 0 &&
          h != -1 / 0 &&
          ((l[c].bbox.y = d), Vt(l[c], 1, (h - d) / l[c].bbox.h, 0, 0))
      } else if (l[c].text == '\\middle') {
        const [d, h] = e(c, '\\right', '\\left', -1, 1),
          [u, g] = e(c, '\\left', '\\right', 1, 1),
          T = Math.min(d, u),
          P = Math.max(h, g)
        T != 1 / 0 &&
          P != -1 / 0 &&
          ((l[c].bbox.y = T), Vt(l[c], 1, (P - T) / l[c].bbox.h, 0, 0))
      }
    if (!l.some(c => c.text == '&' || c.text == '\\\\')) return
    const n = []
    let o = [],
      s = []
    for (let c = 0; c < l.length; c++)
      l[c].text == '&'
        ? (o.push(s), (s = []))
        : l[c].text == '\\\\'
          ? (s.length && (o.push(s), (s = [])), n.push(o), (o = []))
          : s.push(l[c])
    s.length && o.push(s), o.length && n.push(o)
    const i = [],
      r = []
    for (let c = 0; c < n.length; c++) {
      const d = []
      for (let h = 0; h < n[c].length; h++) {
        const u = vi(n[c][h])
        u && ((i[h] = i[h] || 0), (i[h] = Math.max(u.bbox.w + 1, i[h]))),
          (d[h] = u)
      }
      r.push(d)
    }
    const R = []
    for (let c = 0; c < r.length; c++) {
      let d = 1 / 0,
        h = -1 / 0
      for (let u = 0; u < r[c].length; u++)
        !r[c][u] ||
          ((d = Math.min(d, r[c][u].bbox.y)),
          (h = Math.max(h, r[c][u].bbox.y + r[c][u].bbox.h)))
      R.push([d, h])
    }
    for (let c = 0; c < R.length; c++)
      (R[c][0] == 1 / 0 || R[c][1] == 1 / 0) &&
        ((R[c][0] = c == 0 ? 0 : R[c - 1][1]), (R[c][1] = R[c][0] + 2))
    for (let c = 1; c < r.length; c++) {
      const d = R[c - 1][1] - R[c][0] + Dt.LINE_SPACING
      for (let h = 0; h < r[c].length; h++) r[c][h] && (r[c][h].bbox.y += d)
      ;(R[c][0] += d), (R[c][1] += d)
    }
    l.splice(0, l.length)
    for (let c = 0; c < r.length; c++) {
      let d = 0
      for (let h = 0; h < r[c].length; h++) {
        const u = r[c][h]
        if (!u) {
          d += i[h]
          continue
        }
        ;(u.bbox.x += d),
          (d += i[h] - u.bbox.w),
          t == 'center'
            ? (u.bbox.x += (i[h] - u.bbox.w) / 2)
            : t == 'left' ||
              ((t == 'right' || (t == 'equation' && h != r[c].length - 1)) &&
                (u.bbox.x += i[h] - u.bbox.w)),
          l.push(u)
      }
    }
  }
  function wt(l, t = 'math') {
    var n, o, s
    const e =
      (n = {
        '\\text': 'text',
        '\\mathnormal': 'math',
        '\\mathrm': 'rm',
        '\\mathit': 'it',
        '\\mathbf': 'bf',
        '\\mathsf': 'sf',
        '\\mathtt': 'tt',
        '\\mathfrak': 'frak',
        '\\mathcal': 'cal',
        '\\mathbb': 'bb',
        '\\mathscr': 'scr',
        '\\rm': 'rm',
        '\\it': 'it',
        '\\bf': 'bf',
        '\\sf': 'tt',
        '\\tt': 'tt',
        '\\frak': 'frak',
        '\\cal': 'cal',
        '\\bb': 'bb',
        '\\scr': 'scr'
      }[l.text]) != null
        ? n
        : t
    if (!l.chld.length) {
      if (B[l.text])
        if (B[l.text].flags.big)
          l.text == '\\lim'
            ? (l.bbox = { x: 0, y: 0, w: 3.5, h: 2 })
            : (l.bbox = { x: 0, y: -0.5, w: 3, h: 3 })
        else if (B[l.text].flags.txt) {
          let i = 0
          for (let r = 1; r < l.text.length; r++)
            i += ne(me(l.text[r], 'text')).w
          ;(i /= 16), (l.bbox = { x: 0, y: 0, w: i, h: 2 })
        } else if (B[l.text].glyph) {
          let i = ne(B[l.text].glyph).w
          ;(i /= 16),
            l.text == '\\int' || l.text == '\\oint'
              ? (l.bbox = { x: 0, y: -1.5, w: i, h: 5 })
              : (l.bbox = { x: 0, y: 0, w: i, h: 2 })
        } else l.bbox = { x: 0, y: 0, w: 1, h: 2 }
      else {
        let i = 0
        for (let r = 0; r < l.text.length; r++)
          !ne(me(l.text[r], e)) ||
            (e == 'tt' ? (i += 16) : (i += ne(me(l.text[r], e)).w))
        ;(i /= 16), (l.bbox = { x: 0, y: 0, w: i, h: 2 })
      }
      l.mode = e
      return
    }
    if (l.text == '\\frac') {
      const i = l.chld[0],
        r = l.chld[1],
        R = Dt.FRAC_SCALE
      wt(i),
        wt(r),
        (i.bbox.x = 0),
        (i.bbox.y = 0),
        (r.bbox.x = 0),
        (r.bbox.y = 0)
      const c = Math.max(i.bbox.w, r.bbox.w) * R
      Vt(i, R, null, (c - i.bbox.w * R) / 2, 0),
        Vt(r, R, null, (c - r.bbox.w * R) / 2, i.bbox.h + Dt.FRAC_SPACING),
        (l.bbox = {
          x: 0,
          y: -i.bbox.h + 1 - Dt.FRAC_SPACING / 2,
          w: c,
          h: i.bbox.h + r.bbox.h + Dt.FRAC_SPACING
        })
    } else if (l.text == '\\binom') {
      const i = l.chld[0],
        r = l.chld[1]
      wt(i),
        wt(r),
        (i.bbox.x = 0),
        (i.bbox.y = 0),
        (r.bbox.x = 0),
        (r.bbox.y = 0)
      const R = Math.max(i.bbox.w, r.bbox.w)
      Vt(i, 1, null, (R - i.bbox.w) / 2 + 1, 0),
        Vt(r, 1, null, (R - r.bbox.w) / 2 + 1, i.bbox.h),
        (l.bbox = { x: 0, y: -i.bbox.h + 1, w: R + 2, h: i.bbox.h + r.bbox.h })
    } else if (l.text == '\\sqrt') {
      const i = l.chld[0]
      wt(i)
      const r = l.chld[1]
      let R = 0
      r &&
        (wt(r),
        (R = Math.max(r.bbox.w * Dt.SQRT_MAG_SCALE - 0.5, 0)),
        Vt(r, Dt.SQRT_MAG_SCALE, null, 0, 0.5)),
        Vt(i, 1, null, 1 + R, 0.5),
        (l.bbox = {
          x: 0,
          y: 2 - i.bbox.h - 0.5,
          w: i.bbox.w + 1 + R,
          h: i.bbox.h + 0.5
        })
    } else if (B[l.text] && B[l.text].flags.hat) {
      const i = l.chld[0]
      wt(i)
      const r = i.bbox.y - 0.5
      ;(i.bbox.y = 0.5),
        (l.bbox = { x: 0, y: r, w: i.bbox.w, h: i.bbox.h + 0.5 })
    } else if (B[l.text] && B[l.text].flags.mat) {
      const i = l.chld[0]
      wt(i), (l.bbox = { x: 0, y: 0, w: i.bbox.w, h: i.bbox.h + 0.5 })
    } else {
      let i = 0,
        r = 0,
        R = 1
      for (let T = 0; T < l.chld.length; T++) {
        const P = l.chld[T],
          O =
            (o = {
              '\\quad': 2,
              '\\,': (2 * 3) / 18,
              '\\:': (2 * 4) / 18,
              '\\;': (2 * 5) / 18,
              '\\!': (2 * -3) / 18
            }[P.text]) != null
              ? o
              : null
        if (P.text == '\\\\') {
          ;(r += R), (i = 0), (R = 1)
          continue
        } else {
          if (P.text == '&') continue
          if (O != null) {
            i += O
            continue
          } else {
            if (
              (wt(P, e),
              Vt(P, 1, null, i, r),
              P.text == '^' || P.text == '_' || P.text == "'")
            ) {
              let M = T
              for (
                ;
                M > 0 &&
                (l.chld[M].text == '^' ||
                  l.chld[M].text == '_' ||
                  l.chld[M].text == "'");

              )
                M--
              const S = B[l.chld[M].text] && B[l.chld[M].text].flags.big
              if (P.text == "'") {
                let I = M + 1,
                  F = 0
                for (; I < T; ) l.chld[I].text == "'" && F++, I++
                ;(P.bbox.x =
                  l.chld[M].bbox.x + l.chld[M].bbox.w + P.bbox.w * F),
                  (i = Math.max(i, P.bbox.x + P.bbox.w))
              } else if (S) {
                const I =
                  l.chld[M].bbox.x +
                  (l.chld[M].bbox.w - P.bbox.w * Dt.SUB_SUP_SCALE) / 2
                ;(P.bbox.x = I),
                  (i = Math.max(
                    i,
                    l.chld[M].bbox.x +
                      l.chld[M].bbox.w +
                      (P.bbox.w * Dt.SUB_SUP_SCALE - l.chld[M].bbox.w) / 2
                  ))
              } else
                (P.bbox.x = l.chld[M].bbox.x + l.chld[M].bbox.w),
                  (i = Math.max(i, P.bbox.x + P.bbox.w * Dt.SUB_SUP_SCALE))
            } else i += P.bbox.w
            t == 'text' && (i += 1), (R = Math.max(P.bbox.y + P.bbox.h - r, R))
          }
        }
      }
      r += R
      const c = {
          bmatrix: ['[', ']'],
          pmatrix: ['(', ')'],
          Bmatrix: ['\\{', '\\}'],
          cases: ['\\{']
        },
        d =
          (s = {
            bmatrix: 'center',
            pmatrix: 'center',
            Bmatrix: 'center',
            cases: 'left',
            matrix: 'center',
            aligned: 'equation'
          }[l.text]) != null
            ? s
            : 'left',
        h = !!c[l.text],
        u = !!c[l.text] && c[l.text].length > 1
      Bi(l.chld, d)
      const g = fn(l.chld)
      l.text == '\\text' && ((g.x -= 1), (g.w += 2))
      for (let T = 0; T < l.chld.length; T++)
        Vt(l.chld[T], 1, null, -g.x + (h ? 1.5 : 0), -g.y)
      ;(l.bbox = {
        x: 0,
        y: 0,
        w: g.w + 1.5 * Number(h) + 1.5 * Number(u),
        h: g.h
      }),
        h &&
          l.chld.unshift({
            type: 'symb',
            text: c[l.text][0],
            mode: l.mode,
            chld: [],
            bbox: { x: 0, y: 0, w: 1, h: g.h }
          }),
        u &&
          l.chld.push({
            type: 'symb',
            text: c[l.text][1],
            mode: l.mode,
            chld: [],
            bbox: { x: g.w + 2, y: 0, w: 1, h: g.h }
          }),
        (h || u || l.text == 'matrix') &&
          ((l.type = 'node'), (l.text = ''), (l.bbox.y -= (l.bbox.h - 2) / 2))
    }
  }
  function Ai(l) {
    function t(n, o, s) {
      const i = []
      if (n.bbox) {
        if (((o += n.bbox.x), (s += n.bbox.y), n.text == '\\frac')) {
          const r = n.chld[1].bbox.y - (n.chld[0].bbox.y + n.chld[0].bbox.h),
            R = {
              type: 'symb',
              mode: n.mode,
              text: '\\bar',
              bbox: {
                x: o,
                y: s + (n.chld[1].bbox.y - r / 2) - r / 2,
                w: n.bbox.w,
                h: r
              },
              chld: []
            }
          i.push(R)
        } else if (n.text == '\\sqrt') {
          const r = n.chld[0].bbox.y,
            R = Math.max(0, n.chld[0].bbox.x - n.chld[0].bbox.h / 2),
            c = {
              type: 'symb',
              mode: n.mode,
              text: '\\sqrt',
              bbox: {
                x: o + R,
                y: s + r / 2,
                w: n.chld[0].bbox.x - R,
                h: n.bbox.h - r / 2
              },
              chld: []
            }
          i.push(c),
            i.push({
              type: 'symb',
              text: '\\bar',
              mode: n.mode,
              bbox: {
                x: o + n.chld[0].bbox.x,
                y: s,
                w: n.bbox.w - n.chld[0].bbox.x,
                h: r
              },
              chld: []
            })
        } else if (n.text == '\\binom') {
          const r = Math.min(n.chld[0].bbox.x, n.chld[1].bbox.x),
            R = {
              type: 'symb',
              mode: n.mode,
              text: '(',
              bbox: { x: o, y: s, w: r, h: n.bbox.h },
              chld: []
            }
          i.push(R),
            i.push({
              type: 'symb',
              text: ')',
              mode: n.mode,
              bbox: { x: o + n.bbox.w - r, y: s, w: r, h: n.bbox.h },
              chld: []
            })
        } else if (B[n.text] && B[n.text].flags.hat) {
          const r = n.chld[0].bbox.y,
            R = {
              type: 'symb',
              mode: n.mode,
              text: n.text,
              bbox: { x: o, y: s, w: n.bbox.w, h: r },
              chld: []
            }
          i.push(R)
        } else if (B[n.text] && B[n.text].flags.mat) {
          const r = n.chld[0].bbox.h,
            R = {
              type: 'symb',
              text: n.text,
              mode: n.mode,
              bbox: { x: o, y: s + r, w: n.bbox.w, h: n.bbox.h - r },
              chld: []
            }
          i.push(R)
        } else if (n.type != 'node' && n.text != '^' && n.text != '_') {
          const r = {
            type: n.type == 'func' ? 'symb' : n.type,
            text: n.text,
            mode: n.mode,
            bbox: { x: o, y: s, w: n.bbox.w, h: n.bbox.h },
            chld: []
          }
          i.push(r)
        }
      }
      for (let r = 0; r < n.chld.length; r++) {
        const R = t(n.chld[r], o, s)
        i.push(...R)
      }
      return i
    }
    const e = t(l, -l.bbox.x, -l.bbox.y)
    ;(l.type = 'node'), (l.text = ''), (l.chld = e)
  }
  function ki(l) {
    const t = []
    for (let e = 0; e < l.chld.length; e++) {
      const n = l.chld[e]
      let o = n.bbox.h / 2,
        s = !1
      if (
        (B[n.text] &&
          B[n.text].flags.hat &&
          !B[n.text].flags.xfl &&
          !B[n.text].flags.yfl &&
          ((o *= 4), (s = !0)),
        B[n.text] && B[n.text].glyph)
      ) {
        const i = ne(B[n.text].glyph)
        for (let r = 0; r < i.polylines.length; r++) {
          const R = []
          for (let c = 0; c < i.polylines[r].length; c++) {
            let d = i.polylines[r][c][0],
              h = i.polylines[r][c][1]
            if (B[n.text].flags.xfl)
              (d = ((d - i.xmin) / Math.max(i.xmax - i.xmin, 1)) * n.bbox.w),
                (d += n.bbox.x)
            else if ((i.w / 16) * o > n.bbox.w)
              (d = (d / Math.max(i.w, 1)) * n.bbox.w), (d += n.bbox.x)
            else {
              d = (d / 16) * o
              const u = (n.bbox.w - (i.w / 16) * o) / 2
              d += n.bbox.x + u
            }
            B[n.text].flags.yfl
              ? ((h = ((h - i.ymin) / Math.max(i.ymax - i.ymin, 1)) * n.bbox.h),
                (h += n.bbox.y))
              : ((h = (h / 16) * o),
                s && (h -= ((i.ymax + i.ymin) / 2 / 16) * o),
                (h += n.bbox.y + n.bbox.h / 2)),
              R.push([d, h])
          }
          t.push(R)
        }
      } else if ((B[n.text] && B[n.text].flags.txt) || n.type == 'char') {
        let i = n.bbox.x
        const r = !!(B[n.text] && B[n.text].flags.txt)
        for (let R = Number(r); R < n.text.length; R++) {
          const c = ne(me(n.text[R], r ? 'text' : n.mode))
          if (!c) {
            console.warn('unmapped character: ' + n.text[R])
            continue
          }
          for (let d = 0; d < c.polylines.length; d++) {
            const h = []
            for (let u = 0; u < c.polylines[d].length; u++) {
              let g = c.polylines[d][u][0],
                T = c.polylines[d][u][1]
              ;(g /= 16),
                (T /= 16),
                (g *= o),
                (T *= o),
                n.mode == 'tt' &&
                  (c.w > 16 ? (g *= 16 / c.w) : (g += (16 - c.w) / 2 / 16)),
                (g += i),
                (T += n.bbox.y + n.bbox.h / 2),
                h.push([g, T])
            }
            t.push(h)
          }
          n.mode == 'tt' ? (i += o) : (i += (c.w / 16) * o)
        }
      }
    }
    return t
  }
  function Ht(l) {
    return Math.round(l * 100) / 100
  }
  class _i {
    constructor(t) {
      L(this, '_latex')
      L(this, '_tree')
      L(this, '_tokens')
      L(this, '_polylines')
      ;(this._latex = t),
        (this._tokens = Ji(t)),
        (this._tree = xe(this._tokens)),
        Fn(this._tree.chld),
        wt(this._tree),
        Ai(this._tree),
        (this._polylines = ki(this._tree))
    }
    resolveScale(t) {
      var i, r, R, c
      if (t == null) return [16, 16, 16, 16]
      let e = (i = t.SCALE_X) != null ? i : 16,
        n = (r = t.SCALE_Y) != null ? r : 16
      if (t.MIN_CHAR_H != null) {
        let d = 0
        for (let u = 0; u < this._tree.chld.length; u++) {
          const g = this._tree.chld[u]
          ;(g.type == 'char' ||
            (B[g.text] &&
              (B[g.text].flags.txt || !Object.keys(B[g.text].flags).length))) &&
            (d = Math.min(g.bbox.h, d))
        }
        const h = Math.max(1, t.MIN_CHAR_H / d)
        ;(e *= h), (n *= h)
      }
      if (t.MAX_W != null) {
        const d = e
        ;(e = Math.min(e, t.MAX_W / this._tree.bbox.w)), (n *= e / d)
      }
      if (t.MAX_H != null) {
        const d = n
        ;(n = Math.min(n, t.MAX_H / this._tree.bbox.h)), (e *= n / d)
      }
      const o = (R = t.MARGIN_X) != null ? R : e,
        s = (c = t.MARGIN_Y) != null ? c : n
      return [o, s, e, n]
    }
    polylines(t) {
      t || (t = {})
      const e = [],
        [n, o, s, i] = this.resolveScale(t)
      for (let r = 0; r < this._polylines.length; r++) {
        e.push([])
        for (let R = 0; R < this._polylines[r].length; R++) {
          const [c, d] = this._polylines[r][R]
          e[e.length - 1].push([n + c * s, o + d * i])
        }
      }
      return e
    }
    pathd(t) {
      t || (t = {})
      let e = ''
      const [n, o, s, i] = this.resolveScale(t)
      for (let r = 0; r < this._polylines.length; r++)
        for (let R = 0; R < this._polylines[r].length; R++) {
          const [c, d] = this._polylines[r][R]
          ;(e += R ? 'L' : 'M'), (e += `${Ht(n + c * s)} ${Ht(o + d * i)}`)
        }
      return e
    }
    svg(t) {
      var c, d
      t || (t = {})
      const [e, n, o, s] = this.resolveScale(t),
        i = Ht(this._tree.bbox.w * o + e * 2),
        r = Ht(this._tree.bbox.h * s + n * 2)
      let R = `<svg
      xmlns="http://www.w3.org/2000/svg"
      width="${i}" height="${r}"
      fill="none" stroke="${(c = t.FG_COLOR) != null ? c : 'black'}" stroke-width="${(d = t.STROKE_W) != null ? d : 1}"
      stroke-linecap="round" stroke-linejoin="round"
    >`
      t.BG_COLOR &&
        (R += `<rect x="${0}" y="${0}" width="${i}" height="${r}" fill="${t.BG_COLOR}" stroke="none"></rect>`),
        (R += '<path d="')
      for (let h = 0; h < this._polylines.length; h++) {
        R += 'M'
        for (let u = 0; u < this._polylines[h].length; u++) {
          const [g, T] = this._polylines[h][u]
          R += Ht(e + g * o) + ' ' + Ht(n + T * s) + ' '
        }
      }
      return (
        (R += '"/>'),
        (R += '</svg>'),
        {
          svg: `data:image/svg+xml;base64,${window.btoa(R)}`,
          width: Math.ceil(i),
          height: Math.ceil(r)
        }
      )
    }
    pdf(t) {
      var h
      t || (t = {})
      const [e, n, o, s] = this.resolveScale(t),
        i = Ht(this._tree.bbox.w * o + e * 2),
        r = Ht(this._tree.bbox.h * s + n * 2)
      let R = `%PDF-1.1
%%\xA5\xB1\xEB
1 0 obj
<< /Type /Catalog
/Pages 2 0 R
>>endobj
    2 0 obj
<< /Type /Pages
/Kids [3 0 R]
/Count 1
/MediaBox [0 0 ${i} ${r}]
>>
endobj
    3 0 obj
<< /Type /Page
/Parent 2 0 R
/Resources
<< /Font
<< /F1
<< /Type /Font
    /Subtype /Type1
/BaseFont /Times-Roman
>>
>>
>>
/Contents [`,
        c = '',
        d = 4
      for (let u = 0; u < this._polylines.length; u++) {
        c += `${d} 0 obj 
<< /Length 0 >>
 stream
 1 j 1 J ${(h = t.STROKE_W) != null ? h : 1} w
`
        for (let g = 0; g < this._polylines[u].length; g++) {
          const [T, P] = this._polylines[u][g]
          c += `${Ht(e + T * o)} ${Ht(r - (n + P * s))} ${g ? 'l' : 'm'} `
        }
        ;(c += `
S
endstream
endobj
`),
          (R += `${d} 0 R `),
          d++
      }
      return (
        (R += `]
>>
endobj
`),
        (c += `
trailer
<< /Root 1 0 R 
 /Size 0
 >>startxref

%%EOF
`),
        R + c
      )
    }
    boxes(t) {
      t || (t = {})
      const [e, n, o, s] = this.resolveScale(t),
        i = []
      for (let r = 0; r < this._tree.chld.length; r++) {
        const { x: R, y: c, w: d, h } = this._tree.chld[r].bbox
        i.push({ x: e + R * o, y: n + c * s, w: d * o, h: h * s })
      }
      return i
    }
    box(t) {
      t || (t = {})
      const [e, n, o, s] = this.resolveScale(t)
      return {
        x: e + this._tree.bbox.x * o,
        y: n + this._tree.bbox.y * s,
        w: this._tree.bbox.w * o,
        h: this._tree.bbox.h * s
      }
    }
  }
  class mn extends In {
    static convertLaTextToSVG(t) {
      return new _i(t).svg({
        SCALE_X: 10,
        SCALE_Y: 10,
        MARGIN_X: 0,
        MARGIN_Y: 0
      })
    }
    render(t, e, n, o) {
      const { scale: s } = this.options,
        i = e.width * s,
        r = e.height * s
      if (this.imageCache.has(e.value)) {
        const R = this.imageCache.get(e.value)
        t.drawImage(R, n, o, i, r)
      } else {
        const R = new Promise((c, d) => {
          const h = new Image()
          ;(h.src = e.laTexSVG),
            (h.onload = () => {
              t.drawImage(h, n, o, i, r), this.imageCache.set(e.value, h), c(e)
            }),
            (h.onerror = u => {
              d(u)
            })
        })
        this.addImageObserver(R)
      }
    }
  }
  ;(a.ListType = void 0),
    (function (l) {
      ;(l.UL = 'ul'), (l.OL = 'ol')
    })(a.ListType || (a.ListType = {}))
  var jt
  ;(function (l) {
    ;(l.DISC = 'disc'),
      (l.CIRCLE = 'circle'),
      (l.SQUARE = 'square'),
      (l.CHECKBOX = 'checkbox')
  })(jt || (jt = {}))
  var Wn
  ;(function (l) {
    l.DECIMAL = 'decimal'
  })(Wn || (Wn = {})),
    (a.ListStyle = void 0),
    (function (l) {
      ;(l.DISC = 'disc'),
        (l.CIRCLE = 'circle'),
        (l.SQUARE = 'square'),
        (l.DECIMAL = 'decimal'),
        (l.CHECKBOX = 'checkbox')
    })(a.ListStyle || (a.ListStyle = {}))
  const ve = {
      [jt.DISC]: '\u2022',
      [jt.CIRCLE]: '\u25E6',
      [jt.SQUARE]: '\u25AB\uFE0E',
      [jt.CHECKBOX]: '\u2611\uFE0F'
    },
    zi = { [a.ListType.OL]: 'ol', [a.ListType.UL]: 'ul' },
    $i = {
      [a.ListStyle.DISC]: 'disc',
      [a.ListStyle.CIRCLE]: 'circle',
      [a.ListStyle.SQUARE]: 'square',
      [a.ListStyle.DECIMAL]: 'decimal',
      [a.ListStyle.CHECKBOX]: 'checkbox'
    }
  ;(a.TitleLevel = void 0),
    (function (l) {
      ;(l.FIRST = 'first'),
        (l.SECOND = 'second'),
        (l.THIRD = 'third'),
        (l.FOURTH = 'fourth'),
        (l.FIFTH = 'fifth'),
        (l.SIXTH = 'sixth')
    })(a.TitleLevel || (a.TitleLevel = {}))
  const ji = {
      defaultFirstSize: 26,
      defaultSecondSize: 24,
      defaultThirdSize: 22,
      defaultFourthSize: 20,
      defaultFifthSize: 18,
      defaultSixthSize: 16
    },
    Vn = {
      [a.TitleLevel.FIRST]: 'defaultFirstSize',
      [a.TitleLevel.SECOND]: 'defaultSecondSize',
      [a.TitleLevel.THIRD]: 'defaultThirdSize',
      [a.TitleLevel.FOURTH]: 'defaultFourthSize',
      [a.TitleLevel.FIFTH]: 'defaultFifthSize',
      [a.TitleLevel.SIXTH]: 'defaultSixthSize'
    },
    Be = {
      [a.TitleLevel.FIRST]: 1,
      [a.TitleLevel.SECOND]: 2,
      [a.TitleLevel.THIRD]: 3,
      [a.TitleLevel.FOURTH]: 4,
      [a.TitleLevel.FIFTH]: 5,
      [a.TitleLevel.SIXTH]: 6
    },
    qi = {
      H1: a.TitleLevel.FIRST,
      H2: a.TitleLevel.SECOND,
      H3: a.TitleLevel.THIRD,
      H4: a.TitleLevel.FOURTH,
      H5: a.TitleLevel.FIFTH,
      H6: a.TitleLevel.SIXTH
    }
  ;(a.BlockType = void 0),
    (function (l) {
      ;(l.IFRAME = 'iframe'), (l.VIDEO = 'video')
    })(a.BlockType || (a.BlockType = {})),
    (a.ControlType = void 0),
    (function (l) {
      ;(l.TEXT = 'text'),
        (l.SELECT = 'select'),
        (l.CHECKBOX = 'checkbox'),
        (l.RADIO = 'radio'),
        (l.DATE = 'date'),
        (l.NUMBER = 'number')
    })(a.ControlType || (a.ControlType = {})),
    (a.ControlComponent = void 0),
    (function (l) {
      ;(l.PREFIX = 'prefix'),
        (l.POSTFIX = 'postfix'),
        (l.PRE_TEXT = 'preText'),
        (l.POST_TEXT = 'postText'),
        (l.PLACEHOLDER = 'placeholder'),
        (l.VALUE = 'value'),
        (l.CHECKBOX = 'checkbox'),
        (l.RADIO = 'radio')
    })(a.ControlComponent || (a.ControlComponent = {})),
    (a.ControlIndentation = void 0),
    (function (l) {
      ;(l.ROW_START = 'rowStart'), (l.VALUE_START = 'valueStart')
    })(a.ControlIndentation || (a.ControlIndentation = {})),
    (a.ControlState = void 0),
    (function (l) {
      ;(l.ACTIVE = 'active'), (l.INACTIVE = 'inactive')
    })(a.ControlState || (a.ControlState = {})),
    (a.EditorComponent = void 0),
    (function (l) {
      ;(l.COMPONENT = 'component'),
        (l.MENU = 'menu'),
        (l.MAIN = 'main'),
        (l.FOOTER = 'footer'),
        (l.CONTEXTMENU = 'contextmenu'),
        (l.POPUP = 'popup'),
        (l.CATALOG = 'catalog'),
        (l.COMMENT = 'comment')
    })(a.EditorComponent || (a.EditorComponent = {}))
  var vt
  ;(function (l) {
    ;(l.PAGE = 'page'), (l.TABLE = 'table')
  })(vt || (vt = {})),
    (a.EditorMode = void 0),
    (function (l) {
      ;(l.EDIT = 'edit'),
        (l.CLEAN = 'clean'),
        (l.READONLY = 'readonly'),
        (l.FORM = 'form'),
        (l.PRINT = 'print'),
        (l.DESIGN = 'design')
    })(a.EditorMode || (a.EditorMode = {})),
    (a.EditorZone = void 0),
    (function (l) {
      ;(l.HEADER = 'header'), (l.MAIN = 'main'), (l.FOOTER = 'footer')
    })(a.EditorZone || (a.EditorZone = {})),
    (a.PageMode = void 0),
    (function (l) {
      ;(l.PAGING = 'paging'), (l.CONTINUITY = 'continuity')
    })(a.PageMode || (a.PageMode = {})),
    (a.PaperDirection = void 0),
    (function (l) {
      ;(l.VERTICAL = 'vertical'), (l.HORIZONTAL = 'horizontal')
    })(a.PaperDirection || (a.PaperDirection = {})),
    (a.WordBreak = void 0),
    (function (l) {
      ;(l.BREAK_ALL = 'break-all'), (l.BREAK_WORD = 'break-word')
    })(a.WordBreak || (a.WordBreak = {})),
    (a.RenderMode = void 0),
    (function (l) {
      ;(l.SPEED = 'speed'), (l.COMPATIBILITY = 'compatibility')
    })(a.RenderMode || (a.RenderMode = {})),
    (a.TableBorder = void 0),
    (function (l) {
      ;(l.ALL = 'all'),
        (l.EMPTY = 'empty'),
        (l.EXTERNAL = 'external'),
        (l.INTERNAL = 'internal'),
        (l.DASH = 'dash')
    })(a.TableBorder || (a.TableBorder = {})),
    (a.TdBorder = void 0),
    (function (l) {
      ;(l.TOP = 'top'),
        (l.RIGHT = 'right'),
        (l.BOTTOM = 'bottom'),
        (l.LEFT = 'left')
    })(a.TdBorder || (a.TdBorder = {})),
    (a.TdSlash = void 0),
    (function (l) {
      ;(l.FORWARD = 'forward'), (l.BACK = 'back')
    })(a.TdSlash || (a.TdSlash = {})),
    (a.BackgroundSize = void 0),
    (function (l) {
      ;(l.CONTAIN = 'contain'), (l.COVER = 'cover')
    })(a.BackgroundSize || (a.BackgroundSize = {})),
    (a.BackgroundRepeat = void 0),
    (function (l) {
      ;(l.REPEAT = 'repeat'),
        (l.NO_REPEAT = 'no-repeat'),
        (l.REPEAT_X = 'repeat-x'),
        (l.REPEAT_Y = 'repeat-y')
    })(a.BackgroundRepeat || (a.BackgroundRepeat = {}))
  const to = {
    color: '#FFFFFF',
    image: '',
    size: a.BackgroundSize.COVER,
    repeat: a.BackgroundRepeat.NO_REPEAT,
    applyPageNumbers: []
  }
  ;(a.VerticalAlign = void 0),
    (function (l) {
      ;(l.TOP = 'top'), (l.MIDDLE = 'middle'), (l.BOTTOM = 'bottom')
    })(a.VerticalAlign || (a.VerticalAlign = {}))
  const eo = {
      width: 14,
      height: 14,
      gap: 5,
      lineWidth: 1,
      fillStyle: '#5175f4',
      strokeStyle: '#ffffff',
      verticalAlign: a.VerticalAlign.BOTTOM
    },
    no = {
      placeholderColor: '#9c9b9b',
      bracketColor: '#000000',
      prefix: '{',
      postfix: '}',
      borderWidth: 1,
      borderColor: '#000000',
      activeBackgroundColor: '',
      disabledBackgroundColor: '',
      existValueBackgroundColor: '',
      noValueBackgroundColor: ''
    },
    io = {
      bottom: 30,
      maxHeightRadio: a.MaxHeightRatio.HALF,
      disabled: !1,
      editable: !0
    },
    oo = {
      opacity: 0.1,
      backgroundColor: '#E99D00',
      activeOpacity: 0.5,
      activeBackgroundColor: '#E99D00',
      disabled: !1,
      deletable: !0
    },
    so = {
      top: 30,
      maxHeightRadio: a.MaxHeightRatio.HALF,
      disabled: !1,
      editable: !0
    },
    lo = { disabled: !0, color: '#CCCCCC', lineWidth: 1.5 },
    ro = { font: 'Microsoft YaHei', fontSize: 12, lineDash: [3, 1] },
    ge = { PAGE_NO: '{pageNo}', PAGE_COUNT: '{pageCount}' },
    Ro = {
      bottom: 60,
      size: 12,
      font: 'Microsoft YaHei',
      color: '#000000',
      rowFlex: a.RowFlex.CENTER,
      format: ge.PAGE_NO,
      numberType: a.NumberType.ARABIC,
      disabled: !1,
      startPageNo: 1,
      fromPageNo: 0,
      maxPageNo: null
    },
    Zn = {
      data: '',
      color: '#DCDFE6',
      opacity: 1,
      size: 16,
      font: 'Microsoft YaHei'
    },
    ao = {
      width: 14,
      height: 14,
      gap: 5,
      lineWidth: 1,
      fillStyle: '#5175f4',
      strokeStyle: '#000000',
      verticalAlign: a.VerticalAlign.BOTTOM
    },
    co = { lineWidth: 1, strokeStyle: '#000000' },
    ho = {
      tdPadding: [0, 5, 5, 5],
      defaultTrMinHeight: 42,
      defaultColMinWidth: 40,
      defaultBorderColor: '#000000'
    }
  ;(a.WatermarkType = void 0),
    (function (l) {
      ;(l.TEXT = 'text'), (l.IMAGE = 'image')
    })(a.WatermarkType || (a.WatermarkType = {}))
  const Ae = {
      data: '',
      type: a.WatermarkType.TEXT,
      width: 0,
      height: 0,
      color: '#AEB5C0',
      opacity: 0.3,
      size: 200,
      font: 'Microsoft YaHei',
      repeat: !1,
      gap: [10, 10],
      numberType: a.NumberType.ARABIC
    },
    uo = { tipDisabled: !0 }
  ;(a.LineNumberType = void 0),
    (function (l) {
      ;(l.PAGE = 'page'), (l.CONTINUITY = 'continuity')
    })(a.LineNumberType || (a.LineNumberType = {}))
  const go = {
      size: 12,
      font: 'Microsoft YaHei',
      color: '#000000',
      disabled: !0,
      right: 20,
      type: a.LineNumberType.CONTINUITY
    },
    Lo = {
      color: '#000000',
      lineWidth: 1,
      padding: [0, 5, 0, 5],
      disabled: !0
    },
    To = { top: 0, left: 5 }
  function ke(l = {}) {
    var X, f, Q
    const t = C(C({}, ho), l.table),
      e = C(C({}, so), l.header),
      n = C(C({}, io), l.footer),
      o = C(C({}, Ro), l.pageNumber),
      s = C(C({}, Ae), l.watermark),
      i = C(C({}, no), l.control),
      r = C(C({}, eo), l.checkbox),
      R = C(C({}, ao), l.radio),
      c = C(C({}, Yi), l.cursor),
      d = C(C({}, ji), l.title),
      h = C(C({}, Zn), l.placeholder),
      u = C(C({}, oo), l.group),
      g = C(C({}, ro), l.pageBreak),
      T = C(C({}, uo), l.zone),
      P = C(C({}, to), l.background),
      O = C(C({}, lo), l.lineBreak),
      M = C(C({}, co), l.separator),
      S = C(C({}, go), l.lineNumber),
      I = C(C({}, Lo), l.pageBorder),
      F = C(C({}, To), l.badge),
      N = {
        print: C(C({}, we.print), (X = l.modeRule) == null ? void 0 : X.print),
        readonly: C(
          C({}, we.readonly),
          (f = l.modeRule) == null ? void 0 : f.readonly
        ),
        form: C(C({}, we.form), (Q = l.modeRule) == null ? void 0 : Q.form)
      }
    return v(
      C(
        {
          mode: a.EditorMode.EDIT,
          defaultType: 'TEXT',
          defaultColor: '#000000',
          defaultFont: 'Microsoft YaHei',
          defaultSize: 16,
          minSize: 5,
          maxSize: 72,
          defaultRowMargin: 1,
          defaultBasicRowMarginHeight: 8,
          defaultTabWidth: 32,
          width: 794,
          height: 1123,
          scale: 1,
          pageGap: 20,
          underlineColor: '#000000',
          strikeoutColor: '#FF0000',
          rangeAlpha: 0.6,
          rangeColor: '#AECBFA',
          rangeMinWidth: 5,
          searchMatchAlpha: 0.6,
          searchMatchColor: '#FFFF00',
          searchNavigateMatchColor: '#AAD280',
          highlightAlpha: 0.6,
          resizerColor: '#4182D9',
          resizerSize: 5,
          marginIndicatorSize: 35,
          marginIndicatorColor: '#BABABA',
          margins: [100, 120, 100, 120],
          pageMode: a.PageMode.PAGING,
          renderMode: a.RenderMode.SPEED,
          defaultHyperlinkColor: '#0000FF',
          paperDirection: a.PaperDirection.VERTICAL,
          inactiveAlpha: 0.6,
          historyMaxRecordCount: 100,
          wordBreak: a.WordBreak.BREAK_WORD,
          printPixelRatio: 3,
          maskMargin: [0, 0, 0, 0],
          letterClass: [gn.ENGLISH],
          contextMenuDisableKeys: [],
          scrollContainerSelector: '',
          pageOuterSelectionDisable: !1
        },
        l
      ),
      {
        table: t,
        header: e,
        footer: n,
        pageNumber: o,
        watermark: s,
        control: i,
        checkbox: r,
        radio: R,
        cursor: c,
        title: d,
        placeholder: h,
        group: u,
        pageBreak: g,
        zone: T,
        background: P,
        lineBreak: O,
        separator: M,
        lineNumber: S,
        pageBorder: I,
        badge: F,
        modeRule: N
      }
    )
  }
  function Un(l) {
    const t = []
    for (let e = 0; e < l.length; e++) {
      const n = l[e],
        o = splitText(n.value)
      for (let s = 0; s < o.length; s++) t.push(v(C({}, n), { value: o[s] }))
    }
    return t
  }
  function St(l, t) {
    var r
    const {
        isHandleFirstElement: e = !0,
        isForceCompensation: n = !1,
        editorOptions: o
      } = t,
      s = l[0]
    ;(n ||
      (e &&
        (s == null ? void 0 : s.type) !== a.ElementType.LIST &&
        (((s == null ? void 0 : s.type) && s.type !== a.ElementType.TEXT) ||
          !Ce.test(s == null ? void 0 : s.value)))) &&
      l.unshift({ value: H })
    let i = 0
    for (; i < l.length; ) {
      let R = l[i]
      if (R.type === a.ElementType.TITLE) {
        l.splice(i, 1)
        const c = R.valueList || []
        if (
          (St(
            c,
            v(C({}, t), { isHandleFirstElement: !1, isForceCompensation: !1 })
          ),
          c.length)
        ) {
          const d = R.titleId || A(),
            h = o.title
          for (let u = 0; u < c.length; u++) {
            const g = c[u]
            ;(g.title = R.title),
              R.level && ((g.titleId = d), (g.level = R.level)),
              pn(g) &&
                (g.size || (g.size = h[Vn[g.level]]),
                g.bold === void 0 && (g.bold = !0)),
              l.splice(i, 0, g),
              i++
          }
        }
        i--
      } else if (R.type === a.ElementType.LIST) {
        l.splice(i, 1)
        const c = R.valueList || []
        if (
          (St(
            c,
            v(C({}, t), { isHandleFirstElement: !0, isForceCompensation: !1 })
          ),
          c.length)
        ) {
          const d = A()
          for (let h = 0; h < c.length; h++) {
            const u = c[h]
            ;(u.listId = d),
              (u.listType = R.listType),
              (u.listStyle = R.listStyle),
              l.splice(i, 0, u),
              i++
          }
        }
        i--
      } else if (R.type === a.ElementType.AREA) {
        l.splice(i, 1)
        const c = (R == null ? void 0 : R.valueList) || []
        if (
          (St(
            c,
            v(C({}, t), { isHandleFirstElement: !0, isForceCompensation: !0 })
          ),
          c.length)
        ) {
          const d = A()
          for (let h = 0; h < c.length; h++) {
            const u = c[h]
            if (
              ((u.areaId = R.areaId || d),
              (u.area = R.area),
              (u.areaIndex = h),
              u.type === a.ElementType.TABLE)
            ) {
              const g = u.trList
              for (let T = 0; T < g.length; T++) {
                const P = g[T]
                for (let O = 0; O < P.tdList.length; O++) {
                  const S = P.tdList[O].value
                  for (let I = 0; I < S.length; I++) {
                    const F = S[I]
                    ;(F.areaId = R.areaId || d), (F.area = R.area)
                  }
                }
              }
            }
            l.splice(i, 0, u), i++
          }
        }
        i--
      } else if (R.type === a.ElementType.TABLE) {
        const c = R.id || A()
        if (((R.id = c), R.trList)) {
          const { defaultTrMinHeight: d } = o.table
          for (let h = 0; h < R.trList.length; h++) {
            const u = R.trList[h],
              g = u.id || A()
            ;(u.id = g),
              (!u.minHeight || u.minHeight < d) && (u.minHeight = d),
              u.height < u.minHeight && (u.height = u.minHeight)
            for (let T = 0; T < u.tdList.length; T++) {
              const P = u.tdList[T],
                O = P.id || A()
              ;(P.id = O),
                St(
                  P.value,
                  v(C({}, t), {
                    isHandleFirstElement: !0,
                    isForceCompensation: !0
                  })
                )
              for (let M = 0; M < P.value.length; M++) {
                const S = P.value[M]
                ;(S.tdId = O), (S.trId = g), (S.tableId = c)
              }
            }
          }
        }
      } else if (R.type === a.ElementType.HYPERLINK) {
        l.splice(i, 1)
        const c = Un(R.valueList || [])
        if (c.length) {
          const d = A()
          for (let h = 0; h < c.length; h++) {
            const u = c[h]
            ;(u.type = R.type),
              (u.url = R.url),
              (u.hyperlinkId = d),
              l.splice(i, 0, u),
              i++
          }
        }
        i--
      } else if (R.type === a.ElementType.DATE) {
        l.splice(i, 1)
        const c = Un(R.valueList || [])
        if (c.length) {
          const d = A()
          for (let h = 0; h < c.length; h++) {
            const u = c[h]
            ;(u.type = R.type),
              (u.dateFormat = R.dateFormat),
              (u.dateId = d),
              l.splice(i, 0, u),
              i++
          }
        }
        i--
      } else if (R.type === a.ElementType.CONTROL) {
        if (!R.control) {
          i++
          continue
        }
        const {
            prefix: c,
            postfix: d,
            preText: h,
            postText: u,
            value: g,
            placeholder: T,
            code: P,
            type: O,
            valueSets: M
          } = R.control,
          {
            editorOptions: { control: S, checkbox: I, radio: F }
          } = t,
          N = R.controlId || A()
        l.splice(i, 1)
        const X = Ut(R, [...Nn, ...$t]),
          f = Ut(R.control, xt),
          Q = v(C({}, f), { color: o.control.bracketColor }),
          Z = splitText(c || S.prefix)
        for (let Y = 0; Y < Z.length; Y++) {
          const V = Z[Y]
          l.splice(
            i,
            0,
            v(C(C({}, X), Q), {
              controlId: N,
              value: V,
              type: R.type,
              control: R.control,
              controlComponent: a.ControlComponent.PREFIX
            })
          ),
            i++
        }
        if (h) {
          const Y = splitText(h)
          for (let V = 0; V < Y.length; V++) {
            const W = Y[V]
            l.splice(
              i,
              0,
              v(C(C({}, X), f), {
                controlId: N,
                value: W,
                type: R.type,
                control: R.control,
                controlComponent: a.ControlComponent.PRE_TEXT
              })
            ),
              i++
          }
        }
        if (
          (g && g.length) ||
          O === a.ControlType.CHECKBOX ||
          O === a.ControlType.RADIO ||
          (O === a.ControlType.SELECT && P && (!g || !g.length))
        ) {
          let Y = g ? k(g) : []
          if (O === a.ControlType.CHECKBOX) {
            const V = P ? P.split(',') : []
            if (Array.isArray(M) && M.length) {
              const W = Y.reduce(
                (U, m) =>
                  U.concat(
                    m.value.split('').map(y => v(C({}, m), { value: y }))
                  ),
                []
              )
              let p = 0
              for (let U = 0; U < M.length; U++) {
                const m = M[U]
                l.splice(
                  i,
                  0,
                  v(C(C({}, X), f), {
                    controlId: N,
                    value: '',
                    type: R.type,
                    control: R.control,
                    controlComponent: a.ControlComponent.CHECKBOX,
                    checkbox: { code: m.code, value: V.includes(m.code) }
                  })
                ),
                  i++
                const y = splitText(m.value)
                for (let K = 0; K < y.length; K++) {
                  const b = y[K],
                    w = K === y.length - 1
                  l.splice(
                    i,
                    0,
                    v(C(C(C({}, X), f), W[p]), {
                      controlId: N,
                      value:
                        b ===
                        `
`
                          ? H
                          : b,
                      letterSpacing: w ? I.gap : 0,
                      control: R.control,
                      controlComponent: a.ControlComponent.VALUE
                    })
                  ),
                    p++,
                    i++
                }
              }
            }
          } else if (O === a.ControlType.RADIO) {
            if (Array.isArray(M) && M.length) {
              const V = Y.reduce(
                (p, U) =>
                  p.concat(
                    U.value.split('').map(m => v(C({}, U), { value: m }))
                  ),
                []
              )
              let W = 0
              for (let p = 0; p < M.length; p++) {
                const U = M[p]
                l.splice(
                  i,
                  0,
                  v(C(C({}, X), f), {
                    controlId: N,
                    value: '',
                    type: R.type,
                    control: R.control,
                    controlComponent: a.ControlComponent.RADIO,
                    radio: { code: U.code, value: P === U.code }
                  })
                ),
                  i++
                const m = splitText(U.value)
                for (let y = 0; y < m.length; y++) {
                  const K = m[y],
                    b = y === m.length - 1
                  l.splice(
                    i,
                    0,
                    v(C(C(C({}, X), f), V[W]), {
                      controlId: N,
                      value:
                        K ===
                        `
`
                          ? H
                          : K,
                      letterSpacing: b ? F.gap : 0,
                      control: R.control,
                      controlComponent: a.ControlComponent.VALUE
                    })
                  ),
                    W++,
                    i++
                }
              }
            }
          } else {
            if ((!g || !g.length) && Array.isArray(M) && M.length) {
              const V = M.find(W => W.code === P)
              V && (Y = [{ value: V.value }])
            }
            St(
              Y,
              v(C({}, t), { isHandleFirstElement: !1, isForceCompensation: !1 })
            )
            for (let V = 0; V < Y.length; V++) {
              const W = Y[V],
                p = W.value
              l.splice(
                i,
                0,
                v(C(C(C({}, X), f), W), {
                  controlId: N,
                  value:
                    p ===
                    `
`
                      ? H
                      : p,
                  type: W.type || a.ElementType.TEXT,
                  control: R.control,
                  controlComponent: a.ControlComponent.VALUE
                })
              ),
                i++
            }
          }
        } else if (T) {
          const Y = v(C({}, f), { color: o.control.placeholderColor }),
            V = splitText(T)
          for (let W = 0; W < V.length; W++) {
            const p = V[W]
            l.splice(
              i,
              0,
              v(C(C({}, X), Y), {
                controlId: N,
                value:
                  p ===
                  `
`
                    ? H
                    : p,
                type: R.type,
                control: R.control,
                controlComponent: a.ControlComponent.PLACEHOLDER
              })
            ),
              i++
          }
        }
        if (u) {
          const Y = splitText(u)
          for (let V = 0; V < Y.length; V++) {
            const W = Y[V]
            l.splice(
              i,
              0,
              v(C(C({}, X), f), {
                controlId: N,
                value: W,
                type: R.type,
                control: R.control,
                controlComponent: a.ControlComponent.POST_TEXT
              })
            ),
              i++
          }
        }
        const D = splitText(d || S.postfix)
        for (let Y = 0; Y < D.length; Y++) {
          const V = D[Y]
          l.splice(
            i,
            0,
            v(C(C({}, X), Q), {
              controlId: N,
              value: V,
              type: R.type,
              control: R.control,
              controlComponent: a.ControlComponent.POSTFIX
            })
          ),
            i++
        }
        i--
      } else if (
        (!R.type || Qt.includes(R.type)) &&
        ((r = R.value) == null ? void 0 : r.length) > 1
      ) {
        l.splice(i, 1)
        const c = splitText(R.value)
        for (let d = 0; d < c.length; d++)
          l.splice(i + d, 0, v(C({}, R), { value: c[d] }))
        R = l[i]
      }
      if (
        ((R.value ===
          `
` ||
          R.value ==
            `\r
`) &&
          (R.value = H),
        (R.type === a.ElementType.IMAGE || R.type === a.ElementType.BLOCK) &&
          (R.id = R.id || A()),
        R.type === a.ElementType.LATEX)
      ) {
        const { svg: c, width: d, height: h } = mn.convertLaTextToSVG(R.value)
        ;(R.width = R.width || d),
          (R.height = R.height || h),
          (R.laTexSVG = c),
          (R.id = R.id || A())
      }
      i++
    }
  }
  function Po(l, t) {
    const e = Object.keys(l),
      n = Object.keys(t)
    if (e.length !== n.length) return !1
    for (let o = 0; o < e.length; o++) {
      const s = e[o]
      if (
        s !== 'value' &&
        !(
          s === 'groupIds' &&
          Array.isArray(l[s]) &&
          Array.isArray(t[s]) &&
          On(l[s], t[s])
        ) &&
        l[s] !== t[s]
      )
        return !1
    }
    return !0
  }
  function ie(l, t = {}) {
    const { extraPickAttrs: e } = t,
      n = [...Ci]
    e && n.push(...e)
    const o = {
      value:
        l.value === H
          ? `
`
          : l.value
    }
    return (
      n.forEach(s => {
        const i = l[s]
        i !== void 0 && (o[s] = i)
      }),
      o
    )
  }
  function z(l, t = {}) {
    const { extraPickAttrs: e, isClassifyArea: n = !1, isClone: o = !0 } = t,
      s = o ? k(l) : l,
      i = []
    let r = 0
    for (; r < s.length; ) {
      let R = s[r]
      if (
        r === 0 &&
        R.value === H &&
        !R.listId &&
        (!R.type || R.type === a.ElementType.TEXT)
      ) {
        r++
        continue
      }
      if (R.areaId) {
        const d = R.areaId,
          h = R.area,
          u = []
        for (; r < s.length; ) {
          const T = s[r]
          if (d !== T.areaId) {
            r--
            break
          }
          delete T.area, delete T.areaId, u.push(T), r++
        }
        const g = z(u, t)
        if (n) {
          const T = { type: a.ElementType.AREA, value: '', areaId: d, area: h }
          ;(T.valueList = g), (R = T)
        } else {
          i.splice(r, 0, ...g)
          continue
        }
      } else if (R.titleId && R.level) {
        const d = R.titleId
        if (d) {
          const h = R.level,
            u = {
              type: a.ElementType.TITLE,
              title: R.title,
              titleId: d,
              value: '',
              level: h
            },
            g = []
          for (; r < s.length; ) {
            const T = s[r]
            if (d !== T.titleId) {
              r--
              break
            }
            delete T.level, delete T.title, g.push(T), r++
          }
          ;(u.valueList = z(g, t)), (R = u)
        }
      } else if (R.listId && R.listType) {
        const d = R.listId
        if (d) {
          const h = R.listType,
            u = R.listStyle,
            g = {
              type: a.ElementType.LIST,
              value: '',
              listId: d,
              listType: h,
              listStyle: u
            },
            T = []
          for (; r < s.length; ) {
            const P = s[r]
            if (d !== P.listId) {
              r--
              break
            }
            delete P.listType, delete P.listStyle, T.push(P), r++
          }
          ;(g.valueList = z(T, t)), (R = g)
        }
      } else if (R.type === a.ElementType.TABLE) {
        if (R.pagingId) {
          let d = r + 1,
            h = 0
          for (; d < s.length; ) {
            const u = s[d]
            if (u.pagingId === R.pagingId)
              (R.height += u.height), R.trList.push(...u.trList), d++, h++
            else break
          }
          r += h
        }
        if (R.trList)
          for (let d = 0; d < R.trList.length; d++) {
            const h = R.trList[d]
            delete h.id
            for (let u = 0; u < h.tdList.length; u++) {
              const g = h.tdList[u],
                T = {
                  colspan: g.colspan,
                  rowspan: g.rowspan,
                  value: z(g.value, v(C({}, t), { isClassifyArea: !1 }))
                }
              Ei.forEach(P => {
                const O = g[P]
                O !== void 0 && (T[P] = O)
              }),
                (h.tdList[u] = T)
            }
          }
      } else if (R.type === a.ElementType.HYPERLINK) {
        const d = R.hyperlinkId
        if (d) {
          const h = { type: a.ElementType.HYPERLINK, value: '', url: R.url },
            u = []
          for (; r < s.length; ) {
            const g = s[r]
            if (d !== g.hyperlinkId) {
              r--
              break
            }
            delete g.type, delete g.url, u.push(g), r++
          }
          ;(h.valueList = z(u, t)), (R = h)
        }
      } else if (R.type === a.ElementType.DATE) {
        const d = R.dateId
        if (d) {
          const h = {
              type: a.ElementType.DATE,
              value: '',
              dateFormat: R.dateFormat
            },
            u = []
          for (; r < s.length; ) {
            const g = s[r]
            if (d !== g.dateId) {
              r--
              break
            }
            delete g.type, delete g.dateFormat, u.push(g), r++
          }
          ;(h.valueList = z(u, t)), (R = h)
        }
      } else if (R.controlId) {
        const d = R.controlId
        if (R.controlComponent === a.ControlComponent.PREFIX) {
          const h = []
          let u = !1,
            g = r
          for (; g < s.length; ) {
            const T = s[g]
            if (d !== T.controlId) break
            T.controlComponent === a.ControlComponent.VALUE &&
              (delete T.control, delete T.controlId, h.push(T)),
              T.controlComponent === a.ControlComponent.POSTFIX && (u = !0),
              g++
          }
          if (u) {
            const T = Ut(R, xt),
              P = C(C({}, R.control), T),
              O = v(C({}, Ut(R, $t)), {
                type: a.ElementType.CONTROL,
                value: '',
                control: P,
                controlId: d
              })
            ;(O.control.value = z(h, t)),
              (R = ie(O, { extraPickAttrs: e })),
              (r += g - r - 1)
          }
        }
        if (
          R.controlComponent &&
          (delete R.control,
          delete R.controlId,
          R.controlComponent !== a.ControlComponent.VALUE &&
            R.controlComponent !== a.ControlComponent.PRE_TEXT &&
            R.controlComponent !== a.ControlComponent.POST_TEXT)
        ) {
          r++
          continue
        }
      }
      const c = ie(R, { extraPickAttrs: e })
      if (
        !R.type ||
        R.type === a.ElementType.TEXT ||
        R.type === a.ElementType.SUBSCRIPT ||
        R.type === a.ElementType.SUPERSCRIPT
      )
        for (; r < s.length; ) {
          const d = s[r + 1]
          if ((r++, d && Po(c, ie(d, { extraPickAttrs: e })))) {
            const h =
              d.value === H
                ? `
`
                : d.value
            c.value += h
          } else break
        }
      else r++
      i.push(c)
    }
    return i
  }
  function Mo(l) {
    switch (window.getComputedStyle(l).textAlign) {
      case 'left':
      case 'start':
        return a.RowFlex.LEFT
      case 'center':
        return a.RowFlex.CENTER
      case 'right':
      case 'end':
        return a.RowFlex.RIGHT
      case 'justify':
        return a.RowFlex.ALIGNMENT
      case 'justify-all':
        return a.RowFlex.JUSTIFY
      default:
        return a.RowFlex.LEFT
    }
  }
  function Yn(l) {
    return l === a.RowFlex.ALIGNMENT ? 'justify' : l
  }
  function Oo(l) {
    switch (l) {
      case a.RowFlex.LEFT:
        return 'flex-start'
      case a.RowFlex.CENTER:
        return 'center'
      case a.RowFlex.RIGHT:
        return 'flex-end'
      case a.RowFlex.ALIGNMENT:
      case a.RowFlex.JUSTIFY:
        return 'space-between'
      default:
        return 'flex-start'
    }
  }
  function pn(l) {
    return !l.type || Qt.includes(l.type)
  }
  function We(l, t) {
    const e = l[t]
    if (!e) return null
    const n = l[t + 1]
    return !e.listId &&
      e.value === H &&
      n &&
      n.value !== H &&
      e.areaId === n.areaId
      ? n
      : e
  }
  function Tt(l, t, e, n) {
    var c, d, h
    let o = We(l, e)
    if (!o) return
    const { isBreakWhenWrap: s = !1, editorOptions: i } = n || {},
      { mode: r } = i || {}
    r !== a.EditorMode.DESIGN &&
      ((c = o.title) == null ? void 0 : c.disabled) &&
      (o = bt(o, He))
    let R = !1
    for (let u = 0; u < t.length; u++) {
      const g = t[u]
      if (
        (s && !o.listId && Ce.test(g.value) && (R = !0),
        R || (!o.listId && g.type === a.ElementType.LIST))
      ) {
        const P = [...ue, ...$t, ...ee]
        kt(P, o, g),
          (d = g.valueList) == null ||
            d.forEach(O => {
              kt(P, o, O)
            })
        continue
      }
      ;((h = g.valueList) == null ? void 0 : h.length) &&
        Tt(l, g.valueList, e, n)
      const T = [...Nn]
      re(g) || T.push(...$t), kt(T, o, g)
    }
  }
  function So(l, t) {
    let e = 'span'
    l.type === a.ElementType.SUPERSCRIPT
      ? (e = 'sup')
      : l.type === a.ElementType.SUBSCRIPT && (e = 'sub')
    const n = document.createElement(e)
    return (
      (n.style.fontFamily = l.font || t.defaultFont),
      l.rowFlex && (n.style.textAlign = Yn(l.rowFlex)),
      l.color && (n.style.color = l.color),
      l.bold && (n.style.fontWeight = '600'),
      l.italic && (n.style.fontStyle = 'italic'),
      (n.style.fontSize = `${l.size || t.defaultSize}px`),
      l.highlight && (n.style.backgroundColor = l.highlight),
      l.underline && (n.style.textDecoration = 'underline'),
      l.strikeout && (n.style.textDecoration += ' line-through'),
      (n.innerText = l.value.replace(
        new RegExp(`${H}`, 'g'),
        `
`
      )),
      n
    )
  }
  function Qn(l) {
    let t = 0
    const e = new Map()
    for (let n = 0; n < l.length; n++) {
      const o = l[n]
      if (n === 0) {
        if (o.checkbox) continue
        o.value = o.value.replace(Ce, '')
      }
      if (o.listWrap) {
        const s = e.get(t) || []
        s.push(o), e.set(t, s)
      } else {
        const s = o.value.split(`
`)
        for (let i = 0; i < s.length; i++) {
          i > 0 && (t += 1)
          const r = s[i],
            R = e.get(t) || []
          R.push(v(C({}, o), { value: r })), e.set(t, R)
        }
      }
    }
    return e
  }
  function Xo(l) {
    var n
    const t = []
    if (!l.length) return t
    let e = ((n = l[0]) == null ? void 0 : n.rowFlex) || null
    t.push({ rowFlex: e, data: [l[0]] })
    for (let o = 1; o < l.length; o++) {
      const s = l[o],
        i = s.rowFlex || null
      e === i && !re(s) && !re(l[o - 1])
        ? t[t.length - 1].data.push(s)
        : (t.push({ rowFlex: i, data: [s] }), (e = i))
    }
    for (let o = 0; o < t.length; o++) {
      const s = t[o]
      s.data = z(s.data)
    }
    return t
  }
  function oe(l, t) {
    const e = ke(t)
    function n(i) {
      var R, c, d, h, u, g, T, P, O, M, S, I
      const r = document.createElement('div')
      for (let F = 0; F < i.length; F++) {
        const N = i[F]
        if (N.type === a.ElementType.TABLE) {
          const X = document.createElement('table')
          X.setAttribute('cellSpacing', '0'),
            X.setAttribute('cellpadding', '0'),
            X.setAttribute('border', '0')
          const f = '1px solid #000000'
          !N.borderType || N.borderType === a.TableBorder.ALL
            ? ((X.style.borderTop = f), (X.style.borderLeft = f))
            : N.borderType === a.TableBorder.EXTERNAL && (X.style.border = f),
            (X.style.width = `${N.width}px`)
          const Q = document.createElement('colgroup')
          for (let D = 0; D < N.colgroup.length; D++) {
            const Y = N.colgroup[D],
              V = document.createElement('col')
            V.setAttribute('width', `${Y.width}`), Q.append(V)
          }
          X.append(Q)
          const Z = N.trList
          for (let D = 0; D < Z.length; D++) {
            const Y = document.createElement('tr'),
              V = Z[D]
            Y.style.height = `${V.height}px`
            for (let W = 0; W < V.tdList.length; W++) {
              const p = document.createElement('td')
              ;(!N.borderType || N.borderType === a.TableBorder.ALL) &&
                (p.style.borderBottom = p.style.borderRight = '1px solid')
              const U = V.tdList[W]
              ;(p.colSpan = U.colspan),
                (p.rowSpan = U.rowspan),
                (p.style.verticalAlign = U.verticalAlign || 'top'),
                ((R = U.borderTypes) == null
                  ? void 0
                  : R.includes(a.TdBorder.TOP)) && (p.style.borderTop = f),
                ((c = U.borderTypes) == null
                  ? void 0
                  : c.includes(a.TdBorder.RIGHT)) && (p.style.borderRight = f),
                ((d = U.borderTypes) == null
                  ? void 0
                  : d.includes(a.TdBorder.BOTTOM)) &&
                  (p.style.borderBottom = f),
                ((h = U.borderTypes) == null
                  ? void 0
                  : h.includes(a.TdBorder.LEFT)) && (p.style.borderLeft = f)
              const m = oe(U.value, t)
              ;(p.innerHTML = m.innerHTML),
                U.backgroundColor &&
                  (p.style.backgroundColor = U.backgroundColor),
                Y.append(p)
            }
            X.append(Y)
          }
          r.append(X)
        } else if (N.type === a.ElementType.HYPERLINK) {
          const X = document.createElement('a')
          ;(X.innerText = N.valueList.map(f => f.value).join('')),
            N.url && (X.href = N.url),
            r.append(X)
        } else if (N.type === a.ElementType.TITLE) {
          const X = document.createElement(`h${Be[N.level]}`),
            f = n(N.valueList)
          ;(X.innerHTML = f.innerHTML), r.append(X)
        } else if (N.type === a.ElementType.LIST) {
          const X = document.createElement(zi[N.listType])
          N.listStyle && (X.style.listStyleType = $i[N.listStyle])
          const f = z(N.valueList)
          Qn(f).forEach(Z => {
            const D = document.createElement('li'),
              Y = n(Z)
            ;(D.innerHTML = Y.innerHTML), X.append(D)
          }),
            r.append(X)
        } else if (N.type === a.ElementType.IMAGE) {
          const X = document.createElement('img')
          N.value &&
            ((X.src = N.value), (X.width = N.width), (X.height = N.height)),
            r.append(X)
        } else if (N.type === a.ElementType.BLOCK) {
          if (((u = N.block) == null ? void 0 : u.type) === a.BlockType.VIDEO) {
            const X = (g = N.block.videoBlock) == null ? void 0 : g.src
            if (X) {
              const f = document.createElement('video')
              ;(f.style.display = 'block'),
                (f.controls = !0),
                (f.src = X),
                (f.width =
                  N.width ||
                  (t == null ? void 0 : t.width) ||
                  window.innerWidth),
                (f.height = N.height),
                r.append(f)
            }
          } else if (
            ((T = N.block) == null ? void 0 : T.type) === a.BlockType.IFRAME
          ) {
            const { src: X, srcdoc: f } = N.block.iframeBlock || {}
            if (X || f) {
              const Q = document.createElement('iframe')
              Q.sandbox.add(...Fe.sandbox),
                (Q.style.display = 'block'),
                (Q.style.border = 'none'),
                X ? (Q.src = X) : f && (Q.srcdoc = f),
                (Q.width = `${N.width || (t == null ? void 0 : t.width) || window.innerWidth}`),
                (Q.height = `${N.height}`),
                r.append(Q)
            }
          }
        } else if (N.type === a.ElementType.SEPARATOR) {
          const X = document.createElement('hr')
          r.append(X)
        } else if (N.type === a.ElementType.CHECKBOX) {
          const X = document.createElement('input')
          ;(X.type = 'checkbox'),
            ((P = N.checkbox) == null ? void 0 : P.value) &&
              X.setAttribute('checked', 'true'),
            r.append(X)
        } else if (N.type === a.ElementType.RADIO) {
          const X = document.createElement('input')
          ;(X.type = 'radio'),
            ((O = N.radio) == null ? void 0 : O.value) &&
              X.setAttribute('checked', 'true'),
            r.append(X)
        } else if (N.type === a.ElementType.TAB) {
          const X = document.createElement('span')
          ;(X.innerHTML = `${hn}${hn}`), r.append(X)
        } else if (N.type === a.ElementType.CONTROL) {
          const X = document.createElement('span'),
            f = n(((M = N.control) == null ? void 0 : M.value) || [])
          ;(X.innerHTML = f.innerHTML), r.append(X)
        } else if (
          !N.type ||
          N.type === a.ElementType.LATEX ||
          Qt.includes(N.type)
        ) {
          let X = ''
          if (
            (N.type === a.ElementType.DATE
              ? (X =
                  ((S = N.valueList) == null
                    ? void 0
                    : S.map(Q => Q.value).join('')) || '')
              : (X = N.value),
            !X)
          )
            continue
          const f = So(N, e)
          ;((I = i[F - 1]) == null ? void 0 : I.type) === a.ElementType.TITLE &&
            (X = X.replace(/^\n/, '')),
            (f.innerText = X.replace(
              new RegExp(`${H}`, 'g'),
              `
`
            )),
            r.append(f)
        }
      }
      return r
    }
    const o = document.createElement('div'),
      s = Xo(l)
    for (let i = 0; i < s.length; i++) {
      const r = s[i],
        R = !r.rowFlex || r.rowFlex === a.RowFlex.LEFT,
        c = document.createElement('div')
      if (!R) {
        const d = r.data[0]
        re(d)
          ? ((c.style.display = 'flex'),
            (c.style.justifyContent = Oo(d.rowFlex)))
          : (c.style.textAlign = Yn(r.rowFlex))
      }
      ;(c.innerHTML = n(r.data).innerHTML),
        R
          ? c.childNodes.forEach(d => {
              o.append(d.cloneNode(!0))
            })
          : o.append(c)
    }
    return o
  }
  function No(l) {
    if (!l || l.nodeType !== 3) return null
    const t = l.parentNode,
      e = t.nodeName === 'FONT' ? t.parentNode : t,
      n = Mo(e),
      o = l.textContent,
      s = window.getComputedStyle(e)
    if (!o || e.nodeName === 'STYLE') return null
    const i = {
      value: o,
      color: s.color,
      bold: Number(s.fontWeight) > 500,
      italic: s.fontStyle.includes('italic'),
      size: Math.floor(parseFloat(s.fontSize))
    }
    return (
      e.nodeName === 'SUB' || s.verticalAlign === 'sub'
        ? (i.type = a.ElementType.SUBSCRIPT)
        : (e.nodeName === 'SUP' || s.verticalAlign === 'super') &&
          (i.type = a.ElementType.SUPERSCRIPT),
      n !== a.RowFlex.LEFT && (i.rowFlex = n),
      s.backgroundColor !== 'rgba(0, 0, 0, 0)' &&
        (i.highlight = s.backgroundColor),
      s.textDecorationLine.includes('underline') && (i.underline = !0),
      s.textDecorationLine.includes('line-through') && (i.strikeout = !0),
      i
    )
  }
  function se(l, t) {
    const e = []
    function n(i) {
      if (i.nodeType === 3) {
        const r = No(i)
        r && e.push(r)
      } else if (i.nodeType === 1) {
        const r = i.childNodes
        for (let R = 0; R < r.length; R++) {
          const c = r[R]
          if (c.nodeName === 'BR')
            e.push({
              value: `
`
            })
          else if (c.nodeName === 'A') {
            const d = c,
              h = d.innerText
            h &&
              e.push({
                type: a.ElementType.HYPERLINK,
                value: '',
                valueList: [{ value: h }],
                url: d.href
              })
          } else if (/H[1-6]/.test(c.nodeName)) {
            const h = se(Io(c, 'div').outerHTML, t)
            e.push({
              value: '',
              type: a.ElementType.TITLE,
              level: qi[c.nodeName],
              valueList: h
            }),
              c.nextSibling &&
                !yi.includes(c.nextSibling.nodeName) &&
                e.push({
                  value: `
`
                })
          } else if (c.nodeName === 'UL' || c.nodeName === 'OL') {
            const d = c,
              h = { value: '', type: a.ElementType.LIST, valueList: [] }
            c.nodeName === 'OL'
              ? (h.listType = a.ListType.OL)
              : ((h.listType = a.ListType.UL),
                (h.listStyle = d.style.listStyleType)),
              d.querySelectorAll('li').forEach(u => {
                const g = se(u.innerHTML, t)
                g.forEach(T => {
                  T.value ===
                    `
` && (T.listWrap = !0)
                }),
                  g.unshift({
                    value: `
`
                  }),
                  h.valueList.push(...g)
              }),
              e.push(h)
          } else if (c.nodeName === 'HR')
            e.push({
              value: `
`,
              type: a.ElementType.SEPARATOR
            })
          else if (c.nodeName === 'IMG') {
            const { src: d, width: h, height: u } = c
            d &&
              h &&
              u &&
              e.push({
                width: h,
                height: u,
                value: d,
                type: a.ElementType.IMAGE
              })
          } else if (c.nodeName === 'VIDEO') {
            const { src: d, width: h, height: u } = c
            d &&
              h &&
              u &&
              e.push({
                value: '',
                type: a.ElementType.BLOCK,
                block: { type: a.BlockType.VIDEO, videoBlock: { src: d } },
                width: h,
                height: u
              })
          } else if (c.nodeName === 'IFRAME') {
            const { src: d, srcdoc: h, width: u, height: g } = c
            ;(d || h) &&
              u &&
              g &&
              e.push({
                value: '',
                type: a.ElementType.BLOCK,
                block: {
                  type: a.BlockType.IFRAME,
                  iframeBlock: { src: d, srcdoc: h }
                },
                width: parseInt(u),
                height: parseInt(g)
              })
          } else if (c.nodeName === 'TABLE') {
            const d = c,
              h = {
                type: a.ElementType.TABLE,
                value: `
`,
                colgroup: [],
                trList: []
              }
            if (
              (d.querySelectorAll('tr').forEach(u => {
                const g = window.getComputedStyle(u).height.replace('px', ''),
                  T = { height: Number(g), tdList: [] }
                u.querySelectorAll('th,td').forEach(P => {
                  const O = P,
                    M = se(O.innerHTML, t),
                    S = { colspan: O.colSpan, rowspan: O.rowSpan, value: M }
                  O.style.backgroundColor &&
                    (S.backgroundColor = O.style.backgroundColor),
                    T.tdList.push(S)
                }),
                  h.trList.push(T)
              }),
              h.trList.length)
            ) {
              const u = h.trList[0].tdList.reduce((T, P) => T + P.colspan, 0),
                g = Math.ceil(t.innerWidth / u)
              for (let T = 0; T < u; T++) h.colgroup.push({ width: g })
              e.push(h)
            }
          } else
            c.nodeName === 'INPUT' && c.type === a.ControlComponent.CHECKBOX
              ? e.push({
                  type: a.ElementType.CHECKBOX,
                  value: '',
                  checkbox: { value: c.checked }
                })
              : c.nodeName === 'INPUT' && c.type === a.ControlComponent.RADIO
                ? e.push({
                    type: a.ElementType.RADIO,
                    value: '',
                    radio: { value: c.checked }
                  })
                : (n(c),
                  c.nodeType === 1 &&
                    R !== r.length - 1 &&
                    window.getComputedStyle(c).display === 'block' &&
                    e.push({
                      value: `
`
                    }))
        }
      }
    }
    const o = document.createElement('div')
    ;(o.innerHTML = l), document.body.appendChild(o)
    const s = []
    return (
      o.childNodes.forEach(i => {
        var r
        i.nodeType !== 1 &&
          !((r = i.textContent) == null ? void 0 : r.trim()) &&
          s.push(i)
      }),
      s.forEach(i => i.remove()),
      n(o),
      o.remove(),
      e
    )
  }
  function le(l) {
    function t(e) {
      var o, s, i, r, R, c, d
      let n = ''
      for (let h = 0; h < e.length; h++) {
        const u = e[h]
        if (u.type === a.ElementType.TABLE) {
          n += `
`
          const g = u.trList
          for (let T = 0; T < g.length; T++) {
            const P = g[T]
            for (let O = 0; O < P.tdList.length; O++) {
              const M = P.tdList[O],
                S = t(z(M.value)),
                I = O === 0,
                F = P.tdList.length - 1 === O
              n += `${I ? '' : '  '}${S}${
                F
                  ? `
`
                  : ''
              }`
            }
          }
        } else if (u.type === a.ElementType.TAB) n += '	'
        else if (u.type === a.ElementType.HYPERLINK)
          n += u.valueList.map(g => g.value).join('')
        else if (u.type === a.ElementType.TITLE) n += `${t(z(u.valueList))}`
        else if (u.type === a.ElementType.LIST) {
          const g = z(u.valueList),
            T = Qn(g)
          let P = ''
          u.listType === a.ListType.UL && (P = ve[u.listStyle]),
            T.forEach((O, M) => {
              const S = T.size - 1 === M
              n += `
${P || `${M + 1}.`}${t(O)}${
                S
                  ? `
`
                  : ''
              }`
            })
        } else if (u.type === a.ElementType.CHECKBOX)
          n += ((o = u.checkbox) == null ? void 0 : o.value)
            ? '\u2611'
            : '\u25A1'
        else if (u.type === a.ElementType.RADIO)
          n += ((s = u.radio) == null ? void 0 : s.value) ? '\u2609' : '\u25CB'
        else if (
          !u.type ||
          u.type === a.ElementType.LATEX ||
          Qt.includes(u.type)
        ) {
          let g = ''
          if (u.type === a.ElementType.CONTROL) {
            const T =
              ((r = (i = u.control.value) == null ? void 0 : i[0]) == null
                ? void 0
                : r.value) || ''
            g = T
              ? `${((R = u.control) == null ? void 0 : R.preText) || ''}${T}${((c = u.control) == null ? void 0 : c.postText) || ''}`
              : ''
          } else
            u.type === a.ElementType.DATE
              ? (g =
                  ((d = u.valueList) == null
                    ? void 0
                    : d.map(T => T.value).join('')) || '')
              : (g = u.value)
          n += g.replace(
            new RegExp(`${H}`, 'g'),
            `
`
          )
        }
      }
      return n
    }
    return t(z(l))
  }
  function _e(l) {
    return Ee(l, ['metrics', 'style'])
  }
  function re(l) {
    return (
      !!(l == null ? void 0 : l.type) &&
      (bi.includes(l.type) || l.imgDisplay === a.ImageDisplay.INLINE)
    )
  }
  function Io(l, t) {
    const e = document.createElement(t)
    for (let n = 0; n < l.attributes.length; n++) {
      const o = l.attributes[n]
      e.setAttribute(o.name, o.value)
    }
    return (e.innerHTML = l.innerHTML), e
  }
  function Dn(l) {
    const t = []
    for (let e = 0; e < l.length; e++) {
      const n = l[e]
      n.imgDisplay === a.ImageDisplay.SURROUND && t.push(n)
    }
    return t
  }
  function Fo(l, t) {
    var e
    for (let n = l.length - 1; n >= 0; n--)
      ((e = l[n].imgFloatPosition) == null ? void 0 : e.pageNo) === t &&
        l.splice(n, 1)
  }
  function Le(l, t, e = a.LocationPosition.BEFORE) {
    var o, s, i, r, R, c, d, h, u, g, T, P
    if (
      !((s = (o = l[t]) == null ? void 0 : o.control) == null
        ? void 0
        : s.hide) &&
      !((r = (i = l[t]) == null ? void 0 : i.area) == null ? void 0 : r.hide)
    )
      return t
    let n = t
    if (e === a.LocationPosition.BEFORE)
      for (n = t - 1; n > 0; ) {
        if (
          !((c = (R = l[n]) == null ? void 0 : R.control) == null
            ? void 0
            : c.hide) &&
          !((h = (d = l[n]) == null ? void 0 : d.area) == null
            ? void 0
            : h.hide)
        )
          return n
        n--
      }
    else
      for (n = t + 1; n < l.length; ) {
        if (
          !((g = (u = l[n]) == null ? void 0 : u.control) == null
            ? void 0
            : g.hide) &&
          !((P = (T = l[n]) == null ? void 0 : T.area) == null
            ? void 0
            : P.hide)
        )
          return n
        n++
      }
    return n
  }
  function fo(l) {
    localStorage.setItem(
      Ne,
      JSON.stringify({ text: l.text, elementList: l.elementList })
    )
  }
  function Cn() {
    const l = localStorage.getItem(Ne)
    return l ? JSON.parse(l) : null
  }
  function En() {
    localStorage.removeItem(Ne)
  }
  function mo(l, t, e) {
    if (!l && !t && !e.length) return
    const n = new Blob([l], { type: 'text/plain' }),
      o = new Blob([t], { type: 'text/html' })
    if (window.ClipboardItem) {
      const s = new ClipboardItem({ [n.type]: n, [o.type]: o })
      window.navigator.clipboard.write([s])
    } else {
      const s = document.createElement('div')
      s.setAttribute('contenteditable', 'true'),
        (s.innerHTML = t),
        document.body.append(s)
      const i = window.getSelection(),
        r = document.createRange(),
        R = document.createElement('span')
      ;(R.innerText = `
`),
        s.append(R),
        r.selectNodeContents(s),
        i == null || i.removeAllRanges(),
        i == null || i.addRange(r),
        document.execCommand('copy'),
        s.remove()
    }
    fo({ text: l, elementList: e })
  }
  function Kn(l, t) {
    const e = oe(l, t)
    document.body.append(e)
    const n = e.innerText
    e.remove()
    const o = e.innerHTML
    ;(!n && !o && !l.length) || mo(n, o, z(l))
  }
  function Wo(l) {
    let t = !1
    for (let e = 0; e < l.items.length; e++)
      if (l.items[e].kind === 'file') {
        t = !0
        break
      }
    return t
  }
  function ze(l, t) {
    const e = l.getDraw()
    if (
      e.isReadonly() ||
      e.isDisabled() ||
      e.getControl().getIsDisabledPasteControl()
    )
      return
    const n = e.getRange(),
      { startIndex: o } = n.getRange(),
      s = e.getElementList()
    if (~o && !n.getIsSelectAll()) {
      const i = s[o]
      if ((i == null ? void 0 : i.titleId) || (i == null ? void 0 : i.listId)) {
        let r = 0
        for (; r < t.length; ) {
          const R = t[r]
          if (i.titleId && /^\n/.test(R.value)) break
          if (wi.includes(R.type)) {
            if ((t.splice(r, 1), R.valueList))
              for (let c = 0; c < R.valueList.length; c++) {
                const d = R.valueList[c]
                d.value === H ||
                  d.value ===
                    `
` ||
                  (t.splice(r, 0, d), r++)
              }
            r--
          }
          r++
        }
      }
      Tt(s, t, o, { isBreakWhenWrap: !0, editorOptions: e.getOptions() })
    }
    e.insertElementList(t)
  }
  function bn(l, t) {
    const e = l.getDraw()
    if (e.isReadonly() || e.isDisabled()) return
    const n = se(t, { innerWidth: e.getOriginalInnerWidth() })
    ze(l, n)
  }
  function $e(l, t) {
    const e = l.getDraw()
    if (e.isReadonly() || e.isDisabled()) return
    const n = e.getRange(),
      { startIndex: o } = n.getRange(),
      s = e.getElementList(),
      i = new FileReader()
    i.readAsDataURL(t),
      (i.onload = () => {
        const r = new Image(),
          R = i.result
        ;(r.src = R),
          (r.onload = () => {
            const c = {
              value: R,
              type: a.ElementType.IMAGE,
              width: r.width,
              height: r.height
            }
            ~o && Tt(s, [c], o, { editorOptions: e.getOptions() }),
              e.insertElementList([c])
          })
      })
  }
  function Vo(l, t) {
    const e = l.getDraw()
    if (e.isReadonly() || e.isDisabled()) return
    const n = t.clipboardData
    if (!n) return
    const { paste: o } = e.getOverride()
    if (o) {
      const i = o(t)
      if ((i == null ? void 0 : i.preventDefault) !== !1) return
    }
    if (!Wo(n)) {
      const i = n.getData('text'),
        r = Cn()
      if (r && Xn(i) === Xn(r.text)) {
        ze(l, r.elementList)
        return
      }
    }
    En()
    let s = !1
    for (let i = 0; i < n.items.length; i++)
      if (n.items[i].type === 'text/html') {
        s = !0
        break
      }
    for (let i = 0; i < n.items.length; i++) {
      const r = n.items[i]
      if (r.kind === 'string') {
        if (r.type === 'text/plain' && !s) {
          r.getAsString(R => {
            l.input(R)
          })
          break
        }
        if (r.type === 'text/html' && s) {
          r.getAsString(R => {
            bn(l, R)
          })
          break
        }
      } else if (r.kind === 'file' && r.type.includes('image')) {
        const R = r.getAsFile()
        R && $e(l, R)
      }
    }
  }
  async function Zo(l, t) {
    const e = l.getDraw()
    if (e.isReadonly() || e.isDisabled()) return
    const { paste: n } = e.getOverride()
    if (n) {
      const i = n()
      if ((i == null ? void 0 : i.preventDefault) !== !1) return
    }
    const o = await navigator.clipboard.readText(),
      s = Cn()
    if (o === (s == null ? void 0 : s.text)) {
      ze(l, s.elementList)
      return
    }
    if ((En(), t == null ? void 0 : t.isPlainText)) o && l.input(o)
    else {
      const i = await navigator.clipboard.read()
      let r = !1
      for (const R of i)
        if (R.types.includes('text/html')) {
          r = !0
          break
        }
      for (const R of i)
        if (R.types.includes('text/plain') && !r) {
          const d = await (await R.getType('text/plain')).text()
          d && l.input(d)
        } else if (R.types.includes('text/html') && r) {
          const d = await (await R.getType('text/html')).text()
          d && bn(l, d)
        } else if (R.types.some(c => c.startsWith('image/'))) {
          const c = R.types.find(h => h.startsWith('image/')),
            d = await R.getType(c)
          $e(l, d)
        }
    }
  }
  class Uo {
    constructor(t, e) {
      L(this, 'draw')
      L(this, 'container')
      L(this, 'agentCursorDom')
      L(this, 'canvasEvent')
      L(this, 'eventBus')
      ;(this.draw = t),
        (this.container = t.getContainer()),
        (this.canvasEvent = e),
        (this.eventBus = t.getEventBus())
      const n = document.createElement('textarea')
      ;(n.autocomplete = 'off'),
        n.classList.add(`${x}-inputarea`),
        (n.innerText = ''),
        this.container.append(n),
        (this.agentCursorDom = n),
        (n.onkeydown = o => this._keyDown(o)),
        (n.oninput = Ln(this._input.bind(this), 0)),
        (n.onpaste = o => this._paste(o)),
        n.addEventListener(
          'compositionstart',
          this._compositionstart.bind(this)
        ),
        n.addEventListener('compositionend', this._compositionend.bind(this))
    }
    getAgentCursorDom() {
      return this.agentCursorDom
    }
    _keyDown(t) {
      this.canvasEvent.keydown(t)
    }
    _input(t) {
      const e = t.data
      e && this.canvasEvent.input(e),
        this.eventBus.isSubscribe('input') && this.eventBus.emit('input', t)
    }
    _paste(t) {
      this.draw.isReadonly() ||
        !t.clipboardData ||
        (Vo(this.canvasEvent, t), t.preventDefault())
    }
    _compositionstart() {
      this.canvasEvent.compositionstart()
    }
    _compositionend(t) {
      this.canvasEvent.compositionend(t)
    }
  }
  class Yo {
    constructor(t, e) {
      L(this, 'ANIMATION_CLASS', `${x}-cursor--animation`)
      L(this, 'draw')
      L(this, 'container')
      L(this, 'options')
      L(this, 'position')
      L(this, 'cursorDom')
      L(this, 'cursorAgent')
      L(this, 'blinkTimeout')
      L(this, 'hitLineStartIndex')
      ;(this.draw = t),
        (this.container = t.getContainer()),
        (this.position = t.getPosition()),
        (this.options = t.getOptions()),
        (this.cursorDom = document.createElement('div')),
        this.cursorDom.classList.add(`${x}-cursor`),
        this.container.append(this.cursorDom),
        (this.cursorAgent = new Uo(t, e)),
        (this.blinkTimeout = null)
    }
    getCursorDom() {
      return this.cursorDom
    }
    getAgentDom() {
      return this.cursorAgent.getAgentCursorDom()
    }
    getAgentIsActive() {
      return this.getAgentDom() === document.activeElement
    }
    getAgentDomValue() {
      return this.getAgentDom().value
    }
    clearAgentDomValue() {
      this.getAgentDom().value = ''
    }
    getHitLineStartIndex() {
      return this.hitLineStartIndex
    }
    _blinkStart() {
      this.cursorDom.classList.add(this.ANIMATION_CLASS)
    }
    _blinkStop() {
      this.cursorDom.classList.remove(this.ANIMATION_CLASS)
    }
    _setBlinkTimeout() {
      this._clearBlinkTimeout(),
        (this.blinkTimeout = window.setTimeout(() => {
          this._blinkStart()
        }, 500))
    }
    _clearBlinkTimeout() {
      this.blinkTimeout &&
        (this._blinkStop(),
        window.clearTimeout(this.blinkTimeout),
        (this.blinkTimeout = null))
    }
    focus() {
      if (Qi && this.draw.isReadonly()) return
      const t = this.cursorAgent.getAgentCursorDom()
      document.activeElement !== t && (t.focus(), t.setSelectionRange(0, 0))
    }
    drawCursor(t) {
      let e = this.position.getCursorPosition()
      if (!e) return
      const { scale: n, cursor: o } = this.options,
        {
          color: s,
          width: i,
          isShow: r = !0,
          isBlink: R = !0,
          isFocus: c = !0,
          hitLineStartIndex: d
        } = C(C({}, o), t),
        h = this.draw.getHeight(),
        u = this.draw.getPageGap()
      ;(this.hitLineStartIndex = d),
        d && (e = this.position.getPositionList()[d])
      const {
          metrics: g,
          coordinate: { leftTop: T, rightTop: P },
          ascent: O,
          pageNo: M
        } = e,
        F =
          (this.draw.getZone().isMainActive() ? M : this.draw.getPageNo()) *
          (h + u),
        N = Ui * n,
        X = Math.min(g.height / 4, N),
        f = g.height + X * 2,
        Q = this.cursorAgent.getAgentCursorDom()
      c &&
        setTimeout(() => {
          this.focus()
        })
      const Z = g.boundingBoxDescent < 0 ? 0 : g.boundingBoxDescent,
        D = T[1] + O + Z - (f - X) + F,
        Y = d ? T[0] : P[0]
      if (((Q.style.left = `${Y}px`), (Q.style.top = `${D + f - N}px`), !r)) {
        this.recoveryCursor()
        return
      }
      const V = this.draw.isReadonly()
      ;(this.cursorDom.style.width = `${i * n}px`),
        (this.cursorDom.style.backgroundColor = s),
        (this.cursorDom.style.left = `${Y}px`),
        (this.cursorDom.style.top = `${D}px`),
        (this.cursorDom.style.display = V ? 'none' : 'block'),
        (this.cursorDom.style.height = `${f}px`),
        R ? this._setBlinkTimeout() : this._clearBlinkTimeout()
    }
    recoveryCursor() {
      ;(this.cursorDom.style.display = 'none'), this._clearBlinkTimeout()
    }
    moveCursorToVisible(t) {
      const { cursorPosition: e, direction: n } = t
      if (!e || !n) return
      const {
          pageNo: o,
          coordinate: { leftTop: s, leftBottom: i }
        } = e,
        r =
          o * (this.draw.getHeight() + this.draw.getPageGap()) +
          this.container.getBoundingClientRect().top,
        R = n === ht.UP,
        c = i[0],
        d = R ? s[1] + r : i[1] + r,
        h = Wi(this.container),
        u = { left: 0, right: 0, top: 0, bottom: 0 }
      if (h === document.documentElement)
        (u.right = window.innerWidth), (u.bottom = window.innerHeight)
      else {
        const {
          left: T,
          right: P,
          top: O,
          bottom: M
        } = h.getBoundingClientRect()
        ;(u.left = T), (u.right = P), (u.top = O), (u.bottom = M)
      }
      const { maskMargin: g } = this.options
      if (
        ((u.top += g[0]),
        (u.bottom -= g[2]),
        !(c >= u.left && c <= u.right && d >= u.top && d <= u.bottom))
      ) {
        const { scrollLeft: T, scrollTop: P } = h
        R ? h.scroll(T, P - (u.top - d)) : h.scroll(T, P + d - u.bottom)
      }
    }
  }
  var je
  ;(function (l) {
    ;(l[(l.LEFT = 0)] = 'LEFT'),
      (l[(l.CENTER = 1)] = 'CENTER'),
      (l[(l.RIGHT = 2)] = 'RIGHT')
  })(je || (je = {}))
  function Gt(l) {
    return zt ? l.metaKey : l.ctrlKey
  }
  ;(a.KeyMap = void 0),
    (function (l) {
      ;(l.Delete = 'Delete'),
        (l.Backspace = 'Backspace'),
        (l.Enter = 'Enter'),
        (l.Left = 'ArrowLeft'),
        (l.Right = 'ArrowRight'),
        (l.Up = 'ArrowUp'),
        (l.Down = 'ArrowDown'),
        (l.ESC = 'Escape'),
        (l.TAB = 'Tab'),
        (l.META = 'Meta'),
        (l.LEFT_BRACKET = '['),
        (l.RIGHT_BRACKET = ']'),
        (l.COMMA = ','),
        (l.PERIOD = '.'),
        (l.LEFT_ANGLE_BRACKET = '<'),
        (l.RIGHT_ANGLE_BRACKET = '>'),
        (l.EQUAL = '='),
        (l.MINUS = '-'),
        (l.PLUS = '+'),
        (l.A = 'a'),
        (l.B = 'b'),
        (l.C = 'c'),
        (l.D = 'd'),
        (l.E = 'e'),
        (l.F = 'f'),
        (l.G = 'g'),
        (l.H = 'h'),
        (l.I = 'i'),
        (l.J = 'j'),
        (l.K = 'k'),
        (l.L = 'l'),
        (l.M = 'm'),
        (l.N = 'n'),
        (l.O = 'o'),
        (l.P = 'p'),
        (l.Q = 'q'),
        (l.R = 'r'),
        (l.S = 's'),
        (l.T = 't'),
        (l.U = 'u'),
        (l.V = 'v'),
        (l.W = 'w'),
        (l.X = 'x'),
        (l.Y = 'y'),
        (l.Z = 'z'),
        (l.A_UPPERCASE = 'A'),
        (l.B_UPPERCASE = 'B'),
        (l.C_UPPERCASE = 'C'),
        (l.D_UPPERCASE = 'D'),
        (l.E_UPPERCASE = 'E'),
        (l.F_UPPERCASE = 'F'),
        (l.G_UPPERCASE = 'G'),
        (l.H_UPPERCASE = 'H'),
        (l.I_UPPERCASE = 'I'),
        (l.J_UPPERCASE = 'J'),
        (l.K_UPPERCASE = 'K'),
        (l.L_UPPERCASE = 'L'),
        (l.M_UPPERCASE = 'M'),
        (l.N_UPPERCASE = 'N'),
        (l.O_UPPERCASE = 'O'),
        (l.P_UPPERCASE = 'P'),
        (l.Q_UPPERCASE = 'Q'),
        (l.R_UPPERCASE = 'R'),
        (l.S_UPPERCASE = 'S'),
        (l.T_UPPERCASE = 'T'),
        (l.U_UPPERCASE = 'U'),
        (l.V_UPPERCASE = 'V'),
        (l.W_UPPERCASE = 'W'),
        (l.X_UPPERCASE = 'X'),
        (l.Y_UPPERCASE = 'Y'),
        (l.Z_UPPERCASE = 'Z'),
        (l.ZERO = '0'),
        (l.ONE = '1'),
        (l.TWO = '2'),
        (l.THREE = '3'),
        (l.FOUR = '4'),
        (l.FIVE = '5'),
        (l.SIX = '6'),
        (l.SEVEN = '7'),
        (l.EIGHT = '8'),
        (l.NINE = '9')
    })(a.KeyMap || (a.KeyMap = {}))
  class Ve {
    constructor(t, e) {
      L(this, 'element')
      L(this, 'control')
      ;(this.element = t), (this.control = e)
    }
    setElement(t) {
      this.element = t
    }
    getElement() {
      return this.element
    }
    getCode() {
      var t
      return ((t = this.element.control) == null ? void 0 : t.code) || null
    }
    getValue() {
      const t = this.control.getElementList(),
        { startIndex: e } = this.control.getRange(),
        n = t[e],
        o = []
      let s = e
      for (; s > 0; ) {
        const r = t[s]
        if (
          r.controlId !== n.controlId ||
          r.controlComponent === a.ControlComponent.PREFIX ||
          r.controlComponent === a.ControlComponent.PRE_TEXT
        )
          break
        r.controlComponent === a.ControlComponent.VALUE && o.unshift(r), s--
      }
      let i = e + 1
      for (; i < t.length; ) {
        const r = t[i]
        if (
          r.controlId !== n.controlId ||
          r.controlComponent === a.ControlComponent.POSTFIX ||
          r.controlComponent === a.ControlComponent.POST_TEXT
        )
          break
        r.controlComponent === a.ControlComponent.VALUE && o.push(r), i++
      }
      return o
    }
    setValue() {
      return -1
    }
    setSelect(t, e = {}, n = {}) {
      if (!n.isIgnoreDisabledRule && this.control.getIsDisabledControl(e))
        return
      const { control: o } = this.element,
        s = e.elementList || this.control.getElementList(),
        { startIndex: i } = e.range || this.control.getRange(),
        r = s[i]
      let R = i
      for (; R > 0; ) {
        const d = s[R]
        if (
          d.controlId !== r.controlId ||
          d.controlComponent === a.ControlComponent.PREFIX ||
          d.controlComponent === a.ControlComponent.PRE_TEXT
        )
          break
        if (d.controlComponent === a.ControlComponent.CHECKBOX) {
          const h = d.checkbox
          h.value = t.includes(h.code)
        }
        R--
      }
      let c = i + 1
      for (; c < s.length; ) {
        const d = s[c]
        if (
          d.controlId !== r.controlId ||
          d.controlComponent === a.ControlComponent.POSTFIX ||
          d.controlComponent === a.ControlComponent.POST_TEXT
        )
          break
        if (d.controlComponent === a.ControlComponent.CHECKBOX) {
          const h = d.checkbox
          h.value = t.includes(h.code)
        }
        c++
      }
      ;(o.code = t.join(',')),
        this.control.repaintControl({ curIndex: i, isSetCursor: !1 }),
        this.control.emitControlContentChange({ context: e })
    }
    keydown(t) {
      if (this.control.getIsDisabledControl()) return null
      const e = this.control.getRange()
      this.control.shrinkBoundary()
      const { startIndex: n, endIndex: o } = e
      return t.key === a.KeyMap.Backspace || t.key === a.KeyMap.Delete
        ? this.control.removeControl(n)
        : o
    }
    cut() {
      return -1
    }
  }
  class qe extends Ve {
    setSelect(t, e = {}, n = {}) {
      if (!n.isIgnoreDisabledRule && this.control.getIsDisabledControl(e))
        return
      const { control: o } = this.element,
        s = e.elementList || this.control.getElementList(),
        { startIndex: i } = e.range || this.control.getRange(),
        r = s[i]
      let R = i
      for (; R > 0; ) {
        const d = s[R]
        if (
          d.controlId !== r.controlId ||
          d.controlComponent === a.ControlComponent.PREFIX ||
          d.controlComponent === a.ControlComponent.PRE_TEXT
        )
          break
        if (d.controlComponent === a.ControlComponent.RADIO) {
          const h = d.radio
          h.value = t.includes(h.code)
        }
        R--
      }
      let c = i + 1
      for (; c < s.length; ) {
        const d = s[c]
        if (
          d.controlId !== r.controlId ||
          d.controlComponent === a.ControlComponent.POSTFIX ||
          d.controlComponent === a.ControlComponent.POST_TEXT
        )
          break
        if (d.controlComponent === a.ControlComponent.RADIO) {
          const h = d.radio
          h.value = t.includes(h.code)
        }
        c++
      }
      ;(o.code = t.join(',')),
        this.control.repaintControl({ curIndex: i, isSetCursor: !1 }),
        this.control.emitControlContentChange({ context: e })
    }
  }
  function yn(l) {
    const t = l.getDraw(),
      e = t.getPosition(),
      n = t.getRange()
    ;(l.isAllowDrag = !0),
      (l.cacheRange = k(n.getRange())),
      (l.cacheElementList = t.getElementList()),
      (l.cachePositionList = e.getPositionList()),
      (l.cachePositionContext = e.getPositionContext())
  }
  function wn(l, t) {
    const { checkbox: e, control: n } = l
    if (!n) t.getCheckboxParticle().setSelect(l)
    else {
      const o = (n == null ? void 0 : n.code) ? n.code.split(',') : []
      if (e == null ? void 0 : e.value) {
        const i = o.findIndex(r => r === e.code)
        o.splice(i, 1)
      } else (e == null ? void 0 : e.code) && o.push(e.code)
      const s = t.getControl().getActiveControl()
      s instanceof Ve && s.setSelect(o)
    }
  }
  function Hn(l, t) {
    const { radio: e, control: n } = l
    if (!n) t.getRadioParticle().setSelect(l)
    else {
      const o = (e == null ? void 0 : e.code) ? [e.code] : [],
        s = t.getControl().getActiveControl()
      s instanceof qe && s.setSelect(o)
    }
  }
  function po(l, t) {
    var p, U
    const e = t.getDraw(),
      n = e.isReadonly(),
      o = e.getRange(),
      s = e.getPosition(),
      i = o.getRange()
    if (l.button === je.RIGHT && (i.isCrossRowCol || !o.getIsCollapsed()))
      return
    if (
      !t.isAllowDrag &&
      !n &&
      i.startIndex !== i.endIndex &&
      o.getIsPointInRange(l.offsetX, l.offsetY)
    ) {
      yn(t)
      return
    }
    const R = l.target.dataset.index
    R && e.setPageNo(Number(R)), (t.isAllowSelection = !0)
    const c = k(s.getPositionContext()),
      d = s.adjustPositionContext({ x: l.offsetX, y: l.offsetY })
    if (!d) return
    const {
      index: h,
      isDirectHit: u,
      isCheckbox: g,
      isRadio: T,
      isImage: P,
      isTable: O,
      tdValueIndex: M,
      hitLineStartIndex: S
    } = d
    t.mouseDownStartPosition = v(C({}, d), {
      index: O ? M : h,
      x: l.offsetX,
      y: l.offsetY
    })
    const I = e.getElementList(),
      F = s.getPositionList(),
      N = O ? M : h,
      X = I[N],
      f = !!(u && P),
      Q = !!(u && g),
      Z = !!(u && T)
    if (~h) {
      let m = N,
        y = N
      if (l.shiftKey) {
        const { startIndex: K } = o.getRange()
        ~K &&
          s.getPositionContext().tdId === c.tdId &&
          (N > K ? (m = K) : (y = K))
      }
      if ((o.setRange(m, y), s.setCursorPosition(F[N]), Q && !n)) wn(X, e)
      else if (Z && !n) Hn(X, e)
      else if (
        X.controlComponent === a.ControlComponent.VALUE &&
        (((p = X.control) == null ? void 0 : p.type) ===
          a.ControlType.CHECKBOX ||
          ((U = X.control) == null ? void 0 : U.type) === a.ControlType.RADIO)
      ) {
        let K = N
        for (; K > 0; ) {
          const b = I[K]
          if (b.controlComponent === a.ControlComponent.CHECKBOX) {
            wn(b, e)
            break
          } else if (b.controlComponent === a.ControlComponent.RADIO) {
            Hn(b, e)
            break
          }
          K--
        }
      } else
        e.render({
          curIndex: N,
          isCompute: !1,
          isSubmitHistory: !1,
          isSetCursor: !f && !Q && !Z
        })
      S && t.getDraw().getCursor().drawCursor({ hitLineStartIndex: S })
    }
    const D = e.getPreviewer()
    if ((D.clearResizer(), f)) {
      const m = {
        dragDisable: n || (!X.controlId && e.getMode() === a.EditorMode.FORM)
      }
      X.type === a.ElementType.LATEX &&
        ((m.mime = 'svg'), (m.srcKey = 'laTexSVG')),
        D.drawResizer(X, F[N], m),
        e.getCursor().drawCursor({ isShow: !1 }),
        yn(t),
        (X.imgDisplay === a.ImageDisplay.SURROUND ||
          X.imgDisplay === a.ImageDisplay.FLOAT_TOP ||
          X.imgDisplay === a.ImageDisplay.FLOAT_BOTTOM) &&
          e.getImageParticle().createFloatImage(X)
    }
    const Y = e.getTableTool()
    Y.dispose(), O && !n && e.getMode() !== a.EditorMode.FORM && Y.render()
    const V = e.getHyperlinkParticle()
    V.clearHyperlinkPopup(),
      X.type === a.ElementType.HYPERLINK &&
        (Gt(l) ? V.openHyperlink(X) : V.drawHyperlinkPopup(X, F[N]))
    const W = e.getDateParticle()
    W.clearDatePicker(),
      X.type === a.ElementType.DATE && !n && W.renderDatePicker(X, F[N])
  }
  function Ze(l) {
    const t = A()
    return Reflect.set(l, 'dragId', t), t
  }
  function Ue(l, t) {
    return t.findIndex(e => e.dragId === l)
  }
  function Gn(l, t, e) {
    const n = e.getDraw()
    if (
      l.imgDisplay === a.ImageDisplay.SURROUND ||
      l.imgDisplay === a.ImageDisplay.FLOAT_TOP ||
      l.imgDisplay === a.ImageDisplay.FLOAT_BOTTOM
    ) {
      const o = t.offsetX - e.mouseDownStartPosition.x,
        s = t.offsetY - e.mouseDownStartPosition.y,
        i = l.imgFloatPosition
      l.imgFloatPosition = { x: i.x + o, y: i.y + s, pageNo: n.getPageNo() }
    }
    n.getImageParticle().destroyFloatImage()
  }
  function Qo(l, t) {
    var e, n, o, s
    if (t.isAllowDrop) {
      const i = t.getDraw()
      if (i.isReadonly() || i.isDisabled()) {
        t.mousedown(l)
        return
      }
      const r = i.getPosition(),
        R = r.getPositionList(),
        c = r.getPositionContext(),
        d = i.getRange(),
        h = t.cacheRange,
        u = t.cacheElementList,
        g = t.cachePositionList,
        T = t.cachePositionContext,
        P = d.getRange(),
        O = h.startIndex === h.endIndex,
        M = O ? h.startIndex - 1 : h.startIndex,
        S = h.endIndex
      if (
        P.startIndex >= M &&
        P.endIndex <= S &&
        ((e = t.cachePositionContext) == null ? void 0 : e.tdId) === c.tdId
      ) {
        i.clearSideEffect()
        let $ = !1,
          nt = !1
        if (O) {
          const Mt = u[S]
          if (
            Mt.type === a.ElementType.IMAGE ||
            Mt.type === a.ElementType.LATEX
          ) {
            if (
              (Gn(Mt, l, t),
              Mt.imgDisplay === a.ImageDisplay.SURROUND ||
                Mt.imgDisplay === a.ImageDisplay.FLOAT_TOP ||
                Mt.imgDisplay === a.ImageDisplay.FLOAT_BOTTOM)
            )
              i.getPreviewer().drawResizer(Mt), ($ = !0)
            else {
              const At = g[S]
              i.getPreviewer().drawResizer(Mt, At)
            }
            nt = Mt.imgDisplay === a.ImageDisplay.SURROUND
          }
        }
        d.replaceRange(C({}, h)),
          i.render({ isCompute: nt, isSubmitHistory: $, isSetCursor: !1 })
        return
      }
      const I = u.slice(M + 1, S + 1),
        F = I.find($ => $.controlId)
      if (F) {
        const $ = u[M + 1],
          nt = u[S]
        if (
          !(
            ((!$.controlId ||
              $.controlComponent === a.ControlComponent.PREFIX) &&
              (!nt.controlId ||
                nt.controlComponent === a.ControlComponent.POSTFIX)) ||
            ($.controlId === nt.controlId &&
              $.controlComponent === a.ControlComponent.PREFIX &&
              nt.controlComponent === a.ControlComponent.POSTFIX) ||
            (((n = $.control) == null ? void 0 : n.type) ===
              a.ControlType.TEXT &&
              $.controlComponent === a.ControlComponent.VALUE &&
              ((o = nt.control) == null ? void 0 : o.type) ===
                a.ControlType.TEXT &&
              nt.controlComponent === a.ControlComponent.VALUE)
          )
        ) {
          i.render({
            curIndex: P.startIndex,
            isCompute: !1,
            isSubmitHistory: !1
          })
          return
        }
      }
      const N = i.getControl(),
        X = i.getElementList(),
        f =
          !F ||
          !!X[P.startIndex].controlId ||
          !N.getIsElementListContainFullControl(I),
        Q = i.getOptions(),
        Z = I.map($ => {
          if (!$.type || $.type === a.ElementType.TEXT) {
            const nt = { value: $.value },
              Mt = yt
            return (
              f || Mt.push(...Ge),
              Mt.forEach(At => {
                const at = $[At]
                at !== void 0 && (nt[At] = at)
              }),
              nt
            )
          } else {
            let nt = k($)
            return (
              f && (nt = bt(nt, Ge)),
              St([nt], { isHandleFirstElement: !1, editorOptions: Q }),
              nt
            )
          }
        })
      Tt(X, Z, P.startIndex, { editorOptions: i.getOptions() })
      const D = u[M],
        Y = g[M],
        V = Ze(u[M]),
        W = Ze(u[S]),
        p = Z.length
      let U = P.startIndex,
        m = U + p
      const y = N.getActiveControl()
      if (
        (y && u[U].controlComponent !== a.ControlComponent.POSTFIX
          ? ((m = y.setValue(Z)), (U = m - p))
          : i.spliceElementList(X, U + 1, 0, Z),
        !~m)
      ) {
        i.render({ isSetCursor: !1 })
        return
      }
      const K = Ze(X[U]),
        b = Ze(X[m]),
        w = Ue(V, u),
        G = Ue(W, u),
        tt = u[G]
      if (tt.controlId && tt.controlComponent !== a.ControlComponent.POSTFIX)
        d.replaceRange(v(C({}, h), { startIndex: w, endIndex: G })),
          (s = N.getActiveControl()) == null || s.cut()
      else {
        let $ = !0
        if (T == null ? void 0 : T.isTable) {
          const { tableId: nt, trIndex: Mt, tdIndex: At } = T
          $ = !i.getOriginalElementList().some(j => {
            var E, Ct, J, Me
            return (
              j.id === nt &&
              ((Me =
                (J =
                  (Ct =
                    (E = j == null ? void 0 : j.trList) == null
                      ? void 0
                      : E[Mt]) == null
                    ? void 0
                    : Ct.tdList) == null
                  ? void 0
                  : J[At]) == null
                ? void 0
                : Me.deletable) === !1
            )
          })
        }
        $ && i.spliceElementList(u, w + 1, G - w)
      }
      const Rt = X[P.startIndex],
        ft = R[P.startIndex]
      let et = c.index
      et &&
        (Rt.tableId && !D.tableId
          ? Y.index < et && (et -= p)
          : !Rt.tableId && D.tableId && ft.index < et && (et += p),
        r.setPositionContext(v(C({}, c), { index: et })))
      const ot = Ue(K, X),
        Pt = Ue(b, X)
      d.setRange(
        O ? Pt : ot,
        Pt,
        P.tableId,
        P.startTdIndex,
        P.endTdIndex,
        P.startTrIndex,
        P.endTrIndex
      ),
        i.clearSideEffect()
      let gt = null
      if (O) {
        const nt = i.getElementList()[Pt]
        ;(nt.type === a.ElementType.IMAGE || nt.type === a.ElementType.LATEX) &&
          (Gn(nt, l, t), (gt = nt))
      }
      if (
        (i.render({ isSetCursor: !1 }),
        y
          ? N.emitControlContentChange()
          : D.controlId &&
            N.emitControlContentChange({
              context: { range: h, elementList: u },
              controlElement: D
            }),
        gt)
      )
        if (
          gt.imgDisplay === a.ImageDisplay.SURROUND ||
          gt.imgDisplay === a.ImageDisplay.FLOAT_TOP ||
          gt.imgDisplay === a.ImageDisplay.FLOAT_BOTTOM
        )
          i.getPreviewer().drawResizer(gt)
        else {
          const nt = r.getPositionList()[Pt]
          i.getPreviewer().drawResizer(gt, nt)
        }
    } else t.isAllowDrag && t.mousedown(l)
  }
  function Do(l, t) {
    const e = t.getDraw()
    if (!e.getOptions().pageOuterSelectionDisable) return
    const n = e.getPageContainer(),
      { x: o, y: s, width: i, height: r } = n.getBoundingClientRect()
    ;(l.x >= o && l.x <= o + i && l.y >= s && l.y <= s + r) ||
      t.setIsAllowSelection(!1)
  }
  function Co(l, t) {
    var F
    const e = t.getDraw()
    if (t.isAllowDrag) {
      const N = l.offsetX,
        X = l.offsetY,
        { startIndex: f, endIndex: Q } = t.cacheRange,
        Z = t.cachePositionList
      for (let Y = f + 1; Y <= Q; Y++) {
        const {
          coordinate: { leftTop: V, rightBottom: W }
        } = Z[Y]
        if (N >= V[0] && N <= W[0] && X >= V[1] && X <= W[1]) return
      }
      const D = (F = t.cacheRange) == null ? void 0 : F.startIndex
      if (D) {
        const Y = t.cacheElementList[D]
        ;(Y == null ? void 0 : Y.type) === a.ElementType.IMAGE &&
          (Y.imgDisplay === a.ImageDisplay.SURROUND ||
            Y.imgDisplay === a.ImageDisplay.FLOAT_TOP ||
            Y.imgDisplay === a.ImageDisplay.FLOAT_BOTTOM) &&
          (e.getPreviewer().clearResizer(),
          e.getImageParticle().dragFloatImage(l.movementX, l.movementY))
      }
      t.dragover(l), (t.isAllowDrop = !0)
      return
    }
    if (!t.isAllowSelection || !t.mouseDownStartPosition) return
    const o = l.target.dataset.index
    o && e.setPageNo(Number(o))
    const i = e.getPosition().getPositionByXY({ x: l.offsetX, y: l.offsetY })
    if (!~i.index) return
    const {
        index: r,
        isTable: R,
        tdValueIndex: c,
        tdIndex: d,
        trIndex: h,
        tableId: u
      } = i,
      {
        index: g,
        isTable: T,
        tdIndex: P,
        trIndex: O,
        tableId: M
      } = t.mouseDownStartPosition,
      S = R ? c : r,
      I = e.getRange()
    if (R && T && (d !== P || h !== O)) I.setRange(S, S, u, P, d, O, h)
    else {
      let N = ~S ? S : 0
      if ((T || R) && M !== u) return
      let X = g
      if ((X > N && ([X, N] = [N, X]), X === N)) return
      const f = e.getElementList(),
        Q = f[X + 1],
        Z = f[N]
      if (
        (Q == null ? void 0 : Q.controlComponent) ===
          a.ControlComponent.PLACEHOLDER &&
        (Z == null ? void 0 : Z.controlComponent) ===
          a.ControlComponent.PLACEHOLDER &&
        Q.controlId === Z.controlId
      )
        return
      I.setRange(X, N)
    }
    e.render({ isSubmitHistory: !1, isSetCursor: !1, isCompute: !1 })
  }
  function Eo(l, t) {
    var d, h
    const e = t.getDraw()
    if (e.isReadonly()) return
    const n = e.getRange()
    if (!n.getIsCanInput()) return
    const o = e.getControl(),
      s = e.getPosition()
    if (n.getIsCollapsed()) {
      const u = n.getRange(),
        T = e.getElementList()[u.startIndex]
      if (
        ((d = T.control) == null ? void 0 : d.hide) ||
        ((h = T.area) == null ? void 0 : h.hide)
      ) {
        const P = o.removeControl(u.startIndex)
        if (P) {
          ;(u.startIndex = P), (u.endIndex = P), n.replaceRange(u)
          const O = s.getPositionList()
          s.setCursorPosition(O[P])
        }
      }
    }
    const { startIndex: i, endIndex: r, isCrossRowCol: R } = n.getRange()
    let c
    if (R) {
      const u = e.getTableParticle().getRangeRowCol()
      if (!u) return
      let g = !1
      for (let T = 0; T < u.length; T++) {
        const P = u[T]
        for (let O = 0; O < P.length; O++) {
          const M = P[O]
          M.value.length > 1 &&
            (e.spliceElementList(M.value, 1, M.value.length - 1), (g = !0))
        }
      }
      c = g ? 0 : null
    } else if (o.getActiveControl() && o.getIsRangeCanCaptureEvent())
      (c = o.keydown(l)), c && o.emitControlContentChange()
    else {
      const u = s.getCursorPosition()
      if (!u) return
      const { index: g } = u,
        T = n.getIsCollapsed(),
        P = e.getElementList()
      if (T && g === 0) {
        const M = P[g]
        if (M.value === H) {
          M.listId && e.getListParticle().unsetList(), l.preventDefault()
          return
        }
      }
      const O = P[i]
      if (T && O.rowFlex && O.value === H) {
        const M = n.getRangeRowElementList()
        if (M) {
          const S = P[i - 1]
          M.forEach(I => {
            I.rowFlex = S == null ? void 0 : S.rowFlex
          })
        }
      }
      T ? e.spliceElementList(P, g, 1) : e.spliceElementList(P, i + 1, r - i),
        (c = T ? g - 1 : i)
    }
    e.getGlobalEvent().setCanvasEventAbility(),
      c === null
        ? (n.setRange(i, i), e.render({ curIndex: i, isSubmitHistory: !1 }))
        : (n.setRange(c, c), e.render({ curIndex: c }))
  }
  function Ko(l, t) {
    var d, h, u
    const e = t.getDraw()
    if (e.isReadonly()) return
    const n = e.getRange()
    if (!n.getIsCanInput()) return
    const { startIndex: o, endIndex: s, isCrossRowCol: i } = n.getRange(),
      r = e.getElementList(),
      R = e.getControl()
    if (n.getIsCollapsed()) {
      const g = r[o + 1]
      if (
        ((d = g == null ? void 0 : g.control) == null ? void 0 : d.hide) ||
        ((h = g == null ? void 0 : g.area) == null ? void 0 : h.hide)
      ) {
        const T = R.removeControl(o + 1)
        if (T) {
          const P = e.getPosition(),
            O = P.getPositionList()
          P.setCursorPosition(O[T])
        }
      }
    }
    let c
    if (i) {
      const g = e.getTableParticle().getRangeRowCol()
      if (!g) return
      let T = !1
      for (let P = 0; P < g.length; P++) {
        const O = g[P]
        for (let M = 0; M < O.length; M++) {
          const S = O[M]
          S.value.length > 1 &&
            (e.spliceElementList(S.value, 1, S.value.length - 1), (T = !0))
        }
      }
      c = T ? 0 : null
    } else if (R.getActiveControl() && R.getIsRangeWithinControl())
      (c = R.keydown(l)), c && R.emitControlContentChange()
    else if ((u = r[s + 1]) == null ? void 0 : u.controlId)
      c = R.removeControl(s + 1)
    else {
      const g = e.getPosition(),
        T = g.getCursorPosition()
      if (!T) return
      const { index: P } = T,
        O = g.getPositionContext()
      if (O.isDirectHit && O.isImage) e.spliceElementList(r, P, 1), (c = P - 1)
      else {
        const M = n.getIsCollapsed()
        if (!M) e.spliceElementList(r, o + 1, s - o)
        else {
          if (!r[P + 1]) return
          e.spliceElementList(r, P + 1, 1)
        }
        c = M ? P : o
      }
    }
    e.getGlobalEvent().setCanvasEventAbility(),
      c === null
        ? (n.setRange(o, o), e.render({ curIndex: o, isSubmitHistory: !1 }))
        : (n.setRange(c, c), e.render({ curIndex: c }))
  }
  function bo(l, t) {
    var T, P, O
    const e = t.getDraw()
    if (e.isReadonly()) return
    const n = e.getRange()
    if (!n.getIsCanInput()) return
    const { startIndex: o, endIndex: s } = n.getRange(),
      i = n.getIsCollapsed(),
      r = e.getElementList(),
      R = r[o],
      c = r[s]
    if (
      i &&
      c.listId &&
      c.value === H &&
      ((T = r[s + 1]) == null ? void 0 : T.listId) !== c.listId
    ) {
      e.getListParticle().unsetList()
      return
    }
    let d = { value: H }
    if (
      (l.shiftKey && R.listId && (d.listWrap = !0),
      Tt(r, [d], o, { isBreakWhenWrap: !0, editorOptions: e.getOptions() }),
      l.shiftKey &&
        c.areaId &&
        c.areaId !== ((P = r[s + 1]) == null ? void 0 : P.areaId) &&
        (d = bt(d, ee)),
      !(
        c.titleId && c.titleId !== ((O = r[s + 1]) == null ? void 0 : O.titleId)
      ))
    ) {
      const M = n.getRangeAnchorStyle(r, s)
      if (M) {
        const S = [...$t]
        M.controlComponent !== a.ControlComponent.POSTFIX && S.push(...yt),
          S.forEach(I => {
            const F = M[I]
            F !== void 0 && (d[I] = F)
          })
      }
    }
    const h = e.getControl(),
      u = h.getActiveControl()
    let g
    if (u && h.getIsRangeWithinControl())
      (g = h.setValue([d])), h.emitControlContentChange()
    else {
      const S = e.getPosition().getCursorPosition()
      if (!S) return
      const { index: I } = S
      i
        ? e.spliceElementList(r, I + 1, 0, [d])
        : e.spliceElementList(r, o + 1, s - o, [d]),
        (g = I + 1)
    }
    ~g && (n.setRange(g, g), e.render({ curIndex: g })), l.preventDefault()
  }
  function yo(l, t) {
    var F, N, X
    const e = t.getDraw()
    if (e.isReadonly()) return
    const o = e.getPosition(),
      s = o.getCursorPosition()
    if (!s) return
    const i = o.getPositionContext(),
      { index: r } = s
    if (r <= 0 && !i.isTable) return
    const R = e.getRange(),
      { startIndex: c, endIndex: d } = R.getRange(),
      h = R.getIsCollapsed(),
      u = e.getElementList(),
      g = e.getControl()
    if (
      e.getMode() === a.EditorMode.FORM &&
      g.getActiveControl() &&
      (((F = u[r]) == null ? void 0 : F.controlComponent) ===
        a.ControlComponent.PREFIX ||
        ((N = u[r]) == null ? void 0 : N.controlComponent) ===
          a.ControlComponent.PRE_TEXT)
    ) {
      g.initNextControl({ direction: ht.UP })
      return
    }
    let T = 1
    if (Gt(l)) {
      const f = e.getLetterReg(),
        Q = l.shiftKey && !h && c === (s == null ? void 0 : s.index) ? d : c
      if (f.test((X = u[Q]) == null ? void 0 : X.value)) {
        let Z = Q - 1
        for (; Z > 0; ) {
          const D = u[Z]
          if (!f.test(D.value)) break
          T++, Z--
        }
      }
    }
    const P = c - T
    let O = P,
      M = P
    if (
      (l.shiftKey &&
        s &&
        (c !== d
          ? c === s.index
            ? ((O = c), (M = d - T))
            : ((O = P), (M = d))
          : (M = d)),
      !l.shiftKey)
    ) {
      const f = u[c]
      if (f.type === a.ElementType.TABLE) {
        const Q = f.trList,
          Z = Q.length - 1,
          D = Q[Z],
          Y = D.tdList.length - 1,
          V = D.tdList[Y]
        o.setPositionContext({
          isTable: !0,
          index: c,
          trIndex: Z,
          tdIndex: Y,
          tdId: V.id,
          trId: D.id,
          tableId: f.id
        }),
          (O = V.value.length - 1),
          (M = O),
          e.getTableTool().render()
      } else if (f.tableId && c === 0) {
        const Z = e.getOriginalElementList()[i.index].trList
        t: for (let D = 0; D < Z.length; D++) {
          const Y = Z[D]
          if (Y.id !== f.trId) continue
          const V = Y.tdList
          for (let W = 0; W < V.length; W++)
            if (V[W].id === f.tdId) {
              if (D === 0 && W === 0)
                o.setPositionContext({ isTable: !1 }),
                  (O = i.index - 1),
                  (M = O),
                  e.getTableTool().dispose()
              else {
                let U = D,
                  m = W - 1
                m < 0 && ((U = D - 1), (m = Z[U].tdList.length - 1))
                const y = Z[U],
                  K = y.tdList[m]
                o.setPositionContext({
                  isTable: !0,
                  index: i.index,
                  trIndex: U,
                  tdIndex: m,
                  tdId: K.id,
                  trId: y.id,
                  tableId: f.tableId
                }),
                  (O = K.value.length - 1),
                  (M = O),
                  e.getTableTool().render()
              }
              break t
            }
        }
      }
    }
    if (!~O || !~M) return
    const S = e.getElementList()
    ;(O = Le(S, O)), (M = Le(S, M)), R.setRange(O, M)
    const I = O === M
    e.render({
      curIndex: I ? O : void 0,
      isSetCursor: I,
      isSubmitHistory: !1,
      isCompute: !1
    }),
      l.preventDefault()
  }
  function wo(l, t) {
    var X, f, Q
    const e = t.getDraw()
    if (e.isReadonly()) return
    const o = e.getPosition(),
      s = o.getCursorPosition()
    if (!s) return
    const { index: i } = s,
      r = o.getPositionList(),
      R = o.getPositionContext()
    if (i > r.length - 1 && !R.isTable) return
    const c = e.getRange(),
      { startIndex: d, endIndex: h } = c.getRange(),
      u = c.getIsCollapsed()
    let g = e.getElementList()
    const T = e.getControl()
    if (
      e.getMode() === a.EditorMode.FORM &&
      T.getActiveControl() &&
      (((X = g[i + 1]) == null ? void 0 : X.controlComponent) ===
        a.ControlComponent.POSTFIX ||
        ((f = g[i + 1]) == null ? void 0 : f.controlComponent) ===
          a.ControlComponent.POST_TEXT)
    ) {
      T.initNextControl({ direction: ht.DOWN })
      return
    }
    let P = 1
    if (Gt(l)) {
      const Z = e.getLetterReg(),
        D = l.shiftKey && !u && d === (s == null ? void 0 : s.index) ? h : d
      if (Z.test((Q = g[D + 1]) == null ? void 0 : Q.value)) {
        let Y = D + 2
        for (; Y < g.length; ) {
          const V = g[Y]
          if (!Z.test(V.value)) break
          P++, Y++
        }
      }
    }
    const O = h + P
    let M = O,
      S = O
    if (
      (l.shiftKey &&
        s &&
        (d !== h
          ? d === s.index
            ? ((M = d), (S = O))
            : ((M = d + P), (S = h))
          : (M = d)),
      !l.shiftKey)
    ) {
      const Z = g[h],
        D = g[h + 1]
      if ((D == null ? void 0 : D.type) === a.ElementType.TABLE) {
        const V = D.trList[0],
          W = V.tdList[0]
        o.setPositionContext({
          isTable: !0,
          index: h + 1,
          trIndex: 0,
          tdIndex: 0,
          tdId: W.id,
          trId: V.id,
          tableId: D.id
        }),
          (M = 0),
          (S = 0),
          e.getTableTool().render()
      } else if (Z.tableId && !D) {
        const V = e.getOriginalElementList()[R.index].trList
        t: for (let W = 0; W < V.length; W++) {
          const p = V[W]
          if (p.id !== Z.trId) continue
          const U = p.tdList
          for (let m = 0; m < U.length; m++)
            if (U[m].id === Z.tdId) {
              if (W === V.length - 1 && m === U.length - 1)
                o.setPositionContext({ isTable: !1 }),
                  (M = R.index),
                  (S = M),
                  (g = e.getElementList()),
                  e.getTableTool().dispose()
              else {
                let K = W,
                  b = m + 1
                b > U.length - 1 && ((K = W + 1), (b = 0))
                const w = V[K],
                  G = w.tdList[b]
                o.setPositionContext({
                  isTable: !0,
                  index: R.index,
                  trIndex: K,
                  tdIndex: b,
                  tdId: G.id,
                  trId: w.id,
                  tableId: Z.tableId
                }),
                  (M = 0),
                  (S = M),
                  e.getTableTool().render()
              }
              break t
            }
        }
      }
    }
    const I = g.length - 1
    if (M > I || S > I) return
    const F = e.getElementList()
    ;(M = Le(F, M, a.LocationPosition.AFTER)),
      (S = Le(F, S, a.LocationPosition.AFTER)),
      c.setRange(M, S)
    const N = M === S
    e.render({
      curIndex: N ? M : void 0,
      isSetCursor: N,
      isSubmitHistory: !1,
      isCompute: !1
    }),
      l.preventDefault()
  }
  function Ho(l, t) {
    const e = t.getDraw()
    if (e.isReadonly()) return
    l.preventDefault()
    const o = e.getControl()
    if (o.getActiveControl() && o.getIsRangeWithinControl())
      o.initNextControl({ direction: l.shiftKey ? ht.UP : ht.DOWN })
    else {
      const i = e.getRange(),
        r = e.getElementList(),
        { startIndex: R, endIndex: c } = i.getRange(),
        d = i.getRangeAnchorStyle(r, c),
        h = d ? Ut(d, yt) : null,
        u = v(C({}, h), { type: a.ElementType.TAB, value: '' })
      Tt(r, [u], R, { editorOptions: e.getOptions() }), e.insertElementList([u])
    }
  }
  function tn(l) {
    const { positionList: t, index: e, isUp: n, rowNo: o, cursorX: s } = l
    let i = -1
    const r = []
    if (n) {
      let R = e - 1
      for (; R >= 0; ) {
        const c = t[R]
        if ((R--, c.rowNo !== o)) {
          if (r[0] && r[0].rowNo !== c.rowNo) break
          r.unshift(c)
        }
      }
    } else {
      let R = e + 1
      for (; R < t.length; ) {
        const c = t[R]
        if ((R++, c.rowNo !== o)) {
          if (r[0] && r[0].rowNo !== c.rowNo) break
          r.push(c)
        }
      }
    }
    for (let R = 0; R < r.length; R++) {
      const c = r[R],
        {
          coordinate: {
            leftTop: [d],
            rightTop: [h]
          }
        } = c
      if ((R === r.length - 1 && (i = c.index), !(s < d || s > h))) {
        i = c.index
        break
      }
    }
    return i
  }
  function Go(l, t) {
    const e = t.getDraw()
    if (e.isReadonly()) return
    const o = e.getPosition(),
      s = o.getCursorPosition()
    if (!s) return
    const i = e.getRange(),
      { startIndex: r, endIndex: R } = i.getRange()
    let c = o.getPositionList()
    const d = l.key === a.KeyMap.Up
    let h = -1,
      u = -1
    const g = o.getPositionContext()
    if (
      !l.shiftKey &&
      g.isTable &&
      ((d && s.rowIndex === 0) || (!d && s.rowIndex === e.getRowCount() - 1))
    ) {
      const { index: P, trIndex: O, tdIndex: M, tableId: S } = g
      if (d)
        if (O === 0)
          o.setPositionContext({ isTable: !1 }),
            (h = P - 1),
            (u = h),
            e.getTableTool().dispose()
        else {
          let I = -1,
            F = -1
          const X = e.getOriginalElementList()[P].trList,
            f = X[O].tdList[M].colIndex
          t: for (let D = O - 1; D >= 0; D--) {
            const V = X[D].tdList
            for (let W = 0; W < V.length; W++) {
              const p = V[W]
              if (
                p.colIndex === f ||
                (p.colIndex + p.colspan - 1 >= f && p.colIndex <= f)
              ) {
                ;(I = D), (F = W)
                break t
              }
            }
          }
          if (!~I || !~F) return
          const Q = X[I],
            Z = Q.tdList[F]
          o.setPositionContext({
            isTable: !0,
            index: P,
            trIndex: I,
            tdIndex: F,
            tdId: Z.id,
            trId: Q.id,
            tableId: S
          }),
            (h = Z.value.length - 1),
            (u = h),
            e.getTableTool().render()
        }
      else {
        const F = e.getOriginalElementList()[P].trList
        if (O === F.length - 1)
          o.setPositionContext({ isTable: !1 }),
            (h = P),
            (u = h),
            e.getTableTool().dispose()
        else {
          let N = -1,
            X = -1
          const f = F[O].tdList[M].colIndex
          t: for (let D = O + 1; D < F.length; D++) {
            const V = F[D].tdList
            for (let W = 0; W < V.length; W++) {
              const p = V[W]
              if (
                p.colIndex === f ||
                (p.colIndex + p.colspan - 1 >= f && p.colIndex <= f)
              ) {
                ;(N = D), (X = W)
                break t
              }
            }
          }
          if (!~N || !~X) return
          const Q = F[N],
            Z = Q.tdList[X]
          o.setPositionContext({
            isTable: !0,
            index: P,
            trIndex: N,
            tdIndex: X,
            tdId: Z.id,
            trId: Q.id,
            tableId: S
          }),
            (h = Z.value.length - 1),
            (u = h),
            e.getTableTool().render()
        }
      }
    } else {
      let P = s
      l.shiftKey && (r === s.index ? (P = c[R]) : (P = c[r]))
      const {
        index: O,
        rowNo: M,
        rowIndex: S,
        coordinate: {
          rightTop: [I]
        }
      } = P
      if ((d && S === 0) || (!d && S === e.getRowCount() - 1)) return
      const F = tn({ positionList: c, index: O, rowNo: M, isUp: d, cursorX: I })
      if (F < 0) return
      ;(h = F),
        (u = F),
        l.shiftKey &&
          (r !== R
            ? r === s.index
              ? (h = r)
              : (u = R)
            : d
              ? (u = R)
              : (h = r))
      const X = e.getElementList()[F]
      if (X.type === a.ElementType.TABLE) {
        const { scale: f } = e.getOptions(),
          Q = e.getMargins(),
          Z = X.trList
        let D = -1,
          Y = -1,
          V = -1
        if (d) {
          t: for (let W = Z.length - 1; W >= 0; W--) {
            const U = Z[W].tdList
            for (let m = 0; m < U.length; m++) {
              const y = U[m],
                K = y.x * f + Q[3],
                b = y.width * f
              if (I >= K && I <= K + b) {
                const w = y.positionList,
                  G = w[w.length - 1],
                  tt =
                    tn({
                      positionList: w,
                      index: G.index + 1,
                      rowNo: G.rowNo - 1,
                      isUp: d,
                      cursorX: I
                    }) || G.index
                ;(D = W), (Y = m), (V = tt)
                break t
              }
            }
          }
        } else {
          t: for (let W = 0; W < Z.length; W++) {
            const U = Z[W].tdList
            for (let m = 0; m < U.length; m++) {
              const y = U[m],
                K = y.x * f + Q[3],
                b = y.width * f
              if (I >= K && I <= K + b) {
                const w = y.positionList,
                  G =
                    tn({
                      positionList: w,
                      index: -1,
                      rowNo: -1,
                      isUp: d,
                      cursorX: I
                    }) || 0
                ;(D = W), (Y = m), (V = G)
                break t
              }
            }
          }
        }
        if (~D && ~Y && ~V) {
          const W = Z[D],
            p = W.tdList[Y]
          o.setPositionContext({
            isTable: !0,
            index: F,
            trIndex: D,
            tdIndex: Y,
            tdId: p.id,
            trId: W.id,
            tableId: X.id
          }),
            (h = V),
            (u = h),
            (c = o.getPositionList()),
            e.getTableTool().render()
        }
      }
    }
    if (!~h || !~u) return
    h > u && ([h, u] = [u, h]), i.setRange(h, u)
    const T = h === u
    e.render({
      curIndex: T ? h : void 0,
      isSetCursor: T,
      isSubmitHistory: !1,
      isCompute: !1
    }),
      e
        .getCursor()
        .moveCursorToVisible({
          cursorPosition: c[d ? h : u],
          direction: d ? ht.UP : ht.DOWN
        })
  }
  function Jo(l, t) {
    if (t.isComposing) return
    const e = t.getDraw()
    if (l.key === a.KeyMap.Backspace) Eo(l, t)
    else if (l.key === a.KeyMap.Delete) Ko(l, t)
    else if (l.key === a.KeyMap.Enter) bo(l, t)
    else if (l.key === a.KeyMap.Left) yo(l, t)
    else if (l.key === a.KeyMap.Right) wo(l, t)
    else if (l.key === a.KeyMap.Up || l.key === a.KeyMap.Down) Go(l, t)
    else if (Gt(l) && l.key.toLocaleLowerCase() === a.KeyMap.Z) {
      if (e.isReadonly() && e.getMode() !== a.EditorMode.FORM) return
      e.getHistoryManager().undo(), l.preventDefault()
    } else if (Gt(l) && l.key.toLocaleLowerCase() === a.KeyMap.Y) {
      if (e.isReadonly() && e.getMode() !== a.EditorMode.FORM) return
      e.getHistoryManager().redo(), l.preventDefault()
    } else if (Gt(l) && l.key.toLocaleLowerCase() === a.KeyMap.C)
      t.copy(), l.preventDefault()
    else if (Gt(l) && l.key.toLocaleLowerCase() === a.KeyMap.X)
      t.cut(), l.preventDefault()
    else if (Gt(l) && l.key.toLocaleLowerCase() === a.KeyMap.A)
      t.selectAll(), l.preventDefault()
    else if (Gt(l) && l.key.toLocaleLowerCase() === a.KeyMap.S) {
      if (e.isReadonly()) return
      const n = e.getListener()
      n.saved && n.saved(e.getValue())
      const o = e.getEventBus()
      o.isSubscribe('saved') && o.emit('saved', e.getValue()),
        l.preventDefault()
    } else if (l.key === a.KeyMap.ESC) {
      t.clearPainterStyle()
      const n = e.getZone()
      n.isMainActive() || n.setZone(a.EditorZone.MAIN), l.preventDefault()
    } else l.key === a.KeyMap.TAB && Ho(l, t)
  }
  function Jn(l, t) {
    var f, Q
    const e = t.getDraw()
    if (e.isReadonly() || e.isDisabled()) return
    const o = e.getPosition().getCursorPosition()
    if (!l || !o) return
    const s = t.isComposing
    if (s && ((f = t.compositionInfo) == null ? void 0 : f.value) === l) return
    const i = e.getRange()
    if (!i.getIsCanInput()) return
    const r =
      i.getDefaultStyle() ||
      ((Q = t.compositionInfo) == null ? void 0 : Q.defaultStyle) ||
      null
    xn(t), s || e.getCursor().clearAgentDomValue()
    const {
        TEXT: R,
        HYPERLINK: c,
        SUBSCRIPT: d,
        SUPERSCRIPT: h,
        DATE: u,
        TAB: g
      } = a.ElementType,
      T = l.replaceAll(
        `
`,
        H
      ),
      { startIndex: P, endIndex: O } = i.getRange(),
      M = e.getElementList(),
      S = i.getRangeAnchorStyle(M, O)
    if (!S) return
    const I = e.isDesignMode(),
      F = splitText(T).map(Z => {
        var Y, V
        const D = { value: Z }
        if (
          I ||
          (!((Y = S.title) == null ? void 0 : Y.disabled) &&
            !((V = S.control) == null ? void 0 : V.disabled))
        ) {
          const W = M[O + 1]
          ;(!S.type ||
            S.type === R ||
            (S.type === c && (W == null ? void 0 : W.type) === c) ||
            (S.type === u && (W == null ? void 0 : W.type) === u) ||
            (S.type === d && (W == null ? void 0 : W.type) === d) ||
            (S.type === h && (W == null ? void 0 : W.type) === h)) &&
            Di.forEach(p => {
              if (p === 'groupIds' && !(W == null ? void 0 : W.groupIds)) return
              const U = S[p]
              U !== void 0 && (D[p] = U)
            }),
            (r || S.type === g) &&
              yt.forEach(p => {
                const U = (r == null ? void 0 : r[p]) || S[p]
                U !== void 0 && (D[p] = U)
              }),
            s && (D.underline = !0)
        }
        return D
      }),
      N = e.getControl()
    let X
    if (N.getActiveControl() && N.getIsRangeWithinControl())
      (X = N.setValue(F)), s || N.emitControlContentChange()
    else {
      const Z = P + 1
      P !== O && e.spliceElementList(M, Z, O - P),
        Tt(M, F, P, { editorOptions: e.getOptions() }),
        e.spliceElementList(M, Z, 0, F),
        (X = P + F.length)
    }
    ~X && (i.setRange(X, X), e.render({ curIndex: X, isSubmitHistory: !s })),
      s &&
        (t.compositionInfo = {
          elementList: M,
          value: T,
          startIndex: X - F.length,
          endIndex: X,
          defaultStyle: r
        })
  }
  function xn(l) {
    if (!l.compositionInfo) return
    const { elementList: t, startIndex: e, endIndex: n } = l.compositionInfo
    t.splice(e + 1, n - e),
      l.getDraw().getRange().setRange(e, e),
      (l.compositionInfo = null)
  }
  function xo(l) {
    const t = l.getDraw(),
      e = t.getRange(),
      { startIndex: n, endIndex: o } = e.getRange()
    if ((!~n && !~n) || t.isReadonly() || !e.getIsCanInput()) return
    const s = t.getElementList()
    let i = n,
      r = o
    if (n === o) {
      const u = t.getPosition().getPositionList(),
        g = u[n],
        T = g.rowNo,
        P = g.pageNo,
        O = []
      for (let S = 0; S < u.length; S++) {
        const I = u[S]
        if (I.pageNo > P) break
        I.pageNo === P && I.rowNo === T && O.push(S)
      }
      const M = O[0] - 1
      ;(i = M < 0 ? 0 : M), (r = O[O.length - 1])
    }
    const R = t.getOptions()
    Kn(s.slice(i + 1, r + 1), R)
    const c = t.getControl()
    let d
    c.getActiveControl() && c.getIsRangeWithinControl()
      ? ((d = c.cut()), c.emitControlContentChange())
      : (t.spliceElementList(s, i + 1, r - i), (d = i)),
      e.setRange(d, d),
      t.render({ curIndex: d })
  }
  function vo(l, t) {
    const e = l.getDraw(),
      { copy: n } = e.getOverride()
    if (n) {
      const r = n()
      if ((r == null ? void 0 : r.preventDefault) !== !1) return
    }
    const o = e.getRange()
    let s = null
    if (o.getRange().isCrossRowCol) {
      const r = o.getRangeTableElement()
      if (!r) return
      const R = e.getTableParticle().getRangeRowCol()
      if (!R) return
      const c = {
          type: a.ElementType.TABLE,
          value: '',
          colgroup: [],
          trList: []
        },
        d = R[0],
        h = d[0].colIndex,
        u = d[d.length - 1],
        g = u.colIndex + u.colspan - 1
      for (let T = h; T <= g; T++) c.colgroup.push(r.colgroup[T])
      for (let T = 0; T < R.length; T++) {
        const P = R[T],
          O = r.trList[P[0].rowIndex],
          M = { tdList: [], height: O.height, minHeight: O.minHeight }
        for (let S = 0; S < P.length; S++) M.tdList.push(P[S])
        c.trList.push(M)
      }
      s = z([c])
    } else
      s = o.getIsCollapsed()
        ? o.getRangeRowElementList()
        : o.getSelectionElementList()
    ;(t == null ? void 0 : t.isPlainText) &&
      (s == null ? void 0 : s.length) &&
      (s = [{ value: le(s) }]),
      !!(s == null ? void 0 : s.length) && Kn(s, e.getOptions())
  }
  function Bo(l, t) {
    var s, i
    const e = t.getDraw(),
      { drop: n } = e.getOverride()
    if (n) {
      const r = n(l)
      if ((r == null ? void 0 : r.preventDefault) !== !1) return
    }
    l.preventDefault()
    const o = (s = l.dataTransfer) == null ? void 0 : s.getData('text')
    if (o) t.input(o)
    else {
      const r = (i = l.dataTransfer) == null ? void 0 : i.files
      if (!r) return
      for (let R = 0; R < r.length; R++) {
        const c = r[R]
        c.type.startsWith('image') && $e(t, c)
      }
    }
  }
  function Ao(l) {
    var u
    if (!Intl.Segmenter) return null
    const t = l.getDraw(),
      e = t.getPosition().getCursorPosition()
    if (!e) return null
    const o = t.getRange().getRangeParagraphInfo()
    if (!o) return null
    const s =
      ((u = o == null ? void 0 : o.elementList) == null
        ? void 0
        : u
            .map(g =>
              !g.type ||
              (g.type !== a.ElementType.CONTROL && Qt.includes(g.type))
                ? g.value
                : H
            )
            .join('')) || ''
    if (!s) return null
    const i = e.index,
      r = o.startIndex,
      c = new Intl.Segmenter(void 0, { granularity: 'word' }).segment(s)
    let d = -1,
      h = -1
    for (const { segment: g, index: T, isWordLike: P } of c) {
      const O = T + r
      if (P && i >= O && i < O + g.length) {
        ;(d = O - 1), (h = d + g.length)
        break
      }
    }
    return ~d && ~h ? { startIndex: d, endIndex: h } : null
  }
  function ko(l) {
    const t = l.getDraw(),
      e = t.getPosition().getCursorPosition()
    if (!e) return null
    const { value: n, index: o } = e,
      s = t.getLetterReg()
    let i = 0,
      r = 0
    const R = De.test(n)
    if (R || s.test(n)) {
      const d = t.getElementList()
      let h = o - 1
      for (; h > 0; ) {
        const g = d[h].value
        if ((R && De.test(g)) || (!R && s.test(g))) i++, h--
        else break
      }
      let u = o + 1
      for (; u < d.length; ) {
        const g = d[u].value
        if ((R && De.test(g)) || (!R && s.test(g))) r++, u++
        else break
      }
    }
    const c = o - i - 1
    return c < 0 ? null : { startIndex: c, endIndex: o + r }
  }
  function _o(l, t) {
    const e = l.getDraw(),
      n = e.getPosition(),
      o = n.getPositionByXY({ x: t.offsetX, y: t.offsetY })
    if (o.isImage && o.isDirectHit) {
      e.getPreviewer().render()
      return
    }
    if (e.getIsPagingMode() && !~o.index && o.zone) {
      e.getZone().setZone(o.zone),
        e.clearSideEffect(),
        n.setPositionContext({ isTable: !1 })
      return
    }
    if ((o.isCheckbox || o.isRadio) && o.isDirectHit) return
    const s = e.getRange(),
      i = Ao(l) || ko(l)
    !i ||
      (s.setRange(i.startIndex, i.endIndex),
      e.render({ isSubmitHistory: !1, isSetCursor: !1, isCompute: !1 }),
      s.setRangeStyle())
  }
  function zo(l) {
    var g, T
    const t = l.getDraw(),
      n = t.getPosition().getCursorPosition()
    if (!n) return
    const { index: o } = n,
      s = t.getElementList()
    let i = 0,
      r = 0,
      R = o - 1
    for (; R > 0; ) {
      const P = s[R],
        O = s[R - 1]
      if (
        (P.value === H && !P.listWrap) ||
        P.listId !== (O == null ? void 0 : O.listId) ||
        P.titleId !== (O == null ? void 0 : O.titleId)
      )
        break
      i++, R--
    }
    let c = o + 1
    for (; c < s.length; ) {
      const P = s[c],
        O = s[c + 1]
      if (
        (P.value === H && !P.listWrap) ||
        P.listId !== (O == null ? void 0 : O.listId) ||
        P.titleId !== (O == null ? void 0 : O.titleId)
      )
        break
      r++, c++
    }
    const d = t.getRange()
    let h = o - i - 1
    if ((((g = s[h]) == null ? void 0 : g.value) !== H && (h -= 1), h < 0))
      return
    let u = o + r + 1
    ;(((T = s[u]) == null ? void 0 : T.value) === H || u > s.length - 1) &&
      (u -= 1),
      d.setRange(h, u),
      t.render({ isSubmitHistory: !1, isSetCursor: !1, isCompute: !1 })
  }
  var vn = { dblclick: _o, threeClick: zo }
  function $o(l) {
    l.isComposing = !0
  }
  function jo(l, t) {
    l.isComposing = !1
    const e = l.getDraw()
    if (t.data)
      setTimeout(() => {
        l.compositionInfo && Jn(t.data, l)
      }, 1)
    else {
      xn(l)
      const o = e.getRange(),
        { endIndex: s } = o.getRange()
      e.render({ curIndex: s, isSubmitHistory: !1 })
    }
    e.getCursor().clearAgentDomValue()
  }
  var Bn = { compositionstart: $o, compositionend: jo }
  function qo(l, t) {
    var I
    const e = t.getDraw()
    if (e.isReadonly()) return
    l.preventDefault()
    const o = e.getPageContainer()
    if (!Se(l.target, F => F === o, !0)) return
    const r = l.target.dataset.index
    r && e.setPageNo(Number(r))
    const R = e.getPosition(),
      c = R.adjustPositionContext({ x: l.offsetX, y: l.offsetY })
    if (!c) return
    const { isTable: d, tdValueIndex: h, index: u } = c,
      g = R.getPositionList(),
      T = d ? h : u
    ~u && (e.getRange().setRange(T, T), R.setCursorPosition(g[T]))
    const P = e.getCursor(),
      {
        cursor: { dragColor: O, dragWidth: M, dragFloatImageDisabled: S }
      } = e.getOptions()
    if (S) {
      const F =
        (I = t.cacheElementList) == null ? void 0 : I[t.cacheRange.startIndex]
      if (
        (F == null ? void 0 : F.type) === a.ElementType.IMAGE &&
        (F.imgDisplay === a.ImageDisplay.FLOAT_TOP ||
          F.imgDisplay === a.ImageDisplay.FLOAT_BOTTOM ||
          F.imgDisplay === a.ImageDisplay.SURROUND)
      )
        return
    }
    P.drawCursor({ width: M, color: O, isBlink: !1, isFocus: !1 })
  }
  var ts = { dragover: qo }
  class es {
    constructor(t) {
      L(this, 'isAllowSelection')
      L(this, 'isComposing')
      L(this, 'compositionInfo')
      L(this, 'isAllowDrag')
      L(this, 'isAllowDrop')
      L(this, 'cacheRange')
      L(this, 'cacheElementList')
      L(this, 'cachePositionList')
      L(this, 'cachePositionContext')
      L(this, 'mouseDownStartPosition')
      L(this, 'draw')
      L(this, 'pageContainer')
      L(this, 'pageList')
      L(this, 'range')
      L(this, 'position')
      ;(this.draw = t),
        (this.pageContainer = t.getPageContainer()),
        (this.pageList = t.getPageList()),
        (this.range = this.draw.getRange()),
        (this.position = this.draw.getPosition()),
        (this.isAllowSelection = !1),
        (this.isComposing = !1),
        (this.compositionInfo = null),
        (this.isAllowDrag = !1),
        (this.isAllowDrop = !1),
        (this.cacheRange = null),
        (this.cacheElementList = null),
        (this.cachePositionList = null),
        (this.cachePositionContext = null),
        (this.mouseDownStartPosition = null)
    }
    getDraw() {
      return this.draw
    }
    register() {
      this.pageContainer.addEventListener('click', this.click.bind(this)),
        this.pageContainer.addEventListener(
          'mousedown',
          this.mousedown.bind(this)
        ),
        this.pageContainer.addEventListener('mouseup', this.mouseup.bind(this)),
        this.pageContainer.addEventListener(
          'mouseleave',
          this.mouseleave.bind(this)
        ),
        this.pageContainer.addEventListener(
          'mousemove',
          this.mousemove.bind(this)
        ),
        this.pageContainer.addEventListener(
          'dblclick',
          this.dblclick.bind(this)
        ),
        this.pageContainer.addEventListener(
          'dragover',
          this.dragover.bind(this)
        ),
        this.pageContainer.addEventListener('drop', this.drop.bind(this)),
        Ni(this.pageContainer, this.threeClick.bind(this))
    }
    setIsAllowSelection(t) {
      ;(this.isAllowSelection = t), t || this.applyPainterStyle()
    }
    setIsAllowDrag(t) {
      ;(this.isAllowDrag = t), (this.isAllowDrop = t)
    }
    clearPainterStyle() {
      this.pageList.forEach(t => {
        t.style.cursor = 'text'
      }),
        this.draw.setPainterStyle(null)
    }
    applyPainterStyle() {
      const t = this.draw.getPainterStyle()
      if (!t || this.draw.isReadonly() || this.draw.isDisabled()) return
      const n = this.range.getSelection()
      if (!n) return
      const o = Object.keys(t)
      n.forEach(i => {
        o.forEach(r => {
          const R = r
          i[R] = t[R]
        })
      }),
        this.draw.render({ isSetCursor: !1 })
      const s = this.draw.getPainterOptions()
      ;(!s || !s.isDblclick) && this.clearPainterStyle()
    }
    selectAll() {
      const t = this.position.getPositionList()
      this.range.setRange(0, t.length - 1),
        this.draw.render({
          isSubmitHistory: !1,
          isSetCursor: !1,
          isCompute: !1
        })
    }
    mousemove(t) {
      Co(t, this)
    }
    mousedown(t) {
      po(t, this)
    }
    click() {
      pi &&
        !this.draw.isReadonly() &&
        this.draw.getCursor().getAgentDom().focus()
    }
    mouseup(t) {
      Qo(t, this)
    }
    mouseleave(t) {
      Do(t, this)
    }
    keydown(t) {
      Jo(t, this)
    }
    dblclick(t) {
      vn.dblclick(this, t)
    }
    threeClick() {
      vn.threeClick(this)
    }
    input(t) {
      Jn(t, this)
    }
    cut() {
      xo(this)
    }
    copy(t) {
      vo(this, t)
    }
    compositionstart() {
      Bn.compositionstart(this)
    }
    compositionend(t) {
      Bn.compositionend(this, t)
    }
    drop(t) {
      Bo(t, this)
    }
    dragover(t) {
      ts.dragover(t, this)
    }
  }
  class ns {
    constructor(t, e) {
      L(this, 'draw')
      L(this, 'options')
      L(this, 'cursor')
      L(this, 'canvasEvent')
      L(this, 'range')
      L(this, 'previewer')
      L(this, 'tableTool')
      L(this, 'hyperlinkParticle')
      L(this, 'control')
      L(this, 'dateParticle')
      L(this, 'imageParticle')
      L(this, 'dprMediaQueryList')
      L(this, 'clearSideEffect', t => {
        if (!this.cursor) return
        const e = (t == null ? void 0 : t.composedPath()[0]) || t.target,
          n = this.draw.getPageList()
        if (Se(e, i => n.includes(i), !0)) return
        if (Se(e, i => !!i && i.nodeType === 1 && !!i.getAttribute(_t), !0)) {
          this.watchCursorActive()
          return
        }
        this.cursor.recoveryCursor(),
          this.range.recoveryRangeStyle(),
          this.previewer.clearResizer(),
          this.tableTool.dispose(),
          this.hyperlinkParticle.clearHyperlinkPopup(),
          this.control.destroyControl(),
          this.dateParticle.clearDatePicker(),
          this.imageParticle.destroyFloatImage()
      })
      L(this, 'setCanvasEventAbility', () => {
        this.canvasEvent.setIsAllowDrag(!1),
          this.canvasEvent.setIsAllowSelection(!1)
      })
      L(this, 'setPageScale', t => {
        if (!t.ctrlKey) return
        t.preventDefault()
        const { scale: e } = this.options
        if (t.deltaY < 0) {
          const n = e * 10 + 1
          n <= 30 && this.draw.setPageScale(n / 10)
        } else {
          const n = e * 10 - 1
          n >= 5 && this.draw.setPageScale(n / 10)
        }
      })
      L(this, '_handleVisibilityChange', () => {
        if (document.visibilityState === 'visible') {
          const t = this.range.getRange(),
            e = !!~t.startIndex && !!~t.endIndex && t.startIndex === t.endIndex
          this.range.replaceRange(t),
            this.draw.render({
              isSetCursor: e,
              isCompute: !1,
              isSubmitHistory: !1,
              curIndex: t.startIndex
            })
        }
      })
      L(this, '_handleDprChange', () => {
        this.draw.setPageDevicePixel()
      })
      ;(this.draw = t),
        (this.options = t.getOptions()),
        (this.canvasEvent = e),
        (this.cursor = null),
        (this.range = t.getRange()),
        (this.previewer = t.getPreviewer()),
        (this.tableTool = t.getTableTool()),
        (this.hyperlinkParticle = t.getHyperlinkParticle()),
        (this.dateParticle = t.getDateParticle()),
        (this.imageParticle = t.getImageParticle()),
        (this.control = t.getControl()),
        (this.dprMediaQueryList = window.matchMedia(
          `(resolution: ${window.devicePixelRatio}dppx)`
        ))
    }
    register() {
      ;(this.cursor = this.draw.getCursor()), this.addEvent()
    }
    addEvent() {
      window.addEventListener('blur', this.clearSideEffect),
        document.addEventListener('mousedown', this.clearSideEffect),
        document.addEventListener('mouseup', this.setCanvasEventAbility),
        document.addEventListener('wheel', this.setPageScale, { passive: !1 }),
        document.addEventListener(
          'visibilitychange',
          this._handleVisibilityChange
        ),
        this.dprMediaQueryList.addEventListener('change', this._handleDprChange)
    }
    removeEvent() {
      window.removeEventListener('blur', this.clearSideEffect),
        document.removeEventListener('mousedown', this.clearSideEffect),
        document.removeEventListener('mouseup', this.setCanvasEventAbility),
        document.removeEventListener('wheel', this.setPageScale),
        document.removeEventListener(
          'visibilitychange',
          this._handleVisibilityChange
        ),
        this.dprMediaQueryList.removeEventListener(
          'change',
          this._handleDprChange
        )
    }
    watchCursorActive() {
      !this.range.getIsCollapsed() ||
        setTimeout(() => {
          var t, e
          ;((t = this.cursor) == null ? void 0 : t.getAgentIsActive()) ||
            (e = this.cursor) == null ||
            e.drawCursor({ isFocus: !1, isBlink: !1 })
        })
    }
  }
  class is {
    constructor(t) {
      L(this, 'undoStack', [])
      L(this, 'redoStack', [])
      L(this, 'maxRecordCount')
      this.maxRecordCount = t.getOptions().historyMaxRecordCount + 1
    }
    undo() {
      if (this.undoStack.length > 1) {
        const t = this.undoStack.pop()
        this.redoStack.push(t),
          this.undoStack.length && this.undoStack[this.undoStack.length - 1]()
      }
    }
    redo() {
      if (this.redoStack.length) {
        const t = this.redoStack.pop()
        this.undoStack.push(t), t()
      }
    }
    execute(t) {
      for (
        this.undoStack.push(t), this.redoStack.length && (this.redoStack = []);
        this.undoStack.length > this.maxRecordCount;

      )
        this.undoStack.shift()
    }
    isCanUndo() {
      return this.undoStack.length > 1
    }
    isCanRedo() {
      return !!this.redoStack.length
    }
    isStackEmpty() {
      return !this.undoStack.length && !this.redoStack.length
    }
    recovery() {
      ;(this.undoStack = []), (this.redoStack = [])
    }
    popUndo() {
      return this.undoStack.pop()
    }
  }
  class os {
    constructor(t) {
      L(this, 'cursorPosition')
      L(this, 'positionContext')
      L(this, 'positionList')
      L(this, 'floatPositionList')
      L(this, 'draw')
      L(this, 'eventBus')
      L(this, 'options')
      ;(this.positionList = []),
        (this.floatPositionList = []),
        (this.cursorPosition = null),
        (this.positionContext = { isTable: !1, isControl: !1 }),
        (this.draw = t),
        (this.eventBus = t.getEventBus()),
        (this.options = t.getOptions())
    }
    getFloatPositionList() {
      return this.floatPositionList
    }
    getTablePositionList(t) {
      const { index: e, trIndex: n, tdIndex: o } = this.positionContext
      return t[e].trList[n].tdList[o].positionList || []
    }
    getPositionList() {
      return this.positionContext.isTable
        ? this.getTablePositionList(this.draw.getOriginalElementList())
        : this.getOriginalPositionList()
    }
    getMainPositionList() {
      return this.positionContext.isTable
        ? this.getTablePositionList(this.draw.getOriginalMainElementList())
        : this.positionList
    }
    getOriginalPositionList() {
      const t = this.draw.getZone()
      return t.isHeaderActive()
        ? this.draw.getHeader().getPositionList()
        : t.isFooterActive()
          ? this.draw.getFooter().getPositionList()
          : this.positionList
    }
    getOriginalMainPositionList() {
      return this.positionList
    }
    getSelectionPositionList() {
      const { startIndex: t, endIndex: e } = this.draw.getRange().getRange()
      return t === e ? null : this.getPositionList().slice(t + 1, e + 1)
    }
    setPositionList(t) {
      this.positionList = t
    }
    setFloatPositionList(t) {
      this.floatPositionList = t
    }
    computePageRowPosition(t) {
      const {
          positionList: e,
          rowList: n,
          pageNo: o,
          startX: s,
          startY: i,
          startRowIndex: r,
          startIndex: R,
          innerWidth: c,
          zone: d
        } = t,
        {
          scale: h,
          table: { tdPadding: u }
        } = this.options
      let g = s,
        T = i,
        P = R
      for (let O = 0; O < n.length; O++) {
        const M = n[O]
        if (!M.isSurround) {
          const F = M.width + (M.offsetX || 0)
          M.rowFlex === a.RowFlex.CENTER
            ? (g += (c - F) / 2)
            : M.rowFlex === a.RowFlex.RIGHT && (g += c - F)
        }
        ;(g += M.offsetX || 0), (T += M.offsetY || 0)
        const S = g,
          I = T
        for (let F = 0; F < M.elementList.length; F++) {
          const N = M.elementList[F],
            X = N.metrics,
            f =
              (N.imgDisplay !== a.ImageDisplay.INLINE &&
                N.type === a.ElementType.IMAGE) ||
              N.type === a.ElementType.LATEX
                ? M.ascent - X.height
                : M.ascent
          N.left && (g += N.left)
          const Q = {
            pageNo: o,
            index: P,
            value: N.value,
            rowIndex: r + O,
            rowNo: O,
            metrics: X,
            left: N.left || 0,
            ascent: f,
            lineHeight: M.height,
            isFirstLetter: F === 0,
            isLastLetter: F === M.elementList.length - 1,
            coordinate: {
              leftTop: [g, T],
              leftBottom: [g, T + M.height],
              rightTop: [g + X.width, T],
              rightBottom: [g + X.width, T + M.height]
            }
          }
          if (
            N.imgDisplay === a.ImageDisplay.SURROUND ||
            N.imgDisplay === a.ImageDisplay.FLOAT_TOP ||
            N.imgDisplay === a.ImageDisplay.FLOAT_BOTTOM
          ) {
            const Z = e[e.length - 1]
            Z && ((Q.metrics = Z.metrics), (Q.coordinate = Z.coordinate)),
              N.imgFloatPosition ||
                (N.imgFloatPosition = { x: g, y: T, pageNo: o }),
              this.floatPositionList.push({
                pageNo: o,
                element: N,
                position: Q,
                isTable: t.isTable,
                index: t.index,
                tdIndex: t.tdIndex,
                trIndex: t.trIndex,
                tdValueIndex: P,
                zone: d
              })
          }
          if (
            (e.push(Q), P++, (g += X.width), N.type === a.ElementType.TABLE)
          ) {
            const Z = u[1] + u[3],
              D = u[0] + u[2]
            for (let Y = 0; Y < N.trList.length; Y++) {
              const V = N.trList[Y]
              for (let W = 0; W < V.tdList.length; W++) {
                const p = V.tdList[W]
                p.positionList = []
                const U = p.rowList,
                  m = this.computePageRowPosition({
                    positionList: p.positionList,
                    rowList: U,
                    pageNo: o,
                    startRowIndex: 0,
                    startIndex: 0,
                    startX: (p.x + u[3]) * h + S,
                    startY: (p.y + u[0]) * h + I,
                    innerWidth: (p.width - Z) * h,
                    isTable: !0,
                    index: P - 1,
                    tdIndex: W,
                    trIndex: Y,
                    zone: d
                  })
                if (
                  p.verticalAlign === a.VerticalAlign.MIDDLE ||
                  p.verticalAlign === a.VerticalAlign.BOTTOM
                ) {
                  const y = U.reduce((w, G) => w + G.height, 0),
                    K = (p.height - D) * h - y,
                    b = p.verticalAlign === a.VerticalAlign.MIDDLE ? K / 2 : K
                  Math.floor(b) > 0 &&
                    p.positionList.forEach(w => {
                      const {
                        coordinate: {
                          leftTop: G,
                          leftBottom: tt,
                          rightBottom: Rt,
                          rightTop: ft
                        }
                      } = w
                      ;(G[1] += b), (tt[1] += b), (Rt[1] += b), (ft[1] += b)
                    })
                }
                ;(g = m.x), (T = m.y)
              }
            }
            ;(g = S), (T = I)
          }
        }
        ;(g = s), (T += M.height)
      }
      return { x: g, y: T, index: P }
    }
    computePositionList() {
      var c
      this.positionList = []
      const t = this.draw.getInnerWidth(),
        e = this.draw.getPageRowList(),
        n = this.draw.getMargins(),
        o = n[3],
        i = this.draw.getHeader().getExtraHeight(),
        r = n[0] + i
      let R = 0
      for (let d = 0; d < e.length; d++) {
        const h = e[d],
          u = (c = h[0]) == null ? void 0 : c.startIndex
        this.computePageRowPosition({
          positionList: this.positionList,
          rowList: h,
          pageNo: d,
          startRowIndex: R,
          startIndex: u,
          startX: o,
          startY: r,
          innerWidth: t
        }),
          (R += h.length)
      }
    }
    computeRowPosition(t) {
      const { row: e, innerWidth: n } = t,
        o = []
      return (
        this.computePageRowPosition({
          positionList: o,
          innerWidth: n,
          rowList: [k(e)],
          pageNo: 0,
          startX: 0,
          startY: 0,
          startIndex: 0,
          startRowIndex: 0
        }),
        o
      )
    }
    setCursorPosition(t) {
      this.cursorPosition = t
    }
    getCursorPosition() {
      return this.cursorPosition
    }
    getPositionContext() {
      return this.positionContext
    }
    setPositionContext(t) {
      this.eventBus.emit('positionContextChange', {
        value: t,
        oldValue: this.positionContext
      }),
        (this.positionContext = t)
    }
    getPositionByXY(t) {
      var P, O, M, S, I
      const { x: e, y: n, isTable: o } = t
      let { elementList: s, positionList: i } = t
      s || (s = this.draw.getOriginalElementList()),
        i || (i = this.getOriginalPositionList())
      const r = this.draw.getZone(),
        R = (P = t.pageNo) != null ? P : this.draw.getPageNo(),
        c = r.isMainActive(),
        d = c ? R : 0
      if (!o) {
        const F = this.getFloatPositionByXY(
          v(C({}, t), {
            imgDisplays: [a.ImageDisplay.FLOAT_TOP, a.ImageDisplay.SURROUND]
          })
        )
        if (F) return F
      }
      for (let F = 0; F < i.length; F++) {
        const {
          index: N,
          pageNo: X,
          left: f,
          isFirstLetter: Q,
          coordinate: { leftTop: Z, rightTop: D, leftBottom: Y }
        } = i[F]
        if (d === X) {
          if (X > d) break
          if (Z[0] - f <= e && D[0] >= e && Z[1] <= n && Y[1] >= n) {
            let V = F
            const W = s[F]
            if (W.type === a.ElementType.TABLE)
              for (let U = 0; U < W.trList.length; U++) {
                const m = W.trList[U]
                for (let y = 0; y < m.tdList.length; y++) {
                  const K = m.tdList[y],
                    b = this.getPositionByXY({
                      x: e,
                      y: n,
                      td: K,
                      pageNo: R,
                      tablePosition: i[F],
                      isTable: !0,
                      elementList: K.value,
                      positionList: K.positionList
                    })
                  if (~b.index) {
                    const { index: w, hitLineStartIndex: G } = b,
                      tt = K.value[w]
                    return {
                      index: N,
                      isCheckbox:
                        b.isCheckbox ||
                        tt.type === a.ElementType.CHECKBOX ||
                        tt.controlComponent === a.ControlComponent.CHECKBOX,
                      isRadio:
                        tt.type === a.ElementType.RADIO ||
                        tt.controlComponent === a.ControlComponent.RADIO,
                      isControl: !!tt.controlId,
                      isImage: b.isImage,
                      isDirectHit: b.isDirectHit,
                      isTable: !0,
                      tdIndex: y,
                      trIndex: U,
                      tdValueIndex: w,
                      tdId: K.id,
                      trId: m.id,
                      tableId: W.id,
                      hitLineStartIndex: G
                    }
                  }
                }
              }
            if (
              W.type === a.ElementType.IMAGE ||
              W.type === a.ElementType.LATEX
            )
              return { index: V, isDirectHit: !0, isImage: !0 }
            if (
              W.type === a.ElementType.CHECKBOX ||
              W.controlComponent === a.ControlComponent.CHECKBOX
            )
              return { index: V, isDirectHit: !0, isCheckbox: !0 }
            if (
              W.type === a.ElementType.RADIO ||
              W.controlComponent === a.ControlComponent.RADIO
            )
              return { index: V, isDirectHit: !0, isRadio: !0 }
            let p
            if (s[N].value !== H) {
              const U = D[0] - Z[0]
              e < Z[0] + U / 2 && ((V = F - 1), Q && (p = F))
            }
            return {
              isDirectHit: !0,
              hitLineStartIndex: p,
              index: V,
              isControl: !!W.controlId
            }
          }
        }
      }
      if (!o) {
        const F = this.getFloatPositionByXY(
          v(C({}, t), { imgDisplays: [a.ImageDisplay.FLOAT_BOTTOM] })
        )
        if (F) return F
      }
      let h = !1,
        u = -1,
        g
      if (o) {
        const { scale: F } = this.options,
          { td: N, tablePosition: X } = t
        if (N && X) {
          const { leftTop: f } = X.coordinate,
            Q = N.x * F + f[0],
            Z = N.y * F + f[1],
            D = N.width * F,
            Y = N.height * F
          if (!(Q < e && e < Q + D && Z < n && n < Z + Y)) return { index: u }
        }
      }
      const T = i.filter(F => F.isLastLetter && F.pageNo === d)
      for (let F = 0; F < T.length; F++) {
        const {
          index: N,
          rowNo: X,
          coordinate: { leftTop: f, leftBottom: Q }
        } = T[F]
        if (n > f[1] && n <= Q[1]) {
          const Z = i.findIndex(W => W.pageNo === d && W.rowNo === X),
            D = s[Z],
            Y = i[Z],
            V =
              D.listStyle === a.ListStyle.CHECKBOX
                ? this.draw.getMargins()[3]
                : Y.coordinate.leftTop[0]
          if (e < V)
            ~Z ? (Y.value === H ? (u = Z) : ((u = Z - 1), (g = Z))) : (u = N)
          else {
            if (D.listStyle === a.ListStyle.CHECKBOX && e < f[0])
              return { index: Z, isDirectHit: !0, isCheckbox: !0 }
            u = N
          }
          h = !0
          break
        }
      }
      if (!h) {
        const F = this.draw.getHeader(),
          N = F.getHeight(),
          X = F.getHeaderTop() + N,
          f = this.draw.getFooter(),
          Z = this.draw.getHeight() - (f.getFooterBottom() + f.getHeight())
        if (c) {
          if (n < X) return { index: -1, zone: a.EditorZone.HEADER }
          if (n > Z) return { index: -1, zone: a.EditorZone.FOOTER }
        } else if (n <= Z && n >= X)
          return { index: -1, zone: a.EditorZone.MAIN }
        const D = this.draw.getMargins()
        if (n <= D[0])
          for (let Y = 0; Y < i.length; Y++) {
            const V = i[Y]
            if (V.pageNo !== d || V.rowNo !== 0) continue
            const { leftTop: W, rightTop: p } = V.coordinate
            if (
              e <= D[3] ||
              (e >= W[0] && e <= p[0]) ||
              ((O = i[Y + 1]) == null ? void 0 : O.rowNo) !== 0
            )
              return { index: V.index }
          }
        else {
          const Y = T[T.length - 1]
          if (Y) {
            const V = Y.rowNo
            for (let W = 0; W < i.length; W++) {
              const p = i[W]
              if (p.pageNo !== d || p.rowNo !== V) continue
              const { leftTop: U, rightTop: m } = p.coordinate
              if (
                e <= D[3] ||
                (e >= U[0] && e <= m[0]) ||
                ((M = i[W + 1]) == null ? void 0 : M.rowNo) !== V
              )
                return { index: p.index }
            }
          }
        }
        return {
          index:
            ((S = T[T.length - 1]) == null ? void 0 : S.index) || i.length - 1
        }
      }
      return {
        hitLineStartIndex: g,
        index: u,
        isControl: !!((I = s[u]) == null ? void 0 : I.controlId)
      }
    }
    getFloatPositionByXY(t) {
      var r
      const { x: e, y: n } = t,
        o = (r = t.pageNo) != null ? r : this.draw.getPageNo(),
        s = this.draw.getZone().getZone(),
        { scale: i } = this.options
      for (let R = 0; R < this.floatPositionList.length; R++) {
        const {
          position: c,
          element: d,
          isTable: h,
          index: u,
          trIndex: g,
          tdIndex: T,
          tdValueIndex: P,
          zone: O,
          pageNo: M
        } = this.floatPositionList[R]
        if (
          o === M &&
          d.type === a.ElementType.IMAGE &&
          d.imgDisplay &&
          t.imgDisplays.includes(d.imgDisplay) &&
          (!O || O === s)
        ) {
          const S = d.imgFloatPosition,
            I = S.x * i,
            F = S.y * i,
            N = d.width * i,
            X = d.height * i
          if (e >= I && e <= I + N && n >= F && n <= F + X)
            return h
              ? {
                  index: u,
                  isDirectHit: !0,
                  isImage: !0,
                  isTable: h,
                  trIndex: g,
                  tdIndex: T,
                  tdValueIndex: P,
                  tdId: d.tdId,
                  trId: d.trId,
                  tableId: d.tableId
                }
              : { index: c.index, isDirectHit: !0, isImage: !0 }
        }
      }
    }
    adjustPositionContext(t) {
      const e = this.getPositionByXY(t)
      if (!~e.index) return null
      if (e.isControl && this.draw.getMode() !== a.EditorMode.READONLY) {
        const {
            index: P,
            isTable: O,
            trIndex: M,
            tdIndex: S,
            tdValueIndex: I
          } = e,
          F = this.draw.getControl(),
          { newIndex: N } = F.moveCursor({
            index: P,
            isTable: O,
            trIndex: M,
            tdIndex: S,
            tdValueIndex: I
          })
        O ? (e.tdValueIndex = N) : (e.index = N)
      }
      const {
        index: n,
        isCheckbox: o,
        isRadio: s,
        isControl: i,
        isImage: r,
        isDirectHit: R,
        isTable: c,
        trIndex: d,
        tdIndex: h,
        tdId: u,
        trId: g,
        tableId: T
      } = e
      return (
        this.setPositionContext({
          isTable: c || !1,
          isCheckbox: o || !1,
          isRadio: s || !1,
          isControl: i || !1,
          isImage: r || !1,
          isDirectHit: R || !1,
          index: n,
          trIndex: d,
          tdIndex: h,
          tdId: u,
          trId: g,
          tableId: T
        }),
        e
      )
    }
    setSurroundPosition(t) {
      var d
      const {
        pageNo: e,
        row: n,
        rowElement: o,
        rowElementRect: s,
        surroundElementList: i,
        availableWidth: r
      } = t
      let R = s.x,
        c = 0
      if (
        i.length &&
        !re(o) &&
        !((d = o.control) == null ? void 0 : d.minWidth)
      )
        for (let h = 0; h < i.length; h++) {
          const u = i[h],
            g = u.imgFloatPosition
          if (g.pageNo !== e) continue
          const T = v(C({}, g), { width: u.width, height: u.height })
          if (Zi(s, T)) {
            n.isSurround = !0
            const P = T.width + T.x - s.x
            if (
              ((o.left = P),
              (n.width += P),
              (c += P),
              (R = T.x + T.width),
              n.width + o.metrics.width > r)
            ) {
              ;(o.left = 0), (n.width -= c)
              break
            }
          }
        }
      return { x: R, rowIncreaseWidth: c }
    }
  }
  class ss {
    constructor(t) {
      L(this, 'draw')
      L(this, 'options')
      L(this, 'range')
      L(this, 'listener')
      L(this, 'eventBus')
      L(this, 'position')
      L(this, 'historyManager')
      L(this, 'defaultStyle')
      ;(this.draw = t),
        (this.options = t.getOptions()),
        (this.listener = t.getListener()),
        (this.eventBus = t.getEventBus()),
        (this.position = t.getPosition()),
        (this.historyManager = t.getHistoryManager()),
        (this.range = { startIndex: -1, endIndex: -1 }),
        (this.defaultStyle = null)
    }
    getRange() {
      return this.range
    }
    clearRange() {
      this.setRange(-1, -1)
    }
    setDefaultStyle(t) {
      t
        ? (this.defaultStyle = C(C({}, this.defaultStyle), t))
        : (this.defaultStyle = null)
    }
    getDefaultStyle() {
      return this.defaultStyle
    }
    getRangeAnchorStyle(t, e) {
      const n = We(t, e)
      return n ? C(C({}, n), this.defaultStyle) : null
    }
    getIsRangeChange(t, e, n, o, s, i, r) {
      return (
        this.range.startIndex !== t ||
        this.range.endIndex !== e ||
        this.range.tableId !== n ||
        this.range.startTdIndex !== o ||
        this.range.endTdIndex !== s ||
        this.range.startTrIndex !== i ||
        this.range.endTrIndex !== r
      )
    }
    getIsCollapsed() {
      const { startIndex: t, endIndex: e } = this.range
      return t === e
    }
    getIsSelection() {
      const { startIndex: t, endIndex: e } = this.range
      return !~t && !~e ? !1 : t !== e
    }
    getSelection() {
      const { startIndex: t, endIndex: e } = this.range
      return t === e ? null : this.draw.getElementList().slice(t + 1, e + 1)
    }
    getSelectionElementList() {
      if (this.range.isCrossRowCol) {
        const t = this.draw.getTableParticle().getRangeRowCol()
        if (!t) return null
        const e = []
        for (let n = 0; n < t.length; n++) {
          const o = t[n]
          for (let s = 0; s < o.length; s++) {
            const i = o[s]
            e.push(...i.value)
          }
        }
        return e
      }
      return this.getSelection()
    }
    getTextLikeSelection() {
      const t = this.getSelection()
      return t ? t.filter(e => !e.type || Qt.includes(e.type)) : null
    }
    getTextLikeSelectionElementList() {
      const t = this.getSelectionElementList()
      return t ? t.filter(e => !e.type || Qt.includes(e.type)) : null
    }
    getRangeRow() {
      const { startIndex: t, endIndex: e } = this.range
      if (!~t && !~e) return null
      const n = this.position.getPositionList(),
        o = new Map()
      for (let s = t; s < e + 1; s++) {
        const { pageNo: i, rowNo: r } = n[s],
          R = o.get(i)
        R ? R.has(r) || R.add(r) : o.set(i, new Set([r]))
      }
      return o
    }
    getRangeRowElementList() {
      const { startIndex: t, endIndex: e, isCrossRowCol: n } = this.range
      if (!~t && !~e) return null
      if (n) return this.getSelectionElementList()
      const o = this.getRangeRow()
      if (!o) return null
      const s = this.position.getPositionList(),
        i = this.draw.getElementList(),
        r = []
      for (let R = 0; R < s.length; R++) {
        const c = s[R],
          d = o.get(c.pageNo)
        !d || (d.has(c.rowNo) && r.push(i[R]))
      }
      return r
    }
    getRangeParagraph() {
      const { startIndex: t, endIndex: e } = this.range
      if (!~t && !~e) return null
      const n = this.position.getPositionList(),
        o = this.draw.getElementList(),
        s = new Map()
      let i = t
      for (; i >= 0; ) {
        const { pageNo: c, rowNo: d } = n[i]
        let h = s.get(c)
        h || ((h = []), s.set(c, h)), h.includes(d) || h.unshift(d)
        const u = o[i],
          g = o[i - 1]
        if (
          (u.value === H && !u.listWrap) ||
          u.listId !== (g == null ? void 0 : g.listId) ||
          u.titleId !== (g == null ? void 0 : g.titleId)
        )
          break
        i--
      }
      const r = t === e
      if (!r) {
        let c = t + 1
        for (; c < e; ) {
          const { pageNo: d, rowNo: h } = n[c]
          let u = s.get(d)
          u || ((u = []), s.set(d, u)), u.includes(h) || u.push(h), c++
        }
      }
      let R = e
      for (r && o[t].value === H && (R += 1); R < n.length; ) {
        const c = o[R],
          d = o[R + 1]
        if (
          (c.value === H && !c.listWrap) ||
          c.listId !== (d == null ? void 0 : d.listId) ||
          c.titleId !== (d == null ? void 0 : d.titleId)
        )
          break
        const { pageNo: h, rowNo: u } = n[R]
        let g = s.get(h)
        g || ((g = []), s.set(h, g)), g.includes(u) || g.push(u), R++
      }
      return s
    }
    getRangeParagraphInfo() {
      const { startIndex: t, endIndex: e } = this.range
      if (!~t && !~e) return null
      let n = -1
      const o = [],
        s = this.getRangeParagraph()
      if (!s) return null
      const i = this.draw.getElementList(),
        r = this.position.getPositionList()
      for (let R = 0; R < r.length; R++) {
        const c = r[R],
          d = s.get(c.pageNo)
        !d || (d.includes(c.rowNo) && (~n || (n = c.index), o.push(i[R])))
      }
      return o.length ? { elementList: o, startIndex: n } : null
    }
    getRangeParagraphElementList() {
      var t
      return (
        ((t = this.getRangeParagraphInfo()) == null ? void 0 : t.elementList) ||
        null
      )
    }
    getRangeTableElement() {
      const t = this.position.getPositionContext()
      return t.isTable ? this.draw.getOriginalElementList()[t.index] : null
    }
    getIsSelectAll() {
      const t = this.draw.getElementList(),
        { startIndex: e, endIndex: n } = this.range
      return (
        e === 0 &&
        t.length - 1 === n &&
        !this.position.getPositionContext().isTable
      )
    }
    getIsPointInRange(t, e) {
      const { startIndex: n, endIndex: o } = this.range,
        s = this.position.getPositionList()
      for (let i = n + 1; i <= o && s[i]; i++) {
        const {
          coordinate: { leftTop: R, rightBottom: c }
        } = s[i]
        if (t >= R[0] && t <= c[0] && e >= R[1] && e <= c[1]) return !0
      }
      return !1
    }
    getKeywordRangeList(t) {
      const e = this.draw
          .getSearch()
          .getMatchList(t, this.draw.getOriginalElementList()),
        n = new Map()
      for (const s of e) {
        const i = n.get(s.groupId)
        if (i) i.endIndex += 1
        else {
          const {
              type: r,
              groupId: R,
              tableId: c,
              index: d,
              tdIndex: h,
              trIndex: u
            } = s,
            g = { startIndex: d, endIndex: d }
          r === vt.TABLE &&
            ((g.tableId = c),
            (g.startTdIndex = h),
            (g.endTdIndex = h),
            (g.startTrIndex = u),
            (g.endTrIndex = u)),
            n.set(R, g)
        }
      }
      const o = []
      return (
        n.forEach(s => {
          o.push(s)
        }),
        o
      )
    }
    getIsCanInput() {
      var i
      const { startIndex: t, endIndex: e } = this.getRange()
      if (!~t && !~e) return !1
      const n = this.draw.getElementList(),
        o = n[t]
      if (t === e)
        return (
          (o.controlComponent !== a.ControlComponent.PRE_TEXT ||
            ((i = n[t + 1]) == null ? void 0 : i.controlComponent) !==
              a.ControlComponent.PRE_TEXT) &&
          o.controlComponent !== a.ControlComponent.POST_TEXT
        )
      const s = n[e]
      return (
        (!o.controlId && !s.controlId) ||
        ((!o.controlId || o.controlComponent === a.ControlComponent.POSTFIX) &&
          (!s.controlId ||
            s.controlComponent === a.ControlComponent.POSTFIX)) ||
        (!!o.controlId &&
          s.controlId === o.controlId &&
          s.controlComponent !== a.ControlComponent.PRE_TEXT &&
          s.controlComponent !== a.ControlComponent.POST_TEXT &&
          s.controlComponent !== a.ControlComponent.POSTFIX)
      )
    }
    setRange(t, e, n, o, s, i, r) {
      this.getIsRangeChange(t, e, n, o, s, i, r) &&
        ((this.range.startIndex = t),
        (this.range.endIndex = e),
        (this.range.tableId = n),
        (this.range.startTdIndex = o),
        (this.range.endTdIndex = s),
        (this.range.startTrIndex = i),
        (this.range.endTrIndex = r),
        (this.range.isCrossRowCol = !!(o || s || i || r)),
        this.setDefaultStyle(null)),
        (this.range.zone = this.draw.getZone().getZone())
      const c = this.draw.getControl()
      if (~t && ~e) {
        const h = this.draw.getElementList()[t]
        if (h == null ? void 0 : h.controlId) {
          c.initControl()
          return
        }
      }
      c.destroyControl()
    }
    replaceRange(t) {
      this.setRange(
        t.startIndex,
        t.endIndex,
        t.tableId,
        t.startTdIndex,
        t.endTdIndex,
        t.startTrIndex,
        t.endTrIndex
      )
    }
    shrinkRange() {
      const { startIndex: t, endIndex: e } = this.range
      t === e ||
        (!~t && !~e) ||
        this.replaceRange(v(C({}, this.range), { startIndex: e }))
    }
    setRangeStyle() {
      var p, U
      const t = this.listener.rangeStyleChange,
        e = this.eventBus.isSubscribe('rangeStyleChange')
      if (!t && !e) return
      const { startIndex: n, endIndex: o, isCrossRowCol: s } = this.range
      if (!~n && !~o) return
      let i
      if (s) {
        const m = this.draw.getOriginalElementList(),
          y = this.position.getPositionContext()
        i = m[y.index]
      } else {
        const m = ~o ? o : 0,
          y = this.draw.getElementList()
        i = this.getRangeAnchorStyle(y, m)
      }
      if (!i) return
      const r = this.getSelection() || [i],
        R = i.type || a.ElementType.TEXT,
        c = i.font || this.options.defaultFont,
        d = i.size || this.options.defaultSize,
        h = !~r.findIndex(m => !m.bold),
        u = !~r.findIndex(m => !m.italic),
        g = !~r.findIndex(m => {
          var y
          return (
            !m.underline && !((y = m.control) == null ? void 0 : y.underline)
          )
        }),
        T = !~r.findIndex(m => !m.strikeout),
        P = i.color || null,
        O = i.highlight || null,
        M = i.rowFlex || null,
        S = (p = i.rowMargin) != null ? p : this.options.defaultRowMargin,
        I = i.dashArray || [],
        F = i.level || null,
        N = i.listType || null,
        X = i.listStyle || null,
        f = (g && i.textDecoration) || null,
        Q = !!this.draw.getPainterStyle(),
        Z = this.historyManager.isCanUndo(),
        D = this.historyManager.isCanRedo(),
        Y = i.groupIds || null,
        V = (U = i.extension) != null ? U : null,
        W = {
          type: R,
          undo: Z,
          redo: D,
          painter: Q,
          font: c,
          size: d,
          bold: h,
          italic: u,
          underline: g,
          strikeout: T,
          color: P,
          highlight: O,
          rowFlex: M,
          rowMargin: S,
          dashArray: I,
          level: F,
          listType: N,
          listStyle: X,
          groupIds: Y,
          textDecoration: f,
          extension: V
        }
      t && t(W), e && this.eventBus.emit('rangeStyleChange', W)
    }
    recoveryRangeStyle() {
      const t = this.listener.rangeStyleChange,
        e = this.eventBus.isSubscribe('rangeStyleChange')
      if (!t && !e) return
      const n = this.options.defaultFont,
        o = this.options.defaultSize,
        s = this.options.defaultRowMargin,
        i = !!this.draw.getPainterStyle(),
        r = this.historyManager.isCanUndo(),
        R = this.historyManager.isCanRedo(),
        c = {
          type: null,
          undo: r,
          redo: R,
          painter: i,
          font: n,
          size: o,
          bold: !1,
          italic: !1,
          underline: !1,
          strikeout: !1,
          color: null,
          highlight: null,
          rowFlex: null,
          rowMargin: s,
          dashArray: [],
          level: null,
          listType: null,
          listStyle: null,
          groupIds: null,
          textDecoration: null,
          extension: null
        }
      t && t(c), e && this.eventBus.emit('rangeStyleChange', c)
    }
    shrinkBoundary(t = {}) {
      const e = t.elementList || this.draw.getElementList(),
        n = t.range || this.getRange(),
        { startIndex: o, endIndex: s } = n
      if (!~o && !~s) return
      const i = e[o],
        r = e[s]
      if (o === s) {
        if (i.controlComponent === a.ControlComponent.PLACEHOLDER) {
          let R = o - 1
          for (; R > 0; ) {
            const c = e[R]
            if (
              c.controlId !== i.controlId ||
              c.controlComponent === a.ControlComponent.PREFIX ||
              c.controlComponent === a.ControlComponent.PRE_TEXT
            ) {
              ;(n.startIndex = R), (n.endIndex = R)
              break
            }
            R--
          }
        }
      } else {
        if (
          i.controlComponent === a.ControlComponent.PLACEHOLDER ||
          r.controlComponent === a.ControlComponent.PLACEHOLDER
        ) {
          let R = s - 1
          for (; R > 0; ) {
            const c = e[R]
            if (
              c.controlId !== r.controlId ||
              c.controlComponent === a.ControlComponent.PREFIX ||
              c.controlComponent === a.ControlComponent.PRE_TEXT
            ) {
              ;(n.startIndex = R), (n.endIndex = R)
              return
            }
            R--
          }
        }
        if (i.controlComponent === a.ControlComponent.PREFIX) {
          let R = o + 1
          for (; R < e.length; ) {
            const c = e[R]
            if (
              c.controlId !== i.controlId ||
              c.controlComponent === a.ControlComponent.VALUE
            ) {
              n.startIndex = R - 1
              break
            } else if (c.controlComponent === a.ControlComponent.PLACEHOLDER) {
              ;(n.startIndex = R - 1), (n.endIndex = R - 1)
              return
            }
            R++
          }
        }
        if (r.controlComponent !== a.ControlComponent.VALUE) {
          let R = o - 1
          for (; R > 0; ) {
            const c = e[R]
            if (
              c.controlId !== i.controlId ||
              c.controlComponent === a.ControlComponent.VALUE
            ) {
              n.startIndex = R
              break
            } else if (c.controlComponent === a.ControlComponent.PLACEHOLDER) {
              ;(n.startIndex = R), (n.endIndex = R)
              return
            }
            R--
          }
        }
      }
    }
    render(t, e, n, o, s) {
      t.save(),
        (t.globalAlpha = this.options.rangeAlpha),
        (t.fillStyle = this.options.rangeColor),
        t.fillRect(e, n, o, s),
        t.restore()
    }
    toString() {
      const t = this.getTextLikeSelection()
      return t
        ? t
            .map(e => e.value)
            .join('')
            .replace(new RegExp(H, 'g'), '')
        : ''
    }
  }
  class ls {
    constructor(t) {
      L(this, 'draw')
      L(this, 'options')
      L(this, 'imageCache')
      ;(this.draw = t),
        (this.options = t.getOptions()),
        (this.imageCache = new Map())
    }
    _renderBackgroundColor(t, e, n, o) {
      t.save(), (t.fillStyle = e), t.fillRect(0, 0, n, o), t.restore()
    }
    _drawImage(t, e, n, o) {
      const { background: s, scale: i } = this.options
      if (s.size === a.BackgroundSize.CONTAIN) {
        const r = e.width * i,
          R = e.height * i
        if (!s.repeat || s.repeat === a.BackgroundRepeat.NO_REPEAT)
          t.drawImage(e, 0, 0, r, R)
        else {
          let c = 0,
            d = 0
          const h =
              s.repeat === a.BackgroundRepeat.REPEAT ||
              s.repeat === a.BackgroundRepeat.REPEAT_X
                ? Math.ceil((n * i) / r)
                : 1,
            u =
              s.repeat === a.BackgroundRepeat.REPEAT ||
              s.repeat === a.BackgroundRepeat.REPEAT_Y
                ? Math.ceil((o * i) / R)
                : 1
          for (let g = 0; g < h; g++) {
            for (let T = 0; T < u; T++) t.drawImage(e, c, d, r, R), (d += R)
            ;(d = 0), (c += r)
          }
        }
      } else t.drawImage(e, 0, 0, n * i, o * i)
    }
    _renderBackgroundImage(t, e, n) {
      const { background: o } = this.options,
        s = this.imageCache.get(o.image)
      if (s) this._drawImage(t, s, e, n)
      else {
        const i = new Image()
        i.setAttribute('crossOrigin', 'Anonymous'),
          (i.src = o.image),
          (i.onload = () => {
            this.imageCache.set(o.image, i),
              this._drawImage(t, i, e, n),
              this.draw.render({ isCompute: !1, isSubmitHistory: !1 })
          })
      }
    }
    render(t, e) {
      const {
        background: { image: n, color: o, applyPageNumbers: s }
      } = this.options
      if (n && (!(s == null ? void 0 : s.length) || s.includes(e))) {
        const { width: i, height: r } = this.options
        this._renderBackgroundImage(t, i, r)
      } else {
        const i = this.draw.getCanvasWidth(e),
          r = this.draw.getCanvasHeight(e)
        this._renderBackgroundColor(t, o, i, r)
      }
    }
  }
  class en {
    constructor() {
      L(this, 'fillRect')
      L(this, 'fillColor')
      L(this, 'fillDecorationStyle')
      this.fillRect = this.clearFillInfo()
    }
    clearFillInfo() {
      return (
        (this.fillColor = void 0),
        (this.fillDecorationStyle = void 0),
        (this.fillRect = { x: 0, y: 0, width: 0, height: 0 }),
        this.fillRect
      )
    }
    recordFillInfo(t, e, n, o, s, i, r) {
      const R = !this.fillRect.width
      if (!R && (this.fillColor !== i || this.fillDecorationStyle !== r)) {
        this.render(t),
          this.clearFillInfo(),
          this.recordFillInfo(t, e, n, o, s, i, r)
        return
      }
      R && ((this.fillRect.x = e), (this.fillRect.y = n)),
        s && this.fillRect.height < s && (this.fillRect.height = s),
        (this.fillRect.width += o),
        (this.fillColor = i),
        (this.fillDecorationStyle = r)
    }
  }
  class rs extends en {
    constructor(t) {
      super()
      L(this, 'options')
      this.options = t.getOptions()
    }
    render(t) {
      if (!this.fillRect.width) return
      const { highlightAlpha: e } = this.options,
        { x: n, y: o, width: s, height: i } = this.fillRect
      t.save(),
        (t.globalAlpha = e),
        (t.fillStyle = this.fillColor),
        t.fillRect(n, o, s, i),
        t.restore(),
        this.clearFillInfo()
    }
  }
  class Rs {
    constructor(t) {
      L(this, 'draw')
      L(this, 'options')
      ;(this.draw = t), (this.options = t.getOptions())
    }
    render(t, e) {
      const { marginIndicatorColor: n, pageMode: o } = this.options,
        s = this.draw.getWidth(),
        i =
          o === a.PageMode.CONTINUITY
            ? this.draw.getCanvasHeight(e) / this.draw.getPagePixelRatio()
            : this.draw.getHeight(),
        r = this.draw.getMargins(),
        R = this.draw.getMarginIndicatorSize()
      t.save(), t.translate(0.5, 0.5), (t.strokeStyle = n), t.beginPath()
      const c = [r[3], r[0]],
        d = [s - r[1], r[0]],
        h = [r[3], i - r[2]],
        u = [s - r[1], i - r[2]]
      t.moveTo(c[0] - R, c[1]),
        t.lineTo(...c),
        t.lineTo(c[0], c[1] - R),
        t.moveTo(d[0] + R, d[1]),
        t.lineTo(...d),
        t.lineTo(d[0], d[1] - R),
        t.moveTo(h[0] - R, h[1]),
        t.lineTo(...h),
        t.lineTo(h[0], h[1] + R),
        t.moveTo(u[0] + R, u[1]),
        t.lineTo(...u),
        t.lineTo(u[0], u[1] + R),
        t.stroke(),
        t.restore()
    }
  }
  class as {
    constructor(t) {
      L(this, 'draw')
      L(this, 'options')
      L(this, 'position')
      L(this, 'searchKeyword')
      L(this, 'searchNavigateIndex')
      L(this, 'searchMatchList')
      ;(this.draw = t),
        (this.options = t.getOptions()),
        (this.position = t.getPosition()),
        (this.searchNavigateIndex = null),
        (this.searchKeyword = null),
        (this.searchMatchList = [])
    }
    getSearchKeyword() {
      return this.searchKeyword
    }
    setSearchKeyword(t) {
      ;(this.searchKeyword = t), (this.searchNavigateIndex = null)
    }
    searchNavigatePre() {
      if (!this.searchMatchList.length || !this.searchKeyword) return null
      if (this.searchNavigateIndex === null) this.searchNavigateIndex = 0
      else {
        let t = this.searchNavigateIndex - 1,
          e = !1
        const n = this.searchMatchList[this.searchNavigateIndex].groupId
        for (; t >= 0; ) {
          const o = this.searchMatchList[t]
          if (n !== o.groupId) {
            ;(e = !0),
              (this.searchNavigateIndex = t - (this.searchKeyword.length - 1))
            break
          }
          t--
        }
        if (!e) {
          if (
            this.searchMatchList[this.searchMatchList.length - 1].groupId === n
          )
            return null
          this.searchNavigateIndex =
            this.searchMatchList.length - 1 - (this.searchKeyword.length - 1)
        }
      }
      return this.searchNavigateIndex
    }
    searchNavigateNext() {
      if (!this.searchMatchList.length || !this.searchKeyword) return null
      if (this.searchNavigateIndex === null) this.searchNavigateIndex = 0
      else {
        let t = this.searchNavigateIndex + 1,
          e = !1
        const n = this.searchMatchList[this.searchNavigateIndex].groupId
        for (; t < this.searchMatchList.length; ) {
          const o = this.searchMatchList[t]
          if (n !== o.groupId) {
            ;(e = !0), (this.searchNavigateIndex = t)
            break
          }
          t++
        }
        if (!e) {
          if (this.searchMatchList[0].groupId === n) return null
          this.searchNavigateIndex = 0
        }
      }
      return this.searchNavigateIndex
    }
    searchNavigateScrollIntoView(t) {
      const {
          coordinate: { leftTop: e, leftBottom: n, rightTop: o },
          pageNo: s
        } = t,
        i = this.draw.getHeight(),
        r = this.draw.getPageGap(),
        R = s * (i + r),
        c = document.createElement('div')
      c.style.position = 'absolute'
      const d = 50
      ;(c.style.width = `${o[0] - e[0] + d}px`),
        (c.style.height = `${n[1] - e[1] + d}px`),
        (c.style.left = `${e[0]}px`),
        (c.style.top = `${e[1] + R}px`),
        this.draw.getContainer().append(c),
        c.scrollIntoView(!1),
        c.remove()
    }
    getSearchNavigateIndexList() {
      return this.searchNavigateIndex === null || !this.searchKeyword
        ? []
        : new Array(this.searchKeyword.length)
            .fill(this.searchNavigateIndex)
            .map((t, e) => t + e)
    }
    getSearchMatchList() {
      return this.searchMatchList
    }
    getSearchNavigateInfo() {
      if (!this.searchKeyword || !this.searchMatchList.length) return null
      const t =
        this.searchNavigateIndex !== null
          ? this.searchNavigateIndex / this.searchKeyword.length + 1
          : 0
      let e = 0,
        n = null
      for (let o = 0; o < this.searchMatchList.length; o++) {
        const s = this.searchMatchList[o]
        n !== s.groupId && ((n = s.groupId), (e += 1))
      }
      return { index: t, count: e }
    }
    getMatchList(t, e) {
      const n = t.toLocaleLowerCase(),
        o = [],
        s = [],
        i = e.length,
        r = []
      for (let h = 0; h < i; h++) e[h].type === a.ElementType.TABLE && r.push(h)
      let R = 0,
        c = 0
      for (; c < i - 1; ) {
        const h = r.length ? r[R] : i,
          u = e.slice(c, h)
        u.length && s.push({ index: c, type: vt.PAGE, elementList: u })
        const g = e[h]
        g && s.push({ index: h, type: vt.TABLE, elementList: [g] }),
          (c = h + 1),
          R++
      }
      function d(h, u, g, T) {
        if (!h) return
        const P = g
            .map(S => {
              var I, F
              return !S.type ||
                (Qt.includes(S.type) &&
                  S.controlComponent !== a.ControlComponent.CHECKBOX &&
                  !((I = S.control) == null ? void 0 : I.hide) &&
                  !((F = S.area) == null ? void 0 : F.hide))
                ? S.value
                : H
            })
            .filter(Boolean)
            .join('')
            .toLocaleLowerCase(),
          O = []
        let M = P.indexOf(h)
        for (; M !== -1; ) O.push(M), (M = P.indexOf(h, M + h.length))
        for (let S = 0; S < O.length; S++) {
          const I = O[S],
            F = A()
          for (let N = 0; N < h.length; N++) {
            const X = I + N + ((T == null ? void 0 : T.startIndex) || 0)
            o.push(C({ type: u, index: X, groupId: F }, T))
          }
        }
      }
      for (let h = 0; h < s.length; h++) {
        const u = s[h]
        if (u.type === vt.TABLE) {
          const g = u.elementList[0]
          for (let T = 0; T < g.trList.length; T++) {
            const P = g.trList[T]
            for (let O = 0; O < P.tdList.length; O++) {
              const M = P.tdList[O],
                S = {
                  tableId: g.id,
                  tableIndex: u.index,
                  trIndex: T,
                  tdIndex: O,
                  tdId: M.id
                }
              d(n, u.type, M.value, S)
            }
          }
        } else d(n, u.type, u.elementList, { startIndex: u.index })
      }
      return o
    }
    compute(t) {
      this.searchMatchList = this.getMatchList(
        t,
        this.draw.getOriginalElementList()
      )
    }
    render(t, e) {
      var R, c
      if (
        !this.searchMatchList ||
        !this.searchMatchList.length ||
        !this.searchKeyword
      )
        return
      const {
          searchMatchAlpha: n,
          searchMatchColor: o,
          searchNavigateMatchColor: s
        } = this.options,
        i = this.position.getOriginalPositionList(),
        r = this.draw.getOriginalElementList()
      t.save(), (t.globalAlpha = n)
      for (let d = 0; d < this.searchMatchList.length; d++) {
        const h = this.searchMatchList[d]
        let u = null
        if (h.type === vt.TABLE) {
          const { tableIndex: X, trIndex: f, tdIndex: Q, index: Z } = h
          u =
            (c = (R = r[X]) == null ? void 0 : R.trList[f].tdList[Q]) == null
              ? void 0
              : c.positionList[Z]
        } else u = i[h.index]
        if (!u) continue
        const {
          coordinate: { leftTop: g, leftBottom: T, rightTop: P },
          pageNo: O
        } = u
        if (O !== e) continue
        if (this.getSearchNavigateIndexList().includes(d)) {
          t.fillStyle = s
          const X = this.searchMatchList[d - 1]
          ;(!X || X.groupId !== h.groupId) &&
            this.searchNavigateScrollIntoView(u)
        } else t.fillStyle = o
        const S = g[0],
          I = g[1],
          F = P[0] - g[0],
          N = T[1] - g[1]
        t.fillRect(S, I, F, N)
      }
      t.restore()
    }
    replace(t, e) {
      var P, O, M, S
      if (this.draw.isReadonly() || !t || new RegExp(`${H}`, 'g').test(t))
        return
      let o = this.getSearchMatchList()
      const s = e == null ? void 0 : e.index
      if (ye(s)) {
        const I = []
        o.forEach(F => {
          const N = I[I.length - 1]
          !N || N[0].groupId !== F.groupId ? I.push([F]) : N.push(F)
        }),
          (o = I[s])
      }
      if (!(o == null ? void 0 : o.length)) return
      const i = this.draw.isDesignMode()
      let r = 0,
        R = 0,
        c = '',
        d = '',
        h = -1
      const u = this.draw.getOriginalElementList()
      for (let I = 0; I < o.length; I++) {
        const F = o[I]
        if (F.type === vt.TABLE) {
          const { tableIndex: N, trIndex: X, tdIndex: f, index: Q, tdId: Z } = F
          d && Z !== d && (R = 0), (d = Z)
          const D = N + r,
            Y = u[D].trList[X].tdList[f].value,
            V = Q + R,
            W = Y[V]
          if (
            !i &&
            (((P = W == null ? void 0 : W.control) == null
              ? void 0
              : P.deletable) === !1 ||
              ((O = W == null ? void 0 : W.title) == null
                ? void 0
                : O.deletable) === !1)
          )
            continue
          if (c === F.groupId) {
            this.draw.spliceElementList(Y, V, 1), R--
            continue
          }
          ~h || (h = I)
          for (let p = 0; p < t.length; p++) {
            const U = t[p]
            p === 0
              ? (W.value = U)
              : (this.draw.spliceElementList(Y, V + p, 0, [
                  v(C({}, W), { value: U })
                ]),
                R++)
          }
        } else {
          const N = F.index + r,
            X = u[N]
          if (
            (!i &&
              (((M = X == null ? void 0 : X.control) == null
                ? void 0
                : M.deletable) === !1 ||
                ((S = X == null ? void 0 : X.title) == null
                  ? void 0
                  : S.deletable) === !1)) ||
            (X.type === a.ElementType.CONTROL &&
              X.controlComponent !== a.ControlComponent.VALUE)
          )
            continue
          if ((~h || (h = I), c === F.groupId)) {
            this.draw.spliceElementList(u, N, 1), r--
            continue
          }
          for (let f = 0; f < t.length; f++) {
            const Q = t[f]
            f === 0
              ? (X.value = Q)
              : (this.draw.spliceElementList(u, N + f, 0, [
                  v(C({}, X), { value: Q })
                ]),
                r++)
          }
        }
        c = F.groupId
      }
      if (!~h) return
      const g = o[h],
        T = g.index + (t.length - 1)
      if (g.type === vt.TABLE) {
        const { tableIndex: I, trIndex: F, tdIndex: N, index: X } = g,
          f = u[I].trList[F].tdList[N].value[X]
        this.position.setPositionContext({
          isTable: !0,
          index: I,
          trIndex: F,
          tdIndex: N,
          tdId: f.tdId,
          trId: f.trId,
          tableId: f.tableId
        })
      } else this.position.setPositionContext({ isTable: !1 })
      this.draw.getRange().setRange(T, T), this.draw.render({ curIndex: T })
    }
  }
  class cs extends en {
    constructor(t) {
      super()
      L(this, 'options')
      this.options = t.getOptions()
    }
    render(t) {
      if (!this.fillRect.width) return
      const { scale: e, strikeoutColor: n } = this.options,
        { x: o, y: s, width: i } = this.fillRect
      t.save(), (t.lineWidth = e), (t.strokeStyle = n)
      const r = s + 0.5
      t.beginPath(),
        t.moveTo(o, r),
        t.lineTo(o + i, r),
        t.stroke(),
        t.restore(),
        this.clearFillInfo()
    }
  }
  ;(a.TextDecorationStyle = void 0),
    (function (l) {
      ;(l.SOLID = 'solid'),
        (l.DOUBLE = 'double'),
        (l.DASHED = 'dashed'),
        (l.DOTTED = 'dotted'),
        (l.WAVY = 'wavy')
    })(a.TextDecorationStyle || (a.TextDecorationStyle = {}))
  var Re
  ;(function (l) {
    ;(l.SOLID = 'solid'), (l.DASHED = 'dashed'), (l.DOTTED = 'dotted')
  })(Re || (Re = {}))
  class ds extends en {
    constructor(t) {
      super()
      L(this, 'options')
      this.options = t.getOptions()
    }
    _drawLine(t, e, n, o, s) {
      const i = e + o
      switch ((t.beginPath(), s)) {
        case Re.DASHED:
          t.setLineDash([3, 1])
          break
        case Re.DOTTED:
          t.setLineDash([1, 1])
          break
      }
      t.moveTo(e, n), t.lineTo(i, n), t.stroke()
    }
    _drawDouble(t, e, n, o) {
      const s = 3,
        i = e + o,
        r = n + s * this.options.scale
      t.beginPath(),
        t.moveTo(e, n),
        t.lineTo(i, n),
        t.stroke(),
        t.beginPath(),
        t.moveTo(e, r),
        t.lineTo(i, r),
        t.stroke()
    }
    _drawWave(t, e, n, o) {
      const { scale: s } = this.options,
        i = 1.2 * s,
        r = 1 / s,
        R = n + 2 * i
      t.beginPath()
      for (let c = 0; c < o; c++) {
        const d = i * Math.sin(r * c)
        t.lineTo(e + c, R + d)
      }
      t.stroke()
    }
    render(t) {
      if (!this.fillRect.width) return
      const { underlineColor: e, scale: n } = this.options,
        { x: o, y: s, width: i } = this.fillRect
      t.save(), (t.strokeStyle = this.fillColor || e), (t.lineWidth = n)
      const r = Math.floor(s + 2 * t.lineWidth) + 0.5
      switch (this.fillDecorationStyle) {
        case a.TextDecorationStyle.WAVY:
          this._drawWave(t, o, r, i)
          break
        case a.TextDecorationStyle.DOUBLE:
          this._drawDouble(t, o, r, i)
          break
        case a.TextDecorationStyle.DASHED:
          this._drawLine(t, o, r, i, Re.DASHED)
          break
        case a.TextDecorationStyle.DOTTED:
          this._drawLine(t, o, r, i, Re.DOTTED)
          break
        default:
          this._drawLine(t, o, r, i)
          break
      }
      t.restore(), this.clearFillInfo()
    }
  }
  class hs {
    constructor(t) {
      L(this, 'draw')
      L(this, 'options')
      L(this, 'ctx')
      L(this, 'curX')
      L(this, 'curY')
      L(this, 'text')
      L(this, 'curStyle')
      L(this, 'curColor')
      L(this, 'cacheMeasureText')
      ;(this.draw = t),
        (this.options = t.getOptions()),
        (this.ctx = t.getCtx()),
        (this.curX = -1),
        (this.curY = -1),
        (this.text = ''),
        (this.curStyle = ''),
        (this.cacheMeasureText = new Map())
    }
    measureBasisWord(t, e) {
      t.save(), (t.font = e)
      const n = this.measureText(t, { value: Ti })
      return t.restore(), n
    }
    measureWord(t, e, n) {
      const o = this.draw.getLetterReg()
      let s = 0,
        i = e[n],
        r = n
      for (; r < e.length; ) {
        const R = e[r]
        if ((R.type && R.type !== a.ElementType.TEXT) || !o.test(R.value)) {
          i = R
          break
        }
        ;(s += this.measureText(t, R).width), r++
      }
      return { width: s, endElement: i }
    }
    measurePunctuationWidth(t, e) {
      return !e || !Li.includes(e.value) ? 0 : this.measureText(t, e).width
    }
    measureText(t, e) {
      if (e.width) {
        const i = t.measureText(e.value)
        return {
          width: e.width,
          actualBoundingBoxAscent: i.actualBoundingBoxAscent,
          actualBoundingBoxDescent: i.actualBoundingBoxDescent,
          actualBoundingBoxLeft: i.actualBoundingBoxLeft,
          actualBoundingBoxRight: i.actualBoundingBoxRight,
          fontBoundingBoxAscent: i.fontBoundingBoxAscent,
          fontBoundingBoxDescent: i.fontBoundingBoxDescent
        }
      }
      const n = `${e.value}${t.font}`,
        o = this.cacheMeasureText.get(n)
      if (o) return o
      const s = t.measureText(e.value)
      return this.cacheMeasureText.set(n, s), s
    }
    complete() {
      this._render(), (this.text = '')
    }
    record(t, e, n, o) {
      if (
        ((this.ctx = t), this.options.renderMode === a.RenderMode.COMPATIBILITY)
      ) {
        this._setCurXY(n, o),
          (this.text = e.value),
          (this.curStyle = e.style),
          (this.curColor = e.color),
          this.complete()
        return
      }
      this.text || this._setCurXY(n, o),
        ((this.curStyle && e.style !== this.curStyle) ||
          e.color !== this.curColor) &&
          (this.complete(), this._setCurXY(n, o)),
        (this.text += e.value),
        (this.curStyle = e.style),
        (this.curColor = e.color)
    }
    _setCurXY(t, e) {
      ;(this.curX = t), (this.curY = e)
    }
    _render() {
      !this.text ||
        !~this.curX ||
        !~this.curX ||
        (this.ctx.save(),
        (this.ctx.font = this.curStyle),
        (this.ctx.fillStyle = this.curColor || this.options.defaultColor),
        this.ctx.fillText(this.text, this.curX, this.curY),
        this.ctx.restore())
    }
  }
  class ae {
    constructor(t) {
      L(this, 'draw')
      L(this, 'options')
      ;(this.draw = t), (this.options = t.getOptions())
    }
    static formatNumberPlaceholder(t, e, n, o) {
      const s = o === a.NumberType.CHINESE ? fi(e) : `${e}`
      return t.replace(n, s)
    }
    render(t, e) {
      const {
        scale: n,
        pageNumber: {
          size: o,
          font: s,
          color: i,
          rowFlex: r,
          numberType: R,
          format: c,
          startPageNo: d,
          fromPageNo: h
        }
      } = this.options
      if (e < h) return
      let u = c
      const g = new RegExp(ge.PAGE_NO)
      g.test(u) && (u = ae.formatNumberPlaceholder(u, e + d - h, g, R))
      const T = new RegExp(ge.PAGE_COUNT)
      T.test(u) &&
        (u = ae.formatNumberPlaceholder(u, this.draw.getPageCount() - h, T, R))
      const P = this.draw.getWidth(),
        O = this.draw.getHeight(),
        M = this.draw.getPageNumberBottom(),
        S = O - M
      t.save(), (t.fillStyle = i), (t.font = `${o * n}px ${s}`)
      let I = 0
      const F = this.draw.getMargins(),
        { width: N } = t.measureText(u)
      r === a.RowFlex.CENTER
        ? (I = (P - N) / 2)
        : r === a.RowFlex.RIGHT
          ? (I = P - N - F[1])
          : (I = F[3]),
        t.fillText(u, I, S),
        t.restore()
    }
  }
  class us {
    constructor(t) {
      L(this, 'draw')
      L(this, 'options')
      L(this, 'scrollContainer')
      L(
        this,
        '_observer',
        Ln(() => {
          const { intersectionPageNo: t, visiblePageNoList: e } =
            this.getPageVisibleInfo()
          this.draw.setIntersectionPageNo(t), this.draw.setVisiblePageNoList(e)
        }, 150)
      )
      ;(this.draw = t),
        (this.options = t.getOptions()),
        (this.scrollContainer = this.getScrollContainer()),
        setTimeout(() => {
          window.scrollY || this._observer()
        }),
        this._addEvent()
    }
    getScrollContainer() {
      return (
        (this.options.scrollContainerSelector &&
          document.querySelector(this.options.scrollContainerSelector)) ||
        document
      )
    }
    _addEvent() {
      this.scrollContainer.addEventListener('scroll', this._observer)
    }
    removeEvent() {
      this.scrollContainer.removeEventListener('scroll', this._observer)
    }
    getElementVisibleInfo(t) {
      const e = t.getBoundingClientRect(),
        n =
          this.scrollContainer === document
            ? Math.max(
                document.documentElement.clientHeight,
                window.innerHeight
              )
            : this.scrollContainer.clientHeight,
        o = Math.min(e.bottom, n) - Math.max(e.top, 0)
      return { intersectionHeight: o > 0 ? o : 0 }
    }
    getPageVisibleInfo() {
      const t = this.draw.getPageList(),
        e = []
      let n = 0,
        o = 0
      for (let s = 0; s < t.length; s++) {
        const i = t[s],
          { intersectionHeight: r } = this.getElementVisibleInfo(i)
        if (o && !r) break
        r && e.push(s), r > o && ((o = r), (n = s))
      }
      return { intersectionPageNo: n, visiblePageNoList: e }
    }
  }
  class gs {
    constructor(t) {
      L(this, 'step', 5)
      L(this, 'thresholdPoints', [70, 40, 10, 20])
      L(this, 'selectionContainer')
      L(this, 'rangeManager')
      L(this, 'requestAnimationFrameId')
      L(this, 'isMousedown')
      L(this, 'isMoving')
      L(this, 'clientWidth')
      L(this, 'clientHeight')
      L(this, 'containerRect')
      L(this, '_mousedown', () => {
        if (
          ((this.isMousedown = !0),
          (this.clientWidth =
            this.selectionContainer instanceof Document
              ? document.documentElement.clientWidth
              : this.selectionContainer.clientWidth),
          (this.clientHeight =
            this.selectionContainer instanceof Document
              ? document.documentElement.clientHeight
              : this.selectionContainer.clientHeight),
          !(this.selectionContainer instanceof Document))
        ) {
          const t = this.selectionContainer.getBoundingClientRect()
          this.containerRect = t
        }
      })
      L(this, '_mouseup', () => {
        ;(this.isMousedown = !1), this._stopMove()
      })
      L(this, '_mousemove', t => {
        if (!this.isMousedown || this.rangeManager.getIsCollapsed()) return
        let { x: e, y: n } = t
        this.containerRect &&
          ((e = e - this.containerRect.x), (n = n - this.containerRect.y)),
          n < this.thresholdPoints[0]
            ? this._startMove(ht.UP)
            : this.clientHeight - n <= this.thresholdPoints[1]
              ? this._startMove(ht.DOWN)
              : e < this.thresholdPoints[2]
                ? this._startMove(ht.LEFT)
                : this.clientWidth - e < this.thresholdPoints[3]
                  ? this._startMove(ht.RIGHT)
                  : this._stopMove()
      })
      this.rangeManager = t.getRange()
      const { scrollContainerSelector: e } = t.getOptions()
      ;(this.selectionContainer = (e && document.querySelector(e)) || document),
        (this.requestAnimationFrameId = null),
        (this.isMousedown = !1),
        (this.isMoving = !1),
        (this.clientWidth = 0),
        (this.clientHeight = 0),
        (this.containerRect = null),
        this._addEvent()
    }
    _addEvent() {
      const t = this.selectionContainer
      t.addEventListener('mousedown', this._mousedown),
        t.addEventListener('mousemove', this._mousemove),
        t.addEventListener('mouseup', this._mouseup),
        document.addEventListener('mouseleave', this._mouseup)
    }
    removeEvent() {
      const t = this.selectionContainer
      t.removeEventListener('mousedown', this._mousedown),
        t.removeEventListener('mousemove', this._mousemove),
        t.removeEventListener('mouseup', this._mouseup),
        document.removeEventListener('mouseleave', this._mouseup)
    }
    _move(t) {
      const e =
          this.selectionContainer instanceof Document
            ? window
            : this.selectionContainer,
        n =
          this.selectionContainer instanceof Document
            ? window.scrollX
            : e.scrollLeft,
        o =
          this.selectionContainer instanceof Document
            ? window.scrollY
            : e.scrollTop
      t === ht.DOWN
        ? e.scrollTo(n, o + this.step)
        : t === ht.UP
          ? e.scrollTo(n, o - this.step)
          : t === ht.LEFT
            ? e.scrollTo(n - this.step, o)
            : e.scrollTo(n + this.step, o),
        (this.requestAnimationFrameId = window.requestAnimationFrame(
          this._move.bind(this, t)
        ))
    }
    _startMove(t) {
      this.isMoving || ((this.isMoving = !0), this._move(t))
    }
    _stopMove() {
      this.requestAnimationFrameId &&
        (window.cancelAnimationFrame(this.requestAnimationFrameId),
        (this.requestAnimationFrameId = null),
        (this.isMoving = !1))
    }
  }
  class Ls {
    constructor(t) {
      L(this, 'draw')
      L(this, 'range')
      L(this, 'options')
      ;(this.draw = t),
        (this.range = t.getRange()),
        (this.options = t.getOptions())
    }
    getTrListGroupByCol(t) {
      var n
      const e = k(t)
      for (let o = 0; o < t.length; o++) {
        const s = e[o]
        for (let i = s.tdList.length - 1; i >= 0; i--) {
          const r = s.tdList[i],
            { rowspan: R, rowIndex: c, colIndex: d } = r,
            h = c + R - 1
          if (h !== i) {
            const u = s.tdList.splice(i, 1)[0]
            ;(n = e[h]) == null || n.tdList.splice(d, 0, u)
          }
        }
      }
      return e
    }
    getRangeRowCol() {
      const {
        isTable: t,
        index: e,
        trIndex: n,
        tdIndex: o
      } = this.draw.getPosition().getPositionContext()
      if (!t) return null
      const {
          isCrossRowCol: s,
          startTdIndex: i,
          endTdIndex: r,
          startTrIndex: R,
          endTrIndex: c
        } = this.range.getRange(),
        u = this.draw.getOriginalElementList()[e].trList
      if (!s) return [[u[n].tdList[o]]]
      let g = u[R].tdList[i],
        T = u[c].tdList[r]
      ;(g.x > T.x || g.y > T.y) && ([g, T] = [T, g])
      const P = g.colIndex,
        O = T.colIndex + (T.colspan - 1),
        M = g.rowIndex,
        S = T.rowIndex + (T.rowspan - 1),
        I = []
      for (let F = 0; F < u.length; F++) {
        const N = u[F],
          X = []
        for (let f = 0; f < N.tdList.length; f++) {
          const Q = N.tdList[f],
            Z = Q.colIndex,
            D = Q.rowIndex
          Z >= P && Z <= O && D >= M && D <= S && X.push(Q)
        }
        X.length && I.push(X)
      }
      return I.length ? I : null
    }
    _drawOuterBorder(t) {
      const {
          ctx: e,
          startX: n,
          startY: o,
          width: s,
          height: i,
          isDrawFullBorder: r,
          borderExternalWidth: R
        } = t,
        { scale: c } = this.options,
        d = e.lineWidth
      R && (e.lineWidth = R * c), e.beginPath()
      const h = Math.round(n),
        u = Math.round(o)
      e.translate(0.5, 0.5),
        r
          ? e.rect(h, u, s, i)
          : (e.moveTo(h, u + i), e.lineTo(h, u), e.lineTo(h + s, u)),
        e.stroke(),
        R && (e.lineWidth = d),
        e.translate(-0.5, -0.5)
    }
    _drawSlash(t, e, n, o) {
      var d, h
      const { scale: s } = this.options
      t.save()
      const i = e.width * s,
        r = e.height * s,
        R = Math.round(e.x * s + n),
        c = Math.round(e.y * s + o)
      ;((d = e.slashTypes) == null ? void 0 : d.includes(a.TdSlash.FORWARD)) &&
        (t.moveTo(R + i, c), t.lineTo(R, c + r)),
        ((h = e.slashTypes) == null ? void 0 : h.includes(a.TdSlash.BACK)) &&
          (t.moveTo(R, c), t.lineTo(R + i, c + r)),
        t.stroke(),
        t.restore()
    }
    _drawBorder(t, e, n, o) {
      var S, I, F, N, X, f
      const {
        colgroup: s,
        trList: i,
        borderType: r,
        borderColor: R,
        borderWidth: c = 1,
        borderExternalWidth: d
      } = e
      if (!s || !i) return
      const {
          scale: h,
          table: { defaultBorderColor: u }
        } = this.options,
        g = e.width * h,
        T = e.height * h,
        P = r === a.TableBorder.EMPTY,
        O = r === a.TableBorder.EXTERNAL,
        M = r === a.TableBorder.INTERNAL
      t.save(),
        r === a.TableBorder.DASH && t.setLineDash([3, 3]),
        (t.lineWidth = c * h),
        (t.strokeStyle = R || u),
        !P &&
          !M &&
          this._drawOuterBorder({
            ctx: t,
            startX: n,
            startY: o,
            width: g,
            height: T,
            borderExternalWidth: d,
            isDrawFullBorder: O
          })
      for (let Q = 0; Q < i.length; Q++) {
        const Z = i[Q]
        for (let D = 0; D < Z.tdList.length; D++) {
          const Y = Z.tdList[D]
          if (
            (((S = Y.slashTypes) == null ? void 0 : S.length) &&
              this._drawSlash(t, Y, n, o),
            !((I = Y.borderTypes) == null ? void 0 : I.length) && (P || O))
          )
            continue
          const V = Y.width * h,
            W = Y.height * h,
            p = Math.round(Y.x * h + n + V),
            U = Math.round(Y.y * h + o)
          if (
            (t.translate(0.5, 0.5),
            t.beginPath(),
            ((F = Y.borderTypes) == null
              ? void 0
              : F.includes(a.TdBorder.TOP)) &&
              (t.moveTo(p - V, U), t.lineTo(p, U), t.stroke()),
            ((N = Y.borderTypes) == null
              ? void 0
              : N.includes(a.TdBorder.RIGHT)) &&
              (t.moveTo(p, U), t.lineTo(p, U + W), t.stroke()),
            ((X = Y.borderTypes) == null
              ? void 0
              : X.includes(a.TdBorder.BOTTOM)) &&
              (t.moveTo(p, U + W), t.lineTo(p - V, U + W), t.stroke()),
            ((f = Y.borderTypes) == null
              ? void 0
              : f.includes(a.TdBorder.LEFT)) &&
              (t.moveTo(p - V, U), t.lineTo(p - V, U + W), t.stroke()),
            !P && !O)
          ) {
            if (
              (!M || Y.colIndex + Y.colspan < s.length) &&
              (t.moveTo(p, U),
              t.lineTo(p, U + W),
              d && d !== c && Y.colIndex + Y.colspan === s.length)
            ) {
              const m = t.lineWidth
              ;(t.lineWidth = d * h),
                t.stroke(),
                t.beginPath(),
                (t.lineWidth = m)
            }
            if (!M || Y.rowIndex + Y.rowspan < i.length) {
              const m = d && d !== c && Y.rowIndex + Y.rowspan === i.length
              if (
                (m && (t.stroke(), t.beginPath()),
                t.moveTo(p, U + W),
                t.lineTo(p - V, U + W),
                m)
              ) {
                const y = t.lineWidth
                ;(t.lineWidth = d * h),
                  t.stroke(),
                  t.beginPath(),
                  (t.lineWidth = y)
              }
            }
            t.stroke()
          }
          t.translate(-0.5, -0.5)
        }
      }
      t.restore()
    }
    _drawBackgroundColor(t, e, n, o) {
      const { trList: s } = e
      if (!s) return
      const { scale: i } = this.options
      for (let r = 0; r < s.length; r++) {
        const R = s[r]
        for (let c = 0; c < R.tdList.length; c++) {
          const d = R.tdList[c]
          if (!d.backgroundColor) continue
          t.save()
          const h = d.width * i,
            u = d.height * i,
            g = Math.round(d.x * i + n),
            T = Math.round(d.y * i + o)
          ;(t.fillStyle = d.backgroundColor),
            t.fillRect(g, T, h, u),
            t.restore()
        }
      }
    }
    getTableWidth(t) {
      return t.colgroup.reduce((e, n) => e + n.width, 0)
    }
    getTableHeight(t) {
      const e = t.trList
      return (e == null ? void 0 : e.length)
        ? this.getTdListByColIndex(e, 0).reduce((n, o) => n + o.height, 0)
        : 0
    }
    getRowCountByColIndex(t, e) {
      return this.getTdListByColIndex(t, e).reduce((n, o) => n + o.rowspan, 0)
    }
    getTdListByColIndex(t, e) {
      const n = []
      for (let o = 0; o < t.length; o++) {
        const s = t[o].tdList
        for (let i = 0; i < s.length; i++) {
          const r = s[i],
            R = r.colIndex,
            c = R + r.colspan - 1
          e >= R && e <= c && n.push(r)
        }
      }
      return n
    }
    getTdListByRowIndex(t, e) {
      const n = []
      for (let o = 0; o < t.length; o++) {
        const s = t[o].tdList
        for (let i = 0; i < s.length; i++) {
          const r = s[i],
            R = r.rowIndex,
            c = R + r.rowspan - 1
          e >= R && e <= c && n.push(r)
        }
      }
      return n
    }
    computeRowColInfo(t) {
      const { colgroup: e, trList: n } = t
      if (!e || !n) return
      let o = 0
      for (let s = 0; s < n.length; s++) {
        const i = n[s],
          r = n.length - 1 === s
        for (let R = 0; R < i.tdList.length; R++) {
          const c = i.tdList[R]
          let d = 0
          if (n.length > 1 && s !== 0) {
            const M = i.tdList[R - 1],
              S = M ? M.colIndex + M.colspan : R
            for (let I = S; I < e.length; I++)
              if (this.getRowCountByColIndex(n.slice(0, s), I) === s) {
                d = I
                let N = 0
                for (let X = 0; X < I; X++) N += e[X].width
                o = N
                break
              }
          } else {
            const M = i.tdList[R - 1]
            M && (d = M.colIndex + M.colspan)
          }
          let h = 0
          for (let M = 0; M < c.colspan; M++) h += e[M + d].width
          let u = 0
          for (let M = 0; M < c.rowspan; M++) u += (n[M + s] || n[s]).height
          const g = i.tdList.length - 1 === R
          let T = r
          if (!T && c.rowspan > 1) {
            const M = n.length - 1 - s
            T = c.rowspan - 1 === M
          }
          const P = r && g
          ;(c.isLastRowTd = g), (c.isLastColTd = T), (c.isLastTd = P), (c.x = o)
          let O = 0
          for (let M = 0; M < s; M++) {
            const S = n[M].tdList
            for (let I = 0; I < S.length; I++) {
              const F = S[I]
              if (d >= F.colIndex && d < F.colIndex + F.colspan) {
                O += F.height
                break
              }
            }
          }
          ;(c.y = O),
            (c.width = h),
            (c.height = u),
            (c.rowIndex = s),
            (c.colIndex = d),
            (c.trIndex = s),
            (c.tdIndex = R),
            (o += h),
            g && !P && (o = 0)
        }
      }
    }
    drawRange(t, e, n, o) {
      const { scale: s, rangeAlpha: i, rangeColor: r } = this.options,
        { type: R, trList: c } = e
      if (!c || R !== a.ElementType.TABLE) return
      const {
        isCrossRowCol: d,
        startTdIndex: h,
        endTdIndex: u,
        startTrIndex: g,
        endTrIndex: T
      } = this.range.getRange()
      if (!d) return
      let P = c[g].tdList[h],
        O = c[T].tdList[u]
      ;(P.x > O.x || P.y > O.y) && ([P, O] = [O, P])
      const M = P.colIndex,
        S = O.colIndex + (O.colspan - 1),
        I = P.rowIndex,
        F = O.rowIndex + (O.rowspan - 1)
      t.save()
      for (let N = 0; N < c.length; N++) {
        const X = c[N]
        for (let f = 0; f < X.tdList.length; f++) {
          const Q = X.tdList[f],
            Z = Q.colIndex,
            D = Q.rowIndex
          if (Z >= M && Z <= S && D >= I && D <= F) {
            const Y = Q.x * s,
              V = Q.y * s,
              W = Q.width * s,
              p = Q.height * s
            ;(t.globalAlpha = i),
              (t.fillStyle = r),
              t.fillRect(Y + n, V + o, W, p)
          }
        }
      }
      t.restore()
    }
    render(t, e, n, o) {
      this._drawBackgroundColor(t, e, n, o), this._drawBorder(t, e, n, o)
    }
  }
  var Bt
  ;(function (l) {
    ;(l.ROW = 'row'), (l.COL = 'col')
  })(Bt || (Bt = {}))
  class Ts {
    constructor(t) {
      L(this, 'MIN_TD_WIDTH', 20)
      L(this, 'ROW_COL_OFFSET', 18)
      L(this, 'ROW_COL_QUICK_WIDTH', 16)
      L(this, 'ROW_COL_QUICK_OFFSET', 5)
      L(
        this,
        'ROW_COL_QUICK_POSITION',
        this.ROW_COL_OFFSET +
          (this.ROW_COL_OFFSET - this.ROW_COL_QUICK_WIDTH) / 2
      )
      L(this, 'BORDER_VALUE', 4)
      L(this, 'TABLE_SELECT_OFFSET', 20)
      L(this, 'draw')
      L(this, 'canvas')
      L(this, 'options')
      L(this, 'position')
      L(this, 'range')
      L(this, 'container')
      L(this, 'toolRowContainer')
      L(this, 'toolRowAddBtn')
      L(this, 'toolColAddBtn')
      L(this, 'toolTableSelectBtn')
      L(this, 'toolColContainer')
      L(this, 'toolBorderContainer')
      L(this, 'anchorLine')
      L(this, 'mousedownX')
      L(this, 'mousedownY')
      ;(this.draw = t),
        (this.canvas = t.getPage()),
        (this.options = t.getOptions()),
        (this.position = t.getPosition()),
        (this.range = t.getRange()),
        (this.container = t.getContainer()),
        (this.toolRowContainer = null),
        (this.toolRowAddBtn = null),
        (this.toolColAddBtn = null),
        (this.toolTableSelectBtn = null),
        (this.toolColContainer = null),
        (this.toolBorderContainer = null),
        (this.anchorLine = null),
        (this.mousedownX = 0),
        (this.mousedownY = 0)
    }
    dispose() {
      var t, e, n, o, s, i
      ;(t = this.toolRowContainer) == null || t.remove(),
        (e = this.toolRowAddBtn) == null || e.remove(),
        (n = this.toolColAddBtn) == null || n.remove(),
        (o = this.toolTableSelectBtn) == null || o.remove(),
        (s = this.toolColContainer) == null || s.remove(),
        (i = this.toolBorderContainer) == null || i.remove(),
        (this.toolRowContainer = null),
        (this.toolRowAddBtn = null),
        (this.toolColAddBtn = null),
        (this.toolTableSelectBtn = null),
        (this.toolColContainer = null),
        (this.toolBorderContainer = null)
    }
    render() {
      const {
        isTable: t,
        index: e,
        trIndex: n,
        tdIndex: o
      } = this.position.getPositionContext()
      if (!t) return
      this.dispose()
      const s = this.draw.getOriginalElementList(),
        i = this.position.getOriginalPositionList(),
        r = s[e]
      if (r.tableToolDisabled && !this.draw.isDesignMode()) return
      const { scale: R } = this.options,
        c = i[e],
        { colgroup: d, trList: h } = r,
        {
          coordinate: { leftTop: u }
        } = c,
        g = this.draw.getHeight(),
        T = this.draw.getPageGap(),
        P = this.draw.getPageNo() * (g + T),
        O = u[0],
        M = u[1] + P,
        S = r.trList[n].tdList[o],
        I = S.rowIndex,
        F = S.colIndex,
        N = r.height * R,
        X = r.width * R,
        f = document.createElement('div')
      f.classList.add(`${x}-table-tool__select`),
        (f.style.height = `${N * R}`),
        (f.style.left = `${O}px`),
        (f.style.top = `${M}px`),
        (f.style.transform = `translate(-${this.TABLE_SELECT_OFFSET * R}px, ${-this.TABLE_SELECT_OFFSET * R}px)`),
        (f.onclick = () => {
          this.draw.getTableOperate().tableSelectAll()
        }),
        this.container.append(f),
        (this.toolTableSelectBtn = f)
      const Q = h.map(U => U.height),
        Z = document.createElement('div')
      Z.classList.add(`${x}-table-tool__row`),
        (Z.style.transform = `translateX(-${this.ROW_COL_OFFSET * R}px)`)
      for (let U = 0; U < Q.length; U++) {
        const m = Q[U] * R,
          y = document.createElement('div')
        y.classList.add(`${x}-table-tool__row__item`),
          U === I && y.classList.add('active'),
          (y.onclick = () => {
            const b = this.draw.getTableParticle().getTdListByRowIndex(h, U),
              w = b[0],
              G = b[b.length - 1]
            this.position.setPositionContext({
              index: e,
              isTable: !0,
              trIndex: w.trIndex,
              tdIndex: w.tdIndex,
              tableId: r.id
            }),
              this.range.setRange(
                0,
                0,
                r.id,
                w.tdIndex,
                G.tdIndex,
                w.trIndex,
                G.trIndex
              ),
              this.draw.render({
                curIndex: 0,
                isCompute: !1,
                isSubmitHistory: !1
              }),
              this._setAnchorActive(Z, U)
          })
        const K = document.createElement('div')
        K.classList.add(`${x}-table-tool__anchor`),
          (K.onmousedown = b => {
            this._mousedown({ evt: b, element: r, index: U, order: Bt.ROW })
          }),
          y.append(K),
          (y.style.height = `${m}px`),
          Z.append(y)
      }
      ;(Z.style.left = `${O}px`),
        (Z.style.top = `${M}px`),
        this.container.append(Z),
        (this.toolRowContainer = Z)
      const D = document.createElement('div')
      D.classList.add(`${x}-table-tool__quick__add`),
        (D.style.height = `${N * R}`),
        (D.style.left = `${O}px`),
        (D.style.top = `${M + N}px`),
        (D.style.transform = `translate(-${this.ROW_COL_QUICK_POSITION * R}px, ${this.ROW_COL_QUICK_OFFSET * R}px)`),
        (D.onclick = () => {
          this.position.setPositionContext({
            index: e,
            isTable: !0,
            trIndex: h.length - 1,
            tdIndex: 0,
            tableId: r.id
          }),
            this.draw.getTableOperate().insertTableBottomRow()
        }),
        this.container.append(D),
        (this.toolRowAddBtn = D)
      const Y = d.map(U => U.width),
        V = document.createElement('div')
      V.classList.add(`${x}-table-tool__col`),
        (V.style.transform = `translateY(-${this.ROW_COL_OFFSET * R}px)`)
      for (let U = 0; U < Y.length; U++) {
        const m = Y[U] * R,
          y = document.createElement('div')
        y.classList.add(`${x}-table-tool__col__item`),
          U === F && y.classList.add('active'),
          (y.onclick = () => {
            const b = this.draw.getTableParticle().getTdListByColIndex(h, U),
              w = b[0],
              G = b[b.length - 1]
            this.position.setPositionContext({
              index: e,
              isTable: !0,
              trIndex: w.trIndex,
              tdIndex: w.tdIndex,
              tableId: r.id
            }),
              this.range.setRange(
                0,
                0,
                r.id,
                w.tdIndex,
                G.tdIndex,
                w.trIndex,
                G.trIndex
              ),
              this.draw.render({
                curIndex: 0,
                isCompute: !1,
                isSubmitHistory: !1
              }),
              this._setAnchorActive(V, U)
          })
        const K = document.createElement('div')
        K.classList.add(`${x}-table-tool__anchor`),
          (K.onmousedown = b => {
            this._mousedown({ evt: b, element: r, index: U, order: Bt.COL })
          }),
          y.append(K),
          (y.style.width = `${m}px`),
          V.append(y)
      }
      ;(V.style.left = `${O}px`),
        (V.style.top = `${M}px`),
        this.container.append(V),
        (this.toolColContainer = V)
      const W = document.createElement('div')
      W.classList.add(`${x}-table-tool__quick__add`),
        (W.style.height = `${N * R}`),
        (W.style.left = `${O + X}px`),
        (W.style.top = `${M}px`),
        (W.style.transform = `translate(${this.ROW_COL_QUICK_OFFSET * R}px, -${this.ROW_COL_QUICK_POSITION * R}px)`),
        (W.onclick = () => {
          this.position.setPositionContext({
            index: e,
            isTable: !0,
            trIndex: 0,
            tdIndex: h[0].tdList.length - 1 || 0,
            tableId: r.id
          }),
            this.draw.getTableOperate().insertTableRightCol()
        }),
        this.container.append(W),
        (this.toolColAddBtn = W)
      const p = document.createElement('div')
      p.classList.add(`${x}-table-tool__border`),
        (p.style.height = `${N}px`),
        (p.style.width = `${X}px`),
        (p.style.left = `${O}px`),
        (p.style.top = `${M}px`)
      for (let U = 0; U < h.length; U++) {
        const m = h[U]
        for (let y = 0; y < m.tdList.length; y++) {
          const K = m.tdList[y],
            b = document.createElement('div')
          b.classList.add(`${x}-table-tool__border__row`),
            (b.style.width = `${K.width * R}px`),
            (b.style.height = `${this.BORDER_VALUE}px`),
            (b.style.top = `${(K.y + K.height) * R - this.BORDER_VALUE / 2}px`),
            (b.style.left = `${K.x * R}px`),
            (b.onmousedown = G => {
              this._mousedown({
                evt: G,
                element: r,
                index: K.rowIndex + K.rowspan - 1,
                order: Bt.ROW
              })
            }),
            p.appendChild(b)
          const w = document.createElement('div')
          w.classList.add(`${x}-table-tool__border__col`),
            (w.style.width = `${this.BORDER_VALUE}px`),
            (w.style.height = `${K.height * R}px`),
            (w.style.top = `${K.y * R}px`),
            (w.style.left = `${(K.x + K.width) * R - this.BORDER_VALUE / 2}px`),
            (w.onmousedown = G => {
              this._mousedown({
                evt: G,
                element: r,
                index: K.colIndex + K.colspan - 1,
                order: Bt.COL
              })
            }),
            p.appendChild(w)
        }
      }
      this.container.append(p), (this.toolBorderContainer = p)
    }
    _setAnchorActive(t, e) {
      const n = t.children
      for (let o = 0; o < n.length; o++) {
        const s = n[o]
        o === e ? s.classList.add('active') : s.classList.remove('active')
      }
    }
    _mousedown(t) {
      const { evt: e, index: n, order: o, element: s } = t
      this.canvas = this.draw.getPage()
      const { scale: i } = this.options,
        r = this.draw.getWidth(),
        R = this.draw.getHeight(),
        c = this.draw.getPageGap(),
        d = this.draw.getPageNo() * (R + c)
      ;(this.mousedownX = e.x), (this.mousedownY = e.y)
      const h = e.target,
        u = this.canvas.getBoundingClientRect(),
        g = window.getComputedStyle(h).cursor
      ;(document.body.style.cursor = g), (this.canvas.style.cursor = g)
      let T = 0,
        P = 0
      const O = document.createElement('div')
      O.classList.add(`${x}-table-anchor__line`),
        o === Bt.ROW
          ? (O.classList.add(`${x}-table-anchor__line__row`),
            (O.style.width = `${r}px`),
            (T = 0),
            (P = d + this.mousedownY - u.top))
          : (O.classList.add(`${x}-table-anchor__line__col`),
            (O.style.height = `${R}px`),
            (T = this.mousedownX - u.left),
            (P = d)),
        (O.style.left = `${T}px`),
        (O.style.top = `${P}px`),
        this.container.append(O),
        (this.anchorLine = O)
      let M = 0,
        S = 0
      const I = F => {
        const N = this._mousemove(F, o, T, P)
        N && ((M = N.dx), (S = N.dy))
      }
      document.addEventListener('mousemove', I),
        document.addEventListener(
          'mouseup',
          () => {
            var N
            let F = !1
            if (o === Bt.ROW) {
              const X = s.trList,
                f = X[n] || X[n - 1],
                { defaultTrMinHeight: Q } = this.options.table
              S < 0 && f.height + S < Q && (S = Q - f.height),
                S && ((f.height += S), (f.minHeight = f.height), (F = !0))
            } else {
              const { colgroup: X } = s
              if (X && M) {
                const f = this.draw.getInnerWidth(),
                  Q = X[n].width
                M < 0 &&
                  Q + M < this.MIN_TD_WIDTH &&
                  (M = this.MIN_TD_WIDTH - Q)
                const Z = (N = X[n + 1]) == null ? void 0 : N.width
                M > 0 &&
                  Z &&
                  Z - M < this.MIN_TD_WIDTH &&
                  (M = Z - this.MIN_TD_WIDTH)
                const D = Q + M
                if (n === X.length - 1) {
                  let Y = 0
                  for (let V = 0; V < X.length; V++) {
                    const W = X[V]
                    V === n + 1 && (Y -= M),
                      V === n && (Y += D),
                      V !== n && (Y += W.width)
                  }
                  if (Y > f) {
                    const V = s.width
                    M = f - V
                  }
                }
                M &&
                  (X.length - 1 !== n && (X[n + 1].width -= M / i),
                  (X[n].width += M / i),
                  (F = !0))
              }
            }
            F && this.draw.render({ isSetCursor: !1 }),
              O.remove(),
              document.removeEventListener('mousemove', I),
              (document.body.style.cursor = ''),
              (this.canvas.style.cursor = 'text')
          },
          { once: !0 }
        ),
        e.preventDefault()
    }
    _mousemove(t, e, n, o) {
      if (!this.anchorLine) return null
      const s = t.x - this.mousedownX,
        i = t.y - this.mousedownY
      return (
        e === Bt.ROW
          ? (this.anchorLine.style.top = `${o + i}px`)
          : (this.anchorLine.style.left = `${n + s}px`),
        t.preventDefault(),
        { dx: s, dy: i }
      )
    }
  }
  class Ps {
    constructor(t) {
      L(this, 'draw')
      L(this, 'options')
      L(this, 'container')
      L(this, 'hyperlinkPopupContainer')
      L(this, 'hyperlinkDom')
      ;(this.draw = t),
        (this.options = t.getOptions()),
        (this.container = t.getContainer())
      const { hyperlinkPopupContainer: e, hyperlinkDom: n } =
        this._createHyperlinkPopupDom()
      ;(this.hyperlinkDom = n), (this.hyperlinkPopupContainer = e)
    }
    _createHyperlinkPopupDom() {
      const t = document.createElement('div')
      t.classList.add(`${x}-hyperlink-popup`)
      const e = document.createElement('a')
      return (
        (e.target = '_blank'),
        (e.rel = 'noopener'),
        t.append(e),
        this.container.append(t),
        { hyperlinkPopupContainer: t, hyperlinkDom: e }
      )
    }
    drawHyperlinkPopup(t, e) {
      const {
          coordinate: {
            leftTop: [n, o]
          },
          lineHeight: s
        } = e,
        i = this.draw.getHeight(),
        r = this.draw.getPageGap(),
        R = this.draw.getPageNo() * (i + r)
      ;(this.hyperlinkPopupContainer.style.display = 'block'),
        (this.hyperlinkPopupContainer.style.left = `${n}px`),
        (this.hyperlinkPopupContainer.style.top = `${o + R + s}px`)
      const c = t.url || '#'
      ;(this.hyperlinkDom.href = c),
        (this.hyperlinkDom.title = c),
        (this.hyperlinkDom.innerText = c)
    }
    clearHyperlinkPopup() {
      this.hyperlinkPopupContainer.style.display = 'none'
    }
    openHyperlink(t) {
      const e = window.open(t.url, '_blank')
      e && (e.opener = null)
    }
    render(t, e, n, o) {
      t.save(),
        (t.font = e.style),
        e.color || (e.color = this.options.defaultHyperlinkColor),
        (t.fillStyle = e.color),
        e.underline === void 0 && (e.underline = !0),
        t.fillText(e.value, n, o),
        t.restore()
    }
  }
  class Ms {
    constructor(t, e) {
      L(this, 'draw')
      L(this, 'position')
      L(this, 'options')
      L(this, 'elementList')
      L(this, 'rowList')
      L(this, 'positionList')
      ;(this.draw = t),
        (this.position = t.getPosition()),
        (this.options = t.getOptions()),
        (this.elementList = e || []),
        (this.rowList = []),
        (this.positionList = [])
    }
    getRowList() {
      return this.rowList
    }
    setElementList(t) {
      this.elementList = t
    }
    getElementList() {
      return this.elementList
    }
    getPositionList() {
      return this.positionList
    }
    compute() {
      this.recovery(), this._computeRowList(), this._computePositionList()
    }
    recovery() {
      ;(this.rowList = []), (this.positionList = [])
    }
    _computeRowList() {
      const t = this.draw.getInnerWidth(),
        e = this.draw.getMargins(),
        n = Dn(this.elementList)
      this.rowList = this.draw.computeRowList({
        startX: e[3],
        startY: this.getHeaderTop(),
        innerWidth: t,
        elementList: this.elementList,
        surroundElementList: n
      })
    }
    _computePositionList() {
      const t = this.getHeaderTop(),
        e = this.draw.getInnerWidth(),
        o = this.draw.getMargins()[3],
        s = t
      this.position.computePageRowPosition({
        positionList: this.positionList,
        rowList: this.rowList,
        pageNo: 0,
        startRowIndex: 0,
        startIndex: 0,
        startX: o,
        startY: s,
        innerWidth: e,
        zone: a.EditorZone.HEADER
      })
    }
    getHeaderTop() {
      const {
        header: { top: t, disabled: e },
        scale: n
      } = this.options
      return e ? 0 : Math.floor(t * n)
    }
    getMaxHeight() {
      const {
          header: { maxHeightRadio: t }
        } = this.options,
        e = this.draw.getHeight()
      return Math.floor(e * un[t])
    }
    getHeight() {
      const t = this.getMaxHeight(),
        e = this.getRowHeight()
      return e > t ? t : e
    }
    getRowHeight() {
      return this.rowList.reduce((t, e) => t + e.height, 0)
    }
    getExtraHeight() {
      const t = this.draw.getMargins(),
        e = this.getHeight(),
        o = this.getHeaderTop() + e - t[0]
      return o <= 0 ? 0 : o
    }
    render(t, e) {
      t.globalAlpha = 1
      const n = this.draw.getInnerWidth(),
        o = this.getMaxHeight(),
        s = []
      let i = 0
      for (let r = 0; r < this.rowList.length; r++) {
        const R = this.rowList[r]
        if (i + R.height > o) break
        s.push(R), (i += R.height)
      }
      this.draw.drawRow(t, {
        elementList: this.elementList,
        positionList: this.positionList,
        rowList: s,
        pageNo: e,
        startIndex: 0,
        innerWidth: n,
        zone: a.EditorZone.HEADER
      })
    }
  }
  class Os {
    getOffsetY(t) {
      return -t.metrics.height / 2
    }
    render(t, e, n, o) {
      t.save(),
        (t.font = e.style),
        e.color && (t.fillStyle = e.color),
        t.fillText(e.value, n, o + this.getOffsetY(e)),
        t.restore()
    }
  }
  class Ss {
    getOffsetY(t) {
      return t.metrics.height / 2
    }
    render(t, e, n, o) {
      t.save(),
        (t.font = e.style),
        e.color && (t.fillStyle = e.color),
        t.fillText(e.value, n, o + this.getOffsetY(e)),
        t.restore()
    }
  }
  class Xs {
    constructor(t) {
      L(this, 'options')
      this.options = t.getOptions()
    }
    render(t, e, n, o) {
      var c
      t.save()
      const {
        scale: s,
        separator: { lineWidth: i, strokeStyle: r }
      } = this.options
      ;(t.lineWidth = i * s),
        (t.strokeStyle = e.color || r),
        ((c = e.dashArray) == null ? void 0 : c.length) &&
          t.setLineDash(e.dashArray)
      const R = Math.round(o)
      t.translate(0, t.lineWidth / 2),
        t.beginPath(),
        t.moveTo(n, R),
        t.lineTo(n + e.width * s, R),
        t.stroke(),
        t.restore()
    }
  }
  class Ns {
    constructor(t) {
      L(this, 'draw')
      L(this, 'options')
      L(this, 'i18n')
      ;(this.draw = t),
        (this.options = t.getOptions()),
        (this.i18n = t.getI18n())
    }
    render(t, e, n, o) {
      const {
          pageBreak: { font: s, fontSize: i, lineDash: r }
        } = this.options,
        R = this.i18n.t('pageBreak.displayName'),
        { scale: c, defaultRowMargin: d } = this.options,
        h = i * c,
        u = e.width * c,
        g = this.draw.getDefaultBasicRowMarginHeight() * d
      t.save(), (t.font = `${h}px ${s}`)
      const T = t.measureText(R),
        P = (u - T.width) / 2
      t.setLineDash(r),
        t.translate(0, 0.5 + g),
        t.beginPath(),
        t.moveTo(n, o),
        t.lineTo(n + P, o),
        t.moveTo(n + P + T.width, o),
        t.lineTo(n + u, o),
        t.stroke(),
        t.fillText(R, n + P, o + T.actualBoundingBoxAscent - h / 2),
        t.restore()
    }
  }
  class Is {
    constructor(t) {
      L(this, 'draw')
      L(this, 'options')
      L(this, 'imageCache')
      ;(this.draw = t),
        (this.options = t.getOptions()),
        (this.imageCache = new Map())
    }
    renderText(t, e) {
      const {
          watermark: {
            data: n,
            opacity: o,
            font: s,
            size: i,
            color: r,
            repeat: R,
            gap: c,
            numberType: d
          },
          scale: h
        } = this.options,
        u = this.draw.getWidth(),
        g = this.draw.getHeight()
      t.save(), (t.globalAlpha = o), (t.font = `${i * h}px ${s}`)
      let T = n
      const P = new RegExp(ge.PAGE_NO)
      P.test(T) && (T = ae.formatNumberPlaceholder(T, e + 1, P, d))
      const O = new RegExp(ge.PAGE_COUNT)
      O.test(T) &&
        (T = ae.formatNumberPlaceholder(T, this.draw.getPageCount(), O, d))
      const M = t.measureText(T)
      if (R) {
        const S = this.draw.getPagePixelRatio(),
          I = document.createElement('canvas'),
          F = I.getContext('2d'),
          N = M.width,
          X = M.actualBoundingBoxAscent + M.actualBoundingBoxDescent,
          f = Math.sqrt(Math.pow(N, 2) + Math.pow(X, 2)),
          Q = f + 2 * c[0] * h,
          Z = f + 2 * c[1] * h
        ;(I.width = Q),
          (I.height = Z),
          (I.style.width = `${Q * S}px`),
          (I.style.height = `${Z * S}px`),
          F.translate(Q / 2, Z / 2),
          F.rotate((-45 * Math.PI) / 180),
          F.translate(-Q / 2, -Z / 2),
          (F.font = `${i * h}px ${s}`),
          (F.fillStyle = r),
          F.fillText(T, (Q - N) / 2, (Z - X) / 2 + M.actualBoundingBoxAscent)
        const D = t.createPattern(I, 'repeat')
        D && ((t.fillStyle = D), t.fillRect(0, 0, u, g))
      } else {
        const S = u / 2,
          I = g / 2
        ;(t.fillStyle = r),
          t.translate(S, I),
          t.rotate((-45 * Math.PI) / 180),
          t.fillText(T, -M.width / 2, M.actualBoundingBoxAscent - (i * h) / 2)
      }
      t.restore()
    }
    renderImage(t) {
      const {
        watermark: {
          width: e,
          height: n,
          data: o,
          opacity: s,
          repeat: i,
          gap: r
        },
        scale: R
      } = this.options
      if (!this.imageCache.has(o)) {
        const g = new Image()
        g.setAttribute('crossOrigin', 'Anonymous'),
          (g.src = o),
          (g.onload = () => {
            this.imageCache.set(o, g),
              this.draw.render({ isCompute: !1, isSubmitHistory: !1 })
          })
        return
      }
      const c = this.draw.getWidth(),
        d = this.draw.getHeight(),
        h = e * R,
        u = n * R
      if ((t.save(), (t.globalAlpha = s), i)) {
        const g = this.draw.getPagePixelRatio(),
          T = document.createElement('canvas'),
          P = T.getContext('2d'),
          O = Math.sqrt(Math.pow(h, 2) + Math.pow(u, 2)),
          M = O + 2 * r[0] * R,
          S = O + 2 * r[1] * R
        ;(T.width = M),
          (T.height = S),
          (T.style.width = `${M * g}px`),
          (T.style.height = `${S * g}px`),
          P.translate(M / 2, S / 2),
          P.rotate((-45 * Math.PI) / 180),
          P.translate(-M / 2, -S / 2),
          P.drawImage(this.imageCache.get(o), (M - h) / 2, (S - u) / 2, h, u)
        const I = t.createPattern(T, 'repeat')
        I && ((t.fillStyle = I), t.fillRect(0, 0, c, d))
      } else {
        const g = c / 2,
          T = d / 2
        t.translate(g, T),
          t.rotate((-45 * Math.PI) / 180),
          t.drawImage(this.imageCache.get(o), -h / 2, -u / 2, h, u)
      }
      t.restore()
    }
    render(t, e) {
      this.options.watermark.type === a.WatermarkType.IMAGE
        ? this.renderImage(t)
        : this.renderText(t, e)
    }
  }
  class Fs {
    constructor(t) {
      L(this, 'draw')
      L(this, 'control')
      L(this, 'options')
      L(this, 'highlightList')
      L(this, 'highlightMatchResult')
      ;(this.draw = t.getDraw()),
        (this.control = t),
        (this.options = this.draw.getOptions()),
        (this.highlightList = []),
        (this.highlightMatchResult = [])
    }
    getControlHighlight(t, e) {
      var T, P
      const {
          control: {
            activeBackgroundColor: n,
            disabledBackgroundColor: o,
            existValueBackgroundColor: s,
            noValueBackgroundColor: i
          }
        } = this.options,
        r = t[e],
        R = this.draw.isPrintMode(),
        c =
          (T = this.control.getActiveControl()) == null
            ? void 0
            : T.getElement()
      let d = !1,
        h = !1,
        u = !1,
        g = !1
      return (
        r.highlight ||
          (d =
            !R &&
            !!n &&
            !!c &&
            r.controlId === c.controlId &&
            !this.control.getIsRangeInPostfix()),
        d ||
          (h = !R && !!o && !!((P = r.control) == null ? void 0 : P.disabled)),
        h ||
          (u =
            !R &&
            !!s &&
            !!r.controlId &&
            this.control.getIsExistValueByElementListIndex(t, e)),
        u ||
          (g =
            !R &&
            !!i &&
            !!r.controlId &&
            !this.control.getIsExistValueByElementListIndex(t, e)),
        (d ? n : '') || (h ? o : '') || (u ? s : '') || (g ? i : '')
      )
    }
    getHighlightMatchResult() {
      return this.highlightMatchResult
    }
    getHighlightList() {
      return this.highlightList
    }
    setHighlightList(t) {
      this.highlightList = t
    }
    computeHighlightList() {
      const t = this.draw.getSearch(),
        e = (n, o) => {
          let s = 0
          for (; s < n.length; ) {
            const i = n[s]
            if ((s++, i.type === a.ElementType.TABLE)) {
              const T = i.trList
              for (let P = 0; P < T.length; P++) {
                const O = T[P]
                for (let M = 0; M < O.tdList.length; M++) {
                  const S = O.tdList[M],
                    I = {
                      tableId: i.id,
                      tableIndex: s - 1,
                      trIndex: P,
                      tdIndex: M,
                      tdId: S.id
                    }
                  e(S.value, I)
                }
              }
            }
            const r = i == null ? void 0 : i.control
            if (!r) continue
            const R = this.highlightList.findIndex(
              T =>
                T.id === i.controlId ||
                (r.conceptId && r.conceptId === T.conceptId)
            )
            if (!~R) continue
            const c = s
            let d = s
            for (; d < n.length && n[d].controlId === i.controlId; ) d++
            s = d
            const h = n
                .slice(c, d)
                .map(T =>
                  T.controlComponent === a.ControlComponent.VALUE
                    ? T
                    : { value: H }
                ),
              u = this.highlightList[R],
              { ruleList: g } = u
            for (let T = 0; T < g.length; T++) {
              const P = g[T],
                O = t.getMatchList(P.keyword, h)
              this.highlightMatchResult.push(
                ...O.map(M => v(C(C(C({}, M), P), o), { index: M.index + c }))
              )
            }
          }
        }
      ;(this.highlightMatchResult = []),
        e(this.draw.getOriginalMainElementList())
    }
    renderHighlightList(t, e) {
      var r, R, c
      if (!((r = this.highlightMatchResult) == null ? void 0 : r.length)) return
      const { searchMatchAlpha: n, searchMatchColor: o } = this.options,
        s = this.draw.getPosition().getOriginalPositionList(),
        i = this.draw.getOriginalElementList()
      t.save()
      for (let d = 0; d < this.highlightMatchResult.length; d++) {
        const h = this.highlightMatchResult[d]
        let u = null
        if (h.tableId) {
          const { tableIndex: N, trIndex: X, tdIndex: f, index: Q } = h
          u =
            (c = (R = i[N]) == null ? void 0 : R.trList[X].tdList[f]) == null
              ? void 0
              : c.positionList[Q]
        } else u = s[h.index]
        if (!u) continue
        const {
          coordinate: { leftTop: g, leftBottom: T, rightTop: P },
          pageNo: O
        } = u
        if (O !== e) continue
        ;(t.fillStyle = h.backgroundColor || o), (t.globalAlpha = h.alpha || n)
        const M = g[0],
          S = g[1],
          I = P[0] - g[0],
          F = T[1] - g[1]
        t.fillRect(M, S, I, F)
      }
      t.restore()
    }
  }
  class fs {
    constructor(t) {
      L(this, 'borderRect')
      L(this, 'options')
      ;(this.borderRect = this.clearBorderInfo()),
        (this.options = t.getOptions())
    }
    clearBorderInfo() {
      return (
        (this.borderRect = { x: 0, y: 0, width: 0, height: 0 }), this.borderRect
      )
    }
    recordBorderInfo(t, e, n, o) {
      !this.borderRect.width &&
        ((this.borderRect.x = t),
        (this.borderRect.y = e),
        (this.borderRect.height = o)),
        (this.borderRect.width += n)
    }
    render(t) {
      if (!this.borderRect.width) return
      const {
          scale: e,
          control: { borderWidth: n, borderColor: o }
        } = this.options,
        { x: s, y: i, width: r, height: R } = this.borderRect
      t.save(),
        t.translate(0, 1 * e),
        (t.lineWidth = n * e),
        (t.strokeStyle = o),
        t.beginPath(),
        t.rect(s, i, r, R),
        t.stroke(),
        t.restore(),
        this.clearBorderInfo()
    }
  }
  class Te {
    constructor(t, e) {
      L(this, 'element')
      L(this, 'control')
      L(this, 'isPopup')
      L(this, 'selectDom')
      L(this, 'options')
      L(this, 'VALUE_DELIMITER', ',')
      L(this, 'DEFAULT_MULTI_SELECT_DELIMITER', ',')
      const n = e.getDraw()
      ;(this.options = n.getOptions()),
        (this.element = t),
        (this.control = e),
        (this.isPopup = !1),
        (this.selectDom = null)
    }
    setElement(t) {
      this.element = t
    }
    getElement() {
      return this.element
    }
    getIsPopup() {
      return this.isPopup
    }
    getCodes() {
      var t, e
      return (
        (e = (t = this.element) == null ? void 0 : t.control) == null
          ? void 0
          : e.code
      )
        ? this.element.control.code.split(',')
        : []
    }
    getText(t) {
      var i, r
      if (!((i = this.element) == null ? void 0 : i.control)) return null
      const e = this.element.control
      if (!((r = e.valueSets) == null ? void 0 : r.length)) return null
      const n =
          (e == null ? void 0 : e.multiSelectDelimiter) ||
          this.DEFAULT_MULTI_SELECT_DELIMITER,
        o = e.valueSets,
        s = []
      return (
        t.forEach(R => {
          const c = o.find(d => d.code === R)
          c && !Sn(c.value) && s.push(c.value)
        }),
        s.join(n) || null
      )
    }
    getValue(t = {}) {
      const e = t.elementList || this.control.getElementList(),
        { startIndex: n } = t.range || this.control.getRange(),
        o = e[n],
        s = []
      let i = n
      for (; i > 0; ) {
        const R = e[i]
        if (
          R.controlId !== o.controlId ||
          R.controlComponent === a.ControlComponent.PREFIX ||
          R.controlComponent === a.ControlComponent.PRE_TEXT
        )
          break
        R.controlComponent === a.ControlComponent.VALUE && s.unshift(R), i--
      }
      let r = n + 1
      for (; r < e.length; ) {
        const R = e[r]
        if (
          R.controlId !== o.controlId ||
          R.controlComponent === a.ControlComponent.POSTFIX ||
          R.controlComponent === a.ControlComponent.POST_TEXT
        )
          break
        R.controlComponent === a.ControlComponent.VALUE && s.push(R), r++
      }
      return s
    }
    setValue(t, e = {}, n = {}) {
      var u, g
      if (
        !((g =
          (u = this.element.control) == null
            ? void 0
            : u.selectExclusiveOptions) == null
          ? void 0
          : g.inputAble) ||
        (!n.isIgnoreDisabledRule && this.control.getIsDisabledControl(e))
      )
        return -1
      const o = e.elementList || this.control.getElementList(),
        s = e.range || this.control.getRange()
      this.control.shrinkBoundary(e)
      const { startIndex: i, endIndex: r } = s,
        R = this.control.getDraw()
      i !== r
        ? R.spliceElementList(o, i + 1, r - i)
        : this.control.removePlaceholder(i, e)
      const c = o[i],
        d =
          (c.type && !Qt.includes(c.type)) ||
          c.controlComponent === a.ControlComponent.PREFIX ||
          c.controlComponent === a.ControlComponent.PRE_TEXT
            ? Ut(c, ['control', 'controlId', ...xt])
            : bt(c, ['type']),
        h = s.startIndex + 1
      for (let T = 0; T < t.length; T++) {
        const P = v(C(C({}, d), t[T]), {
          controlComponent: a.ControlComponent.VALUE
        })
        Tt(o, [P], i, { editorOptions: this.options }),
          R.spliceElementList(o, h + T, 0, [P])
      }
      return h + t.length - 1
    }
    keydown(t) {
      if (this.control.getIsDisabledControl()) return null
      const e = this.control.getElementList(),
        n = this.control.getRange()
      this.control.shrinkBoundary()
      const { startIndex: o, endIndex: s } = n,
        i = e[o],
        r = e[s]
      if (t.key === a.KeyMap.Backspace)
        return o !== s
          ? this.clearSelect()
          : i.controlComponent === a.ControlComponent.PREFIX ||
              i.controlComponent === a.ControlComponent.PRE_TEXT ||
              r.controlComponent === a.ControlComponent.POSTFIX ||
              r.controlComponent === a.ControlComponent.POST_TEXT ||
              i.controlComponent === a.ControlComponent.PLACEHOLDER
            ? this.control.removeControl(o)
            : this.clearSelect()
      if (t.key === a.KeyMap.Delete) {
        if (o !== s) return this.clearSelect()
        {
          const R = e[s + 1]
          return ((i.controlComponent === a.ControlComponent.PREFIX ||
            i.controlComponent === a.ControlComponent.PRE_TEXT) &&
            R.controlComponent === a.ControlComponent.PLACEHOLDER) ||
            R.controlComponent === a.ControlComponent.POSTFIX ||
            R.controlComponent === a.ControlComponent.POST_TEXT ||
            i.controlComponent === a.ControlComponent.PLACEHOLDER
            ? this.control.removeControl(o)
            : this.clearSelect()
        }
      }
      return s
    }
    cut() {
      if (this.control.getIsDisabledControl()) return -1
      this.control.shrinkBoundary()
      const { startIndex: t, endIndex: e } = this.control.getRange()
      return t === e ? t : this.clearSelect()
    }
    clearSelect(t = {}, e = {}) {
      const { isIgnoreDisabledRule: n = !1, isAddPlaceholder: o = !0 } = e
      if (!n && this.control.getIsDisabledControl(t)) return -1
      const s = t.elementList || this.control.getElementList(),
        { startIndex: i } = t.range || this.control.getRange(),
        r = s[i]
      let R = -1,
        c = -1,
        d = i
      for (; d > 0; ) {
        const g = s[d]
        if (
          g.controlId !== r.controlId ||
          g.controlComponent === a.ControlComponent.PREFIX ||
          g.controlComponent === a.ControlComponent.PRE_TEXT
        ) {
          R = d
          break
        }
        d--
      }
      let h = i + 1
      for (; h < s.length; ) {
        const g = s[h]
        if (
          g.controlId !== r.controlId ||
          g.controlComponent === a.ControlComponent.POSTFIX ||
          g.controlComponent === a.ControlComponent.POST_TEXT
        ) {
          c = h - 1
          break
        }
        h++
      }
      return !~R || !~c
        ? -1
        : (this.control
            .getDraw()
            .spliceElementList(s, R + 1, c - R, [], {
              isIgnoreDeletedRule: e.isIgnoreDeletedRule
            }),
          o && this.control.addPlaceholder(d, t),
          this.control.setControlProperties(
            { code: null },
            { elementList: s, range: { startIndex: d, endIndex: d } }
          ),
          d)
    }
    setSelect(t, e = {}, n = {}) {
      var F
      if (!n.isIgnoreDisabledRule && this.control.getIsDisabledControl(e))
        return
      const o = e.elementList || this.control.getElementList(),
        s = e.range || this.control.getRange(),
        i = this.element.control,
        r = (t == null ? void 0 : t.split(this.VALUE_DELIMITER)) || [],
        R = i.code,
        c =
          ((F = i.code) == null ? void 0 : F.split(this.VALUE_DELIMITER)) || [],
        d = i.isMultiSelect
      if ((!d && t === R) || (d && On(c, r))) {
        this.control.repaintControl({
          curIndex: s.startIndex,
          isCompute: !1,
          isSubmitHistory: !1
        }),
          this.destroy()
        return
      }
      const h = i.valueSets
      if (!Array.isArray(h) || !h.length) return
      const u = this.getText(r)
      if (!u) {
        if (R) {
          const N = this.clearSelect(e, {
            isIgnoreDeletedRule: n.isIgnoreDeletedRule
          })
          ~N &&
            (this.control.repaintControl({ curIndex: N }),
            this.control.emitControlContentChange({ controlValue: [] }))
        }
        return
      }
      const g = this.getValue(e)[0],
        T = g ? Ut(g, yt) : Ut(o[s.startIndex], xt),
        P = this.clearSelect(e, {
          isAddPlaceholder: !1,
          isIgnoreDeletedRule: n.isIgnoreDeletedRule
        })
      if (!~P) return
      R || this.control.removePlaceholder(P, e)
      const O = bt(o[P], yt),
        M = P + 1,
        S = splitText(u),
        I = this.control.getDraw()
      for (let N = 0; N < S.length; N++) {
        const X = v(C(C({}, T), O), {
          type: a.ElementType.TEXT,
          value: S[N],
          controlComponent: a.ControlComponent.VALUE
        })
        Tt(o, [X], P, { editorOptions: this.options }),
          I.spliceElementList(o, M + N, 0, [X])
      }
      if (
        (this.control.setControlProperties(
          { code: t },
          { elementList: o, range: { startIndex: P, endIndex: P } }
        ),
        !e.range)
      ) {
        const N = M + S.length - 1
        this.control.repaintControl({ curIndex: N }),
          this.control.emitControlContentChange({ context: e }),
          d || this.destroy()
      }
    }
    _createSelectPopupDom() {
      const t = this.element.control,
        e = t.valueSets
      if (!Array.isArray(e) || !e.length) return
      const n = this.control.getPosition()
      if (!n) return
      const o = document.createElement('div')
      o.classList.add(`${x}-select-control-popup`),
        o.setAttribute(_t, a.EditorComponent.POPUP)
      const s = document.createElement('ul')
      for (let h = 0; h < e.length; h++) {
        const u = e[h],
          g = document.createElement('li')
        let T = this.getCodes()
        T.includes(u.code) && g.classList.add('active'),
          (g.onclick = () => {
            const P = T.findIndex(O => O === u.code)
            t.isMultiSelect
              ? ~P
                ? T.splice(P, 1)
                : T.push(u.code)
              : ~P
                ? (T = [])
                : (T = [u.code]),
              this.setSelect(T.join(this.VALUE_DELIMITER))
          }),
          g.append(document.createTextNode(u.value)),
          s.append(g)
      }
      o.append(s)
      const {
          coordinate: {
            leftTop: [i, r]
          },
          lineHeight: R
        } = n,
        c = this.control.getPreY()
      ;(o.style.left = `${i}px`),
        (o.style.top = `${r + c + R}px`),
        this.control.getContainer().append(o),
        (this.selectDom = o)
    }
    awake() {
      var n
      if (this.isPopup || this.control.getIsDisabledControl()) return
      const { startIndex: t } = this.control.getRange()
      ;((n = this.control.getElementList()[t + 1]) == null
        ? void 0
        : n.controlId) === this.element.controlId &&
        (this._createSelectPopupDom(), (this.isPopup = !0))
    }
    destroy() {
      var t
      !this.isPopup ||
        ((t = this.selectDom) == null || t.remove(), (this.isPopup = !1))
    }
  }
  class nn {
    constructor(t, e) {
      L(this, 'element')
      L(this, 'control')
      L(this, 'options')
      const n = e.getDraw()
      ;(this.options = n.getOptions()), (this.element = t), (this.control = e)
    }
    setElement(t) {
      this.element = t
    }
    getElement() {
      return this.element
    }
    getValue(t = {}) {
      const e = t.elementList || this.control.getElementList(),
        { startIndex: n } = t.range || this.control.getRange(),
        o = e[n],
        s = []
      let i = n
      for (; i > 0; ) {
        const R = e[i]
        if (
          R.controlId !== o.controlId ||
          R.controlComponent === a.ControlComponent.PREFIX ||
          R.controlComponent === a.ControlComponent.PRE_TEXT
        )
          break
        R.controlComponent === a.ControlComponent.VALUE && s.unshift(R), i--
      }
      let r = n + 1
      for (; r < e.length; ) {
        const R = e[r]
        if (
          R.controlId !== o.controlId ||
          R.controlComponent === a.ControlComponent.POSTFIX ||
          R.controlComponent === a.ControlComponent.POST_TEXT
        )
          break
        R.controlComponent === a.ControlComponent.VALUE && s.push(R), r++
      }
      return s
    }
    setValue(t, e = {}, n = {}) {
      if (!n.isIgnoreDisabledRule && this.control.getIsDisabledControl(e))
        return -1
      const o = e.elementList || this.control.getElementList(),
        s = e.range || this.control.getRange()
      this.control.shrinkBoundary(e)
      const { startIndex: i, endIndex: r } = s,
        R = this.control.getDraw()
      i !== r
        ? R.spliceElementList(o, i + 1, r - i, [], {
            isIgnoreDeletedRule: n.isIgnoreDeletedRule
          })
        : this.control.removePlaceholder(i, e)
      const c = o[i],
        d =
          (c.type && !Qt.includes(c.type)) ||
          c.controlComponent === a.ControlComponent.PREFIX ||
          c.controlComponent === a.ControlComponent.PRE_TEXT
            ? Ut(c, ['control', 'controlId', ...xt])
            : bt(c, ['type']),
        h = s.startIndex + 1
      for (let u = 0; u < t.length; u++) {
        const g = v(C(C({}, d), t[u]), {
          controlComponent: a.ControlComponent.VALUE
        })
        Tt(o, [g], i, { editorOptions: this.options }),
          R.spliceElementList(o, h + u, 0, [g])
      }
      return h + t.length - 1
    }
    clearValue(t = {}, e = {}) {
      if (!e.isIgnoreDisabledRule && this.control.getIsDisabledControl(t))
        return -1
      const n = t.elementList || this.control.getElementList(),
        o = t.range || this.control.getRange(),
        { startIndex: s, endIndex: i } = o
      return (
        this.control
          .getDraw()
          .spliceElementList(n, s + 1, i - s, [], {
            isIgnoreDeletedRule: e.isIgnoreDeletedRule
          }),
        this.getValue(t).length || this.control.addPlaceholder(s, t),
        s
      )
    }
    keydown(t) {
      if (this.control.getIsDisabledControl()) return null
      const e = this.control.getElementList(),
        n = this.control.getRange()
      this.control.shrinkBoundary()
      const { startIndex: o, endIndex: s } = n,
        i = e[o],
        r = e[s],
        R = this.control.getDraw()
      if (t.key === a.KeyMap.Backspace)
        return o !== s
          ? (R.spliceElementList(e, o + 1, s - o),
            this.getValue().length || this.control.addPlaceholder(o),
            o)
          : i.controlComponent === a.ControlComponent.PREFIX ||
              i.controlComponent === a.ControlComponent.PRE_TEXT ||
              r.controlComponent === a.ControlComponent.POSTFIX ||
              r.controlComponent === a.ControlComponent.POST_TEXT ||
              i.controlComponent === a.ControlComponent.PLACEHOLDER
            ? this.control.removeControl(o)
            : (R.spliceElementList(e, o, 1),
              this.getValue().length || this.control.addPlaceholder(o - 1),
              o - 1)
      if (t.key === a.KeyMap.Delete) {
        if (o !== s)
          return (
            R.spliceElementList(e, o + 1, s - o),
            this.getValue().length || this.control.addPlaceholder(o),
            o
          )
        {
          const c = e[s + 1]
          return ((i.controlComponent === a.ControlComponent.PREFIX ||
            i.controlComponent === a.ControlComponent.PRE_TEXT) &&
            c.controlComponent === a.ControlComponent.PLACEHOLDER) ||
            c.controlComponent === a.ControlComponent.POSTFIX ||
            c.controlComponent === a.ControlComponent.POST_TEXT ||
            i.controlComponent === a.ControlComponent.PLACEHOLDER
            ? this.control.removeControl(o)
            : (R.spliceElementList(e, o + 1, 1),
              this.getValue().length || this.control.addPlaceholder(o),
              o)
        }
      }
      return s
    }
    cut() {
      if (this.control.getIsDisabledControl()) return -1
      this.control.shrinkBoundary()
      const { startIndex: t, endIndex: e } = this.control.getRange()
      if (t === e) return t
      const n = this.control.getDraw(),
        o = this.control.getElementList()
      return (
        n.spliceElementList(o, t + 1, e - t),
        this.getValue().length || this.control.addPlaceholder(t),
        t
      )
    }
  }
  class An {
    constructor(t, e = {}) {
      L(this, 'draw')
      L(this, 'options')
      L(this, 'now')
      L(this, 'dom')
      L(this, 'renderOptions')
      L(this, 'isDatePicker')
      L(this, 'pickDate')
      L(this, 'lang')
      ;(this.draw = t),
        (this.options = e),
        (this.lang = this._getLang()),
        (this.now = new Date()),
        (this.dom = this._createDom()),
        (this.renderOptions = null),
        (this.isDatePicker = !0),
        (this.pickDate = null),
        this._bindEvent()
    }
    _createDom() {
      const t = document.createElement('div')
      t.classList.add(`${x}-date-container`),
        t.setAttribute(_t, a.EditorComponent.POPUP)
      const e = document.createElement('div')
      e.classList.add(`${x}-date-wrap`)
      const n = document.createElement('div')
      n.classList.add(`${x}-date-title`)
      const o = document.createElement('span')
      o.classList.add(`${x}-date-title__pre-year`), (o.innerText = '<<')
      const s = document.createElement('span')
      s.classList.add(`${x}-date-title__pre-month`), (s.innerText = '<')
      const i = document.createElement('span')
      i.classList.add(`${x}-date-title__now`)
      const r = document.createElement('span')
      r.classList.add(`${x}-date-title__next-month`), (r.innerText = '>')
      const R = document.createElement('span')
      R.classList.add(`${x}-date-title__next-year`),
        (R.innerText = '>>'),
        n.append(o),
        n.append(s),
        n.append(i),
        n.append(r),
        n.append(R)
      const c = document.createElement('div')
      c.classList.add(`${x}-date-week`)
      const {
        weeks: { sun: d, mon: h, tue: u, wed: g, thu: T, fri: P, sat: O }
      } = this.lang
      ;[d, h, u, g, T, P, O].forEach(V => {
        const W = document.createElement('span')
        ;(W.innerText = `${V}`), c.append(W)
      })
      const S = document.createElement('div')
      S.classList.add(`${x}-date-day`), e.append(n), e.append(c), e.append(S)
      const I = document.createElement('ul')
      I.classList.add(`${x}-time-wrap`)
      let F, N, X
      ;[this.lang.hour, this.lang.minute, this.lang.second].forEach((V, W) => {
        const p = document.createElement('li'),
          U = document.createElement('span')
        ;(U.innerText = V), p.append(U)
        const m = document.createElement('ol'),
          y = W === 0,
          K = W === 1,
          b = y ? 24 : 60
        for (let w = 0; w < b; w++) {
          const G = document.createElement('li')
          ;(G.innerText = `${String(w).padStart(2, '0')}`),
            G.setAttribute('data-id', `${w}`),
            m.append(G)
        }
        y ? (F = m) : K ? (N = m) : (X = m), p.append(m), I.append(p)
      })
      const Q = document.createElement('div')
      Q.classList.add(`${x}-date-menu`)
      const Z = document.createElement('button')
      Z.classList.add(`${x}-date-menu__time`),
        (Z.innerText = this.lang.timeSelect)
      const D = document.createElement('button')
      D.classList.add(`${x}-date-menu__now`), (D.innerText = this.lang.now)
      const Y = document.createElement('button')
      return (
        Y.classList.add(`${x}-date-menu__submit`),
        (Y.innerText = this.lang.confirm),
        Q.append(Z),
        Q.append(D),
        Q.append(Y),
        t.append(e),
        t.append(I),
        t.append(Q),
        this.draw.getContainer().append(t),
        {
          container: t,
          dateWrap: e,
          datePickerWeek: c,
          timeWrap: I,
          title: { preYear: o, preMonth: s, now: i, nextMonth: r, nextYear: R },
          day: S,
          time: { hour: F, minute: N, second: X },
          menu: { time: Z, now: D, submit: Y }
        }
      )
    }
    _bindEvent() {
      ;(this.dom.title.preYear.onclick = () => {
        this._preYear()
      }),
        (this.dom.title.preMonth.onclick = () => {
          this._preMonth()
        }),
        (this.dom.title.nextMonth.onclick = () => {
          this._nextMonth()
        }),
        (this.dom.title.nextYear.onclick = () => {
          this._nextYear()
        }),
        (this.dom.menu.time.onclick = () => {
          ;(this.isDatePicker = !this.isDatePicker),
            this._toggleDateTimePicker()
        }),
        (this.dom.menu.now.onclick = () => {
          this._now(), this._submit()
        }),
        (this.dom.menu.submit.onclick = () => {
          this.dispose(), this._submit()
        }),
        (this.dom.time.hour.onclick = t => {
          if (!this.pickDate) return
          const n = t.target.dataset.id
          !n || (this.pickDate.setHours(Number(n)), this._setTimePick(!1))
        }),
        (this.dom.time.minute.onclick = t => {
          if (!this.pickDate) return
          const n = t.target.dataset.id
          !n || (this.pickDate.setMinutes(Number(n)), this._setTimePick(!1))
        }),
        (this.dom.time.second.onclick = t => {
          if (!this.pickDate) return
          const n = t.target.dataset.id
          !n || (this.pickDate.setSeconds(Number(n)), this._setTimePick(!1))
        })
    }
    _setPosition() {
      if (!this.renderOptions) return
      const {
          position: {
            coordinate: {
              leftTop: [t, e]
            },
            lineHeight: n,
            pageNo: o
          }
        } = this.renderOptions,
        s = this.draw.getHeight(),
        i = this.draw.getPageGap(),
        R = (o != null ? o : this.draw.getPageNo()) * (s + i)
      ;(this.dom.container.style.left = `${t}px`),
        (this.dom.container.style.top = `${e + R + n}px`)
    }
    isInvalidDate(t) {
      return t.toDateString() === 'Invalid Date'
    }
    _setValue() {
      var e
      const t = (e = this.renderOptions) == null ? void 0 : e.value
      if (t) {
        const n = new Date(t)
        this.now = this.isInvalidDate(n) ? new Date() : n
      } else this.now = new Date()
      this.pickDate = new Date(this.now)
    }
    _getLang() {
      const t = this.draw.getI18n(),
        e = t.t.bind(t)
      return {
        now: e('datePicker.now'),
        confirm: e('datePicker.confirm'),
        return: e('datePicker.return'),
        timeSelect: e('datePicker.timeSelect'),
        weeks: {
          sun: e('datePicker.weeks.sun'),
          mon: e('datePicker.weeks.mon'),
          tue: e('datePicker.weeks.tue'),
          wed: e('datePicker.weeks.wed'),
          thu: e('datePicker.weeks.thu'),
          fri: e('datePicker.weeks.fri'),
          sat: e('datePicker.weeks.sat')
        },
        year: e('datePicker.year'),
        month: e('datePicker.month'),
        hour: e('datePicker.hour'),
        minute: e('datePicker.minute'),
        second: e('datePicker.second')
      }
    }
    _setLangChange() {
      ;(this.dom.menu.time.innerText = this.lang.timeSelect),
        (this.dom.menu.now.innerText = this.lang.now),
        (this.dom.menu.submit.innerText = this.lang.confirm)
      const {
          weeks: { sun: t, mon: e, tue: n, wed: o, thu: s, fri: i, sat: r }
        } = this.lang,
        R = [t, e, n, o, s, i, r]
      this.dom.datePickerWeek.childNodes.forEach((u, g) => {
        const T = u
        T.innerText = R[g]
      })
      const c = this.dom.time.hour.previousElementSibling
      c.innerText = this.lang.hour
      const d = this.dom.time.minute.previousElementSibling
      d.innerText = this.lang.minute
      const h = this.dom.time.second.previousElementSibling
      h.innerText = this.lang.second
    }
    _update() {
      const t = new Date(),
        e = t.getFullYear(),
        n = t.getMonth() + 1,
        o = t.getDate()
      let s = null,
        i = null,
        r = null
      this.pickDate &&
        ((s = this.pickDate.getFullYear()),
        (i = this.pickDate.getMonth() + 1),
        (r = this.pickDate.getDate()))
      const R = this.now.getFullYear(),
        c = this.now.getMonth() + 1
      this.dom.title.now.innerText = `${R}${this.lang.year} ${String(c).padStart(2, '0')}${this.lang.month}`
      const h = new Date(R, c, 0).getDate()
      let u = new Date(R, c - 1, 1).getDay()
      u === 0 && (u = 7)
      const g = new Date(R, c - 1, 0).getDate()
      this.dom.day.innerHTML = ''
      const T = g - u + 1
      for (let O = T; O <= g; O++) {
        const M = document.createElement('div')
        M.classList.add('disable'),
          (M.innerText = `${O}`),
          (M.onclick = () => {
            const S = c - 2
            ;(this.now = new Date(R, S, O)), this._setDatePick(R, S, O)
          }),
          this.dom.day.append(M)
      }
      for (let O = 1; O <= h; O++) {
        const M = document.createElement('div')
        e === R && n === c && o === O && M.classList.add('active'),
          this.pickDate &&
            s === R &&
            i === c &&
            r === O &&
            M.classList.add('select'),
          (M.innerText = `${O}`),
          (M.onclick = S => {
            const I = c - 1
            ;(this.now = new Date(R, I, O)),
              this._setDatePick(R, I, O),
              S.stopPropagation()
          }),
          this.dom.day.append(M)
      }
      const P = 6 * 7 - u - h
      for (let O = 1; O <= P; O++) {
        const M = document.createElement('div')
        M.classList.add('disable'),
          (M.innerText = `${O}`),
          (M.onclick = () => {
            ;(this.now = new Date(R, c, O)), this._setDatePick(R, c, O)
          }),
          this.dom.day.append(M)
      }
    }
    _toggleDateTimePicker() {
      this.isDatePicker
        ? (this.dom.dateWrap.classList.add('active'),
          this.dom.timeWrap.classList.remove('active'),
          (this.dom.menu.time.innerText = this.lang.timeSelect))
        : (this.dom.dateWrap.classList.remove('active'),
          this.dom.timeWrap.classList.add('active'),
          (this.dom.menu.time.innerText = this.lang.return),
          this._setTimePick())
    }
    _setDatePick(t, e, n) {
      var o, s, i
      ;(this.now = new Date(t, e, n)),
        (o = this.pickDate) == null || o.setFullYear(t),
        (s = this.pickDate) == null || s.setMonth(e),
        (i = this.pickDate) == null || i.setDate(n),
        this._update()
    }
    _setTimePick(t = !0) {
      var d, h, u
      const e = ((d = this.pickDate) == null ? void 0 : d.getHours()) || 0,
        n = ((h = this.pickDate) == null ? void 0 : h.getMinutes()) || 0,
        o = ((u = this.pickDate) == null ? void 0 : u.getSeconds()) || 0,
        { hour: s, minute: i, second: r } = this.dom.time
      ;[s, i, r].forEach(g => {
        g.querySelectorAll('li').forEach(T => T.classList.remove('active'))
      }),
        [
          [s, e],
          [i, n],
          [r, o]
        ].forEach(([g, T]) => {
          const P = g.querySelector(`[data-id='${T}']`)
          P.classList.add('active'), t && this._scrollIntoView(g, P)
        })
    }
    _scrollIntoView(t, e) {
      if (!e) {
        t.scrollTop = 0
        return
      }
      const n = []
      let o = e.offsetParent
      for (; o && t !== o && t.contains(o); ) n.push(o), (o = o.offsetParent)
      const s = e.offsetTop + n.reduce((c, d) => c + d.offsetTop, 0),
        i = s + e.offsetHeight,
        r = t.scrollTop,
        R = r + t.clientHeight
      s < r ? (t.scrollTop = s) : i > R && (t.scrollTop = i - t.clientHeight)
    }
    _preMonth() {
      this.now.setMonth(this.now.getMonth() - 1), this._update()
    }
    _nextMonth() {
      this.now.setMonth(this.now.getMonth() + 1), this._update()
    }
    _preYear() {
      this.now.setFullYear(this.now.getFullYear() - 1), this._update()
    }
    _nextYear() {
      this.now.setFullYear(this.now.getFullYear() + 1), this._update()
    }
    _now() {
      ;(this.pickDate = new Date()), this.dispose()
    }
    _toggleVisible(t) {
      t
        ? this.dom.container.classList.add('active')
        : this.dom.container.classList.remove('active')
    }
    _submit() {
      var t
      if (this.options.onSubmit && this.pickDate) {
        const e = (t = this.renderOptions) == null ? void 0 : t.dateFormat,
          n = this.formatDate(this.pickDate, e)
        this.options.onSubmit(n)
      }
    }
    formatDate(t, e = 'yyyy-MM-dd hh:mm:ss') {
      let n = e
      const o = {
        'y+': t.getFullYear().toString(),
        'M+': (t.getMonth() + 1).toString(),
        'd+': t.getDate().toString(),
        'h+': t.getHours().toString(),
        'm+': t.getMinutes().toString(),
        's+': t.getSeconds().toString()
      }
      for (const s in o) {
        const i = new RegExp('(' + s + ')').exec(e),
          r = s
        i &&
          (n = n.replace(
            i[1],
            i[1].length === 1 ? o[r] : o[r].padStart(i[1].length, '0')
          ))
      }
      return n
    }
    render(t) {
      ;(this.renderOptions = t),
        (this.lang = this._getLang()),
        this._setLangChange(),
        this._setValue(),
        this._update(),
        this._setPosition(),
        (this.isDatePicker = !0),
        this._toggleDateTimePicker(),
        this._toggleVisible(!0)
    }
    dispose() {
      this._toggleVisible(!1)
    }
    destroy() {
      this.dom.container.remove()
    }
  }
  class Pe {
    constructor(t, e) {
      L(this, 'draw')
      L(this, 'element')
      L(this, 'control')
      L(this, 'isPopup')
      L(this, 'datePicker')
      L(this, 'options')
      const n = e.getDraw()
      ;(this.draw = n),
        (this.options = n.getOptions()),
        (this.element = t),
        (this.control = e),
        (this.isPopup = !1),
        (this.datePicker = null)
    }
    setElement(t) {
      this.element = t
    }
    getElement() {
      return this.element
    }
    getIsPopup() {
      return this.isPopup
    }
    getValueRange(t = {}) {
      const e = t.elementList || this.control.getElementList(),
        { startIndex: n } = t.range || this.control.getRange(),
        o = e[n]
      let s = n
      for (; s > 0; ) {
        const r = e[s]
        if (
          r.controlId !== o.controlId ||
          r.controlComponent === a.ControlComponent.PREFIX ||
          r.controlComponent === a.ControlComponent.PRE_TEXT
        )
          break
        s--
      }
      let i = n + 1
      for (; i < e.length; ) {
        const r = e[i]
        if (
          r.controlId !== o.controlId ||
          r.controlComponent === a.ControlComponent.POSTFIX ||
          r.controlComponent === a.ControlComponent.POST_TEXT
        )
          break
        i++
      }
      return s === i ? null : [s, i - 1]
    }
    getValue(t = {}) {
      const e = t.elementList || this.control.getElementList(),
        n = this.getValueRange(t)
      if (!n) return []
      const o = [],
        [s, i] = n
      for (let r = s; r <= i; r++) {
        const R = e[r]
        R.controlComponent === a.ControlComponent.VALUE && o.push(R)
      }
      return o
    }
    setValue(t, e = {}, n = {}) {
      if (!n.isIgnoreDisabledRule && this.control.getIsDisabledControl(e))
        return -1
      const o = e.elementList || this.control.getElementList(),
        s = e.range || this.control.getRange()
      this.control.shrinkBoundary(e)
      const { startIndex: i, endIndex: r } = s,
        R = this.control.getDraw()
      i !== r
        ? R.spliceElementList(o, i + 1, r - i)
        : this.control.removePlaceholder(i, e)
      const c = o[i],
        d =
          (c.type && !Qt.includes(c.type)) ||
          c.controlComponent === a.ControlComponent.PREFIX ||
          c.controlComponent === a.ControlComponent.PRE_TEXT
            ? Ut(c, ['control', 'controlId', ...xt])
            : bt(c, ['type']),
        h = s.startIndex + 1
      for (let u = 0; u < t.length; u++) {
        const g = v(C(C({}, d), t[u]), {
          controlComponent: a.ControlComponent.VALUE
        })
        Tt(o, [g], i, { editorOptions: this.options }),
          R.spliceElementList(o, h + u, 0, [g])
      }
      return h + t.length - 1
    }
    clearSelect(t = {}, e = {}) {
      const { isIgnoreDisabledRule: n = !1, isAddPlaceholder: o = !0 } = e
      if (!n && this.control.getIsDisabledControl(t)) return -1
      const s = this.getValueRange(t)
      if (!s) return -1
      const [i, r] = s
      if (!~i || !~r) return -1
      const R = t.elementList || this.control.getElementList()
      return (
        this.control
          .getDraw()
          .spliceElementList(R, i + 1, r - i, [], {
            isIgnoreDeletedRule: e.isIgnoreDeletedRule
          }),
        o && this.control.addPlaceholder(i, t),
        i
      )
    }
    setSelect(t, e = {}, n = {}) {
      if (!n.isIgnoreDisabledRule && this.control.getIsDisabledControl(e))
        return
      const o = e.elementList || this.control.getElementList(),
        s = e.range || this.control.getRange(),
        i = this.getValue(e)[0],
        r = i ? Ut(i, yt) : Ut(o[s.startIndex], xt),
        R = this.clearSelect(e, {
          isAddPlaceholder: !1,
          isIgnoreDeletedRule: n.isIgnoreDeletedRule
        })
      if (!~R) return
      const c = bt(o[R], yt),
        d = R + 1,
        h = this.control.getDraw()
      for (let u = 0; u < t.length; u++) {
        const g = v(C(C({}, r), c), {
          type: a.ElementType.TEXT,
          value: t[u],
          controlComponent: a.ControlComponent.VALUE
        })
        Tt(o, [g], R, { editorOptions: this.options }),
          h.spliceElementList(o, d + u, 0, [g])
      }
      if (!e.range) {
        const u = d + t.length - 1
        this.control.repaintControl({ curIndex: u }),
          this.control.emitControlContentChange({ context: e }),
          this.destroy()
      }
    }
    keydown(t) {
      if (this.control.getIsDisabledControl()) return null
      const e = this.control.getElementList(),
        n = this.control.getRange()
      this.control.shrinkBoundary()
      const { startIndex: o, endIndex: s } = n,
        i = e[o],
        r = e[s],
        R = this.control.getDraw()
      if (t.key === a.KeyMap.Backspace)
        return o !== s
          ? (R.spliceElementList(e, o + 1, s - o),
            this.getValue().length || this.control.addPlaceholder(o),
            o)
          : i.controlComponent === a.ControlComponent.PREFIX ||
              i.controlComponent === a.ControlComponent.PRE_TEXT ||
              r.controlComponent === a.ControlComponent.POSTFIX ||
              r.controlComponent === a.ControlComponent.POST_TEXT ||
              i.controlComponent === a.ControlComponent.PLACEHOLDER
            ? this.control.removeControl(o)
            : (R.spliceElementList(e, o, 1),
              this.getValue().length || this.control.addPlaceholder(o - 1),
              o - 1)
      if (t.key === a.KeyMap.Delete) {
        if (o !== s)
          return (
            R.spliceElementList(e, o + 1, s - o),
            this.getValue().length || this.control.addPlaceholder(o),
            o
          )
        {
          const c = e[s + 1]
          return ((i.controlComponent === a.ControlComponent.PREFIX ||
            i.controlComponent === a.ControlComponent.PRE_TEXT) &&
            c.controlComponent === a.ControlComponent.PLACEHOLDER) ||
            c.controlComponent === a.ControlComponent.POSTFIX ||
            c.controlComponent === a.ControlComponent.POST_TEXT ||
            i.controlComponent === a.ControlComponent.PLACEHOLDER
            ? this.control.removeControl(o)
            : (R.spliceElementList(e, o + 1, 1),
              this.getValue().length || this.control.addPlaceholder(o),
              o)
        }
      }
      return s
    }
    cut() {
      if (this.control.getIsDisabledControl()) return -1
      this.control.shrinkBoundary()
      const { startIndex: t, endIndex: e } = this.control.getRange()
      if (t === e) return t
      const n = this.control.getDraw(),
        o = this.control.getElementList()
      return (
        n.spliceElementList(o, t + 1, e - t),
        this.getValue().length || this.control.addPlaceholder(t),
        t
      )
    }
    awake() {
      var i, r
      if (this.isPopup || this.control.getIsDisabledControl()) return
      const t = this.control.getPosition()
      if (!t) return
      const e = this.draw.getElementList(),
        { startIndex: n } = this.control.getRange()
      if (
        ((i = e[n + 1]) == null ? void 0 : i.controlId) !==
        this.element.controlId
      )
        return
      this.datePicker = new An(this.draw, {
        onSubmit: this._setDate.bind(this)
      })
      const o =
          this.getValue()
            .map(R => R.value)
            .join('') || '',
        s = (r = this.element.control) == null ? void 0 : r.dateFormat
      this.datePicker.render({ value: o, position: t, dateFormat: s }),
        (this.isPopup = !0)
    }
    destroy() {
      var t
      !this.isPopup ||
        ((t = this.datePicker) == null || t.destroy(), (this.isPopup = !1))
    }
    _setDate(t) {
      t ? this.setSelect(t) : this.clearSelect(), this.destroy()
    }
  }
  class kn extends nn {}
  class ms {
    constructor(t) {
      L(this, 'controlBorder')
      L(this, 'draw')
      L(this, 'range')
      L(this, 'listener')
      L(this, 'eventBus')
      L(this, 'controlSearch')
      L(this, 'options')
      L(this, 'controlOptions')
      L(this, 'activeControl')
      L(this, 'activeControlValue')
      L(this, 'preElement')
      ;(this.controlBorder = new fs(t)),
        (this.draw = t),
        (this.range = t.getRange()),
        (this.listener = t.getListener()),
        (this.eventBus = t.getEventBus()),
        (this.controlSearch = new Fs(this)),
        (this.options = t.getOptions()),
        (this.controlOptions = this.options.control),
        (this.activeControl = null),
        (this.activeControlValue = []),
        (this.preElement = null)
    }
    setHighlightList(t) {
      this.controlSearch.setHighlightList(t)
    }
    computeHighlightList() {
      this.controlSearch.getHighlightList().length &&
        this.controlSearch.computeHighlightList()
    }
    renderHighlightList(t, e) {
      this.controlSearch.getHighlightMatchResult().length &&
        this.controlSearch.renderHighlightList(t, e)
    }
    getDraw() {
      return this.draw
    }
    filterAssistElement(t) {
      return t.filter((e, n) => {
        var o, s, i
        if (e.type === a.ElementType.TABLE) {
          const r = e.trList
          for (let R = 0; R < r.length; R++) {
            const c = r[R]
            for (let d = 0; d < c.tdList.length; d++) {
              const h = c.tdList[d]
              h.value = this.filterAssistElement(h.value)
            }
          }
        }
        if (!e.controlId) return !0
        if ((o = e.control) == null ? void 0 : o.minWidth) {
          if (
            e.controlComponent === a.ControlComponent.PREFIX ||
            e.controlComponent === a.ControlComponent.POSTFIX
          )
            return (e.value = ''), !0
        } else {
          if (
            ((s = e.control) == null ? void 0 : s.preText) &&
            e.controlComponent === a.ControlComponent.PRE_TEXT
          ) {
            let r = !1,
              R = n + 1
            for (; R < t.length; ) {
              const c = t[R]
              if (e.controlId !== c.controlId) break
              if (c.controlComponent === a.ControlComponent.VALUE) {
                r = !0
                break
              }
              R++
            }
            return r
          }
          if (
            ((i = e.control) == null ? void 0 : i.postText) &&
            e.controlComponent === a.ControlComponent.POST_TEXT
          ) {
            let r = !1,
              R = n - 1
            for (; R < t.length; ) {
              const c = t[R]
              if (e.controlId !== c.controlId) break
              if (c.controlComponent === a.ControlComponent.VALUE) {
                r = !0
                break
              }
              R--
            }
            return r
          }
        }
        return (
          e.controlComponent !== a.ControlComponent.PREFIX &&
          e.controlComponent !== a.ControlComponent.POSTFIX &&
          e.controlComponent !== a.ControlComponent.PLACEHOLDER
        )
      })
    }
    getIsRangeCanCaptureEvent() {
      if (!this.activeControl) return !1
      const { startIndex: t, endIndex: e } = this.getRange()
      if (!~t && !~e) return !1
      const n = this.getElementList(),
        o = n[t]
      if (t === e && o.controlComponent === a.ControlComponent.POSTFIX)
        return !0
      const s = n[e]
      return !!(
        o.controlId &&
        o.controlId === s.controlId &&
        s.controlComponent !== a.ControlComponent.POSTFIX
      )
    }
    getIsRangeInPostfix() {
      if (!this.activeControl) return !1
      const { startIndex: t, endIndex: e } = this.getRange()
      return t !== e
        ? !1
        : this.getElementList()[t].controlComponent ===
            a.ControlComponent.POSTFIX
    }
    getIsRangeWithinControl() {
      const { startIndex: t, endIndex: e } = this.getRange()
      if (!~t && !~e) return !1
      const n = this.getElementList(),
        o = n[t],
        s = n[e]
      return !!(
        (o == null ? void 0 : o.controlId) &&
        o.controlId === s.controlId &&
        s.controlComponent !== a.ControlComponent.POSTFIX
      )
    }
    getIsElementListContainFullControl(t) {
      if (!t.some(o => o.controlId)) return !1
      let e = 0,
        n = 0
      for (let o = 0; o < t.length; o++) {
        const s = t[o]
        s.controlComponent === a.ControlComponent.PREFIX
          ? e++
          : s.controlComponent === a.ControlComponent.POSTFIX && n++
      }
      return !e || !n ? !1 : e === n
    }
    getIsDisabledControl(t = {}) {
      var o, s
      if (this.draw.isDesignMode() || !this.activeControl) return !1
      const { startIndex: e, endIndex: n } = t.range || this.range.getRange()
      return e === n &&
        ~e &&
        ~n &&
        (t.elementList || this.getElementList())[e].controlComponent ===
          a.ControlComponent.POSTFIX
        ? !1
        : !!((s =
            (o = this.activeControl.getElement()) == null
              ? void 0
              : o.control) == null
            ? void 0
            : s.disabled)
    }
    getIsDisabledPasteControl(t = {}) {
      var o, s
      if (this.draw.isDesignMode() || !this.activeControl) return !1
      const { startIndex: e, endIndex: n } = t.range || this.range.getRange()
      return e === n &&
        ~e &&
        ~n &&
        (t.elementList || this.getElementList())[e].controlComponent ===
          a.ControlComponent.POSTFIX
        ? !1
        : !!((s =
            (o = this.activeControl.getElement()) == null
              ? void 0
              : o.control) == null
            ? void 0
            : s.pasteDisabled)
    }
    getIsExistValueByElementListIndex(t, e) {
      var o, s, i
      const n = t[e]
      if (!n.controlId) return !1
      if (
        ((o = n.control) == null ? void 0 : o.type) ===
          a.ControlType.CHECKBOX ||
        ((s = n.control) == null ? void 0 : s.type) === a.ControlType.RADIO
      )
        return !!((i = n.control) == null ? void 0 : i.code)
      if (n.controlComponent === a.ControlComponent.VALUE) return !0
      if (n.controlComponent === a.ControlComponent.PLACEHOLDER) return !1
      if (
        n.controlComponent === a.ControlComponent.PREFIX ||
        n.controlComponent === a.ControlComponent.PRE_TEXT
      ) {
        let r = e + 1
        for (; r < t.length; ) {
          const R = t[r]
          if (R.controlId !== n.controlId) return !1
          if (R.controlComponent === a.ControlComponent.VALUE) return !0
          if (R.controlComponent === a.ControlComponent.PLACEHOLDER) return !1
          r++
        }
      }
      if (
        n.controlComponent === a.ControlComponent.POSTFIX ||
        n.controlComponent === a.ControlComponent.POST_TEXT
      ) {
        let r = e - 1
        for (; r >= 0; ) {
          const R = t[r]
          if (R.controlId !== n.controlId) return !1
          if (R.controlComponent === a.ControlComponent.VALUE) return !0
          if (R.controlComponent === a.ControlComponent.PLACEHOLDER) return !1
          r--
        }
      }
      return !1
    }
    getControlHighlight(t, e) {
      return this.controlSearch.getControlHighlight(t, e)
    }
    getContainer() {
      return this.draw.getContainer()
    }
    getElementList() {
      return this.draw.getElementList()
    }
    getPosition() {
      const t = this.draw.getPosition().getPositionList(),
        { endIndex: e } = this.range.getRange()
      return t[e] || null
    }
    getPreY() {
      var o, s
      const t = this.draw.getHeight(),
        e = this.draw.getPageGap()
      return (
        ((s = (o = this.getPosition()) == null ? void 0 : o.pageNo) != null
          ? s
          : this.draw.getPageNo()) *
        (t + e)
      )
    }
    getRange() {
      return this.range.getRange()
    }
    shrinkBoundary(t = {}) {
      this.range.shrinkBoundary(t)
    }
    getActiveControl() {
      return this.activeControl
    }
    getControlElementList(t = {}) {
      const e = t.elementList || this.getElementList(),
        { startIndex: n } = t.range || this.getRange(),
        o = e[n]
      if (!(o == null ? void 0 : o.controlId)) return []
      const s = []
      let i = n
      for (; i > 0; ) {
        const R = e[i]
        if (R.controlId !== o.controlId) break
        s.unshift(R), i--
      }
      let r = n + 1
      for (; r < e.length; ) {
        const R = e[r]
        if (R.controlId !== o.controlId) break
        s.push(R), r++
      }
      return s
    }
    updateActiveControlValue() {
      this.activeControl &&
        (this.activeControlValue = this.getControlElementList())
    }
    emitControlChange(t) {
      var r, R
      if (!this.activeControl) return
      const e = this.eventBus.isSubscribe('controlChange')
      if (!this.listener.controlChange && !e) return
      let n
      const o = this.activeControlValue,
        s = this.activeControl.getElement()
      ;(o == null ? void 0 : o.length)
        ? (n = z(o)[0].control)
        : ((n = ie(k(s)).control), (n.value = []))
      const i = { state: t, control: n, controlId: s.controlId }
      ;(R = (r = this.listener).controlChange) == null || R.call(r, i),
        e && this.eventBus.emit('controlChange', i)
    }
    initControl() {
      var i, r
      const t = this.getElementList(),
        e = this.getRange(),
        n = t[e.startIndex]
      if (this.activeControl) {
        ;(this.activeControl instanceof Te ||
          this.activeControl instanceof Pe) &&
          (n.controlComponent === a.ControlComponent.POSTFIX
            ? this.activeControl.destroy()
            : this.activeControl.awake()),
          ((i = this.preElement) == null ? void 0 : i.controlId) ===
            n.controlId &&
            (n.controlComponent === a.ControlComponent.POSTFIX
              ? this.emitControlChange(a.ControlState.INACTIVE)
              : ((r = this.preElement) == null
                  ? void 0
                  : r.controlComponent) === a.ControlComponent.POSTFIX &&
                this.emitControlChange(a.ControlState.ACTIVE))
        const R = this.activeControl.getElement()
        if (n.controlId === R.controlId) {
          this.updateActiveControlValue(), (this.preElement = n)
          return
        }
      }
      if ((this.destroyControl(), this.draw.isReadonly())) return
      const s = n.control
      if (s.type === a.ControlType.TEXT) this.activeControl = new nn(n, this)
      else if (s.type === a.ControlType.SELECT) {
        const R = new Te(n, this)
        ;(this.activeControl = R), R.awake()
      } else if (s.type === a.ControlType.CHECKBOX)
        this.activeControl = new Ve(n, this)
      else if (s.type === a.ControlType.RADIO)
        this.activeControl = new qe(n, this)
      else if (s.type === a.ControlType.DATE) {
        const R = new Pe(n, this)
        ;(this.activeControl = R), R.awake()
      } else
        s.type === a.ControlType.NUMBER &&
          (this.activeControl = new kn(n, this))
      this.updateActiveControlValue(),
        (this.preElement = n),
        n.controlComponent !== a.ControlComponent.POSTFIX &&
          this.emitControlChange(a.ControlState.ACTIVE)
    }
    destroyControl(t = {}) {
      var n
      if (!this.activeControl) return
      const { isEmitEvent: e = !0 } = t
      ;(this.activeControl instanceof Te || this.activeControl instanceof Pe) &&
        this.activeControl.destroy(),
        e &&
          ((n = this.preElement) == null ? void 0 : n.controlComponent) !==
            a.ControlComponent.POSTFIX &&
          this.emitControlChange(a.ControlState.INACTIVE),
        (this.preElement = null),
        (this.activeControl = null),
        (this.activeControlValue = [])
    }
    repaintControl(t = {}) {
      const {
        curIndex: e,
        isCompute: n = !0,
        isSubmitHistory: o = !0,
        isSetCursor: s = !0
      } = t
      e === void 0
        ? (this.range.clearRange(),
          this.draw.render({
            isCompute: n,
            isSubmitHistory: o,
            isSetCursor: !1
          }))
        : (this.range.setRange(e, e),
          this.draw.render({
            curIndex: e,
            isCompute: n,
            isSetCursor: s,
            isSubmitHistory: o
          }))
    }
    emitControlContentChange(t) {
      var c, d, h, u, g, T
      const e = this.eventBus.isSubscribe('controlContentChange')
      if (!e && !this.listener.controlContentChange) return
      const n =
        (t == null ? void 0 : t.controlElement) ||
        ((c = this.activeControl) == null ? void 0 : c.getElement())
      if (!n) return
      const o =
          ((d = t == null ? void 0 : t.context) == null
            ? void 0
            : d.elementList) || this.getElementList(),
        { startIndex: s } =
          ((h = t == null ? void 0 : t.context) == null ? void 0 : h.range) ||
          this.getRange()
      if (!((u = o[s]) == null ? void 0 : u.controlId)) return
      const i =
        (t == null ? void 0 : t.controlValue) ||
        this.getControlElementList(t == null ? void 0 : t.context)
      let r
      if (
        ((i == null ? void 0 : i.length)
          ? (r = z(i)[0].control)
          : ((r = n.control), (r.value = [])),
        !r)
      )
        return
      const R = { control: r, controlId: n.controlId }
      ;(T = (g = this.listener).controlContentChange) == null || T.call(g, R),
        e && this.eventBus.emit('controlContentChange', R)
    }
    reAwakeControl() {
      if (!this.activeControl) return
      const t = this.getElementList(),
        e = this.getRange(),
        n = t[e.startIndex]
      this.activeControl.setElement(n),
        (this.activeControl instanceof Pe ||
          this.activeControl instanceof Te) &&
          this.activeControl.getIsPopup() &&
          (this.activeControl.destroy(), this.activeControl.awake())
    }
    moveCursor(t) {
      var c, d
      const { index: e, trIndex: n, tdIndex: o, tdValueIndex: s } = t
      let i = this.draw.getOriginalElementList(),
        r
      const R = t.isTable ? s : e
      if (
        (t.isTable
          ? ((i = i[e].trList[n].tdList[o].value), (r = i[s]))
          : (r = i[e]),
        ((c = r.control) == null ? void 0 : c.hide) ||
          ((d = r.area) == null ? void 0 : d.hide))
      ) {
        const h = Le(i, R)
        return { newIndex: h, newElement: i[h] }
      }
      if (r.controlComponent === a.ControlComponent.VALUE)
        return { newIndex: R, newElement: r }
      if (r.controlComponent === a.ControlComponent.POSTFIX) {
        let h = R + 1
        for (; h < i.length; ) {
          if (i[h].controlId !== r.controlId)
            return { newIndex: h - 1, newElement: i[h - 1] }
          h++
        }
      } else if (
        r.controlComponent === a.ControlComponent.PREFIX ||
        r.controlComponent === a.ControlComponent.PRE_TEXT
      ) {
        let h = R + 1
        for (; h < i.length; ) {
          const u = i[h]
          if (
            u.controlId !== r.controlId ||
            (u.controlComponent !== a.ControlComponent.PREFIX &&
              u.controlComponent !== a.ControlComponent.PRE_TEXT)
          )
            return { newIndex: h - 1, newElement: i[h - 1] }
          h++
        }
      } else if (
        r.controlComponent === a.ControlComponent.PLACEHOLDER ||
        r.controlComponent === a.ControlComponent.POST_TEXT
      ) {
        let h = R - 1
        for (; h > 0; ) {
          const u = i[h]
          if (
            u.controlId !== r.controlId ||
            u.controlComponent === a.ControlComponent.VALUE ||
            u.controlComponent === a.ControlComponent.PREFIX ||
            u.controlComponent === a.ControlComponent.PRE_TEXT
          )
            return { newIndex: h, newElement: i[h] }
          h--
        }
      }
      return { newIndex: R, newElement: r }
    }
    removeControl(t, e = {}) {
      var c, d
      const n = e.elementList || this.getElementList(),
        o = n[t]
      if (
        !this.draw.isDesignMode() &&
        !((c = o == null ? void 0 : o.control) == null ? void 0 : c.hide) &&
        !((d = o == null ? void 0 : o.area) == null ? void 0 : d.hide)
      ) {
        const { deletable: h = !0 } = o.control
        if (!h) return null
        const u = this.draw.getMode()
        if (
          u === a.EditorMode.FORM &&
          this.options.modeRule[u].controlDeletableDisabled
        )
          return null
      }
      let s = -1,
        i = -1,
        r = t
      for (; r > 0; ) {
        if (n[r].controlId !== o.controlId) {
          s = r
          break
        }
        r--
      }
      let R = t + 1
      for (; R < n.length; ) {
        if (n[R].controlId !== o.controlId) {
          i = R - 1
          break
        }
        R++
      }
      return (
        R === n.length && (i = R - 1),
        !~s && !~i
          ? t
          : ((s = ~s ? s : 0), this.draw.spliceElementList(n, s + 1, i - s), s)
      )
    }
    removePlaceholder(t, e = {}) {
      const n = e.elementList || this.getElementList(),
        o = n[t],
        s = n[t + 1]
      if (
        o.controlComponent === a.ControlComponent.PLACEHOLDER ||
        s.controlComponent === a.ControlComponent.PLACEHOLDER
      ) {
        let i = !1,
          r = t
        for (; r < n.length; ) {
          const R = n[r]
          if (R.controlId !== o.controlId) break
          R.controlComponent === a.ControlComponent.PLACEHOLDER
            ? (i ||
                ((i = !0),
                this.draw.getHistoryManager().popUndo(),
                this.draw.submitHistory(t)),
              n.splice(r, 1))
            : r++
        }
      }
    }
    addPlaceholder(t, e = {}) {
      const n = e.elementList || this.getElementList(),
        o = n[t],
        s = o.control
      if (!s.placeholder) return
      const i = splitText(s.placeholder),
        r = Ut(o, xt)
      for (let R = 0; R < i.length; R++) {
        const c = i[R],
          d = v(C({}, r), {
            value:
              c ===
              `
`
                ? H
                : c,
            controlId: o.controlId,
            type: a.ElementType.CONTROL,
            control: o.control,
            controlComponent: a.ControlComponent.PLACEHOLDER,
            color: this.controlOptions.placeholderColor
          })
        Tt(n, [d], t, { editorOptions: this.options }),
          this.draw.spliceElementList(n, t + R + 1, 0, [d])
      }
    }
    setValue(t) {
      if (!this.activeControl) throw new Error('active control is null')
      return this.activeControl.setValue(t)
    }
    setControlProperties(t, e = {}) {
      const n = e.elementList || this.getElementList(),
        { startIndex: o } = e.range || this.getRange(),
        s = n[o]
      let i = o
      for (; i > 0; ) {
        const R = n[i]
        if (R.controlId !== s.controlId) break
        ;(R.control = C(C({}, R.control), t)), i--
      }
      let r = o + 1
      for (; r < n.length; ) {
        const R = n[r]
        if (R.controlId !== s.controlId) break
        ;(R.control = C(C({}, R.control), t)), r++
      }
    }
    keydown(t) {
      if (!this.activeControl) throw new Error('active control is null')
      return this.activeControl.keydown(t)
    }
    cut() {
      if (!this.activeControl) throw new Error('active control is null')
      return this.activeControl.cut()
    }
    getValueById(t) {
      const { id: e, conceptId: n, areaId: o } = t,
        s = []
      if (!e && !n) return s
      const i = (R, c) => {
          let d = 0
          for (; d < R.length; ) {
            const h = R[d]
            if ((d++, h.type === a.ElementType.TABLE)) {
              const S = h.trList
              for (let I = 0; I < S.length; I++) {
                const F = S[I]
                for (let N = 0; N < F.tdList.length; N++) {
                  const X = F.tdList[N]
                  i(X.value, c)
                }
              }
            }
            if (
              !h.control ||
              (e && h.controlId !== e) ||
              (n && h.control.conceptId !== n) ||
              (o && h.areaId !== o)
            )
              continue
            const { type: u, code: g, valueSets: T } = h.control
            let P = d,
              O = ''
            const M = []
            for (; P < R.length; ) {
              const S = R[P]
              if (S.controlId !== h.controlId) break
              ;(u === a.ControlType.TEXT ||
                u === a.ControlType.DATE ||
                u === a.ControlType.NUMBER) &&
                S.controlComponent === a.ControlComponent.VALUE &&
                ((O += S.value), M.push(bt(S, Ge))),
                P++
            }
            if (
              u === a.ControlType.TEXT ||
              u === a.ControlType.DATE ||
              u === a.ControlType.NUMBER
            )
              s.push(
                v(C({}, h.control), {
                  zone: c,
                  value: O || null,
                  innerText: O || null,
                  elementList: z(M)
                })
              )
            else if (
              u === a.ControlType.SELECT ||
              u === a.ControlType.CHECKBOX ||
              u === a.ControlType.RADIO
            ) {
              const S =
                g == null
                  ? void 0
                  : g
                      .split(',')
                      .map(I => {
                        var F
                        return (F =
                          T == null ? void 0 : T.find(N => N.code === I)) ==
                          null
                          ? void 0
                          : F.value
                      })
                      .filter(Boolean)
                      .join('')
              s.push(
                v(C({}, h.control), {
                  zone: c,
                  value: g || null,
                  innerText: S || null
                })
              )
            }
            d = P
          }
        },
        r = [
          {
            zone: a.EditorZone.HEADER,
            elementList: this.draw.getHeaderElementList()
          },
          {
            zone: a.EditorZone.MAIN,
            elementList: this.draw.getOriginalMainElementList()
          },
          {
            zone: a.EditorZone.FOOTER,
            elementList: this.draw.getFooterElementList()
          }
        ]
      for (const { zone: R, elementList: c } of r) i(c, R)
      return s
    }
    setValueListById(t) {
      if (!t.length) return
      let e = !1,
        n = !1
      const o = i => {
        let r = 0
        for (; r < i.length; ) {
          const R = i[r]
          if ((r++, R.type === a.ElementType.TABLE)) {
            const S = R.trList
            for (let I = 0; I < S.length; I++) {
              const F = S[I]
              for (let N = 0; N < F.tdList.length; N++) {
                const X = F.tdList[N]
                o(X.value)
              }
            }
          }
          if (!R.control) continue
          const c = t.find(
            S =>
              (S.id && R.controlId === S.id) ||
              (S.conceptId && R.control.conceptId === S.conceptId) ||
              (S.areaId && R.areaId === S.areaId)
          )
          if (!c) continue
          const { value: d, isSubmitHistory: h = !0 } = c
          ;(e = !0), h && (n = !0)
          const { type: u } = R.control
          let g = r
          for (; g < i.length && i[g].controlId === R.controlId; ) g++
          const P = {
              range: { startIndex: r - 1, endIndex: g - 2 },
              elementList: i
            },
            O = { isIgnoreDisabledRule: !0, isIgnoreDeletedRule: !0 }
          if (u === a.ControlType.TEXT) {
            const S = Array.isArray(d) ? d : d ? [{ value: d }] : []
            S.length &&
              St(S, { isHandleFirstElement: !1, editorOptions: this.options })
            const I = new nn(R, this)
            ;(this.activeControl = I),
              S.length ? I.setValue(S, P, O) : I.clearValue(P, O)
          } else if (u === a.ControlType.SELECT) {
            if (Array.isArray(d)) continue
            const S = new Te(R, this)
            ;(this.activeControl = S),
              d ? S.setSelect(d, P, O) : S.clearSelect(P, O)
          } else if (u === a.ControlType.CHECKBOX) {
            if (Array.isArray(d)) continue
            const S = new Ve(R, this)
            this.activeControl = S
            const I = d ? d.split(',') : []
            S.setSelect(I, P, O)
          } else if (u === a.ControlType.RADIO) {
            if (Array.isArray(d)) continue
            const S = new qe(R, this)
            this.activeControl = S
            const I = d ? [d] : []
            S.setSelect(I, P, O)
          } else if (u === a.ControlType.DATE) {
            const S = new Pe(R, this)
            ;(this.activeControl = S),
              be(d)
                ? (d.length &&
                    St(d, {
                      isHandleFirstElement: !1,
                      editorOptions: this.options
                    }),
                  S.setValue(d, P, O))
                : Fi(d)
                  ? S.setSelect(d, P, O)
                  : S.clearSelect(P, O)
          } else if (u === a.ControlType.NUMBER) {
            const S = Array.isArray(d) ? d : d ? [{ value: d }] : []
            S.length &&
              St(S, { isHandleFirstElement: !1, editorOptions: this.options })
            const I = new kn(R, this)
            ;(this.activeControl = I),
              S.length ? I.setValue(S, P, O) : I.clearValue(P, O)
          }
          this.emitControlContentChange({ context: P }),
            (this.activeControl = null)
          let M = r
          for (; M < i.length && i[M].controlId === R.controlId; ) M++
          r = M
        }
      }
      this.destroyControl({ isEmitEvent: !1 })
      const s = [
        this.draw.getHeaderElementList(),
        this.draw.getOriginalMainElementList(),
        this.draw.getFooterElementList()
      ]
      for (const i of s) o(i)
      e &&
        (n || this.draw.getHistoryManager().recovery(),
        this.draw.render({ isSubmitHistory: n, isSetCursor: !1 }))
    }
    setExtensionListById(t) {
      if (!t.length) return
      const e = o => {
          let s = 0
          for (; s < o.length; ) {
            const i = o[s]
            if ((s++, i.type === a.ElementType.TABLE)) {
              const d = i.trList
              for (let h = 0; h < d.length; h++) {
                const u = d[h]
                for (let g = 0; g < u.tdList.length; g++) {
                  const T = u.tdList[g]
                  e(T.value)
                }
              }
            }
            if (!i.control) continue
            const r = t.find(
              d =>
                (d.id && i.controlId === d.id) ||
                (d.conceptId && i.control.conceptId === d.conceptId) ||
                (d.areaId && i.areaId === d.areaId)
            )
            if (!r) continue
            const { extension: R } = r
            this.setControlProperties(
              { extension: R },
              { elementList: o, range: { startIndex: s, endIndex: s } }
            )
            let c = s
            for (; c < o.length && o[c].controlId === i.controlId; ) c++
            s = c
          }
        },
        n = [
          this.draw.getHeaderElementList(),
          this.draw.getOriginalMainElementList(),
          this.draw.getFooterElementList()
        ]
      for (const o of n) e(o)
    }
    setPropertiesListById(t) {
      if (!t.length) return
      let e = !1,
        n = !1
      const o = i => {
          let r = 0
          for (; r < i.length; ) {
            const R = i[r]
            if ((r++, R.type === a.ElementType.TABLE)) {
              const g = R.trList
              for (let T = 0; T < g.length; T++) {
                const P = g[T]
                for (let O = 0; O < P.tdList.length; O++) {
                  const M = P.tdList[O]
                  o(M.value)
                }
              }
            }
            if (!R.control) continue
            const c = t.find(
              g =>
                (g.id && R.controlId === g.id) ||
                (g.conceptId && R.control.conceptId === g.conceptId) ||
                (g.areaId && R.areaId === g.areaId)
            )
            if (!c) continue
            const { properties: d, isSubmitHistory: h = !0 } = c
            ;(e = !0),
              h && (n = !0),
              this.setControlProperties(
                v(C(C({}, R.control), d), { value: R.control.value }),
                { elementList: i, range: { startIndex: r, endIndex: r } }
              ),
              xt.forEach(g => {
                const T = d[g]
                T && Reflect.set(R, g, T)
              })
            let u = r
            for (; u < i.length && i[u].controlId === R.controlId; ) u++
            r = u
          }
        },
        s = {
          header: this.draw.getHeaderElementList(),
          main: this.draw.getOriginalMainElementList(),
          footer: this.draw.getFooterElementList()
        }
      for (const i in s) {
        const r = s[i]
        o(r)
      }
      if (!!e) {
        for (const i in s) {
          const r = i,
            R = z(s[r], { isClassifyArea: !0, extraPickAttrs: ['id'] })
          ;(s[r] = R),
            St(R, { editorOptions: this.options, isForceCompensation: !0 })
        }
        this.draw.setEditorData(s),
          n || this.draw.getHistoryManager().recovery(),
          this.draw.render({ isSubmitHistory: n, isSetCursor: !1 })
      }
    }
    getList() {
      const t = []
      function e(o) {
        for (let s = 0; s < o.length; s++) {
          const i = o[s]
          if (i.type === a.ElementType.TABLE) {
            const r = i.trList
            for (let R = 0; R < r.length; R++) {
              const c = r[R]
              for (let d = 0; d < c.tdList.length; d++) {
                const u = c.tdList[d].value
                e(u)
              }
            }
          }
          if (i.controlId) {
            const r = bt(i, [...He, ...Ie])
            t.push(r)
          }
        }
      }
      const n = [
        this.draw.getHeader().getElementList(),
        this.draw.getOriginalMainElementList(),
        this.draw.getFooter().getElementList()
      ]
      for (const o of n) e(o)
      return z(t, { extraPickAttrs: ['controlId'] })
    }
    recordBorderInfo(t, e, n, o) {
      this.controlBorder.recordBorderInfo(t, e, n, o)
    }
    drawBorder(t) {
      this.controlBorder.render(t)
    }
    getPreControlContext() {
      if (!this.activeControl) return null
      const e = this.draw.getPosition().getPositionContext()
      if (!e) return null
      const n = this.activeControl.getElement()
      function o(R, c) {
        for (let d = c; d > 0; d--) {
          const h = R[d]
          if (h.type === a.ElementType.TABLE) {
            const g = h.trList || []
            for (let T = g.length - 1; T >= 0; T--) {
              const P = g[T],
                O = P.tdList
              for (let M = O.length - 1; M >= 0; M--) {
                const S = O[M],
                  I = o(S.value, S.value.length - 1)
                if (I)
                  return {
                    positionContext: {
                      isTable: !0,
                      index: d,
                      trIndex: T,
                      tdIndex: M,
                      tdId: S.id,
                      trId: P.id,
                      tableId: h.id
                    },
                    nextIndex: I.nextIndex
                  }
              }
            }
          }
          if (!h.controlId || h.controlId === n.controlId) continue
          let u = d
          for (; u > 0; ) {
            const g = R[u]
            if (
              g.controlComponent === a.ControlComponent.VALUE ||
              g.controlComponent === a.ControlComponent.PREFIX ||
              g.controlComponent === a.ControlComponent.PRE_TEXT
            )
              break
            u--
          }
          return { positionContext: { isTable: !1 }, nextIndex: u }
        }
        return null
      }
      const { startIndex: s } = this.range.getRange(),
        i = this.getElementList(),
        r = o(i, s)
      if (r)
        return {
          positionContext: e.isTable ? e : r.positionContext,
          nextIndex: r.nextIndex
        }
      if (n.tableId) {
        const R = this.draw.getOriginalElementList(),
          { index: c, trIndex: d, tdIndex: h } = e,
          u = R[c].trList
        for (let T = d; T >= 0; T--) {
          const P = u[T],
            O = P.tdList
          for (let M = O.length - 1; M >= 0; M--) {
            if (d === T && M >= h) continue
            const S = O[M],
              I = o(S.value, S.value.length - 1)
            if (I)
              return {
                positionContext: {
                  isTable: !0,
                  index: e.index,
                  trIndex: T,
                  tdIndex: M,
                  tdId: S.id,
                  trId: P.id,
                  tableId: n.tableId
                },
                nextIndex: I.nextIndex
              }
          }
        }
        const g = o(R, c - 1)
        if (g)
          return { positionContext: { isTable: !1 }, nextIndex: g.nextIndex }
      }
      return null
    }
    getNextControlContext() {
      if (!this.activeControl) return null
      const e = this.draw.getPosition().getPositionContext()
      if (!e) return null
      const n = this.activeControl.getElement()
      function o(R, c) {
        var d, h
        for (let u = c; u < R.length; u++) {
          const g = R[u]
          if (g.type === a.ElementType.TABLE) {
            const T = g.trList || []
            for (let P = 0; P < T.length; P++) {
              const O = T[P],
                M = O.tdList
              for (let S = 0; S < M.length; S++) {
                const I = M[S],
                  F = o(I.value, 0)
                if (F)
                  return {
                    positionContext: {
                      isTable: !0,
                      index: u,
                      trIndex: P,
                      tdIndex: S,
                      tdId: I.id,
                      trId: O.id,
                      tableId: g.id
                    },
                    nextIndex: F.nextIndex
                  }
              }
            }
          }
          if (
            !(
              !g.controlId ||
              g.controlId === n.controlId ||
              ((d = R[u + 1]) == null ? void 0 : d.controlComponent) ===
                a.ControlComponent.PREFIX ||
              ((h = R[u + 1]) == null ? void 0 : h.controlComponent) ===
                a.ControlComponent.PRE_TEXT
            )
          )
            return { positionContext: { isTable: !1 }, nextIndex: u }
        }
        return null
      }
      const { endIndex: s } = this.range.getRange(),
        i = this.getElementList(),
        r = o(i, s)
      if (r)
        return {
          positionContext: e.isTable ? e : r.positionContext,
          nextIndex: r.nextIndex
        }
      if (n.tableId) {
        const R = this.draw.getOriginalElementList(),
          { index: c, trIndex: d, tdIndex: h } = e,
          u = R[c].trList
        for (let T = d; T < u.length; T++) {
          const P = u[T],
            O = P.tdList
          for (let M = 0; M < O.length; M++) {
            if (d === T && M <= h) continue
            const S = O[M],
              I = o(S.value, 0)
            if (I)
              return {
                positionContext: {
                  isTable: !0,
                  index: e.index,
                  trIndex: T,
                  tdIndex: M,
                  tdId: S.id,
                  trId: P.id,
                  tableId: n.tableId
                },
                nextIndex: I.nextIndex
              }
          }
        }
        const g = o(R, c + 1)
        if (g)
          return { positionContext: { isTable: !1 }, nextIndex: g.nextIndex }
      }
      return null
    }
    initNextControl(t = {}) {
      const { direction: e = ht.DOWN } = t
      let n = null
      if (
        (e === ht.UP
          ? (n = this.getPreControlContext())
          : (n = this.getNextControlContext()),
        !n)
      )
        return
      const { nextIndex: o, positionContext: s } = n,
        i = this.draw.getPosition()
      i.setPositionContext(s),
        this.draw.getRange().replaceRange({ startIndex: o, endIndex: o }),
        this.draw.render({
          curIndex: o,
          isCompute: !1,
          isSetCursor: !0,
          isSubmitHistory: !1
        })
      const r = i.getPositionList()
      this.draw
        .getCursor()
        .moveCursorToVisible({ cursorPosition: r[o], direction: e })
    }
    setMinWidthControlInfo(t) {
      var d, h, u, g, T
      const {
        row: e,
        rowElement: n,
        controlRealWidth: o,
        availableWidth: s
      } = t
      if (!((d = n.control) == null ? void 0 : d.minWidth)) return
      const { scale: i } = this.options,
        r = n.control.minWidth * i
      let R = null
      if (
        ((h = n.control) == null ? void 0 : h.minWidth) &&
        (((u = n.control) == null ? void 0 : u.rowFlex) === a.RowFlex.CENTER ||
          ((g = n.control) == null ? void 0 : g.rowFlex) === a.RowFlex.RIGHT)
      ) {
        let P = n.metrics.width,
          O = e.elementList.length - 1
        for (; O >= 0; ) {
          const M = e.elementList[O]
          if (
            ((P += M.metrics.width),
            ((T = e.elementList[O - 1]) == null
              ? void 0
              : T.controlComponent) === a.ControlComponent.PREFIX)
          ) {
            R = M
            break
          }
          O--
        }
        R &&
          P < r &&
          (n.control.rowFlex === a.RowFlex.CENTER
            ? (R.left = (r - P) / 2)
            : n.control.rowFlex === a.RowFlex.RIGHT &&
              (R.left = r - P - n.metrics.width))
      }
      const c = r - o
      if (c > 0) {
        const P = (R == null ? void 0 : R.left) || 0,
          O = s - e.width - n.metrics.width,
          M = Math.min(O, c)
        ;(n.left = M - P), (e.width += M - P)
      }
    }
  }
  class Ws {
    constructor(t) {
      L(this, 'draw')
      L(this, 'options')
      ;(this.draw = t), (this.options = t.getOptions())
    }
    setSelect(t) {
      const { checkbox: e } = t
      e ? (e.value = !e.value) : (t.checkbox = { value: !0 }),
        this.draw.render({ isCompute: !1, isSetCursor: !1 })
    }
    render(t) {
      const { ctx: e, x: n, index: o, row: s } = t
      let { y: i } = t
      const {
          checkbox: {
            gap: r,
            lineWidth: R,
            fillStyle: c,
            strokeStyle: d,
            verticalAlign: h
          },
          scale: u
        } = this.options,
        { metrics: g, checkbox: T } = s.elementList[o]
      if (h === a.VerticalAlign.TOP || h === a.VerticalAlign.MIDDLE) {
        let I = o + 1,
          F = null
        for (
          ;
          I < s.elementList.length &&
          ((F = s.elementList[I]), !(F.value !== H && F.value !== Qe));

        )
          I++
        if (F) {
          const {
              metrics: { boundingBoxAscent: N, boundingBoxDescent: X }
            } = F,
            f = N + X
          f > g.height &&
            (h === a.VerticalAlign.TOP
              ? (i -= N - g.height)
              : h === a.VerticalAlign.MIDDLE && (i -= (f - g.height) / 2))
        }
      }
      const P = Math.round(n + r * u),
        O = Math.round(i - g.height + R),
        M = g.width - r * 2 * u,
        S = g.height
      e.save(),
        e.beginPath(),
        e.translate(0.5, 0.5),
        (T == null ? void 0 : T.value)
          ? ((e.lineWidth = R),
            (e.strokeStyle = c),
            e.rect(P, O, M, S),
            e.stroke(),
            e.beginPath(),
            (e.fillStyle = c),
            e.fillRect(P, O, M, S),
            e.beginPath(),
            (e.strokeStyle = d),
            (e.lineWidth = R * 2 * u),
            e.moveTo(P + 2 * u, O + S / 2),
            e.lineTo(P + M / 2, O + S - 3 * u),
            e.lineTo(P + M - 2 * u, O + 3 * u),
            e.stroke())
          : ((e.lineWidth = R), e.rect(P, O, M, S), e.stroke()),
        e.closePath(),
        e.restore()
    }
  }
  class Vs {
    constructor(t) {
      L(this, 'draw')
      L(this, 'options')
      ;(this.draw = t), (this.options = t.getOptions())
    }
    setSelect(t) {
      const { radio: e } = t
      e ? (e.value = !e.value) : (t.radio = { value: !0 }),
        this.draw.render({ isCompute: !1, isSetCursor: !1 })
    }
    render(t) {
      const { ctx: e, x: n, index: o, row: s } = t
      let { y: i } = t
      const {
          radio: {
            gap: r,
            lineWidth: R,
            fillStyle: c,
            strokeStyle: d,
            verticalAlign: h
          },
          scale: u
        } = this.options,
        { metrics: g, radio: T } = s.elementList[o]
      if (h === a.VerticalAlign.TOP || h === a.VerticalAlign.MIDDLE) {
        let I = o + 1,
          F = null
        for (
          ;
          I < s.elementList.length &&
          ((F = s.elementList[I]), !(F.value !== H && F.value !== Qe));

        )
          I++
        if (F) {
          const {
              metrics: { boundingBoxAscent: N, boundingBoxDescent: X }
            } = F,
            f = N + X
          f > g.height &&
            (h === a.VerticalAlign.TOP
              ? (i -= N - g.height)
              : h === a.VerticalAlign.MIDDLE && (i -= (f - g.height) / 2))
        }
      }
      const P = Math.round(n + r * u),
        O = Math.round(i - g.height + R),
        M = g.width - r * 2 * u,
        S = g.height
      e.save(),
        e.beginPath(),
        e.translate(0.5, 0.5),
        (e.strokeStyle = (T == null ? void 0 : T.value) ? c : d),
        (e.lineWidth = R),
        e.arc(P + M / 2, O + S / 2, M / 2, 0, Math.PI * 2),
        e.stroke(),
        (T == null ? void 0 : T.value) &&
          (e.beginPath(),
          (e.fillStyle = c),
          e.arc(P + M / 2, O + S / 2, M / 3, 0, Math.PI * 2),
          e.fill()),
        e.closePath(),
        e.restore()
    }
  }
  const _n =
      'KCgpPT57KGZ1bmN0aW9uKCl7InVzZSBzdHJpY3QiO3ZhciBhOyhmdW5jdGlvbihlKXtlLlRFWFQ9InRleHQiLGUuVEFCTEU9InRhYmxlIixlLkhZUEVSTElOSz0iaHlwZXJsaW5rIixlLkNPTlRST0w9ImNvbnRyb2wifSkoYXx8KGE9e30pKTt2YXIgcDsoZnVuY3Rpb24oZSl7ZS5WQUxVRT0idmFsdWUifSkocHx8KHA9e30pKTtjb25zdCBoPSJcdTIwMEIiLGQ9YApgO2Z1bmN0aW9uIHUoZSl7dmFyIGMsZjtsZXQgcj0iIixuPTA7Zm9yKDtuPGUubGVuZ3RoOyl7Y29uc3QgdD1lW25dO2lmKHQudHlwZT09PWEuVEFCTEUpe2lmKHQudHJMaXN0KWZvcihsZXQgbD0wO2w8dC50ckxpc3QubGVuZ3RoO2wrKyl7Y29uc3Qgcz10LnRyTGlzdFtsXTtmb3IobGV0IG89MDtvPHMudGRMaXN0Lmxlbmd0aDtvKyspe2NvbnN0IGk9cy50ZExpc3Rbb107cis9dShpLnZhbHVlKX19fWVsc2UgaWYodC50eXBlPT09YS5IWVBFUkxJTkspe2NvbnN0IGw9dC5oeXBlcmxpbmtJZCxzPVtdO2Zvcig7bjxlLmxlbmd0aDspe2NvbnN0IG89ZVtuXTtpZihsIT09by5oeXBlcmxpbmtJZCl7bi0tO2JyZWFrfWRlbGV0ZSBvLnR5cGUscy5wdXNoKG8pLG4rK31yKz11KHMpfWVsc2UgaWYodC5jb250cm9sSWQpe2lmKCEoKGM9dC5jb250cm9sKT09bnVsbD92b2lkIDA6Yy5oaWRlKSl7Y29uc3QgbD10LmNvbnRyb2xJZCxzPVtdO2Zvcig7bjxlLmxlbmd0aDspe2NvbnN0IG89ZVtuXTtpZihsIT09by5jb250cm9sSWQpe24tLTticmVha31vLmNvbnRyb2xDb21wb25lbnQ9PT1wLlZBTFVFJiYoZGVsZXRlIG8uY29udHJvbElkLHMucHVzaChvKSksbisrfXIrPXUocyl9fWVsc2UoIXQudHlwZXx8dC50eXBlPT09YS5URVhUKSYmISgoZj10LmFyZWEpPT1udWxsP3ZvaWQgMDpmLmhpZGUpJiYocis9dC52YWx1ZSk7bisrfXJldHVybiByfWZ1bmN0aW9uIGcoZSl7Y29uc3Qgcj1bXSxuPS9bMC05XS8sYz0vW0EtWmEtel0vLGY9L1xzLztsZXQgdD0hMSxsPSExLHM9IiI7ZnVuY3Rpb24gbygpe3MmJihyLnB1c2gocykscz0iIil9Zm9yKGNvbnN0IGkgb2YgZSljLnRlc3QoaSk/KHR8fG8oKSxzKz1pLHQ9ITAsbD0hMSk6bi50ZXN0KGkpPyhsfHxvKCkscys9aSx0PSExLGw9ITApOihvKCksdD0hMSxsPSExLGYudGVzdChpKXx8ci5wdXNoKGkpKTtyZXR1cm4gbygpLHJ9b25tZXNzYWdlPWU9Pntjb25zdCByPWUuZGF0YSxjPXUocikucmVwbGFjZShuZXcgUmVnRXhwKGBeJHtofWApLCIiKS5yZXBsYWNlKG5ldyBSZWdFeHAoaCwiZyIpLGQpLGY9ZyhjKTtwb3N0TWVzc2FnZShmLmxlbmd0aCl9fSkoKTt9KSgpOwo=',
    zn =
      typeof window != 'undefined' &&
      window.Blob &&
      new Blob([atob(_n)], { type: 'text/javascript;charset=utf-8' })
  function Zs() {
    const l = zn && (window.URL || window.webkitURL).createObjectURL(zn)
    try {
      return l
        ? new Worker(l)
        : new Worker('data:application/javascript;base64,' + _n, {
            type: 'module'
          })
    } finally {
      l && (window.URL || window.webkitURL).revokeObjectURL(l)
    }
  }
  const $n =
      'KCgpPT57KGZ1bmN0aW9uKCl7InVzZSBzdHJpY3QiO3ZhciBhOyhmdW5jdGlvbih0KXt0LlRFWFQ9InRleHQiLHQuSU1BR0U9ImltYWdlIix0LlRBQkxFPSJ0YWJsZSIsdC5IWVBFUkxJTks9Imh5cGVybGluayIsdC5TVVBFUlNDUklQVD0ic3VwZXJzY3JpcHQiLHQuU1VCU0NSSVBUPSJzdWJzY3JpcHQiLHQuU0VQQVJBVE9SPSJzZXBhcmF0b3IiLHQuUEFHRV9CUkVBSz0icGFnZUJyZWFrIix0LkNPTlRST0w9ImNvbnRyb2wiLHQuQ0hFQ0tCT1g9ImNoZWNrYm94Iix0LlJBRElPPSJyYWRpbyIsdC5MQVRFWD0ibGF0ZXgiLHQuVEFCPSJ0YWIiLHQuREFURT0iZGF0ZSIsdC5CTE9DSz0iYmxvY2siLHQuVElUTEU9InRpdGxlIix0LkFSRUE9ImFyZWEiLHQuTElTVD0ibGlzdCJ9KShhfHwoYT17fSkpO3ZhciBsOyhmdW5jdGlvbih0KXt0LkZJUlNUPSJmaXJzdCIsdC5TRUNPTkQ9InNlY29uZCIsdC5USElSRD0idGhpcmQiLHQuRk9VUlRIPSJmb3VydGgiLHQuRklGVEg9ImZpZnRoIix0LlNJWFRIPSJzaXh0aCJ9KShsfHwobD17fSkpO2NvbnN0IGc9e1tsLkZJUlNUXToxLFtsLlNFQ09ORF06MixbbC5USElSRF06MyxbbC5GT1VSVEhdOjQsW2wuRklGVEhdOjUsW2wuU0lYVEhdOjZ9LEw9W2EuVEVYVCxhLkhZUEVSTElOSyxhLlNVQlNDUklQVCxhLlNVUEVSU0NSSVBULGEuQ09OVFJPTCxhLkRBVEVdLGQ9Ilx1MjAwQiI7ZnVuY3Rpb24gZih0KXtyZXR1cm4hdC50eXBlfHxMLmluY2x1ZGVzKHQudHlwZSl9ZnVuY3Rpb24gQyh0KXtjb25zdHtlbGVtZW50TGlzdDpuLHBvc2l0aW9uTGlzdDp2fT10LEk9W107bGV0IGk9MDtmb3IoO2k8bi5sZW5ndGg7KXtjb25zdCBzPW5baV07aWYocy50aXRsZUlkKXtjb25zdCBvPXMudGl0bGVJZCxlPXMubGV2ZWwsYz17dHlwZTphLlRJVExFLHZhbHVlOiIiLGxldmVsOmUsdGl0bGVJZDpvLHBhZ2VObzp2W2ldLnBhZ2VOb30scj1bXTtmb3IoO2k8bi5sZW5ndGg7KXtjb25zdCB1PW5baV07aWYobyE9PXUudGl0bGVJZCl7aS0tO2JyZWFrfXIucHVzaCh1KSxpKyt9Yy52YWx1ZT1yLmZpbHRlcih1PT5mKHUpKS5tYXAodT0+dS52YWx1ZSkuam9pbigiIikucmVwbGFjZShuZXcgUmVnRXhwKGQsImciKSwiIiksSS5wdXNoKGMpfWkrK31pZighSS5sZW5ndGgpcmV0dXJuIG51bGw7Y29uc3QgaD0ocyxvKT0+e2NvbnN0IGU9by5zdWJDYXRhbG9nW28uc3ViQ2F0YWxvZy5sZW5ndGgtMV0sYz1nW2U9PW51bGw/dm9pZCAwOmUubGV2ZWxdLHI9Z1tzLmxldmVsXTtlJiZyPmM/aChzLGUpOm8uc3ViQ2F0YWxvZy5wdXNoKHtpZDpzLnRpdGxlSWQsbmFtZTpzLnZhbHVlLGxldmVsOnMubGV2ZWwscGFnZU5vOnMucGFnZU5vLHN1YkNhdGFsb2c6W119KX0sUj1bXTtmb3IobGV0IHM9MDtzPEkubGVuZ3RoO3MrKyl7Y29uc3Qgbz1JW3NdLGU9UltSLmxlbmd0aC0xXSxjPWdbZT09bnVsbD92b2lkIDA6ZS5sZXZlbF0scj1nW28ubGV2ZWxdO2UmJnI+Yz9oKG8sZSk6Ui5wdXNoKHtpZDpvLnRpdGxlSWQsbmFtZTpvLnZhbHVlLGxldmVsOm8ubGV2ZWwscGFnZU5vOm8ucGFnZU5vLHN1YkNhdGFsb2c6W119KX1yZXR1cm4gUn1vbm1lc3NhZ2U9dD0+e2NvbnN0IG49dC5kYXRhLHY9QyhuKTtwb3N0TWVzc2FnZSh2KX19KSgpO30pKCk7Cg==',
    jn =
      typeof window != 'undefined' &&
      window.Blob &&
      new Blob([atob($n)], { type: 'text/javascript;charset=utf-8' })
  function Us() {
    const l = jn && (window.URL || window.webkitURL).createObjectURL(jn)
    try {
      return l
        ? new Worker(l)
        : new Worker('data:application/javascript;base64,' + $n, {
            type: 'module'
          })
    } finally {
      l && (window.URL || window.webkitURL).revokeObjectURL(l)
    }
  }
  const qn =
      'KCgpPT57KGZ1bmN0aW9uKCl7InVzZSBzdHJpY3QiO3ZhciBuOyhmdW5jdGlvbihvKXtvLlRBQkxFPSJ0YWJsZSJ9KShufHwobj17fSkpO2Z1bmN0aW9uIGMobyl7Y29uc3QgdD1bXTtmb3IoY29uc3QgcyBvZiBvKXtpZihzLnR5cGU9PT1uLlRBQkxFKXtjb25zdCBlPXMudHJMaXN0O2ZvcihsZXQgcj0wO3I8ZS5sZW5ndGg7cisrKXtjb25zdCBpPWVbcl07Zm9yKGxldCB1PTA7dTxpLnRkTGlzdC5sZW5ndGg7dSsrKXtjb25zdCBkPWkudGRMaXN0W3VdO3QucHVzaCguLi5jKGQudmFsdWUpKX19fWlmKCEhcy5ncm91cElkcylmb3IoY29uc3QgZSBvZiBzLmdyb3VwSWRzKXQuaW5jbHVkZXMoZSl8fHQucHVzaChlKX1yZXR1cm4gdH1vbm1lc3NhZ2U9bz0+e2NvbnN0IHQ9by5kYXRhLHM9Yyh0KTtwb3N0TWVzc2FnZShzKX19KSgpO30pKCk7Cg==',
    ti =
      typeof window != 'undefined' &&
      window.Blob &&
      new Blob([atob(qn)], { type: 'text/javascript;charset=utf-8' })
  function Ys() {
    const l = ti && (window.URL || window.webkitURL).createObjectURL(ti)
    try {
      return l
        ? new Worker(l)
        : new Worker('data:application/javascript;base64,' + qn, {
            type: 'module'
          })
    } finally {
      l && (window.URL || window.webkitURL).revokeObjectURL(l)
    }
  }
  const ei =
      'KCgpPT57dmFyIGZlPU9iamVjdC5kZWZpbmVQcm9wZXJ0eSxUZT1PYmplY3QuZGVmaW5lUHJvcGVydGllczt2YXIgSWU9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnM7dmFyIG5lPU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7dmFyIEFlPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHksZGU9T2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTt2YXIgYWU9KFQsSSxkKT0+SSBpbiBUP2ZlKFQsSSx7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6ZH0pOlRbSV09ZCxnPShULEkpPT57Zm9yKHZhciBkIGluIEl8fChJPXt9KSlBZS5jYWxsKEksZCkmJmFlKFQsZCxJW2RdKTtpZihuZSlmb3IodmFyIGQgb2YgbmUoSSkpZGUuY2FsbChJLGQpJiZhZShULGQsSVtkXSk7cmV0dXJuIFR9LF89KFQsSSk9PlRlKFQsSWUoSSkpOyhmdW5jdGlvbigpeyJ1c2Ugc3RyaWN0Ijt2YXIgVDsoZnVuY3Rpb24oZSl7ZS5IQUxGPSJoYWxmIixlLk9ORV9USElSRD0ib25lLXRoaXJkIixlLlFVQVJURVI9InF1YXJ0ZXIifSkoVHx8KFQ9e30pKTt2YXIgSTsoZnVuY3Rpb24oZSl7ZS5BUkFCSUM9ImFyYWJpYyIsZS5DSElORVNFPSJjaGluZXNlIn0pKEl8fChJPXt9KSk7dmFyIGQ7KGZ1bmN0aW9uKGUpe2UuSU5MSU5FPSJpbmxpbmUiLGUuQkxPQ0s9ImJsb2NrIixlLlNVUlJPVU5EPSJzdXJyb3VuZCIsZS5GTE9BVF9UT1A9ImZsb2F0LXRvcCIsZS5GTE9BVF9CT1RUT009ImZsb2F0LWJvdHRvbSJ9KShkfHwoZD17fSkpO3ZhciBYOyhmdW5jdGlvbihlKXtlLkJFRk9SRT0iYmVmb3JlIixlLkFGVEVSPSJhZnRlciIsZS5PVVRFUl9CRUZPUkU9Im91dGVyLWJlZm9yZSIsZS5PVVRFUl9BRlRFUj0ib3V0ZXItYWZ0ZXIifSkoWHx8KFg9e30pKTt2YXIgTTsoZnVuY3Rpb24oZSl7ZS5ST1c9InJvdyIsZS5DT0xVTU49ImNvbHVtbiJ9KShNfHwoTT17fSkpO2NvbnN0IFA9Ilx1MjAwQiI7VC5IQUxGKyIiLDEvMixULk9ORV9USElSRCsiIiwxLzMsVC5RVUFSVEVSKyIiLDEvNDtmdW5jdGlvbiBIKGUpe2lmKHR5cGVvZiBzdHJ1Y3R1cmVkQ2xvbmU9PSJmdW5jdGlvbiIpcmV0dXJuIHN0cnVjdHVyZWRDbG9uZShlKTtpZighZXx8dHlwZW9mIGUhPSJvYmplY3QiKXJldHVybiBlO2xldCBzPXt9O3JldHVybiBBcnJheS5pc0FycmF5KGUpP3M9ZS5tYXAoRT0+SChFKSk6T2JqZWN0LmtleXMoZSkuZm9yRWFjaChFPT5zW0VdPUgoZVtFXSkpLHN9ZnVuY3Rpb24gdyhlLHMpe2NvbnN0IEU9e307Zm9yKGNvbnN0IEEgaW4gZSlzLmluY2x1ZGVzKEEpJiYoRVtBXT1lW0FdKTtyZXR1cm4gRX1mdW5jdGlvbiBsZShlLHMpe3JldHVybiBlLmxlbmd0aCE9PXMubGVuZ3RoPyExOiFlLnNvbWUoRT0+IXMuaW5jbHVkZXMoRSkpfXZhciBsOyhmdW5jdGlvbihlKXtlLlRFWFQ9InRleHQiLGUuSU1BR0U9ImltYWdlIixlLlRBQkxFPSJ0YWJsZSIsZS5IWVBFUkxJTks9Imh5cGVybGluayIsZS5TVVBFUlNDUklQVD0ic3VwZXJzY3JpcHQiLGUuU1VCU0NSSVBUPSJzdWJzY3JpcHQiLGUuU0VQQVJBVE9SPSJzZXBhcmF0b3IiLGUuUEFHRV9CUkVBSz0icGFnZUJyZWFrIixlLkNPTlRST0w9ImNvbnRyb2wiLGUuQVJFQT0iYXJlYSIsZS5DSEVDS0JPWD0iY2hlY2tib3giLGUuUkFESU89InJhZGlvIixlLkxBVEVYPSJsYXRleCIsZS5UQUI9InRhYiIsZS5EQVRFPSJkYXRlIixlLkJMT0NLPSJibG9jayIsZS5USVRMRT0idGl0bGUiLGUuTElTVD0ibGlzdCJ9KShsfHwobD17fSkpO2NvbnN0IHJlPVsicm93RmxleCIsInJvd01hcmdpbiJdLG9lPVsidHlwZSIsImZvbnQiLCJzaXplIiwiYm9sZCIsImNvbG9yIiwiaXRhbGljIiwiaGlnaGxpZ2h0IiwidW5kZXJsaW5lIiwic3RyaWtlb3V0Iiwicm93RmxleCIsInJvd01hcmdpbiIsImRhc2hBcnJheSIsInRyTGlzdCIsInRhYmxlVG9vbERpc2FibGVkIiwiYm9yZGVyVHlwZSIsImJvcmRlckNvbG9yIiwid2lkdGgiLCJoZWlnaHQiLCJ1cmwiLCJjb2xncm91cCIsInZhbHVlTGlzdCIsImNvbnRyb2wiLCJjaGVja2JveCIsInJhZGlvIiwiZGF0ZUZvcm1hdCIsImJsb2NrIiwibGV2ZWwiLCJ0aXRsZSIsImxpc3RUeXBlIiwibGlzdFN0eWxlIiwibGlzdFdyYXAiLCJncm91cElkcyIsImNvbmNlcHRJZCIsImltZ0Rpc3BsYXkiLCJpbWdGbG9hdFBvc2l0aW9uIiwiaW1nVG9vbERpc2FibGVkIiwidGV4dERlY29yYXRpb24iLCJleHRlbnNpb24iLCJleHRlcm5hbElkIiwiYXJlYUlkIiwiYXJlYSJdLHNlPVsiY29uY2VwdElkIiwiZXh0ZW5zaW9uIiwiZXh0ZXJuYWxJZCIsInZlcnRpY2FsQWxpZ24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJUeXBlcyIsInNsYXNoVHlwZXMiLCJkaXNhYmxlZCIsImRlbGV0YWJsZSJdLGNlPVsiZm9udCIsInNpemUiLCJib2xkIiwiaGlnaGxpZ2h0IiwiaXRhbGljIiwic3RyaWtlb3V0Il07bC5URVhULGwuSFlQRVJMSU5LLGwuU1VCU0NSSVBULGwuU1VQRVJTQ1JJUFQsbC5DT05UUk9MLGwuREFURSxsLklNQUdFLGwuTEFURVgsbC5CTE9DSyxsLlBBR0VfQlJFQUssbC5TRVBBUkFUT1IsbC5UQUJMRSxsLlRJVExFLGwuTElTVDt2YXIgTjsoZnVuY3Rpb24oZSl7ZS5VTD0idWwiLGUuT0w9Im9sIn0pKE58fChOPXt9KSk7dmFyIE87KGZ1bmN0aW9uKGUpe2UuRElTQz0iZGlzYyIsZS5DSVJDTEU9ImNpcmNsZSIsZS5TUVVBUkU9InNxdWFyZSIsZS5DSEVDS0JPWD0iY2hlY2tib3gifSkoT3x8KE89e30pKTt2YXIgYjsoZnVuY3Rpb24oZSl7ZS5ERUNJTUFMPSJkZWNpbWFsIn0pKGJ8fChiPXt9KSk7dmFyIHY7KGZ1bmN0aW9uKGUpe2VbZS5ESVNDPU8uRElTQ109IkRJU0MiLGVbZS5DSVJDTEU9Ty5DSVJDTEVdPSJDSVJDTEUiLGVbZS5TUVVBUkU9Ty5TUVVBUkVdPSJTUVVBUkUiLGVbZS5ERUNJTUFMPWIuREVDSU1BTF09IkRFQ0lNQUwiLGVbZS5DSEVDS0JPWD1PLkNIRUNLQk9YXT0iQ0hFQ0tCT1gifSkodnx8KHY9e30pKSxPLkRJU0MrIiIsTy5DSVJDTEUrIiIsTy5TUVVBUkUrIiIsTy5DSEVDS0JPWCsiIixOLk9MKyIiLE4uVUwrIiIsdi5ESVNDKyIiLHYuQ0lSQ0xFKyIiLHYuU1FVQVJFKyIiLHYuREVDSU1BTCsiIix2LkNIRUNLQk9YKyIiO3ZhciBmOyhmdW5jdGlvbihlKXtlLkZJUlNUPSJmaXJzdCIsZS5TRUNPTkQ9InNlY29uZCIsZS5USElSRD0idGhpcmQiLGUuRk9VUlRIPSJmb3VydGgiLGUuRklGVEg9ImZpZnRoIixlLlNJWFRIPSJzaXh0aCJ9KShmfHwoZj17fSkpLGYuRklSU1QrIiIsZi5TRUNPTkQrIiIsZi5USElSRCsiIixmLkZPVVJUSCsiIixmLkZJRlRIKyIiLGYuU0lYVEgrIiIsZi5GSVJTVCsiIixmLlNFQ09ORCsiIixmLlRISVJEKyIiLGYuRk9VUlRIKyIiLGYuRklGVEgrIiIsZi5TSVhUSCsiIixmLkZJUlNULGYuU0VDT05ELGYuVEhJUkQsZi5GT1VSVEgsZi5GSUZUSCxmLlNJWFRIO3ZhciBLOyhmdW5jdGlvbihlKXtlLklGUkFNRT0iaWZyYW1lIixlLlZJREVPPSJ2aWRlbyJ9KShLfHwoSz17fSkpO3ZhciB6OyhmdW5jdGlvbihlKXtlLlRFWFQ9InRleHQiLGUuU0VMRUNUPSJzZWxlY3QiLGUuQ0hFQ0tCT1g9ImNoZWNrYm94IixlLlJBRElPPSJyYWRpbyIsZS5EQVRFPSJkYXRlIixlLk5VTUJFUj0ibnVtYmVyIn0pKHp8fCh6PXt9KSk7dmFyIEw7KGZ1bmN0aW9uKGUpe2UuUFJFRklYPSJwcmVmaXgiLGUuUE9TVEZJWD0icG9zdGZpeCIsZS5QUkVfVEVYVD0icHJlVGV4dCIsZS5QT1NUX1RFWFQ9InBvc3RUZXh0IixlLlBMQUNFSE9MREVSPSJwbGFjZWhvbGRlciIsZS5WQUxVRT0idmFsdWUiLGUuQ0hFQ0tCT1g9ImNoZWNrYm94IixlLlJBRElPPSJyYWRpbyJ9KShMfHwoTD17fSkpO3ZhciBHOyhmdW5jdGlvbihlKXtlLlJPV19TVEFSVD0icm93U3RhcnQiLGUuVkFMVUVfU1RBUlQ9InZhbHVlU3RhcnQifSkoR3x8KEc9e30pKTt2YXIgWTsoZnVuY3Rpb24oZSl7ZS5BQ1RJVkU9ImFjdGl2ZSIsZS5JTkFDVElWRT0iaW5hY3RpdmUifSkoWXx8KFk9e30pKTt2YXIgVjsoZnVuY3Rpb24oZSl7ZS5DT01QT05FTlQ9ImNvbXBvbmVudCIsZS5NRU5VPSJtZW51IixlLk1BSU49Im1haW4iLGUuRk9PVEVSPSJmb290ZXIiLGUuQ09OVEVYVE1FTlU9ImNvbnRleHRtZW51IixlLlBPUFVQPSJwb3B1cCIsZS5DQVRBTE9HPSJjYXRhbG9nIixlLkNPTU1FTlQ9ImNvbW1lbnQifSkoVnx8KFY9e30pKTt2YXIgUTsoZnVuY3Rpb24oZSl7ZS5QQUdFPSJwYWdlIixlLlRBQkxFPSJ0YWJsZSJ9KShRfHwoUT17fSkpO3ZhciBXOyhmdW5jdGlvbihlKXtlLkVESVQ9ImVkaXQiLGUuQ0xFQU49ImNsZWFuIixlLlJFQURPTkxZPSJyZWFkb25seSIsZS5GT1JNPSJmb3JtIixlLlBSSU5UPSJwcmludCIsZS5ERVNJR049ImRlc2lnbiJ9KShXfHwoVz17fSkpO3ZhciBxOyhmdW5jdGlvbihlKXtlLkhFQURFUj0iaGVhZGVyIixlLk1BSU49Im1haW4iLGUuRk9PVEVSPSJmb290ZXIifSkocXx8KHE9e30pKTt2YXIgWjsoZnVuY3Rpb24oZSl7ZS5QQUdJTkc9InBhZ2luZyIsZS5DT05USU5VSVRZPSJjb250aW51aXR5In0pKFp8fChaPXt9KSk7dmFyIEo7KGZ1bmN0aW9uKGUpe2UuVkVSVElDQUw9InZlcnRpY2FsIixlLkhPUklaT05UQUw9Imhvcml6b250YWwifSkoSnx8KEo9e30pKTt2YXIgajsoZnVuY3Rpb24oZSl7ZS5CUkVBS19BTEw9ImJyZWFrLWFsbCIsZS5CUkVBS19XT1JEPSJicmVhay13b3JkIn0pKGp8fChqPXt9KSk7dmFyICQ7KGZ1bmN0aW9uKGUpe2UuU1BFRUQ9InNwZWVkIixlLkNPTVBBVElCSUxJVFk9ImNvbXBhdGliaWxpdHkifSkoJHx8KCQ9e30pKTt2YXIgRDsoZnVuY3Rpb24oZSl7ZS5MRUZUPSJsZWZ0IixlLkNFTlRFUj0iY2VudGVyIixlLlJJR0hUPSJyaWdodCIsZS5BTElHTk1FTlQ9ImFsaWdubWVudCIsZS5KVVNUSUZZPSJqdXN0aWZ5In0pKER8fChEPXt9KSk7dmFyIGVlOyhmdW5jdGlvbihlKXtlLkFMTD0iYWxsIixlLkVNUFRZPSJlbXB0eSIsZS5FWFRFUk5BTD0iZXh0ZXJuYWwiLGUuSU5URVJOQUw9ImludGVybmFsIixlLkRBU0g9ImRhc2gifSkoZWV8fChlZT17fSkpO3ZhciB0ZTsoZnVuY3Rpb24oZSl7ZS5UT1A9InRvcCIsZS5SSUdIVD0icmlnaHQiLGUuQk9UVE9NPSJib3R0b20iLGUuTEVGVD0ibGVmdCJ9KSh0ZXx8KHRlPXt9KSk7dmFyIGllOyhmdW5jdGlvbihlKXtlLkZPUldBUkQ9ImZvcndhcmQiLGUuQkFDSz0iYmFjayJ9KShpZXx8KGllPXt9KSk7dmFyIGs7KGZ1bmN0aW9uKGUpe2UuQ09OVEFJTj0iY29udGFpbiIsZS5DT1ZFUj0iY292ZXIifSkoa3x8KGs9e30pKTt2YXIgbTsoZnVuY3Rpb24oZSl7ZS5SRVBFQVQ9InJlcGVhdCIsZS5OT19SRVBFQVQ9Im5vLXJlcGVhdCIsZS5SRVBFQVRfWD0icmVwZWF0LXgiLGUuUkVQRUFUX1k9InJlcGVhdC15In0pKG18fChtPXt9KSksay5DT1ZFUixtLk5PX1JFUEVBVDt2YXIgRjsoZnVuY3Rpb24oZSl7ZS5UT1A9InRvcCIsZS5NSURETEU9Im1pZGRsZSIsZS5CT1RUT009ImJvdHRvbSJ9KShGfHwoRj17fSkpLEYuQk9UVE9NLFQuSEFMRixULkhBTEY7Y29uc3QgdWU9e1BBR0VfTk86IntwYWdlTm99IixQQUdFX0NPVU5UOiJ7cGFnZUNvdW50fSJ9O0QuQ0VOVEVSLHVlLlBBR0VfTk8sSS5BUkFCSUMsRi5CT1RUT007dmFyIHk7KGZ1bmN0aW9uKGUpe2UuVEVYVD0idGV4dCIsZS5JTUFHRT0iaW1hZ2UifSkoeXx8KHk9e30pKSx5LlRFWFQsSS5BUkFCSUM7dmFyIFU7KGZ1bmN0aW9uKGUpe2UuUEFHRT0icGFnZSIsZS5DT05USU5VSVRZPSJjb250aW51aXR5In0pKFV8fChVPXt9KSksVS5DT05USU5VSVRZO2Z1bmN0aW9uIEVlKGUscyl7Y29uc3QgRT1PYmplY3Qua2V5cyhlKSxBPU9iamVjdC5rZXlzKHMpO2lmKEUubGVuZ3RoIT09QS5sZW5ndGgpcmV0dXJuITE7Zm9yKGxldCBSPTA7UjxFLmxlbmd0aDtSKyspe2NvbnN0IG49RVtSXTtpZihuIT09InZhbHVlIiYmIShuPT09Imdyb3VwSWRzIiYmQXJyYXkuaXNBcnJheShlW25dKSYmQXJyYXkuaXNBcnJheShzW25dKSYmbGUoZVtuXSxzW25dKSkmJmVbbl0hPT1zW25dKXJldHVybiExfXJldHVybiEwfWZ1bmN0aW9uIEIoZSxzPXt9KXtjb25zdHtleHRyYVBpY2tBdHRyczpFfT1zLEE9Wy4uLm9lXTtFJiZBLnB1c2goLi4uRSk7Y29uc3QgUj17dmFsdWU6ZS52YWx1ZT09PVA/YApgOmUudmFsdWV9O3JldHVybiBBLmZvckVhY2gobj0+e2NvbnN0IHA9ZVtuXTtwIT09dm9pZCAwJiYoUltuXT1wKX0pLFJ9ZnVuY3Rpb24gaChlLHM9e30pe2NvbnN0e2V4dHJhUGlja0F0dHJzOkUsaXNDbGFzc2lmeUFyZWE6QT0hMSxpc0Nsb25lOlI9ITB9PXMsbj1SP0goZSk6ZSxwPVtdO2xldCBpPTA7Zm9yKDtpPG4ubGVuZ3RoOyl7bGV0IHQ9bltpXTtpZihpPT09MCYmdC52YWx1ZT09PVAmJiF0Lmxpc3RJZCYmKCF0LnR5cGV8fHQudHlwZT09PWwuVEVYVCkpe2krKztjb250aW51ZX1pZih0LmFyZWFJZCl7Y29uc3QgYT10LmFyZWFJZCx1PXQuYXJlYSxjPVtdO2Zvcig7aTxuLmxlbmd0aDspe2NvbnN0IG89bltpXTtpZihhIT09by5hcmVhSWQpe2ktLTticmVha31kZWxldGUgby5hcmVhLGRlbGV0ZSBvLmFyZWFJZCxjLnB1c2gobyksaSsrfWNvbnN0IHI9aChjLHMpO2lmKEEpe2NvbnN0IG89e3R5cGU6bC5BUkVBLHZhbHVlOiIiLGFyZWFJZDphLGFyZWE6dX07by52YWx1ZUxpc3Q9cix0PW99ZWxzZXtwLnNwbGljZShpLDAsLi4ucik7Y29udGludWV9fWVsc2UgaWYodC50aXRsZUlkJiZ0LmxldmVsKXtjb25zdCBhPXQudGl0bGVJZDtpZihhKXtjb25zdCB1PXQubGV2ZWwsYz17dHlwZTpsLlRJVExFLHRpdGxlOnQudGl0bGUsdGl0bGVJZDphLHZhbHVlOiIiLGxldmVsOnV9LHI9W107Zm9yKDtpPG4ubGVuZ3RoOyl7Y29uc3Qgbz1uW2ldO2lmKGEhPT1vLnRpdGxlSWQpe2ktLTticmVha31kZWxldGUgby5sZXZlbCxkZWxldGUgby50aXRsZSxyLnB1c2gobyksaSsrfWMudmFsdWVMaXN0PWgocixzKSx0PWN9fWVsc2UgaWYodC5saXN0SWQmJnQubGlzdFR5cGUpe2NvbnN0IGE9dC5saXN0SWQ7aWYoYSl7Y29uc3QgdT10Lmxpc3RUeXBlLGM9dC5saXN0U3R5bGUscj17dHlwZTpsLkxJU1QsdmFsdWU6IiIsbGlzdElkOmEsbGlzdFR5cGU6dSxsaXN0U3R5bGU6Y30sbz1bXTtmb3IoO2k8bi5sZW5ndGg7KXtjb25zdCBDPW5baV07aWYoYSE9PUMubGlzdElkKXtpLS07YnJlYWt9ZGVsZXRlIEMubGlzdFR5cGUsZGVsZXRlIEMubGlzdFN0eWxlLG8ucHVzaChDKSxpKyt9ci52YWx1ZUxpc3Q9aChvLHMpLHQ9cn19ZWxzZSBpZih0LnR5cGU9PT1sLlRBQkxFKXtpZih0LnBhZ2luZ0lkKXtsZXQgYT1pKzEsdT0wO2Zvcig7YTxuLmxlbmd0aDspe2NvbnN0IGM9blthXTtpZihjLnBhZ2luZ0lkPT09dC5wYWdpbmdJZCl0LmhlaWdodCs9Yy5oZWlnaHQsdC50ckxpc3QucHVzaCguLi5jLnRyTGlzdCksYSsrLHUrKztlbHNlIGJyZWFrfWkrPXV9aWYodC50ckxpc3QpZm9yKGxldCBhPTA7YTx0LnRyTGlzdC5sZW5ndGg7YSsrKXtjb25zdCB1PXQudHJMaXN0W2FdO2RlbGV0ZSB1LmlkO2ZvcihsZXQgYz0wO2M8dS50ZExpc3QubGVuZ3RoO2MrKyl7Y29uc3Qgcj11LnRkTGlzdFtjXSxvPXtjb2xzcGFuOnIuY29sc3Bhbixyb3dzcGFuOnIucm93c3Bhbix2YWx1ZTpoKHIudmFsdWUsXyhnKHt9LHMpLHtpc0NsYXNzaWZ5QXJlYTohMX0pKX07c2UuZm9yRWFjaChDPT57Y29uc3QgUz1yW0NdO1MhPT12b2lkIDAmJihvW0NdPVMpfSksdS50ZExpc3RbY109b319fWVsc2UgaWYodC50eXBlPT09bC5IWVBFUkxJTkspe2NvbnN0IGE9dC5oeXBlcmxpbmtJZDtpZihhKXtjb25zdCB1PXt0eXBlOmwuSFlQRVJMSU5LLHZhbHVlOiIiLHVybDp0LnVybH0sYz1bXTtmb3IoO2k8bi5sZW5ndGg7KXtjb25zdCByPW5baV07aWYoYSE9PXIuaHlwZXJsaW5rSWQpe2ktLTticmVha31kZWxldGUgci50eXBlLGRlbGV0ZSByLnVybCxjLnB1c2gociksaSsrfXUudmFsdWVMaXN0PWgoYyxzKSx0PXV9fWVsc2UgaWYodC50eXBlPT09bC5EQVRFKXtjb25zdCBhPXQuZGF0ZUlkO2lmKGEpe2NvbnN0IHU9e3R5cGU6bC5EQVRFLHZhbHVlOiIiLGRhdGVGb3JtYXQ6dC5kYXRlRm9ybWF0fSxjPVtdO2Zvcig7aTxuLmxlbmd0aDspe2NvbnN0IHI9bltpXTtpZihhIT09ci5kYXRlSWQpe2ktLTticmVha31kZWxldGUgci50eXBlLGRlbGV0ZSByLmRhdGVGb3JtYXQsYy5wdXNoKHIpLGkrK311LnZhbHVlTGlzdD1oKGMscyksdD11fX1lbHNlIGlmKHQuY29udHJvbElkKXtjb25zdCBhPXQuY29udHJvbElkO2lmKHQuY29udHJvbENvbXBvbmVudD09PUwuUFJFRklYKXtjb25zdCB1PVtdO2xldCBjPSExLHI9aTtmb3IoO3I8bi5sZW5ndGg7KXtjb25zdCBvPW5bcl07aWYoYSE9PW8uY29udHJvbElkKWJyZWFrO28uY29udHJvbENvbXBvbmVudD09PUwuVkFMVUUmJihkZWxldGUgby5jb250cm9sLGRlbGV0ZSBvLmNvbnRyb2xJZCx1LnB1c2gobykpLG8uY29udHJvbENvbXBvbmVudD09PUwuUE9TVEZJWCYmKGM9ITApLHIrK31pZihjKXtjb25zdCBvPXcodCxjZSksQz1nKGcoe30sdC5jb250cm9sKSxvKSxTPV8oZyh7fSx3KHQscmUpKSx7dHlwZTpsLkNPTlRST0wsdmFsdWU6IiIsY29udHJvbDpDLGNvbnRyb2xJZDphfSk7Uy5jb250cm9sLnZhbHVlPWgodSxzKSx0PUIoUyx7ZXh0cmFQaWNrQXR0cnM6RX0pLGkrPXItaS0xfX1pZih0LmNvbnRyb2xDb21wb25lbnQmJihkZWxldGUgdC5jb250cm9sLGRlbGV0ZSB0LmNvbnRyb2xJZCx0LmNvbnRyb2xDb21wb25lbnQhPT1MLlZBTFVFJiZ0LmNvbnRyb2xDb21wb25lbnQhPT1MLlBSRV9URVhUJiZ0LmNvbnRyb2xDb21wb25lbnQhPT1MLlBPU1RfVEVYVCkpe2krKztjb250aW51ZX19Y29uc3QgeD1CKHQse2V4dHJhUGlja0F0dHJzOkV9KTtpZighdC50eXBlfHx0LnR5cGU9PT1sLlRFWFR8fHQudHlwZT09PWwuU1VCU0NSSVBUfHx0LnR5cGU9PT1sLlNVUEVSU0NSSVBUKWZvcig7aTxuLmxlbmd0aDspe2NvbnN0IGE9bltpKzFdO2lmKGkrKyxhJiZFZSh4LEIoYSx7ZXh0cmFQaWNrQXR0cnM6RX0pKSl7Y29uc3QgdT1hLnZhbHVlPT09UD9gCmA6YS52YWx1ZTt4LnZhbHVlKz11fWVsc2UgYnJlYWt9ZWxzZSBpKys7cC5wdXNoKHgpfXJldHVybiBwfW9ubWVzc2FnZT1lPT57Y29uc3Qgcz1lLmRhdGEse29wdGlvbnM6RSxkYXRhOkF9PXMse2V4dHJhUGlja0F0dHJzOlI9W119PUV8fHt9LG49e2hlYWRlcjpoKEEuaGVhZGVyLHtleHRyYVBpY2tBdHRyczpSLGlzQ2xvbmU6ITF9KSxtYWluOmgoQS5tYWluLHtleHRyYVBpY2tBdHRyczpSLGlzQ2xhc3NpZnlBcmVhOiEwLGlzQ2xvbmU6ITF9KSxmb290ZXI6aChBLmZvb3Rlcix7ZXh0cmFQaWNrQXR0cnM6Uixpc0Nsb25lOiExfSl9O3Bvc3RNZXNzYWdlKG4pfX0pKCk7fSkoKTsK',
    ni =
      typeof window != 'undefined' &&
      window.Blob &&
      new Blob([atob(ei)], { type: 'text/javascript;charset=utf-8' })
  function ps() {
    const l = ni && (window.URL || window.webkitURL).createObjectURL(ni)
    try {
      return l
        ? new Worker(l)
        : new Worker('data:application/javascript;base64,' + ei, {
            type: 'module'
          })
    } finally {
      l && (window.URL || window.webkitURL).revokeObjectURL(l)
    }
  }
  class Qs {
    constructor(t) {
      L(this, 'draw')
      L(this, 'wordCountWorker')
      L(this, 'catalogWorker')
      L(this, 'groupWorker')
      L(this, 'valueWorker')
      ;(this.draw = t),
        (this.wordCountWorker = new Zs()),
        (this.catalogWorker = new Us()),
        (this.groupWorker = new Ys()),
        (this.valueWorker = new ps())
    }
    getWordCount() {
      return new Promise((t, e) => {
        ;(this.wordCountWorker.onmessage = o => {
          t(o.data)
        }),
          (this.wordCountWorker.onerror = o => {
            e(o)
          })
        const n = this.draw.getOriginalMainElementList()
        this.wordCountWorker.postMessage(n)
      })
    }
    getCatalog() {
      return new Promise((t, e) => {
        ;(this.catalogWorker.onmessage = s => {
          t(s.data)
        }),
          (this.catalogWorker.onerror = s => {
            e(s)
          })
        const n = this.draw.getOriginalMainElementList(),
          o = this.draw.getPosition().getOriginalMainPositionList()
        this.catalogWorker.postMessage({ elementList: n, positionList: o })
      })
    }
    getGroupIds() {
      return new Promise((t, e) => {
        ;(this.groupWorker.onmessage = o => {
          t(o.data)
        }),
          (this.groupWorker.onerror = o => {
            e(o)
          })
        const n = this.draw.getOriginalMainElementList()
        this.groupWorker.postMessage(n)
      })
    }
    getValue(t) {
      return new Promise((e, n) => {
        ;(this.valueWorker.onmessage = o => {
          e({ version: Ft, data: o.data, options: k(this.draw.getOptions()) })
        }),
          (this.valueWorker.onerror = o => {
            n(o)
          }),
          this.valueWorker.postMessage({
            data: this.draw.getOriginValue(t),
            options: t
          })
      })
    }
  }
  class Ds {
    constructor(t) {
      L(this, 'container')
      L(this, 'canvas')
      L(this, 'draw')
      L(this, 'options')
      L(this, 'curElement')
      L(this, 'curElementSrc')
      L(this, 'previewerDrawOption')
      L(this, 'curPosition')
      L(this, 'eventBus')
      L(this, 'resizerSelection')
      L(this, 'resizerHandleList')
      L(this, 'resizerImageContainer')
      L(this, 'resizerImage')
      L(this, 'resizerSize')
      L(this, 'width')
      L(this, 'height')
      L(this, 'mousedownX')
      L(this, 'mousedownY')
      L(this, 'curHandleIndex')
      L(this, 'previewerContainer')
      L(this, 'previewerImage')
      L(this, '_keydown', () => {
        this.resizerSelection.style.display === 'block' &&
          (this.clearResizer(),
          document.removeEventListener('keydown', this._keydown))
      })
      ;(this.container = t.getContainer()),
        (this.canvas = t.getPage()),
        (this.draw = t),
        (this.options = t.getOptions()),
        (this.curElement = null),
        (this.curElementSrc = ''),
        (this.previewerDrawOption = {}),
        (this.curPosition = null),
        (this.eventBus = t.getEventBus())
      const {
        resizerSelection: e,
        resizerHandleList: n,
        resizerImageContainer: o,
        resizerImage: s,
        resizerSize: i
      } = this._createResizerDom()
      ;(this.resizerSelection = e),
        (this.resizerHandleList = n),
        (this.resizerImageContainer = o),
        (this.resizerImage = s),
        (this.resizerSize = i),
        (this.width = 0),
        (this.height = 0),
        (this.mousedownX = 0),
        (this.mousedownY = 0),
        (this.curHandleIndex = 0),
        (this.previewerContainer = null),
        (this.previewerImage = null)
    }
    _getElementPosition(t, e = null) {
      var d
      const { scale: n } = this.options
      let o = 0,
        s = 0
      const i = this.draw.getHeight(),
        r = this.draw.getPageGap(),
        c =
          ((d = e == null ? void 0 : e.pageNo) != null
            ? d
            : this.draw.getPageNo()) *
          (i + r)
      if (t.imgFloatPosition)
        (o = t.imgFloatPosition.x * n), (s = t.imgFloatPosition.y * n + c)
      else if (e) {
        const {
          coordinate: {
            leftTop: [h, u]
          },
          ascent: g
        } = e
        ;(o = h), (s = u + c + g)
      }
      return { x: o, y: s }
    }
    _createResizerDom() {
      const { scale: t } = this.options,
        e = document.createElement('div')
      e.classList.add(`${x}-resizer-selection`),
        (e.style.display = 'none'),
        (e.style.borderColor = this.options.resizerColor),
        (e.style.borderWidth = `${t}px`)
      const n = []
      for (let R = 0; R < 8; R++) {
        const c = document.createElement('div')
        ;(c.style.background = this.options.resizerColor),
          c.classList.add('resizer-handle'),
          c.classList.add(`handle-${R}`),
          c.setAttribute('data-index', String(R)),
          (c.onmousedown = this._mousedown.bind(this)),
          e.append(c),
          n.push(c)
      }
      this.container.append(e)
      const o = document.createElement('div')
      o.classList.add(`${x}-resizer-size-view`)
      const s = document.createElement('span')
      o.append(s), e.append(o)
      const i = document.createElement('div')
      i.classList.add(`${x}-resizer-image`), (i.style.display = 'none')
      const r = document.createElement('img')
      return (
        i.append(r),
        this.container.append(i),
        {
          resizerSelection: e,
          resizerHandleList: n,
          resizerImageContainer: i,
          resizerImage: r,
          resizerSize: s
        }
      )
    }
    _mousedown(t) {
      if (((this.canvas = this.draw.getPage()), !this.curElement)) return
      const { scale: e } = this.options
      ;(this.mousedownX = t.x), (this.mousedownY = t.y)
      const n = t.target
      this.curHandleIndex = Number(n.dataset.index)
      const o = window.getComputedStyle(n).cursor
      ;(document.body.style.cursor = o),
        (this.canvas.style.cursor = o),
        (this.resizerImage.src = this.curElementSrc),
        (this.resizerImageContainer.style.display = 'block')
      const { x: s, y: i } = this._getElementPosition(
        this.curElement,
        this.curPosition
      )
      ;(this.resizerImageContainer.style.left = `${s}px`),
        (this.resizerImageContainer.style.top = `${i}px`),
        (this.resizerImage.style.width = `${this.curElement.width * e}px`),
        (this.resizerImage.style.height = `${this.curElement.height * e}px`)
      const r = this._mousemove.bind(this)
      document.addEventListener('mousemove', r),
        document.addEventListener(
          'mouseup',
          () => {
            var R
            this.curElement &&
              !this.previewerDrawOption.dragDisable &&
              ((this.curElement.width = this.width),
              (this.curElement.height = this.height),
              this.draw.render({
                isSetCursor: !0,
                curIndex: (R = this.curPosition) == null ? void 0 : R.index
              })),
              (this.resizerImageContainer.style.display = 'none'),
              document.removeEventListener('mousemove', r),
              (document.body.style.cursor = ''),
              (this.canvas.style.cursor = 'text')
          },
          { once: !0 }
        ),
        t.preventDefault()
    }
    _mousemove(t) {
      if (!this.curElement || this.previewerDrawOption.dragDisable) return
      const { scale: e } = this.options
      let n = 0,
        o = 0
      switch (this.curHandleIndex) {
        case 0:
          {
            const c = this.mousedownX - t.x,
              d = this.mousedownY - t.y
            ;(n = Math.cbrt(c ** 3 + d ** 3)),
              (o = (this.curElement.height * n) / this.curElement.width)
          }
          break
        case 1:
          o = this.mousedownY - t.y
          break
        case 2:
          {
            const c = t.x - this.mousedownX,
              d = this.mousedownY - t.y
            ;(n = Math.cbrt(c ** 3 + d ** 3)),
              (o = (this.curElement.height * n) / this.curElement.width)
          }
          break
        case 4:
          {
            const c = t.x - this.mousedownX,
              d = t.y - this.mousedownY
            ;(n = Math.cbrt(c ** 3 + d ** 3)),
              (o = (this.curElement.height * n) / this.curElement.width)
          }
          break
        case 3:
          n = t.x - this.mousedownX
          break
        case 5:
          o = t.y - this.mousedownY
          break
        case 6:
          {
            const c = this.mousedownX - t.x,
              d = t.y - this.mousedownY
            ;(n = Math.cbrt(c ** 3 + d ** 3)),
              (o = (this.curElement.height * n) / this.curElement.width)
          }
          break
        case 7:
          n = this.mousedownX - t.x
          break
      }
      const s = this.curElement.width + n / e,
        i = this.curElement.height + o / e
      if (s <= 0 || i <= 0) return
      ;(this.width = s), (this.height = i)
      const r = s * e,
        R = i * e
      ;(this.resizerImage.style.width = `${r}px`),
        (this.resizerImage.style.height = `${R}px`),
        this._updateResizerRect(r, R),
        this._updateResizerSizeView(r, R),
        t.preventDefault(),
        this.eventBus.isSubscribe('imageSizeChange') &&
          this.eventBus.emit('imageSizeChange', { element: this.curElement })
    }
    _drawPreviewer() {
      const t = document.createElement('div')
      t.classList.add(`${x}-image-previewer`)
      const e = document.createElement('i')
      e.classList.add('image-close'),
        (e.onclick = () => {
          this._clearPreviewer()
        }),
        t.append(e)
      const n = document.createElement('div')
      n.classList.add(`${x}-image-container`)
      const o = document.createElement('img')
      ;(o.src = this.curElementSrc),
        (o.draggable = !1),
        n.append(o),
        (this.previewerImage = o),
        t.append(n)
      let s = 0,
        i = 0,
        r = 1,
        R = 0
      const c = document.createElement('div')
      c.classList.add(`${x}-image-menu`)
      const d = document.createElement('i')
      d.classList.add('zoom-in'),
        (d.onclick = () => {
          ;(r += 0.1), this._setPreviewerTransform(r, R, s, i)
        }),
        c.append(d)
      const h = document.createElement('i')
      ;(h.onclick = () => {
        r - 0.1 <= 0.1 || ((r -= 0.1), this._setPreviewerTransform(r, R, s, i))
      }),
        h.classList.add('zoom-out'),
        c.append(h)
      const u = document.createElement('i')
      u.classList.add('rotate'),
        (u.onclick = () => {
          ;(R += 1), this._setPreviewerTransform(r, R, s, i)
        }),
        c.append(u)
      const g = document.createElement('i')
      g.classList.add('original-size'),
        (g.onclick = () => {
          ;(s = 0),
            (i = 0),
            (r = 1),
            (R = 0),
            this._setPreviewerTransform(r, R, s, i)
        }),
        c.append(g)
      const T = document.createElement('i')
      T.classList.add('image-download'),
        (T.onclick = () => {
          var I
          const { mime: S } = this.previewerDrawOption
          Tn(
            o.src,
            `${(I = this.curElement) == null ? void 0 : I.id}.${S || 'png'}`
          )
        }),
        c.append(T),
        t.append(c),
        (this.previewerContainer = t),
        document.body.append(t)
      let P = 0,
        O = 0,
        M = !1
      ;(o.onmousedown = S => {
        ;(M = !0), (P = S.x), (O = S.y), (t.style.cursor = 'move')
      }),
        (t.onmousemove = S => {
          !M ||
            ((s += S.x - P),
            (i += S.y - O),
            (P = S.x),
            (O = S.y),
            this._setPreviewerTransform(r, R, s, i))
        }),
        (t.onmouseup = () => {
          ;(M = !1), (t.style.cursor = 'auto')
        }),
        (t.onwheel = S => {
          if ((S.preventDefault(), S.stopPropagation(), S.deltaY < 0)) r += 0.1
          else {
            if (r - 0.1 <= 0.1) return
            r -= 0.1
          }
          this._setPreviewerTransform(r, R, s, i)
        })
    }
    _setPreviewerTransform(t, e, n, o) {
      !this.previewerImage ||
        ((this.previewerImage.style.left = `${n}px`),
        (this.previewerImage.style.top = `${o}px`),
        (this.previewerImage.style.transform = `scale(${t}) rotate(${e * 90}deg)`))
    }
    _clearPreviewer() {
      var t
      ;(t = this.previewerContainer) == null || t.remove(),
        (this.previewerContainer = null),
        (document.body.style.overflow = 'auto')
    }
    _updateResizerRect(t, e) {
      const { resizerSize: n, scale: o } = this.options,
        s = this.draw.isReadonly()
      ;(this.resizerSelection.style.width = `${t}px`),
        (this.resizerSelection.style.height = `${e}px`)
      for (let i = 0; i < 8; i++) {
        const r =
            i === 0 || i === 6 || i === 7
              ? -n
              : i === 1 || i === 5
                ? t / 2
                : t - n,
          R =
            i === 0 || i === 1 || i === 2
              ? -n
              : i === 3 || i === 7
                ? e / 2 - n
                : e - n
        ;(this.resizerHandleList[i].style.transform = `scale(${o})`),
          (this.resizerHandleList[i].style.left = `${r}px`),
          (this.resizerHandleList[i].style.top = `${R}px`),
          (this.resizerHandleList[i].style.display = s ? 'none' : 'block')
      }
    }
    _updateResizerSizeView(t, e) {
      this.resizerSize.innerText = `${Math.round(t)} \xD7 ${Math.round(e)}`
    }
    render() {
      var e, n
      const t = this.draw.getMode()
      !this.curElement ||
        (this.curElement.imgToolDisabled && !this.draw.isDesignMode()) ||
        (t === a.EditorMode.PRINT &&
          ((e = this.options.modeRule[a.EditorMode.PRINT]) == null
            ? void 0
            : e.imagePreviewerDisabled)) ||
        (t === a.EditorMode.READONLY &&
          ((n = this.options.modeRule[a.EditorMode.READONLY]) == null
            ? void 0
            : n.imagePreviewerDisabled)) ||
        (this._drawPreviewer(), (document.body.style.overflow = 'hidden'))
    }
    drawResizer(t, e = null, n = {}) {
      var s, i
      const o = this.draw.getMode()
      ;(t.imgToolDisabled && !this.draw.isDesignMode()) ||
        (o === a.EditorMode.PRINT &&
          ((s = this.options.modeRule[a.EditorMode.PRINT]) == null
            ? void 0
            : s.imagePreviewerDisabled)) ||
        (o === a.EditorMode.READONLY &&
          ((i = this.options.modeRule[a.EditorMode.READONLY]) == null
            ? void 0
            : i.imagePreviewerDisabled)) ||
        ((this.previewerDrawOption = n),
        (this.curElementSrc = t[n.srcKey || 'value'] || ''),
        this.updateResizer(t, e),
        document.addEventListener('keydown', this._keydown))
    }
    updateResizer(t, e = null) {
      const { scale: n } = this.options,
        o = t.width * n,
        s = t.height * n
      this._updateResizerSizeView(o, s)
      const { x: i, y: r } = this._getElementPosition(t, e)
      ;(this.resizerSelection.style.left = `${i}px`),
        (this.resizerSelection.style.top = `${r}px`),
        (this.resizerSelection.style.borderWidth = `${n}px`),
        this._updateResizerRect(o, s),
        (this.resizerSelection.style.display = 'block'),
        (this.curElement = t),
        (this.curPosition = e),
        (this.width = o),
        (this.height = s)
    }
    clearResizer() {
      ;(this.resizerSelection.style.display = 'none'),
        document.removeEventListener('keydown', this._keydown)
    }
  }
  class Cs {
    constructor(t) {
      L(this, 'draw')
      L(this, 'range')
      L(this, 'datePicker')
      L(this, 'options')
      ;(this.draw = t),
        (this.options = t.getOptions()),
        (this.range = t.getRange()),
        (this.datePicker = new An(t, { onSubmit: this._setValue.bind(this) }))
    }
    _setValue(t) {
      if (!t) return
      const e = this.getDateElementRange()
      if (!e) return
      const [n, o] = e,
        s = this.draw.getElementList(),
        i = s[n + 1]
      this.draw.spliceElementList(s, n + 1, o - n), this.range.setRange(n, n)
      const r = {
        type: a.ElementType.DATE,
        value: '',
        dateFormat: i.dateFormat,
        valueList: [{ value: t }]
      }
      Tt(s, [r], n, { editorOptions: this.options }),
        this.draw.insertElementList([r])
    }
    getDateElementRange() {
      let t = -1,
        e = -1
      const { startIndex: n, endIndex: o } = this.range.getRange()
      if (!~n && !~o) return null
      const s = this.draw.getElementList(),
        i = s[n]
      if (i.type !== a.ElementType.DATE) return null
      let r = n
      for (; r >= 0; ) {
        if (s[r].dateId !== i.dateId) {
          t = r
          break
        }
        r--
      }
      let R = n + 1
      for (; R < s.length; ) {
        if (s[R].dateId !== i.dateId) {
          e = R - 1
          break
        }
        R++
      }
      return R === s.length && (e = R - 1), !~t || !~e ? null : [t, e]
    }
    clearDatePicker() {
      this.datePicker.dispose()
    }
    renderDatePicker(t, e) {
      const n = this.draw.getElementList(),
        o = this.getDateElementRange(),
        s = o
          ? n
              .slice(o[0] + 1, o[1] + 1)
              .map(i => i.value)
              .join('')
          : ''
      this.datePicker.render({
        value: s,
        position: e,
        dateFormat: t.dateFormat
      })
    }
  }
  class Es {
    constructor(t) {
      L(this, 'element')
      this.element = t
    }
    render(t) {
      var o
      const e = this.element.block,
        n = document.createElement('video')
      ;(n.style.width = '100%'),
        (n.style.height = '100%'),
        (n.style.objectFit = 'contain'),
        (n.src = ((o = e.videoBlock) == null ? void 0 : o.src) || ''),
        (n.controls = !0),
        t.append(n)
    }
  }
  class Ks {
    constructor(t, e) {
      L(this, 'draw')
      L(this, 'element')
      L(this, 'block')
      L(this, 'blockContainer')
      L(this, 'blockItem')
      ;(this.draw = t.getDraw()),
        (this.blockContainer = t.getBlockContainer()),
        (this.element = e),
        (this.block = null),
        (this.blockItem = this._createBlockItem()),
        this.blockContainer.append(this.blockItem)
    }
    getBlockElement() {
      return this.element
    }
    _createBlockItem() {
      const t = document.createElement('div')
      return t.classList.add(`${x}-block-item`), t
    }
    render() {
      const t = this.element.block
      t.type === a.BlockType.IFRAME
        ? ((this.block = new Fe(this.element)),
          this.block.render(this.blockItem))
        : t.type === a.BlockType.VIDEO &&
          ((this.block = new Es(this.element)),
          this.block.render(this.blockItem))
    }
    setClientRects(t, e, n) {
      const o = this.draw.getHeight(),
        s = this.draw.getPageGap(),
        i = t * (o + s),
        { metrics: r } = this.element
      ;(this.blockItem.style.width = `${r.width}px`),
        (this.blockItem.style.height = `${r.height}px`),
        (this.blockItem.style.left = `${e}px`),
        (this.blockItem.style.top = `${i + n}px`)
    }
    remove() {
      this.blockItem.remove()
    }
  }
  class bs {
    constructor(t) {
      L(this, 'draw')
      L(this, 'container')
      L(this, 'blockContainer')
      L(this, 'blockMap')
      ;(this.draw = t),
        (this.container = t.getContainer()),
        (this.blockMap = new Map()),
        (this.blockContainer = this._createBlockContainer()),
        this.container.append(this.blockContainer)
    }
    _createBlockContainer() {
      const t = document.createElement('div')
      return t.classList.add(`${x}-block-container`), t
    }
    getDraw() {
      return this.draw
    }
    getBlockContainer() {
      return this.blockContainer
    }
    render(t, e, n, o) {
      const s = e.id,
        i = this.blockMap.get(s)
      if (i) i.setClientRects(t, n, o)
      else {
        const r = new Ks(this, e)
        r.render(), r.setClientRects(t, n, o), this.blockMap.set(s, r)
      }
    }
    clear() {
      if (!this.blockMap.size) return
      const t = this.draw.getElementList(),
        e = []
      for (let n = 0; n < t.length; n++) {
        const o = t[n]
        o.type === a.ElementType.BLOCK && e.push(o.id)
      }
      this.blockMap.forEach(n => {
        const o = n.getBlockElement().id
        e.includes(o) || (n.remove(), this.blockMap.delete(o))
      })
    }
  }
  var on = {
      contextmenu: {
        global: {
          cut: '\u526A\u5207',
          copy: '\u590D\u5236',
          paste: '\u7C98\u8D34',
          selectAll: '\u5168\u9009',
          print: '\u6253\u5370'
        },
        control: { delete: '\u5220\u9664\u63A7\u4EF6' },
        hyperlink: {
          delete: '\u5220\u9664\u94FE\u63A5',
          cancel: '\u53D6\u6D88\u94FE\u63A5',
          edit: '\u7F16\u8F91\u94FE\u63A5'
        },
        image: {
          change: '\u66F4\u6539\u56FE\u7247',
          saveAs: '\u53E6\u5B58\u4E3A\u56FE\u7247',
          textWrap: '\u6587\u5B57\u73AF\u7ED5',
          textWrapType: {
            embed: '\u5D4C\u5165\u578B',
            upDown: '\u4E0A\u4E0B\u578B\u73AF\u7ED5',
            surround: '\u56DB\u5468\u578B\u73AF\u7ED5',
            floatTop: '\u6D6E\u4E8E\u6587\u5B57\u4E0A\u65B9',
            floatBottom: '\u886C\u4E8E\u6587\u5B57\u4E0B\u65B9'
          }
        },
        table: {
          insertRowCol: '\u63D2\u5165\u884C\u5217',
          insertTopRow: '\u4E0A\u65B9\u63D2\u51651\u884C',
          insertBottomRow: '\u4E0B\u65B9\u63D2\u51651\u884C',
          insertLeftCol: '\u5DE6\u4FA7\u63D2\u51651\u5217',
          insertRightCol: '\u53F3\u4FA7\u63D2\u51651\u5217',
          deleteRowCol: '\u5220\u9664\u884C\u5217',
          deleteRow: '\u5220\u96641\u884C',
          deleteCol: '\u5220\u96641\u5217',
          deleteTable: '\u5220\u9664\u6574\u4E2A\u8868\u683C',
          mergeCell: '\u5408\u5E76\u5355\u5143\u683C',
          mergeCancelCell: '\u53D6\u6D88\u5408\u5E76',
          verticalAlign: '\u5782\u76F4\u5BF9\u9F50',
          verticalAlignTop: '\u9876\u7AEF\u5BF9\u9F50',
          verticalAlignMiddle: '\u5782\u76F4\u5C45\u4E2D',
          verticalAlignBottom: '\u5E95\u7AEF\u5BF9\u9F50',
          border: '\u8868\u683C\u8FB9\u6846',
          borderAll: '\u6240\u6709\u6846\u7EBF',
          borderEmpty: '\u65E0\u6846\u7EBF',
          borderDash: '\u865A\u6846\u7EBF',
          borderExternal: '\u5916\u4FA7\u6846\u7EBF',
          borderInternal: '\u5185\u4FA7\u6846\u7EBF',
          borderTd: '\u5355\u5143\u683C\u8FB9\u6846',
          borderTdTop: '\u4E0A\u8FB9\u6846',
          borderTdRight: '\u53F3\u8FB9\u6846',
          borderTdBottom: '\u4E0B\u8FB9\u6846',
          borderTdLeft: '\u5DE6\u8FB9\u6846',
          borderTdForward: '\u6B63\u659C\u7EBF',
          borderTdBack: '\u53CD\u659C\u7EBF'
        }
      },
      datePicker: {
        now: '\u6B64\u523B',
        confirm: '\u786E\u5B9A',
        return: '\u8FD4\u56DE\u65E5\u671F',
        timeSelect: '\u65F6\u95F4\u9009\u62E9',
        weeks: {
          sun: '\u65E5',
          mon: '\u4E00',
          tue: '\u4E8C',
          wed: '\u4E09',
          thu: '\u56DB',
          fri: '\u4E94',
          sat: '\u516D'
        },
        year: '\u5E74',
        month: '\u6708',
        hour: '\u65F6',
        minute: '\u5206',
        second: '\u79D2'
      },
      frame: { header: '\u9875\u7709', footer: '\u9875\u811A' },
      pageBreak: { displayName: '\u5206\u9875\u7B26' },
      zone: {
        headerTip: '\u53CC\u51FB\u7F16\u8F91\u9875\u7709',
        footerTip: '\u53CC\u51FB\u7F16\u8F91\u9875\u811A'
      }
    },
    ys = {
      contextmenu: {
        global: {
          cut: 'Cut',
          copy: 'Copy',
          paste: 'Paste',
          selectAll: 'Select all',
          print: 'Print'
        },
        control: { delete: 'Delete control' },
        hyperlink: {
          delete: 'Delete hyperlink',
          cancel: 'Cancel hyperlink',
          edit: 'Edit hyperlink'
        },
        image: {
          change: 'Change image',
          saveAs: 'Save as image',
          textWrap: 'Text wrap',
          textWrapType: {
            embed: 'Embed',
            upDown: 'Up down',
            surround: 'Surround',
            floatTop: 'Float above text',
            floatBottom: 'Float below text'
          }
        },
        table: {
          insertRowCol: 'Insert row col',
          insertTopRow: 'Insert top 1 row',
          insertBottomRow: 'Insert bottom 1 row',
          insertLeftCol: 'Insert left 1 col',
          insertRightCol: 'Insert right 1 col',
          deleteRowCol: 'Delete row col',
          deleteRow: 'Delete 1 row',
          deleteCol: 'Delete 1 col',
          deleteTable: 'Delete table',
          mergeCell: 'Merge cell',
          mergeCancelCell: 'Cancel merge cell',
          verticalAlign: 'Vertical align',
          verticalAlignTop: 'Top',
          verticalAlignMiddle: 'Middle',
          verticalAlignBottom: 'Bottom',
          border: 'Table border',
          borderAll: 'All',
          borderEmpty: 'Empty',
          borderDash: 'Dash',
          borderExternal: 'External',
          borderInternal: 'Internal',
          borderTd: 'Table cell border',
          borderTdTop: 'Top',
          borderTdRight: 'Right',
          borderTdBottom: 'Bottom',
          borderTdLeft: 'Left',
          borderTdForward: 'Forward',
          borderTdBack: 'Back'
        }
      },
      datePicker: {
        now: 'Now',
        confirm: 'Confirm',
        return: 'Return',
        timeSelect: 'Time select',
        weeks: {
          sun: 'Sun',
          mon: 'Mon',
          tue: 'Tue',
          wed: 'Wed',
          thu: 'Thu',
          fri: 'Fri',
          sat: 'Sat'
        },
        year: ' ',
        month: ' ',
        hour: 'Hour',
        minute: 'Minute',
        second: 'Second'
      },
      frame: { header: 'Header', footer: 'Footer' },
      pageBreak: { displayName: 'Page Break' },
      zone: {
        headerTip: 'Double click to edit header',
        footerTip: 'Double click to edit footer'
      }
    }
  class ws {
    constructor() {
      L(
        this,
        'langMap',
        new Map([
          ['zhCN', on],
          ['en', ys]
        ])
      )
      L(this, 'currentLocale', 'zhCN')
    }
    registerLangMap(t, e) {
      const n = this.langMap.get(t)
      this.langMap.set(t, Pn(n || on, e))
    }
    getLocale() {
      return this.currentLocale
    }
    setLocale(t) {
      this.currentLocale = t
    }
    getLang() {
      return this.langMap.get(this.currentLocale) || on
    }
    t(t) {
      const e = t.split('.')
      let n = '',
        o = this.getLang()
      for (let s = 0; s < e.length; s++) {
        const i = e[s],
          r = Reflect.get(o, i)
        if (r) n = o = r
        else return ''
      }
      return n
    }
  }
  class Hs {
    constructor() {
      L(this, 'promiseList')
      this.promiseList = []
    }
    add(t) {
      this.promiseList.push(t)
    }
    clearAll() {
      this.promiseList = []
    }
    allSettled() {
      return Promise.allSettled(this.promiseList)
    }
  }
  class Gs {
    constructor(t, e) {
      L(this, 'draw')
      L(this, 'zone')
      L(this, 'i18n')
      L(this, 'container')
      L(this, 'pageContainer')
      L(this, 'isDisableMouseMove')
      L(this, 'tipContainer')
      L(this, 'tipContent')
      L(this, 'currentMoveZone')
      ;(this.draw = t),
        (this.zone = e),
        (this.i18n = t.getI18n()),
        (this.container = t.getContainer()),
        (this.pageContainer = t.getPageContainer())
      const { tipContainer: n, tipContent: o } = this._drawZoneTip()
      ;(this.tipContainer = n),
        (this.tipContent = o),
        (this.isDisableMouseMove = !0),
        (this.currentMoveZone = a.EditorZone.MAIN)
      const s = [],
        { header: i, footer: r } = t.getOptions()
      i.disabled || s.push(a.EditorZone.HEADER),
        r.disabled || s.push(a.EditorZone.FOOTER),
        s.length && this._watchMouseMoveZoneChange(s)
    }
    _watchMouseMoveZoneChange(t) {
      this.pageContainer.addEventListener(
        'mousemove',
        Xi(e => {
          if (
            !(this.isDisableMouseMove || !this.draw.getIsPagingMode()) &&
            !!e.offsetY
          )
            if (e.target instanceof HTMLCanvasElement) {
              const n = this.zone.getZoneByY(e.offsetY)
              if (!t.includes(n)) {
                this._updateZoneTip(!1)
                return
              }
              ;(this.currentMoveZone = n),
                this._updateZoneTip(
                  this.zone.getZone() === a.EditorZone.MAIN &&
                    (n === a.EditorZone.HEADER || n === a.EditorZone.FOOTER),
                  e.x,
                  e.y
                )
            } else this._updateZoneTip(!1)
        }, 250)
      ),
        this.pageContainer.addEventListener('mouseenter', () => {
          this.isDisableMouseMove = !1
        }),
        this.pageContainer.addEventListener('mouseleave', () => {
          ;(this.isDisableMouseMove = !0), this._updateZoneTip(!1)
        })
    }
    _drawZoneTip() {
      const t = document.createElement('div')
      t.classList.add(`${x}-zone-tip`)
      const e = document.createElement('span')
      return (
        t.append(e),
        this.container.append(t),
        { tipContainer: t, tipContent: e }
      )
    }
    _updateZoneTip(t, e, n) {
      t
        ? (this.tipContainer.classList.add('show'),
          (this.tipContainer.style.left = `${e}px`),
          (this.tipContainer.style.top = `${n}px`),
          (this.tipContent.innerText = this.i18n.t(
            `zone.${this.currentMoveZone === a.EditorZone.HEADER ? 'headerTip' : 'footerTip'}`
          )))
        : this.tipContainer.classList.remove('show')
    }
  }
  class Js {
    constructor(t) {
      L(this, 'INDICATOR_PADDING', 2)
      L(this, 'INDICATOR_TITLE_TRANSLATE', [20, 5])
      L(this, 'draw')
      L(this, 'options')
      L(this, 'i18n')
      L(this, 'container')
      L(this, 'currentZone')
      L(this, 'indicatorContainer')
      ;(this.draw = t),
        (this.i18n = t.getI18n()),
        (this.options = t.getOptions()),
        (this.container = t.getContainer()),
        (this.currentZone = a.EditorZone.MAIN),
        (this.indicatorContainer = null),
        this.options.zone.tipDisabled || new Gs(t, this)
    }
    isHeaderActive() {
      return this.getZone() === a.EditorZone.HEADER
    }
    isMainActive() {
      return this.getZone() === a.EditorZone.MAIN
    }
    isFooterActive() {
      return this.getZone() === a.EditorZone.FOOTER
    }
    getZone() {
      return this.currentZone
    }
    setZone(t) {
      const { header: e, footer: n } = this.options
      ;(!e.editable && t === a.EditorZone.HEADER) ||
        (!n.editable && t === a.EditorZone.FOOTER) ||
        (this.currentZone !== t &&
          ((this.currentZone = t),
          this.draw.getRange().clearRange(),
          this.draw.render({
            isSubmitHistory: !1,
            isSetCursor: !1,
            isCompute: !1
          }),
          this.drawZoneIndicator(),
          Mn(() => {
            const o = this.draw.getListener()
            o.zoneChange && o.zoneChange(t)
            const s = this.draw.getEventBus()
            s.isSubscribe('zoneChange') && s.emit('zoneChange', t)
          })))
    }
    getZoneByY(t) {
      const e = this.draw.getHeader(),
        n = e.getHeaderTop() + e.getHeight(),
        o = this.draw.getFooter(),
        i = this.draw.getHeight() - (o.getFooterBottom() + o.getHeight())
      return t < n
        ? a.EditorZone.HEADER
        : t > i
          ? a.EditorZone.FOOTER
          : a.EditorZone.MAIN
    }
    drawZoneIndicator() {
      if (
        (this._clearZoneIndicator(),
        !this.isHeaderActive() && !this.isFooterActive())
      )
        return
      const { scale: t } = this.options,
        e = this.isHeaderActive(),
        [n, o] = this.INDICATOR_TITLE_TRANSLATE,
        s = this.draw.getPageList(),
        i = this.draw.getMargins(),
        r = this.draw.getInnerWidth(),
        R = this.draw.getHeight(),
        c = this.draw.getPageGap(),
        d = R + c
      ;(this.indicatorContainer = document.createElement('div')),
        this.indicatorContainer.classList.add(`${x}-zone-indicator`)
      const h = this.draw.getHeader(),
        u = this.draw.getFooter(),
        g = e ? h.getHeight() : u.getHeight(),
        T = e ? h.getHeaderTop() : R - u.getFooterBottom() - g
      for (let P = 0; P < s.length; P++) {
        const O = d * P + T,
          M = i[3] - this.INDICATOR_PADDING,
          S = i[3] + r + this.INDICATOR_PADDING,
          I = e ? O - this.INDICATOR_PADDING : O + g + this.INDICATOR_PADDING,
          F = e ? O + g + this.INDICATOR_PADDING : O - this.INDICATOR_PADDING,
          N = document.createElement('div')
        ;(N.innerText = this.i18n.t(`frame.${e ? 'header' : 'footer'}`)),
          (N.style.top = `${F}px`),
          (N.style.transform = `translate(${n * t}px, ${o * t}px) scale(${t})`),
          this.indicatorContainer.append(N)
        const X = document.createElement('span')
        X.classList.add(`${x}-zone-indicator-border__top`),
          (X.style.top = `${I}px`),
          (X.style.width = `${r}px`),
          (X.style.marginLeft = `${i[3]}px`),
          this.indicatorContainer.append(X)
        const f = document.createElement('span')
        f.classList.add(`${x}-zone-indicator-border__left`),
          (f.style.top = `${O}px`),
          (f.style.height = `${g}px`),
          (f.style.left = `${M}px`),
          this.indicatorContainer.append(f)
        const Q = document.createElement('span')
        Q.classList.add(`${x}-zone-indicator-border__bottom`),
          (Q.style.top = `${F}px`),
          this.indicatorContainer.append(Q)
        const Z = document.createElement('span')
        Z.classList.add(`${x}-zone-indicator-border__right`),
          (Z.style.top = `${O}px`),
          (Z.style.height = `${g}px`),
          (Z.style.left = `${S}px`),
          this.indicatorContainer.append(Z)
      }
      this.container.append(this.indicatorContainer)
    }
    _clearZoneIndicator() {
      var t
      ;(t = this.indicatorContainer) == null || t.remove(),
        (this.indicatorContainer = null)
    }
  }
  class xs {
    constructor(t, e) {
      L(this, 'draw')
      L(this, 'position')
      L(this, 'options')
      L(this, 'elementList')
      L(this, 'rowList')
      L(this, 'positionList')
      ;(this.draw = t),
        (this.position = t.getPosition()),
        (this.options = t.getOptions()),
        (this.elementList = e || []),
        (this.rowList = []),
        (this.positionList = [])
    }
    getRowList() {
      return this.rowList
    }
    setElementList(t) {
      this.elementList = t
    }
    getElementList() {
      return this.elementList
    }
    getPositionList() {
      return this.positionList
    }
    compute() {
      this.recovery(), this._computeRowList(), this._computePositionList()
    }
    recovery() {
      ;(this.rowList = []), (this.positionList = [])
    }
    _computeRowList() {
      const t = this.draw.getInnerWidth()
      this.rowList = this.draw.computeRowList({
        innerWidth: t,
        elementList: this.elementList
      })
    }
    _computePositionList() {
      const t = this.getFooterBottom(),
        e = this.draw.getInnerWidth(),
        o = this.draw.getMargins()[3],
        s = this.draw.getHeight(),
        i = this.getHeight(),
        r = s - t - i
      this.position.computePageRowPosition({
        positionList: this.positionList,
        rowList: this.rowList,
        pageNo: 0,
        startRowIndex: 0,
        startIndex: 0,
        startX: o,
        startY: r,
        innerWidth: e,
        zone: a.EditorZone.FOOTER
      })
    }
    getFooterBottom() {
      const {
        footer: { bottom: t, disabled: e },
        scale: n
      } = this.options
      return e ? 0 : Math.floor(t * n)
    }
    getMaxHeight() {
      const {
          footer: { maxHeightRadio: t }
        } = this.options,
        e = this.draw.getHeight()
      return Math.floor(e * un[t])
    }
    getHeight() {
      const t = this.getMaxHeight(),
        e = this.getRowHeight()
      return e > t ? t : e
    }
    getRowHeight() {
      return this.rowList.reduce((t, e) => t + e.height, 0)
    }
    getExtraHeight() {
      const t = this.draw.getMargins(),
        e = this.getHeight(),
        o = this.getFooterBottom() + e - t[2]
      return o <= 0 ? 0 : o
    }
    render(t, e) {
      t.globalAlpha = 1
      const n = this.draw.getInnerWidth(),
        o = this.getMaxHeight(),
        s = []
      let i = 0
      for (let r = 0; r < this.rowList.length; r++) {
        const R = this.rowList[r]
        if (i + R.height > o) break
        s.push(R), (i += R.height)
      }
      this.draw.drawRow(t, {
        elementList: this.elementList,
        positionList: this.positionList,
        rowList: s,
        pageNo: e,
        startIndex: 0,
        innerWidth: n,
        zone: a.EditorZone.FOOTER
      })
    }
  }
  class vs {
    constructor(t) {
      L(this, 'draw')
      L(this, 'range')
      L(this, 'options')
      L(this, 'UN_COUNT_STYLE_WIDTH', 20)
      L(this, 'MEASURE_BASE_TEXT', '0')
      L(this, 'LIST_GAP', 10)
      ;(this.draw = t),
        (this.range = t.getRange()),
        (this.options = t.getOptions())
    }
    setList(t, e) {
      if (this.draw.isReadonly()) return
      const { startIndex: o, endIndex: s } = this.range.getRange()
      if (!~o && !~s) return
      const i = this.range.getRangeParagraphElementList()
      if (!i || !i.length) return
      if (i.find(h => h.listType === t && h.listStyle === e) || !t) {
        this.unsetList()
        return
      }
      const R = A()
      i.forEach(h => {
        ;(h.listId = R), (h.listType = t), (h.listStyle = e)
      })
      const c = o === s,
        d = c ? s : o
      this.draw.render({ curIndex: d, isSetCursor: c })
    }
    unsetList() {
      var c
      if (this.draw.isReadonly()) return
      const { startIndex: e, endIndex: n } = this.range.getRange()
      if (!~e && !~n) return
      const o =
        (c = this.range.getRangeParagraphElementList()) == null
          ? void 0
          : c.filter(d => d.listId)
      if (!o || !o.length) return
      const s = this.draw.getElementList(),
        i = s[n]
      if (i.listId) {
        let d = n + 1
        for (; d < s.length; ) {
          const h = s[d]
          if (h.value === H && !h.listWrap) break
          if (h.listId !== i.listId) {
            this.draw.spliceElementList(s, d, 0, [{ value: H }])
            break
          }
          d++
        }
      }
      o.forEach(d => {
        delete d.listId,
          delete d.listType,
          delete d.listStyle,
          delete d.listWrap
      })
      const r = e === n,
        R = r ? n : e
      this.draw.render({ curIndex: R, isSetCursor: r })
    }
    computeListStyle(t, e) {
      const n = new Map()
      let o = 0,
        s = e[o].listId,
        i = []
      const r = e.length
      for (; o < r; ) {
        const R = e[o]
        if (s && s === R.listId) i.push(R)
        else if (R.listId && R.listId !== s) {
          if (i.length) {
            const c = this.getListStyleWidth(t, i)
            n.set(s, c)
          }
          ;(s = R.listId), (i = s ? [R] : [])
        }
        o++
      }
      if (i.length) {
        const R = this.getListStyleWidth(t, i)
        n.set(s, R)
      }
      return n
    }
    getListStyleWidth(t, e) {
      const { scale: n, checkbox: o } = this.options,
        s = e[0]
      if (s.listStyle && s.listStyle !== a.ListStyle.DECIMAL)
        return s.listStyle === a.ListStyle.CHECKBOX
          ? (o.width + this.LIST_GAP) * n
          : this.UN_COUNT_STYLE_WIDTH * n
      const i = e.reduce((c, d) => (d.value === H && (c += 1), c), 0)
      if (!i) return 0
      const r = `${this.MEASURE_BASE_TEXT.repeat(String(i).length)}${a.KeyMap.PERIOD}`,
        R = t.measureText(r)
      return Math.ceil((R.width + this.LIST_GAP) * n)
    }
    drawListStyle(t, e, n) {
      var S
      const { elementList: o, offsetX: s, listIndex: i, ascent: r } = e,
        R = o[0]
      if (R.value !== H || R.listWrap) return
      let c = 0
      const {
        defaultTabWidth: d,
        scale: h,
        defaultFont: u,
        defaultSize: g
      } = this.options
      for (let I = 1; I < o.length; I++) {
        const F = o[I]
        if ((F == null ? void 0 : F.type) !== a.ElementType.TAB) break
        c += d * h
      }
      const {
          coordinate: {
            leftTop: [T, P]
          }
        } = n,
        O = T - s + c,
        M = P + r
      if (R.listStyle === a.ListStyle.CHECKBOX) {
        const { width: I, height: F, gap: N } = this.options.checkbox,
          X = v(C({}, R), {
            checkbox: {
              value: !!((S = R.checkbox) == null ? void 0 : S.value)
            },
            metrics: v(C({}, R.metrics), {
              width: (I + N * 2) * h,
              height: F * h
            })
          })
        this.draw
          .getCheckboxParticle()
          .render({
            ctx: t,
            x: O - N * h,
            y: M,
            index: 0,
            row: v(C({}, e), { elementList: [X, ...e.elementList] })
          })
      } else {
        let I = ''
        if (
          (R.listType === a.ListType.UL
            ? (I = ve[R.listStyle] || ve[jt.DISC])
            : (I = `${i + 1}${a.KeyMap.PERIOD}`),
          !I)
        )
          return
        t.save(), (t.font = `${g * h}px ${u}`), t.fillText(I, O, M), t.restore()
      }
    }
  }
  const ln = class {
    constructor(t) {
      L(this, 'options')
      this.options = t.getOptions()
    }
    render(t, e, n, o) {
      const {
        scale: s,
        lineBreak: { color: i, lineWidth: r }
      } = this.options
      t.save(), t.beginPath()
      const R = o - (ln.HEIGHT * s) / 2,
        c = n + e.metrics.width
      t.translate(c, R),
        t.scale(s, s),
        (t.strokeStyle = i),
        (t.lineWidth = r),
        (t.lineCap = 'round'),
        (t.lineJoin = 'round'),
        t.beginPath(),
        t.moveTo(8, 0),
        t.lineTo(12, 0),
        t.lineTo(12, 6),
        t.lineTo(3, 6),
        t.moveTo(3, 6),
        t.lineTo(6, 3),
        t.moveTo(3, 6),
        t.lineTo(6, 9),
        t.stroke(),
        t.closePath(),
        t.restore()
    }
  }
  let qt = ln
  L(qt, 'WIDTH', 12), L(qt, 'HEIGHT', 9), L(qt, 'GAP', 3)
  class ii {
    constructor(t) {
      L(this, 'draw')
      L(this, 'position')
      L(this, 'options')
      L(this, 'elementList')
      L(this, 'rowList')
      L(this, 'positionList')
      ;(this.draw = t),
        (this.position = t.getPosition()),
        (this.options = t.getOptions()),
        (this.elementList = []),
        (this.rowList = []),
        (this.positionList = [])
    }
    _recovery() {
      ;(this.elementList = []), (this.rowList = []), (this.positionList = [])
    }
    _compute(t) {
      this._computeRowList(), this._computePositionList(t)
    }
    _computeRowList() {
      const t = this.draw.getInnerWidth()
      this.rowList = this.draw.computeRowList({
        innerWidth: t,
        elementList: this.elementList
      })
    }
    _computePositionList(t) {
      const { lineBreak: e, scale: n } = this.options,
        o = this.draw.getHeader().getExtraHeight(),
        s = this.draw.getInnerWidth(),
        i = this.draw.getMargins()
      let r = i[3]
      e.disabled || (r += (qt.WIDTH + qt.GAP) * n)
      const R = (t == null ? void 0 : t.startY) || i[0] + o
      this.position.computePageRowPosition({
        positionList: this.positionList,
        rowList: this.rowList,
        pageNo: 0,
        startRowIndex: 0,
        startIndex: 0,
        startX: r,
        startY: R,
        innerWidth: s
      })
    }
    render(t, e) {
      const { placeholder: n = this.options.placeholder } = e || {},
        { data: o, font: s, size: i, color: r, opacity: R } = n
      this._recovery(),
        (this.elementList = [{ value: o, font: s, size: i, color: r }]),
        St(this.elementList, {
          editorOptions: this.options,
          isForceCompensation: !0
        }),
        this._compute(e)
      const c = this.draw.getInnerWidth()
      t.save(),
        (t.globalAlpha = R),
        this.draw.drawRow(t, {
          elementList: this.elementList,
          positionList: this.positionList,
          rowList: this.rowList,
          pageNo: 0,
          startIndex: 0,
          innerWidth: c,
          isDrawLineBreak: !1
        }),
        t.restore()
    }
  }
  class Bs {
    constructor(t) {
      L(this, 'draw')
      L(this, 'options')
      L(this, 'range')
      L(this, 'fillRectMap')
      ;(this.draw = t),
        (this.options = t.getOptions()),
        (this.range = t.getRange()),
        (this.fillRectMap = new Map())
    }
    setGroup() {
      if (
        this.draw.isReadonly() ||
        this.draw.getZone().getZone() !== a.EditorZone.MAIN
      )
        return null
      const t = this.range.getSelection()
      if (!t) return null
      const e = A()
      return (
        t.forEach(n => {
          Array.isArray(n.groupIds) || (n.groupIds = []), n.groupIds.push(e)
        }),
        this.draw.render({ isSetCursor: !1, isCompute: !1 }),
        e
      )
    }
    getElementListByGroupId(t, e) {
      var o, s
      const n = []
      for (let i = 0; i < t.length; i++) {
        const r = t[i]
        if (r.type === a.ElementType.TABLE) {
          const R = r.trList
          for (let c = 0; c < R.length; c++) {
            const d = R[c]
            for (let h = 0; h < d.tdList.length; h++) {
              const u = d.tdList[h],
                g = this.getElementListByGroupId(u.value, e)
              if (g.length) return n.push(...g), n
            }
          }
        }
        if (
          (o = r == null ? void 0 : r.groupIds) == null ? void 0 : o.includes(e)
        ) {
          n.push(r)
          const R = t[i + 1]
          if (
            !((s = R == null ? void 0 : R.groupIds) == null
              ? void 0
              : s.includes(e))
          )
            break
        }
      }
      return n
    }
    deleteGroup(t) {
      if (this.draw.isReadonly()) return
      const e = this.draw.getOriginalMainElementList(),
        n = this.getElementListByGroupId(e, t)
      if (!!n.length) {
        for (let o = 0; o < n.length; o++) {
          const s = n[o],
            i = s.groupIds,
            r = i.findIndex(R => R === t)
          i.splice(r, 1), i.length || delete s.groupIds
        }
        this.draw.render({ isSetCursor: !1, isCompute: !1 })
      }
    }
    getContextByGroupId(t, e) {
      var n, o
      for (let s = 0; s < t.length; s++) {
        const i = t[s]
        if (i.type === a.ElementType.TABLE) {
          const R = i.trList
          for (let c = 0; c < R.length; c++) {
            const d = R[c]
            for (let h = 0; h < d.tdList.length; h++) {
              const u = d.tdList[h],
                g = this.getContextByGroupId(u.value, e)
              if (g)
                return v(C({}, g), {
                  isTable: !0,
                  index: s,
                  trIndex: c,
                  tdIndex: h,
                  tdId: u.id,
                  trId: d.id,
                  tableId: i.tableId
                })
            }
          }
        }
        const r = t[s + 1]
        if (
          ((n = i.groupIds) == null ? void 0 : n.includes(e)) &&
          !((o = r == null ? void 0 : r.groupIds) == null
            ? void 0
            : o.includes(e))
        )
          return { isTable: !1, startIndex: s, endIndex: s }
      }
      return null
    }
    clearFillInfo() {
      this.fillRectMap.clear()
    }
    recordFillInfo(t, e, n, o, s) {
      const i = t.groupIds
      if (!!i)
        for (const r of i) {
          const R = this.fillRectMap.get(r)
          R
            ? (R.width += o)
            : this.fillRectMap.set(r, { x: e, y: n, width: o, height: s })
        }
    }
    render(t) {
      var c
      if (!this.fillRectMap.size) return
      const e = this.range.getRange(),
        o =
          (c = this.draw.getElementList()[e.endIndex]) == null
            ? void 0
            : c.groupIds,
        {
          group: {
            backgroundColor: s,
            opacity: i,
            activeOpacity: r,
            activeBackgroundColor: R
          }
        } = this.options
      t.save(),
        this.fillRectMap.forEach((d, h) => {
          const { x: u, y: g, width: T, height: P } = d
          ;(o == null ? void 0 : o.includes(h))
            ? ((t.globalAlpha = r), (t.fillStyle = R))
            : ((t.globalAlpha = i), (t.fillStyle = s)),
            t.fillRect(u, g, T, P)
        }),
        t.restore(),
        this.clearFillInfo()
    }
  }
  class As {
    constructor(t) {
      L(this, 'draw')
      L(this, 'eventBus')
      L(this, 'pageContainer')
      ;(this.draw = t),
        (this.eventBus = this.draw.getEventBus()),
        (this.pageContainer = this.draw.getPageContainer()),
        this.pageContainer.addEventListener(
          'mousemove',
          this._mousemove.bind(this)
        ),
        this.pageContainer.addEventListener(
          'mouseenter',
          this._mouseenter.bind(this)
        ),
        this.pageContainer.addEventListener(
          'mouseleave',
          this._mouseleave.bind(this)
        ),
        this.pageContainer.addEventListener(
          'mousedown',
          this._mousedown.bind(this)
        ),
        this.pageContainer.addEventListener(
          'mouseup',
          this._mouseup.bind(this)
        ),
        this.pageContainer.addEventListener('click', this._click.bind(this))
    }
    _mousemove(t) {
      !this.eventBus.isSubscribe('mousemove') ||
        this.eventBus.emit('mousemove', t)
    }
    _mouseenter(t) {
      !this.eventBus.isSubscribe('mouseenter') ||
        this.eventBus.emit('mouseenter', t)
    }
    _mouseleave(t) {
      !this.eventBus.isSubscribe('mouseleave') ||
        this.eventBus.emit('mouseleave', t)
    }
    _mousedown(t) {
      !this.eventBus.isSubscribe('mousedown') ||
        this.eventBus.emit('mousedown', t)
    }
    _mouseup(t) {
      !this.eventBus.isSubscribe('mouseup') || this.eventBus.emit('mouseup', t)
    }
    _click(t) {
      !this.eventBus.isSubscribe('click') || this.eventBus.emit('click', t)
    }
  }
  class ks {
    constructor(t) {
      L(this, 'draw')
      L(this, 'options')
      ;(this.draw = t), (this.options = t.getOptions())
    }
    render(t, e) {
      const {
          scale: n,
          lineNumber: { color: o, size: s, font: i, right: r, type: R }
        } = this.options,
        c = this.draw.getTextParticle(),
        d = this.draw.getMargins(),
        h = this.draw.getPosition().getOriginalMainPositionList(),
        g = this.draw.getPageRowList()[e]
      t.save(), (t.fillStyle = o), (t.font = `${s * n}px ${i}`)
      for (let T = 0; T < g.length; T++) {
        const P = g[T],
          {
            coordinate: { leftBottom: O }
          } = h[P.startIndex],
          M = R === a.LineNumberType.PAGE ? T + 1 : P.rowIndex + 1,
          S = c.measureText(t, { value: `${M}` }),
          I = d[3] - (S.width + r) * n,
          F = O[1] - S.actualBoundingBoxAscent * n
        t.fillText(`${M}`, I, F)
      }
      t.restore()
    }
  }
  class _s {
    constructor(t) {
      L(this, 'draw')
      L(this, 'header')
      L(this, 'footer')
      L(this, 'options')
      ;(this.draw = t),
        (this.header = t.getHeader()),
        (this.footer = t.getFooter()),
        (this.options = t.getOptions())
    }
    render(t) {
      const {
        scale: e,
        pageBorder: { color: n, lineWidth: o, padding: s }
      } = this.options
      t.save(),
        t.translate(0.5, 0.5),
        (t.strokeStyle = n),
        (t.lineWidth = o * e)
      const i = this.draw.getMargins(),
        r = i[3] - s[3] * e,
        R = i[0] + this.header.getExtraHeight() - s[0] * e,
        c = this.draw.getInnerWidth() + (s[1] + s[3]) * e,
        d =
          this.draw.getHeight() -
          R -
          this.footer.getExtraHeight() -
          i[2] +
          s[2] * e
      t.rect(r, R, c, d), t.stroke(), t.restore()
    }
  }
  function zs(l, t) {
    const { value: e, oldValue: n } = t
    n.isTable && !e.isTable && l.getTableTool().dispose()
  }
  class $s {
    constructor(t) {
      L(this, 'draw')
      L(this, 'eventBus')
      ;(this.draw = t), (this.eventBus = t.getEventBus()), this.execute()
    }
    execute() {
      this.eventBus.on('positionContextChange', t => {
        zs(this.draw, t)
      })
    }
  }
  class js {
    constructor(t) {
      L(this, 'draw')
      L(this, 'range')
      L(this, 'position')
      L(this, 'tableTool')
      L(this, 'tableParticle')
      L(this, 'options')
      ;(this.draw = t),
        (this.range = t.getRange()),
        (this.position = t.getPosition()),
        (this.tableTool = t.getTableTool()),
        (this.tableParticle = t.getTableParticle()),
        (this.options = t.getOptions())
    }
    insertTable(t, e) {
      var T
      const { startIndex: n, endIndex: o } = this.range.getRange()
      if (!~n && !~o) return
      const { defaultTrMinHeight: s } = this.options.table,
        i = this.draw.getElementList()
      let r = 0
      if ((T = i[n]) == null ? void 0 : T.listId) {
        const P = this.position.getPositionList(),
          { rowIndex: O } = P[n],
          S = this.draw.getRowList()[O]
        r = (S == null ? void 0 : S.offsetX) || 0
      }
      const R = this.draw.getContextInnerWidth() - r,
        c = [],
        d = R / e
      for (let P = 0; P < e; P++) c.push({ width: d })
      const h = []
      for (let P = 0; P < t; P++) {
        const O = [],
          M = { height: s, tdList: O }
        for (let S = 0; S < e; S++)
          O.push({ colspan: 1, rowspan: 1, value: [] })
        h.push(M)
      }
      const u = { type: a.ElementType.TABLE, value: '', colgroup: c, trList: h }
      St([u], { editorOptions: this.options }),
        Tt(i, [u], n, { editorOptions: this.options })
      const g = n + 1
      this.draw.spliceElementList(i, g, n === o ? 0 : o - n, [u]),
        this.range.setRange(g, g),
        this.draw.render({ curIndex: g, isSetCursor: !1 })
    }
    insertTableTopRow() {
      const t = this.position.getPositionContext()
      if (!t.isTable) return
      const { index: e, trIndex: n, tableId: o } = t,
        i = this.draw.getOriginalElementList()[e],
        r = i.trList,
        R = r[n]
      if (R.tdList.length < i.colgroup.length) {
        const h = R.tdList[0].rowIndex
        for (let u = 0; u < n; u++) {
          const g = r[u]
          for (let T = 0; T < g.tdList.length; T++) {
            const P = g.tdList[T]
            P.rowspan > 1 && P.rowIndex + P.rowspan >= h + 1 && (P.rowspan += 1)
          }
        }
      }
      const c = A(),
        d = { height: R.height, id: c, tdList: [] }
      for (let h = 0; h < R.tdList.length; h++) {
        const u = R.tdList[h],
          g = A()
        d.tdList.push({
          id: g,
          rowspan: 1,
          colspan: u.colspan,
          value: [{ value: H, size: 16, tableId: o, trId: c, tdId: g }]
        })
      }
      r.splice(n, 0, d),
        this.position.setPositionContext({
          isTable: !0,
          index: e,
          trIndex: n,
          tdIndex: 0,
          tdId: d.tdList[0].id,
          trId: d.id,
          tableId: o
        }),
        this.range.setRange(0, 0),
        this.draw.render({ curIndex: 0 }),
        this.tableTool.render()
    }
    insertTableBottomRow() {
      const t = this.position.getPositionContext()
      if (!t.isTable) return
      const { index: e, trIndex: n, tableId: o } = t,
        i = this.draw.getOriginalElementList()[e],
        r = i.trList,
        R = r[n],
        c = r.length - 1 === n ? R : r[n + 1]
      if (c.tdList.length < i.colgroup.length) {
        const u = c.tdList[0].rowIndex
        for (let g = 0; g < n + 1; g++) {
          const T = r[g]
          for (let P = 0; P < T.tdList.length; P++) {
            const O = T.tdList[P]
            O.rowspan > 1 && O.rowIndex + O.rowspan >= u + 1 && (O.rowspan += 1)
          }
        }
      }
      const d = A(),
        h = { height: c.height, id: d, tdList: [] }
      for (let u = 0; u < c.tdList.length; u++) {
        const g = c.tdList[u],
          T = A()
        h.tdList.push({
          id: T,
          rowspan: 1,
          colspan: g.colspan,
          value: [{ value: H, size: 16, tableId: o, trId: d, tdId: T }]
        })
      }
      r.splice(n + 1, 0, h),
        this.position.setPositionContext({
          isTable: !0,
          index: e,
          trIndex: n + 1,
          tdIndex: 0,
          tdId: h.tdList[0].id,
          trId: h.id,
          tableId: i.id
        }),
        this.range.setRange(0, 0),
        this.draw.render({ curIndex: 0 })
    }
    adjustColWidth(t) {
      if (t.type !== a.ElementType.TABLE) return
      const { defaultColMinWidth: e } = this.options.table,
        n = t.colgroup,
        o = n.reduce((i, r) => i + r.width, 0),
        s = this.draw.getOriginalInnerWidth()
      if (o > s) {
        const i = n.filter(R => R.width > e),
          r = (o - s) / i.length
        for (let R = 0; R < n.length; R++) {
          const c = n[R]
          c.width - r >= e && (c.width -= r)
        }
      }
    }
    insertTableLeftCol() {
      const t = this.position.getPositionContext()
      if (!t.isTable) return
      const { index: e, tdIndex: n, tableId: o } = t,
        i = this.draw.getOriginalElementList()[e],
        r = i.trList,
        R = n
      for (let h = 0; h < r.length; h++) {
        const u = r[h],
          g = A()
        u.tdList.splice(R, 0, {
          id: g,
          rowspan: 1,
          colspan: 1,
          value: [{ value: H, size: 16, tableId: o, trId: u.id, tdId: g }]
        })
      }
      const { defaultColMinWidth: c } = this.options.table
      i.colgroup.splice(R, 0, { width: c }),
        this.adjustColWidth(i),
        this.position.setPositionContext({
          isTable: !0,
          index: e,
          trIndex: 0,
          tdIndex: R,
          tdId: r[0].tdList[R].id,
          trId: r[0].id,
          tableId: o
        }),
        this.range.setRange(0, 0),
        this.draw.render({ curIndex: 0 }),
        this.tableTool.render()
    }
    insertTableRightCol() {
      const t = this.position.getPositionContext()
      if (!t.isTable) return
      const { index: e, tdIndex: n, tableId: o } = t,
        i = this.draw.getOriginalElementList()[e],
        r = i.trList,
        R = n + 1
      for (let h = 0; h < r.length; h++) {
        const u = r[h],
          g = A()
        u.tdList.splice(R, 0, {
          id: g,
          rowspan: 1,
          colspan: 1,
          value: [{ value: H, size: 16, tableId: o, trId: u.id, tdId: g }]
        })
      }
      const { defaultColMinWidth: c } = this.options.table
      i.colgroup.splice(R, 0, { width: c }),
        this.adjustColWidth(i),
        this.position.setPositionContext({
          isTable: !0,
          index: e,
          trIndex: 0,
          tdIndex: R,
          tdId: r[0].tdList[R].id,
          trId: r[0].id,
          tableId: i.id
        }),
        this.range.setRange(0, 0),
        this.draw.render({ curIndex: 0 })
    }
    deleteTableRow() {
      const t = this.position.getPositionContext()
      if (!t.isTable) return
      const { index: e, trIndex: n, tdIndex: o } = t,
        i = this.draw.getOriginalElementList()[e],
        r = i.trList,
        R = r[n],
        c = R.tdList[o].rowIndex
      if (r.length <= 1 && i.pagingIndex === 0) {
        this.deleteTable()
        return
      }
      for (let d = 0; d < c; d++) {
        const u = r[d].tdList
        for (let g = 0; g < u.length; g++) {
          const T = u[g]
          T.rowIndex + T.rowspan > c && T.rowspan--
        }
      }
      for (let d = 0; d < R.tdList.length; d++) {
        const h = R.tdList[d]
        if (h.rowspan > 1) {
          const u = A(),
            g = r[n + 1]
          g.tdList.splice(d, 0, {
            id: u,
            rowspan: h.rowspan - 1,
            colspan: h.colspan,
            value: [{ value: H, size: 16, tableId: i.id, trId: g.id, tdId: u }]
          })
        }
      }
      r.splice(n, 1),
        this.position.setPositionContext({ isTable: !1 }),
        this.range.clearRange(),
        this.draw.render({ curIndex: t.index }),
        this.tableTool.dispose()
    }
    deleteTableCol() {
      var h
      const t = this.position.getPositionContext()
      if (!t.isTable) return
      const { index: e, tdIndex: n, trIndex: o } = t,
        i = this.draw.getOriginalElementList()[e],
        r = i.trList,
        c = r[o].tdList[n].colIndex
      if (!r.find(u => u.tdList.length > 1)) {
        this.deleteTable()
        return
      }
      for (let u = 0; u < r.length; u++) {
        const g = r[u]
        for (let T = 0; T < g.tdList.length; T++) {
          const P = g.tdList[T]
          P.colIndex <= c &&
            P.colIndex + P.colspan > c &&
            (P.colspan > 1 ? P.colspan-- : g.tdList.splice(T, 1))
        }
      }
      ;(h = i.colgroup) == null || h.splice(c, 1),
        this.position.setPositionContext({ isTable: !1 }),
        this.range.setRange(0, 0),
        this.draw.render({ curIndex: t.index }),
        this.tableTool.dispose()
    }
    deleteTable() {
      const t = this.position.getPositionContext()
      if (!t.isTable) return
      const e = this.draw.getOriginalElementList(),
        n = e[t.index]
      let o = 1,
        s = t.index
      if (n.pagingId) {
        s = t.index - n.pagingIndex
        for (let r = s + 1; r < e.length && e[r].pagingId === n.pagingId; r++)
          o++
      }
      e.splice(s, o)
      const i = s - 1
      this.position.setPositionContext({ isTable: !1, index: i }),
        this.range.setRange(i, i),
        this.draw.render({ curIndex: i }),
        this.tableTool.dispose()
    }
    mergeTableCell() {
      const t = this.position.getPositionContext()
      if (!t.isTable) return
      const {
        isCrossRowCol: e,
        startTdIndex: n,
        endTdIndex: o,
        startTrIndex: s,
        endTrIndex: i
      } = this.range.getRange()
      if (!e) return
      const { index: r } = t,
        d = this.draw.getOriginalElementList()[r].trList
      let h = d[s].tdList[n],
        u = d[i].tdList[o]
      ;(h.x > u.x || h.y > u.y) && ([h, u] = [u, h])
      const g = h.colIndex,
        T = u.colIndex + (u.colspan - 1),
        P = h.rowIndex,
        O = u.rowIndex + (u.rowspan - 1),
        M = []
      for (let W = 0; W < d.length; W++) {
        const p = d[W],
          U = []
        for (let m = 0; m < p.tdList.length; m++) {
          const y = p.tdList[m],
            K = y.colIndex,
            b = y.rowIndex
          K >= g && K <= T && b >= P && b <= O && U.push(y)
        }
        U.length && M.push(U)
      }
      if (!M.length) return
      const S = M[M.length - 1],
        I = M[0][0],
        F = S[S.length - 1],
        N = I.x,
        X = I.y,
        f = F.x + F.width,
        Q = F.y + F.height
      for (let W = 0; W < M.length; W++) {
        const p = M[W]
        for (let U = 0; U < p.length; U++) {
          const m = p[U],
            y = m.x,
            K = m.y,
            b = y + m.width,
            w = K + m.height
          if (N > y || X > K || f < b || Q < w) return
        }
      }
      const Z = [],
        D = M[0][0],
        Y = D.value[0]
      for (let W = 0; W < M.length; W++) {
        const p = M[W]
        for (let U = 0; U < p.length; U++) {
          const m = p[U]
          if (!(W === 0 && U === 0)) {
            Z.push(m.id)
            const K = m.value.length > 1 ? 0 : 1
            for (let b = K; b < m.value.length; b++) {
              const w = m.value[b]
              kt(ue, Y, w), D.value.push(w)
            }
          }
          W === 0 && U !== 0 && (D.colspan += m.colspan),
            W !== 0 && D.colIndex === m.colIndex && (D.rowspan += m.rowspan)
        }
      }
      for (let W = 0; W < d.length; W++) {
        const p = d[W]
        let U = 0
        for (; U < p.tdList.length; ) {
          const m = p.tdList[U]
          Z.includes(m.id) && (p.tdList.splice(U, 1), U--), U++
        }
      }
      this.position.setPositionContext(
        v(C({}, t), { trIndex: D.trIndex, tdIndex: D.tdIndex })
      )
      const V = D.value.length - 1
      this.range.setRange(V, V), this.draw.render(), this.tableTool.render()
    }
    cancelMergeTableCell() {
      const t = this.position.getPositionContext()
      if (!t.isTable) return
      const { index: e, tdIndex: n, trIndex: o } = t,
        i = this.draw.getOriginalElementList()[e],
        r = i.trList,
        R = r[o],
        c = R.tdList[n]
      if (c.rowspan === 1 && c.colspan === 1) return
      const d = c.colspan
      if (c.colspan > 1) {
        for (let u = 1; u < c.colspan; u++) {
          const g = A()
          R.tdList.splice(n + u, 0, {
            id: g,
            rowspan: 1,
            colspan: 1,
            value: [{ value: H, size: 16, tableId: i.id, trId: R.id, tdId: g }]
          })
        }
        c.colspan = 1
      }
      if (c.rowspan > 1) {
        for (let u = 1; u < c.rowspan; u++) {
          const g = r[o + u]
          for (let T = 0; T < d; T++) {
            const P = A()
            g.tdList.splice(c.colIndex, 0, {
              id: P,
              rowspan: 1,
              colspan: 1,
              value: [
                { value: H, size: 16, tableId: i.id, trId: g.id, tdId: P }
              ]
            })
          }
        }
        c.rowspan = 1
      }
      const h = c.value.length - 1
      this.range.setRange(h, h), this.draw.render(), this.tableTool.render()
    }
    splitVerticalTableCell() {
      const t = this.position.getPositionContext()
      if (!t.isTable || this.range.getRange().isCrossRowCol) return
      const { index: n, tdIndex: o, trIndex: s } = t,
        r = this.draw.getOriginalElementList()[n],
        R = r.trList,
        c = R[s],
        d = c.tdList[o]
      r.colgroup.splice(o + 1, 0, {
        width: this.options.table.defaultColMinWidth
      })
      for (let h = 0; h < R.length; h++) {
        const u = R[h]
        let g = 0
        for (; g < u.tdList.length; ) {
          const T = u.tdList[g]
          if (T.rowIndex !== d.rowIndex)
            T.colIndex <= d.colIndex &&
              T.colIndex + T.colspan > d.colIndex &&
              T.colspan++
          else if (T.id === d.id) {
            const P = A()
            c.tdList.splice(g + d.colspan, 0, {
              id: P,
              rowspan: d.rowspan,
              colspan: 1,
              value: [
                { value: H, size: 16, tableId: r.id, trId: u.id, tdId: P }
              ]
            }),
              g++
          }
          g++
        }
      }
      this.draw.render(), this.tableTool.render()
    }
    splitHorizontalTableCell() {
      const t = this.position.getPositionContext()
      if (!t.isTable || this.range.getRange().isCrossRowCol) return
      const { index: n, tdIndex: o, trIndex: s } = t,
        r = this.draw.getOriginalElementList()[n],
        R = r.trList,
        d = R[s].tdList[o]
      let h = -1,
        u = 0
      for (; u < R.length; ) {
        if (u === h) {
          u++
          continue
        }
        const g = R[u]
        let T = 0
        for (; T < g.tdList.length; ) {
          const P = g.tdList[T]
          if (P.id === d.id) {
            const O = A(),
              M = A()
            R.splice(u + d.rowspan, 0, {
              id: O,
              height: this.options.table.defaultTrMinHeight,
              tdList: [
                {
                  id: M,
                  rowspan: 1,
                  colspan: d.colspan,
                  value: [
                    { value: H, size: 16, tableId: r.id, trId: O, tdId: M }
                  ]
                }
              ]
            }),
              (h = u + d.rowspan)
          } else
            P.rowIndex >= d.rowIndex &&
              P.rowIndex < d.rowIndex + d.rowspan &&
              P.rowIndex + P.rowspan >= d.rowIndex + d.rowspan &&
              P.rowspan++
          T++
        }
        u++
      }
      this.draw.render(), this.tableTool.render()
    }
    tableTdVerticalAlign(t) {
      const e = this.tableParticle.getRangeRowCol()
      if (!e) return
      for (let o = 0; o < e.length; o++) {
        const s = e[o]
        for (let i = 0; i < s.length; i++) {
          const r = s[i]
          !r ||
            r.verticalAlign === t ||
            (!r.verticalAlign && t === a.VerticalAlign.TOP) ||
            (r.verticalAlign = t)
        }
      }
      const { endIndex: n } = this.range.getRange()
      this.draw.render({ curIndex: n })
    }
    tableBorderType(t) {
      const e = this.position.getPositionContext()
      if (!e.isTable) return
      const { index: n } = e,
        s = this.draw.getOriginalElementList()[n]
      if ((!s.borderType && t === a.TableBorder.ALL) || s.borderType === t)
        return
      s.borderType = t
      const { endIndex: i } = this.range.getRange()
      this.draw.render({ curIndex: i })
    }
    tableBorderColor(t) {
      const e = this.position.getPositionContext()
      if (!e.isTable) return
      const { index: n } = e,
        s = this.draw.getOriginalElementList()[n]
      if (
        (!s.borderColor && t === this.options.table.defaultBorderColor) ||
        s.borderColor === t
      )
        return
      s.borderColor = t
      const { endIndex: i } = this.range.getRange()
      this.draw.render({ curIndex: i, isCompute: !1 })
    }
    tableTdBorderType(t) {
      const e = this.tableParticle.getRangeRowCol()
      if (!e) return
      const n = e.flat(),
        o = n.some(i => {
          var r
          return !((r = i.borderTypes) == null ? void 0 : r.includes(t))
        })
      n.forEach(i => {
        i.borderTypes || (i.borderTypes = [])
        const r = i.borderTypes.findIndex(R => R === t)
        o ? ~r || i.borderTypes.push(t) : ~r && i.borderTypes.splice(r, 1),
          i.borderTypes.length || delete i.borderTypes
      })
      const { endIndex: s } = this.range.getRange()
      this.draw.render({ curIndex: s })
    }
    tableTdSlashType(t) {
      const e = this.tableParticle.getRangeRowCol()
      if (!e) return
      const n = e.flat(),
        o = n.some(i => {
          var r
          return !((r = i.slashTypes) == null ? void 0 : r.includes(t))
        })
      n.forEach(i => {
        i.slashTypes || (i.slashTypes = [])
        const r = i.slashTypes.findIndex(R => R === t)
        o ? ~r || i.slashTypes.push(t) : ~r && i.slashTypes.splice(r, 1),
          i.slashTypes.length || delete i.slashTypes
      })
      const { endIndex: s } = this.range.getRange()
      this.draw.render({ curIndex: s })
    }
    tableTdBackgroundColor(t) {
      const e = this.tableParticle.getRangeRowCol()
      if (!e) return
      for (let o = 0; o < e.length; o++) {
        const s = e[o]
        for (let i = 0; i < s.length; i++) {
          const r = s[i]
          r.backgroundColor = t
        }
      }
      const { endIndex: n } = this.range.getRange()
      this.range.setRange(n, n), this.draw.render({ isCompute: !1 })
    }
    tableSelectAll() {
      const t = this.position.getPositionContext(),
        { index: e, tableId: n, isTable: o } = t
      if (!o || !n) return
      const { startIndex: s, endIndex: i } = this.range.getRange(),
        R = this.draw.getOriginalElementList()[e].trList,
        c = R.length - 1,
        d = R[c].tdList.length - 1
      this.range.replaceRange({
        startIndex: s,
        endIndex: i,
        tableId: n,
        startTdIndex: 0,
        endTdIndex: d,
        startTrIndex: 0,
        endTrIndex: c
      }),
        this.draw.render({ isCompute: !1, isSubmitHistory: !1 })
    }
  }
  ;(a.AreaMode = void 0),
    (function (l) {
      ;(l.EDIT = 'edit'), (l.READONLY = 'readonly'), (l.FORM = 'form')
    })(a.AreaMode || (a.AreaMode = {}))
  class qs {
    constructor(t) {
      L(this, 'draw')
      L(this, 'zone')
      L(this, 'range')
      L(this, 'position')
      L(this, 'areaInfoMap', new Map())
      ;(this.draw = t),
        (this.zone = t.getZone()),
        (this.range = t.getRange()),
        (this.position = t.getPosition())
    }
    getAreaInfo() {
      return this.areaInfoMap
    }
    getActiveAreaId() {
      if (!this.areaInfoMap.size) return null
      const { startIndex: t } = this.range.getRange(),
        n = this.draw.getElementList()[t]
      return (n == null ? void 0 : n.areaId) || null
    }
    getActiveAreaInfo() {
      const t = this.getActiveAreaId()
      return (t && this.areaInfoMap.get(t)) || null
    }
    isReadonly() {
      const t = this.getActiveAreaInfo()
      if (!(t == null ? void 0 : t.area)) return !1
      switch (t.area.mode) {
        case a.AreaMode.EDIT:
          return !1
        case a.AreaMode.READONLY:
          return !0
        case a.AreaMode.FORM:
          return !this.draw.getControl().getIsRangeWithinControl()
        default:
          return !1
      }
    }
    insertArea(t) {
      this.zone.getZone() !== a.EditorZone.MAIN &&
        this.zone.setZone(a.EditorZone.MAIN),
        this.draw.getPosition().setPositionContext({ isTable: !1 })
      const { id: e, value: n, area: o, position: s } = t
      if (s === a.LocationPosition.BEFORE) this.range.setRange(0, 0)
      else {
        const R = this.draw.getOriginalMainElementList().length - 1
        this.range.setRange(R, R)
      }
      const i = e || A()
      return (
        this.draw.insertElementList([
          {
            type: a.ElementType.AREA,
            value: '',
            areaId: i,
            valueList: n,
            area: k(o)
          }
        ]),
        i
      )
    }
    render(t, e) {
      if (!this.areaInfoMap.size) return
      t.save()
      const n = this.draw.getMargins(),
        o = this.draw.getInnerWidth()
      for (const s of this.areaInfoMap) {
        const { area: i, positionList: r } = s[1]
        if (
          (i == null ? void 0 : i.hide) ||
          (!(i == null ? void 0 : i.backgroundColor) &&
            !(i == null ? void 0 : i.borderColor) &&
            !(i == null ? void 0 : i.placeholder))
        )
          continue
        const R = r.filter(T => T.pageNo === e)
        if (!R.length) continue
        t.translate(0.5, 0.5)
        const c = R[0],
          d = R[R.length - 1],
          h = n[3],
          u = Math.ceil(c.coordinate.leftTop[1]),
          g = Math.ceil(d.coordinate.rightBottom[1] - u)
        i.backgroundColor &&
          ((t.fillStyle = i.backgroundColor), t.fillRect(h, u, o, g)),
          i.borderColor &&
            ((t.strokeStyle = i.borderColor), t.strokeRect(h, u, o, g)),
          i.placeholder &&
            r.length <= 1 &&
            new ii(this.draw).render(t, {
              placeholder: C(C({}, Zn), i.placeholder),
              startY: c.coordinate.leftTop[1]
            }),
          t.translate(-0.5, -0.5)
      }
      t.restore()
    }
    compute() {
      this.areaInfoMap.clear()
      const t = this.draw.getOriginalMainElementList(),
        e = this.position.getOriginalMainPositionList()
      for (let n = 0; n < t.length; n++) {
        const o = t[n],
          s = o.areaId
        if (s) {
          const i = this.areaInfoMap.get(s)
          i
            ? (i.elementList.push(o), i.positionList.push(e[n]))
            : this.areaInfoMap.set(s, {
                id: s,
                area: o.area,
                elementList: [o],
                positionList: [e[n]]
              })
        }
      }
    }
    getAreaValue(t = {}) {
      const e = t.id || this.getActiveAreaId()
      if (!e) return null
      const n = this.areaInfoMap.get(e)
      return n
        ? {
            area: n.area,
            id: n.id,
            startPageNo: n.positionList[0].pageNo,
            endPageNo: n.positionList[n.positionList.length - 1].pageNo,
            value: z(n.elementList)
          }
        : null
    }
    getContextByAreaId(t) {
      const e = this.draw.getOriginalMainElementList()
      for (let n = 0; n < e.length; n++)
        if (e[n].areaId === t) {
          const s = this.position.getOriginalMainPositionList()
          return {
            range: { startIndex: n, endIndex: n },
            elementPosition: s[n]
          }
        }
      return null
    }
    setAreaProperties(t) {
      const e = t.id || this.getActiveAreaId()
      if (!e) return
      const n = this.areaInfoMap.get(e)
      if (!n) return
      n.area || (n.area = {})
      let o = !1
      const s = ['top', 'hide']
      Object.entries(t.properties).forEach(([i, r]) => {
        if (Sn(r)) return
        const R = i
        ;(n.area[R] = r), s.includes(R) && (o = !0)
      }),
        this.draw.render({ isCompute: o, isSetCursor: !1 })
    }
  }
  class tl {
    constructor(t) {
      L(this, 'draw')
      L(this, 'options')
      L(this, 'imageCache')
      L(this, 'mainBadge')
      L(this, 'areaBadgeMap')
      ;(this.draw = t),
        (this.options = t.getOptions()),
        (this.imageCache = new Map()),
        (this.mainBadge = null),
        (this.areaBadgeMap = new Map())
    }
    setMainBadge(t) {
      this.mainBadge = t
    }
    setAreaBadgeMap(t) {
      this.areaBadgeMap.clear(),
        t.forEach(e => {
          this.areaBadgeMap.set(e.areaId, e.badge)
        })
    }
    _drawImage(t, e, n, o, s, i) {
      if (this.imageCache.has(i)) {
        const r = this.imageCache.get(i)
        t.drawImage(r, e, n, o, s)
      } else {
        const r = new Image()
        r.setAttribute('crossOrigin', 'Anonymous'),
          (r.src = i),
          (r.onload = () => {
            this.imageCache.set(i, r), t.drawImage(r, e, n, o, s)
          })
      }
    }
    render(t, e) {
      if (e === 0 && this.mainBadge) {
        const { scale: n, badge: o } = this.options,
          { left: s, top: i, width: r, height: R, value: c } = this.mainBadge,
          d =
            this.draw.getMargins()[0] + this.draw.getHeader().getExtraHeight(),
          h = (s || o.left) * n,
          u = (i || o.top) * n + d
        this._drawImage(t, h, u, r * n, R * n, c)
      }
      if (this.areaBadgeMap.size) {
        const n = this.draw.getArea().getAreaInfo()
        if (n.size) {
          const { scale: o, badge: s } = this.options
          for (const i of n) {
            const { positionList: r } = i[1],
              R = r[0]
            if (R.pageNo !== e) continue
            const c = this.areaBadgeMap.get(i[0])
            if (!c) continue
            const { left: d, top: h, width: u, height: g, value: T } = c,
              P = (d || s.left) * o,
              O = (h || s.top) * o + R.coordinate.leftTop[1]
            this._drawImage(t, P, O, u * o, g * o, T)
          }
        }
      }
    }
  }
  class el {
    constructor(t, e, n, o, s, i) {
      L(this, 'container')
      L(this, 'pageContainer')
      L(this, 'pageList')
      L(this, 'ctxList')
      L(this, 'pageNo')
      L(this, 'renderCount')
      L(this, 'pagePixelRatio')
      L(this, 'mode')
      L(this, 'options')
      L(this, 'position')
      L(this, 'zone')
      L(this, 'elementList')
      L(this, 'listener')
      L(this, 'eventBus')
      L(this, 'override')
      L(this, 'i18n')
      L(this, 'canvasEvent')
      L(this, 'globalEvent')
      L(this, 'cursor')
      L(this, 'range')
      L(this, 'margin')
      L(this, 'background')
      L(this, 'badge')
      L(this, 'search')
      L(this, 'group')
      L(this, 'area')
      L(this, 'underline')
      L(this, 'strikeout')
      L(this, 'highlight')
      L(this, 'historyManager')
      L(this, 'previewer')
      L(this, 'imageParticle')
      L(this, 'laTexParticle')
      L(this, 'textParticle')
      L(this, 'tableParticle')
      L(this, 'tableTool')
      L(this, 'tableOperate')
      L(this, 'pageNumber')
      L(this, 'lineNumber')
      L(this, 'waterMark')
      L(this, 'placeholder')
      L(this, 'header')
      L(this, 'footer')
      L(this, 'hyperlinkParticle')
      L(this, 'dateParticle')
      L(this, 'separatorParticle')
      L(this, 'pageBreakParticle')
      L(this, 'superscriptParticle')
      L(this, 'subscriptParticle')
      L(this, 'checkboxParticle')
      L(this, 'radioParticle')
      L(this, 'blockParticle')
      L(this, 'listParticle')
      L(this, 'lineBreakParticle')
      L(this, 'control')
      L(this, 'pageBorder')
      L(this, 'workerManager')
      L(this, 'scrollObserver')
      L(this, 'selectionObserver')
      L(this, 'imageObserver')
      L(this, 'LETTER_REG')
      L(this, 'WORD_LIKE_REG')
      L(this, 'rowList')
      L(this, 'pageRowList')
      L(this, 'painterStyle')
      L(this, 'painterOptions')
      L(this, 'visiblePageNoList')
      L(this, 'intersectionPageNo')
      L(this, 'lazyRenderIntersectionObserver')
      L(this, 'printModeData')
      ;(this.container = this._wrapContainer(t)),
        (this.pageList = []),
        (this.ctxList = []),
        (this.pageNo = 0),
        (this.renderCount = 0),
        (this.pagePixelRatio = null),
        (this.mode = e.mode),
        (this.options = e),
        (this.elementList = n.main),
        (this.listener = o),
        (this.eventBus = s),
        (this.override = i),
        this._formatContainer(),
        (this.pageContainer = this._createPageContainer()),
        this._createPage(0),
        (this.i18n = new ws()),
        (this.historyManager = new is(this)),
        (this.position = new os(this)),
        (this.zone = new Js(this)),
        (this.range = new ss(this)),
        (this.margin = new Rs(this)),
        (this.background = new ls(this)),
        (this.badge = new tl(this)),
        (this.search = new as(this)),
        (this.group = new Bs(this)),
        (this.area = new qs(this)),
        (this.underline = new ds(this)),
        (this.strikeout = new cs(this)),
        (this.highlight = new rs(this)),
        (this.previewer = new Ds(this)),
        (this.imageParticle = new In(this)),
        (this.laTexParticle = new mn(this)),
        (this.textParticle = new hs(this)),
        (this.tableParticle = new Ls(this)),
        (this.tableTool = new Ts(this)),
        (this.tableOperate = new js(this)),
        (this.pageNumber = new ae(this)),
        (this.lineNumber = new ks(this)),
        (this.waterMark = new Is(this)),
        (this.placeholder = new ii(this)),
        (this.header = new Ms(this, n.header)),
        (this.footer = new xs(this, n.footer)),
        (this.hyperlinkParticle = new Ps(this)),
        (this.dateParticle = new Cs(this)),
        (this.separatorParticle = new Xs(this)),
        (this.pageBreakParticle = new Ns(this)),
        (this.superscriptParticle = new Os()),
        (this.subscriptParticle = new Ss()),
        (this.checkboxParticle = new Ws(this)),
        (this.radioParticle = new Vs(this)),
        (this.blockParticle = new bs(this)),
        (this.listParticle = new vs(this)),
        (this.lineBreakParticle = new qt(this)),
        (this.control = new ms(this)),
        (this.pageBorder = new _s(this)),
        (this.scrollObserver = new us(this)),
        (this.selectionObserver = new gs(this)),
        (this.imageObserver = new Hs()),
        new As(this),
        (this.canvasEvent = new es(this)),
        (this.cursor = new Yo(this, this.canvasEvent)),
        this.canvasEvent.register(),
        (this.globalEvent = new ns(this, this.canvasEvent)),
        this.globalEvent.register(),
        (this.workerManager = new Qs(this)),
        new $s(this)
      const { letterClass: r } = e
      ;(this.LETTER_REG = new RegExp(`[${r.join('')}]`)),
        (this.WORD_LIKE_REG = new RegExp(
          `${r.map(R => `[^${R}][${R}]`).join('|')}`
        )),
        (this.rowList = []),
        (this.pageRowList = []),
        (this.painterStyle = null),
        (this.painterOptions = null),
        (this.visiblePageNoList = []),
        (this.intersectionPageNo = 0),
        (this.lazyRenderIntersectionObserver = null),
        (this.printModeData = null),
        this.mode === a.EditorMode.PRINT && this.setPrintData(),
        this.render({ isInit: !0, isSetCursor: !1, isFirstRender: !0 })
    }
    setPrintData() {
      this.printModeData = {
        header: this.header.getElementList(),
        main: this.elementList,
        footer: this.footer.getElementList()
      }
      const t = k(this.printModeData)
      ;['header', 'main', 'footer'].forEach(n => {
        t[n] = this.control.filterAssistElement(t[n])
      }),
        this.setEditorData(t)
    }
    clearPrintData() {
      this.printModeData &&
        (this.setEditorData(this.printModeData), (this.printModeData = null))
    }
    getLetterReg() {
      return this.LETTER_REG
    }
    getMode() {
      return this.mode
    }
    setMode(t) {
      this.mode !== t &&
        (t === a.EditorMode.PRINT && this.setPrintData(),
        this.mode === a.EditorMode.PRINT && this.clearPrintData(),
        this.clearSideEffect(),
        this.range.clearRange(),
        (this.mode = t),
        (this.options.mode = t),
        this.render({ isSetCursor: !1, isSubmitHistory: !1 }))
    }
    isReadonly() {
      var t, e
      if (
        (e = (t = this.area.getActiveAreaInfo()) == null ? void 0 : t.area) ==
        null
          ? void 0
          : e.mode
      )
        return this.area.isReadonly()
      switch (this.mode) {
        case a.EditorMode.DESIGN:
          return !1
        case a.EditorMode.READONLY:
        case a.EditorMode.PRINT:
          return !0
        case a.EditorMode.FORM:
          return !this.control.getIsRangeWithinControl()
        default:
          return !1
      }
    }
    isDisabled() {
      var s, i, r, R, c
      if (this.mode === a.EditorMode.DESIGN) return !1
      const { startIndex: t, endIndex: e } = this.range.getRange(),
        n = this.getElementList()
      if ((s = this.getTd()) == null ? void 0 : s.disabled) return !0
      if (t === e) {
        const d = n[t],
          h = n[t + 1]
        return !!(
          (((i = d == null ? void 0 : d.title) == null ? void 0 : i.disabled) &&
            ((r = h == null ? void 0 : h.title) == null
              ? void 0
              : r.disabled) &&
            d.titleId === h.titleId) ||
          (((R = d == null ? void 0 : d.control) == null
            ? void 0
            : R.disabled) &&
            ((c = h == null ? void 0 : h.control) == null
              ? void 0
              : c.disabled) &&
            d.controlId === h.controlId)
        )
      }
      return n.slice(t + 1, e + 1).some(d => {
        var h, u
        return (
          ((h = d.title) == null ? void 0 : h.disabled) ||
          ((u = d.control) == null ? void 0 : u.disabled)
        )
      })
    }
    isDesignMode() {
      return this.mode === a.EditorMode.DESIGN
    }
    isPrintMode() {
      return this.mode === a.EditorMode.PRINT
    }
    getOriginalWidth() {
      const { paperDirection: t, width: e, height: n } = this.options
      return t === a.PaperDirection.VERTICAL ? e : n
    }
    getOriginalHeight() {
      const { paperDirection: t, width: e, height: n } = this.options
      return t === a.PaperDirection.VERTICAL ? n : e
    }
    getWidth() {
      return Math.floor(this.getOriginalWidth() * this.options.scale)
    }
    getHeight() {
      return Math.floor(this.getOriginalHeight() * this.options.scale)
    }
    getMainHeight() {
      return this.getHeight() - this.getMainOuterHeight()
    }
    getMainOuterHeight() {
      const t = this.getMargins(),
        e = this.header.getExtraHeight(),
        n = this.footer.getExtraHeight()
      return t[0] + t[2] + e + n
    }
    getCanvasWidth(t = -1) {
      return this.getPage(t).width
    }
    getCanvasHeight(t = -1) {
      return this.getPage(t).height
    }
    getInnerWidth() {
      const t = this.getWidth(),
        e = this.getMargins()
      return t - e[1] - e[3]
    }
    getOriginalInnerWidth() {
      const t = this.getOriginalWidth(),
        e = this.getOriginalMargins()
      return t - e[1] - e[3]
    }
    getContextInnerWidth() {
      const t = this.position.getPositionContext()
      if (t.isTable) {
        const { index: e, trIndex: n, tdIndex: o } = t,
          i = this.getOriginalElementList()[e].trList[n].tdList[o],
          r = this.getTdPadding()
        return i.width - r[1] - r[3]
      }
      return this.getOriginalInnerWidth()
    }
    getMargins() {
      return this.getOriginalMargins().map(t => t * this.options.scale)
    }
    getOriginalMargins() {
      const { margins: t, paperDirection: e } = this.options
      return e === a.PaperDirection.VERTICAL ? t : [t[1], t[2], t[3], t[0]]
    }
    getPageGap() {
      return this.options.pageGap * this.options.scale
    }
    getOriginalPageGap() {
      return this.options.pageGap
    }
    getPageNumberBottom() {
      const {
        pageNumber: { bottom: t },
        scale: e
      } = this.options
      return t * e
    }
    getMarginIndicatorSize() {
      return this.options.marginIndicatorSize * this.options.scale
    }
    getDefaultBasicRowMarginHeight() {
      return this.options.defaultBasicRowMarginHeight * this.options.scale
    }
    getTdPadding() {
      const {
        table: { tdPadding: t },
        scale: e
      } = this.options
      return t.map(n => n * e)
    }
    getContainer() {
      return this.container
    }
    getPageContainer() {
      return this.pageContainer
    }
    getVisiblePageNoList() {
      return this.visiblePageNoList
    }
    setVisiblePageNoList(t) {
      ;(this.visiblePageNoList = t),
        this.listener.visiblePageNoListChange &&
          this.listener.visiblePageNoListChange(this.visiblePageNoList),
        this.eventBus.isSubscribe('visiblePageNoListChange') &&
          this.eventBus.emit('visiblePageNoListChange', this.visiblePageNoList)
    }
    getIntersectionPageNo() {
      return this.intersectionPageNo
    }
    setIntersectionPageNo(t) {
      ;(this.intersectionPageNo = t),
        this.listener.intersectionPageNoChange &&
          this.listener.intersectionPageNoChange(this.intersectionPageNo),
        this.eventBus.isSubscribe('intersectionPageNoChange') &&
          this.eventBus.emit(
            'intersectionPageNoChange',
            this.intersectionPageNo
          )
    }
    getPageNo() {
      return this.pageNo
    }
    setPageNo(t) {
      this.pageNo = t
    }
    getRenderCount() {
      return this.renderCount
    }
    getPage(t = -1) {
      return this.pageList[~t ? t : this.pageNo]
    }
    getPageList() {
      return this.pageList
    }
    getPageCount() {
      return this.pageList.length
    }
    getTableRowList(t) {
      const e = this.position.getPositionContext(),
        { index: n, trIndex: o, tdIndex: s } = e
      return t[n].trList[o].tdList[s].rowList
    }
    getOriginalRowList() {
      const t = this.getZone()
      return t.isHeaderActive()
        ? this.header.getRowList()
        : t.isFooterActive()
          ? this.footer.getRowList()
          : this.rowList
    }
    getRowList() {
      return this.position.getPositionContext().isTable
        ? this.getTableRowList(this.getOriginalElementList())
        : this.getOriginalRowList()
    }
    getPageRowList() {
      return this.pageRowList
    }
    getCtx() {
      return this.ctxList[this.pageNo]
    }
    getOptions() {
      return this.options
    }
    getSearch() {
      return this.search
    }
    getGroup() {
      return this.group
    }
    getArea() {
      return this.area
    }
    getBadge() {
      return this.badge
    }
    getHistoryManager() {
      return this.historyManager
    }
    getPosition() {
      return this.position
    }
    getZone() {
      return this.zone
    }
    getRange() {
      return this.range
    }
    getLineBreakParticle() {
      return this.lineBreakParticle
    }
    getTextParticle() {
      return this.textParticle
    }
    getHeaderElementList() {
      return this.header.getElementList()
    }
    getTableElementList(t) {
      var i
      const e = this.position.getPositionContext(),
        { index: n, trIndex: o, tdIndex: s } = e
      return ((i = t[n].trList) == null ? void 0 : i[o].tdList[s].value) || []
    }
    getElementList() {
      const t = this.position.getPositionContext(),
        e = this.getOriginalElementList()
      return t.isTable ? this.getTableElementList(e) : e
    }
    getMainElementList() {
      return this.position.getPositionContext().isTable
        ? this.getTableElementList(this.elementList)
        : this.elementList
    }
    getOriginalElementList() {
      const t = this.getZone()
      return t.isHeaderActive()
        ? this.getHeaderElementList()
        : t.isFooterActive()
          ? this.getFooterElementList()
          : this.elementList
    }
    getOriginalMainElementList() {
      return this.elementList
    }
    getFooterElementList() {
      return this.footer.getElementList()
    }
    getTd() {
      const t = this.position.getPositionContext(),
        { index: e, trIndex: n, tdIndex: o, isTable: s } = t
      return s ? this.getOriginalElementList()[e].trList[n].tdList[o] : null
    }
    insertElementList(t, e = {}) {
      if (!t.length || !this.range.getIsCanInput()) return
      const { startIndex: n, endIndex: o } = this.range.getRange()
      if (!~n && !~o) return
      const { isSubmitHistory: s = !0 } = e
      St(t, { isHandleFirstElement: !1, editorOptions: this.options })
      let i = -1,
        r = this.control.getActiveControl()
      if (
        (!r &&
          this.control.getIsRangeWithinControl() &&
          (this.control.initControl(), (r = this.control.getActiveControl())),
        r && this.control.getIsRangeWithinControl())
      )
        (i = r.setValue(t, void 0, { isIgnoreDisabledRule: !0 })),
          this.control.emitControlContentChange()
      else {
        const R = this.getElementList(),
          c = n === o,
          d = n + 1
        c || this.spliceElementList(R, d, o - n),
          this.spliceElementList(R, d, 0, t),
          (i = n + t.length)
        const h = R[d - 1]
        t[0].listId &&
          h &&
          !h.listId &&
          (h == null ? void 0 : h.value) === H &&
          (!h.type || h.type === a.ElementType.TEXT) &&
          (R.splice(n, 1), (i -= 1))
      }
      ~i &&
        (this.range.setRange(i, i),
        this.render({ curIndex: i, isSubmitHistory: s }))
    }
    appendElementList(t, e = {}) {
      if (!t.length) return
      St(t, { isHandleFirstElement: !1, editorOptions: this.options })
      let n
      const { isPrepend: o, isSubmitHistory: s = !0 } = e
      o
        ? (this.elementList.splice(1, 0, ...t), (n = t.length))
        : (this.elementList.push(...t), (n = this.elementList.length - 1)),
        this.range.setRange(n, n),
        this.render({ curIndex: n, isSubmitHistory: s })
    }
    spliceElementList(t, e, n, o, s) {
      var c, d, h, u, g, T, P, O
      const { isIgnoreDeletedRule: i = !1 } = s || {},
        { group: r, modeRule: R } = this.options
      if (n > 0) {
        const M = e + n,
          S = t[M],
          I = S == null ? void 0 : S.listId
        if (I && ((c = t[e - 1]) == null ? void 0 : c.listId) !== I) {
          let F = M
          for (; F < t.length; ) {
            const N = t[F]
            if (N.listId !== I || N.value === H) break
            delete N.listId, delete N.listType, delete N.listStyle, F++
          }
        }
        if (
          !i &&
          !this.isDesignMode() &&
          !this.control.getIsRangeWithinControl()
        ) {
          const F = (d = this.getTd()) == null ? void 0 : d.deletable
          let N = M - 1
          for (; N >= e; ) {
            const X = t[N]
            ;(((h = X == null ? void 0 : X.control) == null
              ? void 0
              : h.hide) ||
              ((u = X == null ? void 0 : X.area) == null ? void 0 : u.hide) ||
              (F !== !1 &&
                ((g = X == null ? void 0 : X.control) == null
                  ? void 0
                  : g.deletable) !== !1 &&
                (!X.controlId ||
                  this.mode !== a.EditorMode.FORM ||
                  !R[this.mode].controlDeletableDisabled) &&
                ((T = X == null ? void 0 : X.title) == null
                  ? void 0
                  : T.deletable) !== !1 &&
                (r.deletable !== !1 ||
                  !((P = X.groupIds) == null ? void 0 : P.length)) &&
                (((O = X == null ? void 0 : X.area) == null
                  ? void 0
                  : O.deletable) !== !1 ||
                  (X == null ? void 0 : X.areaIndex) !== 0))) &&
              t.splice(N, 1),
              N--
          }
        } else t.splice(e, n)
      }
      if (o == null ? void 0 : o.length)
        for (let M = 0; M < o.length; M++) t.splice(e + M, 0, o[M])
    }
    getCanvasEvent() {
      return this.canvasEvent
    }
    getGlobalEvent() {
      return this.globalEvent
    }
    getListener() {
      return this.listener
    }
    getEventBus() {
      return this.eventBus
    }
    getOverride() {
      return this.override
    }
    getCursor() {
      return this.cursor
    }
    getPreviewer() {
      return this.previewer
    }
    getImageParticle() {
      return this.imageParticle
    }
    getTableTool() {
      return this.tableTool
    }
    getTableOperate() {
      return this.tableOperate
    }
    getTableParticle() {
      return this.tableParticle
    }
    getHeader() {
      return this.header
    }
    getFooter() {
      return this.footer
    }
    getHyperlinkParticle() {
      return this.hyperlinkParticle
    }
    getDateParticle() {
      return this.dateParticle
    }
    getListParticle() {
      return this.listParticle
    }
    getCheckboxParticle() {
      return this.checkboxParticle
    }
    getRadioParticle() {
      return this.radioParticle
    }
    getControl() {
      return this.control
    }
    getWorkerManager() {
      return this.workerManager
    }
    getImageObserver() {
      return this.imageObserver
    }
    getI18n() {
      return this.i18n
    }
    getRowCount() {
      return this.getRowList().length
    }
    async getDataURL(t = {}) {
      const { pixelRatio: e, mode: n } = t
      e && this.setPagePixelRatio(e)
      const o = this.mode,
        s = !!n && o !== n
      s && this.setMode(n),
        this.render({
          isLazy: !1,
          isCompute: !1,
          isSetCursor: !1,
          isSubmitHistory: !1
        }),
        await this.imageObserver.allSettled()
      const i = this.pageList.map(r => r.toDataURL())
      return e && this.setPagePixelRatio(null), s && this.setMode(o), i
    }
    getPainterStyle() {
      return this.painterStyle && Object.keys(this.painterStyle).length
        ? this.painterStyle
        : null
    }
    getPainterOptions() {
      return this.painterOptions
    }
    setPainterStyle(t, e) {
      ;(this.painterStyle = t),
        (this.painterOptions = e || null),
        this.getPainterStyle() &&
          this.pageList.forEach(n => (n.style.cursor = 'copy'))
    }
    setDefaultRange() {
      !this.elementList.length ||
        setTimeout(() => {
          const t = this.elementList.length - 1
          this.range.setRange(t, t), this.range.setRangeStyle()
        })
    }
    getIsPagingMode() {
      return this.options.pageMode === a.PageMode.PAGING
    }
    setPageMode(t) {
      if (!t || this.options.pageMode === t) return
      if (((this.options.pageMode = t), t === a.PageMode.PAGING)) {
        const { height: o } = this.options,
          s = this.getPagePixelRatio(),
          i = this.pageList[0]
        ;(i.style.height = `${o}px`),
          (i.height = o * s),
          this._initPageContext(this.ctxList[0])
      } else
        this._disconnectLazyRender(),
          this.header.recovery(),
          this.footer.recovery(),
          this.zone.setZone(a.EditorZone.MAIN)
      const { startIndex: e } = this.range.getRange(),
        n = this.range.getIsCollapsed()
      this.render({ isSetCursor: !0, curIndex: e, isSubmitHistory: !1 }),
        n || this.cursor.drawCursor({ isShow: !1 }),
        setTimeout(() => {
          this.listener.pageModeChange && this.listener.pageModeChange(t),
            this.eventBus.isSubscribe('pageModeChange') &&
              this.eventBus.emit('pageModeChange', t)
        })
    }
    setPageScale(t) {
      const e = this.getPagePixelRatio()
      this.options.scale = t
      const n = this.getWidth(),
        o = this.getHeight()
      ;(this.container.style.width = `${n}px`),
        this.pageList.forEach((i, r) => {
          ;(i.width = n * e),
            (i.height = o * e),
            (i.style.width = `${n}px`),
            (i.style.height = `${o}px`),
            (i.style.marginBottom = `${this.getPageGap()}px`),
            this._initPageContext(this.ctxList[r])
        })
      const s = this.position.getCursorPosition()
      this.render({
        isSubmitHistory: !1,
        isSetCursor: !!s,
        curIndex: s == null ? void 0 : s.index
      }),
        this.listener.pageScaleChange && this.listener.pageScaleChange(t),
        this.eventBus.isSubscribe('pageScaleChange') &&
          this.eventBus.emit('pageScaleChange', t)
    }
    getPagePixelRatio() {
      return this.pagePixelRatio || window.devicePixelRatio
    }
    setPagePixelRatio(t) {
      ;(!this.pagePixelRatio && t === window.devicePixelRatio) ||
        t === this.pagePixelRatio ||
        ((this.pagePixelRatio = t), this.setPageDevicePixel())
    }
    setPageDevicePixel() {
      const t = this.getPagePixelRatio(),
        e = this.getWidth(),
        n = this.getHeight()
      this.pageList.forEach((o, s) => {
        ;(o.width = e * t),
          (o.height = n * t),
          this._initPageContext(this.ctxList[s])
      }),
        this.render({ isSubmitHistory: !1, isSetCursor: !1 })
    }
    setPaperSize(t, e) {
      ;(this.options.width = t), (this.options.height = e)
      const n = this.getPagePixelRatio(),
        o = this.getWidth(),
        s = this.getHeight()
      ;(this.container.style.width = `${o}px`),
        this.pageList.forEach((i, r) => {
          ;(i.width = o * n),
            (i.height = s * n),
            (i.style.width = `${o}px`),
            (i.style.height = `${s}px`),
            this._initPageContext(this.ctxList[r])
        }),
        this.render({ isSubmitHistory: !1, isSetCursor: !1 })
    }
    setPaperDirection(t) {
      const e = this.getPagePixelRatio()
      this.options.paperDirection = t
      const n = this.getWidth(),
        o = this.getHeight()
      ;(this.container.style.width = `${n}px`),
        this.pageList.forEach((s, i) => {
          ;(s.width = n * e),
            (s.height = o * e),
            (s.style.width = `${n}px`),
            (s.style.height = `${o}px`),
            this._initPageContext(this.ctxList[i])
        }),
        this.render({ isSubmitHistory: !1, isSetCursor: !1 })
    }
    setPaperMargin(t) {
      ;(this.options.margins = t),
        this.render({ isSubmitHistory: !1, isSetCursor: !1 })
    }
    getOriginValue(t = {}) {
      const { pageNo: e } = t
      let n = this.elementList
      return (
        Number.isInteger(e) &&
          e >= 0 &&
          e < this.pageRowList.length &&
          (n = this.pageRowList[e].flatMap(s => s.elementList)),
        {
          header: this.getHeaderElementList(),
          main: n,
          footer: this.getFooterElementList()
        }
      )
    }
    getValue(t = {}) {
      const e = this.getOriginValue(t),
        { extraPickAttrs: n } = t,
        o = {
          header: z(e.header, { extraPickAttrs: n }),
          main: z(e.main, { extraPickAttrs: n, isClassifyArea: !0 }),
          footer: z(e.footer, { extraPickAttrs: n })
        }
      return { version: Ft, data: o, options: k(this.options) }
    }
    setValue(t, e) {
      const { header: n, main: o, footer: s } = k(t)
      if (!n && !o && !s) return
      const { isSetCursor: i = !1 } = e || {}
      ;[n, o, s].forEach(c => {
        !c || St(c, { editorOptions: this.options, isForceCompensation: !0 })
      }),
        this.setEditorData({ header: n, main: o, footer: s }),
        this.historyManager.recovery()
      const R = i
        ? (o == null ? void 0 : o.length)
          ? o.length - 1
          : 0
        : void 0
      R !== void 0 && this.range.setRange(R, R),
        this.render({ curIndex: R, isSetCursor: i, isFirstRender: !0 })
    }
    setEditorData(t) {
      const { header: e, main: n, footer: o } = t
      e && this.header.setElementList(e),
        n && (this.elementList = n),
        o && this.footer.setElementList(o)
    }
    _wrapContainer(t) {
      const e = document.createElement('div')
      return t.append(e), e
    }
    _formatContainer() {
      ;(this.container.style.position = 'relative'),
        (this.container.style.width = `${this.getWidth()}px`),
        this.container.setAttribute(_t, a.EditorComponent.MAIN)
    }
    _createPageContainer() {
      const t = document.createElement('div')
      return t.classList.add(`${x}-page-container`), this.container.append(t), t
    }
    _createPage(t) {
      const e = this.getWidth(),
        n = this.getHeight(),
        o = document.createElement('canvas')
      ;(o.style.width = `${e}px`),
        (o.style.height = `${n}px`),
        (o.style.display = 'block'),
        (o.style.backgroundColor = '#ffffff'),
        (o.style.marginBottom = `${this.getPageGap()}px`),
        o.setAttribute('data-index', String(t)),
        this.pageContainer.append(o)
      const s = this.getPagePixelRatio()
      ;(o.width = e * s), (o.height = n * s), (o.style.cursor = 'text')
      const i = o.getContext('2d')
      this._initPageContext(i), this.pageList.push(o), this.ctxList.push(i)
    }
    _initPageContext(t) {
      const e = this.getPagePixelRatio()
      t.scale(e, e),
        (t.letterSpacing = '0px'),
        (t.wordSpacing = '0px'),
        (t.direction = 'ltr')
    }
    getElementFont(t, e = 1) {
      const { defaultSize: n, defaultFont: o } = this.options,
        s = t.font || o,
        i = t.actualSize || t.size || n
      return `${t.italic ? 'italic ' : ''}${t.bold ? 'bold ' : ''}${i * e}px ${s}`
    }
    getElementSize(t) {
      return t.actualSize || t.size || this.options.defaultSize
    }
    getElementRowMargin(t) {
      var s
      const {
        defaultBasicRowMarginHeight: e,
        defaultRowMargin: n,
        scale: o
      } = this.options
      return e * ((s = t.rowMargin) != null ? s : n) * o
    }
    computeRowList(t) {
      var V,
        W,
        p,
        U,
        m,
        y,
        K,
        b,
        w,
        G,
        tt,
        Rt,
        ft,
        et,
        ot,
        Pt,
        gt,
        $,
        nt,
        Mt,
        At
      const {
          innerWidth: e,
          elementList: n,
          isPagingMode: o = !1,
          isFromTable: s = !1,
          startX: i = 0,
          startY: r = 0,
          pageHeight: R = 0,
          mainOuterHeight: c = 0,
          surroundElementList: d = []
        } = t,
        {
          defaultSize: h,
          defaultRowMargin: u,
          scale: g,
          table: { tdPadding: T, defaultTrMinHeight: P },
          defaultTabWidth: O
        } = this.options,
        M = this.getDefaultBasicRowMarginHeight(),
        I = document.createElement('canvas').getContext('2d'),
        F = this.listParticle.computeListStyle(I, n),
        N = []
      n.length &&
        N.push({
          width: 0,
          height: 0,
          ascent: 0,
          elementList: [],
          startIndex: 0,
          rowIndex: 0,
          rowFlex:
            ((V = n == null ? void 0 : n[0]) == null ? void 0 : V.rowFlex) ||
            ((W = n == null ? void 0 : n[1]) == null ? void 0 : W.rowFlex)
        })
      let X = i,
        f = r,
        Q = 0,
        Z,
        D = 0,
        Y = 0
      for (let at = 0; at < n.length; at++) {
        const j = N[N.length - 1],
          E = n[at],
          Ct = M * ((p = E.rowMargin) != null ? p : u),
          J = {
            width: 0,
            height: 0,
            boundingBoxAscent: 0,
            boundingBoxDescent: 0
          },
          Me = j.offsetX || (E.listId && F.get(E.listId)) || 0,
          Xt = e - Me,
          ri = j.elementList.length === 1
        if (
          ((X += ri ? Me : 0),
          (f += (ri && j.offsetY) || 0),
          (((U = E.control) == null ? void 0 : U.hide) ||
            ((m = E.area) == null ? void 0 : m.hide)) &&
            !this.isDesignMode())
        )
          J.height =
            ((y = j.elementList[j.elementList.length - 1]) == null
              ? void 0
              : y.metrics.height) || this.options.defaultSize * g
        else if (
          E.type === a.ElementType.IMAGE ||
          E.type === a.ElementType.LATEX
        ) {
          if (
            E.imgDisplay === a.ImageDisplay.SURROUND ||
            E.imgDisplay === a.ImageDisplay.FLOAT_TOP ||
            E.imgDisplay === a.ImageDisplay.FLOAT_BOTTOM
          )
            (J.width = 0), (J.height = 0), (J.boundingBoxDescent = 0)
          else {
            const q = E.width * g,
              ut = E.height * g
            if (q > Xt) {
              const it = (ut * Xt) / q
              ;(E.width = Xt / g),
                (E.height = it / g),
                (J.width = Xt),
                (J.height = it),
                (J.boundingBoxDescent = it)
            } else (J.width = q), (J.height = ut), (J.boundingBoxDescent = ut)
          }
          J.boundingBoxAscent = 0
        } else if (E.type === a.ElementType.TABLE) {
          const q = T[1] + T[3],
            ut = T[0] + T[2]
          if (E.pagingId) {
            let st = at + 1,
              Ot = 0
            for (; st < n.length; ) {
              const lt = n[st]
              if (lt.pagingId === E.pagingId) {
                const rt = lt.trList.filter(Yt => !Yt.pagingRepeat)
                E.trList.push(...rt), (E.height += lt.height), st++, Ot++
              } else break
            }
            Ot && n.splice(at + 1, Ot)
          }
          E.pagingIndex = (K = E.pagingIndex) != null ? K : 0
          const it = E.trList
          for (let st = 0; st < it.length; st++) {
            const Ot = it[st]
            ;(Ot.height = Ot.minHeight || P), (Ot.minHeight = Ot.height)
          }
          this.tableParticle.computeRowColInfo(E)
          for (let st = 0; st < it.length; st++) {
            const Ot = it[st]
            for (let lt = 0; lt < Ot.tdList.length; lt++) {
              const rt = Ot.tdList[lt],
                Yt = this.computeRowList({
                  innerWidth: (rt.width - q) * g,
                  elementList: rt.value,
                  isFromTable: !0,
                  isPagingMode: o
                }),
                ct = Yt.reduce((It, Kt) => It + Kt.height, 0)
              rt.rowList = Yt
              const Lt = ct / g + ut
              if (rt.height < Lt) {
                const It = Lt - rt.height,
                  Kt = it[st + rt.rowspan - 1]
                ;(Kt.height += It),
                  Kt.tdList.forEach(Jt => {
                    ;(Jt.height += It),
                      Jt.realHeight
                        ? (Jt.realHeight += It)
                        : (Jt.realHeight = Jt.height)
                  })
              }
              let Nt = 0,
                pt = 0,
                Wt = 0
              for (; Wt < rt.rowspan; ) {
                const It = it[Wt + st] || it[st]
                ;(Nt += It.minHeight), (pt += It.height), Wt++
              }
              ;(rt.realMinHeight = Nt),
                (rt.realHeight = pt),
                (rt.mainHeight = Lt)
            }
          }
          const mt = this.tableParticle.getTrListGroupByCol(it)
          for (let st = 0; st < mt.length; st++) {
            const Ot = mt[st]
            let lt = -1
            for (let rt = 0; rt < Ot.tdList.length; rt++) {
              const Yt = Ot.tdList[rt],
                ct = Yt.realHeight,
                Lt = Yt.mainHeight,
                Nt = Yt.realMinHeight,
                pt = Lt < Nt ? ct - Nt : ct - Lt
              ;(!~lt || pt < lt) && (lt = pt)
            }
            if (lt > 0) {
              const rt = it[st]
              ;(rt.height -= lt),
                rt.tdList.forEach(Yt => {
                  ;(Yt.height -= lt), (Yt.realHeight -= lt)
                })
            }
          }
          this.tableParticle.computeRowColInfo(E)
          const Oe = this.tableParticle.getTableHeight(E),
            ui = this.tableParticle.getTableWidth(E)
          ;(E.width = ui), (E.height = Oe)
          const dr = ui * g,
            Rn = Oe * g
          if (
            ((J.width = dr),
            (J.height = Rn),
            (J.boundingBoxDescent = Rn),
            (J.boundingBoxAscent = -Ct),
            ((b = n[at + 1]) == null ? void 0 : b.type) ===
              a.ElementType.TABLE && (J.boundingBoxAscent -= Ct),
            o)
          ) {
            const st = this.getHeight(),
              Ot = this.getMainOuterHeight()
            let lt = Ot
            for (let ct = 0; ct < N.length; ct++) {
              const Lt = N[ct],
                Nt = Lt.offsetY || 0
              Lt.height + lt + Nt > st ||
              ((w = N[ct - 1]) == null ? void 0 : w.isPageBreak)
                ? (lt = Ot + Lt.height + Nt)
                : (lt += Lt.height + Nt)
            }
            const rt = Ct * 2 * g,
              Yt = E.trList[0].height * g
            if (
              ((lt + Yt + rt > st ||
                (E.pagingIndex !== 0 && E.trList[0].pagingRepeat)) &&
                (lt = Ot),
              lt + rt + Rn > st)
            ) {
              const ct = E.trList
              let Lt = 0,
                Nt = 0,
                pt = 0
              if (ct.length > 1)
                for (let Wt = 0; Wt < ct.length; Wt++) {
                  const It = ct[Wt],
                    Kt = It.height * g
                  if (lt + rt + pt + Kt > st) {
                    const Jt = It.tdList.reduce((te, pe) => te + pe.colspan, 0)
                    ;((G = E.colgroup) == null ? void 0 : G.length) !== Jt &&
                      (Nt = 0)
                    break
                  } else (Lt = Wt + 1), (Nt = ct.length - Lt), (pt += Kt)
                }
              if (Nt) {
                const Wt = ct.splice(Lt, Nt),
                  It = Wt.reduce((he, an) => he + an.height, 0),
                  Kt = It * g,
                  Jt = E.pagingId || A()
                ;(E.pagingId = Jt),
                  (E.height -= It),
                  (J.height -= Kt),
                  (J.boundingBoxDescent -= Kt)
                const te = k(E)
                ;(te.pagingId = Jt), (te.pagingIndex = E.pagingIndex + 1)
                const pe = ct.filter(he => he.pagingRepeat)
                if (pe.length) {
                  const he = k(pe)
                  he.forEach(an => (an.id = A())), Wt.unshift(...he)
                }
                ;(te.trList = Wt),
                  (te.id = A()),
                  this.spliceElementList(n, at + 1, 0, [te])
              }
            }
            if (E.pagingId) {
              const ct = this.position.getPositionContext()
              if (ct.isTable) {
                let Lt = -1,
                  Nt = -1,
                  pt = at
                for (; pt < n.length; ) {
                  const Wt = n[pt]
                  if (Wt.pagingId !== E.pagingId) break
                  const It = Wt.trList.findIndex(Kt => Kt.id === ct.trId)
                  if (~It) {
                    ;(Lt = pt), (Nt = It)
                    break
                  }
                  pt++
                }
                ~Lt &&
                  ((ct.index = Lt),
                  (ct.trIndex = Nt),
                  this.position.setPositionContext(ct))
              }
            }
          }
        } else if (E.type === a.ElementType.SEPARATOR) {
          const {
            separator: { lineWidth: q }
          } = this.options
          ;(E.width = Xt / g),
            (J.width = Xt),
            (J.height = q * g),
            (J.boundingBoxAscent = -Ct),
            (J.boundingBoxDescent = -Ct + J.height)
        } else if (E.type === a.ElementType.PAGE_BREAK)
          (E.width = Xt / g), (J.width = Xt), (J.height = h)
        else if (
          E.type === a.ElementType.RADIO ||
          E.controlComponent === a.ControlComponent.RADIO
        ) {
          const { width: q, height: ut, gap: it } = this.options.radio,
            mt = q + it * 2
          ;(E.width = mt), (J.width = mt * g), (J.height = ut * g)
        } else if (
          E.type === a.ElementType.CHECKBOX ||
          E.controlComponent === a.ControlComponent.CHECKBOX
        ) {
          const { width: q, height: ut, gap: it } = this.options.checkbox,
            mt = q + it * 2
          ;(E.width = mt), (J.width = mt * g), (J.height = ut * g)
        } else if (E.type === a.ElementType.TAB)
          (J.width = O * g),
            (J.height = h * g),
            (J.boundingBoxDescent = 0),
            (J.boundingBoxAscent = J.height)
        else if (E.type === a.ElementType.BLOCK) {
          if (!E.width) J.width = Xt
          else {
            const q = E.width * g
            J.width = Math.min(q, Xt)
          }
          ;(J.height = E.height * g),
            (J.boundingBoxDescent = J.height),
            (J.boundingBoxAscent = 0)
        } else {
          const q = E.size || h
          ;(E.type === a.ElementType.SUPERSCRIPT ||
            E.type === a.ElementType.SUBSCRIPT) &&
            (E.actualSize = Math.ceil(q * 0.6)),
            (J.height = (E.actualSize || q) * g),
            (I.font = this.getElementFont(E))
          const ut = this.textParticle.measureText(I, E)
          ;(J.width = ut.width * g),
            E.letterSpacing && (J.width += E.letterSpacing * g),
            (J.boundingBoxAscent =
              (E.value === H ? E.size || h : ut.actualBoundingBoxAscent) * g),
            (J.boundingBoxDescent = ut.actualBoundingBoxDescent * g),
            E.type === a.ElementType.SUPERSCRIPT
              ? (J.boundingBoxAscent += J.height / 2)
              : E.type === a.ElementType.SUBSCRIPT &&
                (J.boundingBoxDescent += J.height / 2)
        }
        const Ri =
            (E.imgDisplay !== a.ImageDisplay.INLINE &&
              E.type === a.ElementType.IMAGE) ||
            E.type === a.ElementType.LATEX
              ? J.height + Ct
              : J.boundingBoxAscent + Ct,
          de = Ct + J.boundingBoxAscent + J.boundingBoxDescent + Ct,
          Et = Object.assign(E, {
            metrics: J,
            left: 0,
            style: this.getElementFont(E, g)
          })
        ;((tt = Et.control) == null ? void 0 : tt.minWidth) &&
          (Et.controlComponent && (Y += J.width),
          Et.controlComponent === a.ControlComponent.POSTFIX &&
            (this.control.setMinWidthControlInfo({
              row: j,
              rowElement: Et,
              availableWidth: Xt,
              controlRealWidth: Y
            }),
            (Y = 0)))
        const _ = n[at - 1]
        let ai = n[at + 1],
          Ye = j.width + J.width
        if (
          this.options.wordBreak === a.WordBreak.BREAK_WORD &&
          (!(_ == null ? void 0 : _.type) ||
            (_ == null ? void 0 : _.type) === a.ElementType.TEXT) &&
          (!E.type || E.type === a.ElementType.TEXT)
        ) {
          const q = `${(_ == null ? void 0 : _.value) || ''}${E.value}`
          if (this.WORD_LIKE_REG.test(q)) {
            const { width: it, endElement: mt } = this.textParticle.measureWord(
                I,
                n,
                at
              ),
              Oe = it * g
            Oe <= Xt && ((Ye += Oe), (ai = mt))
          }
          Ye += this.textParticle.measurePunctuationWidth(I, ai) * g
        }
        E.listId &&
          (E.listId !== Z ? (D = 0) : E.value === H && !E.listWrap && D++),
          (Z = E.listId)
        const ci = this.position.setSurroundPosition({
          pageNo: Q,
          rowElement: Et,
          row: j,
          rowElementRect: { x: X, y: f, height: de, width: J.width },
          availableWidth: Xt,
          surroundElementList: d
        })
        ;(X = ci.x), (Ye += ci.rowIncreaseWidth), (X += J.width)
        const di =
            E.type === a.ElementType.SEPARATOR ||
            E.type === a.ElementType.TABLE ||
            (_ == null ? void 0 : _.type) === a.ElementType.TABLE ||
            (_ == null ? void 0 : _.type) === a.ElementType.BLOCK ||
            E.type === a.ElementType.BLOCK ||
            (_ == null ? void 0 : _.imgDisplay) === a.ImageDisplay.INLINE ||
            E.imgDisplay === a.ImageDisplay.INLINE ||
            (_ == null ? void 0 : _.listId) !== E.listId ||
            ((_ == null ? void 0 : _.areaId) !== E.areaId &&
              !((Rt = E.area) == null ? void 0 : Rt.hide)) ||
            (((ft = E.control) == null ? void 0 : ft.flexDirection) ===
              a.FlexDirection.COLUMN &&
              (E.controlComponent === a.ControlComponent.CHECKBOX ||
                E.controlComponent === a.ControlComponent.RADIO) &&
              (_ == null ? void 0 : _.controlComponent) ===
                a.ControlComponent.VALUE) ||
            (at !== 0 &&
              E.value === H &&
              !((et = E.area) == null ? void 0 : et.hide)),
          hi = Ye > Xt,
          rn = di || hi
        if (rn) {
          const q = {
            width: J.width,
            height: de,
            startIndex: at,
            elementList: [Et],
            ascent: Ri,
            rowIndex: j.rowIndex + 1,
            rowFlex:
              ((ot = n[at]) == null ? void 0 : ot.rowFlex) ||
              ((Pt = n[at + 1]) == null ? void 0 : Pt.rowFlex),
            isPageBreak: E.type === a.ElementType.PAGE_BREAK
          }
          if (
            Et.controlComponent !== a.ControlComponent.PREFIX &&
            ((gt = Et.control) == null ? void 0 : gt.indentation) ===
              a.ControlIndentation.VALUE_START
          ) {
            const ut = j.elementList.findIndex(
              it =>
                it.controlId === Et.controlId &&
                it.controlComponent !== a.ControlComponent.PREFIX
            )
            if (~ut) {
              const mt = this.position.computeRowPosition({
                row: j,
                innerWidth: this.getInnerWidth()
              })[ut]
              mt && (q.offsetX = mt.coordinate.leftTop[0])
            }
          }
          E.listId &&
            ((q.isList = !0), (q.offsetX = F.get(E.listId)), (q.listIndex = D)),
            (q.offsetY =
              !s &&
              (($ = E.area) == null ? void 0 : $.top) &&
              E.areaId !== ((nt = n[at - 1]) == null ? void 0 : nt.areaId)
                ? E.area.top * g
                : 0),
            N.push(q)
        } else
          (j.width += J.width),
            at === 0 &&
            (re(n[1]) || !!((Mt = n[1]) == null ? void 0 : Mt.areaId))
              ? ((j.height = M), (j.ascent = M))
              : j.height < de && ((j.height = de), (j.ascent = Ri)),
            j.elementList.push(Et)
        if (
          (rn || at === n.length - 1) &&
          ((j.isWidthNotEnough = hi && !di),
          !j.isSurround &&
            ((_ == null ? void 0 : _.rowFlex) === a.RowFlex.JUSTIFY ||
              ((_ == null ? void 0 : _.rowFlex) === a.RowFlex.ALIGNMENT &&
                j.isWidthNotEnough)))
        ) {
          const q =
              ((At = j.elementList[0]) == null ? void 0 : At.value) === H
                ? j.elementList.slice(1)
                : j.elementList,
            ut = (Xt - j.width) / (q.length - 1)
          for (let it = 0; it < q.length - 1; it++) {
            const mt = q[it]
            mt.metrics.width += ut
          }
          j.width = Xt
        }
        if (rn) {
          ;(X = i),
            (f += j.height),
            o &&
              !s &&
              R &&
              (f - r + c + de > R || E.type === a.ElementType.PAGE_BREAK) &&
              ((f = r), Fo(d, Q), (Q += 1)),
            (Et.left = 0)
          const q = N[N.length - 1]
          ;(X = this.position.setSurroundPosition({
            pageNo: Q,
            rowElement: Et,
            row: q,
            rowElementRect: { x: X, y: f, height: de, width: J.width },
            availableWidth: Xt,
            surroundElementList: d
          }).x),
            (X += J.width)
        }
      }
      return N
    }
    _computePageList() {
      var R
      const t = [[]],
        {
          pageMode: e,
          pageNumber: { maxPageNo: n }
        } = this.options,
        o = this.getHeight(),
        s = this.getMainOuterHeight()
      let i = s,
        r = 0
      if (e === a.PageMode.CONTINUITY) {
        ;(t[0] = this.rowList),
          (i += this.rowList.reduce(
            (u, g) => u + g.height + (g.offsetY || 0),
            0
          ))
        const c = this.getPagePixelRatio(),
          d = this.pageList[0],
          h = Number(d.style.height.replace('px', ''))
        if (i > h) (d.style.height = `${i}px`), (d.height = i * c)
        else {
          const u = i < o ? o : i
          ;(d.style.height = `${u}px`), (d.height = u * c)
        }
        this._initPageContext(this.ctxList[0])
      } else
        for (let c = 0; c < this.rowList.length; c++) {
          const d = this.rowList[c],
            h = d.offsetY || 0
          if (
            d.height + h + i > o ||
            ((R = this.rowList[c - 1]) == null ? void 0 : R.isPageBreak)
          ) {
            if (Number.isInteger(n) && r >= n) {
              this.elementList = this.elementList.slice(0, d.startIndex)
              break
            }
            ;(i = s + d.height + h), t.push([d]), r++
          } else (i += d.height + h), t[r].push(d)
        }
      return t
    }
    _drawHighlight(t, e) {
      const { rowList: n, positionList: o, elementList: s } = e
      for (let i = 0; i < n.length; i++) {
        const r = n[i]
        for (let R = 0; R < r.elementList.length; R++) {
          const c = r.elementList[R],
            d = r.elementList[R - 1],
            h =
              c.highlight ||
              this.control.getControlHighlight(s, r.startIndex + R)
          if (h) {
            d &&
              d.highlight &&
              d.highlight !== c.highlight &&
              this.highlight.render(t)
            const {
                coordinate: {
                  leftTop: [u, g]
                }
              } = o[r.startIndex + R],
              T = c.left || 0
            this.highlight.recordFillInfo(
              t,
              u - T,
              g,
              c.metrics.width + T,
              r.height,
              h
            )
          } else (d == null ? void 0 : d.highlight) && this.highlight.render(t)
        }
        this.highlight.render(t)
      }
    }
    drawRow(t, e) {
      var S, I, F, N, X, f, Q, Z, D
      this._drawHighlight(t, e)
      const {
          scale: n,
          table: { tdPadding: o },
          group: s,
          lineBreak: i
        } = this.options,
        {
          rowList: r,
          pageNo: R,
          elementList: c,
          positionList: d,
          startIndex: h,
          zone: u,
          isDrawLineBreak: g = !i.disabled
        } = e,
        T = this.mode === a.EditorMode.PRINT,
        { isCrossRowCol: P, tableId: O } = this.range.getRange()
      let M = h
      for (let Y = 0; Y < r.length; Y++) {
        const V = r[Y],
          W = { x: 0, y: 0, width: 0, height: 0 }
        let p = null
        for (let U = 0; U < V.elementList.length; U++) {
          const m = V.elementList[U],
            y = m.metrics,
            {
              ascent: K,
              coordinate: {
                leftTop: [b, w]
              }
            } = d[V.startIndex + U],
            G = V.elementList[U - 1]
          if (
            (((S = m.control) == null ? void 0 : S.hide) ||
              ((I = m.area) == null ? void 0 : I.hide)) &&
            !this.isDesignMode()
          )
            this.textParticle.complete()
          else if (m.type === a.ElementType.IMAGE)
            this.textParticle.complete(),
              m.imgDisplay !== a.ImageDisplay.SURROUND &&
                m.imgDisplay !== a.ImageDisplay.FLOAT_TOP &&
                m.imgDisplay !== a.ImageDisplay.FLOAT_BOTTOM &&
                this.imageParticle.render(t, m, b, w + K)
          else if (m.type === a.ElementType.LATEX)
            this.textParticle.complete(),
              this.laTexParticle.render(t, m, b, w + K)
          else if (m.type === a.ElementType.TABLE)
            P && ((W.x = b), (W.y = w), (p = m)),
              this.tableParticle.render(t, m, b, w)
          else if (m.type === a.ElementType.HYPERLINK)
            this.textParticle.complete(),
              this.hyperlinkParticle.render(t, m, b, w + K)
          else if (m.type === a.ElementType.DATE) {
            const et = V.elementList[U + 1]
            ;(!G || G.dateId !== m.dateId) && this.textParticle.complete(),
              this.textParticle.record(t, m, b, w + K),
              (!et || et.dateId !== m.dateId) && this.textParticle.complete()
          } else
            m.type === a.ElementType.SUPERSCRIPT
              ? (this.textParticle.complete(),
                this.superscriptParticle.render(t, m, b, w + K))
              : m.type === a.ElementType.SUBSCRIPT
                ? (this.underline.render(t),
                  this.textParticle.complete(),
                  this.subscriptParticle.render(t, m, b, w + K))
                : m.type === a.ElementType.SEPARATOR
                  ? this.separatorParticle.render(t, m, b, w)
                  : m.type === a.ElementType.PAGE_BREAK
                    ? this.mode !== a.EditorMode.CLEAN &&
                      !T &&
                      this.pageBreakParticle.render(t, m, b, w)
                    : m.type === a.ElementType.CHECKBOX ||
                        m.controlComponent === a.ControlComponent.CHECKBOX
                      ? (this.textParticle.complete(),
                        this.checkboxParticle.render({
                          ctx: t,
                          x: b,
                          y: w + K,
                          index: U,
                          row: V
                        }))
                      : m.type === a.ElementType.RADIO ||
                          m.controlComponent === a.ControlComponent.RADIO
                        ? (this.textParticle.complete(),
                          this.radioParticle.render({
                            ctx: t,
                            x: b,
                            y: w + K,
                            index: U,
                            row: V
                          }))
                        : m.type === a.ElementType.TAB
                          ? this.textParticle.complete()
                          : m.rowFlex === a.RowFlex.ALIGNMENT ||
                              m.rowFlex === a.RowFlex.JUSTIFY
                            ? (this.textParticle.record(t, m, b, w + K),
                              this.textParticle.complete())
                            : m.type === a.ElementType.BLOCK
                              ? (this.textParticle.complete(),
                                this.blockParticle.render(R, m, b, w))
                              : (m.left && this.textParticle.complete(),
                                this.textParticle.record(t, m, b, w + K),
                                (m.width ||
                                  m.letterSpacing ||
                                  Si.test(m.value)) &&
                                  this.textParticle.complete())
          if (
            (g &&
              !T &&
              this.mode !== a.EditorMode.CLEAN &&
              !V.isWidthNotEnough &&
              U === V.elementList.length - 1 &&
              this.lineBreakParticle.render(t, m, b, w + V.height / 2),
            (F = m.control) == null ? void 0 : F.border)
          ) {
            ;((N = G == null ? void 0 : G.control) == null
              ? void 0
              : N.border) &&
              G.controlId !== m.controlId &&
              this.control.drawBorder(t)
            const et = this.getElementRowMargin(m)
            this.control.recordBorderInfo(
              b,
              w + et,
              m.metrics.width,
              V.height - 2 * et
            )
          } else
            ((X = G == null ? void 0 : G.control) == null
              ? void 0
              : X.border) && this.control.drawBorder(t)
          if (m.underline || ((f = m.control) == null ? void 0 : f.underline)) {
            ;(G == null ? void 0 : G.type) === a.ElementType.SUBSCRIPT &&
              m.type !== a.ElementType.SUBSCRIPT &&
              this.underline.render(t)
            const et = this.getElementRowMargin(m),
              ot = m.left || 0
            let Pt = 0
            m.type === a.ElementType.SUBSCRIPT &&
              (Pt = this.subscriptParticle.getOffsetY(m))
            const gt = ((Q = m.control) == null ? void 0 : Q.underline)
              ? this.options.underlineColor
              : m.color
            this.underline.recordFillInfo(
              t,
              b - ot,
              w + V.height - et + Pt,
              y.width + ot,
              0,
              gt,
              (Z = m.textDecoration) == null ? void 0 : Z.style
            )
          } else
            ((G == null ? void 0 : G.underline) ||
              ((D = G == null ? void 0 : G.control) == null
                ? void 0
                : D.underline)) &&
              this.underline.render(t)
          if (m.strikeout) {
            if (!m.type || Qt.includes(m.type)) {
              G &&
                ((G.type === a.ElementType.SUBSCRIPT &&
                  m.type !== a.ElementType.SUBSCRIPT) ||
                  (G.type === a.ElementType.SUPERSCRIPT &&
                    m.type !== a.ElementType.SUPERSCRIPT) ||
                  this.getElementSize(G) !== this.getElementSize(m)) &&
                this.strikeout.render(t)
              const et = this.textParticle.measureBasisWord(
                t,
                this.getElementFont(m)
              )
              let ot = w + K + et.actualBoundingBoxDescent * n - y.height / 2
              m.type === a.ElementType.SUBSCRIPT
                ? (ot += this.subscriptParticle.getOffsetY(m))
                : m.type === a.ElementType.SUPERSCRIPT &&
                  (ot += this.superscriptParticle.getOffsetY(m)),
                this.strikeout.recordFillInfo(t, b, ot, y.width)
            }
          } else (G == null ? void 0 : G.strikeout) && this.strikeout.render(t)
          const {
            zone: tt,
            startIndex: Rt,
            endIndex: ft
          } = this.range.getRange()
          if (tt === u && Rt !== ft && Rt <= M && M <= ft) {
            const et = this.position.getPositionContext()
            if ((!et.isTable && !m.tdId) || et.tdId === m.tdId)
              if (Rt === M) {
                const ot = c[Rt + 1]
                ot &&
                  ot.value === H &&
                  ((W.x = b + y.width),
                  (W.y = w),
                  (W.height = V.height),
                  (W.width += this.options.rangeMinWidth))
              } else {
                let ot = y.width
                ot === 0 &&
                  V.elementList.length === 1 &&
                  (ot = this.options.rangeMinWidth),
                  W.width || ((W.x = b), (W.y = w), (W.height = V.height)),
                  (W.width += ot)
              }
          }
          if (
            (!s.disabled &&
              m.groupIds &&
              this.group.recordFillInfo(m, b, w, y.width, V.height),
            M++,
            m.type === a.ElementType.TABLE)
          ) {
            const et = o[1] + o[3]
            for (let ot = 0; ot < m.trList.length; ot++) {
              const Pt = m.trList[ot]
              for (let gt = 0; gt < Pt.tdList.length; gt++) {
                const $ = Pt.tdList[gt]
                this.drawRow(t, {
                  elementList: $.value,
                  positionList: $.positionList,
                  rowList: $.rowList,
                  pageNo: R,
                  startIndex: 0,
                  innerWidth: ($.width - et) * n,
                  zone: u,
                  isDrawLineBreak: g
                })
              }
            }
          }
        }
        if (
          (V.isList && this.listParticle.drawListStyle(t, V, d[V.startIndex]),
          this.textParticle.complete(),
          this.control.drawBorder(t),
          this.underline.render(t),
          this.strikeout.render(t),
          this.group.render(t),
          !T)
        ) {
          if (W.width && W.height) {
            const { x: U, y: m, width: y, height: K } = W
            this.range.render(t, U, m, y, K)
          }
          if (P && p && p.id === O) {
            const {
              coordinate: {
                leftTop: [U, m]
              }
            } = d[V.startIndex]
            this.tableParticle.drawRange(t, p, U, m)
          }
        }
      }
    }
    _drawFloat(t, e) {
      const { scale: n } = this.options,
        o = this.position.getFloatPositionList(),
        { imgDisplays: s, pageNo: i } = e
      for (let r = 0; r < o.length; r++) {
        const R = o[r],
          c = R.element
        if (
          (i === R.pageNo ||
            R.zone === a.EditorZone.HEADER ||
            R.zone == a.EditorZone.FOOTER) &&
          c.imgDisplay &&
          s.includes(c.imgDisplay) &&
          c.type === a.ElementType.IMAGE
        ) {
          const d = c.imgFloatPosition
          this.imageParticle.render(t, c, d.x * n, d.y * n)
        }
      }
    }
    _clearPage(t) {
      const e = this.ctxList[t],
        n = this.pageList[t]
      e.clearRect(
        0,
        0,
        Math.max(n.width, this.getWidth()),
        Math.max(n.height, this.getHeight())
      ),
        this.blockParticle.clear()
    }
    _drawPage(t) {
      var M, S
      const { elementList: e, positionList: n, rowList: o, pageNo: s } = t,
        {
          inactiveAlpha: i,
          pageMode: r,
          header: R,
          footer: c,
          pageNumber: d,
          lineNumber: h,
          pageBorder: u
        } = this.options,
        g = this.mode === a.EditorMode.PRINT,
        T = this.getInnerWidth(),
        P = this.ctxList[s]
      ;(P.globalAlpha = this.zone.isMainActive() ? 1 : i),
        this._clearPage(s),
        this.background.render(P, s),
        g || this.area.render(P, s),
        r !== a.PageMode.CONTINUITY &&
          this.options.watermark.data &&
          this.waterMark.render(P, s),
        g || this.margin.render(P, s),
        this._drawFloat(P, {
          pageNo: s,
          imgDisplays: [a.ImageDisplay.FLOAT_BOTTOM]
        }),
        g || this.control.renderHighlightList(P, s)
      const O = (M = o[0]) == null ? void 0 : M.startIndex
      this.drawRow(P, {
        elementList: e,
        positionList: n,
        rowList: o,
        pageNo: s,
        startIndex: O,
        innerWidth: T,
        zone: a.EditorZone.MAIN
      }),
        this.getIsPagingMode() &&
          (R.disabled || this.header.render(P, s),
          d.disabled || this.pageNumber.render(P, s),
          c.disabled || this.footer.render(P, s)),
        this._drawFloat(P, {
          pageNo: s,
          imgDisplays: [a.ImageDisplay.FLOAT_TOP, a.ImageDisplay.SURROUND]
        }),
        !g && this.search.getSearchKeyword() && this.search.render(P, s),
        this.elementList.length <= 1 &&
          !((S = this.elementList[0]) == null ? void 0 : S.listId) &&
          this.placeholder.render(P),
        h.disabled || this.lineNumber.render(P, s),
        u.disabled || this.pageBorder.render(P),
        this.badge.render(P, s)
    }
    _disconnectLazyRender() {
      var t
      ;(t = this.lazyRenderIntersectionObserver) == null || t.disconnect()
    }
    _lazyRender() {
      const t = this.position.getOriginalMainPositionList(),
        e = this.getOriginalMainElementList()
      this._disconnectLazyRender(),
        (this.lazyRenderIntersectionObserver = new IntersectionObserver(n => {
          n.forEach(o => {
            if (o.isIntersecting) {
              const s = Number(o.target.dataset.index)
              this._drawPage({
                elementList: e,
                positionList: t,
                rowList: this.pageRowList[s],
                pageNo: s
              })
            }
          })
        })),
        this.pageList.forEach(n => {
          this.lazyRenderIntersectionObserver.observe(n)
        })
    }
    _immediateRender() {
      const t = this.position.getOriginalMainPositionList(),
        e = this.getOriginalMainElementList()
      for (let n = 0; n < this.pageRowList.length; n++)
        this._drawPage({
          elementList: e,
          positionList: t,
          rowList: this.pageRowList[n],
          pageNo: n
        })
    }
    render(t) {
      this.renderCount++
      const { header: e, footer: n } = this.options,
        {
          isSubmitHistory: o = !0,
          isSetCursor: s = !0,
          isCompute: i = !0,
          isLazy: r = !0,
          isInit: R = !1,
          isSourceHistory: c = !1,
          isFirstRender: d = !1
        } = t || {}
      let { curIndex: h } = t || {}
      const u = this.getInnerWidth(),
        g = this.getIsPagingMode(),
        T = this.pageRowList.length
      if (i) {
        this.position.setFloatPositionList([]),
          g &&
            (e.disabled || this.header.compute(),
            n.disabled || this.footer.compute())
        const M = this.getMargins(),
          S = this.getHeight(),
          I = this.header.getExtraHeight(),
          F = this.getMainOuterHeight(),
          N = M[3],
          X = M[0] + I,
          f = Dn(this.elementList)
        if (
          ((this.rowList = this.computeRowList({
            startX: N,
            startY: X,
            pageHeight: S,
            mainOuterHeight: F,
            isPagingMode: g,
            innerWidth: u,
            surroundElementList: f,
            elementList: this.elementList
          })),
          (this.pageRowList = this._computePageList()),
          this.position.computePositionList(),
          this.area.compute(),
          this.mode !== a.EditorMode.PRINT)
        ) {
          const Q = this.search.getSearchKeyword()
          Q && this.search.compute(Q), this.control.computeHighlightList()
        }
      }
      this.imageObserver.clearAll(), this.cursor.recoveryCursor()
      for (let M = 0; M < this.pageRowList.length; M++)
        this.pageList[M] || this._createPage(M)
      const P = this.pageRowList.length,
        O = this.pageList.length
      if (O > P) {
        const M = O - P
        this.ctxList.splice(P, M),
          this.pageList.splice(P, M).forEach(S => S.remove())
      }
      r && g ? this._lazyRender() : this._immediateRender(),
        s
          ? (h = this.setCursor(h))
          : this.range.getIsSelection() && this.cursor.focus(),
        ((o && !d) || (h !== void 0 && this.historyManager.isStackEmpty())) &&
          this.submitHistory(h),
        Mn(() => {
          this.range.setRangeStyle(),
            i &&
              this.control.getActiveControl() &&
              this.control.reAwakeControl(),
            i &&
              !this.isReadonly() &&
              this.position.getPositionContext().isTable &&
              this.tableTool.render(),
            i && !this.zone.isMainActive() && this.zone.drawZoneIndicator(),
            T !== this.pageRowList.length &&
              (this.listener.pageSizeChange &&
                this.listener.pageSizeChange(this.pageRowList.length),
              this.eventBus.isSubscribe('pageSizeChange') &&
                this.eventBus.emit('pageSizeChange', this.pageRowList.length)),
            (o || c) &&
              !R &&
              (this.listener.contentChange && this.listener.contentChange(),
              this.eventBus.isSubscribe('contentChange') &&
                this.eventBus.emit('contentChange'))
        })
    }
    setCursor(t) {
      var s
      const e = this.position.getPositionContext(),
        n = this.position.getPositionList()
      if (e.isTable) {
        const { index: i, trIndex: r, tdIndex: R } = e,
          d =
            (s = this.getOriginalElementList()[i].trList) == null
              ? void 0
              : s[r].tdList[R].positionList
        t === void 0 && d && (t = d.length - 1)
        const h = d == null ? void 0 : d[t]
        this.position.setCursorPosition(h || null)
      } else this.position.setCursorPosition(t !== void 0 ? n[t] : null)
      let o = !0
      if (t !== void 0 && e.isImage && e.isDirectHit) {
        const r = this.getElementList()[t]
        if (Ki.includes(r.type)) {
          o = !1
          const R = this.position.getCursorPosition()
          this.previewer.updateResizer(r, R)
        }
      }
      return this.cursor.drawCursor({ isShow: o }), t
    }
    submitHistory(t) {
      const e = this.position.getPositionContext(),
        n = _e(this.elementList),
        o = _e(this.header.getElementList()),
        s = _e(this.footer.getElementList()),
        i = k(this.range.getRange()),
        r = this.pageNo,
        R = k(e),
        c = this.zone.getZone()
      this.historyManager.execute(() => {
        this.zone.setZone(c),
          this.setPageNo(r),
          this.position.setPositionContext(k(R)),
          this.header.setElementList(k(o)),
          this.footer.setElementList(k(s)),
          (this.elementList = k(n)),
          this.range.replaceRange(k(i)),
          this.render({ curIndex: t, isSubmitHistory: !1, isSourceHistory: !0 })
      })
    }
    destroy() {
      this.container.remove(),
        this.globalEvent.removeEvent(),
        this.scrollObserver.removeEvent(),
        this.selectionObserver.removeEvent()
    }
    clearSideEffect() {
      this.getPreviewer().clearResizer(),
        this.getTableTool().dispose(),
        this.getHyperlinkParticle().clearHyperlinkPopup(),
        this.getDateParticle().clearDatePicker()
    }
  }
  class oi {
    constructor(t) {
      L(this, 'executeMode')
      L(this, 'executeCut')
      L(this, 'executeCopy')
      L(this, 'executePaste')
      L(this, 'executeSelectAll')
      L(this, 'executeBackspace')
      L(this, 'executeSetRange')
      L(this, 'executeReplaceRange')
      L(this, 'executeSetPositionContext')
      L(this, 'executeForceUpdate')
      L(this, 'executeBlur')
      L(this, 'executeUndo')
      L(this, 'executeRedo')
      L(this, 'executePainter')
      L(this, 'executeApplyPainterStyle')
      L(this, 'executeFormat')
      L(this, 'executeFont')
      L(this, 'executeSize')
      L(this, 'executeSizeAdd')
      L(this, 'executeSizeMinus')
      L(this, 'executeBold')
      L(this, 'executeItalic')
      L(this, 'executeUnderline')
      L(this, 'executeStrikeout')
      L(this, 'executeSuperscript')
      L(this, 'executeSubscript')
      L(this, 'executeColor')
      L(this, 'executeHighlight')
      L(this, 'executeTitle')
      L(this, 'executeList')
      L(this, 'executeRowFlex')
      L(this, 'executeRowMargin')
      L(this, 'executeInsertTable')
      L(this, 'executeInsertTableTopRow')
      L(this, 'executeInsertTableBottomRow')
      L(this, 'executeInsertTableLeftCol')
      L(this, 'executeInsertTableRightCol')
      L(this, 'executeDeleteTableRow')
      L(this, 'executeDeleteTableCol')
      L(this, 'executeDeleteTable')
      L(this, 'executeMergeTableCell')
      L(this, 'executeCancelMergeTableCell')
      L(this, 'executeSplitVerticalTableCell')
      L(this, 'executeSplitHorizontalTableCell')
      L(this, 'executeTableTdVerticalAlign')
      L(this, 'executeTableBorderType')
      L(this, 'executeTableBorderColor')
      L(this, 'executeTableTdBorderType')
      L(this, 'executeTableTdSlashType')
      L(this, 'executeTableTdBackgroundColor')
      L(this, 'executeTableSelectAll')
      L(this, 'executeImage')
      L(this, 'executeHyperlink')
      L(this, 'executeDeleteHyperlink')
      L(this, 'executeCancelHyperlink')
      L(this, 'executeEditHyperlink')
      L(this, 'executeSeparator')
      L(this, 'executePageBreak')
      L(this, 'executeAddWatermark')
      L(this, 'executeDeleteWatermark')
      L(this, 'executeSearch')
      L(this, 'executeSearchNavigatePre')
      L(this, 'executeSearchNavigateNext')
      L(this, 'executeReplace')
      L(this, 'executePrint')
      L(this, 'executeReplaceImageElement')
      L(this, 'executeSaveAsImageElement')
      L(this, 'executeChangeImageDisplay')
      L(this, 'executePageMode')
      L(this, 'executePageScale')
      L(this, 'executePageScaleRecovery')
      L(this, 'executePageScaleMinus')
      L(this, 'executePageScaleAdd')
      L(this, 'executePaperSize')
      L(this, 'executePaperDirection')
      L(this, 'executeSetPaperMargin')
      L(this, 'executeSetMainBadge')
      L(this, 'executeSetAreaBadge')
      L(this, 'executeInsertElementList')
      L(this, 'executeInsertArea')
      L(this, 'executeSetAreaProperties')
      L(this, 'executeLocationArea')
      L(this, 'executeAppendElementList')
      L(this, 'executeUpdateElementById')
      L(this, 'executeDeleteElementById')
      L(this, 'executeSetValue')
      L(this, 'executeRemoveControl')
      L(this, 'executeSetLocale')
      L(this, 'executeLocationCatalog')
      L(this, 'executeWordTool')
      L(this, 'executeSetHTML')
      L(this, 'executeSetGroup')
      L(this, 'executeDeleteGroup')
      L(this, 'executeLocationGroup')
      L(this, 'executeSetZone')
      L(this, 'executeSetControlValue')
      L(this, 'executeSetControlValueList')
      L(this, 'executeSetControlExtension')
      L(this, 'executeSetControlExtensionList')
      L(this, 'executeSetControlProperties')
      L(this, 'executeSetControlPropertiesList')
      L(this, 'executeSetControlHighlight')
      L(this, 'executeLocationControl')
      L(this, 'executeInsertControl')
      L(this, 'executeUpdateOptions')
      L(this, 'executeInsertTitle')
      L(this, 'executeFocus')
      L(this, 'getCatalog')
      L(this, 'getImage')
      L(this, 'getOptions')
      L(this, 'getValue')
      L(this, 'getValueAsync')
      L(this, 'getAreaValue')
      L(this, 'getHTML')
      L(this, 'getText')
      L(this, 'getWordCount')
      L(this, 'getCursorPosition')
      L(this, 'getRange')
      L(this, 'getRangeText')
      L(this, 'getRangeContext')
      L(this, 'getRangeRow')
      L(this, 'getRangeParagraph')
      L(this, 'getKeywordRangeList')
      L(this, 'getKeywordContext')
      L(this, 'getPaperMargin')
      L(this, 'getSearchNavigateInfo')
      L(this, 'getLocale')
      L(this, 'getGroupIds')
      L(this, 'getControlValue')
      L(this, 'getControlList')
      L(this, 'getContainer')
      L(this, 'getTitleValue')
      L(this, 'getPositionContextByEvent')
      L(this, 'getElementById')
      ;(this.executeMode = t.mode.bind(t)),
        (this.executeCut = t.cut.bind(t)),
        (this.executeCopy = t.copy.bind(t)),
        (this.executePaste = t.paste.bind(t)),
        (this.executeSelectAll = t.selectAll.bind(t)),
        (this.executeBackspace = t.backspace.bind(t)),
        (this.executeSetRange = t.setRange.bind(t)),
        (this.executeReplaceRange = t.replaceRange.bind(t)),
        (this.executeSetPositionContext = t.setPositionContext.bind(t)),
        (this.executeForceUpdate = t.forceUpdate.bind(t)),
        (this.executeBlur = t.blur.bind(t)),
        (this.executeUndo = t.undo.bind(t)),
        (this.executeRedo = t.redo.bind(t)),
        (this.executePainter = t.painter.bind(t)),
        (this.executeApplyPainterStyle = t.applyPainterStyle.bind(t)),
        (this.executeFormat = t.format.bind(t)),
        (this.executeFont = t.font.bind(t)),
        (this.executeSize = t.size.bind(t)),
        (this.executeSizeAdd = t.sizeAdd.bind(t)),
        (this.executeSizeMinus = t.sizeMinus.bind(t)),
        (this.executeBold = t.bold.bind(t)),
        (this.executeItalic = t.italic.bind(t)),
        (this.executeUnderline = t.underline.bind(t)),
        (this.executeStrikeout = t.strikeout.bind(t)),
        (this.executeSuperscript = t.superscript.bind(t)),
        (this.executeSubscript = t.subscript.bind(t)),
        (this.executeColor = t.color.bind(t)),
        (this.executeHighlight = t.highlight.bind(t)),
        (this.executeTitle = t.title.bind(t)),
        (this.executeList = t.list.bind(t)),
        (this.executeRowFlex = t.rowFlex.bind(t)),
        (this.executeRowMargin = t.rowMargin.bind(t)),
        (this.executeInsertTable = t.insertTable.bind(t)),
        (this.executeInsertTableTopRow = t.insertTableTopRow.bind(t)),
        (this.executeInsertTableBottomRow = t.insertTableBottomRow.bind(t)),
        (this.executeInsertTableLeftCol = t.insertTableLeftCol.bind(t)),
        (this.executeInsertTableRightCol = t.insertTableRightCol.bind(t)),
        (this.executeDeleteTableRow = t.deleteTableRow.bind(t)),
        (this.executeDeleteTableCol = t.deleteTableCol.bind(t)),
        (this.executeDeleteTable = t.deleteTable.bind(t)),
        (this.executeMergeTableCell = t.mergeTableCell.bind(t)),
        (this.executeCancelMergeTableCell = t.cancelMergeTableCell.bind(t)),
        (this.executeSplitVerticalTableCell = t.splitVerticalTableCell.bind(t)),
        (this.executeSplitHorizontalTableCell =
          t.splitHorizontalTableCell.bind(t)),
        (this.executeTableTdVerticalAlign = t.tableTdVerticalAlign.bind(t)),
        (this.executeTableBorderType = t.tableBorderType.bind(t)),
        (this.executeTableBorderColor = t.tableBorderColor.bind(t)),
        (this.executeTableTdBorderType = t.tableTdBorderType.bind(t)),
        (this.executeTableTdSlashType = t.tableTdSlashType.bind(t)),
        (this.executeTableTdBackgroundColor = t.tableTdBackgroundColor.bind(t)),
        (this.executeTableSelectAll = t.tableSelectAll.bind(t)),
        (this.executeImage = t.image.bind(t)),
        (this.executeHyperlink = t.hyperlink.bind(t)),
        (this.executeDeleteHyperlink = t.deleteHyperlink.bind(t)),
        (this.executeCancelHyperlink = t.cancelHyperlink.bind(t)),
        (this.executeEditHyperlink = t.editHyperlink.bind(t)),
        (this.executeSeparator = t.separator.bind(t)),
        (this.executePageBreak = t.pageBreak.bind(t)),
        (this.executeAddWatermark = t.addWatermark.bind(t)),
        (this.executeDeleteWatermark = t.deleteWatermark.bind(t)),
        (this.executeSearch = t.search.bind(t)),
        (this.executeSearchNavigatePre = t.searchNavigatePre.bind(t)),
        (this.executeSearchNavigateNext = t.searchNavigateNext.bind(t)),
        (this.executeReplace = t.replace.bind(t)),
        (this.executePrint = t.print.bind(t)),
        (this.executeReplaceImageElement = t.replaceImageElement.bind(t)),
        (this.executeSaveAsImageElement = t.saveAsImageElement.bind(t)),
        (this.executeChangeImageDisplay = t.changeImageDisplay.bind(t)),
        (this.executePageMode = t.pageMode.bind(t)),
        (this.executePageScale = t.pageScale.bind(t)),
        (this.executePageScaleRecovery = t.pageScaleRecovery.bind(t)),
        (this.executePageScaleMinus = t.pageScaleMinus.bind(t)),
        (this.executePageScaleAdd = t.pageScaleAdd.bind(t)),
        (this.executePaperSize = t.paperSize.bind(t)),
        (this.executePaperDirection = t.paperDirection.bind(t)),
        (this.executeSetPaperMargin = t.setPaperMargin.bind(t)),
        (this.executeSetMainBadge = t.setMainBadge.bind(t)),
        (this.executeSetAreaBadge = t.setAreaBadge.bind(t)),
        (this.getAreaValue = t.getAreaValue.bind(t)),
        (this.executeInsertArea = t.insertArea.bind(t)),
        (this.executeSetAreaProperties = t.setAreaProperties.bind(t)),
        (this.executeLocationArea = t.locationArea.bind(t)),
        (this.executeInsertElementList = t.insertElementList.bind(t)),
        (this.executeAppendElementList = t.appendElementList.bind(t)),
        (this.executeUpdateElementById = t.updateElementById.bind(t)),
        (this.executeDeleteElementById = t.deleteElementById.bind(t)),
        (this.executeSetValue = t.setValue.bind(t)),
        (this.executeRemoveControl = t.removeControl.bind(t)),
        (this.executeSetLocale = t.setLocale.bind(t)),
        (this.executeLocationCatalog = t.locationCatalog.bind(t)),
        (this.executeWordTool = t.wordTool.bind(t)),
        (this.executeSetHTML = t.setHTML.bind(t)),
        (this.executeSetGroup = t.setGroup.bind(t)),
        (this.executeDeleteGroup = t.deleteGroup.bind(t)),
        (this.executeLocationGroup = t.locationGroup.bind(t)),
        (this.executeSetZone = t.setZone.bind(t)),
        (this.executeUpdateOptions = t.updateOptions.bind(t)),
        (this.executeInsertTitle = t.insertTitle.bind(t)),
        (this.executeFocus = t.focus.bind(t)),
        (this.getImage = t.getImage.bind(t)),
        (this.getOptions = t.getOptions.bind(t)),
        (this.getValue = t.getValue.bind(t)),
        (this.getValueAsync = t.getValueAsync.bind(t)),
        (this.getHTML = t.getHTML.bind(t)),
        (this.getText = t.getText.bind(t)),
        (this.getWordCount = t.getWordCount.bind(t)),
        (this.getCursorPosition = t.getCursorPosition.bind(t)),
        (this.getRange = t.getRange.bind(t)),
        (this.getRangeText = t.getRangeText.bind(t)),
        (this.getRangeContext = t.getRangeContext.bind(t)),
        (this.getRangeRow = t.getRangeRow.bind(t)),
        (this.getRangeParagraph = t.getRangeParagraph.bind(t)),
        (this.getKeywordRangeList = t.getKeywordRangeList.bind(t)),
        (this.getKeywordContext = t.getKeywordContext.bind(t)),
        (this.getCatalog = t.getCatalog.bind(t)),
        (this.getPaperMargin = t.getPaperMargin.bind(t)),
        (this.getSearchNavigateInfo = t.getSearchNavigateInfo.bind(t)),
        (this.getLocale = t.getLocale.bind(t)),
        (this.getGroupIds = t.getGroupIds.bind(t)),
        (this.getContainer = t.getContainer.bind(t)),
        (this.getTitleValue = t.getTitleValue.bind(t)),
        (this.getPositionContextByEvent = t.getPositionContextByEvent.bind(t)),
        (this.getElementById = t.getElementById.bind(t)),
        (this.executeSetControlValue = t.setControlValue.bind(t)),
        (this.executeSetControlValueList = t.setControlValueList.bind(t)),
        (this.executeSetControlExtension = t.setControlExtension.bind(t)),
        (this.executeSetControlExtensionList =
          t.setControlExtensionList.bind(t)),
        (this.executeSetControlProperties = t.setControlProperties.bind(t)),
        (this.executeSetControlPropertiesList =
          t.setControlPropertiesList.bind(t)),
        (this.executeSetControlHighlight = t.setControlHighlight.bind(t)),
        (this.getControlValue = t.getControlValue.bind(t)),
        (this.getControlList = t.getControlList.bind(t)),
        (this.executeLocationControl = t.locationControl.bind(t)),
        (this.executeInsertControl = t.insertControl.bind(t))
    }
  }
  function nl(l, t) {
    return l === 1125 && t === 1593
      ? { size: 'a3', width: '297mm', height: '420mm' }
      : l === 794 && t === 1123
        ? { size: 'a4', width: '210mm', height: '297mm' }
        : l === 565 && t === 796
          ? { size: 'a5', width: '148mm', height: '210mm' }
          : { size: '', width: `${l}px`, height: `${t}px` }
  }
  function il(l, t) {
    const { width: e, height: n, direction: o = a.PaperDirection.VERTICAL } = t,
      s = document.createElement('iframe')
    ;(s.style.visibility = 'hidden'),
      (s.style.position = 'absolute'),
      (s.style.left = '0'),
      (s.style.top = '0'),
      (s.style.width = '0'),
      (s.style.height = '0'),
      (s.style.border = 'none'),
      document.body.append(s)
    const i = s.contentWindow,
      r = i.document
    r.open()
    const R = document.createElement('div'),
      c = nl(e, n)
    l.forEach(u => {
      const g = document.createElement('img')
      ;(g.style.width = o === a.PaperDirection.HORIZONTAL ? c.height : c.width),
        (g.style.height =
          o === a.PaperDirection.HORIZONTAL ? c.width : c.height),
        (g.src = u),
        R.append(g)
    })
    const d = document.createElement('style'),
      h = `
  * {
    margin: 0;
    padding: 0;
  }
  @page {
    margin: 0;
    size: ${c.size} ${o === a.PaperDirection.HORIZONTAL ? 'landscape' : 'portrait'};
  }`
    d.append(document.createTextNode(h)),
      setTimeout(() => {
        r.write(`${d.outerHTML}${R.innerHTML}`),
          i.print(),
          r.close(),
          window.addEventListener(
            'mouseover',
            () => {
              s == null || s.remove()
            },
            { once: !0 }
          )
      })
  }
  class ol {
    constructor(t) {
      L(this, 'draw')
      L(this, 'range')
      L(this, 'position')
      L(this, 'historyManager')
      L(this, 'canvasEvent')
      L(this, 'options')
      L(this, 'control')
      L(this, 'workerManager')
      L(this, 'searchManager')
      L(this, 'i18n')
      L(this, 'zone')
      L(this, 'tableOperate')
      ;(this.draw = t),
        (this.range = t.getRange()),
        (this.position = t.getPosition()),
        (this.historyManager = t.getHistoryManager()),
        (this.canvasEvent = t.getCanvasEvent()),
        (this.options = t.getOptions()),
        (this.control = t.getControl()),
        (this.workerManager = t.getWorkerManager()),
        (this.searchManager = t.getSearch()),
        (this.i18n = t.getI18n()),
        (this.zone = t.getZone()),
        (this.tableOperate = t.getTableOperate())
    }
    mode(t) {
      this.draw.setMode(t)
    }
    cut() {
      this.draw.isReadonly() || this.draw.isDisabled() || this.canvasEvent.cut()
    }
    copy(t) {
      this.canvasEvent.copy(t)
    }
    paste(t) {
      this.draw.isReadonly() ||
        this.draw.isDisabled() ||
        Zo(this.canvasEvent, t)
    }
    selectAll() {
      this.canvasEvent.selectAll()
    }
    backspace() {
      if (this.draw.isReadonly() || this.draw.isDisabled()) return
      const e = this.draw.getElementList(),
        { startIndex: n, endIndex: o } = this.range.getRange(),
        s = n === o
      if (s && e[n].value === H && n === 0) return
      s
        ? this.draw.spliceElementList(e, n, 1)
        : this.draw.spliceElementList(e, n + 1, o - n)
      const i = s ? n - 1 : n
      this.range.setRange(i, i), this.draw.render({ curIndex: i })
    }
    setRange(t, e, n, o, s, i, r) {
      if (t < 0 || e < 0 || e < t) return
      this.range.setRange(t, e, n, o, s, i, r)
      const R = t === e
      this.draw.render({
        curIndex: R ? t : void 0,
        isCompute: !1,
        isSubmitHistory: !1,
        isSetCursor: R
      })
    }
    replaceRange(t) {
      this.setRange(
        t.startIndex,
        t.endIndex,
        t.tableId,
        t.startTdIndex,
        t.endTdIndex,
        t.startTrIndex,
        t.endTrIndex
      )
    }
    setPositionContext(t) {
      const { tableId: e, startTrIndex: n, startTdIndex: o } = t,
        s = this.draw.getOriginalElementList()
      if (e) {
        const i = s.findIndex(d => d.id === e)
        if (!~i) return
        const R = s[i].trList[n],
          c = R.tdList[o]
        this.position.setPositionContext({
          isTable: !0,
          index: i,
          trIndex: n,
          tdIndex: o,
          tdId: c.id,
          trId: R.id,
          tableId: e
        })
      } else this.position.setPositionContext({ isTable: !1 })
    }
    forceUpdate(t) {
      const { isSubmitHistory: e = !1 } = t || {}
      this.range.clearRange(),
        this.draw.render({ isSubmitHistory: e, isSetCursor: !1 })
    }
    blur() {
      this.range.clearRange(), this.draw.getCursor().recoveryCursor()
    }
    undo() {
      this.draw.isReadonly() || this.historyManager.undo()
    }
    redo() {
      this.draw.isReadonly() || this.historyManager.redo()
    }
    painter(t) {
      if (!t.isDblclick && this.draw.getPainterStyle()) {
        this.canvasEvent.clearPainterStyle()
        return
      }
      const e = this.range.getSelection()
      if (!e) return
      const n = {}
      e.forEach(o => {
        yt.forEach(i => {
          const r = i
          n[r] === void 0 && (n[r] = o[r])
        })
      }),
        this.draw.setPainterStyle(n, t)
    }
    applyPainterStyle() {
      this.draw.isReadonly() ||
        this.draw.isDisabled() ||
        this.canvasEvent.applyPainterStyle()
    }
    format(t) {
      const { isIgnoreDisabledRule: e = !1 } = t || {}
      if (!e && (this.draw.isReadonly() || this.draw.isDisabled())) return
      const o = this.range.getSelectionElementList()
      let s = {},
        i = []
      if (o == null ? void 0 : o.length) (i = o), (s = { isSetCursor: !1 })
      else {
        const { endIndex: r } = this.range.getRange(),
          c = this.draw.getElementList()[r]
        ;(c == null ? void 0 : c.value) === H &&
          (i.push(c), (s = { curIndex: r }))
      }
      !i.length ||
        (i.forEach(r => {
          yt.forEach(R => {
            delete r[R]
          })
        }),
        this.draw.render(s))
    }
    font(t, e) {
      const { isIgnoreDisabledRule: n = !1 } = e || {}
      if (!n && (this.draw.isReadonly() || this.draw.isDisabled())) return
      const s = this.range.getSelectionElementList()
      if (s == null ? void 0 : s.length)
        s.forEach(i => {
          i.font = t
        }),
          this.draw.render({ isSetCursor: !1 })
      else {
        let i = !0
        const { endIndex: r } = this.range.getRange(),
          c = this.draw.getElementList()[r]
        ;(c == null ? void 0 : c.value) === H
          ? (c.font = t)
          : (this.range.setDefaultStyle({ font: t }), (i = !1)),
          this.draw.render({ isSubmitHistory: i, curIndex: r, isCompute: !1 })
      }
    }
    size(t, e) {
      const { isIgnoreDisabledRule: n = !1 } = e || {}
      if (!n && (this.draw.isReadonly() || this.draw.isDisabled())) return
      const { minSize: s, maxSize: i, defaultSize: r } = this.options
      if (t < s || t > i) return
      let R = {},
        c = []
      const d = this.range.getTextLikeSelectionElementList()
      if (d == null ? void 0 : d.length) (c = d), (R = { isSetCursor: !1 })
      else {
        const { endIndex: u } = this.range.getRange(),
          T = this.draw.getElementList()[u]
        ;(T == null ? void 0 : T.value) === H
          ? (c.push(T), (R = { curIndex: u }))
          : (this.range.setDefaultStyle({ size: t }),
            this.draw.render({
              curIndex: u,
              isCompute: !1,
              isSubmitHistory: !1
            }))
      }
      if (!c.length) return
      let h = !1
      c.forEach(u => {
        ;(!u.size && t === r) ||
          (u.size && u.size === t) ||
          ((u.size = t), (h = !0))
      }),
        h && this.draw.render(R)
    }
    sizeAdd(t) {
      const { isIgnoreDisabledRule: e = !1 } = t || {}
      if (!e && (this.draw.isReadonly() || this.draw.isDisabled())) return
      const { defaultSize: o, maxSize: s } = this.options,
        i = this.range.getTextLikeSelectionElementList()
      let r = {},
        R = []
      if (i == null ? void 0 : i.length) (R = i), (r = { isSetCursor: !1 })
      else {
        const { endIndex: d } = this.range.getRange(),
          u = this.draw.getElementList()[d]
        if ((u == null ? void 0 : u.value) === H)
          R.push(u), (r = { curIndex: d })
        else {
          const g = this.range.getDefaultStyle(),
            T = (g == null ? void 0 : g.size) || u.size || o
          this.range.setDefaultStyle({ size: T + 2 > s ? s : T + 2 }),
            this.draw.render({
              curIndex: d,
              isCompute: !1,
              isSubmitHistory: !1
            })
        }
      }
      if (!R.length) return
      let c = !1
      R.forEach(d => {
        d.size || (d.size = o),
          !(d.size >= s) &&
            (d.size + 2 > s ? (d.size = s) : (d.size += 2), (c = !0))
      }),
        c && this.draw.render(r)
    }
    sizeMinus(t) {
      const { isIgnoreDisabledRule: e = !1 } = t || {}
      if (!e && (this.draw.isReadonly() || this.draw.isDisabled())) return
      const { defaultSize: o, minSize: s } = this.options,
        i = this.range.getTextLikeSelectionElementList()
      let r = {},
        R = []
      if (i == null ? void 0 : i.length) (R = i), (r = { isSetCursor: !1 })
      else {
        const { endIndex: d } = this.range.getRange(),
          u = this.draw.getElementList()[d]
        if ((u == null ? void 0 : u.value) === H)
          R.push(u), (r = { curIndex: d })
        else {
          const g = this.range.getDefaultStyle(),
            T = (g == null ? void 0 : g.size) || u.size || o
          this.range.setDefaultStyle({ size: T - 2 < s ? s : T - 2 }),
            this.draw.render({
              curIndex: d,
              isCompute: !1,
              isSubmitHistory: !1
            })
        }
      }
      if (!R.length) return
      let c = !1
      R.forEach(d => {
        d.size || (d.size = o),
          !(d.size <= s) &&
            (d.size - 2 < s ? (d.size = s) : (d.size -= 2), (c = !0))
      }),
        c && this.draw.render(r)
    }
    bold(t) {
      var s
      const { isIgnoreDisabledRule: e = !1 } = t || {}
      if (!e && (this.draw.isReadonly() || this.draw.isDisabled())) return
      const o = this.range.getSelectionElementList()
      if (o == null ? void 0 : o.length) {
        const i = o.findIndex(r => !r.bold)
        o.forEach(r => {
          r.bold = !!~i
        }),
          this.draw.render({ isSetCursor: !1 })
      } else {
        let i = !0
        const { endIndex: r } = this.range.getRange(),
          c = this.draw.getElementList()[r]
        ;(c == null ? void 0 : c.value) === H
          ? (c.bold = !c.bold)
          : (this.range.setDefaultStyle({
              bold: c.bold
                ? !1
                : !((s = this.range.getDefaultStyle()) == null
                    ? void 0
                    : s.bold)
            }),
            (i = !1)),
          this.draw.render({ isSubmitHistory: i, curIndex: r, isCompute: !1 })
      }
    }
    italic(t) {
      var s
      const { isIgnoreDisabledRule: e = !1 } = t || {}
      if (!e && (this.draw.isReadonly() || this.draw.isDisabled())) return
      const o = this.range.getSelectionElementList()
      if (o == null ? void 0 : o.length) {
        const i = o.findIndex(r => !r.italic)
        o.forEach(r => {
          r.italic = !!~i
        }),
          this.draw.render({ isSetCursor: !1 })
      } else {
        let i = !0
        const { endIndex: r } = this.range.getRange(),
          c = this.draw.getElementList()[r]
        ;(c == null ? void 0 : c.value) === H
          ? (c.italic = !c.italic)
          : (this.range.setDefaultStyle({
              italic: c.italic
                ? !1
                : !((s = this.range.getDefaultStyle()) == null
                    ? void 0
                    : s.italic)
            }),
            (i = !1)),
          this.draw.render({ isSubmitHistory: i, curIndex: r, isCompute: !1 })
      }
    }
    underline(t, e) {
      var i
      const { isIgnoreDisabledRule: n = !1 } = e || {}
      if (!n && (this.draw.isReadonly() || this.draw.isDisabled())) return
      const s = this.range.getSelectionElementList()
      if (s == null ? void 0 : s.length) {
        const r = s.some(
          R =>
            !R.underline ||
            (!t && R.textDecoration) ||
            (t && !R.textDecoration) ||
            (t && R.textDecoration && !Vi(R.textDecoration, t))
        )
        s.forEach(R => {
          ;(R.underline = r),
            r && t ? (R.textDecoration = t) : delete R.textDecoration
        }),
          this.draw.render({ isSetCursor: !1, isCompute: !1 })
      } else {
        let r = !0
        const { endIndex: R } = this.range.getRange(),
          d = this.draw.getElementList()[R]
        ;(d == null ? void 0 : d.value) === H
          ? (d.underline = !d.underline)
          : (this.range.setDefaultStyle({
              underline: (d == null ? void 0 : d.underline)
                ? !1
                : !((i = this.range.getDefaultStyle()) == null
                    ? void 0
                    : i.underline)
            }),
            (r = !1)),
          this.draw.render({ isSubmitHistory: r, curIndex: R, isCompute: !1 })
      }
    }
    strikeout(t) {
      var s
      const { isIgnoreDisabledRule: e = !1 } = t || {}
      if (!e && (this.draw.isReadonly() || this.draw.isDisabled())) return
      const o = this.range.getSelectionElementList()
      if (o == null ? void 0 : o.length) {
        const i = o.findIndex(r => !r.strikeout)
        o.forEach(r => {
          r.strikeout = !!~i
        }),
          this.draw.render({ isSetCursor: !1, isCompute: !1 })
      } else {
        let i = !0
        const { endIndex: r } = this.range.getRange(),
          c = this.draw.getElementList()[r]
        ;(c == null ? void 0 : c.value) === H
          ? (c.strikeout = !c.strikeout)
          : (this.range.setDefaultStyle({
              strikeout: c.strikeout
                ? !1
                : !((s = this.range.getDefaultStyle()) == null
                    ? void 0
                    : s.strikeout)
            }),
            (i = !1)),
          this.draw.render({ isSubmitHistory: i, curIndex: r, isCompute: !1 })
      }
    }
    superscript(t) {
      const { isIgnoreDisabledRule: e = !1 } = t || {}
      if (!e && (this.draw.isReadonly() || this.draw.isDisabled())) return
      const o = this.range.getSelectionElementList()
      if (!o) return
      const s = o.findIndex(i => i.type === a.ElementType.SUPERSCRIPT)
      o.forEach(i => {
        ~s
          ? i.type === a.ElementType.SUPERSCRIPT &&
            ((i.type = a.ElementType.TEXT), delete i.actualSize)
          : (!i.type ||
              i.type === a.ElementType.TEXT ||
              i.type === a.ElementType.SUBSCRIPT) &&
            (i.type = a.ElementType.SUPERSCRIPT)
      }),
        this.draw.render({ isSetCursor: !1 })
    }
    subscript(t) {
      const { isIgnoreDisabledRule: e = !1 } = t || {}
      if (!e && (this.draw.isReadonly() || this.draw.isDisabled())) return
      const o = this.range.getSelectionElementList()
      if (!o) return
      const s = o.findIndex(i => i.type === a.ElementType.SUBSCRIPT)
      o.forEach(i => {
        ~s
          ? i.type === a.ElementType.SUBSCRIPT &&
            ((i.type = a.ElementType.TEXT), delete i.actualSize)
          : (!i.type ||
              i.type === a.ElementType.TEXT ||
              i.type === a.ElementType.SUPERSCRIPT) &&
            (i.type = a.ElementType.SUBSCRIPT)
      }),
        this.draw.render({ isSetCursor: !1 })
    }
    color(t, e) {
      const { isIgnoreDisabledRule: n = !1 } = e || {}
      if (!n && (this.draw.isReadonly() || this.draw.isDisabled())) return
      const s = this.range.getSelectionElementList()
      if (s == null ? void 0 : s.length)
        s.forEach(i => {
          t ? (i.color = t) : delete i.color
        }),
          this.draw.render({ isSetCursor: !1, isCompute: !1 })
      else {
        let i = !0
        const { endIndex: r } = this.range.getRange(),
          c = this.draw.getElementList()[r]
        ;(c == null ? void 0 : c.value) === H
          ? t
            ? (c.color = t)
            : delete c.color
          : (this.range.setDefaultStyle({ color: t || void 0 }), (i = !1)),
          this.draw.render({ isSubmitHistory: i, curIndex: r, isCompute: !1 })
      }
    }
    highlight(t, e) {
      const { isIgnoreDisabledRule: n = !1 } = e || {}
      if (!n && (this.draw.isReadonly() || this.draw.isDisabled())) return
      const s = this.range.getSelectionElementList()
      if (s == null ? void 0 : s.length)
        s.forEach(i => {
          t ? (i.highlight = t) : delete i.highlight
        }),
          this.draw.render({ isSetCursor: !1, isCompute: !1 })
      else {
        let i = !0
        const { endIndex: r } = this.range.getRange(),
          c = this.draw.getElementList()[r]
        ;(c == null ? void 0 : c.value) === H
          ? t
            ? (c.highlight = t)
            : delete c.highlight
          : (this.range.setDefaultStyle({ highlight: t || void 0 }), (i = !1)),
          this.draw.render({ isSubmitHistory: i, curIndex: r, isCompute: !1 })
      }
    }
    title(t) {
      if (this.draw.isReadonly() || this.draw.isDisabled()) return
      const { startIndex: n, endIndex: o } = this.range.getRange()
      if (!~n && !~o) return
      const s = this.draw.getElementList(),
        i =
          n === o
            ? this.range.getRangeParagraphElementList()
            : s.slice(n + 1, o + 1)
      if (!i || !i.length) return
      const r = A(),
        R = this.draw.getOptions().title
      i.forEach(h => {
        ;(!h.type && h.value === H) ||
          (t
            ? ((h.level = t),
              (h.titleId = r),
              pn(h) && ((h.size = R[Vn[t]]), (h.bold = !0)))
            : h.titleId &&
              (delete h.titleId,
              delete h.title,
              delete h.level,
              delete h.size,
              delete h.bold))
      })
      const c = n === o,
        d = c ? o : n
      this.draw.render({ curIndex: d, isSetCursor: c })
    }
    list(t, e) {
      this.draw.isReadonly() || this.draw.getListParticle().setList(t, e)
    }
    rowFlex(t) {
      if (this.draw.isReadonly()) return
      const { startIndex: n, endIndex: o } = this.range.getRange()
      if (!~n && !~o) return
      const s = this.range.getRangeRowElementList()
      if (!s) return
      s.forEach(R => {
        R.rowFlex = t
      })
      const i = n === o,
        r = i ? o : n
      this.draw.render({ curIndex: r, isSetCursor: i })
    }
    rowMargin(t) {
      if (this.draw.isReadonly()) return
      const { startIndex: n, endIndex: o } = this.range.getRange()
      if (!~n && !~o) return
      const s = this.range.getRangeRowElementList()
      if (!s) return
      s.forEach(R => {
        R.rowMargin = t
      })
      const i = n === o,
        r = i ? o : n
      this.draw.render({ curIndex: r, isSetCursor: i })
    }
    insertTable(t, e) {
      this.draw.isReadonly() ||
        this.draw.isDisabled() ||
        this.control.getActiveControl() ||
        this.tableOperate.insertTable(t, e)
    }
    insertTableTopRow() {
      this.draw.isReadonly() || this.tableOperate.insertTableTopRow()
    }
    insertTableBottomRow() {
      this.draw.isReadonly() || this.tableOperate.insertTableBottomRow()
    }
    insertTableLeftCol() {
      this.draw.isReadonly() || this.tableOperate.insertTableLeftCol()
    }
    insertTableRightCol() {
      this.draw.isReadonly() || this.tableOperate.insertTableRightCol()
    }
    deleteTableRow() {
      this.draw.isReadonly() || this.tableOperate.deleteTableRow()
    }
    deleteTableCol() {
      this.draw.isReadonly() || this.tableOperate.deleteTableCol()
    }
    deleteTable() {
      this.draw.isReadonly() || this.tableOperate.deleteTable()
    }
    mergeTableCell() {
      this.draw.isReadonly() || this.tableOperate.mergeTableCell()
    }
    cancelMergeTableCell() {
      this.draw.isReadonly() || this.tableOperate.cancelMergeTableCell()
    }
    splitVerticalTableCell() {
      this.draw.isReadonly() || this.tableOperate.splitVerticalTableCell()
    }
    splitHorizontalTableCell() {
      this.draw.isReadonly() || this.tableOperate.splitHorizontalTableCell()
    }
    tableTdVerticalAlign(t) {
      this.draw.isReadonly() || this.tableOperate.tableTdVerticalAlign(t)
    }
    tableBorderType(t) {
      this.draw.isReadonly() || this.tableOperate.tableBorderType(t)
    }
    tableBorderColor(t) {
      this.draw.isReadonly() || this.tableOperate.tableBorderColor(t)
    }
    tableTdBorderType(t) {
      this.draw.isReadonly() || this.tableOperate.tableTdBorderType(t)
    }
    tableTdSlashType(t) {
      this.draw.isReadonly() || this.tableOperate.tableTdSlashType(t)
    }
    tableTdBackgroundColor(t) {
      this.draw.isReadonly() || this.tableOperate.tableTdBackgroundColor(t)
    }
    tableSelectAll() {
      this.tableOperate.tableSelectAll()
    }
    hyperlink(t) {
      if (
        this.draw.isReadonly() ||
        this.draw.isDisabled() ||
        this.control.getActiveControl()
      )
        return
      const { startIndex: o, endIndex: s } = this.range.getRange()
      if (!~o && !~s) return
      const i = this.draw.getElementList(),
        { valueList: r, url: R } = t,
        c = A(),
        d =
          r == null
            ? void 0
            : r.map(g => ({
                url: R,
                hyperlinkId: c,
                value: g.value,
                type: a.ElementType.HYPERLINK
              }))
      if (!d) return
      const h = o + 1
      Tt(i, d, o, { editorOptions: this.options }),
        this.draw.spliceElementList(i, h, o === s ? 0 : s - o, d)
      const u = h + d.length - 1
      this.range.setRange(u, u), this.draw.render({ curIndex: u })
    }
    getHyperlinkRange() {
      let t = -1,
        e = -1
      const { startIndex: n, endIndex: o } = this.range.getRange()
      if (!~n && !~o) return null
      const s = this.draw.getElementList(),
        i = s[n]
      if (i.type !== a.ElementType.HYPERLINK) return null
      let r = n
      for (; r > 0; ) {
        if (s[r].hyperlinkId !== i.hyperlinkId) {
          t = r + 1
          break
        }
        r--
      }
      let R = n + 1
      for (; R < s.length; ) {
        if (s[R].hyperlinkId !== i.hyperlinkId) {
          e = R - 1
          break
        }
        R++
      }
      return R === s.length && (e = R - 1), !~t || !~e ? null : [t, e]
    }
    deleteHyperlink() {
      if (this.draw.isReadonly() || this.draw.isDisabled()) return
      const e = this.getHyperlinkRange()
      if (!e) return
      const n = this.draw.getElementList(),
        [o, s] = e
      this.draw.spliceElementList(n, o, s - o + 1),
        this.draw.getHyperlinkParticle().clearHyperlinkPopup()
      const i = o - 1
      this.range.setRange(i, i), this.draw.render({ curIndex: i })
    }
    cancelHyperlink() {
      if (this.draw.isReadonly() || this.draw.isDisabled()) return
      const e = this.getHyperlinkRange()
      if (!e) return
      const n = this.draw.getElementList(),
        [o, s] = e
      for (let r = o; r <= s; r++) {
        const R = n[r]
        delete R.type, delete R.url, delete R.hyperlinkId, delete R.underline
      }
      this.draw.getHyperlinkParticle().clearHyperlinkPopup()
      const { endIndex: i } = this.range.getRange()
      this.draw.render({ curIndex: i, isCompute: !1 })
    }
    editHyperlink(t) {
      if (this.draw.isReadonly() || this.draw.isDisabled()) return
      const n = this.getHyperlinkRange()
      if (!n) return
      const o = this.draw.getElementList(),
        [s, i] = n
      for (let R = s; R <= i; R++) {
        const c = o[R]
        c.url = t
      }
      this.draw.getHyperlinkParticle().clearHyperlinkPopup()
      const { endIndex: r } = this.range.getRange()
      this.draw.render({ curIndex: r, isCompute: !1 })
    }
    separator(t) {
      if (
        this.draw.isReadonly() ||
        this.draw.isDisabled() ||
        this.control.getActiveControl()
      )
        return
      const { startIndex: o, endIndex: s } = this.range.getRange()
      if (!~o && !~s) return
      const i = this.draw.getElementList()
      let r = -1
      const R = i[s + 1]
      if (R && R.type === a.ElementType.SEPARATOR) {
        if (R.dashArray && R.dashArray.join() === t.join()) return
        ;(r = s), (R.dashArray = t)
      } else {
        const c = { value: dn, type: a.ElementType.SEPARATOR, dashArray: t }
        Tt(i, [c], o, { editorOptions: this.options }),
          o !== 0 && i[o].value === H
            ? (this.draw.spliceElementList(i, o, 1, [c]), (r = o - 1))
            : (this.draw.spliceElementList(i, o + 1, 0, [c]), (r = o))
      }
      this.range.setRange(r, r), this.draw.render({ curIndex: r })
    }
    pageBreak() {
      this.draw.isReadonly() ||
        this.draw.isDisabled() ||
        this.control.getActiveControl() ||
        this.insertElementList([{ type: a.ElementType.PAGE_BREAK, value: dn }])
    }
    addWatermark(t) {
      if (this.draw.isReadonly()) return
      const n = this.draw.getOptions(),
        { color: o, size: s, opacity: i, font: r, gap: R } = Ae
      ;(n.watermark.data = t.data),
        (n.watermark.color = t.color || o),
        (n.watermark.size = t.size || s),
        (n.watermark.opacity = t.opacity || i),
        (n.watermark.font = t.font || r),
        (n.watermark.repeat = !!t.repeat),
        (n.watermark.gap = t.gap || R),
        this.draw.render({
          isSetCursor: !1,
          isSubmitHistory: !1,
          isCompute: !1
        })
    }
    deleteWatermark() {
      if (this.draw.isReadonly()) return
      const e = this.draw.getOptions()
      e.watermark &&
        e.watermark.data &&
        ((e.watermark = C({}, Ae)),
        this.draw.render({
          isSetCursor: !1,
          isSubmitHistory: !1,
          isCompute: !1
        }))
    }
    image(t) {
      if (this.draw.isReadonly() || this.draw.isDisabled()) return null
      const { startIndex: n, endIndex: o } = this.range.getRange()
      if (!~n && !~o) return null
      const {
          id: s,
          conceptId: i,
          value: r,
          width: R,
          height: c,
          imgDisplay: d
        } = t,
        h = s || A()
      return (
        this.insertElementList([
          {
            value: r,
            width: R,
            height: c,
            conceptId: i,
            id: h,
            type: a.ElementType.IMAGE,
            imgDisplay: d
          }
        ]),
        h
      )
    }
    search(t) {
      this.searchManager.setSearchKeyword(t),
        this.draw.render({ isSetCursor: !1, isSubmitHistory: !1 })
    }
    searchNavigatePre() {
      this.searchManager.searchNavigatePre() !== null &&
        this.draw.render({
          isSetCursor: !1,
          isSubmitHistory: !1,
          isCompute: !1,
          isLazy: !1
        })
    }
    searchNavigateNext() {
      this.searchManager.searchNavigateNext() !== null &&
        this.draw.render({
          isSetCursor: !1,
          isSubmitHistory: !1,
          isCompute: !1,
          isLazy: !1
        })
    }
    getSearchNavigateInfo() {
      return this.searchManager.getSearchNavigateInfo()
    }
    replace(t, e) {
      this.draw.getSearch().replace(t, e)
    }
    async print() {
      const {
        scale: t,
        printPixelRatio: e,
        paperDirection: n,
        width: o,
        height: s
      } = this.options
      t !== 1 && this.draw.setPageScale(1)
      const i = await this.draw.getDataURL({
        pixelRatio: e,
        mode: a.EditorMode.PRINT
      })
      il(i, { width: o, height: s, direction: n }),
        t !== 1 && this.draw.setPageScale(t)
    }
    replaceImageElement(t) {
      const { startIndex: e } = this.range.getRange(),
        o = this.draw.getElementList()[e]
      !o ||
        o.type !== a.ElementType.IMAGE ||
        ((o.value = t), this.draw.render({ isSetCursor: !1 }))
    }
    saveAsImageElement() {
      const { startIndex: t } = this.range.getRange(),
        n = this.draw.getElementList()[t]
      !n || n.type !== a.ElementType.IMAGE || Tn(n.value, `${n.id}.png`)
    }
    changeImageDisplay(t, e) {
      if (t.imgDisplay === e) return
      t.imgDisplay = e
      const { startIndex: n, endIndex: o } = this.range.getRange()
      if (
        e === a.ImageDisplay.SURROUND ||
        e === a.ImageDisplay.FLOAT_TOP ||
        e === a.ImageDisplay.FLOAT_BOTTOM
      ) {
        const s = this.position.getPositionList(),
          {
            pageNo: i,
            coordinate: { leftTop: r }
          } = s[n]
        t.imgFloatPosition = { pageNo: i, x: r[0], y: r[1] }
      } else delete t.imgFloatPosition
      this.draw.getPreviewer().clearResizer(),
        this.draw.render({ isSetCursor: !0, curIndex: o })
    }
    getImage(t) {
      return this.draw.getDataURL(t)
    }
    getOptions() {
      return this.options
    }
    getValue(t) {
      return this.draw.getValue(t)
    }
    getValueAsync(t) {
      return this.draw.getWorkerManager().getValue(t)
    }
    getAreaValue(t) {
      return this.draw.getArea().getAreaValue(t)
    }
    getHTML() {
      const t = this.options,
        e = this.draw.getHeaderElementList(),
        n = this.draw.getOriginalMainElementList(),
        o = this.draw.getFooterElementList()
      return {
        header: oe(e, t).innerHTML,
        main: oe(n, t).innerHTML,
        footer: oe(o, t).innerHTML
      }
    }
    getText() {
      const t = this.draw.getHeaderElementList(),
        e = this.draw.getOriginalMainElementList(),
        n = this.draw.getFooterElementList()
      return { header: le(t), main: le(e), footer: le(n) }
    }
    getWordCount() {
      return this.workerManager.getWordCount()
    }
    getCursorPosition() {
      return this.position.getCursorPosition()
    }
    getRange() {
      return k(this.range.getRange())
    }
    getRangeText() {
      return this.range.toString()
    }
    getRangeContext() {
      var b, w
      const t = this.range.getRange(),
        { startIndex: e, endIndex: n } = t
      if (!~e && !~n) return null
      const o = e === n,
        s = this.range.toString(),
        i = z(this.range.getSelectionElementList() || []),
        r = this.draw.getElementList(),
        R = ie(r[o ? e : e + 1], {
          extraPickAttrs: ['id', 'controlComponent']
        }),
        c = ie(r[n], { extraPickAttrs: ['id', 'controlComponent'] }),
        d = this.draw.getRowList(),
        h = this.position.getPositionList(),
        u = h[e],
        g = h[n],
        T = u.pageNo,
        P = g.pageNo,
        O = u.rowIndex,
        M = g.rowIndex,
        S = d[O],
        I = d[M]
      let F = 0,
        N = 0
      this.draw.getCursor().getHitLineStartIndex() ||
        (F =
          ((b = S.elementList[0]) == null ? void 0 : b.value) === H
            ? u.index - S.startIndex
            : u.index - S.startIndex + 1),
        u === g
          ? (N = F)
          : (N =
              ((w = I.elementList[0]) == null ? void 0 : w.value) === H
                ? g.index - I.startIndex
                : g.index - I.startIndex + 1)
      const X = [],
        f = this.draw.getOriginalHeight(),
        Q = this.draw.getOriginalPageGap(),
        Z = this.position.getSelectionPositionList()
      if (Z) {
        let G = null,
          tt = 0,
          Rt = null
        for (let ft = 0; ft < Z.length; ft++) {
          const {
            rowNo: et,
            pageNo: ot,
            coordinate: { leftTop: Pt, rightTop: gt },
            lineHeight: $
          } = Z[ft]
          G === null || G !== et
            ? (Rt && X.push(Rt),
              (Rt = {
                x: Pt[0],
                y: Pt[1] + ot * (f + Q),
                width: gt[0] - Pt[0],
                height: $
              }),
              (G = et),
              (tt = Pt[0]))
            : (Rt.width = gt[0] - tt),
            ft === Z.length - 1 && Rt && X.push(Rt)
        }
      } else {
        const tt = this.position.getPositionList()[n],
          {
            coordinate: { rightTop: Rt },
            pageNo: ft,
            lineHeight: et
          } = tt
        X.push({ x: Rt[0], y: Rt[1] + ft * (f + Q), width: 0, height: et })
      }
      const D = this.draw.getZone().getZone(),
        {
          isTable: Y,
          trIndex: V,
          tdIndex: W,
          index: p
        } = this.position.getPositionContext()
      let U = null
      if (Y) {
        const tt = this.draw.getOriginalElementList()[p] || null
        tt && (U = z([tt])[0])
      }
      let m = null,
        y = null,
        K = e - 1
      for (; K > 0; ) {
        const G = r[K],
          tt = r[K - 1]
        if (G.titleId && G.titleId !== (tt == null ? void 0 : tt.titleId)) {
          ;(m = G.titleId), (y = h[K].pageNo)
          break
        }
        K--
      }
      return k({
        isCollapsed: o,
        startElement: R,
        endElement: c,
        startPageNo: T,
        endPageNo: P,
        startRowNo: O,
        endRowNo: M,
        startColNo: F,
        endColNo: N,
        rangeRects: X,
        zone: D,
        isTable: Y,
        trIndex: V != null ? V : null,
        tdIndex: W != null ? W : null,
        tableElement: U,
        selectionText: s,
        selectionElementList: i,
        titleId: m,
        titleStartPageNo: y
      })
    }
    getRangeRow() {
      const t = this.range.getRangeRowElementList()
      return t ? z(t) : null
    }
    getRangeParagraph() {
      const t = this.range.getRangeParagraphElementList()
      return t ? z(t) : null
    }
    getKeywordRangeList(t) {
      return this.range.getKeywordRangeList(t)
    }
    getKeywordContext(t) {
      var i, r, R, c
      const e = this.getKeywordRangeList(t)
      if (!e.length) return null
      const n = [],
        o = this.position.getOriginalMainPositionList(),
        s = this.draw.getOriginalMainElementList()
      for (let d = 0; d < e.length; d++) {
        const h = e[d],
          {
            startIndex: u,
            endIndex: g,
            tableId: T,
            startTrIndex: P,
            startTdIndex: O
          } = h
        let M = o
        if (h.tableId) {
          const F = s.find(N => N.id === T)
          F &&
            (M =
              ((c =
                (R =
                  (r = (i = F.trList) == null ? void 0 : i[P]) == null
                    ? void 0
                    : r.tdList) == null
                  ? void 0
                  : R[O]) == null
                ? void 0
                : c.positionList) || [])
        }
        const S = k(M[u]),
          I = k(M[g])
        n.push({ range: h, startPosition: S, endPosition: I })
      }
      return n
    }
    pageMode(t) {
      this.draw.setPageMode(t)
    }
    pageScale(t) {
      t !== this.options.scale && this.draw.setPageScale(t)
    }
    pageScaleRecovery() {
      const { scale: t } = this.options
      t !== 1 && this.draw.setPageScale(1)
    }
    pageScaleMinus() {
      const { scale: t } = this.options,
        e = t * 10 - 1
      e >= 5 && this.draw.setPageScale(e / 10)
    }
    pageScaleAdd() {
      const { scale: t } = this.options,
        e = t * 10 + 1
      e <= 30 && this.draw.setPageScale(e / 10)
    }
    paperSize(t, e) {
      this.draw.setPaperSize(t, e)
    }
    paperDirection(t) {
      this.draw.setPaperDirection(t)
    }
    getPaperMargin() {
      return this.options.margins
    }
    setPaperMargin(t) {
      return this.draw.setPaperMargin(t)
    }
    setMainBadge(t) {
      this.draw.getBadge().setMainBadge(t),
        this.draw.render({ isCompute: !1, isSubmitHistory: !1 })
    }
    setAreaBadge(t) {
      this.draw.getBadge().setAreaBadgeMap(t),
        this.draw.render({ isCompute: !1, isSubmitHistory: !1 })
    }
    insertElementList(t, e = {}) {
      if (!t.length || this.draw.isReadonly() || this.draw.isDisabled()) return
      const { isReplace: o = !0 } = e
      o || this.range.shrinkRange()
      const s = k(t),
        { startIndex: i } = this.range.getRange(),
        r = this.draw.getElementList()
      Tt(r, s, i, { isBreakWhenWrap: !0, editorOptions: this.options }),
        this.draw.insertElementList(s, e)
    }
    appendElementList(t, e) {
      !t.length ||
        this.draw.isReadonly() ||
        this.draw.appendElementList(k(t), e)
    }
    updateElementById(t) {
      const { id: e, conceptId: n } = t
      if (!e && !n) return
      const o = []
      function s(r) {
        let R = 0
        for (; R < r.length; ) {
          const c = r[R]
          if ((R++, c.type === a.ElementType.TABLE)) {
            const d = c.trList
            for (let h = 0; h < d.length; h++) {
              const u = d[h]
              for (let g = 0; g < u.tdList.length; g++) {
                const T = u.tdList[g]
                s(T.value)
              }
            }
          }
          ;((e && c.id === e) || (n && c.conceptId === n)) &&
            o.push({ elementList: r, index: R - 1 })
        }
      }
      const i = [
        this.draw.getOriginalMainElementList(),
        this.draw.getHeaderElementList(),
        this.draw.getFooterElementList()
      ]
      for (const r of i) s(r)
      if (!!o.length) {
        for (let r = 0; r < o.length; r++) {
          const { elementList: R, index: c } = o[r],
            d = R[c],
            h = z([C(C({}, d), t.properties)], { extraPickAttrs: ['id'] })
          kt(ee, d, h[0]),
            St(h, { isHandleFirstElement: !1, editorOptions: this.options }),
            (R[c] = h[0])
        }
        this.draw.render({ isSetCursor: !1 })
      }
    }
    deleteElementById(t) {
      const { id: e, conceptId: n } = t
      if (!e && !n) return
      let o = !1
      function s(r) {
        let R = 0
        for (; R < r.length; ) {
          const c = r[R]
          if (c.type === a.ElementType.TABLE) {
            const d = c.trList
            for (let h = 0; h < d.length; h++) {
              const u = d[h]
              for (let g = 0; g < u.tdList.length; g++) {
                const T = u.tdList[g]
                s(T.value)
              }
            }
          }
          ;((e && c.id === e) || (n && c.conceptId === n)) &&
            ((o = !0), r.splice(R, 1), R--),
            R++
        }
      }
      const i = [
        this.draw.getOriginalMainElementList(),
        this.draw.getHeaderElementList(),
        this.draw.getFooterElementList()
      ]
      for (const r of i) s(r)
      !o || this.draw.render({ isSetCursor: !1 })
    }
    getElementById(t) {
      const { id: e, conceptId: n } = t,
        o = []
      if (!e && !n) return o
      const s = r => {
          let R = 0
          for (; R < r.length; ) {
            const c = r[R]
            if ((R++, c.type === a.ElementType.TABLE)) {
              const d = c.trList
              for (let h = 0; h < d.length; h++) {
                const u = d[h]
                for (let g = 0; g < u.tdList.length; g++) {
                  const T = u.tdList[g]
                  s(T.value)
                }
              }
            }
            ;(e && c.id !== e) || (n && c.conceptId !== n) || o.push(c)
          }
        },
        i = [
          this.draw.getHeaderElementList(),
          this.draw.getOriginalMainElementList(),
          this.draw.getFooterElementList()
        ]
      for (const r of i) s(r)
      return z(o, { extraPickAttrs: ['id'] })
    }
    setValue(t, e) {
      this.draw.setValue(t, e)
    }
    removeControl(t) {
      if ((t == null ? void 0 : t.id) || (t == null ? void 0 : t.conceptId)) {
        const { id: e, conceptId: n } = t
        let o = !1
        const s = r => {
            let R = r.length - 1
            for (; R >= 0; ) {
              const c = r[R]
              if (c.type === a.ElementType.TABLE) {
                const d = c.trList
                for (let h = 0; h < d.length; h++) {
                  const u = d[h]
                  for (let g = 0; g < u.tdList.length; g++) {
                    const T = u.tdList[g]
                    s(T.value)
                  }
                }
              }
              R--,
                !(
                  !c.control ||
                  (e && c.controlId !== e) ||
                  (n && c.control.conceptId !== n)
                ) && ((o = !0), r.splice(R + 1, 1))
            }
          },
          i = [
            this.draw.getHeaderElementList(),
            this.draw.getOriginalMainElementList(),
            this.draw.getFooterElementList()
          ]
        for (const r of i) s(r)
        o && this.draw.render({ isSetCursor: !1 })
      } else {
        const { startIndex: e, endIndex: n } = this.range.getRange()
        if (e !== n || !this.draw.getElementList()[e].controlId) return
        const r = this.draw.getControl().removeControl(e)
        if (r === null) return
        this.range.setRange(r, r), this.draw.render({ curIndex: r })
      }
    }
    setLocale(t) {
      this.i18n.setLocale(t)
    }
    getLocale() {
      return this.i18n.getLocale()
    }
    getCatalog() {
      return this.workerManager.getCatalog()
    }
    locationCatalog(t) {
      var o
      const e = this.draw.getOriginalMainElementList()
      let n = -1
      for (let s = 0; s < e.length; s++)
        if (
          e[s].titleId === t &&
          ((o = e[s + 1]) == null ? void 0 : o.titleId) !== t
        ) {
          n = s
          break
        }
      !~n ||
        (this.position.setPositionContext({ isTable: !1 }),
        this.range.setRange(n, n),
        this.draw.render({ curIndex: n, isCompute: !1, isSubmitHistory: !1 }))
    }
    wordTool() {
      const t = this.draw.getMainElementList()
      let e = !1
      for (let n = 0; n < t.length; n++)
        if (t[n].value === H)
          for (; n + 1 < t.length; ) {
            const s = t[n + 1]
            if (s.value !== H && s.value !== Qe) break
            t.splice(n + 1, 1), (e = !0)
          }
      if (e) this.draw.render({ isSetCursor: !1 })
      else {
        const n = this.range.getIsCollapsed()
        this.draw.getCursor().drawCursor({ isShow: n })
      }
    }
    setHTML(t) {
      const { header: e, main: n, footer: o } = t,
        s = this.draw.getOriginalInnerWidth(),
        i = r => (r !== void 0 ? se(r, { innerWidth: s }) : void 0)
      this.setValue({ header: i(e), main: i(n), footer: i(o) })
    }
    setGroup() {
      return this.draw.isReadonly() ? null : this.draw.getGroup().setGroup()
    }
    deleteGroup(t) {
      this.draw.isReadonly() || this.draw.getGroup().deleteGroup(t)
    }
    getGroupIds() {
      return this.draw.getWorkerManager().getGroupIds()
    }
    locationGroup(t) {
      const e = this.draw.getOriginalMainElementList(),
        n = this.draw.getGroup().getContextByGroupId(e, t)
      if (!n) return
      const {
        isTable: o,
        index: s,
        trIndex: i,
        tdIndex: r,
        tdId: R,
        trId: c,
        tableId: d,
        endIndex: h
      } = n
      this.position.setPositionContext({
        isTable: o,
        index: s,
        trIndex: i,
        tdIndex: r,
        tdId: R,
        trId: c,
        tableId: d
      }),
        this.range.setRange(h, h),
        this.draw.render({ curIndex: h, isCompute: !1, isSubmitHistory: !1 })
    }
    setZone(t) {
      this.draw.getZone().setZone(t)
    }
    getControlValue(t) {
      return this.draw.getControl().getValueById(t)
    }
    setControlValue(t) {
      this.draw.getControl().setValueListById([t])
    }
    setControlValueList(t) {
      this.draw.getControl().setValueListById(t)
    }
    setControlExtension(t) {
      this.draw.getControl().setExtensionListById([t])
    }
    setControlExtensionList(t) {
      this.draw.getControl().setExtensionListById(t)
    }
    setControlProperties(t) {
      this.draw.getControl().setPropertiesListById([t])
    }
    setControlPropertiesList(t) {
      this.draw.getControl().setPropertiesListById(t)
    }
    setControlHighlight(t) {
      this.draw.getControl().setHighlightList(t),
        this.draw.render({ isSubmitHistory: !1 })
    }
    updateOptions(t) {
      const e = ke(t)
      Object.entries(e).forEach(([n, o]) => {
        Reflect.set(this.options, n, o)
      }),
        this.forceUpdate()
    }
    getControlList() {
      return this.draw.getControl().getList()
    }
    locationControl(t, e) {
      function n(s, i) {
        var R, c, d
        let r = 0
        for (; r < s.length; ) {
          const h = s[r]
          if ((r++, h.type === a.ElementType.TABLE)) {
            const g = h.trList
            for (let T = 0; T < g.length; T++) {
              const P = g[T]
              for (let O = 0; O < P.tdList.length; O++) {
                const M = P.tdList[O],
                  S = n(M.value, i)
                if (S)
                  return v(C({}, S), {
                    positionContext: {
                      isTable: !0,
                      index: r - 1,
                      trIndex: T,
                      tdIndex: O,
                      tdId: h.tdId,
                      trId: h.trId,
                      tableId: h.tableId
                    }
                  })
              }
            }
          }
          if ((h == null ? void 0 : h.controlId) !== t) continue
          let u = r - 1
          if (
            (e == null ? void 0 : e.position) === a.LocationPosition.OUTER_AFTER
          ) {
            if (
              !(
                h.controlComponent === a.ControlComponent.POSTFIX &&
                ((R = s[r + 1]) == null ? void 0 : R.controlComponent) !==
                  a.ControlComponent.POST_TEXT
              )
            )
              continue
          } else if (
            (e == null ? void 0 : e.position) ===
            a.LocationPosition.OUTER_BEFORE
          )
            u -= 1
          else if (
            (e == null ? void 0 : e.position) === a.LocationPosition.AFTER
          ) {
            if (
              ((u -= 1),
              h.controlComponent !== a.ControlComponent.PLACEHOLDER &&
                h.controlComponent !== a.ControlComponent.POSTFIX &&
                h.controlComponent !== a.ControlComponent.POST_TEXT)
            )
              continue
          } else if (
            (h.controlComponent !== a.ControlComponent.PREFIX &&
              h.controlComponent !== a.ControlComponent.PRE_TEXT) ||
            ((c = s[r]) == null ? void 0 : c.controlComponent) ===
              a.ControlComponent.PREFIX ||
            ((d = s[r]) == null ? void 0 : d.controlComponent) ===
              a.ControlComponent.PRE_TEXT
          )
            continue
          return {
            zone: i,
            range: { startIndex: u, endIndex: u },
            positionContext: { isTable: !1 }
          }
        }
        return null
      }
      const o = [
        {
          zone: a.EditorZone.HEADER,
          elementList: this.draw.getHeaderElementList()
        },
        {
          zone: a.EditorZone.MAIN,
          elementList: this.draw.getOriginalMainElementList()
        },
        {
          zone: a.EditorZone.FOOTER,
          elementList: this.draw.getFooterElementList()
        }
      ]
      for (const s of o) {
        const i = n(s.elementList, s.zone)
        if (i) {
          this.setZone(i.zone),
            this.position.setPositionContext(i.positionContext),
            this.range.replaceRange(i.range),
            this.draw.render({
              curIndex: i.range.startIndex,
              isCompute: !1,
              isSubmitHistory: !1
            })
          break
        }
      }
    }
    insertControl(t) {
      if (this.draw.isReadonly() || this.draw.isDisabled()) return
      const n = k(t),
        { startIndex: o } = this.range.getRange(),
        s = this.draw.getElementList(),
        i = We(s, o)
      if (!i) return
      const r = [...ue, ...$t, ...Ie, ...ee]
      kt(r, i, n), this.draw.insertElementList([n])
    }
    getContainer() {
      return this.draw.getContainer()
    }
    getTitleValue(t) {
      const { conceptId: e } = t,
        n = [],
        o = (i, r) => {
          var c
          let R = 0
          for (; R < i.length; ) {
            const d = i[R]
            if ((R++, d.type === a.ElementType.TABLE)) {
              const g = d.trList
              for (let T = 0; T < g.length; T++) {
                const P = g[T]
                for (let O = 0; O < P.tdList.length; O++) {
                  const M = P.tdList[O]
                  o(M.value, r)
                }
              }
            }
            if (
              ((c = d == null ? void 0 : d.title) == null
                ? void 0
                : c.conceptId) !== e
            )
              continue
            const h = []
            let u = R
            for (; u < i.length; ) {
              const g = i[u]
              if ((u++, d.titleId !== g.titleId)) {
                if (g.level && Be[g.level] <= Be[d.level]) break
                h.push(g)
              }
            }
            n.push(
              v(C({}, d.title), { value: le(h), elementList: z(h), zone: r })
            ),
              (R = u)
          }
        },
        s = [
          {
            zone: a.EditorZone.HEADER,
            elementList: this.draw.getHeaderElementList()
          },
          {
            zone: a.EditorZone.MAIN,
            elementList: this.draw.getOriginalMainElementList()
          },
          {
            zone: a.EditorZone.FOOTER,
            elementList: this.draw.getFooterElementList()
          }
        ]
      for (const { zone: i, elementList: r } of s) o(r, i)
      return n
    }
    getPositionContextByEvent(t, e = {}) {
      var F, N, X
      const n = (F = t.target) == null ? void 0 : F.dataset.index
      if (!n) return null
      const { isMustDirectHit: o = !0 } = e,
        s = Number(n),
        i = this.position.getPositionByXY({
          x: t.offsetX,
          y: t.offsetY,
          pageNo: s
        }),
        {
          isDirectHit: r,
          isTable: R,
          index: c,
          trIndex: d,
          tdIndex: h,
          tdValueIndex: u,
          zone: g
        } = i
      if ((o && !r) || (g && g !== this.zone.getZone())) return null
      let T = null,
        P = null
      const O = this.draw.getOriginalElementList()
      let M = null
      const S = this.position.getOriginalPositionList()
      if (R) {
        const f = (N = O[c].trList) == null ? void 0 : N[d].tdList[h]
        ;(P = (f == null ? void 0 : f.value[u]) || null),
          (M =
            ((X = f == null ? void 0 : f.positionList) == null
              ? void 0
              : X[u]) || null),
          (T = { element: O[c], trIndex: d, tdIndex: h })
      } else (P = O[c] || null), (M = S[c] || null)
      let I = null
      if (M) {
        const {
            pageNo: f,
            coordinate: { leftTop: Q, rightTop: Z },
            lineHeight: D
          } = M,
          Y = this.draw.getOriginalHeight(),
          V = this.draw.getOriginalPageGap()
        I = { x: Q[0], y: Q[1] + f * (Y + V), width: Z[0] - Q[0], height: D }
      }
      return { pageNo: s, element: P, rangeRect: I, tableInfo: T }
    }
    insertTitle(t) {
      var R
      if (this.draw.isReadonly() || this.draw.isDisabled()) return
      const n = k(t),
        { startIndex: o } = this.range.getRange(),
        s = this.draw.getElementList(),
        i = We(s, o)
      if (!i) return
      const r = [...ue, ...$t, ...Ie, ...ee]
      ;(R = n.valueList) == null ||
        R.forEach(c => {
          kt(r, i, c)
        }),
        this.draw.insertElementList([n])
    }
    focus(t) {
      var R, c
      const {
        position: e = a.LocationPosition.AFTER,
        isMoveCursorToVisible: n = !0,
        rowNo: o,
        range: s
      } = t || {}
      let i = -1
      if (s)
        this.range.replaceRange(s),
          (i = e === a.LocationPosition.BEFORE ? s.startIndex : s.endIndex)
      else if (ye(o)) {
        const d = this.draw.getOriginalRowList()
        if (
          ((i =
            e === a.LocationPosition.BEFORE
              ? (R = d[o]) == null
                ? void 0
                : R.startIndex
              : ((c = d[o + 1]) == null ? void 0 : c.startIndex) - 1),
          !ye(i))
        )
          return
        this.range.setRange(i, i)
      } else
        (i =
          e === a.LocationPosition.BEFORE
            ? 0
            : this.draw.getOriginalMainElementList().length - 1),
          this.range.setRange(i, i)
      const r = { isCompute: !1, isSetCursor: !1, isSubmitHistory: !1 }
      if (
        (~i &&
          this.range.getIsCollapsed() &&
          ((r.curIndex = i), (r.isSetCursor = !0)),
        this.draw.render(r),
        n)
      ) {
        const d = this.draw.getPosition().getPositionList()
        this.draw
          .getCursor()
          .moveCursorToVisible({ cursorPosition: d[i], direction: ht.DOWN })
      }
    }
    insertArea(t) {
      return this.draw.getArea().insertArea(t)
    }
    setAreaProperties(t) {
      this.draw.getArea().setAreaProperties(t)
    }
    locationArea(t) {
      const e = this.draw.getArea().getContextByAreaId(t)
      if (!e) return
      const {
        range: { endIndex: n },
        elementPosition: o
      } = e
      this.position.setPositionContext({ isTable: !1 }),
        this.range.setRange(n, n),
        this.draw.render({
          isSetCursor: !1,
          isCompute: !1,
          isSubmitHistory: !1
        })
      const s = this.draw.getCursor()
      this.position.setCursorPosition(o),
        s.drawCursor({ hitLineStartIndex: n }),
        s.moveCursorToVisible({ cursorPosition: o, direction: ht.UP })
    }
  }
  class sl {
    constructor() {
      L(this, 'rangeStyleChange')
      L(this, 'visiblePageNoListChange')
      L(this, 'intersectionPageNoChange')
      L(this, 'pageSizeChange')
      L(this, 'pageScaleChange')
      L(this, 'saved')
      L(this, 'contentChange')
      L(this, 'controlChange')
      L(this, 'controlContentChange')
      L(this, 'pageModeChange')
      L(this, 'zoneChange')
      ;(this.rangeStyleChange = null),
        (this.visiblePageNoListChange = null),
        (this.intersectionPageNoChange = null),
        (this.pageSizeChange = null),
        (this.pageScaleChange = null),
        (this.saved = null),
        (this.contentChange = null),
        (this.controlChange = null),
        (this.controlContentChange = null),
        (this.pageModeChange = null),
        (this.zoneChange = null)
    }
  }
  class ll {
    constructor(t) {
      L(this, 'contextMenuList')
      L(this, 'getContextMenuList')
      L(this, 'shortcutList')
      L(this, 'langMap')
      const { contextMenu: e, shortcut: n, i18n: o } = t
      ;(this.contextMenuList = e.registerContextMenuList.bind(e)),
        (this.getContextMenuList = e.getContextMenuList.bind(e)),
        (this.shortcutList = n.registerShortcutList.bind(n)),
        (this.langMap = o.registerLangMap.bind(o))
    }
  }
  const si = { SELECTED_TEXT: '%s' },
    ce = {
      GLOBAL: {
        CUT: 'globalCut',
        COPY: 'globalCopy',
        PASTE: 'globalPaste',
        SELECT_ALL: 'globalSelectAll',
        PRINT: 'globalPrint'
      },
      CONTROL: { DELETE: 'controlDelete' },
      HYPERLINK: {
        DELETE: 'hyperlinkDelete',
        CANCEL: 'hyperlinkCancel',
        EDIT: 'hyperlinkEdit'
      },
      IMAGE: {
        CHANGE: 'imageChange',
        SAVE_AS: 'imageSaveAs',
        TEXT_WRAP: 'imageTextWrap',
        TEXT_WRAP_EMBED: 'imageTextWrapEmbed',
        TEXT_WRAP_UP_DOWN: 'imageTextWrapUpDown',
        TEXT_WRAP_SURROUND: 'imageTextWrapSurround',
        TEXT_WRAP_FLOAT_TOP: 'imageTextWrapFloatTop',
        TEXT_WRAP_FLOAT_BOTTOM: 'imageTextWrapFloatBottom'
      },
      TABLE: {
        BORDER: 'border',
        BORDER_ALL: 'tableBorderAll',
        BORDER_EMPTY: 'tableBorderEmpty',
        BORDER_DASH: 'tableBorderDash',
        BORDER_EXTERNAL: 'tableBorderExternal',
        BORDER_INTERNAL: 'tableBorderInternal',
        BORDER_TD: 'tableBorderTd',
        BORDER_TD_TOP: 'tableBorderTdTop',
        BORDER_TD_RIGHT: 'tableBorderTdRight',
        BORDER_TD_BOTTOM: 'tableBorderTdBottom',
        BORDER_TD_LEFT: 'tableBorderTdLeft',
        BORDER_TD_FORWARD: 'tableBorderTdForward',
        BORDER_TD_BACK: 'tableBorderTdBack',
        VERTICAL_ALIGN: 'tableVerticalAlign',
        VERTICAL_ALIGN_TOP: 'tableVerticalAlignTop',
        VERTICAL_ALIGN_MIDDLE: 'tableVerticalAlignMiddle',
        VERTICAL_ALIGN_BOTTOM: 'tableVerticalAlignBottom',
        INSERT_ROW_COL: 'tableInsertRowCol',
        INSERT_TOP_ROW: 'tableInsertTopRow',
        INSERT_BOTTOM_ROW: 'tableInsertBottomRow',
        INSERT_LEFT_COL: 'tableInsertLeftCol',
        INSERT_RIGHT_COL: 'tableInsertRightCol',
        DELETE_ROW_COL: 'tableDeleteRowCol',
        DELETE_ROW: 'tableDeleteRow',
        DELETE_COL: 'tableDeleteCol',
        DELETE_TABLE: 'tableDeleteTable',
        MERGE_CELL: 'tableMergeCell',
        CANCEL_MERGE_CELL: 'tableCancelMergeCell'
      }
    },
    {
      CONTROL: { DELETE: rl }
    } = ce,
    Rl = [
      {
        key: rl,
        i18nPath: 'contextmenu.control.delete',
        when: l => {
          var t
          return (
            !l.isReadonly &&
            !l.editorHasSelection &&
            !!((t = l.startElement) == null ? void 0 : t.controlId) &&
            l.options.mode !== a.EditorMode.FORM
          )
        },
        callback: l => {
          l.executeRemoveControl()
        }
      }
    ],
    {
      GLOBAL: { CUT: al, COPY: cl, PASTE: dl, SELECT_ALL: hl, PRINT: ul }
    } = ce,
    gl = [
      {
        key: al,
        i18nPath: 'contextmenu.global.cut',
        shortCut: `${zt ? '\u2318' : 'Ctrl'} + X`,
        when: l => !l.isReadonly,
        callback: l => {
          l.executeCut()
        }
      },
      {
        key: cl,
        i18nPath: 'contextmenu.global.copy',
        shortCut: `${zt ? '\u2318' : 'Ctrl'} + C`,
        when: l => l.editorHasSelection || l.isCrossRowCol,
        callback: l => {
          l.executeCopy()
        }
      },
      {
        key: dl,
        i18nPath: 'contextmenu.global.paste',
        shortCut: `${zt ? '\u2318' : 'Ctrl'} + V`,
        when: l => !l.isReadonly && l.editorTextFocus,
        callback: l => {
          l.executePaste()
        }
      },
      {
        key: hl,
        i18nPath: 'contextmenu.global.selectAll',
        shortCut: `${zt ? '\u2318' : 'Ctrl'} + A`,
        when: l => l.editorTextFocus,
        callback: l => {
          l.executeSelectAll()
        }
      },
      { isDivider: !0 },
      {
        key: ul,
        i18nPath: 'contextmenu.global.print',
        icon: 'print',
        when: () => !0,
        callback: l => {
          l.executePrint()
        }
      }
    ],
    {
      HYPERLINK: { DELETE: Ll, CANCEL: Tl, EDIT: Pl }
    } = ce,
    Ml = [
      {
        key: Ll,
        i18nPath: 'contextmenu.hyperlink.delete',
        when: l => {
          var t
          return (
            !l.isReadonly &&
            ((t = l.startElement) == null ? void 0 : t.type) ===
              a.ElementType.HYPERLINK
          )
        },
        callback: l => {
          l.executeDeleteHyperlink()
        }
      },
      {
        key: Tl,
        i18nPath: 'contextmenu.hyperlink.cancel',
        when: l => {
          var t
          return (
            !l.isReadonly &&
            ((t = l.startElement) == null ? void 0 : t.type) ===
              a.ElementType.HYPERLINK
          )
        },
        callback: l => {
          l.executeCancelHyperlink()
        }
      },
      {
        key: Pl,
        i18nPath: 'contextmenu.hyperlink.edit',
        when: l => {
          var t
          return (
            !l.isReadonly &&
            ((t = l.startElement) == null ? void 0 : t.type) ===
              a.ElementType.HYPERLINK
          )
        },
        callback: (l, t) => {
          var n
          const e = window.prompt(
            '\u7F16\u8F91\u94FE\u63A5',
            (n = t.startElement) == null ? void 0 : n.url
          )
          e && l.executeEditHyperlink(e)
        }
      }
    ],
    {
      IMAGE: {
        CHANGE: Ol,
        SAVE_AS: Sl,
        TEXT_WRAP: Xl,
        TEXT_WRAP_EMBED: Nl,
        TEXT_WRAP_UP_DOWN: Il,
        TEXT_WRAP_SURROUND: Fl,
        TEXT_WRAP_FLOAT_TOP: fl,
        TEXT_WRAP_FLOAT_BOTTOM: ml
      }
    } = ce,
    Wl = [
      {
        key: Ol,
        i18nPath: 'contextmenu.image.change',
        icon: 'image-change',
        when: l => {
          var t
          return (
            !l.isReadonly &&
            !l.editorHasSelection &&
            ((t = l.startElement) == null ? void 0 : t.type) ===
              a.ElementType.IMAGE
          )
        },
        callback: l => {
          const t = document.createElement('input')
          ;(t.type = 'file'),
            (t.accept = '.png, .jpg, .jpeg'),
            (t.onchange = () => {
              const e = t.files[0],
                n = new FileReader()
              n.readAsDataURL(e),
                (n.onload = () => {
                  const o = n.result
                  l.executeReplaceImageElement(o)
                })
            }),
            t.click()
        }
      },
      {
        key: Sl,
        i18nPath: 'contextmenu.image.saveAs',
        icon: 'image',
        when: l => {
          var t
          return (
            !l.editorHasSelection &&
            ((t = l.startElement) == null ? void 0 : t.type) ===
              a.ElementType.IMAGE
          )
        },
        callback: l => {
          l.executeSaveAsImageElement()
        }
      },
      {
        key: Xl,
        i18nPath: 'contextmenu.image.textWrap',
        when: l => {
          var t
          return (
            !l.isReadonly &&
            !l.editorHasSelection &&
            ((t = l.startElement) == null ? void 0 : t.type) ===
              a.ElementType.IMAGE
          )
        },
        childMenus: [
          {
            key: Nl,
            i18nPath: 'contextmenu.image.textWrapType.embed',
            when: () => !0,
            callback: (l, t) => {
              l.executeChangeImageDisplay(t.startElement, a.ImageDisplay.BLOCK)
            }
          },
          {
            key: Il,
            i18nPath: 'contextmenu.image.textWrapType.upDown',
            when: () => !0,
            callback: (l, t) => {
              l.executeChangeImageDisplay(t.startElement, a.ImageDisplay.INLINE)
            }
          },
          {
            key: Fl,
            i18nPath: 'contextmenu.image.textWrapType.surround',
            when: () => !0,
            callback: (l, t) => {
              l.executeChangeImageDisplay(
                t.startElement,
                a.ImageDisplay.SURROUND
              )
            }
          },
          {
            key: fl,
            i18nPath: 'contextmenu.image.textWrapType.floatTop',
            when: () => !0,
            callback: (l, t) => {
              l.executeChangeImageDisplay(
                t.startElement,
                a.ImageDisplay.FLOAT_TOP
              )
            }
          },
          {
            key: ml,
            i18nPath: 'contextmenu.image.textWrapType.floatBottom',
            when: () => !0,
            callback: (l, t) => {
              l.executeChangeImageDisplay(
                t.startElement,
                a.ImageDisplay.FLOAT_BOTTOM
              )
            }
          }
        ]
      }
    ],
    {
      TABLE: {
        BORDER: Vl,
        BORDER_ALL: Zl,
        BORDER_EMPTY: Ul,
        BORDER_DASH: Yl,
        BORDER_EXTERNAL: pl,
        BORDER_INTERNAL: Ql,
        BORDER_TD: Dl,
        BORDER_TD_TOP: Cl,
        BORDER_TD_LEFT: El,
        BORDER_TD_BOTTOM: Kl,
        BORDER_TD_RIGHT: bl,
        BORDER_TD_BACK: yl,
        BORDER_TD_FORWARD: wl,
        VERTICAL_ALIGN: Hl,
        VERTICAL_ALIGN_TOP: Gl,
        VERTICAL_ALIGN_MIDDLE: Jl,
        VERTICAL_ALIGN_BOTTOM: xl,
        INSERT_ROW_COL: vl,
        INSERT_TOP_ROW: Bl,
        INSERT_BOTTOM_ROW: Al,
        INSERT_LEFT_COL: kl,
        INSERT_RIGHT_COL: _l,
        DELETE_ROW_COL: zl,
        DELETE_ROW: $l,
        DELETE_COL: jl,
        DELETE_TABLE: ql,
        MERGE_CELL: tr,
        CANCEL_MERGE_CELL: er
      }
    } = ce,
    nr = [
      { isDivider: !0 },
      {
        key: Vl,
        i18nPath: 'contextmenu.table.border',
        icon: 'border-all',
        when: l =>
          !l.isReadonly && l.isInTable && l.options.mode !== a.EditorMode.FORM,
        childMenus: [
          {
            key: Zl,
            i18nPath: 'contextmenu.table.borderAll',
            icon: 'border-all',
            when: () => !0,
            callback: l => {
              l.executeTableBorderType(a.TableBorder.ALL)
            }
          },
          {
            key: Ul,
            i18nPath: 'contextmenu.table.borderEmpty',
            icon: 'border-empty',
            when: () => !0,
            callback: l => {
              l.executeTableBorderType(a.TableBorder.EMPTY)
            }
          },
          {
            key: Yl,
            i18nPath: 'contextmenu.table.borderDash',
            icon: 'border-dash',
            when: () => !0,
            callback: l => {
              l.executeTableBorderType(a.TableBorder.DASH)
            }
          },
          {
            key: pl,
            i18nPath: 'contextmenu.table.borderExternal',
            icon: 'border-external',
            when: () => !0,
            callback: l => {
              l.executeTableBorderType(a.TableBorder.EXTERNAL)
            }
          },
          {
            key: Ql,
            i18nPath: 'contextmenu.table.borderInternal',
            icon: 'border-internal',
            when: () => !0,
            callback: l => {
              l.executeTableBorderType(a.TableBorder.INTERNAL)
            }
          },
          {
            key: Dl,
            i18nPath: 'contextmenu.table.borderTd',
            icon: 'border-td',
            when: () => !0,
            childMenus: [
              {
                key: Cl,
                i18nPath: 'contextmenu.table.borderTdTop',
                icon: 'border-td-top',
                when: () => !0,
                callback: l => {
                  l.executeTableTdBorderType(a.TdBorder.TOP)
                }
              },
              {
                key: bl,
                i18nPath: 'contextmenu.table.borderTdRight',
                icon: 'border-td-right',
                when: () => !0,
                callback: l => {
                  l.executeTableTdBorderType(a.TdBorder.RIGHT)
                }
              },
              {
                key: Kl,
                i18nPath: 'contextmenu.table.borderTdBottom',
                icon: 'border-td-bottom',
                when: () => !0,
                callback: l => {
                  l.executeTableTdBorderType(a.TdBorder.BOTTOM)
                }
              },
              {
                key: El,
                i18nPath: 'contextmenu.table.borderTdLeft',
                icon: 'border-td-left',
                when: () => !0,
                callback: l => {
                  l.executeTableTdBorderType(a.TdBorder.LEFT)
                }
              },
              {
                key: wl,
                i18nPath: 'contextmenu.table.borderTdForward',
                icon: 'border-td-forward',
                when: () => !0,
                callback: l => {
                  l.executeTableTdSlashType(a.TdSlash.FORWARD)
                }
              },
              {
                key: yl,
                i18nPath: 'contextmenu.table.borderTdBack',
                icon: 'border-td-back',
                when: () => !0,
                callback: l => {
                  l.executeTableTdSlashType(a.TdSlash.BACK)
                }
              }
            ]
          }
        ]
      },
      {
        key: Hl,
        i18nPath: 'contextmenu.table.verticalAlign',
        icon: 'vertical-align',
        when: l =>
          !l.isReadonly && l.isInTable && l.options.mode !== a.EditorMode.FORM,
        childMenus: [
          {
            key: Gl,
            i18nPath: 'contextmenu.table.verticalAlignTop',
            icon: 'vertical-align-top',
            when: () => !0,
            callback: l => {
              l.executeTableTdVerticalAlign(a.VerticalAlign.TOP)
            }
          },
          {
            key: Jl,
            i18nPath: 'contextmenu.table.verticalAlignMiddle',
            icon: 'vertical-align-middle',
            when: () => !0,
            callback: l => {
              l.executeTableTdVerticalAlign(a.VerticalAlign.MIDDLE)
            }
          },
          {
            key: xl,
            i18nPath: 'contextmenu.table.verticalAlignBottom',
            icon: 'vertical-align-bottom',
            when: () => !0,
            callback: l => {
              l.executeTableTdVerticalAlign(a.VerticalAlign.BOTTOM)
            }
          }
        ]
      },
      {
        key: vl,
        i18nPath: 'contextmenu.table.insertRowCol',
        icon: 'insert-row-col',
        when: l =>
          !l.isReadonly && l.isInTable && l.options.mode !== a.EditorMode.FORM,
        childMenus: [
          {
            key: Bl,
            i18nPath: 'contextmenu.table.insertTopRow',
            icon: 'insert-top-row',
            when: () => !0,
            callback: l => {
              l.executeInsertTableTopRow()
            }
          },
          {
            key: Al,
            i18nPath: 'contextmenu.table.insertBottomRow',
            icon: 'insert-bottom-row',
            when: () => !0,
            callback: l => {
              l.executeInsertTableBottomRow()
            }
          },
          {
            key: kl,
            i18nPath: 'contextmenu.table.insertLeftCol',
            icon: 'insert-left-col',
            when: () => !0,
            callback: l => {
              l.executeInsertTableLeftCol()
            }
          },
          {
            key: _l,
            i18nPath: 'contextmenu.table.insertRightCol',
            icon: 'insert-right-col',
            when: () => !0,
            callback: l => {
              l.executeInsertTableRightCol()
            }
          }
        ]
      },
      {
        key: zl,
        i18nPath: 'contextmenu.table.deleteRowCol',
        icon: 'delete-row-col',
        when: l =>
          !l.isReadonly && l.isInTable && l.options.mode !== a.EditorMode.FORM,
        childMenus: [
          {
            key: $l,
            i18nPath: 'contextmenu.table.deleteRow',
            icon: 'delete-row',
            when: () => !0,
            callback: l => {
              l.executeDeleteTableRow()
            }
          },
          {
            key: jl,
            i18nPath: 'contextmenu.table.deleteCol',
            icon: 'delete-col',
            when: () => !0,
            callback: l => {
              l.executeDeleteTableCol()
            }
          },
          {
            key: ql,
            i18nPath: 'contextmenu.table.deleteTable',
            icon: 'delete-table',
            when: () => !0,
            callback: l => {
              l.executeDeleteTable()
            }
          }
        ]
      },
      {
        key: tr,
        i18nPath: 'contextmenu.table.mergeCell',
        icon: 'merge-cell',
        when: l =>
          !l.isReadonly &&
          l.isCrossRowCol &&
          l.options.mode !== a.EditorMode.FORM,
        callback: l => {
          l.executeMergeTableCell()
        }
      },
      {
        key: er,
        i18nPath: 'contextmenu.table.mergeCancelCell',
        icon: 'merge-cancel-cell',
        when: l =>
          !l.isReadonly && l.isInTable && l.options.mode !== a.EditorMode.FORM,
        callback: l => {
          l.executeCancelMergeTableCell()
        }
      }
    ]
  class ir {
    constructor(t, e) {
      L(this, 'options')
      L(this, 'draw')
      L(this, 'command')
      L(this, 'range')
      L(this, 'position')
      L(this, 'i18n')
      L(this, 'container')
      L(this, 'contextMenuList')
      L(this, 'contextMenuContainerList')
      L(this, 'contextMenuRelationShip')
      L(this, 'context')
      L(this, '_proxyContextMenuEvent', t => {
        this.context = this._getContext()
        const e = this._filterMenuList(this.contextMenuList)
        e.some(o => !o.isDivider) &&
          (this.dispose(),
          this._render({ contextMenuList: e, left: t.x, top: t.y })),
          t.preventDefault()
      })
      L(this, '_handleSideEffect', t => {
        if (this.contextMenuContainerList.length) {
          const e = (t == null ? void 0 : t.composedPath()[0]) || t.target
          Se(
            e,
            o =>
              !!o &&
              o.nodeType === 1 &&
              o.getAttribute(_t) === a.EditorComponent.CONTEXTMENU,
            !0
          ) || this.dispose()
        }
      })
      ;(this.options = t.getOptions()),
        (this.draw = t),
        (this.command = e),
        (this.range = t.getRange()),
        (this.position = t.getPosition()),
        (this.i18n = t.getI18n()),
        (this.container = t.getContainer()),
        (this.context = null),
        (this.contextMenuList = [...gl, ...nr, ...Wl, ...Rl, ...Ml]),
        (this.contextMenuContainerList = []),
        (this.contextMenuRelationShip = new Map()),
        this._addEvent()
    }
    getContextMenuList() {
      return this.contextMenuList
    }
    _addEvent() {
      this.container.addEventListener(
        'contextmenu',
        this._proxyContextMenuEvent
      ),
        document.addEventListener('mousedown', this._handleSideEffect)
    }
    removeEvent() {
      this.container.removeEventListener(
        'contextmenu',
        this._proxyContextMenuEvent
      ),
        document.removeEventListener('mousedown', this._handleSideEffect)
    }
    _filterMenuList(t) {
      var o
      const { contextMenuDisableKeys: e } = this.options,
        n = []
      for (let s = 0; s < t.length; s++) {
        const i = t[s]
        i.disable ||
          (i.key && e.includes(i.key)) ||
          ((i.isDivider ||
            ((o = i.when) == null ? void 0 : o.call(i, this.context))) &&
            n.push(i))
      }
      return n
    }
    _getContext() {
      const t = this.draw.isReadonly(),
        {
          isCrossRowCol: e,
          startIndex: n,
          endIndex: o
        } = this.range.getRange(),
        s = !!(~n || ~o),
        i = s && n !== o,
        {
          isTable: r,
          trIndex: R,
          tdIndex: c,
          index: d
        } = this.position.getPositionContext()
      let h = null
      if (r) {
        const S = this.draw.getOriginalElementList()[d] || null
        S && (h = z([S], { extraPickAttrs: ['id'] })[0])
      }
      const u = r && !!e,
        g = this.draw.getElementList(),
        T = g[n] || null,
        P = g[o] || null,
        O = this.draw.getZone().getZone()
      return {
        startElement: T,
        endElement: P,
        isReadonly: t,
        editorHasSelection: i,
        editorTextFocus: s,
        isCrossRowCol: u,
        zone: O,
        isInTable: r,
        trIndex: R != null ? R : null,
        tdIndex: c != null ? c : null,
        tableElement: h,
        options: this.options
      }
    }
    _createContextMenuContainer() {
      const t = document.createElement('div')
      return (
        t.classList.add(`${x}-contextmenu-container`),
        t.setAttribute(_t, a.EditorComponent.CONTEXTMENU),
        this.container.append(t),
        t
      )
    }
    _render(t) {
      var O
      const { contextMenuList: e, left: n, top: o, parentMenuContainer: s } = t,
        i = this._createContextMenuContainer(),
        r = document.createElement('div')
      r.classList.add(`${x}-contextmenu-content`)
      let R = null
      s && this.contextMenuRelationShip.set(s, i)
      for (let M = 0; M < e.length; M++) {
        const S = e[M]
        if (S.isDivider) {
          if (
            M !== 0 &&
            M !== e.length - 1 &&
            !((O = e[M - 1]) == null ? void 0 : O.isDivider)
          ) {
            const I = document.createElement('div')
            I.classList.add(`${x}-contextmenu-divider`), r.append(I)
          }
        } else {
          const I = document.createElement('div')
          if ((I.classList.add(`${x}-contextmenu-item`), S.childMenus)) {
            const f = this._filterMenuList(S.childMenus)
            f.some(Z => !Z.isDivider) &&
              (I.classList.add(`${x}-contextmenu-sub-item`),
              (I.onmouseenter = () => {
                this._setHoverStatus(I, !0), this._removeSubMenu(i)
                const Z = I.getBoundingClientRect(),
                  D = Z.left + Z.width,
                  Y = Z.top
                R = this._render({
                  contextMenuList: f,
                  left: D,
                  top: Y,
                  parentMenuContainer: i
                })
              }),
              (I.onmouseleave = Z => {
                ;(!R || !R.contains(Z.relatedTarget)) &&
                  this._setHoverStatus(I, !1)
              }))
          } else
            (I.onmouseenter = () => {
              this._setHoverStatus(I, !0), this._removeSubMenu(i)
            }),
              (I.onmouseleave = () => {
                this._setHoverStatus(I, !1)
              }),
              (I.onclick = () => {
                S.callback &&
                  this.context &&
                  S.callback(this.command, this.context),
                  this.dispose()
              })
          const F = document.createElement('i')
          I.append(F), S.icon && F.classList.add(`${x}-contextmenu-${S.icon}`)
          const N = document.createElement('span'),
            X = S.i18nPath
              ? this._formatName(this.i18n.t(S.i18nPath))
              : this._formatName(S.name || '')
          if ((N.append(document.createTextNode(X)), I.append(N), S.shortCut)) {
            const f = document.createElement('span')
            f.classList.add(`${x}-shortcut`),
              f.append(document.createTextNode(S.shortCut)),
              I.append(f)
          }
          r.append(I)
        }
      }
      i.append(r), (i.style.display = 'block')
      const c = window.innerWidth,
        d = i.getBoundingClientRect(),
        h = d.width,
        u = n + h > c ? n - h : n
      i.style.left = `${u}px`
      const g = window.innerHeight,
        T = d.height,
        P = o + T > g ? o - T : o
      return (i.style.top = `${P}px`), this.contextMenuContainerList.push(i), i
    }
    _removeSubMenu(t) {
      const e = this.contextMenuRelationShip.get(t)
      e &&
        (this._removeSubMenu(e),
        e.remove(),
        this.contextMenuRelationShip.delete(t))
    }
    _setHoverStatus(t, e) {
      var n
      e
        ? ((n = t.parentNode) == null ||
            n
              .querySelectorAll(`${x}-contextmenu-item`)
              .forEach(o => o.classList.remove('hover')),
          t.classList.add('hover'))
        : t.classList.remove('hover')
    }
    _formatName(t) {
      const e = Object.values(si),
        n = new RegExp(`${e.join('|')}`)
      let o = t
      if (n.test(o)) {
        const s = new RegExp(si.SELECTED_TEXT, 'g')
        if (s.test(o)) {
          const i = this.range.toString()
          o = o.replace(s, i)
        }
      }
      return o
    }
    registerContextMenuList(t) {
      this.contextMenuList.push(...t)
    }
    dispose() {
      this.contextMenuContainerList.forEach(t => t.remove()),
        (this.contextMenuContainerList = []),
        this.contextMenuRelationShip.clear()
    }
  }
  const or = [
      {
        key: a.KeyMap.X,
        ctrl: !0,
        shift: !0,
        callback: l => {
          l.executeStrikeout()
        }
      },
      {
        key: a.KeyMap.LEFT_BRACKET,
        mod: !0,
        callback: l => {
          l.executeSizeAdd()
        }
      },
      {
        key: a.KeyMap.RIGHT_BRACKET,
        mod: !0,
        callback: l => {
          l.executeSizeMinus()
        }
      },
      {
        key: a.KeyMap.B,
        mod: !0,
        callback: l => {
          l.executeBold()
        }
      },
      {
        key: a.KeyMap.I,
        mod: !0,
        callback: l => {
          l.executeItalic()
        }
      },
      {
        key: a.KeyMap.U,
        mod: !0,
        callback: l => {
          l.executeUnderline()
        }
      },
      {
        key: zt ? a.KeyMap.COMMA : a.KeyMap.RIGHT_ANGLE_BRACKET,
        mod: !0,
        shift: !0,
        callback: l => {
          l.executeSuperscript()
        }
      },
      {
        key: zt ? a.KeyMap.PERIOD : a.KeyMap.LEFT_ANGLE_BRACKET,
        mod: !0,
        shift: !0,
        callback: l => {
          l.executeSubscript()
        }
      },
      {
        key: a.KeyMap.L,
        mod: !0,
        callback: l => {
          l.executeRowFlex(a.RowFlex.LEFT)
        }
      },
      {
        key: a.KeyMap.E,
        mod: !0,
        callback: l => {
          l.executeRowFlex(a.RowFlex.CENTER)
        }
      },
      {
        key: a.KeyMap.R,
        mod: !0,
        callback: l => {
          l.executeRowFlex(a.RowFlex.RIGHT)
        }
      },
      {
        key: a.KeyMap.J,
        mod: !0,
        callback: l => {
          l.executeRowFlex(a.RowFlex.ALIGNMENT)
        }
      },
      {
        key: a.KeyMap.J,
        mod: !0,
        shift: !0,
        callback: l => {
          l.executeRowFlex(a.RowFlex.JUSTIFY)
        }
      }
    ],
    sr = [
      {
        key: a.KeyMap.ZERO,
        alt: !0,
        ctrl: !0,
        callback: l => {
          l.executeTitle(null)
        }
      },
      {
        key: a.KeyMap.ONE,
        alt: !0,
        ctrl: !0,
        callback: l => {
          l.executeTitle(a.TitleLevel.FIRST)
        }
      },
      {
        key: a.KeyMap.TWO,
        alt: !0,
        ctrl: !0,
        callback: l => {
          l.executeTitle(a.TitleLevel.SECOND)
        }
      },
      {
        key: a.KeyMap.THREE,
        alt: !0,
        ctrl: !0,
        callback: l => {
          l.executeTitle(a.TitleLevel.THIRD)
        }
      },
      {
        key: a.KeyMap.FOUR,
        alt: !0,
        ctrl: !0,
        callback: l => {
          l.executeTitle(a.TitleLevel.FOURTH)
        }
      },
      {
        key: a.KeyMap.FIVE,
        alt: !0,
        ctrl: !0,
        callback: l => {
          l.executeTitle(a.TitleLevel.FIFTH)
        }
      },
      {
        key: a.KeyMap.SIX,
        alt: !0,
        ctrl: !0,
        callback: l => {
          l.executeTitle(a.TitleLevel.SIXTH)
        }
      }
    ],
    lr = [
      {
        key: a.KeyMap.I,
        shift: !0,
        mod: !0,
        callback: l => {
          l.executeList(a.ListType.UL, a.ListStyle.DISC)
        }
      },
      {
        key: a.KeyMap.U,
        shift: !0,
        mod: !0,
        callback: l => {
          l.executeList(a.ListType.OL)
        }
      }
    ]
  class rr {
    constructor(t, e) {
      L(this, 'command')
      L(this, 'globalShortcutList')
      L(this, 'agentShortcutList')
      L(this, '_globalKeydown', t => {
        !this.globalShortcutList.length ||
          this._execute(t, this.globalShortcutList)
      })
      ;(this.command = e),
        (this.globalShortcutList = []),
        (this.agentShortcutList = []),
        this._addShortcutList([...or, ...sr, ...lr]),
        this._addEvent(),
        t
          .getCursor()
          .getAgentDom()
          .addEventListener('keydown', this._agentKeydown.bind(this))
    }
    _addEvent() {
      document.addEventListener('keydown', this._globalKeydown)
    }
    removeEvent() {
      document.removeEventListener('keydown', this._globalKeydown)
    }
    _addShortcutList(t) {
      for (let e = t.length - 1; e >= 0; e--) {
        const n = t[e]
        n.isGlobal
          ? this.globalShortcutList.unshift(n)
          : this.agentShortcutList.unshift(n)
      }
    }
    registerShortcutList(t) {
      this._addShortcutList(t)
    }
    _agentKeydown(t) {
      !this.agentShortcutList.length || this._execute(t, this.agentShortcutList)
    }
    _execute(t, e) {
      var n
      for (let o = 0; o < e.length; o++) {
        const s = e[o]
        if (
          (s.mod
            ? Gt(t) === !!s.mod
            : t.ctrlKey === !!s.ctrl && t.metaKey === !!s.meta) &&
          t.shiftKey === !!s.shift &&
          t.altKey === !!s.alt &&
          t.key.toLowerCase() === s.key.toLowerCase()
        ) {
          s.disable ||
            ((n = s == null ? void 0 : s.callback) == null ||
              n.call(s, this.command),
            t.preventDefault())
          break
        }
      }
    }
  }
  class Rr {
    constructor(t) {
      L(this, 'editor')
      this.editor = t
    }
    use(t, e) {
      t(this.editor, e)
    }
  }
  class ar {
    constructor() {
      L(this, 'eventHub')
      this.eventHub = new Map()
    }
    on(t, e) {
      if (!t || typeof e != 'function') return
      const n = this.eventHub.get(t) || new Set()
      n.add(e), this.eventHub.set(t, n)
    }
    emit(t, e) {
      if (!t) return
      const n = this.eventHub.get(t)
      if (!!n) {
        if (n.size === 1) return [...n][0](e)
        n.forEach(o => o(e))
      }
    }
    off(t, e) {
      if (!t || typeof e != 'function') return
      const n = this.eventHub.get(t)
      !n || n.delete(e)
    }
    isSubscribe(t) {
      const e = this.eventHub.get(t)
      return !!e && e.size > 0
    }
  }
  class cr {
    constructor() {
      L(this, 'paste')
      L(this, 'copy')
      L(this, 'drop')
    }
  }
  class li {
    constructor(t, e, n = {}) {
      L(this, 'command')
      L(this, 'listener')
      L(this, 'eventBus')
      L(this, 'override')
      L(this, 'register')
      L(this, 'destroy')
      L(this, 'use')
      const o = ke(n)
      e = k(e)
      let s = [],
        i = [],
        r = []
      Array.isArray(e)
        ? (i = e)
        : ((s = e.header || []), (i = e.main), (r = e.footer || [])),
        [s, i, r].forEach(g => {
          St(g, { editorOptions: o, isForceCompensation: !0 })
        }),
        (this.listener = new sl()),
        (this.eventBus = new ar()),
        (this.override = new cr())
      const c = new el(
        t,
        o,
        { header: s, main: i, footer: r },
        this.listener,
        this.eventBus,
        this.override
      )
      this.command = new oi(new ol(c))
      const d = new ir(c, this.command),
        h = new rr(c, this.command)
      ;(this.register = new ll({
        contextMenu: d,
        shortcut: h,
        i18n: c.getI18n()
      })),
        (this.destroy = () => {
          c.destroy(), h.removeEvent(), d.removeEvent()
        })
      const u = new Rr(this)
      this.use = u.use.bind(u)
    }
  }
  ;(a.Command = oi),
    (a.EDITOR_CLIPBOARD = Ne),
    (a.EDITOR_COMPONENT = _t),
    (a.Editor = li),
    (a.INTERNAL_CONTEXT_MENU_KEY = ce),
    (a.LETTER_CLASS = gn),
    (a.createDomFromElementList = oe),
    (a.default = li),
    (a.getElementListByHTML = se),
  (a.getTextFromElementList = le),
        Object.defineProperty(a, '__esModule', { value: !0 }),
    (a[Symbol.toStringTag] = 'Module')
})()

// Additional helper methods exposed for worker-friendly APIs
;(function () {
  const CanvasEditor = window['canvas-editor']
  CanvasEditor.countWords = function (editor) {
    return editor.getWordCount()
  }
  CanvasEditor.buildCatalog = function (editor) {
    return editor.getCatalog()
  }
  CanvasEditor.fetchGroupIds = function (editor) {
    return editor.getGroupIds()
  }
})()
//# sourceMappingURL=canvas-editor.umd.js.map
