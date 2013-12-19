function insertText(a, b) {
	$("#videoTitle").html(a)
	$("#videoDetail").html(b)
}
function vshitao() {
	rate = 0.56
	list_height = 0
	jwplayer("videoField").setup({
		width: document.body.clientWidth - right_margin,
		height: (document.body.clientWidth - right_margin) * rate + list_height,
		repeat: "true",
		playlist: "./playlist.rss"
	})
}
var autostart = "1",
	rate = 0.62,
	right_margin = 30,
	list_height = 0
var shitao_Title = "今日点击",
	shitao_Detail = "本站视频将随新唐人石涛栏目同步更新，欢迎大家常来！"
$(function() {
	insertText(shitao_Title, shitao_Detail)
	vshitao()
	$(window).resize(function() {
		jwplayer("videoField").resize(document.body.clientWidth - right_margin, (document.body.clientWidth - right_margin) * rate + list_height)
	})
	$("#btn_shitao").click(function() {
		insertText(shitao_Title, shitao_Detail)
		vshitao()
		$("#videoField").delay(1E3).fadeIn("slow")
	})
})