'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
  //   'title': 'Home',
  //   'link': '/'
  // },
  // {
    'title': 'Movie',
    'link': '/movie'
  },
  {
    'title': 'Theatre',
    'link': '/theatre'
  },
  {
    'title': 'Mapping',
    'link' : '/mapping'
  }
  // {
  //   'title': 'Rating',
  //   'link' : '/rating'
  // }
];

  isCollapsed = true;
  //end-non-standard

  constructor($location, Auth) {
    this.$location = $location;
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
  }

  isActive(route) {
    return route === this.$location.path();
  }
}

angular.module('yomastertemplateApp')
  .controller('NavbarController', NavbarController);
