<script setup>
</script>
<template>
    <div class="m-card">
        <div class="img">
            <div class="when-hover">
                <div class="card-play-btn"><img src="./assets/cardIcon/play.png" alt="" srcset=""> </div>
                <div class="card-more-btn"><img src="./assets/cardIcon/more.png" alt="" srcset=""></div>
            </div>
            <img src="../../assets/R-C.jpeg" alt="" srcset="">
        </div>

        <div class="info">

        </div>

    </div>

</template>
<script>

export default {
    name: "BigCard"
}
</script>
<style lang="scss" scoped>
$W:160px;
$M:10px;
// $W:180px;


.m-card {
    display: inline-block;
    width: $W;
    height: calc($W + 50px);
    // background-color: aqua;
    margin: $M;
    box-sizing: border-box;
    border-radius: 5px;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.4);

    .img:hover .when-hover {
        display: block;
    }

    .img {
        position: relative;
        width: $W;
        height: $W;
        background-color: #dedede6f;

        // padding-bottom: 100%;
        // box-sizing: content-box;
        .when-hover {
            display: none;
            top: 0;
            left: 0;
            position: absolute;
            // border-radius: 5px;
            z-index: 10;
            width: $W;
            height: $W;
            background-color: rgba(0, 0, 0, 0.199);
            // padding: 10px;

            img {
                width: 15px;
                height: 15px;
            }

            div {
                padding: 4.5px;
                width: 25px;
                height: 25px;
                background-color: #dedede5d;
                position: absolute;
                bottom: 5px;
                border-radius: 50%;
            }

            div:hover {
                background-color: #fa233b;
            }

            .card-play-btn {

                left: 5px;


            }

            .card-more-btn {
                right: 5px;

            }
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            border-radius: 5px;
        }
    }


    .info {
        width: 100%;
        height: 50px;

        background-color: #dededeba;


    }
}

.m-card:hover .when-hover {
    display: block;
}

.m-card:hover {
    background-color: #47464655;
}
</style>