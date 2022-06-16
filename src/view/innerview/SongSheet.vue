<script setup>
</script>
<template>
    <div class="song-sheet">
        <div class="out"></div>
        <div class="info">
            <div class="img">
                <img src="" alt="" srcset="">
            </div>
            <div class="info-inner">
                <div class="text">
                    <p>歌单</p>
                    <p>xx的歌单</p>
                    <p>今日更新</p>
                    <p>为你量身定制为你量身定制为你量身定制为你量身定制</p>
                </div>
                <div class="play-more">
                    <div class="play">
                        <button>播放</button>
                        <button>随机播放</button>
                    </div>
                    <div class="more">
                        <button>添加</button>
                        <button>M</button>
                    </div>

                </div>
            </div>
        </div>
        <div class="song-list">
            <SongItem v-for="index in 30" :co="index"></SongItem>
        </div>
        <div class="reco"></div>
    </div>
</template>
<style lang="scss" scoped>
.song-sheet {}

.out {
    height: 50px;
}

.info {
    width: 100%;

    >div {
        display: inline-block;
        margin: 0 5px 0 5px;
        padding: 5px;
    }

    .img {
        width: 280px;
        height: 280px;
        border-radius: 5px;
        position: relative;
        overflow: hidden;
        padding: 0px;

        img {
            width: 100%;
            height: 100%;
        }
    }

    .info-inner {
        width: 400px;
        height: 280px;
        position: relative;

        >div {
            position: absolute;
        }

        .text {
            top: 0;

            >p {
                text-align: left;
            }

            p:nth-child(1) {
                font-size: 20px;
                font-weight: bold;
            }

            p:nth-child(2) {
                font-size: 20px;
            }

            p:nth-child(3) {
                font-size: 12px;

            }

            p:nth-child(4) {
                font-size: 14px;

            }
        }

        .play-more {
            bottom: 0;
            display: flex;
            justify-content: space-between;
            flex-direction: row;
            width: 100%;

            >div {
                display: inline-block;

            }

            .play {
                button {
                    width: 80px;
                    height: 30px;
                    outline: none;
                    background-color: #fb223b;
                    border: 0;
                    margin: 0 5px 0 5px;
                    border-radius: 5px;
                    color: #fff;
                    font-weight: bold;
                }
            }

            .more {
                button:nth-child(1) {
                    width: 60px;
                    height: 30px;
                    outline: none;
                    background-color: #f4f3f3;
                    border: 0;
                    margin: 0 5px 0 5px;
                    border-radius: 30px;
                    color: #fb223b;
                    font-weight: bold;
                }

                button:nth-child(2) {
                    width: 30px;
                    height: 30px;
                    outline: none;
                    background-color: #f4f3f3;
                    border: 0;
                    margin: 0 5px 0 5px;
                    border-radius: 50%;
                    color: #fb223b;
                    font-weight: bold;
                }


            }
        }

        // display: flex;
        // flex-direction: column;
        // justify-content: space-between;
    }
}

.song-list {
    height: auto;
}
</style>