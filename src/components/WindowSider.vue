<script setup>
</script>
<template>
    <div class="sider">
        <div class="header">
            <div class="w-out"></div>
            <div class="w-narrow"></div>
            <div class="w-ext"></div>
        </div>
        <div class="menu">
            <div class="search">
                <input placeholder="搜索" type="text">
            </div>
            <label for="">Apple Music</label>
            <ul>
                <li>
                    <div><img src="../assets/siderIcon/nowlistening.png" alt="" srcset=""> </div>现在就听
                </li>
                <li>
                    <div><img src="../assets/siderIcon/browse.png" alt="" srcset=""></div> 浏览
                </li>
                <li>
                    <div><img src="../assets/siderIcon/outline-radar.png" alt="" srcset=""></div> 广播
                </li>
            </ul>
            <label for="">资料库</label>
            <ul>
                <li>
                    <div><img src="../assets/siderIcon/recent.png" alt="" srcset=""> </div>最新添加
                </li>
                <li>
                    <div><img src="../assets/siderIcon/microphone.png" alt="" srcset=""> </div>艺人
                </li>
                <li>
                    <div><img src="../assets/siderIcon/note.png" alt="" srcset=""> </div>歌曲
                </li>
            </ul>
            <label for="">播放列表</label>
            <ul>
                <li>
                    <div><img src="../assets/siderIcon/smalllist.png" alt="" srcset=""></div> 所有播放列表
                </li>
                <li>
                    <div><img src="../assets/siderIcon/Viewlist.png" alt="" srcset=""></div> 播放列表
                </li>
            </ul>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.sider {
    position: absolute;
    top: 0;
    left: 0px;
    display: inline-block;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    width: 200px;
    height: 100%;
    background-color: #dededed0;

    .header {
        height: 50px;
        position: relative;

        // border-bottom: 0.2px solid #dedede;
        div {
            position: absolute;
            display: inline-block;
            width: 11px;
            height: 11px;
            background-color: #9b9b9b;
            border-radius: 50px;
            top: 18px;
            box-shadow: 0 0 1px 0.3px rgba(0, 0, 0, 0.2);
        }

        // div:hover {
        //     opacity: 0.5;
        // }

        .w-out {
            left: 18px;

            background-color: #ff5f57;
        }

        .w-out:hover:before {
            content: "";
            background-color: rgba(32, 28, 28, 0.782);
            position: absolute;
            top: 4.3px;
            left: 1.6px;
            width: 8px;
            height: 1.15px;
            transform: rotate(45deg);
            // font-size: 12px;
            // font-weight: 600;
        }

        .w-out:hover:after {
            content: "";
            background-color: rgba(32, 28, 28, 0.782);
            ;
            position: absolute;
            top: 4.7px;
            left: 1.6px;
            width: 8px;
            height: 1.15px;
            transform: rotate(-45deg);


        }

        .w-narrow {
            left: 37px;
            background-color: #febc2e;
        }

        .w-narrow:hover::before {
            content: "";
            background-color: rgba(32, 28, 28, 0.782);
            position: absolute;
            top: 5px;
            left: 1.4px;
            width: 8px;
            border-radius: 1px;
            height: 1.5px;
        }

        .w-ext {
            left: 56px;
            background-color: #29c940;
        }

        .w-ext:hover::before {
            content: "";
            background-color: #004e00;
            position: absolute;
            display: block;
            top: 2px;
            left: 1.8px;
            width: 7px;
            height: 7px;
            border-radius: 1px;
        }

        .w-ext:hover::after {
            content: "";
            background-color: #29c940;
            position: absolute;
            display: block;
            top: 4.5px;
            left: 0.8px;
            width: 10px;
            height: 2px;
            transform: rotate(-45deg);
        }
    }

    .menu {
        height: 550px;

        .search {
            width: 100%;
            // height: 30px;
            padding: 10px;

            input {
                width: 100%;
                height: 27px;
                padding-left: 10px;
                border-radius: 7px;
                outline: none;
                border: 0.1px solid #80808032;
                background-color: #d8d8d8;
                // box-sizing: content-box;

            }

            input::placeholder {
                text-align: left;
                opacity: 0.5;

            }

            input:focus {
                border: 3px solid #de6f72;
                transition: 0.2s all;
            }
        }

        label {
            margin: 12px;
            display: block;
            color: #9b9b9b;
            font-weight: bolder;
            width: 100%;
            font-size: 12px;
            text-align: left;
            box-sizing: content-box;
            transform: scale(0.8);
            transform-origin: left;
        }

        ul {
            margin-top: 8px;
            margin-bottom: 8px;
            padding: 0;

            li {
                text-decoration: none;
                display: block;
                font-size: 12px;
                font-weight: 450;
                text-align: left;
                color: #686868;
                box-sizing: content-box;
                padding: 4px 0 4px 20px;
                margin-left: 10px;
                margin-right: 10px;

                div {
                    overflow: hidden;
                    text-indent: -40px;
                    display: inline-block;
                    width: 13px;
                    height: 13px;
                    position: relative;
                    top: 3px;
                    margin-right: 2px;

                    img {
                        // opacity: 0;
                        position: relative;
                        // top: 3px;
                        // margin-right: 2px;
                        width: 90%;
                        height: 90%;
                        // filter: opacity(0);
                        filter: drop-shadow(40px 0px #ff0033);
                    }
                }

            }

            li:hover {

                // border: 0.1px solid #dedede;
                border-radius: 5px;
                background-color: #3636361a;
            }
        }

    }
}
</style>