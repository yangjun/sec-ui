/**
 * Created with JetBrains WebStorm.
 * User: yangjungis@126.com
 * Date: 14-8-19
 * Time: 下午6:16
 * To change this template use File | Settings | File Templates.
 */

import Ember from 'ember';
import Apps from 'sec-ui/models/apps';

var AppRoute = Ember.Route.extend({
  model: function(params) {
    console.log("AppRoute ..." + JSON.stringify(params));
    return Apps.findBy(params.id);
  }
});

export default AppRoute;