// --------------------------- //
// --       lang.js         -- //
// --   version : 1.0.0     -- //
// --   date : 2023-06-22   -- //
// --------------------------- //

//以内容val输出 key:value形式输出数据，并且注意key不能和之前存在重复, 并且key的长度控制在四个单词以内, val=请输入密码房间密码, key=英文翻译简称, value=英文翻译详情

const local_lang = {
    "en": {
        "iamLiveViewer" : "i am live viewer",
        "iamLiveOwner" : "i am Live Owner",
        "chooseRoleEnter" : "Choose role enter",
        "cancel" : "Cancel",
        "screenLiveShare" : "Screen live share",
        "videoLiveShare" : "Video live share",
        "audioing" : "Audioing",
        "audio_sharing" : "Audio sharing",
        "expand_audio" : "Expand audio panel",
        "collapse_audio" : "Collapse audio panel",
        "start_audio_sharing" : "Start audio sharing",
        "end_audio_sharing" : "End audio sharing",
        "in_audioing" : "In audioing",
        "start_audio" : "Start audio",
        "audience" : "Audience",
        "webrtc_check_init" : "Webrtc check init",
        "webrtc_check_init_done" : "Webrtc check init done",
        "add_ice_candidate_failed": "AddIceCandidate failed",
        "add_ice_candidate_success": "AddIceCandidateSuccess success",
        "ai_answering": "AI is answering your question, please ask again later",
        "ai_chat": "Artificial intelligence dialogue",
        "ai_chat_record": "AI chat record",
        "ai_reply": "AI reply",
        "ai_reply_you": "AI replied to you, let's chat～",
        "ai_setting": "AI setting",
        "ai_switch": "AI intelligent understanding of context switch",
        "ai_thinking": "AI is thinking...",
        "answer_failed": "Answer failed",
        "basic_data_get": "Basic data acquisition",
        "basic_data_get_done": "Basic data acquisition completed",
        "blog": "Blog",
        "chat_channel": "Chat channel",
        "chat_comm": "Chat",
        "chat_gpt": "ChatGPT",
        "clear_log": "Clear log",
        "click_choose_file": "Click to select a file, or drag the file here to support multi-file drag and drop sending. After re-selecting the file, the previously selected file will be overwritten",
        "click_download": "Click me to download",
        "click_to_stop_live": "Start live, click the button again to end the live",
        "click_to_stop_recording": "Start recording, click to stop recording again",
        "click_to_stop_sharing": "Start screen sharing, click the button again to stop sharing",
        "click_to_stop_video": "Start audio and video calls, click the button again to hang up",
        "collapse_live": "Collapse live panel",
        "collapse_log": "Collapse log panel",
        "collapse_receive_file": "Collapse receive file panel",
        "collapse_screen_sharing": "Collapse screen sharing panel",
        "collapse_selected_file": "Collapse selected file panel",
        "collapse_send_file_record": "Collapse send file record panel",
        "collapse_temporary": "Collapse the temporary file panel",
        "collapse_video": "Collapse video panel",
        "collapse_wait_send_file": "Collapse wait send file panel",
        "common_event_init": "Common event initialization",
        "common_event_init_done": "Common event initialization completed",
        "communication_rational": "Civilized speech, rational communication",
        "confirm": "Confirm",
        "connection_closed": "Connection closed",
        "connection_disconnected": "Connection disconnected",
        "content_max_1000": "The content is too long, it cannot exceed 1000 characters",
        "content_max_10000": "The text content is too long, the length is up to 10000 words",
        "copy_room_link": "Copy room link successfully",
        "create_join_room": "Create/join room",
        "cur_selected_file": "Current selected file list",
        "current_network": "The current network status is",
        "current_number": "Current number",
        "current_relay_status": "Current relay service status",
        "custom_data_receive_channel_closed": "The custom data receive channel is closed",
        "custom_data_receive_channel_ready": "The custom data receive channel is ready",
        "debug_init": "Debug initialization",
        "debug_init_done": "Debug initialization completed",
        "demo_site": "This website is a demo site, only provides availability demonstration, duration 15 seconds, automatic end of demonstration, if you need to use please deploy it yourself",
        "disclaimer": "Disclaimer",
        "donate": "Donate",
        "download": "Download",
        "end_live": "End live",
        "end_local_screen_recording": "End local screen recording",
        "end_screen_sharing": "End screen sharing",
        "end_video_call": "End video call",
        "enter_password_room": "Enter the password room, room number",
        "enter_send": "ctrl+enter New line | Enter to send",
        "establish_connection": "Establish connection",
        "event_init": "Event initialization",
        "event_init_done": "Event initialization completed",
        "expires_one_day" : "Expires after one day",
        "exit_room": "Exit room",
        "expand_live": "Expand live panel",
        "expand_log": "Expand log panel",
        "expand_receive_file": "Expand receive file panel",
        "expand_screen_sharing": "Expand screen sharing panel",
        "expand_selected_file": "Expand selected file panel",
        "expand_send_file_record": "Expand send file record panel",
        "expand_temporary": "Expand the temporary file panel",
        "expand_video": "Expand video panel",
        "expand_wait_send_file": "Expand wait send file panel",
        "failed_find_file": "Failed, file resource does not exist",
        "feature_close": "The current function has been temporarily closed. If you have any questions, you can add a group to communicate",
        "feedback": "Feedback",
        "file_box": "File box",
        "file_from": "File from",
        "file_not_exist": "File read failed, file resource does not exist",
        "file_receive": "Receive file",
        "file_receive_channel_closed": "The file receive channel is closed",
        "file_receive_channel_ready": "The file receive channel is ready",
        "file_room": "File room",
        "file_select_init": "File select initialization",
        "file_select_init_done": "File select initialization completed",
        "file_send_channel_buffer_full": "The file send channel buffer is full, waiting...",
        "file_send_channel_buffer_recover": "The file send channel buffer has been restored, continue to send",
        "file_send_channel_not_establish": "When sending a file, the file sending channel is not established",
        "file_send_done": "File send done",
        "file_send_record": "File sending record",
        "generate_send_file_record": "Generate send file record",
        "get_device_failed": "Failed to get device recording permission",
        "get_pickup_file": "Get files through pickup code",
        "give_coffee": "Buy me a coffee",
        "home": "Official website homepage",
        "history_msg" : " History messages",
        "i_said_to_ai": "I said to AI",
        "illegal_event": "Illegal trigger event",
        "in_living": "Currently live, please try again after exiting",
        "in_sharing_screen": "Currently sharing the screen, please try again after exiting",
        "in_videoing": "Currently in a video call, please try again after exiting",
        "init_language_done": "Initialize the language version",
        "input_room_num": "Input room number",
        "is_pickup_code": "Whether to pick up the pickup code",
        "is_screen_recording": "Whether to perform local screen recording",
        "join_room": "Join room",
        "language_select_init": "Language select initialization",
        "language_select_init_done": "Language select initialization completed",
        "live_done": "The live broadcast is over, the live broadcast time is ",
        "living": "Living",
        "log": "Execution log",
        "max_previewed": "The maximum can only be previewed",
        "max_saved": "The maximum can only be temporarily stored",
        "mb_file": "MB's file",
        "message_box_init": "Message box initialization",
        "message_box_init_done": "Message box initialization completed",
        "mobile_data": "Mobile data",
        "mobile_not_support_recording": "Mobile does not support screen recording for the time being",
        "name": "Name",
        "no_code_file": "This pickup code has no file record temporarily",
        "no_device": "No camera or microphone detected",
        "no_notice": "No announcement",
        "no_received_file": "No files received temporarily",
        "no_send_file": "No files have been sent temporarily",
        "not_support": "Not support",
        "note_website_for_learing": "Note: The sample site is for learning purposes only, please do not use it for other purposes",
        "notice": "notice",
        "off": "Off",
        "offer_failed": "Offer failed",
        "on": "On",
        "online": "Current online number",
        "online_number": "Online number",
        "only_show_10_history_msg": "Only show 10 history messages",
        "only_show" : "Only show ",
        "op_log": "Operation log",
        "open_ai_chat": "Open AI chat window",
        "open_ai_switch": "The synchronization context switch has been turned on, and AI can better understand your questions, but it may also cause the answer to become unpredictable, and you can turn it off in the settings",
        "open_donate": "Open donate window",
        "open_private_chat": "Open private chat panel",
        "open_public_chat_panel": "Open public chat panel",
        "open_relay_setting": "Open relay setting window",
        "open_room_chat_panel": "Open room chat panel",
        "open_setting": "Open setting window",
        "open_share_join_room": "Open share join room window",
        "open_share_pickup_code": "Open the window to share the pickup code",
        "other_language": "Other language",
        "owner" : "Owner",
        "p2p_check": "P2p check",
        "p2p_check_principle": "P2p detection principle",
        "p2p_check_principle_detail": "This project is based on webrtc, and webrtc's p2p is limited by the connection",
        "p2p_check_principle_detail_10": "Please search for the keyword 'IP' in the execution log to see if there is a similar intranet format IP",
        "p2p_check_principle_detail_2": "The network NAT type and browser restrictions of both parties",
        "p2p_check_principle_detail_3": "Self-check steps",
        "p2p_check_principle_detail_4": "Before verifying p2p,",
        "p2p_check_principle_detail_5": "Please turn off the relay service switch first",
        "p2p_check_principle_detail_6": ", Both parties enter the room, and then perform self-check",
        "p2p_check_principle_detail_7": "After both parties join the room, if the client can obtain the intranet IP of both parties in the room, it is highly probable that p2p transmission can be performed",
        "p2p_check_principle_detail_8": "If it is chrome PC version, you can open",
        "p2p_check_principle_detail_9": "Then search for the keyword 'mdns', turn on the switch and restart",
        "password": "Password",
        "password_room": "Password",
        "password_too_long": "The password is too long",
        "pickup_code": "Code",
        "please_describe_your_feedback": "Please describe the problem you need to feedback",
        "please_enter": "Please enter",
        "please_enter_code": "Please enter the pickup code",
        "please_enter_content": "Please enter text content",
        "please_enter_live_room_num": "Please enter the live room number",
        "please_enter_password": "Please enter the password room password",
        "please_enter_right_code": "Please enter the correct pickup code",
        "please_enter_room_num": "Please fill in the room number first",
        "please_enter_audio_sharing_room_num" : "Please enter the audio sharing room number",
        "please_enter_screen_sharing_room_num": "Please enter the screen sharing room number",
        "please_enter_video_call_room_num": "Please enter the audio and video call room number",
        "please_exit_then_join_live": "Please exit the room first and then enter the live room",
        "please_exit_then_join_password_room": "Please exit the room first and then enter the password room",
        "please_exit_then_join_screen": "Please exit the room first and then initiate screen sharing",
        "please_exit_then_join_video": "Please exit the room first and then initiate a video call",
        "please_fill_content": "Please fill in the content first",
        "please_join_then_chat": "Please join the room first and then speak",
        "please_join_then_chat_with_ai": "Please join the room first and then chat with AI",
        "please_join_then_choose_file": "Please join the room first and then select the file",
        "please_join_then_draw": "Please join the room first and then open the remote whiteboard",
        "please_join_then_send": "Please join the room first and then send the content",
        "preview": "Preview",
        "preview_file": "Preview file",
        "preview_not_supported": "This format file is not supported for preview",
        "print_logo": "Print logo",
        "private_chat": "Private chat",
        "public_channel_send_done": "Public channel send successfully",
        "public_chat_channel": "Public chat channel",
        "public_chat_channel_someone_interact": "Someone interacted in the public chat channel, go and see",
        "qq": "QQ communication group",
        "query_log": "Keyword query log",
        "read_file_error": "Read file error",
        "read_file_interrupt": "Read file interrupt",
        "receive_ack": "Receive ack, ready to send to",
        "receive_answer_event": "Receive answer event",
        "receive_candidate_event": "Receive candidate event",
        "receive_create_room_event": "Receive create room event",
        "receive_done": "Receive done",
        "receive_file_list": "Received file list",
        "receive_join_room_event": "Receive join room event",
        "receive_offer_event": "Receive offer event",
        "receive_temporary_link": "Receive temporary link",
        "received": "Received",
        "recording_done": "Recording completed, please check in the received file list",
        "recording_incomplete": "Screen recording is complete! It is detected that the recording is incomplete. If you need to stop recording, please click the stop button on this page to stop recording",
        "refresh_random_room_num_init": "Refresh random room number initialization",
        "refresh_random_room_num_init_done": "Refresh random room number initialization completed",
        "refresh_room": "Refresh room",
        "relay_on": "The relay server is currently enabled, for more information, please go to settings to view",
        "relay_on_and_more_info_in_setting": "The relay server is currently enabled, for more information, please go to settings to view",
        "relay_server_current": "The relay server is currently",
        "relay_server_current_detail": "Enabling the relay server can ensure that the data is transferred in a complex p2p network environment. If it is disabled, it will be forced to go through p2p (p2p detection can be performed in the settings), which may cause the transmission to fail!",
        "relay_setting": "Relay setting",
        "remote_draw": "Paint",
        "room": "Room",
        "room_least_two_can_send_content": "At least two people are required in the room to send content",
        "room_least_two_can_send_file": "At least two people are required in the room to send files",
        "room_num_no_number": "Room number is not allowed in number",
        "room_num_no_special_symbols": "Room number is not allowed in special symbols",
        "room_num_no_zh": "Room number is not allowed in Chinese",
        "room_num_too_long": "The room number is too long",
        "save": "Temporarily save",
        "save_fail": "Temporarily saved failed",
        "save_failed": "Temporarily save failed",
        "save_ok": "Temporarily saved successfully",
        "saved": "Temporarily saved",
        "saving": "Temporarily save",
        "screen_recording": "Record",
        "screen_sharing": "Screen",
        "second": "second",
        "select_wait_send_record": "Select wait send record...",
        "selected_file": "Selected file",
        "selected_file_exist": "The selected file already exists with the same file and will not be added again",
        "self": "Myself",
        "send": "Send",
        "send_all": "Send all",
        "send_alone": "Send alone",
        "send_bug_info_ok": "The feedback was successful, and more questions can be added to the group to communicate, which will solve your problem faster",
        "send_cancel": "Send canceled",
        "send_chat": "Chat",
        "send_file": "Send file",
        "send_file_record_exist": "The same file record already exists and will not be added again",
        "send_text": "Send text",
        "send_to": "Send to",
        "send_to_user_separately": "Send to user separately",
        "sending": "Sending",
        "sending_history": "File sending history",
        "sending_to": "Sending to",
        "sent": "Sent",
        "setting": "Setting",
        "share_init": "Share initialization",
        "share_init_done": "Share initialization completed",
        "share_join_room": "Share join room",
        "share_join_room_done": "Share auto join room link copied",
        "share_link": "Share room link",
        "share_pickup_code": "Share pickup code",
        "share_pickup_code_file": "Share pickup code file",
        "sharing": "Sharing",
        "sharing_done": "Screen sharing is over, this sharing time is ",
        "size": "Size",
        "slider_init": "Slider initialization",
        "slider_init_done": "Slider initialization completed",
        "socket_init": "Socket initialization",
        "socket_init_done": "Socket initialization completed",
        "start_live": "Live",
        "start_local_screen_recording": "Start local screen recording",
        "start_screen_sharing": "Start screen sharing",
        "start_video_call": "Start video call",
        "stream_room": "Stream room",
        "support": "Support",
        "sys_log": "System log",
        "temporary_link_empty": "Temporary link empty",
        "text_decode_failed": "Text decode failed",
        "text_send_done": "Text content sent",
        "time": "Time",
        "timer": "Timer",
        "total": "Total",
        "total_pickup_file": "Total received temporary files",
        "try_open_ai_switch": "You can try to turn on the synchronization context switch in the settings to help AI better understand your questions coherently",
        "type": "Type",
        "unknown_type": "Unknown type",
        "user": "User",
        "video_call": "Video",
        "video_done": "Audio and video calls are over, this call time is ",
        "videoing": "Videoing",
        "view_pickup_code": "View pickup code",
        "wait": "Waiting",
        "wait_ack": "Waiting for ack...",
        "wait_sending": "Pending",
        "web_screen_recording": "Web screen recording",
        "webrtc_check": "Webrtc check",
        "website_agreement_statement": "Demo website/open source project agreement statement",
        "will_send": "Will send",
        "window_event_init": "Window event initialization",
        "window_event_init_done": "Window event initialization completed",
        "you_enter_file_room": "You entered the file room",
        "you_enter_password_room": "You entered the password room",
        "you_enter_stream_room": "You entered the stream room",
        "you_join_room": "You joined the room number through sharing",
        "you_refresh_room": "You refreshed the room number, the current room number is",
        "your_browser": "Your browser",
        "your_ip_list": "Your IP list is",
        "nickname" : "Nickname",
        "userid" : "Userd",
        "room_channel" : "Room channel",
        "join_time" : "Join time",
        "website_language" : "Website language",
        "terminal_equipment" : "Terminal equipment",
        "device_classification" : "Device classification",
        "network_status" : "Network status",
        "public_ip" : "Public IP",
        "webrtc_ice_state" : "webrtc state"
    },
    "zh": {
        "iamLiveViewer" : "我是观众",
        "iamLiveOwner" : "我是主播",
        "chooseRoleEnter" : "选择身份进入",
        "cancel" : "取消",
        "screenLiveShare" : "屏幕直播",
        "videoLiveShare" : "视频直播",
        "audioing" : "语音中",
        "audio_sharing" : "语音连麦",
        "expand_audio" : "展开音频面板",
        "collapse_audio" : "收起音频面板",
        "start_audio_sharing" : "开始语音连麦",
        "end_audio_sharing" : "结束语言连麦",
        "in_audioing" : "正在语音中",
        "start_audio" : "语音连麦",
        "audience" : "观众",
        "webrtc_check_init" : "Webrtc检测初始化",
        "webrtc_check_init_done" : "Webrtc检测初始化完成",
        "webrtc_ice_state" : "webrtc状态",
        "nickname" : "用户昵称",
        "userid" : "用户ID  ",
        "room_channel" : "房间频道",
        "join_time" : "加入时间",
        "website_language" : "网站语言",
        "terminal_equipment" : "终端设备",
        "device_classification" : "设备分类",
        "network_status" : "网络状态",
        "public_ip" : "传输地址",
        "add_ice_candidate_failed": "addIceCandidate失败",
        "add_ice_candidate_success": "addIceCandidateSuccess成功",
        "ai_answering": "AI正在回答您的问题，请稍后再问",
        "ai_chat": "AI智能对话",
        "ai_chat_record": "AI聊天记录",
        "ai_reply": "AI回复",
        "ai_reply_you": "AI回复了你，快点聊起来吧~",
        "ai_setting": "智能理解",
        "ai_switch": "AI智能理解上下文开关",
        "ai_thinking": "AI思考中",
        "answer_failed": "answer失败",
        "basic_data_get": "基础数据 获取中",
        "basic_data_get_done": "基础数据 获取完成",
        "blog": "博客",
        "chat_channel": "聊天频道",
        "chat_comm": "公共聊天",
        "chat_gpt": "ChatGPT",
        "clear_log": "清空日志",
        "click_choose_file": "点击选择文件，或将文件拖到此处支持多文件拖放发送。重新选择文件后，之前选择的文件将被覆盖",
        "click_download": "点击下载",
        "click_to_stop_live": "开始直播，再次点击按钮结束直播",
        "click_to_stop_recording": "开始录制，再次点击停止录制",
        "click_to_stop_sharing": "开始屏幕共享，再次点击按钮停止共享",
        "click_to_stop_video": "开始音视频通话，再次点击按钮挂断通话",
        "collapse_live": "收起直播面板",
        "collapse_log": "收起日志面板",
        "collapse_receive_file": "收起已接收文件面板",
        "collapse_screen_sharing": "收起屏幕共享面板",
        "collapse_selected_file": "收起已选文件面板",
        "collapse_send_file_record": "收起发送文件记录面板",
        "collapse_temporary": "折叠临时文件面板",
        "collapse_video": "收起音视频面板",
        "collapse_wait_send_file": "收起待发送文件面板",
        "common_event_init": "公共事件监听 初始化中",
        "common_event_init_done": "公共事件监听 初始化完成",
        "communication_rational": "文明发言，理性交流",
        "confirm": "确定",
        "connection_closed": "连接关闭",
        "connection_disconnected": "连接断开",
        "content_max_1000": "内容过长，不能超过1000个字符",
        "content_max_10000": "文本内容过长，长度最多为10000字",
        "copy_room_link": "房间链接已成功复制",
        "create_join_room": "创建/加入房间",
        "cur_selected_file": "当前选择的文件列表",
        "current_network": "当前网络状态为",
        "current_number": "当前人数",
        "current_relay_status": "当前中继服务状态",
        "custom_data_receive_channel_closed": "自定义数据接收管道已关闭",
        "custom_data_receive_channel_ready": "自定义数据接收管道已就绪",
        "debug_init": "DEBUG组件 初始化中",
        "debug_init_done": "DEBUG组件 初始化完成",
        "demo_site": "本网站为演示站点，仅提供可用性演示，时长15秒，自动结束演示，如需使用请自行部署使用",
        "disclaimer": "免责声明",
        "donate": "捐赠",
        "download": "下载",
        "end_live": "结束直播",
        "end_local_screen_recording": "结束本地屏幕录制",
        "end_screen_sharing": "结束远程屏幕共享",
        "end_video_call": "结束音视频通话",
        "enter_password_room": "进入密码房间，房间号",
        "enter_send": "ctrl+enter 换行 | Enter 发送",
        "establish_connection": "建立连接",
        "event_init": "事件监听组件 初始化中",
        "event_init_done": "事件监听组件 初始化完成",
        "expires_one_day" : "一天后过期",
        "exit_room": "退出房间",
        "expand_live": "展开直播面板",
        "expand_log": "展开日志面板",
        "expand_receive_file": "展开已接收文件面板",
        "expand_screen_sharing": "展开屏幕共享面板",
        "expand_selected_file": "展开已选文件面板",
        "expand_send_file_record": "展开发送文件记录面板",
        "expand_temporary": "展开临时文件面板",
        "expand_video": "展开音视频面板",
        "expand_wait_send_file": "展开待发送文件面板",
        "failed_find_file": "失败，文件资源不存在",
        "feature_close": "当前功能暂时关闭。如果您有任何问题，可以加入群组进行交流",
        "feedback": "反馈问题",
        "file_box": "文件箱",
        "file_from": "文件来自",
        "file_not_exist": "文件读取失败，文件资源不存在",
        "file_receive": "接收文件",
        "file_receive_channel_closed": "文件接收管道已关闭",
        "file_receive_channel_ready": "文件接收管道已就绪",
        "file_room": "文件房间",
        "file_select_init": "文件选择组件 初始化中",
        "file_select_init_done": "文件选择组件 初始化完成",
        "file_send_channel_buffer_full": "文件发送管道缓冲区已满，等待中",
        "file_send_channel_buffer_recover": "文件发送管道缓冲区已恢复，继续发送中",
        "file_send_channel_not_establish": "发送文件时，文件发送管道未建立",
        "file_send_done": "文件全部发送完毕",
        "file_send_record": "文件发送记录",
        "generate_send_file_record": "生成文件发送记录",
        "get_device_failed": "获取设备录制权限失败",
        "get_pickup_file": "通过取件码获取文件",
        "give_coffee": "赞助一杯咖啡",
        "history_msg" : " 条历史消息",
        "home": "官网首页",
        "i_said_to_ai": "我对AI说",
        "illegal_event": "非法触发事件",
        "in_living": "正在直播中，请退出后再试",
        "in_sharing_screen": "正在共享屏幕，请退出后再试",
        "in_videoing": "正在视频通话中，请退出后再试",
        "init_language_done": "初始化语言版本完成",
        "input_room_num": "输入房间编号",
        "is_pickup_code": "是否取件码取件",
        "is_screen_recording": "是否进行本地屏幕录制",
        "join_room": "加入房间",
        "language_select_init": "语言选择初始化",
        "language_select_init_done": "语言选择初始化完成",
        "live_done": "直播已结束，直播时间为",
        "living": "直播中",
        "log": "执行日志",
        "max_previewed": "最多只能预览",
        "max_saved": "最多只能临时存储",
        "mb_file": "MB的文件",
        "message_box_init": "消息弹窗 初始化中",
        "message_box_init_done": "消息弹窗 初始化完成",
        "mobile_data": "移动数据",
        "mobile_not_support_recording": "移动设备暂不支持屏幕录制",
        "name": "名称",
        "no_code_file": "此取件码暂无文件记录",
        "no_device": "未检测到摄像头或麦克风",
        "no_notice": "暂无公告",
        "no_received_file": "暂时未收到文件",
        "no_send_file": "暂时没有发送过文件",
        "not_support": "不支持",
        "note_website_for_learing": "注意：示例网站仅用于学习演示，请勿他用",
        "notice": "通知",
        "off": "关闭",
        "offer_failed": "offer失败",
        "on": "开启",
        "online": "当前在线人数",
        "online_number": "人在线",
        "only_show" : "仅展示 ",
        "only_show_10_history_msg": "仅展示10条历史消息",
        "op_log": "操作日志",
        "open_ai_chat": "打开AI聊天窗口",
        "open_ai_switch": "已开启同步上下文开关，AI可以更好地理解您的问题，但也可能导致答案变得不可预测，您可以在设置中关闭",
        "open_donate": "打开赞助窗口",
        "open_private_chat": "打开私聊面板",
        "open_public_chat_panel": "打开公共聊天面板",
        "open_relay_setting": "打开中继设置窗口",
        "open_room_chat_panel": "打开房间聊天面板",
        "open_setting": "打开设置窗口",
        "open_share_join_room": "打开分享房间窗口",
        "open_share_pickup_code": "打开分享取件码窗口",
        "other_language": "其他语言",
        "owner" : "房主",
        "p2p_check": "P2p检测",
        "p2p_check_principle": "p2p检测原理",
        "p2p_check_principle_detail": "本项目是基于webrtc实现的，webrtc的p2p受限于连接",
        "p2p_check_principle_detail_10": "具体是否有获取到双方内网IP，请自行在执行日志中搜索关键字 “IP”，查看是否有类似内网格式的IP即可",
        "p2p_check_principle_detail_2": "双方的网络NAT类型和浏览器限制",
        "p2p_check_principle_detail_3": "自检步骤",
        "p2p_check_principle_detail_4": "在验证p2p之前，",
        "p2p_check_principle_detail_5": "请先关闭中继服务开关后",
        "p2p_check_principle_detail_6": "，双方进入后房间，再进行自检",
        "p2p_check_principle_detail_7": "双方加入房间后，如果客户端可以获取到房间内双方的内网IP，大概率就可以进行p2p传输",
        "p2p_check_principle_detail_8": "如果是chrome电脑版，可以打开",
        "p2p_check_principle_detail_9": "然后搜索 'mdns' 关键字，打开开关后重启即可",
        "password": "密码",
        "password_room": "密码房间",
        "password_too_long": "密码过长",
        "pickup_code": "取件号码",
        "please_describe_your_feedback": "请描述您需要反馈的问题",
        "please_enter": "请输入",
        "please_enter_code": "请输入取件码",
        "please_enter_content": "请输入文本内容",
        "please_enter_live_room_num": "请输入直播房间号",
        "please_enter_password": "请输入密码房间密码",
        "please_enter_right_code": "请输入正确的取件码",
        "please_enter_room_num": "请先填写房间号",
        "please_enter_audio_sharing_room_num" : "请输入语音连麦房间号",
        "please_enter_screen_sharing_room_num": "请输入屏幕共享房间号",
        "please_enter_video_call_room_num": "请输入音视频通话房间号",
        "please_exit_then_join_live": "请先退出房间，然后进入直播间",
        "please_exit_then_join_password_room": "请先退出房间，然后进入密码房间",
        "please_exit_then_join_screen": "请先退出房间，然后发起屏幕共享",
        "please_exit_then_join_video": "请先退出房间，然后发起视频通话",
        "please_fill_content": "请先填写内容",
        "please_join_then_chat": "请先加入房间，然后发言",
        "please_join_then_chat_with_ai": "请先加入房间，然后与AI聊天",
        "please_join_then_choose_file": "请先加入房间，然后选择文件",
        "please_join_then_draw": "请先加入房间，然后打开远程白板",
        "please_join_then_send": "请先加入房间，然后发送内容",
        "preview": "预览",
        "preview_file": "预览文件",
        "preview_not_supported": "不支持此格式文件的预览",
        "print_logo": "打印logo",
        "private_chat": "私聊",
        "public_channel_send_done": "公共频道发言成功",
        "public_chat_channel": "公共聊天频道",
        "public_chat_channel_someone_interact": "公共聊天频道有人互动啦，快去瞧瞧",
        "qq": "QQ交流群",
        "query_log": "关键词查询日志",
        "read_file_error": "读取文件错误",
        "read_file_interrupt": "读取文件中断",
        "receive_ack": "收到ack回执，准备发送给",
        "receive_answer_event": "收到answer事件",
        "receive_candidate_event": "收到candidate事件",
        "receive_create_room_event": "收到创建房间事件",
        "receive_done": "接收完毕",
        "receive_file_list": "接收文件列表",
        "receive_join_room_event": "收到加入房间事件",
        "receive_offer_event": "收到offer事件",
        "receive_temporary_link": "收到暂存链接",
        "received": "已接收",
        "recording_done": "录制完成，请在接收文件列表中查看",
        "recording_incomplete": "屏幕录制已完成！检测到录制不完整，如需停止录制，请点击本页面上的停止按钮停止录制",
        "refresh_random_room_num_init": "刷新随机房间号 初始化中",
        "refresh_random_room_num_init_done": "刷新随机房间号初始化完成",
        "refresh_room": "刷新房间",
        "relay_on": "当前已启用中继服务器，有关更多信息，请前往设置查看",
        "relay_on_and_more_info_in_setting": "当前已启用中继服务器，有关更多信息，请前往设置查看",
        "relay_server_current": "中继服务器当前已",
        "relay_server_current_detail": "启用中继服务器可以保证在复杂的p2p网络环境下，提供保底的数据中转传输，如果禁用，则是强制走p2p（可在设置中进行p2p检测），可能会出现发送失败！",
        "relay_setting": "中继设置",
        "remote_draw": "远程画笔",
        "room": "房间",
        "room_least_two_can_send_content": "房间内至少需要两人才能发送内容",
        "room_least_two_can_send_file": "房间内至少需要两人才能发送文件",
        "room_num_no_number": "房间号不允许包含数字",
        "room_num_no_special_symbols": "房间号不允许包含特殊符号",
        "room_num_no_zh": "房间号不允许包含中文",
        "room_num_too_long": "房间号过长",
        "save": "暂存",
        "save_fail": "临时保存失败",
        "save_failed": "暂存失败",
        "save_ok": "临时保存成功",
        "saved": "已暂存",
        "saving": "暂存中",
        "screen_recording": "屏幕录制",
        "screen_sharing": "屏幕共享",
        "second": "秒",
        "select_wait_send_record": "选择待发送记录中",
        "selected_file": "已选择文件",
        "selected_file_exist": "选择的文件已经存在相同的文件，不再重复添加",
        "self": "自己",
        "send": "发送",
        "send_all": "一键发送",
        "send_alone": "单独发送",
        "send_bug_info_ok": "反馈成功，更多问题可添加群组进行交流，将更快地解决您的问题",
        "send_cancel": "发送已取消",
        "send_chat": "发言",
        "send_file": "发送文件",
        "send_file_record_exist": "已经存在相同的文件记录，不再重复添加",
        "send_text": "发送文本",
        "send_to": "发送至",
        "send_to_user_separately": "分别发送给用户",
        "sending": "发送中",
        "sending_history": "文件发送历史",
        "sending_to": "正在发送给",
        "sent": "已发送",
        "setting": "设置",
        "share_init": "分享组件 初始化中",
        "share_init_done": "分享组件 初始化完成",
        "share_join_room": "分享加入房间",
        "share_join_room_done": "分享自动加入房间链接已复制",
        "share_link": "分享房间链接",
        "share_pickup_code": "分享取件码",
        "share_pickup_code_file": "分享取件码文件",
        "sharing": "共享中",
        "sharing_done": "屏幕共享已结束，本次共享时间为",
        "size": "大小",
        "slider_init": "滑动组件 初始化中",
        "slider_init_done": "滑动组件 初始化完成",
        "socket_init": "SOCKET监听 初始化中",
        "socket_init_done": "SOCKET监听 初始化完成",
        "start_live": "开始直播",
        "start_local_screen_recording": "开始本地屏幕录制",
        "start_screen_sharing": "开始远程屏幕共享",
        "start_video_call": "开始音视频通话",
        "stream_room": "流媒体房间",
        "support": "支持",
        "sys_log": "系统日志",
        "temporary_link_empty": "文件暂存失败, 上传链接为空",
        "text_decode_failed": "文本内容解码失败",
        "text_send_done": "文本内容已发送",
        "time": "时间",
        "timer": "计时器",
        "total": "总计",
        "total_pickup_file": "总计接收的暂存文件",
        "try_open_ai_switch": "您可以尝试在设置中打开同步上下文开关，帮助AI更好地理解您的问题的连贯性",
        "type": "类型",
        "unknown_type": "未知类型",
        "user": "用户",
        "video_call": "视频通话",
        "video_done": "音视频通话已结束，本次通话时间为",
        "videoing": "视频中",
        "view_pickup_code": "查看取件码",
        "wait": "等待中",
        "wait_ack": "等待ack回执中",
        "wait_sending": "待发送",
        "web_screen_recording": "网页录屏",
        "webrtc_check": "Webrtc检测",
        "website_agreement_statement": "演示网站/开源项目协议声明",
        "will_send": "即将发送",
        "window_event_init": "窗口事件监听 初始化中",
        "window_event_init_done": "窗口事件监听 初始化完成",
        "you_enter_file_room": "你进入了文件房间",
        "you_enter_password_room": "你进入了密码房间",
        "you_enter_stream_room": "你进入了流媒体房间",
        "you_join_room": "你通过分享加入了房间号为",
        "you_refresh_room": "你刷新了房间号, 当前房间号为",
        "your_browser": "您的浏览器",
        "your_ip_list": "你的IP列表为"
    }
}

window.local_lang = local_lang;