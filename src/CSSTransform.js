class CSSTransform {
  constructor (transformString) {
    this.transformObj = null;
    this.parse(transformString);
  }

  parse (transformString) {
    this.transformObj = transformString;
  }

  toString () {
    return this.transformObj;
  }
}

export { CSSTransform };
