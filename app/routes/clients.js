import Ember from 'ember';

const {
  get,
  set,
  inject,
  Route
} = Ember;

export default Route.extend({
  sanctuary: inject.service(),

  activate() {
    let sanctuary = get(this, 'sanctuary');
    set(sanctuary, 'prefix', 'Clients of ');
    set(sanctuary, 'section', 'clients');
  }
});
