// 开辟一个新线程: 解决原生定时器延迟问题
const TimerPond = {};

const Handle = {
  setInterval(data) {
    if (TimerPond[data.uuid]) {
      this.clearInterval(data);
      throw new Error('定时器不允许重复创建, 为了程序安全, 已删除定时器' + data.uuid);
    }
    TimerPond[data.uuid] = setInterval(() => {
      self.postMessage({ uuid: data.uuid, event: 'setInterval' });
    }, data.delay);
  },
  clearInterval(data) {
    if (TimerPond[data.uuid]) {
      clearInterval(TimerPond[data.uuid]);
      delete TimerPond[data.uuid];
    }
    // console.log(data.uuid);

    // self.postMessage({ uuid: data.uuid, event: 'clearInterval' });
  }
};

self.onmessage = function ({ data }) {
  Handle[data.event](data);
};
