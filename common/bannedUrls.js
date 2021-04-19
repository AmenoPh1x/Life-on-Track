/*
 * At this moment creating a DAO looks a bit overkill. This class could be modied to make it more closed to
 * moficiations by using another class depending on the resource we want to use (localStorage, API, ...).
 */
class bannedUrls {
  bannedUrls = new Array();

  searchBannedUrls(name) {
    // JSON.parse(localStorage.getItem('bannedUrls')).filter();
  }

  getAllBannedUrls() {
    if (!this.bannedUrls.length) {
      this.bannedUrls = JSON.parse(localStorage.getItem("bannedUrls"));
    }
    return this.bannedUrls;
  }

  addBannedUrl(newUrl) { // Do we want to throw an exception here in order to notify the user?
    let index = this.findPositionForNewElement(newUrl);
    if (this.bannedUrls[index] != newUrl) {
        this.bannedUrls.splice(index, 0, newUrl);
    }
    this.persist();
  }

  editBannedUrl(index, newUrl) {
    this.bannedUrls[index] = newUrl;
    this.persist();
  }

  deleteBannedUrl(index) {
    bannedUrls.splice(index, 1);
    this.persist();
  }

  persist() {
    localStorage.setItem("bannedUrls", JSON.stringify(bannedUrls));
  }

  findPositionForNewElement(newElement) {
    if (!this.bannedUrls.length) return 0;
    return this.findPositionRecursivity(newElement, 0, this.bannedUrls.length - 1);
  }

  /*
   * Both start and end are inclusive.
   *
   * We want to find a position in which the new element is the same than the one we want to insert, or if it doesn't
   * the element, find the first element that is greater than the element (in other words, the first element that is
   * greater than the new element, and the previous element is lower than the new element).
   *
   * Edge cases: first position, final positon, mid position
   */
  findPositionRecursivity(newElement, start, end) {
    if (end == start) return start;
    if (newElement.localeCompare(this.bannedUrls[start]) <= 0) return start;
    if (newElement.localeCompare(this.bannedUrls[end]) >= 0) return end;
    let midPosition = Math.floor(end - start) / 2 + start;
    if (newElement == this.bannedUrls[midPosition]) return midPosition;
    if (newElement.localeCompare(this.bannedUrls[midPosition]) > 0)
      return findPositionRecursivity(newElement, midPosition + 1, end);
    if (newElement.localeCompare(this.bannedUrls[midPosition]) < 0)
      return findPositionRecursivity(newElement, start, midPosition - 1);
  }
}
