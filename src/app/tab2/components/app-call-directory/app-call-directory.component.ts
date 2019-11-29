import { Component, OnInit } from '@angular/core';
import { CallDirectory } from '@ionic-native/call-directory/ngx';

@Component({
    selector: 'app-app-call-directory',
    templateUrl: './app-call-directory.component.html',
    styleUrls: ['./app-call-directory.component.scss'],
})
export class AppCallDirectoryComponent implements OnInit {

    // 检查呼叫目录分机是否可用并已启用
    public isAvailable: boolean;

    public itemsCode: any[];

    constructor(
        public callDirectory: CallDirectory,
    ) {
        this.itemsCode = [111];
    }

    ngOnInit() { }

    // 检查呼叫目录分机是否可用并已启用
    public async defaultIsAvailable() {
        this.isAvailable = await this.callDirectory.isAvailable();
    }

    /**
     * 添加识别号
     */
    public addIdentification() {
        this.callDirectory.addIdentification(this.itemsCode).then(
            (msg) => { alert(msg); },
            (err) => { alert(err); }
        );
    }

    /**
     * 删除识别码
     */
    public removeIdentification() {
        this.callDirectory.removeIdentification(this.itemsCode).then(
            (msg) => { alert(msg); },
            (err) => { alert(err); }
        );
    }

    /**
     * 从呼叫目录中删除所有项目。立即刷新。
     */
    public removeAllIdentification() {
        this.callDirectory.removeAllIdentification().then(
            (msg) => { alert(msg); },
            (err) => { alert(err); }
        );
    }

    /**
     * 获取呼叫目录中的所有号码和标签
     */
    public getAllItems() {
        this.callDirectory.getAllItems().then(
            (msg) => { alert(msg); },
            (err) => { alert(err); }
        );
    }

    /**
     * 重新加载扩展以处理排队的更改
     */
    public reloadExtension() {
        this.callDirectory.reloadExtension().then(
            (msg) => { alert(msg); },
            (err) => { alert(err); }
        );
    }

    /**
     * 从插件获取日志并调用目录扩展
     */
    public getLog() {
        this.callDirectory.getLog().then(
            (msg) => { alert(msg); },
            (err) => { alert(err); }
        );
    }

}
