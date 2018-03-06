export class UserColor {

  constructor() { }

  getUserBadgeColor(role) {
      if (role === 'Broadcaster') {
        return 'badge-pc-text';
      } else if (role === 'Bot') {
        return 'badge-youtube-text';
      } else if (role === 'Banned') {
        return 'badge-steam-text';
      } else {
        return 'badge-twitch-text';
      }
  }

  getUserOutlineColor(role) {
    if (role === 'Broadcaster') {
      return 'badge badge-outline-pc';
    } else if (role === 'Bot') {
      return 'badge badge-outline-youtube';
    } else if (role === 'Banned') {
      return 'badge badge-outline-steam';
    } else {
      return 'badge badge-outline-twitch';
    }
  }

  getUserRoleColor(role) {
    if (role === 'Broadcaster') {
      return 'badge badge-pc';
    } else if (role === 'Bot') {
      return 'badge badge-youtube';
    } else if (role === 'Banned') {
      return 'badge badge-steam';
    } else {
      return 'badge badge-twitch';
    }
  }

}
