<template>
<div class="timeline">
    <div class="timeline-item" v-for="item in items">
        <div class="timeline-item-time">{{item.time}}</div>
        <div class="timeline-item-time-start" style="display:block">{{item.start}}</div>
        <div class="timeline-item-project">
            <div class="circle"></div>
            <div class="project-info">
                <span class="project-name">{{item.company || item.name}}</span>
                <span class="work-title">{{item.title}}</span>
                <span class="project-time">{{item.time}}</span>
                <span class="project-link">{{item.source}}</span>
                <a class="project-code" :href="item.source" v-show="page===1 && item.source" @click.stop="" target="_blank">&nbsp;源代码</a>
                <a class="project-code" :href="item.online" v-show="page===1 && item.online" @click.stop="" target="_blank">&nbsp;线上地址</a>
            </div>

            <ul class="work-project-list" v-if="page===1">
                <li v-for="wp in reverseArr(item.projects)">
                    <h4>{{wp.name}}</h4>
                    <p class="long-description">{{wp.description}}</p>
                    <ul class="project-desc" v-show="hasDesc(wp.highlights)">
                        <li v-for="desc in wp.highlights">
                            <p>{{desc}}</p>
                        </li>
                    </ul>
                </li>
            </ul>
            <ul class="work-project-list" v-if="hasDesc(item.projects) && page===2">
                <li v-for="desc in reverseArr(item.projects)">
                    <h4>{{desc.name}}</h4>
                    <p class="long-description">{{desc.description}}</p>
                    <ul class="project-desc" v-show="hasDesc(desc.highlights)">
                        <li v-for="desc in desc.highlights">
                            <p>{{desc}}</p>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</div>
</template>

<style scoped lang="less">
.timeline {
    flex: 0.95;
    display: flex;
    flex-direction: column;
    .timeline-item {
        position: relative;
        display: flex;
        padding-bottom: 18px;
        padding-top: 18px;

        .timeline-item-time {
            flex: 1;
            color: #3b3b3b;
            padding-top: 3px;
        }
        .timeline-item-time-start {
            flex: 1;
            color: #3b3b3b;
            padding-bottom: 16px;
            position: absolute;
            bottom: 0;
        }
        .timeline-item-project {
            position: relative;
            flex: 6;
            padding-left: 15px;
            .circle {
                position: absolute;
                left: -8px;
                top: 3px;
                height: 14px;
                width: 14px;
                border-radius: 100%;
                background: #00796b;
            }
            .project-info {
                display: flex;
                align-items: center;
                color: #00bfa5;
                .project-name {
                    display: inline-block;
                    font-weight: bold;
                }
                .project-code {
                    font-size: 12px;
                    color: #4db6ac;
                    border: 1px solid #4db6ac;
                    padding: 2px 5px;
                    border-radius: 5px;
                    margin-left: 15px;
                    &:before {
                        font-family: FontAwesome;
                        content: "\f0c1";
                    }
                }

                .project-link,
                .project-time {
                    display: none;
                }

                .work-title {
                    display: inline-block;
                    margin-left: 20px;
                    text-align: left;
                    position: absolute;
                    right: 0;
                }
                .explanation {
                    display: none;
                }
            }
            // ul{
            //   margin-left: 10px;
            // }
            ul.project-desc {
                list-style-type: circle;
                padding-top: 10px;
                padding-left: 15px;
                border-left: 2px solid #00796b;
                margin-left: -17px;
                li {
                    margin-left: 10px;
                    padding-bottom: 5px;
                    font-size: 15px;
                    line-height: 1.5;
                    &:last-child {
                        padding-bottom: 0;
                    }
                    &:before {

                        // font-family: FontAwesome;
                        // content: '\f111';
                        //padding-right: 7px;
                        // font-size: 10px;
                        // list-style-type: circle;

                    }
                    .other-print {
                        display: none;
                    }
                    .project-code {
                        font-size: 12px;
                        color: #4db6ac;
                        border: 1px solid #4db6ac;
                        padding: 2px 5px;
                        border-radius: 5px;
                        margin-left: 15px;
                        &:before {
                            font-family: FontAwesome;
                            content: "\f0c1";
                        }
                    }
                }
            }

            .work-project-list {
                border-left: 2px solid #00796b;
                margin-left: -17px;
                margin-top: 5px;
                h4 {
                    padding-top: 10px;
                    padding-left: 5px;
                    font-weight: bold;
                }
                p.long-description {
                    padding-top: 5px;
                    padding-left: 5px;
                    line-height: 1.5;
                }
                .project-desc {
                    border: none;
                    margin-left: 0;
                }
            }
        }
    }
}
@media screen and (max-width: 695px) {
    .timeline {
        .timeline-item {
            .project-desc {
                .project-code {
                    display: none;
                }
            }
            .timeline-item-time {
                display: none;
            }
            .timeline-item-project {
                .project-info {
                    .project-code {
                        display: none;
                    }
                    .project-time {
                        display: inline-block;
                        margin-left: 10px;
                    }
                }
            }
        }
    }
}
@media screen and (max-width: 414px) {
    .timeline {
        .timeline-item {
            .timeline-item-time {
                display: none;
            }
            .timeline-item-project {
                .project-info {
                    .work-title {
                        display: none;
                    }
                }
            }
        }
    }
}
@media print {
    .timeline {
        .project-desc {
            margin-top: 10px;
            .project-code {
                display: none;
            }
        }
        .timeline-item {
            position: relative;
            display: flex;
            padding-bottom: 18px;
            .timeline-item-time {
                flex: 1;
                color: #3b3b3b;
                padding-top: 3px;
            }
            .timeline-item-project {
                .circle {
                    display: none;
                }
                .project-info {
                    margin-left: -20px;
                    a {
                        display: none;
                    }
                    .project-link {
                        display: inline-block;
                    }
                }
                .project-desc {
                    li {
                        .other-print {
                            display: inline-block;
                        }
                    }
                }
                .project-desc,
                .work-project-list {
                    margin-top: 7px;
                }
            }
        }
    }
}
</style>

<script>
export default {
    props: {
        items: {
            type: Array,
            required: true,
            default: function() {
                return []
            }
        },
        page: {
            type: Number,
            required: true
        }
    },

    methods: {
        hasDesc(desc) {
            return desc && desc.length;
        },

        reverseArr(arr) {
            //return arr.reverse() will throw err in Vue
            //because store in the vue is immutable, don't support modify it directly
            let t = [].concat(arr);
            return t.reverse();
        }
    }
}
</script>
