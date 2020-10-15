// pages/wode/wode.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl:[
      'https://img14.360buyimg.com/ddimg/jfs/t1/145648/22/10851/498741/5f881e74E2709c116/8970ce38e6976c24.png',
      'https://img13.360buyimg.com/ddimg/jfs/t1/124096/22/15001/541952/5f880f11Ee66cfa7c/9325e622eb5fc1ae.png',
      'https://img10.360buyimg.com/ddimg/jfs/t1/147161/30/10873/458621/5f880f21Ee41da51c/aa04d76e0d9a648b.png',
      'https://img14.360buyimg.com/ddimg/jfs/t1/120330/11/15225/476708/5f880f42E71bd8a98/1b49271871ae29e0.png'
    ],
    links: [
      '../test/test',
      '',
      '',
      ''
    ],
     active: 0,
     indicatorDots: true,
     autoplay: false,
     vertical: true,
     circular: true
  },

  swiperChange: function (e) {
    this.setData({
      active: e.detail.current
    })
  },
  swipclick: function (e) {
    console.log(this.data.links[this.data.active]);
    wx.navigateTo({
      url: this.data.links[this.data.active]
    })
  },
  hdRecorderSeriesdj:function(e){
    wx.navigateTo({
      url: "../hdRecorderSeries/hdRecorderSeries"
    })
  },
  smartStreamingSeriesdj:function(e){
    wx.navigateTo({
      url: "../smartStreamingSeries/smartStreamingSeries"
    })
  },
  hiddenRecorderSeriesdj:function(e){
    wx.navigateTo({
      url: "../hiddenRecorderSeries/hiddenRecorderSeries"
    })
  },
  truckReconrderSeriesdj:function(e){
    wx.navigateTo({
      url: "../truckReconrderSeries/truckReconrderSeries"
    })
  },

  previewImg:function(e){
    console.log(e.currentTarget.dataset.index);
    var index = e.currentTarget.dataset.index;
   
    console.log(this.data.imgArr);
    wx.previewImage({
      current: this.data.imgArr[index],     //当前图片地址
      urls: this.data.imgArr,               //所有要预览的图片的地址集合 数组形式
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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