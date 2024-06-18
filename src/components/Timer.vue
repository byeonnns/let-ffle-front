<template>
    <ul>
        <li v-for="num in [...Array(10).keys()]" :key="num" :class="{
            'front': num === counter,
            'back': num === (counter + 1) % 10
        }">
            <div class="upper">
                <div class="num">{{ num }}</div>
            </div>
            <div class="lower">
                <div class="num">{{ num }}</div>
            </div>
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        counter: {
            type: Number,
            default: 0
        }
    }
}
</script>

<style lang="scss" scoped>
ul {
    position: relative;
    width: 25px;
    height: 32px;
    margin: 2px;
    border-radius: 6px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, .7);
    font-size: 20px;
    font-weight: bold;
    list-style: none;

    li {
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        // 카드 기본 설정

        div {
            position: absolute;
            z-index: 1;
            left: 0;
            overflow: hidden;
            width: 100%;
            height: 50%;

            // 그림자 효과를 넣어줄 가상 요소
            &::before {
                position: absolute;
                z-index: 2;
                width: 100%;
                height: 100%;
                content: "";
            }

            .num {
                position: absolute;
                z-index: 1;
                left: 0;
                display: flex;
                width: 100%;
                height: 200%;
                align-items: center;
                justify-content: center;
                background-color: var(--blue-grey-800);
                border-radius: 6px;
                color: white;
            }

            &.upper {
                top: 0;
                transform-origin: 50% 100%; // transform의 기준을 카드의 중앙으로 설정

                .num {
                    top: 0;
                }

                // 카드 가운데 선

                &::after {
                    position: absolute;
                    z-index: 5;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 1px;
                    background-color: rgba(0, 0, 0, .4);
                    content: "";
                }
            }

            &.lower {
                bottom: 0;
                transform-origin: 50% 0%;

                .num {
                    bottom: 0;
                }
            }
        }

        &.back {
            z-index: 3;

            .upper {
                z-index: 2;
                animation: top-to-middle .5s linear both;

                &::before {
                    animation: show .5s linear both;
                    background: linear-gradient(to top, rgba(0, 0, 0, .1) 0%, rgba(0, 0, 0, 1) 100%);
                    background: linear-gradient(to bottom, rgba(0, 0, 0, .1) 0%, rgba(0, 0, 0, 1) 100%);
                }
            }

            .lower {

                &::before {
                    animation: show .5s linear both;
                }
            }

        }

        &.front {
            z-index: 2;
            animation: increase-zindex .5s .5s linear forwards;

            .upper {

                &::before {
                    animation: hide .5s .3s linear both;
                }
            }

            .lower {
                z-index: 2;
                animation: middle-to-bottom .5s .5s linear both;

                &::before {
                    animation: hide .5s .3s linear both;
                    background: linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, .1) 100%);
                    background: linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, .1) 100%);
                }
            }
        }
    }
}

@keyframes increase-zindex {

    0% {
        z-index: 4;
    }

    100% {
        z-index: 4;
    }
}

@keyframes middle-to-bottom {

    0% {
        transform: rotateX(90deg);
    }

    100% {
        transform: rotateX(0deg);
    }
}

@keyframes top-to-middle {

    0% {
        transform: rotateX(0deg);
    }

    100% {
        transform: rotateX(90deg);
    }
}

@keyframes show {

    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

@keyframes hide {

    0% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
}
</style>