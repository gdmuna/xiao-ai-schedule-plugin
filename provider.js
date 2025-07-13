/**
 * @filename provider.js
 * @description 插件入口文件
 */

function scheduleHtmlProvider() {
    var kbtable = document.getElementById('kblist_table');
    if (!kbtable)
        alert(`
            没有获取到课表哦!
            请联系作者描述你遇到的问题(^.^)
            --------
            Author :  Seele.Clover
            Github :  https://github.com/seeleclover
            --------
            导入流程:
            >> 输入账号密码, 登录教务系统
            >> 点击右上角头像旁边的<≡横线按钮>
            >> 依次点击: 选课->个人课表查询/班级课表查询 , 进入课表页面
            >> 点击页面中的 <⚙齿轮按钮> , 勾选前3个框, 然后点击 <确定>
            >> 最后点击屏幕下方的 <一键导入> , 即可成功导入课表
        `);
    return kbtable.outerHTML;
}
