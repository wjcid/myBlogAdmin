<template>
    <div id="global-uploader">

        <!-- 上传 -->
        <uploader
                ref="uploader"
                :options="options"
                :autoStart="false"
                @file-added="onFileAdded"
                @file-success="onFileSuccess"
                @file-progress="onFileProgress"
                @file-error="onFileError"
                class="uploader-app">
            <uploader-unsupport></uploader-unsupport>

            <uploader-btn id="global-uploader-btn" :attrs="attrs" ref="uploadBtn">选择文件</uploader-btn>

            <uploader-list v-show="panelShow">
                <div class="file-panel" slot-scope="props" :class="{'collapse': collapse}">
                    <div class="file-title">
                        <h2>文件列表</h2>
                        <div class="operate">
                            <el-button @click="fileListShow" type="text" :title="collapse ? '展开':'折叠' ">
                                <i class="iconfont" :class="collapse ? 'inuc-fullscreen': 'inuc-minus-round'"></i>
                            </el-button>
                            <el-button @click="close" type="text" title="关闭">
                                <i class="iconfont icon-close"></i>
                            </el-button>
                        </div>
                    </div>

                    <ul class="file-list">
                        <li v-for="file in props.fileList" :key="file.id">
                            <uploader-file :class="'file_' + file.id" ref="files" :file="file" :list="true"></uploader-file>
                        </li>
                        <div class="no-file" v-if="!props.fileList.length"><i class="iconfont icon-empty-file"></i> 暂无待上传文件</div>
                    </ul>
                </div>
            </uploader-list>

        </uploader>

    </div>
</template>

<script>
    /**
     *   全局上传插件
     *   调用方法：Bus.$emit('openUploader', {}) 打开文件选择框，参数为需要传递的额外参数
     *   监听函数：Bus.$on('fileAdded', fn); 文件选择后的回调
     *            Bus.$on('fileSuccess', fn); 文件上传成功的回调
     */


    // 这两个是我自己项目中用的，请忽略
   

    export default {
        data() {
            return {
                options: {
                    target: this.$consts.BASE_URL+'upload',
                    chunkSize: '2048000',
                    fileParameterName: 'upfile',
                    maxChunkRetries: 3,
                    testChunks: true,   //是否开启服务器分片校验
                    // 服务器分片校验函数，秒传及断点续传基础
                    checkChunkUploadedByResponse: function (chunk, message) {
                        let objMessage = JSON.parse(message);
                        if (objMessage.skipUpload) {
                            return true;
                        }

                        return (objMessage.uploaded || []).indexOf(chunk.offset + 1) >= 0
                    },
                    headers: {
                        //Authorization: Ticket.get() && "Bearer " + Ticket.get().access_token
                    },
                    query() {}
                },
                attrs: {
                    accept: []
                },
                panelShow: false,   //选择文件后，展示上传panel
                collapse: false,
            }
        },   

    }
</script>

<style scoped lang="scss">
    #global-uploader {
        position: fixed;
        z-index: 20;
        right: 15px;
        bottom: 15px;

        .uploader-app {
            width: 520px;
        }

        .file-panel {
            background-color: #fff;
            border: 1px solid #e2e2e2;
            border-radius: 7px 7px 0 0;
            box-shadow: 0 0 10px rgba(0, 0, 0, .2);

            .file-title {
                display: flex;
                height: 40px;
                line-height: 40px;
                padding: 0 15px;
                border-bottom: 1px solid #ddd;

                .operate {
                    flex: 1;
                    text-align: right;
                }
            }

            .file-list {
                position: relative;
                height: 240px;
                overflow-x: hidden;
                overflow-y: auto;
                background-color: #fff;

                > li {
                    background-color: #fff;
                }
            }

            &.collapse {
                .file-title {
                    background-color: #E7ECF2;
                }
            }
        }

        .no-file {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 16px;
        }

        /deep/.uploader-file-icon {
            &:before {
                content: '' !important;
            }

            &[icon=image] {
                background: url(./images/image-icon.png);
            }
            &[icon=video] {
                background: url(./images/video-icon.png);
            }
            &[icon=document] {
                background: url(./images/text-icon.png);
            }
        }

        /deep/.uploader-file-actions > span {
            margin-right: 6px;
        }
    }

    /* 隐藏上传按钮 */
    #global-uploader-btn {
        position: absolute;
        clip: rect(0, 0, 0, 0);
    }
</style>