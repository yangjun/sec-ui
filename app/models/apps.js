/**
 * Created with JetBrains WebStorm.
 * User: yangjungis@126.com
 * Date: 14-8-19
 * Time: 上午11:20
 * To change this template use File | Settings | File Templates.
 */

import Ember from 'ember';
import Ajax from 'sec-ui/utils/ajax';

var Apps = Ember.Object.extend();

Apps.reopenClass({
  find: function() {
    return Ajax.get('apps');
  },
  findBy: function(id) {
    return Ajax.get('apps/' + id);
  }
});

export default Apps;
