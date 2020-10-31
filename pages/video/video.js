// pages/carMachineSeries/carMachineSeries.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    top:"20%",
    videoUrl:[
      {
        url:'https://fnck-20200914-1303154931.cos.ap-guangzhou.myqcloud.com/%E8%A7%86%E9%A2%91/F5.mp4?q-sign-algorithm=sha1&q-ak=AKIDHL7fPrFwXrtdX9SYLq75j5BxTeFbR3KK&q-sign-time=1603275566;33139275566&q-key-time=1603275566;33139275566&q-header-list=&q-url-param-list=&q-signature=54dac7ea92d4e89b13b3219d9c6901578b6f669c',
        name:'高清行车记录仪',
        title:'后视镜系列产品',
        yw:'F5'
      
      },
      {
        url:'https://fnck-20200914-1303154931.cos.ap-guangzhou.myqcloud.com/%E8%A7%86%E9%A2%91/%E5%BE%92%E6%AD%A5%E5%A4%A9%E4%B8%8B%E6%96%B0K1.mp4?q-sign-algorithm=sha1&q-ak=AKIDHL7fPrFwXrtdX9SYLq75j5BxTeFbR3KK&q-sign-time=1603276031;33139276031&q-key-time=1603276031;33139276031&q-header-list=&q-url-param-list=&q-signature=8435ddf08288c6e7500b164f312394eaf726fa2b',
        name:'高清USB行车记录仪',
        title:'USB系列产品',
        yw:'K1'
      },
      {
        url:'https://fnck-20200914-1303154931.cos.ap-guangzhou.myqcloud.com/%E8%A7%86%E9%A2%91/X5DV4.mp4?q-sign-algorithm=sha1&q-ak=AKIDHL7fPrFwXrtdX9SYLq75j5BxTeFbR3KK&q-sign-time=1603276063;33139276063&q-key-time=1603276063;33139276063&q-header-list=&q-url-param-list=&q-signature=082cd80a0dd8081570e28ce3fad69d5579e38fd7',
        name:'高清行车记录仪',
        title:'流媒体系列产品',
        yw:'X5Dv4'
      },
      {
        url:'https://fnck-20200914-1303154931.cos.ap-guangzhou.myqcloud.com/%E8%A7%86%E9%A2%91/%E5%BE%92%E6%AD%A5%E5%A4%A9%E4%B8%8BS11.mp4?q-sign-algorithm=sha1&q-ak=AKIDHL7fPrFwXrtdX9SYLq75j5BxTeFbR3KK&q-sign-time=1603276094;33139276094&q-key-time=1603276094;33139276094&q-header-list=&q-url-param-list=&q-signature=83b5a00004e554852ef35137285220dc729bc3d1',
        name:'隐藏式记录仪',
        title:'隐藏式系列产品',
        yw:'S11'
      },
      {
        url:'https://fnck-20200914-1303154931.cos.ap-guangzhou.myqcloud.com/%E8%A7%86%E9%A2%91/%E5%BE%92%E6%AD%A5%E5%A4%A9%E4%B8%8BK6%E6%97%A0%E6%B0%B4%E5%8D%B0.mp4?q-sign-algorithm=sha1&q-ak=AKIDHL7fPrFwXrtdX9SYLq75j5BxTeFbR3KK&q-sign-time=1603276124;33139276124&q-key-time=1603276124;33139276124&q-header-list=&q-url-param-list=&q-signature=e1e03324087d78e8fc7e576441a984dab1d1441c',
        name:'高清USB行车记录仪',
        title:'USB系列产品',
        yw:'K6'
      }
    ],
    indexCurrent:null,
  },
  video_play(e) {
    var curIdx = e.currentTarget.id;
    // 没有播放时播放视频
    console.log(curIdx)
    if (!this.data.indexCurrent) {
      this.setData({
        indexCurrent: curIdx
      })
      var videoContext = wx.createVideoContext(curIdx,this) //这里对应的视频id
      videoContext.play()
    } else { // 有播放时先将prev暂停，再播放当前点击的current
      var videoContextPrev = wx.createVideoContext(this.data.indexCurrent,this)//this是在自定义组件下，当前组件实例的this，以操作组件内 video 组件（在自定义组件中药加上this，如果是普通页面即不需要加）
      if (this.data.indexCurrent != curIdx) {
        videoContextPrev.pause()
        this.setData({
          indexCurrent: curIdx
        })
        var videoContextCurrent = wx.createVideoContext(curIdx,this)
        videoContextCurrent.play()
      }
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var windowHeight = wx.getSystemInfoSync().windowHeight;
    console.log(windowHeight);
    if(windowHeight>800){
      this.setData({
        top: "16%"
      })
    }else{
      this.setData({
        top: "20%"
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.showShareMenu({

      withShareTicket:true,
      
      menus:['shareAppMessage','shareTimeline']
      
      })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})