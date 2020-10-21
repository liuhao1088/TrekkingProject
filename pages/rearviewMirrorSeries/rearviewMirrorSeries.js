// pages/streamingMediaSeries/streamingMediaSeries.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    top:"25%"
  },
  detailsTSsixdj:function(e){
    wx.navigateTo({
      url: "../detailsTSsix/detailsTSsix"
    })
  },
  detailsFsevendj:function(e){
    wx.navigateTo({
      url: "../detailsFseven/detailsFseven"
    })
  },
  detailsTSfivedj:function(e){
    wx.navigateTo({
      url: "../detailsTSfive/detailsTSfive"
    })
  },
  detailsFsixdj:function(e){
    wx.navigateTo({
      url: "../detailsFsix/detailsFsix"
    })
  },
  detailsFtenSdj:function(e){
    wx.navigateTo({
      url: "../detailsFtenS/detailsFtenS"
    })
  },
  detailsAelevendj:function(e){
    wx.navigateTo({
      url: "../detailsAeleven/detailsAeleven"
    })
  },
  detailsTSthreedj:function(e){
    wx.navigateTo({
      url: "../detailsTSthree/detailsTSthree"
    })
  },
  detailsFfivedj:function(e){
    wx.navigateTo({
      url: "../detailsFfive/detailsFfive"
    })
  },
  detailsFelevendj:function(e){
    wx.navigateTo({
      url: "../detailsFeleven/detailsFeleven"
    })
  },
  detailsFseventydj:function(e){
    wx.navigateTo({
      url: "../detailsFseventy/detailsFseventy"
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var windowHeight = wx.getSystemInfoSync().windowHeight;
    console.log(windowHeight);
    if(windowHeight>800){
      this.setData({
        top: "20%"
      })
    }else{
      this.setData({
        top: "25%"
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