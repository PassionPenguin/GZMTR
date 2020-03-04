if (pg.$("#modmenu").length !== 0) {
    let ctrlMenuPopupToggle = cE({type: "span", attr: [["class", "mi theme-color ic-ctrl"]]});
    ctrlMenuPopupToggle.onclick = () => {
        // 删除主题|升降|置顶|高亮|精华|图章|图标|关闭|移动|分类|复制|合并|分割|修复|警告|屏蔽
        pg.select("版主操作", ["关闭窗口，取消操作", "删除主题", "升降", "置顶", "高亮", "精华", "图章", "图标", "关闭", "移动", "分类", "复制", "合并", "分割", "修复", "警告", "屏蔽"], "关闭窗口，取消操作", (res) => {
            if (res !== "关闭窗口取消操作") {
                let addDays = (days) => {
                    let date = new Date();
                    date.setDate(new Date().getDate() + days);
                    return date;
                };
                let getTime = (days) => {
                    let date = addDays(days === undefined ? -1 : days - 1);
                    return date.getFullYear() + "-" + (Int(date.getMonth()) + 1 < 10 ? ("0" + Int(date.getMonth() + 1)) : Int(date.getMonth() + 1)) + "-" + (Int(date.getDate()) + 1 < 10 ? ("0" + Int(date.getDate() + 1)) : Int(date.getDate() + 1)) + " " + date.getHours() + ":" + date.getMinutes();
                };
                switch (res) {
                    case "删除主题":
                        pg.$("#modmenu a")[0].click();
                        pg.select("您确认要删除该帖子吗？", ["是的", "再想想"], "再想想", (next) => {
                            if (next === "是的")
                                pg.prompt("删除操作理由", "例如：这个人和霜羽都是个大水怪：）", (data) => {
                                    if (data !== "取消") {
                                        pg.$("#reason")[0].value = data;
                                        pg.$("#modsubmit")[0].click();
                                    }
                                }, "输入【取消】，即可取消操作");
                        }, "确认后需要输入操作原因等信息哦～");
                        break;
                    case "升降":
                        pg.$("#modmenu a")[1].click();
                        pg.select("升 or 降", ["飞上去", "掉下来", "再想想"], "再想想", (next) => {
                            if (next !== "再想想")
                                pg.$("[name='operations[]']")[res === "飞上去" ? 0 : 1].click();
                            pg.prompt("扔开的操作理由", "例如：他膨胀了飞了上去/他瘪了", (data) => {
                                if (data !== "取消") {
                                    pg.$("#reason")[0].value = data;
                                    pg.$("#modsubmit")[0].click();
                                }
                            }, "输入【取消】，即可取消操作");
                        }, "确认后需要输入操作原因等信息哦～");
                        break;
                    case "置顶":
                        pg.$("#modmenu a")[2].click();
                        pg.select("置顶操作：）", ["嘿给我黏到顶上去", "再想想"], "再想想", (next) => {
                            if (next !== "再想想") {
                                pg.$("[name='operations[]']")[1].click();
                                pg.select("选择置顶的时间生效时间,将按照时间加减～", ["1天", "3天", "7天", "1月", "3月", "6月", "1年"], "1天", (time) => {
                                    pg.$("#expirationstick")[0].value = getTime([1, 3, 7, 30, 92, 183, 365][["1天", "3天", "7天", "1月", "3月", "6月", "1年"].indexOf(time)]);
                                    pg.prompt("置顶的理由", "例如：他太黏了", (data) => {
                                        if (data !== "取消") {
                                            pg.$("#reason")[0].value = data;
                                            pg.$("#modsubmit")[0].click();
                                        } else {
                                            hideWindow('mods');
                                        }
                                    }, "输入【取消】，即可取消操作");
                                }, "选择好了时间后会有继续相应操作");
                            } else {
                                hideWindow('mods');
                            }
                        }, "确认后需要输入操作原因等信息哦～");
                        break;
                    case "高亮":
                        pg.$("#modmenu a")[3].click();
                        pg.select("高亮操作：）", ["一闪一闪亮晶晶", "再想想"], "再想想", (next) => {
                            if (next !== "再想想") {
                                pg.$("[name='operations[]']")[2].click();
                                pg.select("选择高亮的时间生效时间,将按照时间加减～", ["1天", "3天", "7天", "1月", "3月", "6月", "1年"], "1天", (time) => {
                                    pg.$("#expirationhighlight")[0].value = getTime([1, 3, 7, 30, 92, 183, 365][["1天", "3天", "7天", "1月", "3月", "6月", "1年"].indexOf(time)]);
                                    pg.select("高亮的颜色：）", ["黑不溜秋", "红红火火", "橙黄橘橙", "棕色：）", "青青草原", "蓝蓝天空", "比较深色的蓝：）", "必备紫色", "粉粉嫩嫩"], "黑不溜秋", (color) => {
                                        $.pg("#highlight_color_ctrl_menu a")[["黑不溜秋", "红红火火", "橙黄橘橙", "棕色：）", "青青草原", "蓝蓝天空", "比较深色的蓝：）", "必备紫色", "粉粉嫩嫩"].indexOf(color)].click();
                                    }, "别问我为什么用文字描述：）因为我忘了开发颜色");
                                    pg.select("高亮的文字样式：）", ["无", "粗体", "斜体", "下划线"], "无", (style) => {
                                        if (style !== "无")
                                            $.pg("#highlight_op_" + ["无", "粗体", "斜体", "下划线"].indexOf(style))[0].click();
                                    }, "选择恰当的字体样式：）");
                                    pg.prompt("高亮的理由", "例如：他喜欢唱小星星", (data) => {
                                        if (data !== "取消") {
                                            pg.$("#reason")[0].value = data;
                                            pg.$("#modsubmit")[0].click();
                                        } else {
                                            hideWindow('mods');
                                        }
                                    }, "输入【取消】，即可取消操作");
                                }, "选择好了时间后会有继续相应操作");
                            } else {
                                hideWindow('mods');
                            }
                        }, "确认后需要输入操作原因等信息哦～");
                        break;
                    case "精华":
                        pg.$("#modmenu a")[4].click();
                        pg.select("精华操作：）", ["精（：）华", "再想想"], "再想想", (next) => {
                            if (next !== "再想想") {
                                pg.$("[name='operations[]']")[3].click();
                                pg.select("选择精华的时间生效时间,将按照时间加减～", ["1天", "3天", "7天", "1月", "3月", "6月", "1年"], "1天", (time) => {
                                    pg.$("#expirationdigest")[0].value = getTime([1, 3, 7, 30, 92, 183, 365][["1天", "3天", "7天", "1月", "3月", "6月", "1年"].indexOf(time)]);
                                    pg.select("精华的类型：）", ["无精华 解除", "类型1", "类型2", "类型3"], "无精华 解除", (type) => {
                                        pg.$("[name='digestlevel']")[0].value = [["无精华 解除", "类型1", "类型2", "类型3"].indexOf(type)].toString();
                                    }, "精华类型：）");
                                    pg.prompt("精华的理由", "例如：他喜欢唱小星星", (data) => {
                                        if (data !== "取消") {
                                            pg.$("#reason")[0].value = data;
                                            pg.$("#modsubmit")[0].click();
                                        } else {
                                            hideWindow('mods');
                                        }
                                    }, "输入【取消】，即可取消操作");
                                }, "选择好了时间后会有继续相应操作");
                            } else {
                                hideWindow('mods');
                            }
                        }, "确认后需要输入操作原因等信息哦～");
                        break;
                    case "图章":
                        pg.$("#modmenu a")[5].click();
                        pg.select("仿制图章：）", ["盖个印章：）", "再想想"], "再想想", (next) => {
                            if (next !== "再想想") {
                                pg.$("[name='operations[]']")[0].click();
                                pg.select("图章的类型：）", ["无图章 解除", "精华", "热帖", "美图", "优秀", "置顶", "推荐", "原创", "版主推荐", "爆料", "编辑采用"], "无图章 解除", (type) => {
                                    if (type !== "无图章 解除")
                                        pg.$("#stamp")[0].value = ["精华", "热帖", "美图", "优秀", "置顶", "推荐", "原创", "版主推荐", "爆料", "编辑采用"].indexOf(type).toString();
                                    else pg.$("#stamp")[0].value = "";
                                }, "图章类型：）");
                                pg.prompt("盖章的理由", "例如：他喜欢印章", (data) => {
                                    if (data !== "取消") {
                                        pg.$("#reason")[0].value = data;
                                        pg.$("#modsubmit")[0].click();
                                    } else {
                                        hideWindow('mods');
                                    }
                                }, "输入【取消】，即可取消操作");
                            } else {
                                hideWindow('mods');
                            }
                        }, "确认后需要输入操作原因等信息哦～");
                        break;
                    case "图标":
                        pg.$("#modmenu a")[6].click();
                        pg.select("图标badge：）", ["种草莓：）", "再想想"], "再想想", (next) => {
                            if (next !== "再想想") {
                                pg.$("[name='operations[]']")[0].click();
                                pg.select("草莓的类型：）", ["无草莓 解除", "编辑采用"], "无草莓 解除", (type) => {
                                    if (type !== "无草莓 解除")
                                        pg.$("#stamplist")[0].value = "18";
                                    else pg.$("#stamplist")[0].value = "";
                                }, "草莓类型：）");
                                pg.prompt("种草莓的理由", "例如：他喜欢种草莓", (data) => {
                                    if (data !== "取消") {
                                        pg.$("#reason")[0].value = data;
                                        pg.$("#modsubmit")[0].click();
                                    } else {
                                        hideWindow('mods');
                                    }
                                }, "输入【取消】，即可取消操作");
                            } else {
                                hideWindow('mods');
                            }
                        }, "确认后需要输入操作原因等信息哦～");
                        break;
                    case "关闭":
                        pg.$("#modmenu a")[7].click();
                        pg.select("打开/关闭：）", ["打开", "关闭"], "打开", (next) => {
                            pg.select("选择打开/关闭的时间生效时间,将按照时间加减～", ["1天", "3天", "7天", "1月", "3月", "6月", "1年"], "1天", (time) => {
                                pg.$("#expirationclose")[0].value = getTime([1, 3, 7, 30, 92, 183, 365][["1天", "3天", "7天", "1月", "3月", "6月", "1年"].indexOf(time)]);
                                pg.$("[name='operations[]']")[["打开", "关闭"]].indexOf(next).click();
                                pg.prompt("打开/关闭的理由", "例如：他喜欢关门", (data) => {
                                    if (data !== "取消") {
                                        pg.$("#reason")[0].value = data;
                                        pg.$("#modsubmit")[0].click();
                                    } else {
                                        hideWindow('mods');
                                    }
                                }, "输入【取消】，即可取消操作");
                            }, "确认后需要输入操作原因等信息哦～");
                        }, "选择好了时间后会有继续相应操作");
                        break;
                    case "移动":
                        pg.$("#modmenu a")[8].click();
                        pg.select("移动目标板块", [...pg.$("#moveto option")].map(i => i.innerHTML), blog.map(i => i.name)[blog.map(i => i.fid).indexOf(fid)], (resBlogType => {
                            pg.$("#moveto")[0].value = [[...pg.$("#moveto option")].map(i => i.fid)].indexOf(resBlogType).toString();
                            setTimeout(() => {
                                pg.select("目标分类", [...pg.$("[name='threadtypeid'] option").map(i => i.innerHTML)], [...pg.$("[name='threadtypeid'] option").map(i => i.innerHTML)][0], (resCategory => {
                                    pg.$("[name='threadtypeid']")[0].value = [...pg.$("[name='threadtypeid'] option").map(i => i.value)][[...pg.$("[name='threadtypeid'] option").map(i => i.innerHTML)].indexOf(resCategory)].toString();
                                    pg.prompt("移动的理由", "例如：他喜欢飞", (data) => {
                                        if (data !== "取消") {
                                            pg.$("#reason")[0].value = data;
                                            pg.$("#modsubmit")[0].click();
                                        } else {
                                            hideWindow('mods');
                                        }
                                    }, "输入【取消】，即可取消操作");
                                }), "请选择您的目标分类");
                            }, 1000);
                        }), "请选择你的移动目标板块");
                        break;
                    case "分类":
                        pg.$("#modmenu a")[9].click();
                        break;
                    case "复制":
                        pg.$("#modmenu a")[10].click();
                        break;
                    case "合并":
                        pg.$("#modmenu a")[11].click();
                        break;
                    case "分割":
                        pg.$("#modmenu a")[12].click();
                        break;
                    case "修复":
                        pg.$("#modmenu a")[13].click();
                        break;
                    case "警告":
                        pg.$("#modmenu a")[14].click();
                        break;
                    case "屏蔽":
                        pg.$("#modmenu a")[15].click();
                        break;
                }
            }
        }, "选择了相对应的操作过后，将会有另外的窗口弹出来供版主操作");
    };
    topName.append(ctrlMenuPopupToggle);
}