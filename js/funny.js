<!--github.com/IFmiss/d-audio-->
const myAudio = new Daudio({
    // 音乐append的元素
    ele: '#d-audio',
    // 音乐封面
    imageurl: 'https://w.wallhaven.cc/full/96/wallhaven-96w8e8.png',
    // 音乐地址
    src: 'http://music.163.com/song/media/outer/url?id=35847388.mp3',
    // 音乐名字
    name: 'Hello',
    // 音乐歌手
    singer: 'Adele',
    // 是否显示进度信息
    showprogress: true,
    // '' 就是默认状态， cricle则是初始化就是圆形且可以旋转
    initstate: 'cricle',
    blur: 0,
    // 是否循环
    loop: true,
});
