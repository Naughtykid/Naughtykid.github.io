const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "约定",
        artist: '周慧',
        url: 'http://up.mcyt.net/?down/46314.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/84.jpg',
      },
      {
        name: '闹够了没有',
        artist: '赖伟峰',
        url: 'http://up.mcyt.net/?down/32368.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/58.jpg',
      },
      {
        name: '天空之城',
        artist: '井上杏美',
        url: 'http://up.mcyt.net/?down/47037.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/71.jpg',
      }
    ]
});