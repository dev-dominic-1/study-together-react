export default class Favorite {
  imageName!: string;
  altText!: string;

  constructor(imageName: string, altText: string) {
    this.imageName = imageName;
    this.altText = altText;
  }
}
