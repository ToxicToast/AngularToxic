export class SessionStorage {

  private storageKey: string;

  constructor(storageKey) {
    this.storageKey = storageKey;
  }

  getItem() {
    return localStorage.getItem(this.storageKey);
  }

  removeItem(): void {
    localStorage.removeItem(this.storageKey);
  }

  addItem(data): void {
    localStorage.setItem(this.storageKey, data);
  }

  hasItem() {
    const data = this.getItem();
    if (data) {
      return true;
    } else {
      return false;
    }
  }
}
