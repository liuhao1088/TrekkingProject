// pages/streamingMediaSeries/streamingMediaSeries.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    top:""
  },
  detailsKtwentyNinedj:function(e){
    wx.navigateTo({
      url: "../detailsKtwentyNine/detailsKtwentyNine"
    })
  },
  detailsStwentydj:function(e){
    wx.navigateTo({
      url: "../detailsStwenty/detailsStwenty"
    })
  },
  detailsKeightdj:function(e){
    wx.navigateTo({
      url: "../detailsKeight/detailsKeight"
    })
  },
  detailsKninedj:function(e){
    wx.navigateTo({
      url: "../detailsKnine/detailsKnine"
    })
  },
  detailsKtendj:function(e){
    wx.navigateTo({
      url: "../detailsKten/detailsKten"
    })
  },
  detailsKelevendj:function(e){
    wx.navigateTo({
      url: "../detailsKeleven/detailsKeleven"
    })
  },
  detailsKthirtydj:function(e){
    wx.navigateTo({
      url: "../detailsKthirty/detailsKthirty"
    })
  },
  detailsSelevendj:function(e){
    wx.navigateTo({
      url: "../detailsSeleven/detailsSeleven"
    })
  },
  detailsSthirteendj:function(e){
    wx.navigateTo({
      url: "../detailsSthirteen/detailsSthirteen"
    })
  },
  detailsSfifteendj:function(e){
    wx.navigateTo({
      url: "../detailsSfifteen/detailsSfifteen"
    })
  },
  detailsSnineteendj:function(e){
    wx.navigateTo({
      url: "../detailsSnineteen/detailsSnineteen"
    })
  },
  detailsStwentyOnedj:function(e){
    wx.navigateTo({
      url: "../detailsStwentyOne/detailsStwentyOne"
    })
  },
  detailsStwentyTwodj:function(e){
    wx.navigateTo({
      url: "../detailsStwentyTwo/detailsStwentyTwo"
    })
  },
  detailsSseventydj:function(e){
    wx.navigateTo({
      url: "../detailsSseventy/detailsSseventy"
    })
  },
  detailsSseventeendj:function(e){
    wx.navigateTo({
      url: "../detailsSseventeen/detailsSseventeen"
    })
  },
  detailsGthreeZeroEightdj:function(e){
    wx.navigateTo({
      url: "../detailsGthreeZeroEight/detailsGthreeZeroEight"
    })
  },
  detailsGfiveZeroEightdj:function(e){
    wx.navigateTo({
      url: "../detailsGfiveZeroEight/detailsGfiveZeroEight"
    })
  },
  detailsStwentythreedj:function(e){
    wx.navigateTo({
      url: "../detailsGfiveZeroEight/detailsGfiveZeroEight"
    })
  },
  detailsKsixteendj:function(e){
    wx.navigateTo({
      url: "../detailsKsixteen/detailsKsixteen"
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
        top: "35%"
      })
    }else{
      this.setData({
        top: "40%"
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