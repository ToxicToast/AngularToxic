export class SessionStorage {

  private storageKey: string;

  constructor(storageKey) {
    this.storageKey = storageKey;
  }

  getItem() {
    return sessionStorage.getItem(this.storageKey);
  }

  removeItem(): void {
    sessionStorage.removeItem(this.storageKey);
  }

  addItem(data): void {
    sessionStorage.setItem(this.storageKey, data);
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
