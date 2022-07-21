import { CSSTransform } from "../src/CSSTransform";

test("Can create CSSTransform object", () => {
  const CSSTransformObject = new CSSTransform();
  expect(CSSTransformObject).toBeInstanceOf(CSSTransform);
});

test("Can use constructor", () => {
  const transformValue = "test value";
  const CSSTransformObject = new CSSTransform(transformValue);

  expect(CSSTransformObject.toString()).toBe(transformValue);
});

test("Can use methods", () => {
  const transformValue = "test value";
  const CSSTransformObject = new CSSTransform();

  CSSTransformObject.parse(transformValue);

  expect(CSSTransformObject.toString()).toBe(transformValue);
});
