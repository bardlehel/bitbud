import { Template } from 'meteor/templating';
import { Accounts } from 'meteor/accounts-base';
import { Session } from 'meteor/session';

import './main.html';

Template.dashboard.events({
  'click .logout': function(event){
    event.preventDefault();
    Meteor.logout();
  }
});

Template.register.events({
  'submit form': function(event) {
    event.preventDefault();
    var emailVar = event.target.registerEmail.value;
    var passwordVar = event.target.registerPassword.value;

    Accounts.createUser({
      email: emailVar,
      password: passwordVar
    });
  },
  'click .loginLink': function(event){
    event.preventDefault();
    Session.set('showLogin', true);
  }
});

Template.body.helpers({
  showLogin: function () {
    return Session.get('showLogin');
  }
});




Template.login.events({
  'submit form': function(event) {
    event.preventDefault();
    var emailVar = event.target.loginEmail.value;
    var passwordVar = event.target.loginPassword.value;

    Meteor.loginWithPassword(emailVar, passwordVar);
  },
  'click .registerLink': function(event){
    event.preventDefault();
    Session.set('showLogin', false);
  }
});


