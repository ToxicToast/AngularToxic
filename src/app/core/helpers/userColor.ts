export class UserColor {

  constructor() { }

  getUserBadgeColor(role) {
      if (role === 'Broadcaster') {
        return 'badge-pc-text';
      } else if (role === 'Bot') {
        return 'badge-youtube-text';
      } else {
        return 'badge-twitch-text';
      }
  }

  getUserOutlineColor(role) {
    if (role === 'Broadcaster') {
      return 'badge badge-outline-pc';
    } else if (role === 'Bot') {
      return 'badge badge-outline-youtube';
    } else {
      return 'badge badge-outline-twitch';
    }
  }

  getUserRoleColor(role) {
    if (role === 'Broadcaster') {
      return 'badge badge-pc';
    } else if (role === 'Bot') {
      return 'badge badge-youtube';
    }  else {
      return 'badge badge-twitch';
    }
  }

}
