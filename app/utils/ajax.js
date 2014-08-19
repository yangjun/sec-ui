/**
 * Created with JetBrains WebStorm.
 * User: yangjungis@126.com
 * Date: 14-8-19
 * Time: 上午11:37
 * To change this template use File | Settings | File Templates.
 */

import Ember from 'ember';
import Const from 'sec-ui/utils/const';

var Ajax = Ember.Object.extend({
});

Ajax.reopenClass({
  genUrl: function (url) {
    var value = Const.baseUrl + url;
    var isToken = !(Const.token === undefined || Const.token === '');
    if (isToken) {
      if (value.indexOf('?') > 0)  {
        value = value + "&token=" + Const.token;
      } else {
        value = value + "?token=" + Const.token;
      }
    }
    console.log("url = " + value);
    return value;
  },

  get:function (url) {
    var self = this;
    var ajax = Ember.$.getJSON(self.genUrl(url));
    return ajax;
  }
});

export default Ajax;