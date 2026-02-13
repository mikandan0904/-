const targetDate = new Date("2027-01-01T00:00:00").getTime();

// カウントダウンの表示を更新する関数
function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // 残り時間を計算
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // 残り時間を表示
    document.getElementById("countdown").innerHTML = 
        `残り ${days}日 ${hours}時間 ${minutes}分 ${seconds}秒`;

    // 新年になったらメッセージを表示
    if (distance < 0) {
        document.getElementById("countdown").innerHTML = "新年おめでとう！";
        const audio = new Audio('happy-new-year.mp3');
        audio.play();
    }
}

// 1秒ごとにカウントダウンを更新
setInterval(updateCountdown, 1000);

// シェアボタンの設定
document.getElementById("shareButton").addEventListener("click", function() {
    if (navigator.share) {
        navigator.share({
            title: "新年おめでとう！",
            text: "カウントダウンタイマーで年越しを祝おう！",
            url: window.location.href
        }).then(() => {
            console.log("共有されました！");
        }).catch((error) => {
            console.log("エラーが発生しました:", error);
        });
    } else {
        alert("この機能はお使いのブラウザではサポートされていません。");
    }
});
