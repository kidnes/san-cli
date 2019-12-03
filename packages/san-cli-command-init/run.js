/**
 * @file init command
 * @author wangyongqing <wangyongqing01@baidu.com>
 */
const TaskList = require('./TaskList');
const checkStatus = require('./tasks/checkStatus');
const download = require('./tasks/download');
const generator = require('./tasks/generator');
const installDep = require('./tasks/installDep');
const path = require('path');
const {error} = require('san-cli-utils/ttyLogger');

module.exports = (template, appName, argv = {}) => {
    // template = alias(template);
    const inPlace = !appName || appName === '.';
    // inPlace：是否在当前目录
    argv._inPlace = inPlace;
    // dest：新建工程的目录
    const dest = path.resolve(appName || '.');
    // 记录一下开始新建工程时的起始时间
    const startTime = Date.now();
    const taskList = [
        {title: '🔍 Checking directory and offline package status...', task: checkStatus(template, dest, argv)},
        {title: '🚚 Downloading project scaffolding template...', task: download(template, dest, argv)},
        {title: '🔨 Generating directory structure...', task: generator(template, dest, argv)},
        {title: '🔗 Installing dependencies...', task: installDep(template, dest, argv)}
    ];

    // 离线脚手架目录处理
    // 1. 下载安装包 download
    // 2. 解包 unpack
    // 3. 安装 install
    // 4. 安装依赖 installDep
    // 5. 结束，显示问候语
    const tasks = new TaskList(taskList);
    tasks
        .run()
        .then(ctx => {
            // const {metaData: argv, tplData: data} = ctx;
            const duration = (((Date.now() - startTime) / 10) | 0) / 100;
            console.log('✨  Done in ' + duration + 's.');
        })
        .catch(e => {
            error(e);

            process.exit(1);
        });
};
