<template>
<div class="left">
    <div class="info">
        <div class="tag-f">FRONT END</div>
        <ul class="skills">
            <li v-for="(value,key) in data.frontend">
                <span class="skill-name">{{key}}</span>
                <div class="skill-bar-wrap">
                    <div class="skill-bar" :style="{width:value +'%'}"></div>
                </div>
            </li>
        </ul>
        <div class="tag-b">BACK END</div>
        <ul class="skills">
            <li v-for="(value,key) in data.backend">
                <span class="skill-name">{{key}}</span>
                <div class="skill-bar-wrap">
                    <div class="skill-bar" :style="{width:value +'%'}"></div>
                </div>
            </li>
        </ul>
        <div class="tag-m">MOBILE</div>
        <ul class="skills">
            <li v-for="(value,key) in data.mobile">
                <span class="skill-name">{{key}}</span>
                <div class="skill-bar-wrap">
                    <div class="skill-bar" :style="{width:value +'%'}"></div>
                </div>
            </li>
        </ul>
        <div class="tag-d">DIGITAL ARTS</div>
        <ul class="skills">
            <li v-for="(value,key) in data.digital">
                <span class="skill-name">{{key}}</span>
                <div class="skill-bar-wrap">
                    <div class="skill-bar" :style="{width:value +'%'}"></div>
                </div>
            </li>
        </ul>
    </div>
</div>
</template>

<style scoped lang="less">
.left {
    height: 100%;
    flex: 1;
    padding: 15px;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    background-color: #00BFA5;
    .wisdom {
        margin: 25px 0 20px;
        font-size: 16px;
        line-height: 1.5;
        color: #FFFFFF;
        text-align: center;
    }
    .info {
        margin-bottom: 25px;
        .tag-f {
            margin-top: 20px;
            position: relative;
            font-size: 18px;
            color: #9f3;
            &:before {
                font-family: FontAwesome;
                content: '\f108';
                padding-right: 5px;
            }
        }
        .tag-b {
            margin-top: 20px;
            position: relative;
            font-size: 18px;
            color: #9f3;
            &:before {
                font-family: FontAwesome;
                content: '\f233';
                padding-right: 5px;
            }
        }
        .tag-m {
            margin-top: 20px;
            position: relative;
            font-size: 18px;
            color: #9f3;
            &:before {
                font-family: FontAwesome;
                content: '\f10b';
                padding-right: 5px;
            }
        }
        .tag-d {
            margin-top: 20px;
            position: relative;
            font-size: 18px;
            color: #9f3;
            &:before {
                font-family: FontAwesome;
                content: '\f03e';
                padding-right: 5px;
            }
        }

        li {
            color: #FFF;
            padding: 10px 0 0 20px;
            cursor: default;
        }

        .self-evaluation {
            //color: #004d40;
            color: #fff;
            text-indent: 18px;
            margin-top: 15px;
            line-height: 1.5;
            word-break: break-all;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 7;
            -webkit-box-orient: vertical;
        }
    }

    .social-contact-list {
        li {
            &:first-child {
                &:before {
                    font-family: FontAwesome;
                    content: '\f1d7';
                }
            }
            &:last-child {
                &:before {
                    font-family: FontAwesome;
                    content: '\f1d6';
                    padding-right: 2px;
                }
            }
        }
    }

    .job-intent {
        li {
            &:nth-child(1) {
                &:before {
                    font-family: FontAwesome;
                    content: '\f297';
                }
            }
            &:nth-child(2) {
                &:before {
                    font-family: FontAwesome;
                    content: '\f2c6';
                }
            }
            &:nth-child(3) {
                &:before {
                    font-family: FontAwesome;
                    content: '\f02b';
                }
            }
        }
    }

    .skills {
        li {
            position: relative;
        }
        .skill-name {
            position: relative;
            top: -3px;
            width: 75px;
            font-size: 14px;
            display: inline-block;
            word-break: normal;
        }
        .skill-bar-wrap {
            height: 17px;
            width: 120px;
            background: #00796b;
            display: inline-block;
            border-radius: 20px;
            .skill-bar {
                height: 17px;
                background: #fff;
                border-radius: 20px 0 0 20px;
            }
        }
    }
}
@media screen and (max-width: 768px) {
    .left {
        display: none;
    }
}
</style>
<script>
export default {
    props: {
        data: {
            type: Object,
            required: true,
            default: function() {
                return {}
            }
        }
    }
}
</script>
