/**
 * Created with JetBrains WebStorm.
 * User: yangjungis@126.com
 * Date: 14-8-19
 * Time: 上午11:17
 * To change this template use File | Settings | File Templates.
 */

import Ember from 'ember';
import Apps from 'sec-ui/models/apps';

var AppsRoute = Ember.Route.extend({
  model: function(params) {
    console.log("AppsRoute ...");
    return Apps.find();
  }
});

export default AppsRoute;