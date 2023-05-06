const rtcDisConnect = require("./rtcDisConnect/disconnect");
const rtcOffer = require("./rtcOffer/offer");
const rtcAnswer = require("./rtcAnswer/answer");
const rtcCandidate = require("./rtcCandidate/candidate");
const rtcCount = require("./rtcCount/count");
const rtcExit = require("./rtcExit/exit");
const rtcCommData = require("./rtcCommData/commData");
const rtcCreateJoin = require("./rtcCreateJoin/createJoin");
const rtcManageConfirm = require("./rtcManage/confirm");
const rtcManageChange = require("./rtcManage/change");
const rtcManageReload = require("./rtcManage/reload");
const rtcMessage = require("./rtcMessage/message");
const rtcChating = require("./rtcChating/chating");
const rtcOpenai = require("./rtcOpenai/openai");
const rtcServerEvent = require("./rtcConstant").rtcServerEvent


module.exports = (io, socket, tables, dbClient) => {

    rtcCount.count(io, socket, tables, dbClient, {})

    // 断开连接
    socket.on(rtcServerEvent.disconnect, (data)=>{
        rtcDisConnect.disconnect(io, socket, tables, dbClient, data)
    });

    // webrtc offer 消息
    socket.on(rtcServerEvent.offer, (data) => {
        rtcOffer.offer(io, socket, tables, dbClient, data)
    });

    // webrtc answer 消息
    socket.on(rtcServerEvent.answer, (data) => {
        rtcAnswer.answer(io, socket, tables, dbClient, data)
    });

    // webrtc candidate 消息
    socket.on(rtcServerEvent.candidate, (data) => {
        rtcCandidate.candidate(io, socket, tables, dbClient, data)
    });

    // 在线人数统计
    socket.on(rtcServerEvent.count, (data) => {
        rtcCount.count(io, socket, tables, dbClient, data)
    });

    // 退出房间
    socket.on(rtcServerEvent.exit, (data) => {
        rtcExit.exit(io, socket, tables, dbClient, data)
    });

    // 获取初始数据
    socket.on(rtcServerEvent.getCommData, (data) => {
        rtcCommData.commData(io, socket, tables, dbClient, data)
    })

    // 创建或加入房间
    socket.on(rtcServerEvent.createAndJoin, (data) => {
        rtcCreateJoin.createJoin(io, socket, tables, dbClient, data)
    });

    // 管理后台登陆验证
    socket.on(rtcServerEvent.manageConfirm, (data) => {
        rtcManageConfirm.confirm(io, socket, tables, dbClient, data)
    });

    // 管理后台修改数据
    socket.on(rtcServerEvent.manageChange, (data) => {
        rtcManageChange.change(io, socket, tables, dbClient, data)
    });

    // 管理后台刷新
    socket.on(rtcServerEvent.manageReload, (data) => {
        rtcManageReload.reload(io, socket, tables, dbClient, data)
    });

    // 公共消息
    socket.on(rtcServerEvent.message, (data) => {
        rtcMessage.message(io, socket, tables, dbClient, data)
    });

    // 公共聊天频道
    socket.on(rtcServerEvent.chatingComm, (data) => {
        rtcChating.chating(io, socket, tables, dbClient, data)
    });

    // openai聊天
    socket.on(rtcServerEvent.openai, (data) => {
        rtcOpenai.openai(io, socket, tables, dbClient, data)
    });
}