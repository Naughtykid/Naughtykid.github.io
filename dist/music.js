const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    audio: [
      {
        name: "Լ��",
        artist: '�ܻ�',
        url: 'http://up.mcyt.net/?down/46314.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/84.jpg',
      },
      {
        name: '�ֹ���û��',
        artist: '��ΰ��',
        url: 'http://up.mcyt.net/?down/32368.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/58.jpg',
      },
      {
        name: '���֮��',
        artist: '��������',
        url: 'http://up.mcyt.net/?down/47037.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/71.jpg',
      }
    ]
});